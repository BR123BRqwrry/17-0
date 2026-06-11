let state = {
    gameMode: 'nfl',
    mode: 'scout',
    round: 0,
    roster: {},
    usedEras: [],
    usedTeamEras: [],
    rerolls: 2,
    currentSpin: null,
    selectedPlayer: null,
    spinning: false,
    hasSpun: false,
};

let selectedGameMode = 'nfl';

function selectMode(mode) {
    selectedGameMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.mode-${mode}`).classList.add('active');
}

function getTeams() {
    return state.gameMode === 'cfb' ? CFB_TEAMS : TEAMS;
}

function getEras() {
    return state.gameMode === 'cfb' ? CFB_YEARS : DECADES;
}

function getPlayerDB() {
    return state.gameMode === 'cfb' ? CFB_PLAYER_DB : PLAYER_DB;
}

function getSynergies() {
    return state.gameMode === 'cfb' ? CFB_SYNERGIES : SYNERGIES;
}

function getEraKey(player) {
    return state.gameMode === 'cfb' ? player.year : player.decade;
}

function getPosOrder() {
    return ['QB', 'RB', 'WR1', 'WR2', 'TE', 'OL', 'EDGE', 'DB'];
}

const POS_ORDER = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'OL', 'EDGE', 'DB'];

function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startGame() {
    state = {
        gameMode: selectedGameMode,
        mode: 'scout',
        round: 0,
        roster: {},
        usedEras: [],
        usedTeamEras: [],
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
    const teams = getTeams();
    const eras = getEras();
    const totalRounds = getPosOrder().length;

    // Reset pills to default
    document.getElementById('pill-team').textContent = teams[0] || 'Team';
    document.getElementById('pill-era').textContent = state.gameMode === 'cfb' ? eras[0] : eras[0];
    document.getElementById('topbar-round').textContent = `Round 1/${totalRounds}`;

    // Reset field slots
    document.querySelectorAll('.field-slot').forEach(s => {
        s.classList.remove('filled', 'highlight');
        s.querySelector('.slot-name').textContent = '';
    });

    // Show OL slot for both modes
    const olSlot = document.getElementById('slot-OL');
    if (olSlot) {
        olSlot.style.display = 'flex';
    }

    // Show spin overlay, hide player list
    document.getElementById('spin-overlay').classList.remove('hidden');
    document.getElementById('player-list').innerHTML = '';
    document.getElementById('player-count').textContent = '';
    document.getElementById('placement-msg').textContent = 'Click a player, then a position';

    // Reset respin button
    document.getElementById('respin-btn').disabled = true;
    document.getElementById('respin-count').textContent = state.rerolls;

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

    const teams = getTeams();
    const eras = getEras();

    const spin = getRandomSpin(state.usedTeamEras);
    if (!spin) { state.spinning = false; return; }
    state.currentSpin = spin;

    const teamEl = document.getElementById('pill-team');
    const eraEl = document.getElementById('pill-era');

    let count = 0;
    const cycle = setInterval(() => {
        teamEl.textContent = teams[Math.floor(Math.random() * teams.length)];
        eraEl.textContent = eras[Math.floor(Math.random() * eras.length)];
        count++;
    }, 50);

    setTimeout(() => {
        clearInterval(cycle);
        teamEl.textContent = spin.team;
        eraEl.textContent = spin.era;
        state.spinning = false;

        // Hide spin overlay, show players
        document.getElementById('spin-overlay').classList.add('hidden');
        renderPlayers();

        // Enable respin if available
        const respinBtn = document.getElementById('respin-btn');
        respinBtn.disabled = state.rerolls <= 0;
    }, 900);
}

function doRespin() {
    if (state.rerolls <= 0 || state.spinning) return;
    state.rerolls--;
    document.getElementById('respin-count').textContent = state.rerolls;

    const teams = getTeams();
    const eras = getEras();

    state.spinning = true;
    const spin = getRandomSpin(state.usedTeamEras);
    if (!spin) { state.spinning = false; return; }
    state.currentSpin = spin;

    const teamEl = document.getElementById('pill-team');
    const eraEl = document.getElementById('pill-era');

    let count = 0;
    const cycle = setInterval(() => {
        teamEl.textContent = teams[Math.floor(Math.random() * teams.length)];
        eraEl.textContent = eras[Math.floor(Math.random() * eras.length)];
        count++;
    }, 50);

    setTimeout(() => {
        clearInterval(cycle);
        teamEl.textContent = spin.team;
        eraEl.textContent = spin.era;
        state.spinning = false;

        renderPlayers();

        const respinBtn = document.getElementById('respin-btn');
        respinBtn.disabled = state.rerolls <= 0;
    }, 900);
}

function getRandomSpin(usedTeamEras) {
    const teams = getTeams();
    const eras = getEras();

    const usedTeams = usedTeamEras.map(td => td.split('_')[0]);
    const availableTeams = teams.filter(t => !usedTeams.includes(t));
    if (availableTeams.length === 0) return null;

    // Build all valid combos and pick one uniformly
    const combos = [];
    availableTeams.forEach(team => {
        eras.forEach(era => {
            combos.push({ team, era });
        });
    });
    return combos[Math.floor(Math.random() * combos.length)];
}

function getAllPlayersForSpin() {
    if (!state.currentSpin) return [];
    const { team, era } = state.currentSpin;
    const db = getPlayerDB();

    if (state.gameMode === 'cfb') {
        return db.filter(p => p.team === team && p.year === era);
    } else {
        return db.filter(p => p.team === team && p.decade === era);
    }
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

    filtered.sort((a, b) => b.rating - a.rating);

    document.getElementById('player-count').textContent = `${filtered.length} players available`;

    const list = document.getElementById('player-list');
    list.innerHTML = '';

    filtered.forEach(player => {
        const row = document.createElement('div');
        row.className = 'p-row';
        row.onclick = () => selectPlayer(player, row);

        const posLabel = player.pos.map(p => p.replace('1', '').replace('2', '')).filter((v, i, a) => a.indexOf(v) === i).join(' · ');

        let statsHtml = '';
        const entries = Object.entries(player.stats).filter(([k]) => k !== 'YRS' && k !== 'DRAFT');
        if (entries.length > 0) {
            statsHtml = `<div class="p-stats">${entries.map(([k, v]) =>
                `<div class="p-stat"><span class="p-stat-val">${v}</span><span class="p-stat-label">${k}</span></div>`
            ).join('')}</div>`;
        }

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
            ${statsHtml}
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
    state.usedEras.push(state.currentSpin.era);
    state.usedTeamEras.push(`${state.currentSpin.team}_${state.currentSpin.era}`);
    state.round++;
    state.selectedPlayer = null;

    const totalRounds = getPosOrder().length;

    // Update slot
    const slot = document.getElementById(`slot-${pos}`);
    slot.classList.add('filled');
    slot.classList.remove('highlight');
    slot.querySelector('.slot-name').textContent = player.name;

    // Remove highlights
    document.querySelectorAll('.field-slot').forEach(s => s.classList.remove('highlight'));

    // Check if done
    if (state.round >= totalRounds) {
        setTimeout(runSim, 500);
        return;
    }

    // Update round
    document.getElementById('topbar-round').textContent = `Round ${state.round + 1}/${totalRounds}`;

    // Show spin overlay for next round
    document.getElementById('spin-overlay').classList.remove('hidden');
    document.getElementById('player-list').innerHTML = '';
    document.getElementById('player-count').textContent = '';
    document.getElementById('placement-msg').textContent = 'Click a player, then a position';
    document.getElementById('search-input').value = '';
    document.getElementById('respin-btn').disabled = true;
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
    const engine = new SimulationEngine(state.roster, state.gameMode);
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
    const posOrder = getPosOrder();
    posOrder.forEach((pos, idx) => {
        const p = state.roster[pos];
        if (!p) return;
        const dp = pos.replace('1', '').replace('2', '');
        const eraLabel = state.usedEras[idx] || '';
        roster.innerHTML += `<div class="rr-item"><span class="rr-pos">${dp}</span><span class="rr-name">${p.name}</span><span class="rr-meta">${eraLabel} ${p.team}</span></div>`;
    });

    const bonuses = document.getElementById('result-bonuses');
    bonuses.innerHTML = '';
    result.synergies.forEach(s => { bonuses.innerHTML += `<div class="bonus-line">+ ${s.label} (${s.bonus})</div>`; });
    result.penalties.forEach(p => { bonuses.innerHTML += `<div class="bonus-line neg">${p.label} (${p.value})</div>`; });
}

function shareResults() {
    openModal('share-modal');
    document.getElementById('share-confirm').style.opacity = '0';
}

function downloadPNG() {
    const target = document.querySelector('.results-wrap');
    html2canvas(target, {
        backgroundColor: '#1a2332',
        scale: 2,
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = '17-0-results.png';
        link.href = canvas.toDataURL();
        link.click();
        showShareConfirm('PNG downloaded!');
    });
}

function copyShareLink() {
    const data = {
        w: parseInt(document.getElementById('rr-w').textContent),
        l: parseInt(document.getElementById('rr-l').textContent),
        r: POS_ORDER.map((pos, i) => {
            const p = state.roster[pos];
            if (!p) return null;
            return { n: p.name, t: p.team, d: p.decade, pos: pos };
        }).filter(Boolean)
    };
    const encoded = btoa(encodeURIComponent(JSON.stringify(data)));
    const url = `https://17-0game.com/?s=${encoded}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => showShareConfirm('Link copied!'));
    } else {
        const t = document.createElement('textarea');
        t.value = url;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        showShareConfirm('Link copied!');
    }
}

function globalSearch() {
    const query = document.getElementById('global-search').value.toLowerCase().trim();
    const results = document.getElementById('global-search-results');
    if (query.length < 2) { results.innerHTML = '<p style="color:var(--text2); font-size:0.8rem;">Type at least 2 characters</p>'; return; }

    // Search both databases
    const nflMatches = PLAYER_DB.filter(p => p.name.toLowerCase().includes(query)).slice(0, 25);
    const cfbMatches = (typeof CFB_PLAYER_DB !== 'undefined' ? CFB_PLAYER_DB : []).filter(p => p.name.toLowerCase().includes(query)).slice(0, 25);

    const allMatches = [
        ...nflMatches.map(p => ({...p, source: 'NFL'})),
        ...cfbMatches.map(p => ({...p, source: 'CFB'}))
    ].slice(0, 50);

    if (allMatches.length === 0) { results.innerHTML = '<p style="color:var(--text2); font-size:0.8rem;">No players found</p>'; return; }

    results.innerHTML = allMatches.map(p => {
        const posLabel = p.pos.map(x => x.replace('1', '').replace('2', '')).filter((v, i, a) => a.indexOf(v) === i).join('/');
        const entries = Object.entries(p.stats).filter(([k]) => k !== 'YRS' && k !== 'DRAFT');
        const statsStr = entries.length > 0 ? entries.map(([k, v]) => `${v} ${k}`).join(' · ') : '';
        const era = p.decade || p.year || '';
        return `<div class="search-result-row"><span class="p-name">${p.name}</span><span class="p-meta">${p.source} · ${posLabel} · ${p.team} · ${era}</span>${statsStr ? `<span class="p-meta">${statsStr}</span>` : ''}</div>`;
    }).join('');
}

function showShareConfirm(msg) {
    const el = document.getElementById('share-confirm');
    el.textContent = msg;
    el.style.opacity = '1';
    setTimeout(() => { el.style.opacity = '0'; }, 2500);
}

function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
    el.textContent = msg; el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2500);
}

function playAgain() {
    history.replaceState(null, '', window.location.pathname);
    show('landing-screen');
}

// Handle shared result links
(function checkShareLink() {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('s');
    if (!s) return;
    try {
        const data = JSON.parse(decodeURIComponent(atob(s)));
        show('results-screen');
        document.getElementById('rr-w').textContent = data.w;
        document.getElementById('rr-l').textContent = data.l;
        const rec = document.getElementById('result-record');
        rec.classList.remove('perfect');
        if (data.w === 17) { rec.classList.add('perfect'); document.getElementById('result-sub').textContent = 'PERFECT SEASON'; launchConfetti(); }
        else if (data.w >= 15) document.getElementById('result-sub').textContent = 'ELITE SEASON';
        else if (data.w >= 12) document.getElementById('result-sub').textContent = 'PLAYOFF TEAM';
        else if (data.w >= 9) document.getElementById('result-sub').textContent = 'MIDDLE OF THE PACK';
        else document.getElementById('result-sub').textContent = 'REBUILD MODE';

        const roster = document.getElementById('result-roster');
        roster.innerHTML = '';
        data.r.forEach(p => {
            const dp = p.pos.replace('1', '').replace('2', '');
            roster.innerHTML += `<div class="rr-item"><span class="rr-pos">${dp}</span><span class="rr-name">${p.n}</span><span class="rr-meta">${p.d} ${p.t}</span></div>`;
        });
        document.getElementById('result-bonuses').innerHTML = '';
    } catch (e) {}
})();

function confirmExit() {
    openModal('exit-modal');
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
