const TEAMS = [
    'Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears', 'Bengals',
    'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers', 'Texans', 'Colts',
    'Jaguars', 'Chiefs', 'Raiders', 'Chargers', 'Rams', 'Dolphins', 'Vikings',
    'Patriots', 'Saints', 'Giants', 'Jets', 'Eagles', 'Steelers', '49ers',
    'Seahawks', 'Buccaneers', 'Titans', 'Commanders'
];

const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

const POSITIONS = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'EDGE', 'DB'];

// Comprehensive player database — every notable player per franchise/era
const PLAYER_DB = [
    // ============ 49ERS ============
    { name: 'Joe Montana', pos: ['QB'], team: '49ers', decade: '1980s', rating: 97, stats: { YDS: 3521, TD: 26, 'CMP%': '63.7' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice'] },
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 99, stats: { YDS: 1364, TD: 13, YPR: '17.8' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice'] },
    { name: 'Roger Craig', pos: ['RB'], team: '49ers', decade: '1980s', rating: 87, stats: { YDS: 1138, TD: 9, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Ronnie Lott', pos: ['DB'], team: '49ers', decade: '1980s', rating: 97, stats: { INT: 8, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Fred Dean', pos: ['EDGE'], team: '49ers', decade: '1980s', rating: 89, stats: { SACKS: 12, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Dwight Clark', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 82, stats: { YDS: 880, TD: 6, YPR: '13.1' }, badges: [], synergies: [] },
    { name: 'Russ Francis', pos: ['TE'], team: '49ers', decade: '1980s', rating: 78, stats: { YDS: 410, TD: 3, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'Wendell Tyler', pos: ['RB'], team: '49ers', decade: '1980s', rating: 80, stats: { YDS: 1025, TD: 7, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Charles Haley', pos: ['EDGE'], team: '49ers', decade: '1980s', rating: 88, stats: { SACKS: 11.5, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Eric Wright', pos: ['DB'], team: '49ers', decade: '1980s', rating: 82, stats: { INT: 5, PD: 11 }, badges: [], synergies: [] },
    { name: 'John Taylor', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 83, stats: { YDS: 1011, TD: 8, YPR: '17.2' }, badges: [], synergies: [] },

    { name: 'Steve Young', pos: ['QB'], team: '49ers', decade: '1990s', rating: 96, stats: { YDS: 3029, TD: 25, 'CMP%': '64.3' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Young_Rice'] },
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1990s', rating: 98, stats: { YDS: 1254, TD: 11, YPR: '15.1' }, badges: ['HOF', 'MVP'], synergies: ['Young_Rice'] },
    { name: 'Garrison Hearst', pos: ['RB'], team: '49ers', decade: '1990s', rating: 83, stats: { YDS: 1175, TD: 7, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: '49ers', decade: '1990s', rating: 90, stats: { YDS: 1210, TD: 12, YPR: '15.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Bryant Young', pos: ['EDGE'], team: '49ers', decade: '1990s', rating: 86, stats: { SACKS: 9.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Merton Hanks', pos: ['DB'], team: '49ers', decade: '1990s', rating: 84, stats: { INT: 7, PD: 13 }, badges: [], synergies: [] },
    { name: 'Brent Jones', pos: ['TE'], team: '49ers', decade: '1990s', rating: 84, stats: { YDS: 670, TD: 6, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Dana Stubblefield', pos: ['EDGE'], team: '49ers', decade: '1990s', rating: 85, stats: { SACKS: 10, FF: 2 }, badges: ['DPOY'], synergies: [] },
    { name: 'Ken Norton Jr.', pos: ['DB'], team: '49ers', decade: '1990s', rating: 80, stats: { INT: 2, PD: 8 }, badges: [], synergies: [] },

    { name: 'Jeff Garcia', pos: ['QB'], team: '49ers', decade: '2000s', rating: 83, stats: { YDS: 3538, TD: 23, 'CMP%': '61.2' }, badges: [], synergies: [] },
    { name: 'Frank Gore', pos: ['RB'], team: '49ers', decade: '2000s', rating: 87, stats: { YDS: 1181, TD: 7, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Vernon Davis', pos: ['TE'], team: '49ers', decade: '2000s', rating: 85, stats: { YDS: 748, TD: 9, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Patrick Willis', pos: ['DB'], team: '49ers', decade: '2000s', rating: 93, stats: { INT: 3, PD: 10 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Justin Smith', pos: ['EDGE'], team: '49ers', decade: '2000s', rating: 88, stats: { SACKS: 8.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },

    { name: 'Colin Kaepernick', pos: ['QB'], team: '49ers', decade: '2010s', rating: 82, stats: { YDS: 3197, TD: 21, 'CMP%': '59.8' }, badges: [], synergies: [] },
    { name: 'Frank Gore', pos: ['RB'], team: '49ers', decade: '2010s', rating: 85, stats: { YDS: 1128, TD: 7, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'George Kittle', pos: ['TE'], team: '49ers', decade: '2010s', rating: 91, stats: { YDS: 1148, TD: 5, YPR: '14.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'NaVorro Bowman', pos: ['DB'], team: '49ers', decade: '2010s', rating: 90, stats: { INT: 3, PD: 9 }, badges: ['All-Pro'], synergies: [] },
    { name: 'DeForest Buckner', pos: ['EDGE'], team: '49ers', decade: '2010s', rating: 88, stats: { SACKS: 12, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Richard Sherman', pos: ['DB'], team: '49ers', decade: '2010s', rating: 87, stats: { INT: 3, PD: 11 }, badges: [], synergies: [] },
    { name: 'Jimmy Garoppolo', pos: ['QB'], team: '49ers', decade: '2010s', rating: 79, stats: { YDS: 3478, TD: 22, 'CMP%': '67.0' }, badges: [], synergies: [] },

    { name: 'Brock Purdy', pos: ['QB'], team: '49ers', decade: '2020s', rating: 89, stats: { YDS: 4280, TD: 31, 'CMP%': '67.2' }, badges: [], synergies: [] },
    { name: 'Christian McCaffrey', pos: ['RB'], team: '49ers', decade: '2020s', rating: 94, stats: { YDS: 1459, TD: 14, YPC: '5.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Nick Bosa', pos: ['EDGE'], team: '49ers', decade: '2020s', rating: 95, stats: { SACKS: 15.5, FF: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'Deebo Samuel', pos: ['WR1', 'WR2'], team: '49ers', decade: '2020s', rating: 88, stats: { YDS: 1312, TD: 8, YPR: '16.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Brandon Aiyuk', pos: ['WR1', 'WR2'], team: '49ers', decade: '2020s', rating: 86, stats: { YDS: 1342, TD: 7, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Fred Warner', pos: ['DB'], team: '49ers', decade: '2020s', rating: 90, stats: { INT: 2, PD: 9 }, badges: ['All-Pro'], synergies: [] },
    { name: 'George Kittle', pos: ['TE'], team: '49ers', decade: '2020s', rating: 89, stats: { YDS: 902, TD: 7, YPR: '13.2' }, badges: [], synergies: [] },

    // ============ COWBOYS ============
    { name: 'Roger Staubach', pos: ['QB'], team: 'Cowboys', decade: '1970s', rating: 91, stats: { YDS: 2620, TD: 18, 'CMP%': '57.0' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Tony Dorsett', pos: ['RB'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { YDS: 1325, TD: 9, YPC: '4.7' }, badges: ['HOF'], synergies: [] },
    { name: 'Drew Pearson', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { YDS: 962, TD: 6, YPR: '16.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Too Tall Jones', pos: ['EDGE'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { SACKS: 12, FF: 3 }, badges: [], synergies: [] },
    { name: 'Harvey Martin', pos: ['EDGE'], team: 'Cowboys', decade: '1970s', rating: 87, stats: { SACKS: 13, FF: 3 }, badges: ['SB MVP'], synergies: [] },
    { name: 'Cliff Harris', pos: ['DB'], team: 'Cowboys', decade: '1970s', rating: 85, stats: { INT: 5, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Charlie Waters', pos: ['DB'], team: 'Cowboys', decade: '1970s', rating: 83, stats: { INT: 5, PD: 11 }, badges: [], synergies: [] },
    { name: 'Billy Joe DuPree', pos: ['TE'], team: 'Cowboys', decade: '1970s', rating: 80, stats: { YDS: 520, TD: 5, YPR: '12.4' }, badges: [], synergies: [] },
    { name: 'Robert Newhouse', pos: ['RB'], team: 'Cowboys', decade: '1970s', rating: 78, stats: { YDS: 818, TD: 6, YPC: '3.9' }, badges: [], synergies: [] },

    { name: 'Tony Dorsett', pos: ['RB'], team: 'Cowboys', decade: '1980s', rating: 88, stats: { YDS: 1321, TD: 8, YPC: '4.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Danny White', pos: ['QB'], team: 'Cowboys', decade: '1980s', rating: 82, stats: { YDS: 3157, TD: 21, 'CMP%': '56.8' }, badges: [], synergies: [] },
    { name: 'Tony Hill', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1980s', rating: 82, stats: { YDS: 951, TD: 7, YPR: '15.2' }, badges: [], synergies: [] },
    { name: 'Herschel Walker', pos: ['RB'], team: 'Cowboys', decade: '1980s', rating: 84, stats: { YDS: 1514, TD: 7, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'Randy White', pos: ['EDGE'], team: 'Cowboys', decade: '1980s', rating: 90, stats: { SACKS: 10, FF: 3 }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Everson Walls', pos: ['DB'], team: 'Cowboys', decade: '1980s', rating: 85, stats: { INT: 9, PD: 14 }, badges: [], synergies: [] },
    { name: 'Doug Cosbie', pos: ['TE'], team: 'Cowboys', decade: '1980s', rating: 80, stats: { YDS: 643, TD: 5, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Michael Irvin', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1980s', rating: 80, stats: { YDS: 654, TD: 4, YPR: '14.8' }, badges: ['HOF'], synergies: [] },

    { name: 'Troy Aikman', pos: ['QB'], team: 'Cowboys', decade: '1990s', rating: 89, stats: { YDS: 3191, TD: 19, 'CMP%': '61.5' }, badges: ['HOF', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'Emmitt Smith', pos: ['RB'], team: 'Cowboys', decade: '1990s', rating: 95, stats: { YDS: 1484, TD: 14, YPC: '4.2' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'Michael Irvin', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1990s', rating: 92, stats: { YDS: 1372, TD: 9, YPR: '16.2' }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Deion Sanders', pos: ['DB'], team: 'Cowboys', decade: '1990s', rating: 98, stats: { INT: 6, PD: 18 }, badges: ['HOF', 'DPOY'], synergies: ['Cowboys90s'] },
    { name: 'Charles Haley', pos: ['EDGE'], team: 'Cowboys', decade: '1990s', rating: 89, stats: { SACKS: 11, FF: 3 }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Jay Novacek', pos: ['TE'], team: 'Cowboys', decade: '1990s', rating: 84, stats: { YDS: 705, TD: 5, YPR: '11.0' }, badges: [], synergies: ['Cowboys90s'] },
    { name: 'Darren Woodson', pos: ['DB'], team: 'Cowboys', decade: '1990s', rating: 87, stats: { INT: 5, PD: 13 }, badges: [], synergies: [] },
    { name: 'Larry Allen', pos: ['RB'], team: 'Cowboys', decade: '1990s', rating: 85, stats: { YDS: 0, TD: 0, YPC: '0' }, badges: ['HOF'], synergies: [] },
    { name: 'Alvin Harper', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1990s', rating: 80, stats: { YDS: 892, TD: 6, YPR: '18.2' }, badges: [], synergies: [] },

    { name: 'Dak Prescott', pos: ['QB'], team: 'Cowboys', decade: '2020s', rating: 87, stats: { YDS: 4516, TD: 36, 'CMP%': '69.5' }, badges: [], synergies: [] },
    { name: 'CeeDee Lamb', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '2020s', rating: 92, stats: { YDS: 1749, TD: 12, YPR: '14.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Micah Parsons', pos: ['EDGE'], team: 'Cowboys', decade: '2020s', rating: 95, stats: { SACKS: 14, FF: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'Trevon Diggs', pos: ['DB'], team: 'Cowboys', decade: '2020s', rating: 88, stats: { INT: 8, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tony Pollard', pos: ['RB'], team: 'Cowboys', decade: '2020s', rating: 82, stats: { YDS: 1005, TD: 6, YPC: '4.9' }, badges: [], synergies: [] },
    { name: 'Jake Ferguson', pos: ['TE'], team: 'Cowboys', decade: '2020s', rating: 81, stats: { YDS: 761, TD: 5, YPR: '10.6' }, badges: [], synergies: [] },
    { name: 'DeMarcus Lawrence', pos: ['EDGE'], team: 'Cowboys', decade: '2020s', rating: 85, stats: { SACKS: 9, FF: 3 }, badges: [], synergies: [] },

    // ============ PATRIOTS ============
    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2000s', rating: 96, stats: { YDS: 3997, TD: 30, 'CMP%': '63.0' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Moss', 'Brady_Gronk'] },
    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2000s', rating: 96, stats: { YDS: 1493, TD: 23, YPR: '17.0' }, badges: ['HOF'], synergies: ['Brady_Moss'] },
    { name: 'Corey Dillon', pos: ['RB'], team: 'Patriots', decade: '2000s', rating: 84, stats: { YDS: 1396, TD: 12, YPC: '4.7' }, badges: [], synergies: [] },
    { name: 'Wes Welker', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2000s', rating: 89, stats: { YDS: 1175, TD: 8, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Richard Seymour', pos: ['EDGE'], team: 'Patriots', decade: '2000s', rating: 91, stats: { SACKS: 8, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Ty Law', pos: ['DB'], team: 'Patriots', decade: '2000s', rating: 90, stats: { INT: 6, PD: 15 }, badges: ['HOF'], synergies: [] },
    { name: 'Ben Coates', pos: ['TE'], team: 'Patriots', decade: '2000s', rating: 80, stats: { YDS: 505, TD: 3, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Tedy Bruschi', pos: ['DB'], team: 'Patriots', decade: '2000s', rating: 83, stats: { INT: 3, PD: 8 }, badges: [], synergies: [] },
    { name: 'Asante Samuel', pos: ['DB'], team: 'Patriots', decade: '2000s', rating: 86, stats: { INT: 7, PD: 14 }, badges: [], synergies: [] },

    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2010s', rating: 95, stats: { YDS: 4355, TD: 32, 'CMP%': '64.0' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Gronk'] },
    { name: 'Rob Gronkowski', pos: ['TE'], team: 'Patriots', decade: '2010s', rating: 97, stats: { YDS: 1108, TD: 12, YPR: '15.4' }, badges: ['HOF'], synergies: ['Brady_Gronk'] },
    { name: 'Julian Edelman', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2010s', rating: 85, stats: { YDS: 1024, TD: 6, YPR: '11.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Stephon Gilmore', pos: ['DB'], team: 'Patriots', decade: '2010s', rating: 91, stats: { INT: 6, PD: 16 }, badges: ['DPOY'], synergies: [] },
    { name: 'Dont\'a Hightower', pos: ['EDGE'], team: 'Patriots', decade: '2010s', rating: 84, stats: { SACKS: 6.5, FF: 2 }, badges: [], synergies: [] },
    { name: 'LeGarrette Blount', pos: ['RB'], team: 'Patriots', decade: '2010s', rating: 80, stats: { YDS: 1061, TD: 18, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Chandler Jones', pos: ['EDGE'], team: 'Patriots', decade: '2010s', rating: 86, stats: { SACKS: 12.5, FF: 4 }, badges: [], synergies: [] },

    // ============ CHIEFS ============
    { name: 'Len Dawson', pos: ['QB'], team: 'Chiefs', decade: '1960s', rating: 88, stats: { YDS: 2527, TD: 20, 'CMP%': '57.1' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Otis Taylor', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '1960s', rating: 85, stats: { YDS: 1110, TD: 7, YPR: '18.9' }, badges: [], synergies: [] },
    { name: 'Bobby Bell', pos: ['EDGE'], team: 'Chiefs', decade: '1960s', rating: 90, stats: { SACKS: '11*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Buck Buchanan', pos: ['EDGE'], team: 'Chiefs', decade: '1960s', rating: 89, stats: { SACKS: '10*', FF: 2 }, badges: ['HOF'], synergies: [] },
    { name: 'Emmitt Thomas', pos: ['DB'], team: 'Chiefs', decade: '1960s', rating: 86, stats: { INT: 8, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Mike Garrett', pos: ['RB'], team: 'Chiefs', decade: '1960s', rating: 80, stats: { YDS: 732, TD: 5, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Fred Arbanas', pos: ['TE'], team: 'Chiefs', decade: '1960s', rating: 82, stats: { YDS: 578, TD: 4, YPR: '14.5' }, badges: [], synergies: [] },

    { name: 'Patrick Mahomes', pos: ['QB'], team: 'Chiefs', decade: '2020s', rating: 98, stats: { YDS: 4839, TD: 37, 'CMP%': '66.3' }, badges: ['MVP', 'SB MVP'], synergies: ['Mahomes_Kelce'] },
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2020s', rating: 94, stats: { YDS: 1066, TD: 9, YPR: '11.3' }, badges: ['All-Pro'], synergies: ['Mahomes_Kelce'] },
    { name: 'Chris Jones', pos: ['EDGE'], team: 'Chiefs', decade: '2020s', rating: 92, stats: { SACKS: 13, FF: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Isiah Pacheco', pos: ['RB'], team: 'Chiefs', decade: '2020s', rating: 82, stats: { YDS: 935, TD: 7, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Rashee Rice', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '2020s', rating: 84, stats: { YDS: 938, TD: 7, YPR: '12.2' }, badges: [], synergies: [] },
    { name: 'L\'Jarius Sneed', pos: ['DB'], team: 'Chiefs', decade: '2020s', rating: 84, stats: { INT: 4, PD: 12 }, badges: [], synergies: [] },
    { name: 'Tyrann Mathieu', pos: ['DB'], team: 'Chiefs', decade: '2020s', rating: 85, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },

    { name: 'Priest Holmes', pos: ['RB'], team: 'Chiefs', decade: '2000s', rating: 89, stats: { YDS: 1420, TD: 21, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Tony Gonzalez', pos: ['TE'], team: 'Chiefs', decade: '2000s', rating: 95, stats: { YDS: 1103, TD: 8, YPR: '12.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Derrick Thomas', pos: ['EDGE'], team: 'Chiefs', decade: '2000s', rating: 88, stats: { SACKS: 11, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Dante Hall', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '2000s', rating: 79, stats: { YDS: 512, TD: 3, YPR: '11.4' }, badges: [], synergies: [] },
    { name: 'Trent Green', pos: ['QB'], team: 'Chiefs', decade: '2000s', rating: 83, stats: { YDS: 3783, TD: 24, 'CMP%': '62.5' }, badges: [], synergies: [] },

    { name: 'Alex Smith', pos: ['QB'], team: 'Chiefs', decade: '2010s', rating: 83, stats: { YDS: 3486, TD: 23, 'CMP%': '65.7' }, badges: [], synergies: [] },
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2010s', rating: 95, stats: { YDS: 1229, TD: 10, YPR: '12.0' }, badges: [], synergies: ['Mahomes_Kelce'] },
    { name: 'Tyreek Hill', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '2010s', rating: 91, stats: { YDS: 1183, TD: 12, YPR: '14.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jamaal Charles', pos: ['RB'], team: 'Chiefs', decade: '2010s', rating: 87, stats: { YDS: 1287, TD: 12, YPC: '5.5' }, badges: [], synergies: [] },
    { name: 'Justin Houston', pos: ['EDGE'], team: 'Chiefs', decade: '2010s', rating: 89, stats: { SACKS: 15, FF: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Marcus Peters', pos: ['DB'], team: 'Chiefs', decade: '2010s', rating: 86, stats: { INT: 7, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Eric Berry', pos: ['DB'], team: 'Chiefs', decade: '2010s', rating: 90, stats: { INT: 5, PD: 12 }, badges: ['All-Pro'], synergies: [] },

    // ============ STEELERS ============
    { name: 'Terry Bradshaw', pos: ['QB'], team: 'Steelers', decade: '1970s', rating: 88, stats: { YDS: 2915, TD: 20, 'CMP%': '51.9' }, badges: ['HOF', 'MVP'], synergies: ['Steelers70s'] },
    { name: 'Franco Harris', pos: ['RB'], team: 'Steelers', decade: '1970s', rating: 88, stats: { YDS: 1128, TD: 11, YPC: '4.2' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'Lynn Swann', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1970s', rating: 87, stats: { YDS: 820, TD: 7, YPR: '17.5' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'John Stallworth', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1970s', rating: 87, stats: { YDS: 946, TD: 8, YPR: '18.6' }, badges: ['HOF'], synergies: ['Steelers70s'] },
    { name: 'Joe Greene', pos: ['EDGE'], team: 'Steelers', decade: '1970s', rating: 96, stats: { SACKS: '13*', FF: 4 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Mel Blount', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 93, stats: { INT: 6, PD: 15 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Jack Ham', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 91, stats: { INT: 5, PD: 12 }, badges: ['HOF'], synergies: ['Steelers70s'] },
    { name: 'Jack Lambert', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 92, stats: { INT: 4, PD: 13 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Rocky Bleier', pos: ['RB'], team: 'Steelers', decade: '1970s', rating: 76, stats: { YDS: 818, TD: 5, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'L.C. Greenwood', pos: ['EDGE'], team: 'Steelers', decade: '1970s', rating: 88, stats: { SACKS: '11*', FF: 3 }, badges: [], synergies: ['Steelers70s'] },

    { name: 'Rod Woodson', pos: ['DB'], team: 'Steelers', decade: '1990s', rating: 95, stats: { INT: 7, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Greg Lloyd', pos: ['EDGE'], team: 'Steelers', decade: '1990s', rating: 87, stats: { SACKS: 9, FF: 4 }, badges: [], synergies: [] },
    { name: 'Kevin Greene', pos: ['EDGE'], team: 'Steelers', decade: '1990s', rating: 90, stats: { SACKS: 14, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Neil O\'Donnell', pos: ['QB'], team: 'Steelers', decade: '1990s', rating: 77, stats: { YDS: 2828, TD: 16, 'CMP%': '57.8' }, badges: [], synergies: [] },
    { name: 'Jerome Bettis', pos: ['RB'], team: 'Steelers', decade: '1990s', rating: 87, stats: { YDS: 1431, TD: 9, YPC: '3.9' }, badges: ['HOF'], synergies: [] },
    { name: 'Yancey Thigpen', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1990s', rating: 82, stats: { YDS: 1056, TD: 7, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Carnell Lake', pos: ['DB'], team: 'Steelers', decade: '1990s', rating: 84, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },

    { name: 'Ben Roethlisberger', pos: ['QB'], team: 'Steelers', decade: '2000s', rating: 87, stats: { YDS: 3490, TD: 24, 'CMP%': '62.1' }, badges: [], synergies: [] },
    { name: 'Troy Polamalu', pos: ['DB'], team: 'Steelers', decade: '2000s', rating: 93, stats: { INT: 6, PD: 14 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Hines Ward', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2000s', rating: 86, stats: { YDS: 1103, TD: 8, YPR: '13.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'James Harrison', pos: ['EDGE'], team: 'Steelers', decade: '2000s', rating: 89, stats: { SACKS: 12, FF: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Willie Parker', pos: ['RB'], team: 'Steelers', decade: '2000s', rating: 82, stats: { YDS: 1316, TD: 8, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Heath Miller', pos: ['TE'], team: 'Steelers', decade: '2000s', rating: 83, stats: { YDS: 694, TD: 5, YPR: '11.2' }, badges: [], synergies: [] },

    { name: 'Antonio Brown', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2010s', rating: 94, stats: { YDS: 1499, TD: 11, YPR: '13.5' }, badges: ['All-Pro'], synergies: [] },
    { name: "Le'Veon Bell", pos: ['RB'], team: 'Steelers', decade: '2010s', rating: 89, stats: { YDS: 1291, TD: 9, YPC: '4.3' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Ben Roethlisberger', pos: ['QB'], team: 'Steelers', decade: '2010s', rating: 86, stats: { YDS: 4251, TD: 29, 'CMP%': '64.2' }, badges: [], synergies: [] },
    { name: 'Cameron Heyward', pos: ['EDGE'], team: 'Steelers', decade: '2010s', rating: 88, stats: { SACKS: 9.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Joe Haden', pos: ['DB'], team: 'Steelers', decade: '2010s', rating: 82, stats: { INT: 3, PD: 11 }, badges: [], synergies: [] },

    { name: 'T.J. Watt', pos: ['EDGE'], team: 'Steelers', decade: '2020s', rating: 96, stats: { SACKS: 17.5, FF: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Najee Harris', pos: ['RB'], team: 'Steelers', decade: '2020s', rating: 80, stats: { YDS: 1034, TD: 7, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'George Pickens', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2020s', rating: 83, stats: { YDS: 1106, TD: 5, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Minkah Fitzpatrick', pos: ['DB'], team: 'Steelers', decade: '2020s', rating: 87, stats: { INT: 4, PD: 10 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Pat Freiermuth', pos: ['TE'], team: 'Steelers', decade: '2020s', rating: 80, stats: { YDS: 685, TD: 5, YPR: '10.5' }, badges: [], synergies: [] },

    // ============ PACKERS ============
    { name: 'Bart Starr', pos: ['QB'], team: 'Packers', decade: '1960s', rating: 91, stats: { YDS: 2257, TD: 16, 'CMP%': '57.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Jim Taylor', pos: ['RB'], team: 'Packers', decade: '1960s', rating: 87, stats: { YDS: 1169, TD: 15, YPC: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Paul Hornung', pos: ['RB'], team: 'Packers', decade: '1960s', rating: 85, stats: { YDS: 681, TD: 13, YPC: '3.8' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Herb Adderley', pos: ['DB'], team: 'Packers', decade: '1960s', rating: 90, stats: { INT: 7, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Davis', pos: ['EDGE'], team: 'Packers', decade: '1960s', rating: 89, stats: { SACKS: '12*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Wood', pos: ['DB'], team: 'Packers', decade: '1960s', rating: 88, stats: { INT: 8, PD: 11 }, badges: ['HOF'], synergies: [] },
    { name: 'Boyd Dowler', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1960s', rating: 82, stats: { YDS: 892, TD: 7, YPR: '17.5' }, badges: [], synergies: [] },
    { name: 'Max McGee', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1960s', rating: 79, stats: { YDS: 682, TD: 5, YPR: '16.8' }, badges: [], synergies: [] },
    { name: 'Ron Kramer', pos: ['TE'], team: 'Packers', decade: '1960s', rating: 82, stats: { YDS: 575, TD: 5, YPR: '14.1' }, badges: [], synergies: [] },

    { name: 'Brett Favre', pos: ['QB'], team: 'Packers', decade: '1990s', rating: 94, stats: { YDS: 3882, TD: 33, 'CMP%': '61.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Reggie White', pos: ['EDGE'], team: 'Packers', decade: '1990s', rating: 96, stats: { SACKS: 14, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Sterling Sharpe', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1990s', rating: 90, stats: { YDS: 1274, TD: 12, YPR: '13.6' }, badges: [], synergies: [] },
    { name: 'Robert Brooks', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1990s', rating: 83, stats: { YDS: 1010, TD: 7, YPR: '15.8' }, badges: [], synergies: [] },
    { name: 'Edgar Bennett', pos: ['RB'], team: 'Packers', decade: '1990s', rating: 79, stats: { YDS: 899, TD: 6, YPC: '3.8' }, badges: [], synergies: [] },
    { name: 'LeRoy Butler', pos: ['DB'], team: 'Packers', decade: '1990s', rating: 87, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Dorsey Levens', pos: ['RB'], team: 'Packers', decade: '1990s', rating: 82, stats: { YDS: 1093, TD: 7, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Mark Chmura', pos: ['TE'], team: 'Packers', decade: '1990s', rating: 82, stats: { YDS: 581, TD: 6, YPR: '11.4' }, badges: [], synergies: [] },

    { name: 'Aaron Rodgers', pos: ['QB'], team: 'Packers', decade: '2010s', rating: 97, stats: { YDS: 4002, TD: 35, 'CMP%': '65.8' }, badges: ['MVP'], synergies: ['Rodgers_Adams', 'Rodgers_Nelson'] },
    { name: 'Davante Adams', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2010s', rating: 93, stats: { YDS: 1374, TD: 14, YPR: '14.0' }, badges: ['All-Pro'], synergies: ['Rodgers_Adams'] },
    { name: 'Jordy Nelson', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2010s', rating: 88, stats: { YDS: 1257, TD: 13, YPR: '15.1' }, badges: [], synergies: ['Rodgers_Nelson'] },
    { name: 'Eddie Lacy', pos: ['RB'], team: 'Packers', decade: '2010s', rating: 80, stats: { YDS: 1178, TD: 9, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Clay Matthews', pos: ['EDGE'], team: 'Packers', decade: '2010s', rating: 86, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: 'Ha Ha Clinton-Dix', pos: ['DB'], team: 'Packers', decade: '2010s', rating: 80, stats: { INT: 5, PD: 10 }, badges: [], synergies: [] },
    { name: 'Aaron Jones', pos: ['RB'], team: 'Packers', decade: '2010s', rating: 85, stats: { YDS: 1084, TD: 16, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Jimmy Graham', pos: ['TE'], team: 'Packers', decade: '2010s', rating: 80, stats: { YDS: 636, TD: 6, YPR: '11.8' }, badges: [], synergies: [] },

    { name: 'Jordan Love', pos: ['QB'], team: 'Packers', decade: '2020s', rating: 85, stats: { YDS: 4159, TD: 32, 'CMP%': '64.2' }, badges: [], synergies: [] },
    { name: 'Josh Jacobs', pos: ['RB'], team: 'Packers', decade: '2020s', rating: 86, stats: { YDS: 1329, TD: 12, YPC: '4.7' }, badges: [], synergies: [] },
    { name: 'Jayden Reed', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2020s', rating: 82, stats: { YDS: 992, TD: 6, YPR: '13.5' }, badges: [], synergies: [] },
    { name: 'Jaire Alexander', pos: ['DB'], team: 'Packers', decade: '2020s', rating: 87, stats: { INT: 3, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Rashan Gary', pos: ['EDGE'], team: 'Packers', decade: '2020s', rating: 85, stats: { SACKS: 9.5, FF: 2 }, badges: [], synergies: [] },
    { name: 'Tucker Kraft', pos: ['TE'], team: 'Packers', decade: '2020s', rating: 80, stats: { YDS: 742, TD: 6, YPR: '11.8' }, badges: [], synergies: [] },

    // ============ BILLS ============
    { name: 'O.J. Simpson', pos: ['RB'], team: 'Bills', decade: '1970s', rating: 95, stats: { YDS: 1817, TD: 12, YPC: '5.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Joe Ferguson', pos: ['QB'], team: 'Bills', decade: '1970s', rating: 77, stats: { YDS: 2519, TD: 14, 'CMP%': '51.8' }, badges: [], synergies: [] },
    { name: 'Robert James', pos: ['DB'], team: 'Bills', decade: '1970s', rating: 78, stats: { INT: 4, PD: 9 }, badges: [], synergies: [] },

    { name: 'Jim Kelly', pos: ['QB'], team: 'Bills', decade: '1990s', rating: 90, stats: { YDS: 3527, TD: 23, 'CMP%': '60.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Thurman Thomas', pos: ['RB'], team: 'Bills', decade: '1990s', rating: 92, stats: { YDS: 1315, TD: 10, YPC: '4.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Andre Reed', pos: ['WR1', 'WR2'], team: 'Bills', decade: '1990s', rating: 88, stats: { YDS: 1113, TD: 8, YPR: '13.9' }, badges: ['HOF'], synergies: [] },
    { name: 'Bruce Smith', pos: ['EDGE'], team: 'Bills', decade: '1990s', rating: 95, stats: { SACKS: 13.5, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Cornelius Bennett', pos: ['EDGE'], team: 'Bills', decade: '1990s', rating: 85, stats: { SACKS: 8, FF: 3 }, badges: [], synergies: [] },
    { name: 'Nate Odomes', pos: ['DB'], team: 'Bills', decade: '1990s', rating: 82, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },
    { name: 'Pete Metzelaars', pos: ['TE'], team: 'Bills', decade: '1990s', rating: 77, stats: { YDS: 417, TD: 4, YPR: '10.8' }, badges: [], synergies: [] },

    { name: 'Josh Allen', pos: ['QB'], team: 'Bills', decade: '2020s', rating: 94, stats: { YDS: 4306, TD: 35, 'CMP%': '63.3' }, badges: [], synergies: [] },
    { name: 'Stefon Diggs', pos: ['WR1', 'WR2'], team: 'Bills', decade: '2020s', rating: 89, stats: { YDS: 1429, TD: 10, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Von Miller', pos: ['EDGE'], team: 'Bills', decade: '2020s', rating: 84, stats: { SACKS: 8, FF: 2 }, badges: [], synergies: [] },
    { name: 'James Cook', pos: ['RB'], team: 'Bills', decade: '2020s', rating: 83, stats: { YDS: 1122, TD: 8, YPC: '5.1' }, badges: [], synergies: [] },
    { name: 'Dalton Kincaid', pos: ['TE'], team: 'Bills', decade: '2020s', rating: 82, stats: { YDS: 842, TD: 4, YPR: '10.5' }, badges: [], synergies: [] },
    { name: 'Tre White', pos: ['DB'], team: 'Bills', decade: '2020s', rating: 85, stats: { INT: 3, PD: 13 }, badges: ['All-Pro'], synergies: [] },

    // ============ EAGLES ============
    { name: 'Reggie White', pos: ['EDGE'], team: 'Eagles', decade: '1980s', rating: 97, stats: { SACKS: 18, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Randall Cunningham', pos: ['QB'], team: 'Eagles', decade: '1980s', rating: 87, stats: { YDS: 3400, TD: 21, 'CMP%': '56.4' }, badges: [], synergies: [] },
    { name: 'Mike Quick', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '1980s', rating: 86, stats: { YDS: 1052, TD: 9, YPR: '18.7' }, badges: [], synergies: [] },
    { name: 'Keith Byars', pos: ['RB'], team: 'Eagles', decade: '1980s', rating: 80, stats: { YDS: 705, TD: 6, YPC: '3.7' }, badges: [], synergies: [] },
    { name: 'Eric Allen', pos: ['DB'], team: 'Eagles', decade: '1980s', rating: 85, stats: { INT: 6, PD: 12 }, badges: [], synergies: [] },
    { name: 'Jerome Brown', pos: ['EDGE'], team: 'Eagles', decade: '1980s', rating: 87, stats: { SACKS: 9, FF: 4 }, badges: [], synergies: [] },
    { name: 'Keith Jackson', pos: ['TE'], team: 'Eagles', decade: '1980s', rating: 85, stats: { YDS: 798, TD: 6, YPR: '13.3' }, badges: [], synergies: [] },

    { name: 'Donovan McNabb', pos: ['QB'], team: 'Eagles', decade: '2000s', rating: 86, stats: { YDS: 3365, TD: 23, 'CMP%': '58.4' }, badges: [], synergies: [] },
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2000s', rating: 93, stats: { YDS: 1200, TD: 13, YPR: '15.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Brian Westbrook', pos: ['RB'], team: 'Eagles', decade: '2000s', rating: 86, stats: { YDS: 1217, TD: 9, YPC: '4.6' }, badges: [], synergies: [] },
    { name: 'Brian Dawkins', pos: ['DB'], team: 'Eagles', decade: '2000s', rating: 92, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Trent Cole', pos: ['EDGE'], team: 'Eagles', decade: '2000s', rating: 85, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'L.J. Smith', pos: ['TE'], team: 'Eagles', decade: '2000s', rating: 78, stats: { YDS: 585, TD: 5, YPR: '10.8' }, badges: [], synergies: [] },

    { name: 'Jalen Hurts', pos: ['QB'], team: 'Eagles', decade: '2020s', rating: 88, stats: { YDS: 3858, TD: 23, 'CMP%': '66.5' }, badges: [], synergies: [] },
    { name: 'Saquon Barkley', pos: ['RB'], team: 'Eagles', decade: '2020s', rating: 93, stats: { YDS: 2005, TD: 13, YPC: '5.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'A.J. Brown', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2020s', rating: 91, stats: { YDS: 1456, TD: 11, YPR: '15.8' }, badges: [], synergies: [] },
    { name: 'DeVonta Smith', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2020s', rating: 87, stats: { YDS: 1219, TD: 7, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Dallas Goedert', pos: ['TE'], team: 'Eagles', decade: '2020s', rating: 84, stats: { YDS: 765, TD: 5, YPR: '11.7' }, badges: [], synergies: [] },
    { name: 'Haason Reddick', pos: ['EDGE'], team: 'Eagles', decade: '2020s', rating: 86, stats: { SACKS: 13, FF: 4 }, badges: [], synergies: [] },
    { name: 'Darius Slay', pos: ['DB'], team: 'Eagles', decade: '2020s', rating: 87, stats: { INT: 4, PD: 14 }, badges: ['All-Pro'], synergies: [] },

    // ============ RAVENS ============
    { name: 'Ray Lewis', pos: ['DB'], team: 'Ravens', decade: '2000s', rating: 96, stats: { INT: 3, PD: 9 }, badges: ['HOF', 'DPOY', 'SB MVP'], synergies: [] },
    { name: 'Ed Reed', pos: ['DB'], team: 'Ravens', decade: '2000s', rating: 97, stats: { INT: 8, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Jamal Lewis', pos: ['RB'], team: 'Ravens', decade: '2000s', rating: 87, stats: { YDS: 1364, TD: 9, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Todd Heap', pos: ['TE'], team: 'Ravens', decade: '2000s', rating: 83, stats: { YDS: 753, TD: 6, YPR: '11.7' }, badges: [], synergies: [] },
    { name: 'Terrell Suggs', pos: ['EDGE'], team: 'Ravens', decade: '2000s', rating: 90, stats: { SACKS: 12, FF: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Steve McNair', pos: ['QB'], team: 'Ravens', decade: '2000s', rating: 82, stats: { YDS: 3050, TD: 17, 'CMP%': '61.0' }, badges: [], synergies: [] },
    { name: 'Derrick Mason', pos: ['WR1', 'WR2'], team: 'Ravens', decade: '2000s', rating: 83, stats: { YDS: 1073, TD: 5, YPR: '12.4' }, badges: [], synergies: [] },

    { name: 'Lamar Jackson', pos: ['QB'], team: 'Ravens', decade: '2020s', rating: 94, stats: { YDS: 3678, TD: 27, 'CMP%': '64.2' }, badges: ['MVP'], synergies: [] },
    { name: 'Derrick Henry', pos: ['RB'], team: 'Ravens', decade: '2020s', rating: 90, stats: { YDS: 1407, TD: 12, YPC: '4.9' }, badges: [], synergies: [] },
    { name: 'Mark Andrews', pos: ['TE'], team: 'Ravens', decade: '2020s', rating: 88, stats: { YDS: 847, TD: 9, YPR: '12.0' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Kyle Hamilton', pos: ['DB'], team: 'Ravens', decade: '2020s', rating: 91, stats: { INT: 5, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Roquan Smith', pos: ['DB'], team: 'Ravens', decade: '2020s', rating: 88, stats: { INT: 3, PD: 8 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Zay Flowers', pos: ['WR1', 'WR2'], team: 'Ravens', decade: '2020s', rating: 83, stats: { YDS: 1047, TD: 5, YPR: '13.1' }, badges: [], synergies: [] },

    // ============ DOLPHINS ============
    { name: 'Bob Griese', pos: ['QB'], team: 'Dolphins', decade: '1970s', rating: 87, stats: { YDS: 1890, TD: 13, 'CMP%': '56.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Larry Csonka', pos: ['RB'], team: 'Dolphins', decade: '1970s', rating: 87, stats: { YDS: 1117, TD: 9, YPC: '4.4' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Paul Warfield', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1970s', rating: 89, stats: { YDS: 891, TD: 8, YPR: '20.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Mercury Morris', pos: ['RB'], team: 'Dolphins', decade: '1970s', rating: 82, stats: { YDS: 940, TD: 9, YPC: '4.9' }, badges: [], synergies: [] },
    { name: 'Dick Anderson', pos: ['DB'], team: 'Dolphins', decade: '1970s', rating: 85, stats: { INT: 7, PD: 12 }, badges: [], synergies: [] },
    { name: 'Nick Buoniconti', pos: ['DB'], team: 'Dolphins', decade: '1970s', rating: 86, stats: { INT: 4, PD: 10 }, badges: ['HOF'], synergies: [] },
    { name: 'Bill Stanfill', pos: ['EDGE'], team: 'Dolphins', decade: '1970s', rating: 83, stats: { SACKS: '9*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Jim Mandich', pos: ['TE'], team: 'Dolphins', decade: '1970s', rating: 77, stats: { YDS: 389, TD: 3, YPR: '11.6' }, badges: [], synergies: [] },

    { name: 'Dan Marino', pos: ['QB'], team: 'Dolphins', decade: '1980s', rating: 96, stats: { YDS: 4746, TD: 38, 'CMP%': '59.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Mark Clayton', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1980s', rating: 85, stats: { YDS: 1150, TD: 12, YPR: '16.0' }, badges: [], synergies: [] },
    { name: 'Mark Duper', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1980s', rating: 84, stats: { YDS: 1092, TD: 8, YPR: '18.5' }, badges: [], synergies: [] },
    { name: 'Dwight Stephenson', pos: ['RB'], team: 'Dolphins', decade: '1980s', rating: 80, stats: { YDS: 0, TD: 0, YPC: '0' }, badges: ['HOF'], synergies: [] },
    { name: 'Bob Baumhower', pos: ['EDGE'], team: 'Dolphins', decade: '1980s', rating: 82, stats: { SACKS: 7, FF: 2 }, badges: [], synergies: [] },
    { name: 'Glenn Blackwood', pos: ['DB'], team: 'Dolphins', decade: '1980s', rating: 80, stats: { INT: 5, PD: 10 }, badges: [], synergies: [] },

    { name: 'Tyreek Hill', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '2020s', rating: 93, stats: { YDS: 1799, TD: 11, YPR: '14.1' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tua Tagovailoa', pos: ['QB'], team: 'Dolphins', decade: '2020s', rating: 84, stats: { YDS: 4624, TD: 29, 'CMP%': '69.3' }, badges: [], synergies: [] },
    { name: 'Jaylen Waddle', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '2020s', rating: 86, stats: { YDS: 1171, TD: 7, YPR: '13.4' }, badges: [], synergies: [] },
    { name: 'Jevon Holland', pos: ['DB'], team: 'Dolphins', decade: '2020s', rating: 86, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Jaelan Phillips', pos: ['EDGE'], team: 'Dolphins', decade: '2020s', rating: 83, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: 'De\'Von Achane', pos: ['RB'], team: 'Dolphins', decade: '2020s', rating: 84, stats: { YDS: 905, TD: 9, YPC: '7.0' }, badges: [], synergies: [] },

    // ============ VIKINGS ============
    { name: 'Fran Tarkenton', pos: ['QB'], team: 'Vikings', decade: '1970s', rating: 89, stats: { YDS: 2994, TD: 20, 'CMP%': '56.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Chuck Foreman', pos: ['RB'], team: 'Vikings', decade: '1970s', rating: 84, stats: { YDS: 1112, TD: 13, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Carl Eller', pos: ['EDGE'], team: 'Vikings', decade: '1970s', rating: 91, stats: { SACKS: '15*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Alan Page', pos: ['EDGE'], team: 'Vikings', decade: '1970s', rating: 94, stats: { SACKS: '12*', FF: 4 }, badges: ['HOF', 'MVP', 'DPOY'], synergies: [] },
    { name: 'Paul Krause', pos: ['DB'], team: 'Vikings', decade: '1970s', rating: 90, stats: { INT: 8, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'John Gilliam', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1970s', rating: 82, stats: { YDS: 877, TD: 5, YPR: '17.5' }, badges: [], synergies: [] },
    { name: 'Stu Voigt', pos: ['TE'], team: 'Vikings', decade: '1970s', rating: 76, stats: { YDS: 382, TD: 3, YPR: '11.2' }, badges: [], synergies: [] },

    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1990s', rating: 95, stats: { YDS: 1413, TD: 15, YPR: '18.3' }, badges: ['HOF'], synergies: ['Cunningham_Moss'] },
    { name: 'Cris Carter', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1990s', rating: 91, stats: { YDS: 1163, TD: 12, YPR: '13.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Randall Cunningham', pos: ['QB'], team: 'Vikings', decade: '1990s', rating: 84, stats: { YDS: 3704, TD: 34, 'CMP%': '60.9' }, badges: [], synergies: ['Cunningham_Moss'] },
    { name: 'Robert Smith', pos: ['RB'], team: 'Vikings', decade: '1990s', rating: 85, stats: { YDS: 1266, TD: 7, YPC: '4.8' }, badges: [], synergies: [] },
    { name: 'John Randle', pos: ['EDGE'], team: 'Vikings', decade: '1990s', rating: 93, stats: { SACKS: 14, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Orlando Thomas', pos: ['DB'], team: 'Vikings', decade: '1990s', rating: 80, stats: { INT: 5, PD: 10 }, badges: [], synergies: [] },

    { name: 'Adrian Peterson', pos: ['RB'], team: 'Vikings', decade: '2010s', rating: 93, stats: { YDS: 1266, TD: 11, YPC: '4.6' }, badges: ['MVP'], synergies: [] },
    { name: 'Harrison Smith', pos: ['DB'], team: 'Vikings', decade: '2010s', rating: 88, stats: { INT: 5, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Everson Griffen', pos: ['EDGE'], team: 'Vikings', decade: '2010s', rating: 85, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: 'Stefon Diggs', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2010s', rating: 87, stats: { YDS: 1130, TD: 8, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Adam Thielen', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2010s', rating: 86, stats: { YDS: 1276, TD: 9, YPR: '14.4' }, badges: [], synergies: [] },
    { name: 'Kirk Cousins', pos: ['QB'], team: 'Vikings', decade: '2010s', rating: 82, stats: { YDS: 4166, TD: 28, 'CMP%': '67.4' }, badges: [], synergies: [] },
    { name: 'Kyle Rudolph', pos: ['TE'], team: 'Vikings', decade: '2010s', rating: 81, stats: { YDS: 609, TD: 5, YPR: '10.9' }, badges: [], synergies: [] },
    { name: 'Danielle Hunter', pos: ['EDGE'], team: 'Vikings', decade: '2010s', rating: 87, stats: { SACKS: 13, FF: 3 }, badges: [], synergies: [] },

    { name: 'Justin Jefferson', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2020s', rating: 96, stats: { YDS: 1809, TD: 10, YPR: '15.3' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Sam Darnold', pos: ['QB'], team: 'Vikings', decade: '2020s', rating: 81, stats: { YDS: 4319, TD: 35, 'CMP%': '66.2' }, badges: [], synergies: [] },
    { name: 'Aaron Jones', pos: ['RB'], team: 'Vikings', decade: '2020s', rating: 84, stats: { YDS: 1138, TD: 9, YPC: '4.6' }, badges: [], synergies: [] },
    { name: 'Jonathan Greenard', pos: ['EDGE'], team: 'Vikings', decade: '2020s', rating: 85, stats: { SACKS: 12, FF: 3 }, badges: [], synergies: [] },
    { name: 'Byron Murphy Jr.', pos: ['DB'], team: 'Vikings', decade: '2020s', rating: 83, stats: { INT: 4, PD: 12 }, badges: [], synergies: [] },
    { name: 'T.J. Hockenson', pos: ['TE'], team: 'Vikings', decade: '2020s', rating: 85, stats: { YDS: 960, TD: 6, YPR: '11.4' }, badges: [], synergies: [] },

    // ============ BENGALS ============
    { name: 'Joe Burrow', pos: ['QB'], team: 'Bengals', decade: '2020s', rating: 92, stats: { YDS: 4475, TD: 35, 'CMP%': '68.2' }, badges: [], synergies: ['Burrow_Chase'] },
    { name: "Ja'Marr Chase", pos: ['WR1', 'WR2'], team: 'Bengals', decade: '2020s', rating: 95, stats: { YDS: 1708, TD: 17, YPR: '16.5' }, badges: ['All-Pro'], synergies: ['Burrow_Chase'] },
    { name: 'Tee Higgins', pos: ['WR1', 'WR2'], team: 'Bengals', decade: '2020s', rating: 85, stats: { YDS: 1029, TD: 7, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Joe Mixon', pos: ['RB'], team: 'Bengals', decade: '2020s', rating: 83, stats: { YDS: 1034, TD: 8, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Trey Hendrickson', pos: ['EDGE'], team: 'Bengals', decade: '2020s', rating: 89, stats: { SACKS: 14, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'DJ Reader', pos: ['EDGE'], team: 'Bengals', decade: '2020s', rating: 82, stats: { SACKS: 5, FF: 2 }, badges: [], synergies: [] },
    { name: 'Jessie Bates', pos: ['DB'], team: 'Bengals', decade: '2020s', rating: 86, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },

    { name: 'Ken Anderson', pos: ['QB'], team: 'Bengals', decade: '1980s', rating: 85, stats: { YDS: 2667, TD: 16, 'CMP%': '62.3' }, badges: ['MVP'], synergies: [] },
    { name: 'James Brooks', pos: ['RB'], team: 'Bengals', decade: '1980s', rating: 84, stats: { YDS: 1087, TD: 8, YPC: '5.1' }, badges: [], synergies: [] },
    { name: 'Cris Collinsworth', pos: ['WR1', 'WR2'], team: 'Bengals', decade: '1980s', rating: 83, stats: { YDS: 1009, TD: 5, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Eddie Edwards', pos: ['EDGE'], team: 'Bengals', decade: '1980s', rating: 80, stats: { SACKS: 8, FF: 2 }, badges: [], synergies: [] },
    { name: 'Ken Riley', pos: ['DB'], team: 'Bengals', decade: '1980s', rating: 84, stats: { INT: 5, PD: 11 }, badges: [], synergies: [] },

    // ============ BROWNS ============
    { name: 'Jim Brown', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 99, stats: { YDS: 1544, TD: 12, YPC: '5.2' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Leroy Kelly', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 86, stats: { YDS: 1205, TD: 11, YPC: '4.7' }, badges: ['HOF'], synergies: [] },
    { name: 'Paul Warfield', pos: ['WR1', 'WR2'], team: 'Browns', decade: '1960s', rating: 89, stats: { YDS: 1067, TD: 9, YPR: '20.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Frank Ryan', pos: ['QB'], team: 'Browns', decade: '1960s', rating: 82, stats: { YDS: 2404, TD: 20, 'CMP%': '52.3' }, badges: [], synergies: [] },
    { name: 'Jim Houston', pos: ['EDGE'], team: 'Browns', decade: '1960s', rating: 83, stats: { SACKS: '9*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Ross Fichtner', pos: ['DB'], team: 'Browns', decade: '1960s', rating: 80, stats: { INT: 6, PD: 9 }, badges: [], synergies: [] },
    { name: 'John Wooten', pos: ['TE'], team: 'Browns', decade: '1960s', rating: 76, stats: { YDS: 320, TD: 2, YPR: '12.1' }, badges: [], synergies: [] },
    { name: 'Gary Collins', pos: ['WR1', 'WR2'], team: 'Browns', decade: '1960s', rating: 84, stats: { YDS: 946, TD: 8, YPR: '17.8' }, badges: [], synergies: [] },

    { name: 'Myles Garrett', pos: ['EDGE'], team: 'Browns', decade: '2020s', rating: 95, stats: { SACKS: 16, FF: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Nick Chubb', pos: ['RB'], team: 'Browns', decade: '2020s', rating: 88, stats: { YDS: 1359, TD: 12, YPC: '5.3' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Amari Cooper', pos: ['WR1', 'WR2'], team: 'Browns', decade: '2020s', rating: 84, stats: { YDS: 1160, TD: 7, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Denzel Ward', pos: ['DB'], team: 'Browns', decade: '2020s', rating: 86, stats: { INT: 4, PD: 13 }, badges: ['All-Pro'], synergies: [] },
    { name: 'David Njoku', pos: ['TE'], team: 'Browns', decade: '2020s', rating: 82, stats: { YDS: 882, TD: 6, YPR: '12.8' }, badges: [], synergies: [] },

    // ============ COLTS ============
    { name: 'Johnny Unitas', pos: ['QB'], team: 'Colts', decade: '1960s', rating: 93, stats: { YDS: 2830, TD: 20, 'CMP%': '54.6' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'John Mackey', pos: ['TE'], team: 'Colts', decade: '1960s', rating: 91, stats: { YDS: 829, TD: 7, YPR: '15.8' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Lenny Moore', pos: ['RB'], team: 'Colts', decade: '1960s', rating: 88, stats: { YDS: 867, TD: 12, YPC: '4.5' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Gino Marchetti', pos: ['EDGE'], team: 'Colts', decade: '1960s', rating: 91, stats: { SACKS: '14*', FF: 2 }, badges: ['HOF'], synergies: [] },
    { name: 'Raymond Berry', pos: ['WR1', 'WR2'], team: 'Colts', decade: '1960s', rating: 87, stats: { YDS: 938, TD: 6, YPR: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Bobby Boyd', pos: ['DB'], team: 'Colts', decade: '1960s', rating: 84, stats: { INT: 7, PD: 11 }, badges: [], synergies: [] },

    { name: 'Peyton Manning', pos: ['QB'], team: 'Colts', decade: '2000s', rating: 97, stats: { YDS: 4413, TD: 33, 'CMP%': '65.0' }, badges: ['HOF', 'MVP'], synergies: ['Manning_Harrison', 'Manning_Wayne'] },
    { name: 'Marvin Harrison', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2000s', rating: 95, stats: { YDS: 1366, TD: 14, YPR: '14.8' }, badges: ['HOF'], synergies: ['Manning_Harrison'] },
    { name: 'Reggie Wayne', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2000s', rating: 89, stats: { YDS: 1264, TD: 10, YPR: '14.2' }, badges: ['HOF'], synergies: ['Manning_Wayne'] },
    { name: 'Edgerrin James', pos: ['RB'], team: 'Colts', decade: '2000s', rating: 90, stats: { YDS: 1506, TD: 12, YPC: '4.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Dwight Freeney', pos: ['EDGE'], team: 'Colts', decade: '2000s', rating: 91, stats: { SACKS: 13, FF: 6 }, badges: [], synergies: [] },
    { name: 'Robert Mathis', pos: ['EDGE'], team: 'Colts', decade: '2000s', rating: 87, stats: { SACKS: 11, FF: 5 }, badges: [], synergies: [] },
    { name: 'Bob Sanders', pos: ['DB'], team: 'Colts', decade: '2000s', rating: 88, stats: { INT: 4, PD: 10 }, badges: ['DPOY'], synergies: [] },
    { name: 'Dallas Clark', pos: ['TE'], team: 'Colts', decade: '2000s', rating: 84, stats: { YDS: 847, TD: 7, YPR: '12.4' }, badges: [], synergies: [] },

    // ============ GIANTS ============
    { name: 'Lawrence Taylor', pos: ['EDGE'], team: 'Giants', decade: '1980s', rating: 99, stats: { SACKS: 15.5, FF: 4 }, badges: ['HOF', 'MVP', 'DPOY'], synergies: [] },
    { name: 'Phil Simms', pos: ['QB'], team: 'Giants', decade: '1980s', rating: 84, stats: { YDS: 3359, TD: 21, 'CMP%': '55.4' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Mark Bavaro', pos: ['TE'], team: 'Giants', decade: '1980s', rating: 85, stats: { YDS: 867, TD: 6, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Joe Morris', pos: ['RB'], team: 'Giants', decade: '1980s', rating: 83, stats: { YDS: 1336, TD: 14, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Harry Carson', pos: ['DB'], team: 'Giants', decade: '1980s', rating: 87, stats: { INT: 2, PD: 8 }, badges: ['HOF'], synergies: [] },
    { name: 'Leonard Marshall', pos: ['EDGE'], team: 'Giants', decade: '1980s', rating: 85, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: 'Mark Collins', pos: ['DB'], team: 'Giants', decade: '1980s', rating: 80, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },

    { name: 'Michael Strahan', pos: ['EDGE'], team: 'Giants', decade: '2000s', rating: 94, stats: { SACKS: 14.5, FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Eli Manning', pos: ['QB'], team: 'Giants', decade: '2000s', rating: 83, stats: { YDS: 3762, TD: 24, 'CMP%': '57.8' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Tiki Barber', pos: ['RB'], team: 'Giants', decade: '2000s', rating: 87, stats: { YDS: 1518, TD: 9, YPC: '4.7' }, badges: [], synergies: [] },
    { name: 'Plaxico Burress', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2000s', rating: 83, stats: { YDS: 1053, TD: 9, YPR: '15.6' }, badges: [], synergies: [] },
    { name: 'Osi Umenyiora', pos: ['EDGE'], team: 'Giants', decade: '2000s', rating: 86, stats: { SACKS: 11, FF: 6 }, badges: [], synergies: [] },
    { name: 'Sam Madison', pos: ['DB'], team: 'Giants', decade: '2000s', rating: 80, stats: { INT: 3, PD: 10 }, badges: [], synergies: [] },

    { name: 'Odell Beckham Jr.', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2010s', rating: 89, stats: { YDS: 1367, TD: 12, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Saquon Barkley', pos: ['RB'], team: 'Giants', decade: '2010s', rating: 86, stats: { YDS: 1307, TD: 11, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Eli Manning', pos: ['QB'], team: 'Giants', decade: '2010s', rating: 79, stats: { YDS: 3829, TD: 25, 'CMP%': '61.8' }, badges: [], synergies: [] },
    { name: 'Jason Pierre-Paul', pos: ['EDGE'], team: 'Giants', decade: '2010s', rating: 85, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'Landon Collins', pos: ['DB'], team: 'Giants', decade: '2010s', rating: 83, stats: { INT: 4, PD: 10 }, badges: ['All-Pro'], synergies: [] },

    { name: 'Malik Nabers', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2020s', rating: 87, stats: { YDS: 1204, TD: 7, YPR: '13.7' }, badges: [], synergies: [] },
    { name: 'Kayvon Thibodeaux', pos: ['EDGE'], team: 'Giants', decade: '2020s', rating: 82, stats: { SACKS: 9, FF: 3 }, badges: [], synergies: [] },
    { name: 'Dexter Lawrence', pos: ['EDGE'], team: 'Giants', decade: '2020s', rating: 87, stats: { SACKS: 9.5, FF: 2 }, badges: ['All-Pro'], synergies: [] },

    // ============ RAMS ============
    { name: 'Deacon Jones', pos: ['EDGE'], team: 'Rams', decade: '1960s', rating: 97, stats: { SACKS: '22*', FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Merlin Olsen', pos: ['EDGE'], team: 'Rams', decade: '1960s', rating: 92, stats: { SACKS: '10*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Dick Bass', pos: ['RB'], team: 'Rams', decade: '1960s', rating: 80, stats: { YDS: 1028, TD: 6, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Roman Gabriel', pos: ['QB'], team: 'Rams', decade: '1960s', rating: 84, stats: { YDS: 2779, TD: 19, 'CMP%': '53.5' }, badges: ['MVP'], synergies: [] },
    { name: 'Jack Snow', pos: ['WR1', 'WR2'], team: 'Rams', decade: '1960s', rating: 81, stats: { YDS: 949, TD: 6, YPR: '16.8' }, badges: [], synergies: [] },

    { name: 'Eric Dickerson', pos: ['RB'], team: 'Rams', decade: '1980s', rating: 96, stats: { YDS: 1808, TD: 13, YPC: '4.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Jack Youngblood', pos: ['EDGE'], team: 'Rams', decade: '1980s', rating: 88, stats: { SACKS: 12, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Henry Ellard', pos: ['WR1', 'WR2'], team: 'Rams', decade: '1980s', rating: 84, stats: { YDS: 1114, TD: 6, YPR: '17.2' }, badges: [], synergies: [] },
    { name: 'Nolan Cromwell', pos: ['DB'], team: 'Rams', decade: '1980s', rating: 83, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Vince Ferragamo', pos: ['QB'], team: 'Rams', decade: '1980s', rating: 76, stats: { YDS: 2512, TD: 14, 'CMP%': '53.8' }, badges: [], synergies: [] },

    { name: 'Kurt Warner', pos: ['QB'], team: 'Rams', decade: '2000s', rating: 91, stats: { YDS: 4353, TD: 36, 'CMP%': '65.1' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Marshall Faulk', pos: ['RB'], team: 'Rams', decade: '2000s', rating: 93, stats: { YDS: 1381, TD: 17, YPC: '4.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Isaac Bruce', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2000s', rating: 89, stats: { YDS: 1106, TD: 7, YPR: '15.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Torry Holt', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2000s', rating: 91, stats: { YDS: 1457, TD: 9, YPR: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Leonard Little', pos: ['EDGE'], team: 'Rams', decade: '2000s', rating: 83, stats: { SACKS: 10, FF: 4 }, badges: [], synergies: [] },
    { name: 'Aeneas Williams', pos: ['DB'], team: 'Rams', decade: '2000s', rating: 87, stats: { INT: 4, PD: 12 }, badges: ['HOF'], synergies: [] },

    { name: 'Aaron Donald', pos: ['EDGE'], team: 'Rams', decade: '2010s', rating: 99, stats: { SACKS: 16, FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Todd Gurley', pos: ['RB'], team: 'Rams', decade: '2010s', rating: 88, stats: { YDS: 1305, TD: 17, YPC: '4.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jared Goff', pos: ['QB'], team: 'Rams', decade: '2010s', rating: 80, stats: { YDS: 4638, TD: 32, 'CMP%': '63.4' }, badges: [], synergies: [] },
    { name: 'Robert Woods', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2010s', rating: 82, stats: { YDS: 1134, TD: 6, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'Jalen Ramsey', pos: ['DB'], team: 'Rams', decade: '2010s', rating: 90, stats: { INT: 4, PD: 15 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Cooper Kupp', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2010s', rating: 90, stats: { YDS: 1478, TD: 11, YPR: '13.0' }, badges: ['All-Pro', 'SB MVP'], synergies: [] },

    { name: 'Puka Nacua', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2020s', rating: 88, stats: { YDS: 1486, TD: 6, YPR: '13.2' }, badges: [], synergies: [] },
    { name: 'Cooper Kupp', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2020s', rating: 87, stats: { YDS: 1140, TD: 8, YPR: '12.5' }, badges: [], synergies: [] },
    { name: 'Matthew Stafford', pos: ['QB'], team: 'Rams', decade: '2020s', rating: 84, stats: { YDS: 3965, TD: 24, 'CMP%': '64.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Kyren Williams', pos: ['RB'], team: 'Rams', decade: '2020s', rating: 82, stats: { YDS: 1144, TD: 12, YPC: '4.1' }, badges: [], synergies: [] },

    // ============ CHARGERS ============
    { name: 'Lance Alworth', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1960s', rating: 92, stats: { YDS: 1383, TD: 11, YPR: '19.4' }, badges: ['HOF'], synergies: [] },
    { name: 'John Hadl', pos: ['QB'], team: 'Chargers', decade: '1960s', rating: 82, stats: { YDS: 2927, TD: 20, 'CMP%': '51.3' }, badges: [], synergies: [] },
    { name: 'Paul Lowe', pos: ['RB'], team: 'Chargers', decade: '1960s', rating: 83, stats: { YDS: 1010, TD: 7, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Earl Faison', pos: ['EDGE'], team: 'Chargers', decade: '1960s', rating: 85, stats: { SACKS: '11*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Charlie McNeil', pos: ['DB'], team: 'Chargers', decade: '1960s', rating: 82, stats: { INT: 7, PD: 10 }, badges: [], synergies: [] },

    { name: 'Dan Fouts', pos: ['QB'], team: 'Chargers', decade: '1980s', rating: 89, stats: { YDS: 4082, TD: 27, 'CMP%': '58.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Kellen Winslow', pos: ['TE'], team: 'Chargers', decade: '1980s', rating: 92, stats: { YDS: 1075, TD: 6, YPR: '13.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Charlie Joiner', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1980s', rating: 85, stats: { YDS: 1032, TD: 5, YPR: '15.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Wes Chandler', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1980s', rating: 84, stats: { YDS: 1146, TD: 8, YPR: '17.1' }, badges: [], synergies: [] },
    { name: 'Chuck Muncie', pos: ['RB'], team: 'Chargers', decade: '1980s', rating: 82, stats: { YDS: 1144, TD: 10, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Fred Dean', pos: ['EDGE'], team: 'Chargers', decade: '1980s', rating: 88, stats: { SACKS: 12, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Gill Byrd', pos: ['DB'], team: 'Chargers', decade: '1980s', rating: 82, stats: { INT: 6, PD: 12 }, badges: [], synergies: [] },

    { name: 'LaDainian Tomlinson', pos: ['RB'], team: 'Chargers', decade: '2000s', rating: 96, stats: { YDS: 1474, TD: 17, YPC: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Drew Brees', pos: ['QB'], team: 'Chargers', decade: '2000s', rating: 87, stats: { YDS: 3576, TD: 24, 'CMP%': '62.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Antonio Gates', pos: ['TE'], team: 'Chargers', decade: '2000s', rating: 92, stats: { YDS: 964, TD: 10, YPR: '12.1' }, badges: [], synergies: [] },
    { name: 'Shawne Merriman', pos: ['EDGE'], team: 'Chargers', decade: '2000s', rating: 87, stats: { SACKS: 12.5, FF: 4 }, badges: ['DPOY'], synergies: [] },

    { name: 'Justin Herbert', pos: ['QB'], team: 'Chargers', decade: '2020s', rating: 88, stats: { YDS: 4329, TD: 30, 'CMP%': '65.8' }, badges: [], synergies: [] },
    { name: 'Derwin James', pos: ['DB'], team: 'Chargers', decade: '2020s', rating: 89, stats: { INT: 4, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Khalil Mack', pos: ['EDGE'], team: 'Chargers', decade: '2020s', rating: 88, stats: { SACKS: 12, FF: 4 }, badges: [], synergies: [] },
    { name: 'Keenan Allen', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '2020s', rating: 86, stats: { YDS: 1128, TD: 7, YPR: '12.3' }, badges: [], synergies: [] },
    { name: 'Austin Ekeler', pos: ['RB'], team: 'Chargers', decade: '2020s', rating: 83, stats: { YDS: 915, TD: 8, YPC: '4.4' }, badges: [], synergies: [] },

    // ============ LIONS ============
    { name: 'Barry Sanders', pos: ['RB'], team: 'Lions', decade: '1990s', rating: 98, stats: { YDS: 1527, TD: 11, YPC: '5.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Herman Moore', pos: ['WR1', 'WR2'], team: 'Lions', decade: '1990s', rating: 87, stats: { YDS: 1293, TD: 10, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Brett Perriman', pos: ['WR1', 'WR2'], team: 'Lions', decade: '1990s', rating: 82, stats: { YDS: 1010, TD: 6, YPR: '15.4' }, badges: [], synergies: [] },
    { name: 'Scott Mitchell', pos: ['QB'], team: 'Lions', decade: '1990s', rating: 77, stats: { YDS: 3167, TD: 20, 'CMP%': '58.0' }, badges: [], synergies: [] },
    { name: 'Robert Porcher', pos: ['EDGE'], team: 'Lions', decade: '1990s', rating: 84, stats: { SACKS: 10.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Bennie Blades', pos: ['DB'], team: 'Lions', decade: '1990s', rating: 80, stats: { INT: 4, PD: 9 }, badges: [], synergies: [] },

    { name: 'Calvin Johnson', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2010s', rating: 95, stats: { YDS: 1681, TD: 11, YPR: '16.6' }, badges: ['HOF'], synergies: [] },
    { name: 'Matthew Stafford', pos: ['QB'], team: 'Lions', decade: '2010s', rating: 84, stats: { YDS: 4446, TD: 28, 'CMP%': '62.4' }, badges: [], synergies: [] },
    { name: 'Darius Slay', pos: ['DB'], team: 'Lions', decade: '2010s', rating: 88, stats: { INT: 6, PD: 15 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Ezekiel Ansah', pos: ['EDGE'], team: 'Lions', decade: '2010s', rating: 82, stats: { SACKS: 9, FF: 2 }, badges: [], synergies: [] },
    { name: 'Golden Tate', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2010s', rating: 83, stats: { YDS: 1003, TD: 5, YPR: '11.8' }, badges: [], synergies: [] },

    { name: 'Amon-Ra St. Brown', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2020s', rating: 89, stats: { YDS: 1515, TD: 10, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'Jared Goff', pos: ['QB'], team: 'Lions', decade: '2020s', rating: 85, stats: { YDS: 4575, TD: 30, 'CMP%': '67.3' }, badges: [], synergies: [] },
    { name: 'Jahmyr Gibbs', pos: ['RB'], team: 'Lions', decade: '2020s', rating: 87, stats: { YDS: 1412, TD: 15, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Sam LaPorta', pos: ['TE'], team: 'Lions', decade: '2020s', rating: 85, stats: { YDS: 889, TD: 10, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Aidan Hutchinson', pos: ['EDGE'], team: 'Lions', decade: '2020s', rating: 89, stats: { SACKS: 11.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Kerby Joseph', pos: ['DB'], team: 'Lions', decade: '2020s', rating: 85, stats: { INT: 7, PD: 12 }, badges: ['All-Pro'], synergies: [] },

    // ============ RAIDERS ============
    { name: 'Ken Stabler', pos: ['QB'], team: 'Raiders', decade: '1970s', rating: 86, stats: { YDS: 2737, TD: 19, 'CMP%': '59.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Willie Brown', pos: ['DB'], team: 'Raiders', decade: '1970s', rating: 89, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Cliff Branch', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1970s', rating: 86, stats: { YDS: 1036, TD: 9, YPR: '18.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Dave Casper', pos: ['TE'], team: 'Raiders', decade: '1970s', rating: 88, stats: { YDS: 768, TD: 6, YPR: '15.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Mark van Eeghen', pos: ['RB'], team: 'Raiders', decade: '1970s', rating: 80, stats: { YDS: 1080, TD: 7, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Jack Tatum', pos: ['DB'], team: 'Raiders', decade: '1970s', rating: 88, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },
    { name: 'Ted Hendricks', pos: ['EDGE'], team: 'Raiders', decade: '1970s', rating: 89, stats: { SACKS: '10*', FF: 4 }, badges: ['HOF'], synergies: [] },

    { name: 'Marcus Allen', pos: ['RB'], team: 'Raiders', decade: '1980s', rating: 90, stats: { YDS: 1168, TD: 11, YPC: '4.2' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Howie Long', pos: ['EDGE'], team: 'Raiders', decade: '1980s', rating: 90, stats: { SACKS: 12, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Mike Haynes', pos: ['DB'], team: 'Raiders', decade: '1980s', rating: 92, stats: { INT: 6, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Todd Christensen', pos: ['TE'], team: 'Raiders', decade: '1980s', rating: 85, stats: { YDS: 922, TD: 8, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Jim Plunkett', pos: ['QB'], team: 'Raiders', decade: '1980s', rating: 79, stats: { YDS: 2685, TD: 16, 'CMP%': '53.2' }, badges: ['SB MVP'], synergies: [] },

    { name: 'Khalil Mack', pos: ['EDGE'], team: 'Raiders', decade: '2010s', rating: 92, stats: { SACKS: 15, FF: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Amari Cooper', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '2010s', rating: 85, stats: { YDS: 1153, TD: 7, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Derek Carr', pos: ['QB'], team: 'Raiders', decade: '2010s', rating: 81, stats: { YDS: 3937, TD: 25, 'CMP%': '63.5' }, badges: [], synergies: [] },
    { name: 'Latavius Murray', pos: ['RB'], team: 'Raiders', decade: '2010s', rating: 78, stats: { YDS: 1066, TD: 6, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'Charles Woodson', pos: ['DB'], team: 'Raiders', decade: '2010s', rating: 86, stats: { INT: 5, PD: 12 }, badges: ['HOF'], synergies: [] },

    { name: 'Maxx Crosby', pos: ['EDGE'], team: 'Raiders', decade: '2020s', rating: 91, stats: { SACKS: 13, FF: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Davante Adams', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '2020s', rating: 89, stats: { YDS: 1215, TD: 8, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Brock Bowers', pos: ['TE'], team: 'Raiders', decade: '2020s', rating: 88, stats: { YDS: 1194, TD: 5, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Josh Jacobs', pos: ['RB'], team: 'Raiders', decade: '2020s', rating: 82, stats: { YDS: 1065, TD: 9, YPC: '4.3' }, badges: [], synergies: [] },

    // ============ BRONCOS ============
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1980s', rating: 92, stats: { YDS: 3485, TD: 22, 'CMP%': '56.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Floyd Little', pos: ['RB'], team: 'Broncos', decade: '1970s', rating: 83, stats: { YDS: 1133, TD: 6, YPC: '4.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Terrell Davis', pos: ['RB'], team: 'Broncos', decade: '1990s', rating: 93, stats: { YDS: 1750, TD: 15, YPC: '4.7' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1990s', rating: 91, stats: { YDS: 3328, TD: 22, 'CMP%': '57.1' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Shannon Sharpe', pos: ['TE'], team: 'Broncos', decade: '1990s', rating: 91, stats: { YDS: 1062, TD: 7, YPR: '12.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Rod Smith', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '1990s', rating: 86, stats: { YDS: 1180, TD: 8, YPR: '14.6' }, badges: [], synergies: [] },
    { name: 'Steve Atwater', pos: ['DB'], team: 'Broncos', decade: '1990s', rating: 89, stats: { INT: 4, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Neil Smith', pos: ['EDGE'], team: 'Broncos', decade: '1990s', rating: 86, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },

    { name: 'Champ Bailey', pos: ['DB'], team: 'Broncos', decade: '2000s', rating: 94, stats: { INT: 6, PD: 17 }, badges: ['HOF'], synergies: [] },
    { name: 'Von Miller', pos: ['EDGE'], team: 'Broncos', decade: '2010s', rating: 93, stats: { SACKS: 14.5, FF: 3 }, badges: ['SB MVP'], synergies: [] },
    { name: 'Peyton Manning', pos: ['QB'], team: 'Broncos', decade: '2010s', rating: 90, stats: { YDS: 4727, TD: 39, 'CMP%': '66.2' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Demaryius Thomas', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '2010s', rating: 86, stats: { YDS: 1304, TD: 10, YPR: '13.7' }, badges: [], synergies: [] },
    { name: 'C.J. Anderson', pos: ['RB'], team: 'Broncos', decade: '2010s', rating: 79, stats: { YDS: 849, TD: 5, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'Chris Harris Jr.', pos: ['DB'], team: 'Broncos', decade: '2010s', rating: 88, stats: { INT: 4, PD: 14 }, badges: ['All-Pro'], synergies: [] },

    // ============ SAINTS ============
    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2010s', rating: 94, stats: { YDS: 4762, TD: 33, 'CMP%': '69.0' }, badges: ['HOF'], synergies: ['Brees_Thomas'] },
    { name: 'Michael Thomas', pos: ['WR1', 'WR2'], team: 'Saints', decade: '2010s', rating: 90, stats: { YDS: 1503, TD: 9, YPR: '12.5' }, badges: ['All-Pro'], synergies: ['Brees_Thomas'] },
    { name: 'Alvin Kamara', pos: ['RB'], team: 'Saints', decade: '2010s', rating: 87, stats: { YDS: 897, TD: 13, YPC: '4.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Cameron Jordan', pos: ['EDGE'], team: 'Saints', decade: '2010s', rating: 89, stats: { SACKS: 13, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Marshon Lattimore', pos: ['DB'], team: 'Saints', decade: '2010s', rating: 86, stats: { INT: 4, PD: 14 }, badges: [], synergies: [] },
    { name: 'Jimmy Graham', pos: ['TE'], team: 'Saints', decade: '2010s', rating: 88, stats: { YDS: 1215, TD: 12, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Mark Ingram', pos: ['RB'], team: 'Saints', decade: '2010s', rating: 82, stats: { YDS: 1043, TD: 9, YPC: '4.6' }, badges: [], synergies: [] },

    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2000s', rating: 93, stats: { YDS: 4888, TD: 34, 'CMP%': '66.2' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Reggie Bush', pos: ['RB'], team: 'Saints', decade: '2000s', rating: 80, stats: { YDS: 792, TD: 6, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Marques Colston', pos: ['WR1', 'WR2'], team: 'Saints', decade: '2000s', rating: 84, stats: { YDS: 1162, TD: 9, YPR: '14.3' }, badges: [], synergies: [] },
    { name: 'Will Smith', pos: ['EDGE'], team: 'Saints', decade: '2000s', rating: 84, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'Darren Sharper', pos: ['DB'], team: 'Saints', decade: '2000s', rating: 85, stats: { INT: 9, PD: 13 }, badges: [], synergies: [] },

    // ============ SEAHAWKS ============
    { name: 'Russell Wilson', pos: ['QB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { YDS: 3580, TD: 28, 'CMP%': '64.5' }, badges: [], synergies: [] },
    { name: 'Marshawn Lynch', pos: ['RB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { YDS: 1257, TD: 12, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Richard Sherman', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 93, stats: { INT: 6, PD: 16 }, badges: [], synergies: [] },
    { name: 'Earl Thomas', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 92, stats: { INT: 5, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Bobby Wagner', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { INT: 2, PD: 8 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Doug Baldwin', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2010s', rating: 85, stats: { YDS: 1069, TD: 9, YPR: '13.4' }, badges: [], synergies: [] },
    { name: 'Michael Bennett', pos: ['EDGE'], team: 'Seahawks', decade: '2010s', rating: 86, stats: { SACKS: 9, FF: 3 }, badges: [], synergies: [] },
    { name: 'Jimmy Graham', pos: ['TE'], team: 'Seahawks', decade: '2010s', rating: 82, stats: { YDS: 728, TD: 8, YPR: '12.4' }, badges: [], synergies: [] },
    { name: 'Tyler Lockett', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2010s', rating: 83, stats: { YDS: 1051, TD: 8, YPR: '14.8' }, badges: [], synergies: [] },

    { name: 'Shaun Alexander', pos: ['RB'], team: 'Seahawks', decade: '2000s', rating: 88, stats: { YDS: 1435, TD: 18, YPC: '4.3' }, badges: ['MVP'], synergies: [] },
    { name: 'Matt Hasselbeck', pos: ['QB'], team: 'Seahawks', decade: '2000s', rating: 82, stats: { YDS: 3459, TD: 22, 'CMP%': '60.5' }, badges: [], synergies: [] },
    { name: 'Steve Largent', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '1980s', rating: 89, stats: { YDS: 1091, TD: 9, YPR: '15.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Kenny Easley', pos: ['DB'], team: 'Seahawks', decade: '1980s', rating: 91, stats: { INT: 7, PD: 13 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Curt Warner', pos: ['RB'], team: 'Seahawks', decade: '1980s', rating: 84, stats: { YDS: 1149, TD: 8, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Jacob Green', pos: ['EDGE'], team: 'Seahawks', decade: '1980s', rating: 84, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: 'Dave Krieg', pos: ['QB'], team: 'Seahawks', decade: '1980s', rating: 80, stats: { YDS: 3204, TD: 20, 'CMP%': '57.0' }, badges: [], synergies: [] },

    { name: 'DK Metcalf', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2020s', rating: 86, stats: { YDS: 1170, TD: 8, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Devon Witherspoon', pos: ['DB'], team: 'Seahawks', decade: '2020s', rating: 89, stats: { INT: 4, PD: 15 }, badges: [], synergies: [] },
    { name: 'Kenneth Walker III', pos: ['RB'], team: 'Seahawks', decade: '2020s', rating: 83, stats: { YDS: 1053, TD: 8, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Geno Smith', pos: ['QB'], team: 'Seahawks', decade: '2020s', rating: 81, stats: { YDS: 4282, TD: 28, 'CMP%': '69.8' }, badges: [], synergies: [] },

    // ============ JETS ============
    { name: 'Joe Namath', pos: ['QB'], team: 'Jets', decade: '1960s', rating: 85, stats: { YDS: 3147, TD: 19, 'CMP%': '50.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Don Maynard', pos: ['WR1', 'WR2'], team: 'Jets', decade: '1960s', rating: 88, stats: { YDS: 1434, TD: 10, YPR: '18.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Matt Snell', pos: ['RB'], team: 'Jets', decade: '1960s', rating: 79, stats: { YDS: 895, TD: 5, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Gerry Philbin', pos: ['EDGE'], team: 'Jets', decade: '1960s', rating: 82, stats: { SACKS: '10*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Johnny Sample', pos: ['DB'], team: 'Jets', decade: '1960s', rating: 79, stats: { INT: 5, PD: 9 }, badges: [], synergies: [] },

    { name: 'Darrelle Revis', pos: ['DB'], team: 'Jets', decade: '2000s', rating: 93, stats: { INT: 5, PD: 18 }, badges: ['HOF'], synergies: [] },
    { name: 'Mark Gastineau', pos: ['EDGE'], team: 'Jets', decade: '1980s', rating: 88, stats: { SACKS: 19, FF: 2 }, badges: [], synergies: [] },
    { name: 'Sauce Gardner', pos: ['DB'], team: 'Jets', decade: '2020s', rating: 94, stats: { INT: 5, PD: 18 }, badges: ['DPOY'], synergies: [] },
    { name: 'Breece Hall', pos: ['RB'], team: 'Jets', decade: '2020s', rating: 85, stats: { YDS: 1226, TD: 10, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Garrett Wilson', pos: ['WR1', 'WR2'], team: 'Jets', decade: '2020s', rating: 84, stats: { YDS: 1042, TD: 5, YPR: '12.0' }, badges: [], synergies: [] },

    // ============ TEXANS ============
    { name: 'J.J. Watt', pos: ['EDGE'], team: 'Texans', decade: '2010s', rating: 97, stats: { SACKS: 17.5, FF: 5 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'DeAndre Hopkins', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2010s', rating: 91, stats: { YDS: 1378, TD: 11, YPR: '14.2' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Andre Johnson', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2000s', rating: 90, stats: { YDS: 1281, TD: 8, YPR: '14.6' }, badges: [], synergies: [] },
    { name: 'Arian Foster', pos: ['RB'], team: 'Texans', decade: '2010s', rating: 86, stats: { YDS: 1224, TD: 12, YPC: '4.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'C.J. Stroud', pos: ['QB'], team: 'Texans', decade: '2020s', rating: 86, stats: { YDS: 4108, TD: 23, 'CMP%': '63.9' }, badges: [], synergies: [] },
    { name: 'Nico Collins', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2020s', rating: 87, stats: { YDS: 1297, TD: 8, YPR: '16.0' }, badges: [], synergies: [] },
    { name: 'Will Anderson Jr.', pos: ['EDGE'], team: 'Texans', decade: '2020s', rating: 85, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },

    // ============ FALCONS ============
    { name: 'Matt Ryan', pos: ['QB'], team: 'Falcons', decade: '2010s', rating: 87, stats: { YDS: 4561, TD: 30, 'CMP%': '65.9' }, badges: ['MVP'], synergies: ['Ryan_Julio'] },
    { name: 'Julio Jones', pos: ['WR1', 'WR2'], team: 'Falcons', decade: '2010s', rating: 93, stats: { YDS: 1564, TD: 8, YPR: '15.2' }, badges: ['All-Pro'], synergies: ['Ryan_Julio'] },
    { name: 'Devonta Freeman', pos: ['RB'], team: 'Falcons', decade: '2010s', rating: 82, stats: { YDS: 1056, TD: 11, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Grady Jarrett', pos: ['EDGE'], team: 'Falcons', decade: '2010s', rating: 85, stats: { SACKS: 7, FF: 2 }, badges: [], synergies: [] },
    { name: 'Desmond Trufant', pos: ['DB'], team: 'Falcons', decade: '2010s', rating: 83, stats: { INT: 4, PD: 13 }, badges: [], synergies: [] },

    // ============ CARDINALS ============
    { name: 'Larry Fitzgerald', pos: ['WR1', 'WR2'], team: 'Cardinals', decade: '2000s', rating: 91, stats: { YDS: 1322, TD: 10, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Aeneas Williams', pos: ['DB'], team: 'Cardinals', decade: '1990s', rating: 90, stats: { INT: 7, PD: 15 }, badges: ['HOF'], synergies: [] },
    { name: 'Trey McBride', pos: ['TE'], team: 'Cardinals', decade: '2020s', rating: 86, stats: { YDS: 1146, TD: 4, YPR: '11.7' }, badges: [], synergies: [] },

    // ============ BUCCANEERS ============
    { name: 'Tom Brady', pos: ['QB'], team: 'Buccaneers', decade: '2020s', rating: 91, stats: { YDS: 4694, TD: 40, 'CMP%': '65.7' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Mike Evans', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '2020s', rating: 89, stats: { YDS: 1207, TD: 11, YPR: '14.5' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Mike Evans', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '2010s', rating: 88, stats: { YDS: 1321, TD: 9, YPR: '15.0' }, badges: [], synergies: [] },
    { name: 'Lavonte David', pos: ['DB'], team: 'Buccaneers', decade: '2010s', rating: 87, stats: { INT: 3, PD: 10 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Warren Sapp', pos: ['EDGE'], team: 'Buccaneers', decade: '2000s', rating: 93, stats: { SACKS: 12, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Derrick Brooks', pos: ['DB'], team: 'Buccaneers', decade: '2000s', rating: 94, stats: { INT: 5, PD: 13 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Ronde Barber', pos: ['DB'], team: 'Buccaneers', decade: '2000s', rating: 87, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'John Lynch', pos: ['DB'], team: 'Buccaneers', decade: '2000s', rating: 88, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Brad Johnson', pos: ['QB'], team: 'Buccaneers', decade: '2000s', rating: 79, stats: { YDS: 3049, TD: 22, 'CMP%': '62.3' }, badges: [], synergies: [] },
    { name: 'Mike Alstott', pos: ['RB'], team: 'Buccaneers', decade: '2000s', rating: 82, stats: { YDS: 627, TD: 8, YPC: '3.7' }, badges: [], synergies: [] },
    { name: 'Lee Roy Selmon', pos: ['EDGE'], team: 'Buccaneers', decade: '1980s', rating: 89, stats: { SACKS: 11, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
];

const SYNERGIES = {
    'Montana_Rice': { label: 'Montana → Rice', bonus: 4, players: ['Joe Montana', 'Jerry Rice'] },
    'Young_Rice': { label: 'Young → Rice', bonus: 3, players: ['Steve Young', 'Jerry Rice'] },
    'Brady_Moss': { label: 'Brady → Moss', bonus: 4, players: ['Tom Brady', 'Randy Moss'] },
    'Brady_Gronk': { label: 'Brady → Gronk', bonus: 3, players: ['Tom Brady', 'Rob Gronkowski'] },
    'Mahomes_Kelce': { label: 'Mahomes → Kelce', bonus: 4, players: ['Patrick Mahomes', 'Travis Kelce'] },
    'Manning_Harrison': { label: 'Manning → Harrison', bonus: 3, players: ['Peyton Manning', 'Marvin Harrison'] },
    'Manning_Wayne': { label: 'Manning → Wayne', bonus: 2, players: ['Peyton Manning', 'Reggie Wayne'] },
    'Rodgers_Adams': { label: 'Rodgers → Adams', bonus: 3, players: ['Aaron Rodgers', 'Davante Adams'] },
    'Rodgers_Nelson': { label: 'Rodgers → Nelson', bonus: 2, players: ['Aaron Rodgers', 'Jordy Nelson'] },
    'Brees_Thomas': { label: 'Brees → Thomas', bonus: 2, players: ['Drew Brees', 'Michael Thomas'] },
    'Ryan_Julio': { label: 'Ryan → Julio', bonus: 2, players: ['Matt Ryan', 'Julio Jones'] },
    'Burrow_Chase': { label: 'Burrow → Chase', bonus: 3, players: ['Joe Burrow', "Ja'Marr Chase"] },
    'Cunningham_Moss': { label: 'Cunningham → Moss', bonus: 2, players: ['Randall Cunningham', 'Randy Moss'] },
    'Cowboys90s': { label: '90s Cowboys', bonus: 2, players: ['Troy Aikman', 'Emmitt Smith', 'Michael Irvin', 'Deion Sanders', 'Charles Haley', 'Jay Novacek'] },
    'Steelers70s': { label: '70s Steel Curtain', bonus: 2, players: ['Terry Bradshaw', 'Franco Harris', 'Lynn Swann', 'John Stallworth', 'Joe Greene', 'Mel Blount', 'Jack Ham', 'Jack Lambert', 'L.C. Greenwood'] },
};

function getRandomTeamForPosition(position, usedDecades) {
    const availableDecades = DECADES.filter(d => !usedDecades.includes(d));
    if (availableDecades.length === 0) return null;

    const decade = availableDecades[Math.floor(Math.random() * availableDecades.length)];
    const teamsInDecade = [...new Set(PLAYER_DB.filter(p => p.decade === decade).map(p => p.team))];
    const team = teamsInDecade[Math.floor(Math.random() * teamsInDecade.length)];

    return { team, decade };
}
