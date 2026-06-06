// Game State
let gameState = {
    mode: 'classic', // 'classic' or 'scout'
    round: 0,
    roster: {},
    usedDecades: [],
    teamSkips: 2,
    eraRerolls: 2,
    currentSpin: null,
    positionOrder: ['QB', 'RB', 'WR1', 'WR2', 'TE', 'EDGE', 'DB'],
};

// Screen management
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startGame(mode) {
    gameState = {
        mode,
        round: 0,
        roster: {},
        usedDecades: [],
        teamSkips: 2,
        eraRerolls: 2,
        currentSpin: null,
        positionOrder: ['QB', 'RB', 'WR1', 'WR2', 'TE', 'EDGE', 'DB'],
    };
    showScreen('draft-screen');
    resetRosterUI();
    nextRound();
}

function showHowToPlay() {
    document.getElementById('how-to-play-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('how-to-play-modal').classList.remove('active');
}

function resetRosterUI() {
    document.querySelectorAll('.roster-slot').forEach(slot => {
        slot.classList.remove('filled', 'active');
        slot.querySelector('.slot-player').textContent = '—';
        slot.querySelector('.slot-meta').textContent = '';
    });
    document.getElementById('team-skip-count').textContent = '2';
    document.getElementById('era-skip-count').textContent = '2';
    document.getElementById('team-skip-btn').disabled = false;
    document.getElementById('era-skip-btn').disabled = false;
}

// Draft Logic
function nextRound() {
    if (gameState.round >= 7) {
        runSimulation();
        return;
    }

    const position = gameState.positionOrder[gameState.round];
    document.getElementById('round-num').textContent = gameState.round + 1;
    document.getElementById('position-badge').textContent = position === 'WR1' || position === 'WR2' ? 'WR' : position;

    // Highlight active slot
    document.querySelectorAll('.roster-slot').forEach(s => s.classList.remove('active'));
    const activeSlot = document.querySelector(`[data-position="${position}"]`);
    if (activeSlot) activeSlot.classList.add('active');

    // Hide choices
    document.getElementById('choices-area').classList.remove('visible');

    // Spin
    spinForPlayers(position);
}

function spinForPlayers(position) {
    const spin = getRandomTeamForPosition(position, gameState.usedDecades);
    if (!spin) {
        // Extremely unlikely fallback
        gameState.round++;
        nextRound();
        return;
    }

    gameState.currentSpin = spin;

    // Animate spin
    const franchiseReel = document.getElementById('franchise-reel');
    const decadeReel = document.getElementById('decade-reel');

    franchiseReel.classList.remove('landed');
    decadeReel.classList.remove('landed');
    franchiseReel.classList.add('spinning');
    decadeReel.classList.add('spinning');

    // Rapid name cycling
    let spinCount = 0;
    const spinInterval = setInterval(() => {
        franchiseReel.querySelector('.spin-value').textContent = TEAMS[Math.floor(Math.random() * TEAMS.length)];
        decadeReel.querySelector('.spin-value').textContent = DECADES[Math.floor(Math.random() * DECADES.length)];
        spinCount++;
    }, 60);

    // Land franchise first
    setTimeout(() => {
        franchiseReel.classList.remove('spinning');
        franchiseReel.classList.add('landed');
        franchiseReel.querySelector('.spin-value').textContent = spin.team;
    }, 800);

    // Land decade second
    setTimeout(() => {
        clearInterval(spinInterval);
        decadeReel.classList.remove('spinning');
        decadeReel.classList.add('landed');
        decadeReel.querySelector('.spin-value').textContent = spin.decade;

        // Show player choices
        setTimeout(() => showChoices(spin, position), 300);
    }, 1200);
}

function showChoices(spin, position) {
    const container = document.getElementById('player-cards');
    container.innerHTML = '';

    // Shuffle and limit to 5
    const players = [...spin.players].sort(() => Math.random() - 0.5).slice(0, 5);

    players.forEach((player, idx) => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.style.animationDelay = `${idx * 0.08}s`;
        card.onclick = () => selectPlayer(player, position, spin.decade);

        let statsHtml = '';
        if (gameState.mode === 'classic') {
            const statEntries = Object.entries(player.stats);
            statsHtml = `<div class="player-stats">${statEntries.map(([key, val]) =>
                `<span>${key.toUpperCase()}: ${val}</span>`
            ).join('')}</div>`;
        }

        let badgesHtml = '';
        if (player.badges.length > 0) {
            badgesHtml = `<div class="player-badges">${player.badges.map(b => {
                const cls = b === 'HOF' ? 'badge-hof' : b === 'MVP' || b === 'SB MVP' ? 'badge-mvp' : 'badge-allpro';
                return `<span class="badge ${cls}">${b}</span>`;
            }).join('')}</div>`;
        }

        const teamLabel = `<span class="player-team">${player.team}</span>`;
        card.innerHTML = `
            <div class="player-card-info">
                <span class="player-name">${player.name} ${teamLabel}</span>
                ${statsHtml}
            </div>
            ${badgesHtml}
        `;

        container.appendChild(card);
    });

    document.getElementById('choices-area').classList.add('visible');
}

function selectPlayer(player, position, decade) {
    // Update roster
    gameState.roster[position] = player;
    gameState.usedDecades.push(decade);

    // Update roster slot UI
    const slot = document.querySelector(`[data-position="${position}"]`);
    slot.classList.remove('active');
    slot.classList.add('filled');
    slot.querySelector('.slot-player').textContent = player.name;
    slot.querySelector('.slot-meta').textContent = `${decade} ${player.team}`;

    // Next round
    gameState.round++;
    setTimeout(nextRound, 400);
}

// Skip System
function useTeamSkip() {
    if (gameState.teamSkips <= 0 || !gameState.currentSpin) return;
    gameState.teamSkips--;
    document.getElementById('team-skip-count').textContent = gameState.teamSkips;
    if (gameState.teamSkips <= 0) {
        document.getElementById('team-skip-btn').disabled = true;
    }

    const position = gameState.positionOrder[gameState.round];
    document.getElementById('choices-area').classList.remove('visible');
    spinForPlayers(position);
}

function useEraSkip() {
    if (gameState.eraRerolls <= 0 || !gameState.currentSpin) return;
    gameState.eraRerolls--;
    document.getElementById('era-skip-count').textContent = gameState.eraRerolls;
    if (gameState.eraRerolls <= 0) {
        document.getElementById('era-skip-btn').disabled = true;
    }

    const position = gameState.positionOrder[gameState.round];
    document.getElementById('choices-area').classList.remove('visible');
    spinForPlayers(position);
}

// Simulation
function runSimulation() {
    showScreen('sim-screen');

    const engine = new SimulationEngine(gameState.roster);
    const result = engine.simulateSeason();

    // Animate simulation
    const weeksContainer = document.getElementById('sim-weeks');
    weeksContainer.innerHTML = '';
    const simBar = document.getElementById('sim-bar');

    result.weeks.forEach((w, i) => {
        const weekEl = document.createElement('div');
        weekEl.className = 'sim-week';
        weekEl.textContent = `WK${i + 1} ${w}`;
        weeksContainer.appendChild(weekEl);
    });

    let weekIdx = 0;
    const revealInterval = setInterval(() => {
        if (weekIdx >= 17) {
            clearInterval(revealInterval);
            setTimeout(() => showResults(result), 800);
            return;
        }

        const weekEl = weeksContainer.children[weekIdx];
        weekEl.classList.add('revealed');
        weekEl.classList.add(result.weeks[weekIdx] === 'W' ? 'win' : 'loss');
        simBar.style.width = `${((weekIdx + 1) / 17) * 100}%`;
        weekIdx++;
    }, 150);
}

function showResults(result) {
    showScreen('results-screen');

    const recordReveal = document.getElementById('record-reveal');
    document.getElementById('record-wins').textContent = result.wins;
    document.getElementById('record-losses').textContent = result.losses;

    if (result.wins === 17) {
        recordReveal.classList.add('perfect');
        document.getElementById('record-subtitle').textContent = 'PERFECT SEASON';
        launchConfetti();
    } else if (result.wins >= 15) {
        document.getElementById('record-subtitle').textContent = 'ELITE SEASON';
    } else if (result.wins >= 12) {
        document.getElementById('record-subtitle').textContent = 'PLAYOFF CONTENDER';
    } else if (result.wins >= 9) {
        document.getElementById('record-subtitle').textContent = 'DECENT SQUAD';
    } else {
        document.getElementById('record-subtitle').textContent = 'REBUILD MODE';
    }

    // Roster display
    const rosterContainer = document.getElementById('results-roster');
    rosterContainer.innerHTML = '';
    gameState.positionOrder.forEach(pos => {
        const player = gameState.roster[pos];
        if (!player) return;
        const item = document.createElement('div');
        item.className = 'results-roster-item';
        const displayPos = pos === 'WR1' || pos === 'WR2' ? 'WR' : pos;
        item.innerHTML = `
            <span class="results-pos">${displayPos}</span>
            <span class="results-player-name">${player.name}</span>
            <span class="results-player-meta">${player.decade} ${player.team}</span>
        `;
        rosterContainer.appendChild(item);
    });

    // Bonuses display
    const bonusContainer = document.getElementById('results-bonuses');
    bonusContainer.innerHTML = '';

    result.synergies.forEach(s => {
        const el = document.createElement('div');
        el.className = 'bonus-item';
        el.textContent = `${s.label} ${s.bonus}`;
        bonusContainer.appendChild(el);
    });

    result.penalties.forEach(p => {
        const el = document.createElement('div');
        el.className = 'bonus-item penalty';
        el.textContent = `${p.label} ${p.value}`;
        bonusContainer.appendChild(el);
    });
}

// Share
function shareResults() {
    let text = `17-0\n\n`;
    gameState.positionOrder.forEach(pos => {
        const player = gameState.roster[pos];
        if (!player) return;
        const displayPos = pos === 'WR1' || pos === 'WR2' ? 'WR' : pos;
        text += `${displayPos}: ${player.name} (${player.decade} ${player.team})\n`;
    });

    const wins = document.getElementById('record-wins').textContent;
    const losses = document.getElementById('record-losses').textContent;
    text += `\nRecord: ${wins}-${losses}`;
    text += `\n\nCan you go 17-0?`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!');
        });
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard!');
    }
}

function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
}

function playAgain() {
    document.getElementById('record-reveal').classList.remove('perfect');
    showScreen('landing-screen');
}

// Confetti
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff3d3d', '#ffd700', '#00e676', '#6495ed', '#ff6b35', '#ffffff'];

    for (let i = 0; i < 200; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * 200,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1,
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        particles.forEach(p => {
            if (p.opacity <= 0) return;
            active = true;

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.rotation += p.rotationSpeed;

            if (frame > 60) {
                p.opacity -= 0.005;
            }

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        frame++;
        if (active && frame < 300) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// Keyboard shortcut: ESC closes modals
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
