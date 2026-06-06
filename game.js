let state = {
    mode: 'classic',
    round: 0,
    roster: {},
    usedDecades: [],
    skips: 2,
    rerolls: 2,
    currentSpin: null,
    spinning: false,
    posOrder: ['QB', 'RB', 'WR1', 'WR2', 'TE', 'EDGE', 'DB'],
};

// Screens
function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Landing
function startGame(mode) {
    state = {
        mode,
        round: 0,
        roster: {},
        usedDecades: [],
        skips: 2,
        rerolls: 2,
        currentSpin: null,
        spinning: false,
        posOrder: ['QB', 'RB', 'WR1', 'WR2', 'TE', 'EDGE', 'DB'],
    };
    show('draft-screen');
    resetDraftUI();
}

function resetDraftUI() {
    // Reset mini slots
    document.querySelectorAll('.mini-slot').forEach((s, i) => {
        s.classList.remove('filled', 'active');
        if (i === 0) s.classList.add('active');
    });

    // Reset spin display to default (49ers x 1980s)
    document.getElementById('franchise-val').textContent = '49ers';
    document.getElementById('decade-val').textContent = '1980s';
    document.getElementById('franchise-val').classList.remove('landed', 'spinning');
    document.getElementById('decade-val').classList.remove('landed', 'spinning');

    // Reset buttons
    document.getElementById('skip-btn').disabled = true;
    document.getElementById('reroll-btn').disabled = true;
    document.getElementById('spin-btn').disabled = false;
    document.getElementById('skip-count').textContent = '2';
    document.getElementById('reroll-count').textContent = '2';

    // Hide picks
    document.getElementById('picks-zone').classList.remove('visible');

    // Show spin zone
    document.getElementById('spin-zone').style.display = '';
}

// Spin
function doSpin() {
    if (state.spinning) return;
    state.spinning = true;

    const pos = state.posOrder[state.round];
    const spin = getRandomTeamForPosition(pos, state.usedDecades);
    if (!spin) return;

    state.currentSpin = spin;

    // Hide picks from previous round
    document.getElementById('picks-zone').classList.remove('visible');

    // Disable spin button during animation
    document.getElementById('spin-btn').disabled = true;

    const franchiseEl = document.getElementById('franchise-val');
    const decadeEl = document.getElementById('decade-val');

    franchiseEl.classList.remove('landed');
    decadeEl.classList.remove('landed');
    franchiseEl.classList.add('spinning');
    decadeEl.classList.add('spinning');

    // Rapid cycling
    let count = 0;
    const cycle = setInterval(() => {
        franchiseEl.textContent = TEAMS[Math.floor(Math.random() * TEAMS.length)];
        decadeEl.textContent = DECADES[Math.floor(Math.random() * DECADES.length)];
        count++;
    }, 50);

    // Land franchise
    setTimeout(() => {
        franchiseEl.classList.remove('spinning');
        franchiseEl.classList.add('landed');
        franchiseEl.textContent = spin.team;
    }, 700);

    // Land decade
    setTimeout(() => {
        clearInterval(cycle);
        decadeEl.classList.remove('spinning');
        decadeEl.classList.add('landed');
        decadeEl.textContent = spin.decade;

        state.spinning = false;

        // Enable skip/reroll
        document.getElementById('skip-btn').disabled = state.skips <= 0;
        document.getElementById('reroll-btn').disabled = state.rerolls <= 0;

        // Show picks after short delay
        setTimeout(() => showPicks(spin, pos), 250);
    }, 1100);
}

function showPicks(spin, position) {
    const zone = document.getElementById('picks-zone');
    const list = document.getElementById('picks-list');
    const posLabel = document.getElementById('picks-pos');
    const eraLabel = document.getElementById('picks-era');

    const displayPos = position === 'WR1' || position === 'WR2' ? 'WR' : position;
    posLabel.textContent = `PICK ${state.round + 1}/7 — ${displayPos}`;
    eraLabel.textContent = `${spin.decade}`;

    list.innerHTML = '';

    const players = [...spin.players].sort(() => Math.random() - 0.5).slice(0, 5);

    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'pick-card';
        card.onclick = () => pickPlayer(player, position, spin.decade);

        let statsHtml = '';
        if (state.mode === 'classic') {
            const entries = Object.entries(player.stats);
            statsHtml = `<div class="pick-stats">${entries.map(([k, v]) => `${k}: ${v}`).join(' · ')}</div>`;
        }

        let badgesHtml = '';
        if (player.badges.length > 0) {
            badgesHtml = `<div class="pick-right">${player.badges.map(b => {
                let cls = 'badge-ap';
                if (b === 'HOF') cls = 'badge-hof';
                else if (b === 'MVP' || b === 'SB MVP') cls = 'badge-mvp';
                else if (b === 'DPOY') cls = 'badge-dpoy';
                return `<span class="badge ${cls}">${b}</span>`;
            }).join('')}</div>`;
        }

        card.innerHTML = `
            <div class="pick-left">
                <span class="pick-name">${player.name}</span>
                <span class="pick-team">${player.team}</span>
                ${statsHtml}
            </div>
            ${badgesHtml}
        `;

        list.appendChild(card);
    });

    zone.classList.add('visible');
}

function pickPlayer(player, position, decade) {
    state.roster[position] = player;
    state.usedDecades.push(decade);

    // Update mini slot
    const slots = document.querySelectorAll('.mini-slot');
    slots[state.round].classList.remove('active');
    slots[state.round].classList.add('filled');

    state.round++;

    if (state.round >= 7) {
        // All picks done — simulate
        setTimeout(runSim, 400);
        return;
    }

    // Mark next slot active
    slots[state.round].classList.add('active');

    // Hide picks, show spin button for next round
    document.getElementById('picks-zone').classList.remove('visible');
    document.getElementById('spin-btn').disabled = false;
    document.getElementById('skip-btn').disabled = true;
    document.getElementById('reroll-btn').disabled = true;

    // Reset spin display
    document.getElementById('franchise-val').classList.remove('landed');
    document.getElementById('decade-val').classList.remove('landed');
}

// Skips and rerolls
function useSkip() {
    if (state.skips <= 0 || state.spinning || !state.currentSpin) return;
    state.skips--;
    document.getElementById('skip-count').textContent = state.skips;
    document.getElementById('picks-zone').classList.remove('visible');
    document.getElementById('spin-btn').disabled = false;
    document.getElementById('skip-btn').disabled = true;
    document.getElementById('reroll-btn').disabled = true;
    document.getElementById('franchise-val').classList.remove('landed');
    document.getElementById('decade-val').classList.remove('landed');
}

function useReroll() {
    if (state.rerolls <= 0 || state.spinning || !state.currentSpin) return;
    state.rerolls--;
    document.getElementById('reroll-count').textContent = state.rerolls;
    document.getElementById('picks-zone').classList.remove('visible');
    // Auto-spin again
    doSpin();
}

// Simulation
function runSim() {
    show('sim-screen');

    const engine = new SimulationEngine(state.roster);
    const result = engine.simulateSeason();

    const grid = document.getElementById('sim-grid');
    const bar = document.getElementById('sim-bar');
    grid.innerHTML = '';
    bar.style.width = '0%';

    result.weeks.forEach((w, i) => {
        const el = document.createElement('div');
        el.className = 'sim-week';
        el.textContent = `W${i + 1} ${w}`;
        grid.appendChild(el);
    });

    let idx = 0;
    const interval = setInterval(() => {
        if (idx >= 17) {
            clearInterval(interval);
            setTimeout(() => showResults(result), 600);
            return;
        }
        const el = grid.children[idx];
        el.classList.add('show', result.weeks[idx]);
        bar.style.width = `${((idx + 1) / 17) * 100}%`;
        idx++;
    }, 130);
}

function showResults(result) {
    show('results-screen');

    const record = document.getElementById('result-record');
    document.getElementById('rr-wins').textContent = result.wins;
    document.getElementById('rr-losses').textContent = result.losses;

    record.classList.remove('perfect');
    if (result.wins === 17) {
        record.classList.add('perfect');
        document.getElementById('result-label').textContent = 'PERFECT SEASON';
        launchConfetti();
    } else if (result.wins >= 15) {
        document.getElementById('result-label').textContent = 'ELITE SEASON';
    } else if (result.wins >= 12) {
        document.getElementById('result-label').textContent = 'PLAYOFF TEAM';
    } else if (result.wins >= 9) {
        document.getElementById('result-label').textContent = 'MIDDLE OF THE PACK';
    } else {
        document.getElementById('result-label').textContent = 'REBUILD MODE';
    }

    // Roster
    const rosterEl = document.getElementById('result-roster');
    rosterEl.innerHTML = '';
    state.posOrder.forEach(pos => {
        const p = state.roster[pos];
        if (!p) return;
        const displayPos = pos === 'WR1' || pos === 'WR2' ? 'WR' : pos;
        const item = document.createElement('div');
        item.className = 'rr-item';
        item.innerHTML = `
            <span class="rr-pos">${displayPos}</span>
            <span class="rr-name">${p.name}</span>
            <span class="rr-meta">${p.decade} ${p.team}</span>
        `;
        rosterEl.appendChild(item);
    });

    // Bonuses
    const bonusEl = document.getElementById('result-bonuses');
    bonusEl.innerHTML = '';
    result.synergies.forEach(s => {
        const el = document.createElement('div');
        el.className = 'bonus-line';
        el.textContent = `+ ${s.label} (${s.bonus})`;
        bonusEl.appendChild(el);
    });
    result.penalties.forEach(p => {
        const el = document.createElement('div');
        el.className = 'bonus-line neg';
        el.textContent = `${p.label} (${p.value})`;
        bonusEl.appendChild(el);
    });
}

// Share
function shareResults() {
    let text = '17–0\n\n';
    state.posOrder.forEach(pos => {
        const p = state.roster[pos];
        if (!p) return;
        const dp = pos === 'WR1' || pos === 'WR2' ? 'WR' : pos;
        text += `${dp}: ${p.name} (${p.decade} ${p.team})\n`;
    });
    const w = document.getElementById('rr-wins').textContent;
    const l = document.getElementById('rr-losses').textContent;
    text += `\n${w}–${l}\n\nCan you go 17-0? 17-0game.com`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard'));
    } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        toast('Copied to clipboard');
    }
}

function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
        el = document.createElement('div');
        el.className = 'toast';
        document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2500);
}

function playAgain() {
    show('landing-screen');
}

// Modals
function showInfo() {
    document.getElementById('info-modal').classList.add('active');
}

function closeInfoModal() {
    document.getElementById('info-modal').classList.remove('active');
}

function showRules() {
    document.getElementById('rules-modal').classList.add('active');
}

function closeRulesModal() {
    document.getElementById('rules-modal').classList.remove('active');
}

// Confetti
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff4136', '#ffdc00', '#2ecc40', '#7fdbff', '#ff851b', '#ffffff'];

    for (let i = 0; i < 180; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * 300,
            w: Math.random() * 8 + 4,
            h: Math.random() * 5 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 3,
            vy: Math.random() * 3 + 1.5,
            rot: Math.random() * 360,
            rotV: (Math.random() - 0.5) * 8,
            opacity: 1,
        });
    }

    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        particles.forEach(p => {
            if (p.opacity <= 0) return;
            alive = true;
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.04;
            p.rot += p.rotV;
            if (frame > 80) p.opacity -= 0.006;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rot * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, p.opacity);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });

        frame++;
        if (alive && frame < 350) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    draw();
}

// ESC to close modals
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeInfoModal();
        closeRulesModal();
    }
});
