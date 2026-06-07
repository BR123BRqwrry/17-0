"""
Pull ALL NFL players from nflverse roster + stats data.
Every player who appeared on an active roster for a team in a decade gets included.
OL players included from roster data. Stats from nflverse stat files.
Covers 2000s, 2010s, 2020s only (nflverse starts at 1999).
"""
import pandas as pd
import json

TEAM_MAP = {
    'ARI': 'Cardinals', 'ATL': 'Falcons', 'BAL': 'Ravens', 'BUF': 'Bills',
    'CAR': 'Panthers', 'CHI': 'Bears', 'CIN': 'Bengals', 'CLE': 'Browns',
    'DAL': 'Cowboys', 'DEN': 'Broncos', 'DET': 'Lions', 'GB': 'Packers',
    'HOU': 'Texans', 'IND': 'Colts', 'JAX': 'Jaguars', 'KC': 'Chiefs',
    'LV': 'Raiders', 'OAK': 'Raiders', 'LAC': 'Chargers', 'SD': 'Chargers',
    'LA': 'Rams', 'LAR': 'Rams', 'STL': 'Rams', 'MIA': 'Dolphins',
    'MIN': 'Vikings', 'NE': 'Patriots', 'NO': 'Saints', 'NYG': 'Giants',
    'NYJ': 'Jets', 'PHI': 'Eagles', 'PIT': 'Steelers', 'SF': '49ers',
    'SEA': 'Seahawks', 'TB': 'Buccaneers', 'TEN': 'Titans', 'WAS': 'Commanders',
}

GAME_POS_MAP = {
    'QB': 'QB', 'RB': 'RB', 'FB': 'RB',
    'WR': 'WR1', 'TE': 'TE', 'OL': 'OL',
    'DL': 'EDGE', 'LB': 'DB', 'DB': 'DB',
}

DECADES = {
    '2000s': range(2000, 2010),
    '2010s': range(2010, 2020),
    '2020s': range(2020, 2025),
}

# Known awards
KNOWN_BADGES = {
    'Tom Brady': ['HOF', 'MVP', 'SB MVP'],
    'Peyton Manning': ['HOF', 'MVP'],
    'Aaron Rodgers': ['MVP'],
    'Patrick Mahomes': ['MVP', 'SB MVP'],
    'Drew Brees': ['HOF', 'SB MVP'],
    'Lamar Jackson': ['MVP'],
    'Matt Ryan': ['MVP'],
    'Kurt Warner': ['HOF', 'MVP', 'SB MVP'],
    'Rich Gannon': ['MVP'],
    'Cam Newton': ['MVP'],
    'Adrian Peterson': ['HOF', 'MVP'],
    'LaDainian Tomlinson': ['HOF', 'MVP'],
    'Marshall Faulk': ['HOF', 'MVP'],
    'Shaun Alexander': ['MVP'],
    'Derrick Henry': ['All-Pro'],
    'Christian McCaffrey': ['All-Pro'],
    'Saquon Barkley': ['All-Pro'],
    'Randy Moss': ['HOF'],
    'Terrell Owens': ['HOF'],
    'Calvin Johnson': ['HOF'],
    'Larry Fitzgerald': ['HOF'],
    'Andre Johnson': ['All-Pro'],
    'Marvin Harrison': ['HOF'],
    'Reggie Wayne': ['HOF'],
    'Tyreek Hill': ['All-Pro'],
    "Ja'Marr Chase": ['All-Pro'],
    'CeeDee Lamb': ['All-Pro'],
    'Davante Adams': ['All-Pro'],
    'DeAndre Hopkins': ['All-Pro'],
    'Michael Thomas': ['All-Pro'],
    'Julio Jones': ['All-Pro'],
    'A.J. Brown': ['All-Pro'],
    'Justin Jefferson': ['All-Pro'],
    'Rob Gronkowski': ['HOF'],
    'Tony Gonzalez': ['HOF'],
    'Jason Witten': ['All-Pro'],
    'Travis Kelce': ['All-Pro'],
    'George Kittle': ['All-Pro'],
    'T.J. Watt': ['DPOY'],
    'Aaron Donald': ['HOF', 'DPOY'],
    'J.J. Watt': ['DPOY'],
    'Khalil Mack': ['DPOY'],
    'Von Miller': ['SB MVP'],
    'DeMarcus Ware': ['HOF'],
    'Julius Peppers': ['HOF'],
    'Dwight Freeney': ['HOF'],
    'Nick Bosa': ['DPOY'],
    'Myles Garrett': ['DPOY'],
    'Micah Parsons': ['DPOY'],
    'Trey Hendrickson': ['All-Pro'],
    'Maxx Crosby': ['All-Pro'],
    'Chris Jones': ['All-Pro'],
    'Cameron Jordan': ['All-Pro'],
    'Chandler Jones': ['All-Pro'],
    'Robert Mathis': ['All-Pro'],
    'Jared Allen': ['All-Pro'],
    'Jason Taylor': ['HOF', 'DPOY'],
    'Michael Strahan': ['HOF', 'DPOY'],
    'Charles Woodson': ['HOF', 'DPOY'],
    'Ed Reed': ['HOF', 'DPOY'],
    'Troy Polamalu': ['HOF', 'DPOY'],
    'Darrelle Revis': ['HOF'],
    'Champ Bailey': ['HOF'],
    'Ty Law': ['HOF'],
    'Richard Sherman': ['All-Pro'],
    'Patrick Peterson': ['All-Pro'],
    'Stephon Gilmore': ['DPOY'],
    'Jalen Ramsey': ['All-Pro'],
    'Trevon Diggs': ['All-Pro'],
    'Sauce Gardner': ['All-Pro'],
    'Ray Lewis': ['HOF', 'DPOY', 'SB MVP'],
    'Brian Urlacher': ['HOF', 'DPOY'],
    'Patrick Willis': ['All-Pro'],
    'Luke Kuechly': ['DPOY'],
    'Bobby Wagner': ['All-Pro'],
    'Fred Warner': ['All-Pro'],
    'Derrick Brooks': ['HOF', 'DPOY'],
    'Brian Dawkins': ['HOF'],
    'Earl Thomas': ['All-Pro'],
    'Tyrann Mathieu': ['All-Pro'],
    'Kyle Hamilton': ['All-Pro'],
    'Terrell Suggs': ['DPOY'],
    'Jason Peters': ['All-Pro'],
    'Joe Thomas': ['HOF'],
    'Trent Williams': ['All-Pro'],
    'Tyron Smith': ['All-Pro'],
    'Zack Martin': ['All-Pro'],
    'Quenton Nelson': ['All-Pro'],
    'Jason Kelce': ['All-Pro'],
    'Travis Frederick': ['All-Pro'],
    'Marshal Yanda': ['All-Pro'],
    'David DeCastro': ['All-Pro'],
    'Lane Johnson': ['All-Pro'],
    'Terron Armstead': ['All-Pro'],
    'Joel Bitonio': ['All-Pro'],
    'Penei Sewell': ['All-Pro'],
    'Rashawn Slater': ['All-Pro'],
    'Orlando Pace': ['HOF'],
    'Jonathan Ogden': ['HOF'],
    'Walter Jones': ['HOF'],
    'Larry Allen': ['HOF'],
    'Will Shields': ['HOF'],
    'Alan Faneca': ['HOF'],
    'Steve Hutchinson': ['HOF'],
}

KNOWN_SYNERGIES = {
    'Brady_Moss': ['Tom Brady', 'Randy Moss'],
    'Brady_Gronk': ['Tom Brady', 'Rob Gronkowski'],
    'Mahomes_Kelce': ['Patrick Mahomes', 'Travis Kelce'],
    'Manning_Harrison': ['Peyton Manning', 'Marvin Harrison'],
    'Manning_Wayne': ['Peyton Manning', 'Reggie Wayne'],
    'Rodgers_Adams': ['Aaron Rodgers', 'Davante Adams'],
    'Rodgers_Nelson': ['Aaron Rodgers', 'Jordy Nelson'],
    'Brees_Thomas': ['Drew Brees', 'Michael Thomas'],
    'Ryan_Julio': ['Matt Ryan', 'Julio Jones'],
    'Burrow_Chase': ['Joe Burrow', "Ja'Marr Chase"],
    'Allen_Diggs': ['Josh Allen', 'Stefon Diggs'],
    'Prescott_Lamb': ['Dak Prescott', 'CeeDee Lamb'],
    'Hurts_Brown': ['Jalen Hurts', 'A.J. Brown'],
    'Lamar_Andrews': ['Lamar Jackson', 'Mark Andrews'],
    'Herbert_Allen': ['Justin Herbert', 'Keenan Allen'],
}


def load_all_rosters():
    """Load roster data for all years 1999-2024."""
    all_rosters = []
    for year in range(1999, 2025):
        try:
            url = f'https://github.com/nflverse/nflverse-data/releases/download/rosters/roster_{year}.csv'
            df = pd.read_csv(url)
            df['year'] = year
            # Keep only active players
            df = df[df['status'] == 'ACT']
            all_rosters.append(df)
            print(f"  Roster {year}: {len(df)} active players")
        except Exception as e:
            print(f"  Roster {year}: FAILED - {e}")
    return pd.concat(all_rosters, ignore_index=True)


def load_all_offense():
    """Load offensive stats for all years."""
    all_data = []
    for year in range(1999, 2025):
        try:
            url = f'https://github.com/nflverse/nflverse-data/releases/download/player_stats/player_stats_{year}.csv'
            df = pd.read_csv(url)
            df = df[df['season_type'] == 'REG']
            df['year'] = year
            all_data.append(df)
            print(f"  Offense {year}: {len(df)} rows")
        except:
            pass
    return pd.concat(all_data, ignore_index=True)


def load_all_defense():
    """Load defensive stats for all years."""
    all_data = []
    for year in range(1999, 2025):
        try:
            url = f'https://github.com/nflverse/nflverse-data/releases/download/player_stats/player_stats_def_{year}.csv'
            df = pd.read_csv(url)
            df = df[df['season_type'] == 'REG']
            df['year'] = year
            all_data.append(df)
            print(f"  Defense {year}: {len(df)} rows")
        except:
            pass
    return pd.concat(all_data, ignore_index=True)


def get_decade(year):
    if 2000 <= year <= 2009: return '2000s'
    if 2010 <= year <= 2019: return '2010s'
    if 2020 <= year <= 2024: return '2020s'
    return None


def calculate_rating(pos, stats):
    """Calculate hidden rating from decade-cumulative stats."""
    if pos == 'QB':
        yds = stats.get('YDS', 0)
        tds = stats.get('TD', 0)
        comp_pct = float(stats.get('CMP%', '0'))
        yard_score = min(yds / 40000, 1.0) * 8
        td_score = min(tds / 300, 1.0) * 10
        eff_score = min(max(comp_pct - 55, 0) / 15, 1.0) * 4
        return min(99, max(72, int(76 + yard_score + td_score + eff_score)))
    elif pos == 'RB':
        yds = stats.get('YDS', 0)
        tds = stats.get('TD', 0)
        ypc = float(stats.get('YPC', '0'))
        yard_score = min(yds / 12000, 1.0) * 10
        td_score = min(tds / 80, 1.0) * 7
        eff_score = min(max(ypc - 3.5, 0) / 2.0, 1.0) * 5
        return min(99, max(72, int(75 + yard_score + td_score + eff_score)))
    elif pos in ('WR1', 'WR2'):
        yds = stats.get('YDS', 0)
        tds = stats.get('TD', 0)
        ypr = float(stats.get('YPR', '0'))
        yard_score = min(yds / 12000, 1.0) * 10
        td_score = min(tds / 80, 1.0) * 7
        eff_score = min(max(ypr - 10, 0) / 8, 1.0) * 5
        return min(99, max(72, int(76 + yard_score + td_score + eff_score)))
    elif pos == 'TE':
        yds = stats.get('YDS', 0)
        tds = stats.get('TD', 0)
        ypr = float(stats.get('YPR', '0'))
        yard_score = min(yds / 8000, 1.0) * 10
        td_score = min(tds / 60, 1.0) * 7
        eff_score = min(max(ypr - 8, 0) / 7, 1.0) * 4
        return min(99, max(72, int(76 + yard_score + td_score + eff_score)))
    elif pos == 'EDGE':
        sacks = stats.get('SACKS', 0)
        if isinstance(sacks, str): sacks = float(sacks)
        ff = stats.get('FF', 0)
        sack_score = min(sacks / 80, 1.0) * 14
        ff_score = min(ff / 25, 1.0) * 5
        return min(99, max(72, int(76 + sack_score + ff_score)))
    elif pos == 'DB':
        ints = stats.get('INT', 0)
        pds = stats.get('PD', 0)
        int_score = min(ints / 40, 1.0) * 12
        pd_score = min(pds / 100, 1.0) * 6
        return min(99, max(72, int(76 + int_score + pd_score)))
    elif pos == 'OL':
        yrs = stats.get('YRS', 0)
        return min(95, max(72, int(75 + min(yrs, 12) * 1.5)))
    return 78


def main():
    print("=== 17-0 Full Player Pull ===\n")

    print("Loading rosters...")
    rosters = load_all_rosters()

    print("\nLoading offensive stats...")
    offense = load_all_offense()

    print("\nLoading defensive stats...")
    defense = load_all_defense()

    # Aggregate offensive stats: best season per player per team per decade
    print("\nProcessing offensive stats...")
    offense['decade'] = offense['year'].apply(get_decade)
    offense = offense[offense['decade'].notna()]

    # Season totals per player/team/year
    off_seasons = offense.groupby(['player_display_name', 'recent_team', 'year', 'position', 'decade']).agg({
        'passing_yards': 'sum', 'passing_tds': 'sum', 'completions': 'sum', 'attempts': 'sum',
        'interceptions': 'sum', 'rushing_yards': 'sum', 'rushing_tds': 'sum', 'carries': 'sum',
        'receiving_yards': 'sum', 'receiving_tds': 'sum', 'receptions': 'sum', 'targets': 'sum',
    }).reset_index()

    # Decade totals per player/team/decade (sum all seasons)
    print("Aggregating decade totals...")
    off_best = {}
    for (name, team, decade), group in off_seasons.groupby(['player_display_name', 'recent_team', 'decade']):
        pos = group['position'].iloc[0]
        totals = group[['passing_yards', 'passing_tds', 'completions', 'attempts',
                        'rushing_yards', 'rushing_tds', 'carries',
                        'receiving_yards', 'receiving_tds', 'receptions']].sum()
        totals['position'] = pos
        off_best[(name, team, decade)] = totals

    # Aggregate defensive stats: best season per player per team per decade
    print("Processing defensive stats...")
    defense['decade'] = defense['year'].apply(get_decade)
    defense = defense[defense['decade'].notna()]

    def_seasons = defense.groupby(['player_display_name', 'team', 'year', 'position', 'decade']).agg({
        'def_sacks': 'sum', 'def_fumbles_forced': 'sum',
        'def_interceptions': 'sum', 'def_pass_defended': 'sum',
        'def_tackles': 'sum',
    }).reset_index()

    def_best = {}
    for (name, team, decade), group in def_seasons.groupby(['player_display_name', 'team', 'decade']):
        pos = group['position'].iloc[0]
        totals = group[['def_sacks', 'def_fumbles_forced', 'def_interceptions', 'def_pass_defended', 'def_tackles']].sum()
        totals['position'] = pos
        def_best[(name, team, decade)] = totals

    # Now build the full player list from ROSTERS (every player who was active)
    print("\nBuilding player database from rosters...")
    rosters['decade'] = rosters['year'].apply(get_decade)
    rosters = rosters[rosters['decade'].notna()]

    # Get unique player/team/decade combos
    player_entries = rosters.groupby(['full_name', 'team', 'decade', 'position']).agg({
        'years_exp': 'max',
        'year': 'count',  # seasons on roster
    }).reset_index()
    player_entries.rename(columns={'year': 'seasons_on_team'}, inplace=True)

    print(f"  Total unique player/team/decade entries: {len(player_entries)}")

    # Build final player objects
    players = []
    for _, row in player_entries.iterrows():
        name = row['full_name']
        team_abbr = row['team']
        decade = row['decade']
        roster_pos = row['position']
        years_exp = row['years_exp']
        seasons = row['seasons_on_team']

        team_name = TEAM_MAP.get(team_abbr)
        if not team_name:
            continue

        game_pos = GAME_POS_MAP.get(roster_pos)
        if not game_pos:
            continue

        # Build stats from stat data
        stats = {}
        pos_list = [game_pos]

        if game_pos == 'QB':
            key = (name, team_abbr, decade)
            if key in off_best:
                s = off_best[key]
                if s['attempts'] > 0:
                    stats = {
                        'YDS': int(s['passing_yards']),
                        'TD': int(s['passing_tds']),
                        'CMP%': str(round(s['completions'] / s['attempts'] * 100, 1))
                    }

        elif game_pos == 'RB':
            key = (name, team_abbr, decade)
            if key in off_best:
                s = off_best[key]
                if s['carries'] > 0:
                    stats = {
                        'YDS': int(s['rushing_yards']),
                        'TD': int(s['rushing_tds']),
                        'YPC': str(round(s['rushing_yards'] / s['carries'], 1))
                    }

        elif game_pos == 'WR1':
            pos_list = ['WR1', 'WR2']
            key = (name, team_abbr, decade)
            if key in off_best:
                s = off_best[key]
                if s['receptions'] > 0:
                    stats = {
                        'YDS': int(s['receiving_yards']),
                        'TD': int(s['receiving_tds']),
                        'YPR': str(round(s['receiving_yards'] / s['receptions'], 1))
                    }

        elif game_pos == 'TE':
            key = (name, team_abbr, decade)
            if key in off_best:
                s = off_best[key]
                if s['receptions'] > 0:
                    stats = {
                        'YDS': int(s['receiving_yards']),
                        'TD': int(s['receiving_tds']),
                        'YPR': str(round(s['receiving_yards'] / s['receptions'], 1))
                    }

        elif game_pos == 'EDGE':
            key = (name, team_abbr, decade)
            if key in def_best:
                s = def_best[key]
                sacks = s['def_sacks']
                sacks_str = str(int(sacks)) if sacks == int(sacks) else str(sacks)
                stats = {'SACKS': sacks_str, 'FF': int(s['def_fumbles_forced'])}
            else:
                stats = {'SACKS': '0', 'FF': 0}

        elif game_pos == 'DB':
            key = (name, team_abbr, decade)
            if key in def_best:
                s = def_best[key]
                stats = {'INT': int(s['def_interceptions']), 'PD': int(s['def_pass_defended'])}
            else:
                stats = {'INT': 0, 'PD': 0}

        elif game_pos == 'OL':
            yrs = int(years_exp) if pd.notna(years_exp) else 1
            stats = {'YRS': yrs}

        # Skip players with no meaningful stats (except OL)
        if not stats and game_pos != 'OL':
            continue

        # Calculate rating
        rating = calculate_rating(game_pos, stats)

        # Badges
        badges = KNOWN_BADGES.get(name, [])

        # Synergies
        synergies = []
        for syn_key, syn_players in KNOWN_SYNERGIES.items():
            if name in syn_players:
                synergies.append(syn_key)

        players.append({
            'name': name,
            'pos': pos_list,
            'team': team_name,
            'decade': decade,
            'rating': rating,
            'stats': stats,
            'badges': badges,
            'synergies': synergies,
        })

    # Deduplicate (same name/team/decade/pos — keep highest rated)
    print(f"  Raw entries: {len(players)}")
    seen = {}
    for p in players:
        key = (p['name'], p['team'], p['decade'], tuple(p['pos']))
        if key not in seen or p['rating'] > seen[key]['rating']:
            seen[key] = p
    players = list(seen.values())
    print(f"  After dedup: {len(players)}")

    # Sort
    players.sort(key=lambda p: (p['team'], p['decade'], p['pos'][0], -p['rating']))

    # Generate players.js
    generate_players_js(players)
    print(f"\nDone! Generated players.js with {len(players)} players")

    # Stats
    teams_covered = len(set(p['team'] for p in players))
    print(f"Teams: {teams_covered}")
    for d in ['2000s', '2010s', '2020s']:
        count = len([p for p in players if p['decade'] == d])
        print(f"  {d}: {count} players")


def generate_players_js(players):
    """Generate the final players.js file."""
    lines = []
    current_team = None
    current_decade = None

    for p in players:
        if p['team'] != current_team:
            current_team = p['team']
            lines.append(f"\n    // ============ {current_team.upper()} ============")
            current_decade = None
        if p['decade'] != current_decade:
            current_decade = p['decade']
            lines.append(f"    // {current_decade}")

        safe_name = p['name'].replace("'", "\\'")

        # Format stats
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
                f"decade: '{p['decade']}', rating: {p['rating']}, "
                f"stats: {stats_str}, badges: {badges_str}, synergies: {synergies_str} }},")
        lines.append(line)

    player_block = '\n'.join(lines)

    synergies_js = """const SYNERGIES = {
    'Brady_Moss': { label: 'Brady \\u2192 Moss', bonus: 4, players: ['Tom Brady', 'Randy Moss'] },
    'Brady_Gronk': { label: 'Brady \\u2192 Gronk', bonus: 3, players: ['Tom Brady', 'Rob Gronkowski'] },
    'Mahomes_Kelce': { label: 'Mahomes \\u2192 Kelce', bonus: 4, players: ['Patrick Mahomes', 'Travis Kelce'] },
    'Manning_Harrison': { label: 'Manning \\u2192 Harrison', bonus: 3, players: ['Peyton Manning', 'Marvin Harrison'] },
    'Manning_Wayne': { label: 'Manning \\u2192 Wayne', bonus: 2, players: ['Peyton Manning', 'Reggie Wayne'] },
    'Rodgers_Adams': { label: 'Rodgers \\u2192 Adams', bonus: 3, players: ['Aaron Rodgers', 'Davante Adams'] },
    'Rodgers_Nelson': { label: 'Rodgers \\u2192 Nelson', bonus: 2, players: ['Aaron Rodgers', 'Jordy Nelson'] },
    'Brees_Thomas': { label: 'Brees \\u2192 Thomas', bonus: 2, players: ['Drew Brees', 'Michael Thomas'] },
    'Ryan_Julio': { label: 'Ryan \\u2192 Julio', bonus: 2, players: ['Matt Ryan', 'Julio Jones'] },
    'Burrow_Chase': { label: 'Burrow \\u2192 Chase', bonus: 3, players: ['Joe Burrow', "Ja'Marr Chase"] },
    'Allen_Diggs': { label: 'Allen \\u2192 Diggs', bonus: 2, players: ['Josh Allen', 'Stefon Diggs'] },
    'Prescott_Lamb': { label: 'Prescott \\u2192 Lamb', bonus: 2, players: ['Dak Prescott', 'CeeDee Lamb'] },
    'Hurts_Brown': { label: 'Hurts \\u2192 Brown', bonus: 2, players: ['Jalen Hurts', 'A.J. Brown'] },
    'Lamar_Andrews': { label: 'Lamar \\u2192 Andrews', bonus: 2, players: ['Lamar Jackson', 'Mark Andrews'] },
    'Herbert_Allen': { label: 'Herbert \\u2192 Allen', bonus: 2, players: ['Justin Herbert', 'Keenan Allen'] },
};"""

    final = f"""const TEAMS = [
    'Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears', 'Bengals',
    'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers', 'Texans', 'Colts',
    'Jaguars', 'Chiefs', 'Raiders', 'Chargers', 'Rams', 'Dolphins', 'Vikings',
    'Patriots', 'Saints', 'Giants', 'Jets', 'Eagles', 'Steelers', '49ers',
    'Seahawks', 'Buccaneers', 'Titans', 'Commanders'
];

const DECADES = ['2000s', '2010s', '2020s'];

const POSITIONS = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'OL', 'EDGE', 'DB'];

const PLAYER_DB = [
{player_block}
];

{synergies_js}

function getRandomTeamForPosition(position, usedDecades) {{
    const availableDecades = DECADES.filter(d => !usedDecades.includes(d));
    if (availableDecades.length === 0) return null;

    const decade = availableDecades[Math.floor(Math.random() * availableDecades.length)];
    const teamsInDecade = [...new Set(PLAYER_DB.filter(p => p.decade === decade).map(p => p.team))];
    const team = teamsInDecade[Math.floor(Math.random() * teamsInDecade.length)];

    return {{ team, decade }};
}}
"""

    with open('players.js', 'w', encoding='utf-8') as f:
        f.write(final)


if __name__ == '__main__':
    main()
