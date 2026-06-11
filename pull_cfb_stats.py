"""
Pull college football players from CollegeFootballData.com API.
Power 4 conferences only (SEC, Big Ten, Big 12, ACC).
Covers 2020-2024 seasons.
Pulls from BOTH stats AND rosters to get OL players.
"""
import requests
import json
import time

API_KEYS = [
    "HlmK1v0LAcTCOy5eGCjrnrujtkn5lfmvdN7GjxrLODYiAx6qNveGGdWTzGpMC/ak",
]
current_key_idx = 0
API_KEY = API_KEYS[current_key_idx]
HEADERS = {"Authorization": f"Bearer {API_KEY}"}
BASE_URL = "https://api.collegefootballdata.com"

POWER_4 = ['SEC', 'Big Ten', 'Big 12', 'ACC']

YEARS = [2020, 2021, 2022, 2023, 2024]

GAME_POS_MAP = {
    'QB': 'QB',
    'RB': 'RB', 'FB': 'RB',
    'WR': 'WR1',
    'TE': 'TE',
    'OL': 'OL', 'OT': 'OL', 'OG': 'OL', 'C': 'OL', 'T': 'OL', 'G': 'OL',
    'EDGE': 'EDGE', 'DE': 'EDGE', 'OLB': 'EDGE', 'DL': 'EDGE',
    'LB': 'EDGE', 'ILB': 'EDGE', 'MLB': 'EDGE',
    'DT': 'EDGE', 'NT': 'EDGE',
    'CB': 'DB', 'S': 'DB', 'DB': 'DB', 'FS': 'DB', 'SS': 'DB',
}

KNOWN_BADGES = {
    'Caleb Williams': ['Heisman'],
    'Jayden Daniels': ['Heisman'],
    'Bryce Young': ['Heisman'],
    'C.J. Stroud': ['Heisman'],
    'DeVonta Smith': ['Heisman'],
    'Joe Burrow': ['Heisman'],
    'Mac Jones': ['Heisman'],
    'Travis Etienne': ['All-American'],
    'Najee Harris': ['All-American'],
    'Bijan Robinson': ['All-American'],
    'Marvin Harrison Jr.': ['Heisman'],
    "Ja'Marr Chase": ['All-American'],
    'Chris Olave': ['All-American'],
    'Garrett Wilson': ['All-American'],
    'Quentin Johnston': ['All-American'],
    'Rome Odunze': ['All-American'],
    'Will Anderson Jr.': ['All-American'],
    'Aidan Hutchinson': ['All-American'],
    'Kayvon Thibodeaux': ['All-American'],
    'Jalen Carter': ['All-American'],
    'Sauce Gardner': ['All-American'],
    'Derek Stingley Jr.': ['All-American'],
    'Kyle Hamilton': ['All-American'],
    'Penei Sewell': ['All-American'],
    'Rashawn Slater': ['All-American'],
    'Evan Neal': ['All-American'],
    'Ikem Ekwonu': ['All-American'],
    'Paris Johnson Jr.': ['All-American'],
    'Peter Skoronski': ['All-American'],
    'Olu Fashanu': ['All-American'],
    'JC Latham': ['All-American'],
    'Travis Hunter': ['Heisman'],
    'Bo Nix': ['Heisman'],
    'Michael Penix Jr.': ['Heisman'],
    'Blake Corum': ['All-American'],
    'Brock Bowers': ['All-American'],
}

KNOWN_SYNERGIES = {
    'Burrow_Chase': ['Joe Burrow', "Ja'Marr Chase"],
    'Stroud_JSN': ['C.J. Stroud', 'Jaxon Smith-Njigba'],
    'Stroud_Wilson': ['C.J. Stroud', 'Garrett Wilson'],
    'Stroud_Olave': ['C.J. Stroud', 'Chris Olave'],
    'Young_Metchie': ['Bryce Young', 'John Metchie III'],
    'Williams_Addison': ['Caleb Williams', 'Jordan Addison'],
    'Daniels_Nabers': ['Jayden Daniels', 'Malik Nabers'],
}


def api_get(endpoint, params=None, retries=3):
    """Make API request with rate limiting, key rotation, and retry."""
    global current_key_idx, API_KEY, HEADERS
    url = f"{BASE_URL}{endpoint}"

    for attempt in range(retries):
        try:
            resp = requests.get(url, headers=HEADERS, params=params, timeout=30)
            time.sleep(0.08)

            if resp.status_code == 200:
                return resp.json()
            elif resp.status_code == 429 or resp.status_code == 401:
                current_key_idx += 1
                if current_key_idx < len(API_KEYS):
                    API_KEY = API_KEYS[current_key_idx]
                    HEADERS = {"Authorization": f"Bearer {API_KEY}"}
                    print(f"\n  Switching to API key {current_key_idx + 1}...")
                    time.sleep(1)
                    return api_get(endpoint, params, retries)
                else:
                    print(f"\n  All API keys exhausted!")
                    return []
            print(f"  API error {resp.status_code}: {endpoint}")
            return []
        except requests.exceptions.Timeout:
            if attempt < retries - 1:
                print(f" timeout, retry {attempt+2}...", end="", flush=True)
                time.sleep(2)
            else:
                print(f" timeout failed")
                return []
        except requests.exceptions.RequestException as e:
            if attempt < retries - 1:
                print(f" error, retry {attempt+2}...", end="", flush=True)
                time.sleep(2)
            else:
                print(f" request failed: {e}")
                return []
    return []


def get_power4_teams():
    """Get all Power 4 teams."""
    teams = api_get("/teams/fbs", {"year": 2024})
    return [t for t in teams if t.get('conference') in POWER_4]


def get_roster(year, team):
    """Get team roster for a year."""
    return api_get("/roster", {"year": year, "team": team})


def get_player_stats(year, team, category):
    """Get player stats for a team/year/category."""
    return api_get("/stats/player/season", {
        "year": year,
        "team": team,
        "category": category
    })


def pivot_stats(raw_stats):
    """Pivot stat rows into player objects."""
    players = {}
    for row in raw_stats:
        pid = row['playerId']
        if pid not in players:
            players[pid] = {
                'name': row['player'],
                'position': row['position'],
                'team': row['team'],
                'conference': row['conference'],
                'stats': {}
            }
        players[pid]['stats'][row['statType']] = row['stat']
    return list(players.values())


def calculate_rating(pos, stats):
    """Calculate player rating from stats."""
    if pos == 'QB':
        yds = float(stats.get('YDS', 0))
        tds = float(stats.get('TD', 0))
        pct = float(stats.get('PCT', 0)) * 100
        yard_score = min(yds / 4000, 1.0) * 8
        td_score = min(tds / 40, 1.0) * 8
        eff_score = min(max(pct - 55, 0) / 15, 1.0) * 6
        return min(99, max(72, int(76 + yard_score + td_score + eff_score)))

    elif pos == 'RB':
        yds = float(stats.get('YDS', 0))
        tds = float(stats.get('TD', 0))
        ypc = float(stats.get('YPC', 0))
        yard_score = min(yds / 1500, 1.0) * 10
        td_score = min(tds / 20, 1.0) * 7
        eff_score = min(max(ypc - 3.5, 0) / 3.0, 1.0) * 5
        return min(99, max(72, int(75 + yard_score + td_score + eff_score)))

    elif pos in ('WR1', 'WR2'):
        yds = float(stats.get('YDS', 0))
        tds = float(stats.get('TD', 0))
        ypr = float(stats.get('AVG', 0))
        yard_score = min(yds / 1500, 1.0) * 10
        td_score = min(tds / 15, 1.0) * 7
        eff_score = min(max(ypr - 10, 0) / 8, 1.0) * 5
        return min(99, max(72, int(76 + yard_score + td_score + eff_score)))

    elif pos == 'TE':
        yds = float(stats.get('YDS', 0))
        tds = float(stats.get('TD', 0))
        yard_score = min(yds / 800, 1.0) * 10
        td_score = min(tds / 10, 1.0) * 7
        return min(99, max(72, int(76 + yard_score + td_score)))

    elif pos == 'EDGE':
        sacks = float(stats.get('SACKS', stats.get('SOLO', 0)))
        tfl = float(stats.get('TFL', 0))
        sack_score = min(sacks / 15, 1.0) * 12
        tfl_score = min(tfl / 20, 1.0) * 6
        return min(99, max(72, int(76 + sack_score + tfl_score)))

    elif pos == 'DB':
        ints = float(stats.get('INT', 0))
        pds = float(stats.get('PD', 0))
        int_score = min(ints / 8, 1.0) * 12
        pd_score = min(pds / 15, 1.0) * 6
        return min(99, max(72, int(76 + int_score + pd_score)))

    elif pos == 'OL':
        # OL rating based on year in school
        year = stats.get('year', 1)
        base = 76 + min(year, 4) * 3
        return min(92, max(76, int(base)))

    return 78


def main():
    print("=== CFB Player Pull (Power 4) ===\n")

    print("Fetching Power 4 teams...")
    teams = get_power4_teams()
    team_names = [t['school'] for t in teams]
    print(f"  Found {len(team_names)} Power 4 teams")

    all_players = []

    for year in YEARS:
        print(f"\nProcessing {year}...")

        for team in team_names:
            print(f"  {team}...", end=" ", flush=True)

            # === ROSTER for OL players ===
            roster = get_roster(year, team)
            for p in roster:
                pos = p.get('position', '')
                game_pos = GAME_POS_MAP.get(pos)
                if game_pos != 'OL':
                    continue
                player_year = p.get('year', 1)
                if player_year < 3:  # Only juniors+ for OL
                    continue
                name = f"{p.get('firstName', '')} {p.get('lastName', '')}".strip()
                if not name:
                    continue
                rating = calculate_rating('OL', {'year': player_year})
                all_players.append({
                    'name': name,
                    'pos': ['OL'],
                    'team': team,
                    'year': year,
                    'conference': '',
                    'rating': rating,
                    'stats': {'YR': player_year},
                    'badges': KNOWN_BADGES.get(name, []),
                })

            # === PASSING STATS ===
            passing = pivot_stats(get_player_stats(year, team, 'passing'))
            for p in passing:
                game_pos = GAME_POS_MAP.get(p['position'], None)
                if game_pos != 'QB':
                    continue
                stats = p['stats']
                if float(stats.get('ATT', 0)) < 30:  # Lowered from 50
                    continue
                rating = calculate_rating('QB', stats)
                all_players.append({
                    'name': p['name'],
                    'pos': ['QB'],
                    'team': team,
                    'year': year,
                    'conference': p['conference'],
                    'rating': rating,
                    'stats': {
                        'YDS': int(float(stats.get('YDS', 0))),
                        'TD': int(float(stats.get('TD', 0))),
                        'CMP%': str(round(float(stats.get('PCT', 0)) * 100, 1))
                    },
                    'badges': KNOWN_BADGES.get(p['name'], []),
                })

            # === RUSHING STATS ===
            rushing = pivot_stats(get_player_stats(year, team, 'rushing'))
            for p in rushing:
                game_pos = GAME_POS_MAP.get(p['position'], None)
                if game_pos != 'RB':
                    continue
                stats = p['stats']
                if float(stats.get('CAR', 0)) < 20:  # Lowered from 30
                    continue
                rating = calculate_rating('RB', stats)
                all_players.append({
                    'name': p['name'],
                    'pos': ['RB'],
                    'team': team,
                    'year': year,
                    'conference': p['conference'],
                    'rating': rating,
                    'stats': {
                        'YDS': int(float(stats.get('YDS', 0))),
                        'TD': int(float(stats.get('TD', 0))),
                        'YPC': stats.get('YPC', '0')
                    },
                    'badges': KNOWN_BADGES.get(p['name'], []),
                })

            # === RECEIVING STATS ===
            receiving = pivot_stats(get_player_stats(year, team, 'receiving'))
            for p in receiving:
                game_pos = GAME_POS_MAP.get(p['position'], None)
                if game_pos not in ('WR1', 'TE'):
                    continue
                stats = p['stats']
                rec = float(stats.get('REC', 0))
                min_rec = 3 if game_pos == 'TE' else 10  # Lowered thresholds
                if rec < min_rec:
                    continue
                rating = calculate_rating(game_pos, stats)
                pos_list = ['WR1', 'WR2'] if game_pos == 'WR1' else ['TE']
                all_players.append({
                    'name': p['name'],
                    'pos': pos_list,
                    'team': team,
                    'year': year,
                    'conference': p['conference'],
                    'rating': rating,
                    'stats': {
                        'YDS': int(float(stats.get('YDS', 0))),
                        'TD': int(float(stats.get('TD', 0))),
                        'REC': int(float(stats.get('REC', 0)))
                    },
                    'badges': KNOWN_BADGES.get(p['name'], []),
                })

            # === DEFENSIVE STATS ===
            defense = pivot_stats(get_player_stats(year, team, 'defensive'))
            for p in defense:
                game_pos = GAME_POS_MAP.get(p['position'], None)
                if game_pos not in ('EDGE', 'DB'):
                    continue
                stats = p['stats']
                tackles = float(stats.get('TOT', stats.get('SOLO', 0)))
                if tackles < 10:  # Lowered from 20
                    continue
                rating = calculate_rating(game_pos, stats)
                all_players.append({
                    'name': p['name'],
                    'pos': [game_pos],
                    'team': team,
                    'year': year,
                    'conference': p['conference'],
                    'rating': rating,
                    'stats': {
                        'TKL': int(tackles),
                        'TFL': int(float(stats.get('TFL', 0))),
                        'SACKS': str(stats.get('SACKS', '0')),
                        'INT': int(float(stats.get('INT', 0))),
                    } if game_pos == 'EDGE' else {
                        'TKL': int(tackles),
                        'INT': int(float(stats.get('INT', 0))),
                        'PD': int(float(stats.get('PD', 0))),
                    },
                    'badges': KNOWN_BADGES.get(p['name'], []),
                })

            print("done")

    # Apply badge bonuses
    for p in all_players:
        if 'Heisman' in p['badges']:
            p['rating'] = min(99, p['rating'] + 5)
        elif 'All-American' in p['badges']:
            p['rating'] = min(99, p['rating'] + 3)

    # Add synergies
    for p in all_players:
        p['synergies'] = []
        for syn_key, syn_players in KNOWN_SYNERGIES.items():
            if p['name'] in syn_players:
                p['synergies'].append(syn_key)

    # Deduplicate (keep highest rated per name/team/year/pos)
    print(f"\nRaw entries: {len(all_players)}")
    seen = {}
    for p in all_players:
        key = (p['name'], p['team'], p['year'], tuple(p['pos']))
        if key not in seen or p['rating'] > seen[key]['rating']:
            seen[key] = p
    all_players = list(seen.values())
    print(f"After dedup: {len(all_players)}")

    # Sort
    all_players.sort(key=lambda p: (p['team'], p['year'], p['pos'][0], -p['rating']))

    # Generate cfb_players.js
    generate_cfb_players_js(all_players, teams)
    print(f"\nDone! Generated cfb_players.js with {len(all_players)} players")

    # Stats
    from collections import defaultdict
    conf_counts = defaultdict(int)
    pos_counts = defaultdict(int)
    for p in all_players:
        conf_counts[p['conference']] += 1
        pos_counts[p['pos'][0]] += 1

    for conf in POWER_4:
        count = len([p for p in all_players if p['conference'] == conf])
        print(f"  {conf}: {count} players")

    print(f"\nBy position:")
    for pos in ['QB', 'RB', 'WR1', 'TE', 'OL', 'EDGE', 'DB']:
        count = pos_counts.get(pos, 0)
        print(f"  {pos}: {count}")


def generate_cfb_players_js(players, teams):
    """Generate the cfb_players.js file."""

    team_names = sorted(set(p['team'] for p in players))

    lines = []
    current_team = None
    current_year = None

    for p in players:
        if p['team'] != current_team:
            current_team = p['team']
            lines.append(f"\n    // ============ {current_team.upper()} ============")
            current_year = None
        if p['year'] != current_year:
            current_year = p['year']
            lines.append(f"    // {current_year}")

        safe_name = p['name'].replace("'", "\\'")

        stats_parts = []
        for k, v in p['stats'].items():
            if isinstance(v, str):
                stats_parts.append(f"'{k}': '{v}'")
            else:
                stats_parts.append(f"{k}: {v}")
        stats_str = '{ ' + ', '.join(stats_parts) + ' }'

        pos_str = json.dumps(p['pos'])
        badges_str = json.dumps(p['badges'])
        synergies_str = json.dumps(p['synergies'])

        line = (f"    {{ name: '{safe_name}', pos: {pos_str}, team: '{p['team']}', "
                f"year: {p['year']}, rating: {p['rating']}, "
                f"stats: {stats_str}, badges: {badges_str}, synergies: {synergies_str} }},")
        lines.append(line)

    player_block = '\n'.join(lines)

    synergies_js = """const CFB_SYNERGIES = {
    'Burrow_Chase': { label: 'Burrow \\u2192 Chase', bonus: 4, players: ['Joe Burrow', "Ja'Marr Chase"] },
    'Stroud_JSN': { label: 'Stroud \\u2192 JSN', bonus: 3, players: ['C.J. Stroud', 'Jaxon Smith-Njigba'] },
    'Stroud_Wilson': { label: 'Stroud \\u2192 Wilson', bonus: 3, players: ['C.J. Stroud', 'Garrett Wilson'] },
    'Stroud_Olave': { label: 'Stroud \\u2192 Olave', bonus: 3, players: ['C.J. Stroud', 'Chris Olave'] },
    'Young_Metchie': { label: 'Young \\u2192 Metchie', bonus: 2, players: ['Bryce Young', 'John Metchie III'] },
    'Williams_Addison': { label: 'Williams \\u2192 Addison', bonus: 3, players: ['Caleb Williams', 'Jordan Addison'] },
    'Daniels_Nabers': { label: 'Daniels \\u2192 Nabers', bonus: 3, players: ['Jayden Daniels', 'Malik Nabers'] },
};"""

    teams_str = json.dumps(team_names, indent=4)

    final = f"""const CFB_TEAMS = {teams_str};

const CFB_YEARS = [2020, 2021, 2022, 2023, 2024];

const CFB_POSITIONS = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'OL', 'EDGE', 'DB'];

const CFB_PLAYER_DB = [
{player_block}
];

{synergies_js}
"""

    with open('cfb_players.js', 'w', encoding='utf-8') as f:
        f.write(final)


if __name__ == '__main__':
    main()
