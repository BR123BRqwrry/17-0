let state = {
    mode: 'classic',
    round: 0,
    roster: {},
    usedDecades: [],
    rerolls: 2,
    currentSpin: null,
    selectedPlayer: null,
    spinning: false,
    hasSpun: false,
};

const POS_ORDER = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'OL', 'EDGE', 'DB'];

function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startGame(mode) {
    state = {
        mode,
        round: 0,
        roster: {},
        usedDecades: [],
        rerolls: 2,
        currentSpin: null,
        selectedPlayer: null,
        spinning: false,
        hasSpun: false,
    };
    show('draft-screen');
    resetDraft();
}

function resetDraft() {
    // Reset pills to default
    document.getElementById('pill-team').textContent = '49ers';
    document.getElementById('pill-era').textContent = '1980s';
    document.getElementById('topbar-round').textContent = 'Round 1/7';

    // Reset field slots
    document.querySelectorAll('.field-slot').forEach(s => {
        s.classList.remove('filled', 'highlight');
        s.querySelector('.slot-name').textContent = '';
    });

    // Show spin overlay, hide player list
    document.getElementById('spin-overlay').classList.remove('hidden');
    document.getElementById('player-list').innerHTML = '';
    document.getElementById('player-count').textContent = '';
    document.getElementById('placement-msg').textContent = 'Click a player, then a position';

    // No reroll button anymore

    // Reset filters
    document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
    document.querySelector('.ftab[data-filter="All"]').classList.add('active');
    document.getElementById('search-input').value = '';
}

// Spin
function doSpin() {
    if (state.spinning) return;
    state.spinning = true;
    state.hasSpun = true;

    const spin = getRandomTeamForPosition('ALL', state.usedDecades);
    if (!spin) { state.spinning = false; return; }
    state.currentSpin = spin;

    const teamEl = document.getElementById('pill-team');
    const eraEl = document.getElementById('pill-era');

    let count = 0;
    const cycle = setInterval(() => {
        teamEl.textContent = TEAMS[Math.floor(Math.random() * TEAMS.length)];
        eraEl.textContent = DECADES[Math.floor(Math.random() * DECADES.length)];
        count++;
    }, 50);

    setTimeout(() => {
        clearInterval(cycle);
        teamEl.textContent = spin.team;
        eraEl.textContent = spin.decade;
        state.spinning = false;

        // Hide spin overlay, show players
        document.getElementById('spin-overlay').classList.add('hidden');
        renderPlayers();
    }, 900);
}

function getAllPlayersForSpin() {
    if (!state.currentSpin) return [];
    const { team, decade } = state.currentSpin;
    return PLAYER_DB.filter(p => p.team === team && p.decade === decade);
}

function renderPlayers() {
    const players = getAllPlayersForSpin();
    const filter = document.querySelector('.ftab.active')?.dataset.filter || 'All';
    const search = document.getElementById('search-input').value.toLowerCase();
    let filtered = players;

    if (filter !== 'All') {
        filtered = filtered.filter(p => {
            if (filter === 'WR') return p.pos.includes('WR1') || p.pos.includes('WR2');
            if (filter === 'OL') return p.pos.includes('OL');
            return p.pos.includes(filter);
        });
    }

    if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
    }

    filtered.sort((a, b) => a.name.localeCompare(b.name));

    document.getElementById('player-count').textContent = `${filtered.length} players available`;

    const list = document.getElementById('player-list');
    list.innerHTML = '';

    filtered.forEach(player => {
        const row = document.createElement('div');
        row.className = 'p-row';
        row.onclick = () => selectPlayer(player, row);

        const posLabel = player.pos.map(p => p.replace('1', '').replace('2', '')).filter((v, i, a) => a.indexOf(v) === i).join(' · ');

        let badgesHtml = '';
        if (player.badges.length > 0) {
            badgesHtml = `<div class="p-badges">${player.badges.map(b => {
                let cls = 'b-ap';
                if (b === 'HOF') cls = 'b-hof';
                else if (b === 'MVP' || b === 'SB MVP') cls = 'b-mvp';
                else if (b === 'DPOY') cls = 'b-dpoy';
                return `<span class="badge ${cls}">${b}</span>`;
            }).join('')}</div>`;
        }

        row.innerHTML = `
            <div class="p-info">
                <span class="p-name">${player.name}</span>
                <span class="p-meta">${posLabel} · ${state.currentSpin.team} · ${state.currentSpin.decade}</span>
                ${badgesHtml}
            </div>
        `;

        list.appendChild(row);
    });
}

function selectPlayer(player, rowEl) {
    state.selectedPlayer = player;

    // Highlight row
    document.querySelectorAll('.p-row').forEach(r => r.classList.remove('selected'));
    rowEl.classList.add('selected');

    // Highlight valid field slots
    const validSlots = getValidSlots(player);
    document.querySelectorAll('.field-slot').forEach(s => {
        s.classList.remove('highlight');
        if (validSlots.includes(s.dataset.pos) && !s.classList.contains('filled')) {
            s.classList.add('highlight');
        }
    });

    document.getElementById('placement-msg').textContent = `Placing: ${player.name} — click a field position`;
}

function getValidSlots(player) {
    const slots = [];
    player.pos.forEach(p => {
        if (p === 'WR1' || p === 'WR2') {
            if (!state.roster['WR1']) slots.push('WR1');
            if (!state.roster['WR2']) slots.push('WR2');
        } else if (p === 'OL') {
            if (!state.roster['OL']) slots.push('OL');
        } else {
            if (!state.roster[p]) slots.push(p);
        }
    });
    return [...new Set(slots)];
}

// Field slot click
document.addEventListener('click', (e) => {
    const slot = e.target.closest('.field-slot');
    if (!slot) return;
    if (slot.classList.contains('filled')) return;
    if (!state.selectedPlayer) return;

    const pos = slot.dataset.pos;
    const validSlots = getValidSlots(state.selectedPlayer);
    if (!validSlots.includes(pos)) return;

    placePlayer(state.selectedPlayer, pos);
});

function placePlayer(player, pos) {
    state.roster[pos] = player;
    state.usedDecades.push(state.currentSpin.decade);
    state.round++;
    state.selectedPlayer = null;

    // Update slot
    const slot = document.getElementById(`slot-${pos}`);
    slot.classList.add('filled');
    slot.classList.remove('highlight');
    slot.querySelector('.slot-name').textContent = player.name;

    // Remove highlights
    document.querySelectorAll('.field-slot').forEach(s => s.classList.remove('highlight'));

    // Check if done (8 positions now)
    if (state.round >= 8) {
        setTimeout(runSim, 500);
        return;
    }

    // Update round
    document.getElementById('topbar-round').textContent = `Round ${state.round + 1}/8`;

    // Show spin overlay for next round
    document.getElementById('spin-overlay').classList.remove('hidden');
    document.getElementById('player-list').innerHTML = '';
    document.getElementById('player-count').textContent = '';
    document.getElementById('placement-msg').textContent = 'Click a player, then a position';
    document.getElementById('search-input').value = '';
}

// Filter tabs
document.getElementById('filter-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('.ftab');
    if (!tab) return;
    document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    if (state.hasSpun && state.currentSpin) renderPlayers();
});

function filterPlayers() {
    if (state.hasSpun && state.currentSpin) renderPlayers();
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
        el.className = 'sim-wk';
        el.textContent = `W${i + 1} ${w}`;
        grid.appendChild(el);
    });

    let idx = 0;
    const interval = setInterval(() => {
        if (idx >= 17) { clearInterval(interval); setTimeout(() => showResults(result), 500); return; }
        grid.children[idx].classList.add('show', result.weeks[idx]);
        bar.style.width = `${((idx + 1) / 17) * 100}%`;
        idx++;
    }, 120);
}

function showResults(result) {
    show('results-screen');
    const rec = document.getElementById('result-record');
    document.getElementById('rr-w').textContent = result.wins;
    document.getElementById('rr-l').textContent = result.losses;

    rec.classList.remove('perfect');
    if (result.wins === 17) { rec.classList.add('perfect'); document.getElementById('result-sub').textContent = 'PERFECT SEASON'; launchConfetti(); }
    else if (result.wins >= 15) document.getElementById('result-sub').textContent = 'ELITE SEASON';
    else if (result.wins >= 12) document.getElementById('result-sub').textContent = 'PLAYOFF TEAM';
    else if (result.wins >= 9) document.getElementById('result-sub').textContent = 'MIDDLE OF THE PACK';
    else document.getElementById('result-sub').textContent = 'REBUILD MODE';

    const roster = document.getElementById('result-roster');
    roster.innerHTML = '';
    POS_ORDER.forEach(pos => {
        const p = state.roster[pos];
        if (!p) return;
        const dp = pos.replace('1', '').replace('2', '');
        roster.innerHTML += `<div class="rr-item"><span class="rr-pos">${dp}</span><span class="rr-name">${p.name}</span><span class="rr-meta">${state.usedDecades[POS_ORDER.indexOf(pos)]} ${p.team}</span></div>`;
    });

    const bonuses = document.getElementById('result-bonuses');
    bonuses.innerHTML = '';
    result.synergies.forEach(s => { bonuses.innerHTML += `<div class="bonus-line">+ ${s.label} (${s.bonus})</div>`; });
    result.penalties.forEach(p => { bonuses.innerHTML += `<div class="bonus-line neg">${p.label} (${p.value})</div>`; });
}

function shareResults() {
    let text = '17–0\n\n';
    POS_ORDER.forEach((pos, i) => {
        const p = state.roster[pos];
        if (!p) return;
        const dp = pos.replace('1', '').replace('2', '');
        text += `${dp}: ${p.name} (${state.usedDecades[i]} ${p.team})\n`;
    });
    text += `\n${document.getElementById('rr-w').textContent}–${document.getElementById('rr-l').textContent}\n\nCan you go 17-0? 17-0game.com`;

    if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard'));
    else { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); toast('Copied to clipboard'); }
}

function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2500);
}

function playAgain() { show('landing-screen'); }

function confirmExit() {
    if (confirm('Are you sure you want to exit? Your draft progress will be lost.')) {
        show('landing-screen');
    }
}

// Modals
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
    }
});

// Confetti
function launchConfetti() {
    const c = document.getElementById('confetti-canvas');
    const ctx = c.getContext('2d');
    c.width = window.innerWidth; c.height = window.innerHeight;
    const ps = [], cols = ['#e85d2a', '#ffd700', '#27c97b', '#4fc3f7', '#ff851b', '#ffffff'];
    for (let i = 0; i < 180; i++) ps.push({ x: Math.random()*c.width, y: -20-Math.random()*300, w: Math.random()*8+4, h: Math.random()*5+2, color: cols[Math.floor(Math.random()*cols.length)], vx: (Math.random()-0.5)*3, vy: Math.random()*3+1.5, r: Math.random()*360, rv: (Math.random()-0.5)*8, o: 1 });
    let f = 0;
    (function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        let alive = false;
        ps.forEach(p => { if (p.o <= 0) return; alive = true; p.x += p.vx; p.y += p.vy; p.vy += 0.04; p.r += p.rv; if (f > 80) p.o -= 0.006; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r*Math.PI/180); ctx.globalAlpha = Math.max(0, p.o); ctx.fillStyle = p.color; ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h); ctx.restore(); });
        f++;
        if (alive && f < 350) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, c.width, c.height);
    })();
}
