const CFB_TEAMS = [
    "Alabama", "Arizona", "Arizona State", "Arkansas", "Auburn", "Baylor",
    "Boston College", "California", "Cincinnati", "Clemson", "Colorado", "Duke",
    "Florida", "Florida State", "Georgia", "Georgia Tech", "Houston", "Illinois",
    "Indiana", "Iowa", "Iowa State", "Kansas", "Kansas State", "Kentucky",
    "Louisville", "LSU", "Maryland", "Miami", "Michigan", "Michigan State",
    "Minnesota", "Mississippi State", "Missouri", "NC State", "Nebraska",
    "North Carolina", "Northwestern", "Ohio State", "Oklahoma", "Oklahoma State",
    "Ole Miss", "Oregon", "Penn State", "Pittsburgh", "Purdue", "Rutgers",
    "South Carolina", "SMU", "Stanford", "Syracuse", "TCU", "Tennessee", "Texas",
    "Texas A&M", "Texas Tech", "UCF", "UCLA", "USC", "Utah", "Vanderbilt",
    "Virginia", "Virginia Tech", "Wake Forest", "Washington", "West Virginia", "Wisconsin"
];

const CFB_YEARS = [2020, 2021, 2022, 2023, 2024];

const CFB_POSITIONS = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'EDGE', 'DB'];

const CFB_PLAYER_DB = [
    // ============ ALABAMA ============
    // 2020
    { name: 'Mac Jones', pos: ['QB'], team: 'Alabama', year: 2020, rating: 94, stats: { YDS: 4500, TD: 41, 'CMP%': '77.4' }, badges: ['Heisman'], synergies: [] },
    { name: 'Najee Harris', pos: ['RB'], team: 'Alabama', year: 2020, rating: 93, stats: { YDS: 1466, TD: 26, YPC: '5.2' }, badges: ['All-American'], synergies: [] },
    { name: 'DeVonta Smith', pos: ['WR1', 'WR2'], team: 'Alabama', year: 2020, rating: 97, stats: { YDS: 1856, TD: 23, REC: 117 }, badges: ['Heisman'], synergies: [] },
    { name: 'Jaylen Waddle', pos: ['WR1', 'WR2'], team: 'Alabama', year: 2020, rating: 91, stats: { YDS: 557, TD: 4, REC: 28 }, badges: ['All-American'], synergies: [] },
    { name: 'Patrick Surtain II', pos: ['DB'], team: 'Alabama', year: 2020, rating: 92, stats: { INT: 1, TKL: 37, PD: 9 }, badges: ['All-American'], synergies: [] },
    // 2021
    { name: 'Bryce Young', pos: ['QB'], team: 'Alabama', year: 2021, rating: 95, stats: { YDS: 4872, TD: 47, 'CMP%': '66.9' }, badges: ['Heisman'], synergies: [] },
    { name: 'Brian Robinson Jr.', pos: ['RB'], team: 'Alabama', year: 2021, rating: 86, stats: { YDS: 1343, TD: 14, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Jameson Williams', pos: ['WR1', 'WR2'], team: 'Alabama', year: 2021, rating: 92, stats: { YDS: 1572, TD: 15, REC: 79 }, badges: ['All-American'], synergies: [] },
    { name: 'John Metchie III', pos: ['WR1', 'WR2'], team: 'Alabama', year: 2021, rating: 87, stats: { YDS: 926, TD: 6, REC: 96 }, badges: [], synergies: ['Young_Metchie'] },
    { name: 'Will Anderson Jr.', pos: ['EDGE'], team: 'Alabama', year: 2021, rating: 95, stats: { TKL: 101, TFL: 34, SACKS: '17.5' }, badges: ['All-American'], synergies: [] },
    // 2022
    { name: 'Bryce Young', pos: ['QB'], team: 'Alabama', year: 2022, rating: 93, stats: { YDS: 3328, TD: 32, 'CMP%': '64.5' }, badges: ['Heisman'], synergies: [] },
    { name: 'Jahmyr Gibbs', pos: ['RB'], team: 'Alabama', year: 2022, rating: 89, stats: { YDS: 926, TD: 7, YPC: '6.1' }, badges: [], synergies: [] },
    { name: 'Will Anderson Jr.', pos: ['EDGE'], team: 'Alabama', year: 2022, rating: 94, stats: { TKL: 51, TFL: 17, SACKS: '10' }, badges: ['All-American'], synergies: [] },
    // 2023
    { name: 'Jalen Milroe', pos: ['QB'], team: 'Alabama', year: 2023, rating: 88, stats: { YDS: 2834, TD: 23, 'CMP%': '65.8' }, badges: [], synergies: [] },
    { name: 'Jase McClellan', pos: ['RB'], team: 'Alabama', year: 2023, rating: 85, stats: { YDS: 890, TD: 8, YPC: '4.9' }, badges: [], synergies: [] },
    // 2024
    { name: 'Jalen Milroe', pos: ['QB'], team: 'Alabama', year: 2024, rating: 89, stats: { YDS: 2652, TD: 16, 'CMP%': '63.5' }, badges: [], synergies: [] },

    // ============ ARIZONA ============
    // 2023
    { name: 'Noah Fifita', pos: ['QB'], team: 'Arizona', year: 2023, rating: 87, stats: { YDS: 2869, TD: 25, 'CMP%': '70.2' }, badges: [], synergies: [] },
    { name: 'Tetairoa McMillan', pos: ['WR1', 'WR2'], team: 'Arizona', year: 2023, rating: 89, stats: { YDS: 1402, TD: 10, REC: 90 }, badges: [], synergies: [] },
    // 2024
    { name: 'Noah Fifita', pos: ['QB'], team: 'Arizona', year: 2024, rating: 85, stats: { YDS: 2791, TD: 17, 'CMP%': '62.8' }, badges: [], synergies: [] },
    { name: 'Tetairoa McMillan', pos: ['WR1', 'WR2'], team: 'Arizona', year: 2024, rating: 91, stats: { YDS: 1319, TD: 8, REC: 84 }, badges: ['All-American'], synergies: [] },

    // ============ AUBURN ============
    // 2020
    { name: 'Bo Nix', pos: ['QB'], team: 'Auburn', year: 2020, rating: 82, stats: { YDS: 2415, TD: 12, 'CMP%': '58.0' }, badges: [], synergies: [] },
    // 2021
    { name: 'Bo Nix', pos: ['QB'], team: 'Auburn', year: 2021, rating: 83, stats: { YDS: 2294, TD: 11, 'CMP%': '60.5' }, badges: [], synergies: [] },
    { name: 'Tank Bigsby', pos: ['RB'], team: 'Auburn', year: 2021, rating: 86, stats: { YDS: 1099, TD: 10, YPC: '4.4' }, badges: [], synergies: [] },

    // ============ CLEMSON ============
    // 2020
    { name: 'Trevor Lawrence', pos: ['QB'], team: 'Clemson', year: 2020, rating: 95, stats: { YDS: 3153, TD: 24, 'CMP%': '69.2' }, badges: ['All-American'], synergies: [] },
    { name: 'Travis Etienne', pos: ['RB'], team: 'Clemson', year: 2020, rating: 93, stats: { YDS: 914, TD: 14, YPC: '5.4' }, badges: ['All-American'], synergies: [] },
    // 2022
    { name: 'DJ Uiagalelei', pos: ['QB'], team: 'Clemson', year: 2022, rating: 82, stats: { YDS: 2521, TD: 22, 'CMP%': '59.4' }, badges: [], synergies: [] },
    // 2024
    { name: 'Cade Klubnik', pos: ['QB'], team: 'Clemson', year: 2024, rating: 88, stats: { YDS: 3303, TD: 33, 'CMP%': '64.0' }, badges: [], synergies: [] },

    // ============ COLORADO ============
    // 2023
    { name: 'Shedeur Sanders', pos: ['QB'], team: 'Colorado', year: 2023, rating: 87, stats: { YDS: 3230, TD: 27, 'CMP%': '69.3' }, badges: [], synergies: [] },
    { name: 'Travis Hunter', pos: ['WR1', 'WR2'], team: 'Colorado', year: 2023, rating: 94, stats: { YDS: 721, TD: 5, REC: 57 }, badges: ['Heisman'], synergies: [] },
    { name: 'Travis Hunter', pos: ['DB'], team: 'Colorado', year: 2023, rating: 95, stats: { INT: 3, TKL: 30, PD: 11 }, badges: ['Heisman'], synergies: [] },
    // 2024
    { name: 'Shedeur Sanders', pos: ['QB'], team: 'Colorado', year: 2024, rating: 90, stats: { YDS: 4134, TD: 37, 'CMP%': '74.0' }, badges: [], synergies: [] },
    { name: 'Travis Hunter', pos: ['WR1', 'WR2'], team: 'Colorado', year: 2024, rating: 97, stats: { YDS: 1258, TD: 15, REC: 96 }, badges: ['Heisman'], synergies: [] },

    // ============ FLORIDA ============
    // 2020
    { name: 'Kyle Trask', pos: ['QB'], team: 'Florida', year: 2020, rating: 91, stats: { YDS: 4283, TD: 43, 'CMP%': '68.9' }, badges: ['Heisman'], synergies: [] },
    { name: 'Kyle Pitts', pos: ['TE'], team: 'Florida', year: 2020, rating: 94, stats: { YDS: 770, TD: 12, REC: 43 }, badges: ['All-American'], synergies: [] },
    // 2024
    { name: 'DJ Lagway', pos: ['QB'], team: 'Florida', year: 2024, rating: 84, stats: { YDS: 1610, TD: 12, 'CMP%': '59.2' }, badges: [], synergies: [] },

    // ============ FLORIDA STATE ============
    // 2023
    { name: 'Jordan Travis', pos: ['QB'], team: 'Florida State', year: 2023, rating: 89, stats: { YDS: 2796, TD: 22, 'CMP%': '66.6' }, badges: [], synergies: [] },
    { name: 'Keon Coleman', pos: ['WR1', 'WR2'], team: 'Florida State', year: 2023, rating: 88, stats: { YDS: 658, TD: 11, REC: 36 }, badges: [], synergies: [] },
    { name: 'Trey Benson', pos: ['RB'], team: 'Florida State', year: 2023, rating: 87, stats: { YDS: 1089, TD: 14, YPC: '6.0' }, badges: [], synergies: [] },
    // 2024
    { name: 'DJ Uiagalelei', pos: ['QB'], team: 'Florida State', year: 2024, rating: 78, stats: { YDS: 1065, TD: 7, 'CMP%': '57.2' }, badges: [], synergies: [] },

    // ============ GEORGIA ============
    // 2021
    { name: 'Stetson Bennett', pos: ['QB'], team: 'Georgia', year: 2021, rating: 89, stats: { YDS: 2862, TD: 29, 'CMP%': '64.1' }, badges: [], synergies: [] },
    { name: 'James Cook', pos: ['RB'], team: 'Georgia', year: 2021, rating: 86, stats: { YDS: 728, TD: 7, YPC: '6.5' }, badges: [], synergies: [] },
    { name: 'Nakobe Dean', pos: ['EDGE'], team: 'Georgia', year: 2021, rating: 92, stats: { TKL: 72, TFL: 10, SACKS: '6' }, badges: ['All-American'], synergies: [] },
    { name: 'Jordan Davis', pos: ['EDGE'], team: 'Georgia', year: 2021, rating: 93, stats: { TKL: 32, TFL: 5, SACKS: '2' }, badges: ['All-American'], synergies: [] },
    // 2022
    { name: 'Stetson Bennett', pos: ['QB'], team: 'Georgia', year: 2022, rating: 91, stats: { YDS: 4127, TD: 27, 'CMP%': '65.8' }, badges: [], synergies: [] },
    { name: 'Brock Bowers', pos: ['TE'], team: 'Georgia', year: 2022, rating: 92, stats: { YDS: 882, TD: 6, REC: 56 }, badges: ['All-American'], synergies: [] },
    { name: 'Jalen Carter', pos: ['EDGE'], team: 'Georgia', year: 2022, rating: 94, stats: { TKL: 32, TFL: 7, SACKS: '3' }, badges: ['All-American'], synergies: [] },
    // 2023
    { name: 'Carson Beck', pos: ['QB'], team: 'Georgia', year: 2023, rating: 90, stats: { YDS: 3941, TD: 24, 'CMP%': '72.4' }, badges: [], synergies: [] },
    { name: 'Brock Bowers', pos: ['TE'], team: 'Georgia', year: 2023, rating: 94, stats: { YDS: 792, TD: 4, REC: 56 }, badges: ['All-American'], synergies: [] },
    // 2024
    { name: 'Carson Beck', pos: ['QB'], team: 'Georgia', year: 2024, rating: 86, stats: { YDS: 3485, TD: 28, 'CMP%': '66.2' }, badges: [], synergies: [] },

    // ============ LSU ============
    // 2020
    { name: 'Joe Burrow', pos: ['QB'], team: 'LSU', year: 2020, rating: 99, stats: { YDS: 5671, TD: 60, 'CMP%': '76.3' }, badges: ['Heisman'], synergies: ['Burrow_Chase'] },
    { name: "Ja'Marr Chase", pos: ['WR1', 'WR2'], team: 'LSU', year: 2020, rating: 96, stats: { YDS: 1780, TD: 20, REC: 84 }, badges: ['All-American'], synergies: ['Burrow_Chase'] },
    { name: 'Clyde Edwards-Helaire', pos: ['RB'], team: 'LSU', year: 2020, rating: 88, stats: { YDS: 1414, TD: 16, YPC: '6.6' }, badges: [], synergies: [] },
    // 2023
    { name: 'Jayden Daniels', pos: ['QB'], team: 'LSU', year: 2023, rating: 97, stats: { YDS: 3812, TD: 40, 'CMP%': '72.1' }, badges: ['Heisman'], synergies: ['Daniels_Nabers'] },
    { name: 'Malik Nabers', pos: ['WR1', 'WR2'], team: 'LSU', year: 2023, rating: 93, stats: { YDS: 1569, TD: 14, REC: 89 }, badges: ['All-American'], synergies: ['Daniels_Nabers'] },
    // 2024
    { name: 'Garrett Nussmeier', pos: ['QB'], team: 'LSU', year: 2024, rating: 87, stats: { YDS: 4035, TD: 29, 'CMP%': '64.5' }, badges: [], synergies: [] },

    // ============ MICHIGAN ============
    // 2021
    { name: 'Aidan Hutchinson', pos: ['EDGE'], team: 'Michigan', year: 2021, rating: 95, stats: { TKL: 62, TFL: 16, SACKS: '14' }, badges: ['All-American'], synergies: [] },
    { name: 'Hassan Haskins', pos: ['RB'], team: 'Michigan', year: 2021, rating: 87, stats: { YDS: 1288, TD: 20, YPC: '5.0' }, badges: [], synergies: [] },
    // 2022
    { name: 'J.J. McCarthy', pos: ['QB'], team: 'Michigan', year: 2022, rating: 86, stats: { YDS: 2719, TD: 22, 'CMP%': '64.2' }, badges: [], synergies: [] },
    { name: 'Blake Corum', pos: ['RB'], team: 'Michigan', year: 2022, rating: 91, stats: { YDS: 1463, TD: 18, YPC: '5.9' }, badges: ['All-American'], synergies: [] },
    // 2023
    { name: 'J.J. McCarthy', pos: ['QB'], team: 'Michigan', year: 2023, rating: 90, stats: { YDS: 2991, TD: 22, 'CMP%': '72.3' }, badges: [], synergies: [] },
    { name: 'Blake Corum', pos: ['RB'], team: 'Michigan', year: 2023, rating: 89, stats: { YDS: 1245, TD: 27, YPC: '5.2' }, badges: [], synergies: [] },
    // 2024
    { name: 'Davis Warren', pos: ['QB'], team: 'Michigan', year: 2024, rating: 78, stats: { YDS: 1017, TD: 6, 'CMP%': '59.0' }, badges: [], synergies: [] },
    { name: 'Kalel Mullings', pos: ['RB'], team: 'Michigan', year: 2024, rating: 86, stats: { YDS: 1026, TD: 11, YPC: '5.4' }, badges: [], synergies: [] },

    // ============ OHIO STATE ============
    // 2020
    { name: 'Justin Fields', pos: ['QB'], team: 'Ohio State', year: 2020, rating: 94, stats: { YDS: 2100, TD: 22, 'CMP%': '70.2' }, badges: ['All-American'], synergies: [] },
    { name: 'Trey Sermon', pos: ['RB'], team: 'Ohio State', year: 2020, rating: 85, stats: { YDS: 870, TD: 4, YPC: '7.5' }, badges: [], synergies: [] },
    { name: 'Chris Olave', pos: ['WR1', 'WR2'], team: 'Ohio State', year: 2020, rating: 91, stats: { YDS: 729, TD: 7, REC: 50 }, badges: ['All-American'], synergies: [] },
    { name: 'Garrett Wilson', pos: ['WR1', 'WR2'], team: 'Ohio State', year: 2020, rating: 89, stats: { YDS: 723, TD: 6, REC: 43 }, badges: [], synergies: [] },
    // 2021
    { name: 'C.J. Stroud', pos: ['QB'], team: 'Ohio State', year: 2021, rating: 95, stats: { YDS: 4435, TD: 44, 'CMP%': '71.9' }, badges: ['Heisman'], synergies: ['Stroud_Wilson', 'Stroud_Olave', 'Stroud_JSN'] },
    { name: 'TreVeyon Henderson', pos: ['RB'], team: 'Ohio State', year: 2021, rating: 88, stats: { YDS: 1248, TD: 15, YPC: '6.8' }, badges: [], synergies: [] },
    { name: 'Chris Olave', pos: ['WR1', 'WR2'], team: 'Ohio State', year: 2021, rating: 93, stats: { YDS: 936, TD: 13, REC: 65 }, badges: ['All-American'], synergies: ['Stroud_Olave'] },
    { name: 'Garrett Wilson', pos: ['WR1', 'WR2'], team: 'Ohio State', year: 2021, rating: 94, stats: { YDS: 1058, TD: 12, REC: 70 }, badges: ['All-American'], synergies: ['Stroud_Wilson'] },
    { name: 'Jaxon Smith-Njigba', pos: ['WR1', 'WR2'], team: 'Ohio State', year: 2021, rating: 92, stats: { YDS: 1606, TD: 9, REC: 95 }, badges: ['All-American'], synergies: ['Stroud_JSN'] },
    // 2022
    { name: 'C.J. Stroud', pos: ['QB'], team: 'Ohio State', year: 2022, rating: 94, stats: { YDS: 3688, TD: 41, 'CMP%': '66.2' }, badges: ['Heisman'], synergies: [] },
    { name: 'Marvin Harrison Jr.', pos: ['WR1', 'WR2'], team: 'Ohio State', year: 2022, rating: 93, stats: { YDS: 1263, TD: 14, REC: 77 }, badges: ['All-American'], synergies: [] },
    // 2023
    { name: 'Kyle McCord', pos: ['QB'], team: 'Ohio State', year: 2023, rating: 86, stats: { YDS: 3170, TD: 24, 'CMP%': '65.4' }, badges: [], synergies: [] },
    { name: 'Marvin Harrison Jr.', pos: ['WR1', 'WR2'], team: 'Ohio State', year: 2023, rating: 97, stats: { YDS: 1211, TD: 14, REC: 67 }, badges: ['Heisman'], synergies: [] },
    // 2024
    { name: 'Will Howard', pos: ['QB'], team: 'Ohio State', year: 2024, rating: 88, stats: { YDS: 3779, TD: 33, 'CMP%': '72.6' }, badges: [], synergies: [] },
    { name: 'Quinshon Judkins', pos: ['RB'], team: 'Ohio State', year: 2024, rating: 87, stats: { YDS: 948, TD: 12, YPC: '5.3' }, badges: [], synergies: [] },

    // ============ OKLAHOMA ============
    // 2021
    { name: 'Caleb Williams', pos: ['QB'], team: 'Oklahoma', year: 2021, rating: 89, stats: { YDS: 1912, TD: 21, 'CMP%': '64.5' }, badges: [], synergies: [] },
    { name: 'Kennedy Brooks', pos: ['RB'], team: 'Oklahoma', year: 2021, rating: 86, stats: { YDS: 1253, TD: 13, YPC: '7.0' }, badges: [], synergies: [] },
    // 2024
    { name: 'Jackson Arnold', pos: ['QB'], team: 'Oklahoma', year: 2024, rating: 81, stats: { YDS: 1790, TD: 9, 'CMP%': '56.8' }, badges: [], synergies: [] },

    // ============ OREGON ============
    // 2023
    { name: 'Bo Nix', pos: ['QB'], team: 'Oregon', year: 2023, rating: 91, stats: { YDS: 4508, TD: 45, 'CMP%': '77.4' }, badges: ['Heisman'], synergies: [] },
    { name: 'Bucky Irving', pos: ['RB'], team: 'Oregon', year: 2023, rating: 87, stats: { YDS: 1180, TD: 11, YPC: '6.0' }, badges: [], synergies: [] },
    // 2024
    { name: 'Dillon Gabriel', pos: ['QB'], team: 'Oregon', year: 2024, rating: 91, stats: { YDS: 3558, TD: 28, 'CMP%': '74.0' }, badges: ['Heisman'], synergies: [] },
    { name: 'Jordan James', pos: ['RB'], team: 'Oregon', year: 2024, rating: 88, stats: { YDS: 1323, TD: 14, YPC: '5.6' }, badges: [], synergies: [] },

    // ============ PENN STATE ============
    // 2022
    { name: 'Sean Clifford', pos: ['QB'], team: 'Penn State', year: 2022, rating: 84, stats: { YDS: 2543, TD: 17, 'CMP%': '61.5' }, badges: [], synergies: [] },
    // 2023
    { name: 'Drew Allar', pos: ['QB'], team: 'Penn State', year: 2023, rating: 86, stats: { YDS: 2631, TD: 25, 'CMP%': '64.6' }, badges: [], synergies: [] },
    // 2024
    { name: 'Drew Allar', pos: ['QB'], team: 'Penn State', year: 2024, rating: 88, stats: { YDS: 2894, TD: 21, 'CMP%': '66.8' }, badges: [], synergies: [] },
    { name: 'Nicholas Singleton', pos: ['RB'], team: 'Penn State', year: 2024, rating: 86, stats: { YDS: 1014, TD: 11, YPC: '5.8' }, badges: [], synergies: [] },

    // ============ TCU ============
    // 2022
    { name: 'Max Duggan', pos: ['QB'], team: 'TCU', year: 2022, rating: 90, stats: { YDS: 3321, TD: 30, 'CMP%': '64.2' }, badges: ['Heisman'], synergies: [] },
    { name: 'Quentin Johnston', pos: ['WR1', 'WR2'], team: 'TCU', year: 2022, rating: 89, stats: { YDS: 1066, TD: 6, REC: 60 }, badges: ['All-American'], synergies: [] },
    { name: 'Kendre Miller', pos: ['RB'], team: 'TCU', year: 2022, rating: 87, stats: { YDS: 1399, TD: 17, YPC: '6.3' }, badges: [], synergies: [] },

    // ============ TENNESSEE ============
    // 2022
    { name: 'Hendon Hooker', pos: ['QB'], team: 'Tennessee', year: 2022, rating: 92, stats: { YDS: 3135, TD: 27, 'CMP%': '69.6' }, badges: ['Heisman'], synergies: [] },
    { name: 'Jalin Hyatt', pos: ['WR1', 'WR2'], team: 'Tennessee', year: 2022, rating: 90, stats: { YDS: 1267, TD: 15, REC: 67 }, badges: ['All-American'], synergies: [] },
    // 2024
    { name: 'Nico Iamaleava', pos: ['QB'], team: 'Tennessee', year: 2024, rating: 84, stats: { YDS: 2512, TD: 19, 'CMP%': '61.5' }, badges: [], synergies: [] },

    // ============ TEXAS ============
    // 2023
    { name: 'Quinn Ewers', pos: ['QB'], team: 'Texas', year: 2023, rating: 88, stats: { YDS: 3479, TD: 22, 'CMP%': '66.3' }, badges: [], synergies: [] },
    { name: 'Jonathon Brooks', pos: ['RB'], team: 'Texas', year: 2023, rating: 89, stats: { YDS: 1139, TD: 10, YPC: '6.3' }, badges: [], synergies: [] },
    { name: 'Xavier Worthy', pos: ['WR1', 'WR2'], team: 'Texas', year: 2023, rating: 90, stats: { YDS: 1014, TD: 5, REC: 75 }, badges: [], synergies: [] },
    // 2024
    { name: 'Quinn Ewers', pos: ['QB'], team: 'Texas', year: 2024, rating: 87, stats: { YDS: 2866, TD: 26, 'CMP%': '66.0' }, badges: [], synergies: [] },

    // ============ USC ============
    // 2022
    { name: 'Caleb Williams', pos: ['QB'], team: 'USC', year: 2022, rating: 96, stats: { YDS: 4537, TD: 42, 'CMP%': '66.2' }, badges: ['Heisman'], synergies: ['Williams_Addison'] },
    { name: 'Jordan Addison', pos: ['WR1', 'WR2'], team: 'USC', year: 2022, rating: 91, stats: { YDS: 875, TD: 8, REC: 59 }, badges: [], synergies: ['Williams_Addison'] },
    { name: 'Travis Dye', pos: ['RB'], team: 'USC', year: 2022, rating: 84, stats: { YDS: 884, TD: 6, YPC: '5.1' }, badges: [], synergies: [] },
    // 2023
    { name: 'Caleb Williams', pos: ['QB'], team: 'USC', year: 2023, rating: 95, stats: { YDS: 3633, TD: 30, 'CMP%': '68.6' }, badges: ['Heisman'], synergies: [] },
    { name: 'MarShawn Lloyd', pos: ['RB'], team: 'USC', year: 2023, rating: 85, stats: { YDS: 820, TD: 8, YPC: '4.8' }, badges: [], synergies: [] },
    // 2024
    { name: 'Miller Moss', pos: ['QB'], team: 'USC', year: 2024, rating: 83, stats: { YDS: 2555, TD: 18, 'CMP%': '65.2' }, badges: [], synergies: [] },

    // ============ WASHINGTON ============
    // 2023
    { name: 'Michael Penix Jr.', pos: ['QB'], team: 'Washington', year: 2023, rating: 93, stats: { YDS: 4903, TD: 36, 'CMP%': '65.4' }, badges: ['Heisman'], synergies: [] },
    { name: 'Rome Odunze', pos: ['WR1', 'WR2'], team: 'Washington', year: 2023, rating: 92, stats: { YDS: 1640, TD: 13, REC: 92 }, badges: ['All-American'], synergies: [] },
    // 2024
    { name: 'Will Rogers', pos: ['QB'], team: 'Washington', year: 2024, rating: 82, stats: { YDS: 2546, TD: 18, 'CMP%': '65.0' }, badges: [], synergies: [] },

    // ============ MIAMI ============
    // 2024
    { name: 'Cam Ward', pos: ['QB'], team: 'Miami', year: 2024, rating: 92, stats: { YDS: 4313, TD: 39, 'CMP%': '66.2' }, badges: ['Heisman'], synergies: [] },
    { name: 'Damien Martinez', pos: ['RB'], team: 'Miami', year: 2024, rating: 86, stats: { YDS: 828, TD: 9, YPC: '4.8' }, badges: [], synergies: [] },
    { name: 'Xavier Restrepo', pos: ['WR1', 'WR2'], team: 'Miami', year: 2024, rating: 88, stats: { YDS: 1127, TD: 11, REC: 69 }, badges: [], synergies: [] },

    // ============ INDIANA ============
    // 2024
    { name: 'Kurtis Rourke', pos: ['QB'], team: 'Indiana', year: 2024, rating: 88, stats: { YDS: 2827, TD: 27, 'CMP%': '68.4' }, badges: [], synergies: [] },

    // ============ BOISE STATE (Note: Not Power 4 but Ashton Jeanty is notable) ============
    // Skipping non-Power 4
];

const CFB_SYNERGIES = {
    'Burrow_Chase': { label: 'Burrow → Chase', bonus: 4, players: ['Joe Burrow', "Ja'Marr Chase"] },
    'Stroud_JSN': { label: 'Stroud → JSN', bonus: 3, players: ['C.J. Stroud', 'Jaxon Smith-Njigba'] },
    'Stroud_Wilson': { label: 'Stroud → Wilson', bonus: 3, players: ['C.J. Stroud', 'Garrett Wilson'] },
    'Stroud_Olave': { label: 'Stroud → Olave', bonus: 3, players: ['C.J. Stroud', 'Chris Olave'] },
    'Young_Metchie': { label: 'Young → Metchie', bonus: 2, players: ['Bryce Young', 'John Metchie III'] },
    'Williams_Addison': { label: 'Williams → Addison', bonus: 3, players: ['Caleb Williams', 'Jordan Addison'] },
    'Daniels_Nabers': { label: 'Daniels → Nabers', bonus: 3, players: ['Jayden Daniels', 'Malik Nabers'] },
};
