const TEAMS = [
    'Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears', 'Bengals',
    'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers', 'Texans', 'Colts',
    'Jaguars', 'Chiefs', 'Raiders', 'Chargers', 'Rams', 'Dolphins', 'Vikings',
    'Patriots', 'Saints', 'Giants', 'Jets', 'Eagles', 'Steelers', '49ers',
    'Seahawks', 'Buccaneers', 'Titans', 'Commanders'
];

const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

const POSITIONS = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'OL', 'EDGE', 'DB'];

// Comprehensive player database — every notable player per franchise/era
const PLAYER_DB = [
    // ============ 49ERS ============
    // 1980s
    { name: 'Joe Montana', pos: ['QB'], team: '49ers', decade: '1980s', rating: 97, stats: { YDS: 3521, TD: 26, 'CMP%': '63.7' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice'] },
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 99, stats: { YDS: 1364, TD: 13, YPR: '17.8' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice'] },
    { name: 'Roger Craig', pos: ['RB'], team: '49ers', decade: '1980s', rating: 87, stats: { YDS: 1138, TD: 9, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Ronnie Lott', pos: ['DB'], team: '49ers', decade: '1980s', rating: 97, stats: { INT: 8, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Fred Dean', pos: ['EDGE'], team: '49ers', decade: '1980s', rating: 89, stats: { SACKS: 12, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Dwight Clark', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 82, stats: { YDS: 880, TD: 6, YPR: '13.1' }, badges: [], synergies: [] },
    { name: 'Russ Francis', pos: ['TE'], team: '49ers', decade: '1980s', rating: 78, stats: { YDS: 410, TD: 3, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'Charles Haley', pos: ['EDGE'], team: '49ers', decade: '1980s', rating: 88, stats: { SACKS: 11.5, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Eric Wright', pos: ['DB'], team: '49ers', decade: '1980s', rating: 82, stats: { INT: 5, PD: 11 }, badges: [], synergies: [] },
    { name: 'John Taylor', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 83, stats: { YDS: 1011, TD: 8, YPR: '17.2' }, badges: [], synergies: [] },

    // 1990s
    { name: 'Steve Young', pos: ['QB'], team: '49ers', decade: '1990s', rating: 96, stats: { YDS: 3969, TD: 29, 'CMP%': '64.3' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Young_Rice'] },
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1990s', rating: 98, stats: { YDS: 1499, TD: 15, YPR: '15.1' }, badges: ['HOF', 'MVP'], synergies: ['Young_Rice'] },
    { name: 'Garrison Hearst', pos: ['RB'], team: '49ers', decade: '1990s', rating: 83, stats: { YDS: 1570, TD: 7, YPC: '5.1' }, badges: [], synergies: [] },
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: '49ers', decade: '1990s', rating: 90, stats: { YDS: 1451, TD: 13, YPR: '15.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Bryant Young', pos: ['EDGE'], team: '49ers', decade: '1990s', rating: 86, stats: { SACKS: 9.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Merton Hanks', pos: ['DB'], team: '49ers', decade: '1990s', rating: 84, stats: { INT: 7, PD: 13 }, badges: [], synergies: [] },
    { name: 'Brent Jones', pos: ['TE'], team: '49ers', decade: '1990s', rating: 84, stats: { YDS: 670, TD: 6, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Dana Stubblefield', pos: ['EDGE'], team: '49ers', decade: '1990s', rating: 85, stats: { SACKS: 10, FF: 2 }, badges: ['DPOY'], synergies: [] },
    { name: 'Ken Norton Jr.', pos: ['DB'], team: '49ers', decade: '1990s', rating: 80, stats: { INT: 2, PD: 8 }, badges: [], synergies: [] },

    // 2000s
    { name: 'Jeff Garcia', pos: ['QB'], team: '49ers', decade: '2000s', rating: 83, stats: { YDS: 3538, TD: 23, 'CMP%': '61.2' }, badges: [], synergies: [] },
    { name: 'Frank Gore', pos: ['RB'], team: '49ers', decade: '2000s', rating: 87, stats: { YDS: 1181, TD: 7, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Vernon Davis', pos: ['TE'], team: '49ers', decade: '2000s', rating: 85, stats: { YDS: 748, TD: 9, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Patrick Willis', pos: ['DB'], team: '49ers', decade: '2000s', rating: 93, stats: { INT: 3, PD: 10 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Justin Smith', pos: ['EDGE'], team: '49ers', decade: '2000s', rating: 88, stats: { SACKS: 8.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Nate Clements', pos: ['DB'], team: '49ers', decade: '2000s', rating: 80, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },

    // 2010s
    { name: 'Colin Kaepernick', pos: ['QB'], team: '49ers', decade: '2010s', rating: 82, stats: { YDS: 3197, TD: 21, 'CMP%': '59.8' }, badges: [], synergies: [] },
    { name: 'Frank Gore', pos: ['RB'], team: '49ers', decade: '2010s', rating: 85, stats: { YDS: 1128, TD: 7, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'George Kittle', pos: ['TE'], team: '49ers', decade: '2010s', rating: 91, stats: { YDS: 1377, TD: 5, YPR: '14.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'NaVorro Bowman', pos: ['DB'], team: '49ers', decade: '2010s', rating: 90, stats: { INT: 3, PD: 9 }, badges: ['All-Pro'], synergies: [] },
    { name: 'DeForest Buckner', pos: ['EDGE'], team: '49ers', decade: '2010s', rating: 88, stats: { SACKS: 12, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Richard Sherman', pos: ['DB'], team: '49ers', decade: '2010s', rating: 87, stats: { INT: 3, PD: 11 }, badges: [], synergies: [] },
    { name: 'Michael Crabtree', pos: ['WR1', 'WR2'], team: '49ers', decade: '2010s', rating: 81, stats: { YDS: 966, TD: 8, YPR: '12.5' }, badges: [], synergies: [] },
    { name: 'Anquan Boldin', pos: ['WR1', 'WR2'], team: '49ers', decade: '2010s', rating: 83, stats: { YDS: 1062, TD: 7, YPR: '13.1' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Brock Purdy', pos: ['QB'], team: '49ers', decade: '2020s', rating: 89, stats: { YDS: 4280, TD: 31, 'CMP%': '67.2' }, badges: [], synergies: [] },
    { name: 'Christian McCaffrey', pos: ['RB'], team: '49ers', decade: '2020s', rating: 94, stats: { YDS: 1459, TD: 14, YPC: '5.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Nick Bosa', pos: ['EDGE'], team: '49ers', decade: '2020s', rating: 95, stats: { SACKS: 15.5, FF: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'Deebo Samuel', pos: ['WR1', 'WR2'], team: '49ers', decade: '2020s', rating: 88, stats: { YDS: 1312, TD: 8, YPR: '16.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Brandon Aiyuk', pos: ['WR1', 'WR2'], team: '49ers', decade: '2020s', rating: 86, stats: { YDS: 1342, TD: 7, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Fred Warner', pos: ['DB'], team: '49ers', decade: '2020s', rating: 90, stats: { INT: 2, PD: 9 }, badges: ['All-Pro'], synergies: [] },
    { name: 'George Kittle', pos: ['TE'], team: '49ers', decade: '2020s', rating: 89, stats: { YDS: 902, TD: 7, YPR: '13.2' }, badges: [], synergies: [] },

    // ============ COWBOYS ============
    // 1970s
    { name: 'Roger Staubach', pos: ['QB'], team: 'Cowboys', decade: '1970s', rating: 91, stats: { YDS: 2620, TD: 18, 'CMP%': '57.0' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Tony Dorsett', pos: ['RB'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { YDS: 1325, TD: 9, YPC: '4.7' }, badges: ['HOF'], synergies: [] },
    { name: 'Drew Pearson', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { YDS: 962, TD: 6, YPR: '16.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Too Tall Jones', pos: ['EDGE'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { SACKS: '12*', FF: 3 }, badges: [], synergies: [] },
    { name: 'Harvey Martin', pos: ['EDGE'], team: 'Cowboys', decade: '1970s', rating: 87, stats: { SACKS: '13*', FF: 3 }, badges: ['SB MVP'], synergies: [] },
    { name: 'Cliff Harris', pos: ['DB'], team: 'Cowboys', decade: '1970s', rating: 85, stats: { INT: 5, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Charlie Waters', pos: ['DB'], team: 'Cowboys', decade: '1970s', rating: 83, stats: { INT: 5, PD: 11 }, badges: [], synergies: [] },
    { name: 'Billy Joe DuPree', pos: ['TE'], team: 'Cowboys', decade: '1970s', rating: 80, stats: { YDS: 520, TD: 5, YPR: '12.4' }, badges: [], synergies: [] },
    { name: 'Robert Newhouse', pos: ['RB'], team: 'Cowboys', decade: '1970s', rating: 78, stats: { YDS: 818, TD: 6, YPC: '3.9' }, badges: [], synergies: [] },

    // 1980s
    { name: 'Tony Dorsett', pos: ['RB'], team: 'Cowboys', decade: '1980s', rating: 88, stats: { YDS: 1321, TD: 8, YPC: '4.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Danny White', pos: ['QB'], team: 'Cowboys', decade: '1980s', rating: 82, stats: { YDS: 3157, TD: 21, 'CMP%': '56.8' }, badges: [], synergies: [] },
    { name: 'Tony Hill', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1980s', rating: 82, stats: { YDS: 951, TD: 7, YPR: '15.2' }, badges: [], synergies: [] },
    { name: 'Herschel Walker', pos: ['RB'], team: 'Cowboys', decade: '1980s', rating: 84, stats: { YDS: 1514, TD: 7, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'Randy White', pos: ['EDGE'], team: 'Cowboys', decade: '1980s', rating: 90, stats: { SACKS: 10, FF: 3 }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Everson Walls', pos: ['DB'], team: 'Cowboys', decade: '1980s', rating: 85, stats: { INT: 9, PD: 14 }, badges: [], synergies: [] },
    { name: 'Doug Cosbie', pos: ['TE'], team: 'Cowboys', decade: '1980s', rating: 80, stats: { YDS: 643, TD: 5, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Michael Irvin', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1980s', rating: 80, stats: { YDS: 654, TD: 4, YPR: '14.8' }, badges: ['HOF'], synergies: [] },

    // 1990s
    { name: 'Troy Aikman', pos: ['QB'], team: 'Cowboys', decade: '1990s', rating: 89, stats: { YDS: 3191, TD: 19, 'CMP%': '61.5' }, badges: ['HOF', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'Emmitt Smith', pos: ['RB'], team: 'Cowboys', decade: '1990s', rating: 95, stats: { YDS: 1773, TD: 25, YPC: '4.2' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'Michael Irvin', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1990s', rating: 92, stats: { YDS: 1523, TD: 9, YPR: '16.2' }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Deion Sanders', pos: ['DB'], team: 'Cowboys', decade: '1990s', rating: 98, stats: { INT: 6, PD: 18 }, badges: ['HOF', 'DPOY'], synergies: ['Cowboys90s'] },
    { name: 'Charles Haley', pos: ['EDGE'], team: 'Cowboys', decade: '1990s', rating: 89, stats: { SACKS: 11, FF: 3 }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Jay Novacek', pos: ['TE'], team: 'Cowboys', decade: '1990s', rating: 84, stats: { YDS: 705, TD: 5, YPR: '11.0' }, badges: [], synergies: ['Cowboys90s'] },
    { name: 'Darren Woodson', pos: ['DB'], team: 'Cowboys', decade: '1990s', rating: 87, stats: { INT: 5, PD: 13 }, badges: [], synergies: [] },
    { name: 'Alvin Harper', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1990s', rating: 80, stats: { YDS: 892, TD: 6, YPR: '18.2' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Tony Romo', pos: ['QB'], team: 'Cowboys', decade: '2000s', rating: 86, stats: { YDS: 4211, TD: 33, 'CMP%': '64.7' }, badges: [], synergies: [] },
    { name: 'Jason Witten', pos: ['TE'], team: 'Cowboys', decade: '2000s', rating: 88, stats: { YDS: 1145, TD: 7, YPR: '11.8' }, badges: [], synergies: [] },
    { name: 'DeMarcus Ware', pos: ['EDGE'], team: 'Cowboys', decade: '2000s', rating: 92, stats: { SACKS: 14, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '2000s', rating: 90, stats: { YDS: 1180, TD: 13, YPR: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Marion Barber', pos: ['RB'], team: 'Cowboys', decade: '2000s', rating: 80, stats: { YDS: 975, TD: 10, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Terence Newman', pos: ['DB'], team: 'Cowboys', decade: '2000s', rating: 82, stats: { INT: 5, PD: 14 }, badges: [], synergies: [] },
    { name: 'Roy Williams', pos: ['DB'], team: 'Cowboys', decade: '2000s', rating: 82, stats: { INT: 4, PD: 10 }, badges: [], synergies: [] },

    // 2010s
    { name: 'Dez Bryant', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '2010s', rating: 89, stats: { YDS: 1320, TD: 16, YPR: '14.2' }, badges: ['All-Pro'], synergies: [] },
    { name: 'DeMarco Murray', pos: ['RB'], team: 'Cowboys', decade: '2010s', rating: 87, stats: { YDS: 1845, TD: 13, YPC: '4.7' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tony Romo', pos: ['QB'], team: 'Cowboys', decade: '2010s', rating: 85, stats: { YDS: 3705, TD: 28, 'CMP%': '65.8' }, badges: [], synergies: [] },
    { name: 'Travis Frederick', pos: ['OL'], team: 'Cowboys', decade: '2010s', rating: 91, stats: { 'AP': 4, 'PB': 5 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Sean Lee', pos: ['DB'], team: 'Cowboys', decade: '2010s', rating: 84, stats: { INT: 3, PD: 11 }, badges: [], synergies: [] },
    { name: 'Jason Witten', pos: ['TE'], team: 'Cowboys', decade: '2010s', rating: 86, stats: { YDS: 904, TD: 5, YPR: '11.0' }, badges: [], synergies: [] },
    { name: 'DeMarcus Lawrence', pos: ['EDGE'], team: 'Cowboys', decade: '2010s', rating: 86, stats: { SACKS: 10.5, FF: 3 }, badges: [], synergies: [] },

    // 2020s
    { name: 'Dak Prescott', pos: ['QB'], team: 'Cowboys', decade: '2020s', rating: 87, stats: { YDS: 4516, TD: 36, 'CMP%': '69.5' }, badges: [], synergies: [] },
    { name: 'CeeDee Lamb', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '2020s', rating: 92, stats: { YDS: 1749, TD: 12, YPR: '14.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Micah Parsons', pos: ['EDGE'], team: 'Cowboys', decade: '2020s', rating: 95, stats: { SACKS: 14, FF: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'Trevon Diggs', pos: ['DB'], team: 'Cowboys', decade: '2020s', rating: 88, stats: { INT: 11, PD: 21 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tony Pollard', pos: ['RB'], team: 'Cowboys', decade: '2020s', rating: 82, stats: { YDS: 1005, TD: 6, YPC: '4.9' }, badges: [], synergies: [] },
    { name: 'Jake Ferguson', pos: ['TE'], team: 'Cowboys', decade: '2020s', rating: 81, stats: { YDS: 761, TD: 5, YPR: '10.6' }, badges: [], synergies: [] },
    { name: 'DeMarcus Lawrence', pos: ['EDGE'], team: 'Cowboys', decade: '2020s', rating: 85, stats: { SACKS: 9, FF: 3 }, badges: [], synergies: [] },

    // ============ PATRIOTS ============
    // 2000s
    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2000s', rating: 96, stats: { YDS: 4806, TD: 50, 'CMP%': '68.9' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Moss', 'Brady_Gronk'] },
    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2000s', rating: 96, stats: { YDS: 1493, TD: 23, YPR: '17.0' }, badges: ['HOF'], synergies: ['Brady_Moss'] },
    { name: 'Corey Dillon', pos: ['RB'], team: 'Patriots', decade: '2000s', rating: 84, stats: { YDS: 1396, TD: 12, YPC: '4.7' }, badges: [], synergies: [] },
    { name: 'Wes Welker', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2000s', rating: 89, stats: { YDS: 1348, TD: 8, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Richard Seymour', pos: ['EDGE'], team: 'Patriots', decade: '2000s', rating: 91, stats: { SACKS: 8, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Ty Law', pos: ['DB'], team: 'Patriots', decade: '2000s', rating: 90, stats: { INT: 6, PD: 15 }, badges: ['HOF'], synergies: [] },
    { name: 'Tedy Bruschi', pos: ['DB'], team: 'Patriots', decade: '2000s', rating: 83, stats: { INT: 3, PD: 8 }, badges: [], synergies: [] },
    { name: 'Asante Samuel', pos: ['DB'], team: 'Patriots', decade: '2000s', rating: 86, stats: { INT: 7, PD: 14 }, badges: [], synergies: [] },
    { name: 'Mike Vrabel', pos: ['EDGE'], team: 'Patriots', decade: '2000s', rating: 82, stats: { SACKS: 8, FF: 3 }, badges: [], synergies: [] },

    // 2010s
    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2010s', rating: 95, stats: { YDS: 4577, TD: 32, 'CMP%': '65.8' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Gronk'] },
    { name: 'Rob Gronkowski', pos: ['TE'], team: 'Patriots', decade: '2010s', rating: 97, stats: { YDS: 1327, TD: 17, YPR: '15.4' }, badges: ['HOF'], synergies: ['Brady_Gronk'] },
    { name: 'Julian Edelman', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2010s', rating: 85, stats: { YDS: 1024, TD: 6, YPR: '11.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Stephon Gilmore', pos: ['DB'], team: 'Patriots', decade: '2010s', rating: 91, stats: { INT: 6, PD: 16 }, badges: ['DPOY'], synergies: [] },
    { name: "Dont'a Hightower", pos: ['DB'], team: 'Patriots', decade: '2010s', rating: 84, stats: { INT: 2, PD: 6 }, badges: [], synergies: [] },
    { name: 'LeGarrette Blount', pos: ['RB'], team: 'Patriots', decade: '2010s', rating: 80, stats: { YDS: 1161, TD: 18, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Chandler Jones', pos: ['EDGE'], team: 'Patriots', decade: '2010s', rating: 86, stats: { SACKS: 12.5, FF: 4 }, badges: [], synergies: [] },
    { name: 'Brandin Cooks', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2010s', rating: 82, stats: { YDS: 1082, TD: 7, YPR: '15.0' }, badges: [], synergies: [] },

    // ============ CHIEFS ============
    // 1960s
    { name: 'Len Dawson', pos: ['QB'], team: 'Chiefs', decade: '1960s', rating: 88, stats: { YDS: 2527, TD: 20, 'CMP%': '57.1' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Otis Taylor', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '1960s', rating: 85, stats: { YDS: 1110, TD: 7, YPR: '18.9' }, badges: [], synergies: [] },
    { name: 'Bobby Bell', pos: ['EDGE'], team: 'Chiefs', decade: '1960s', rating: 90, stats: { SACKS: '11*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Buck Buchanan', pos: ['EDGE'], team: 'Chiefs', decade: '1960s', rating: 89, stats: { SACKS: '10*', FF: 2 }, badges: ['HOF'], synergies: [] },
    { name: 'Emmitt Thomas', pos: ['DB'], team: 'Chiefs', decade: '1960s', rating: 86, stats: { INT: 8, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Mike Garrett', pos: ['RB'], team: 'Chiefs', decade: '1960s', rating: 80, stats: { YDS: 732, TD: 5, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Fred Arbanas', pos: ['TE'], team: 'Chiefs', decade: '1960s', rating: 82, stats: { YDS: 578, TD: 4, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Chris Burford', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '1960s', rating: 79, stats: { YDS: 842, TD: 6, YPR: '15.2' }, badges: [], synergies: [] },

    // 1990s (Derrick Thomas era)
    { name: 'Derrick Thomas', pos: ['EDGE'], team: 'Chiefs', decade: '1990s', rating: 93, stats: { SACKS: 14, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Neil Smith', pos: ['EDGE'], team: 'Chiefs', decade: '1990s', rating: 87, stats: { SACKS: 12, FF: 3 }, badges: [], synergies: [] },
    { name: 'Marcus Allen', pos: ['RB'], team: 'Chiefs', decade: '1990s', rating: 83, stats: { YDS: 764, TD: 12, YPC: '3.7' }, badges: ['HOF'], synergies: [] },
    { name: 'Joe Montana', pos: ['QB'], team: 'Chiefs', decade: '1990s', rating: 82, stats: { YDS: 2929, TD: 16, 'CMP%': '60.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Tony Gonzalez', pos: ['TE'], team: 'Chiefs', decade: '1990s', rating: 90, stats: { YDS: 849, TD: 8, YPR: '12.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Dale Carter', pos: ['DB'], team: 'Chiefs', decade: '1990s', rating: 84, stats: { INT: 7, PD: 14 }, badges: [], synergies: [] },
    { name: 'Will Shields', pos: ['OL'], team: 'Chiefs', decade: '1990s', rating: 90, stats: { 'AP': 3, 'PB': 12 }, badges: ['HOF'], synergies: [] },

    // 2000s
    { name: 'Priest Holmes', pos: ['RB'], team: 'Chiefs', decade: '2000s', rating: 89, stats: { YDS: 1420, TD: 21, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Tony Gonzalez', pos: ['TE'], team: 'Chiefs', decade: '2000s', rating: 95, stats: { YDS: 1258, TD: 10, YPR: '12.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Jared Allen', pos: ['EDGE'], team: 'Chiefs', decade: '2000s', rating: 89, stats: { SACKS: 14.5, FF: 6 }, badges: [], synergies: [] },
    { name: 'Trent Green', pos: ['QB'], team: 'Chiefs', decade: '2000s', rating: 83, stats: { YDS: 4591, TD: 27, 'CMP%': '62.5' }, badges: [], synergies: [] },
    { name: 'Will Shields', pos: ['OL'], team: 'Chiefs', decade: '2000s', rating: 92, stats: { 'AP': 4, 'PB': 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Dante Hall', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '2000s', rating: 79, stats: { YDS: 512, TD: 3, YPR: '11.4' }, badges: [], synergies: [] },
    { name: 'Eddie Kennison', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '2000s', rating: 80, stats: { YDS: 1014, TD: 6, YPR: '15.2' }, badges: [], synergies: [] },
    { name: 'Greg Wesley', pos: ['DB'], team: 'Chiefs', decade: '2000s', rating: 78, stats: { INT: 4, PD: 9 }, badges: [], synergies: [] },

    // 2010s
    { name: 'Alex Smith', pos: ['QB'], team: 'Chiefs', decade: '2010s', rating: 83, stats: { YDS: 3486, TD: 23, 'CMP%': '65.7' }, badges: [], synergies: [] },
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2010s', rating: 95, stats: { YDS: 1416, TD: 11, YPR: '12.0' }, badges: ['All-Pro'], synergies: ['Mahomes_Kelce'] },
    { name: 'Tyreek Hill', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '2010s', rating: 91, stats: { YDS: 1479, TD: 12, YPR: '14.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jamaal Charles', pos: ['RB'], team: 'Chiefs', decade: '2010s', rating: 87, stats: { YDS: 1509, TD: 12, YPC: '5.5' }, badges: [], synergies: [] },
    { name: 'Justin Houston', pos: ['EDGE'], team: 'Chiefs', decade: '2010s', rating: 89, stats: { SACKS: 22, FF: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Marcus Peters', pos: ['DB'], team: 'Chiefs', decade: '2010s', rating: 86, stats: { INT: 8, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Eric Berry', pos: ['DB'], team: 'Chiefs', decade: '2010s', rating: 90, stats: { INT: 5, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Patrick Mahomes', pos: ['QB'], team: 'Chiefs', decade: '2010s', rating: 93, stats: { YDS: 5097, TD: 50, 'CMP%': '66.0' }, badges: ['MVP'], synergies: ['Mahomes_Kelce'] },

    // 2020s
    { name: 'Patrick Mahomes', pos: ['QB'], team: 'Chiefs', decade: '2020s', rating: 98, stats: { YDS: 4839, TD: 37, 'CMP%': '66.3' }, badges: ['MVP', 'SB MVP'], synergies: ['Mahomes_Kelce'] },
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2020s', rating: 94, stats: { YDS: 1338, TD: 12, YPR: '11.3' }, badges: ['All-Pro'], synergies: ['Mahomes_Kelce'] },
    { name: 'Chris Jones', pos: ['EDGE'], team: 'Chiefs', decade: '2020s', rating: 92, stats: { SACKS: 13, FF: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Isiah Pacheco', pos: ['RB'], team: 'Chiefs', decade: '2020s', rating: 82, stats: { YDS: 935, TD: 7, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Rashee Rice', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '2020s', rating: 84, stats: { YDS: 938, TD: 7, YPR: '12.2' }, badges: [], synergies: [] },
    { name: "L'Jarius Sneed", pos: ['DB'], team: 'Chiefs', decade: '2020s', rating: 84, stats: { INT: 4, PD: 12 }, badges: [], synergies: [] },
    { name: 'Trent McDuffie', pos: ['DB'], team: 'Chiefs', decade: '2020s', rating: 86, stats: { INT: 3, PD: 13 }, badges: ['All-Pro'], synergies: [] },

    // ============ STEELERS ============
    // 1970s
    { name: 'Terry Bradshaw', pos: ['QB'], team: 'Steelers', decade: '1970s', rating: 88, stats: { YDS: 2915, TD: 20, 'CMP%': '51.9' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'Franco Harris', pos: ['RB'], team: 'Steelers', decade: '1970s', rating: 88, stats: { YDS: 1128, TD: 11, YPC: '4.2' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'Lynn Swann', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1970s', rating: 87, stats: { YDS: 880, TD: 9, YPR: '17.5' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'John Stallworth', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1970s', rating: 87, stats: { YDS: 1183, TD: 8, YPR: '18.6' }, badges: ['HOF'], synergies: ['Steelers70s'] },
    { name: 'Joe Greene', pos: ['EDGE'], team: 'Steelers', decade: '1970s', rating: 96, stats: { SACKS: '13*', FF: 4 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Mel Blount', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 93, stats: { INT: 6, PD: 15 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Jack Ham', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 91, stats: { INT: 5, PD: 12 }, badges: ['HOF'], synergies: ['Steelers70s'] },
    { name: 'Jack Lambert', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 92, stats: { INT: 4, PD: 13 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Rocky Bleier', pos: ['RB'], team: 'Steelers', decade: '1970s', rating: 76, stats: { YDS: 818, TD: 5, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'L.C. Greenwood', pos: ['EDGE'], team: 'Steelers', decade: '1970s', rating: 88, stats: { SACKS: '11*', FF: 3 }, badges: [], synergies: ['Steelers70s'] },

    // 1990s
    { name: 'Rod Woodson', pos: ['DB'], team: 'Steelers', decade: '1990s', rating: 95, stats: { INT: 7, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Greg Lloyd', pos: ['EDGE'], team: 'Steelers', decade: '1990s', rating: 87, stats: { SACKS: 9, FF: 4 }, badges: [], synergies: [] },
    { name: 'Kevin Greene', pos: ['EDGE'], team: 'Steelers', decade: '1990s', rating: 90, stats: { SACKS: 14, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: "Neil O'Donnell", pos: ['QB'], team: 'Steelers', decade: '1990s', rating: 77, stats: { YDS: 2828, TD: 16, 'CMP%': '57.8' }, badges: [], synergies: [] },
    { name: 'Jerome Bettis', pos: ['RB'], team: 'Steelers', decade: '1990s', rating: 87, stats: { YDS: 1665, TD: 11, YPC: '4.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Yancey Thigpen', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1990s', rating: 82, stats: { YDS: 1398, TD: 7, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Carnell Lake', pos: ['DB'], team: 'Steelers', decade: '1990s', rating: 84, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Kordell Stewart', pos: ['QB'], team: 'Steelers', decade: '1990s', rating: 79, stats: { YDS: 2560, TD: 14, 'CMP%': '54.8' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Ben Roethlisberger', pos: ['QB'], team: 'Steelers', decade: '2000s', rating: 87, stats: { YDS: 3490, TD: 24, 'CMP%': '62.1' }, badges: [], synergies: [] },
    { name: 'Troy Polamalu', pos: ['DB'], team: 'Steelers', decade: '2000s', rating: 93, stats: { INT: 6, PD: 14 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Hines Ward', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2000s', rating: 86, stats: { YDS: 1329, TD: 12, YPR: '13.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'James Harrison', pos: ['EDGE'], team: 'Steelers', decade: '2000s', rating: 89, stats: { SACKS: 12, FF: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Willie Parker', pos: ['RB'], team: 'Steelers', decade: '2000s', rating: 82, stats: { YDS: 1494, TD: 13, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Heath Miller', pos: ['TE'], team: 'Steelers', decade: '2000s', rating: 83, stats: { YDS: 789, TD: 6, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Santonio Holmes', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2000s', rating: 83, stats: { YDS: 1025, TD: 7, YPR: '14.3' }, badges: ['SB MVP'], synergies: [] },

    // 2010s
    { name: 'Antonio Brown', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2010s', rating: 94, stats: { YDS: 1834, TD: 13, YPR: '13.5' }, badges: ['All-Pro'], synergies: [] },
    { name: "Le'Veon Bell", pos: ['RB'], team: 'Steelers', decade: '2010s', rating: 89, stats: { YDS: 1361, TD: 9, YPC: '4.3' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Ben Roethlisberger', pos: ['QB'], team: 'Steelers', decade: '2010s', rating: 86, stats: { YDS: 4952, TD: 34, 'CMP%': '64.2' }, badges: [], synergies: [] },
    { name: 'Cameron Heyward', pos: ['EDGE'], team: 'Steelers', decade: '2010s', rating: 88, stats: { SACKS: 9.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Joe Haden', pos: ['DB'], team: 'Steelers', decade: '2010s', rating: 82, stats: { INT: 3, PD: 11 }, badges: [], synergies: [] },
    { name: 'JuJu Smith-Schuster', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2010s', rating: 81, stats: { YDS: 1426, TD: 7, YPR: '13.2' }, badges: [], synergies: [] },

    // 2020s
    { name: 'T.J. Watt', pos: ['EDGE'], team: 'Steelers', decade: '2020s', rating: 96, stats: { SACKS: 22.5, FF: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Russell Wilson', pos: ['QB'], team: 'Steelers', decade: '2020s', rating: 80, stats: { YDS: 3005, TD: 18, 'CMP%': '63.7' }, badges: [], synergies: [] },
    { name: 'Najee Harris', pos: ['RB'], team: 'Steelers', decade: '2020s', rating: 80, stats: { YDS: 1034, TD: 7, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'George Pickens', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2020s', rating: 83, stats: { YDS: 1106, TD: 5, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Minkah Fitzpatrick', pos: ['DB'], team: 'Steelers', decade: '2020s', rating: 87, stats: { INT: 4, PD: 10 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Pat Freiermuth', pos: ['TE'], team: 'Steelers', decade: '2020s', rating: 80, stats: { YDS: 732, TD: 5, YPR: '10.5' }, badges: [], synergies: [] },
    { name: 'Cameron Heyward', pos: ['EDGE'], team: 'Steelers', decade: '2020s', rating: 87, stats: { SACKS: 8, FF: 2 }, badges: ['All-Pro'], synergies: [] },

    // ============ PACKERS ============
    // 1960s
    { name: 'Bart Starr', pos: ['QB'], team: 'Packers', decade: '1960s', rating: 91, stats: { YDS: 2257, TD: 16, 'CMP%': '57.4' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Jim Taylor', pos: ['RB'], team: 'Packers', decade: '1960s', rating: 87, stats: { YDS: 1474, TD: 19, YPC: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Paul Hornung', pos: ['RB'], team: 'Packers', decade: '1960s', rating: 85, stats: { YDS: 681, TD: 13, YPC: '3.8' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Herb Adderley', pos: ['DB'], team: 'Packers', decade: '1960s', rating: 90, stats: { INT: 7, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Davis', pos: ['EDGE'], team: 'Packers', decade: '1960s', rating: 89, stats: { SACKS: '12*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Wood', pos: ['DB'], team: 'Packers', decade: '1960s', rating: 88, stats: { INT: 9, PD: 11 }, badges: ['HOF'], synergies: [] },
    { name: 'Boyd Dowler', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1960s', rating: 82, stats: { YDS: 892, TD: 7, YPR: '17.5' }, badges: [], synergies: [] },
    { name: 'Max McGee', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1960s', rating: 79, stats: { YDS: 682, TD: 5, YPR: '16.8' }, badges: [], synergies: [] },
    { name: 'Ron Kramer', pos: ['TE'], team: 'Packers', decade: '1960s', rating: 82, stats: { YDS: 575, TD: 5, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Ray Nitschke', pos: ['DB'], team: 'Packers', decade: '1960s', rating: 91, stats: { INT: 4, PD: 10 }, badges: ['HOF'], synergies: [] },
    { name: 'Forrest Gregg', pos: ['OL'], team: 'Packers', decade: '1960s', rating: 93, stats: { 'AP': 7, 'PB': 9 }, badges: ['HOF'], synergies: [] },

    // 1990s
    { name: 'Brett Favre', pos: ['QB'], team: 'Packers', decade: '1990s', rating: 94, stats: { YDS: 4413, TD: 38, 'CMP%': '61.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Reggie White', pos: ['EDGE'], team: 'Packers', decade: '1990s', rating: 96, stats: { SACKS: 14, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Sterling Sharpe', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1990s', rating: 90, stats: { YDS: 1274, TD: 12, YPR: '13.6' }, badges: [], synergies: [] },
    { name: 'Robert Brooks', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1990s', rating: 83, stats: { YDS: 1497, TD: 13, YPR: '15.8' }, badges: [], synergies: [] },
    { name: 'Edgar Bennett', pos: ['RB'], team: 'Packers', decade: '1990s', rating: 79, stats: { YDS: 899, TD: 6, YPC: '3.8' }, badges: [], synergies: [] },
    { name: 'LeRoy Butler', pos: ['DB'], team: 'Packers', decade: '1990s', rating: 87, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Dorsey Levens', pos: ['RB'], team: 'Packers', decade: '1990s', rating: 82, stats: { YDS: 1435, TD: 7, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Mark Chmura', pos: ['TE'], team: 'Packers', decade: '1990s', rating: 82, stats: { YDS: 679, TD: 6, YPR: '11.4' }, badges: [], synergies: [] },
    { name: 'Antonio Freeman', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1990s', rating: 84, stats: { YDS: 1243, TD: 9, YPR: '14.8' }, badges: [], synergies: [] },

    // 2010s
    { name: 'Aaron Rodgers', pos: ['QB'], team: 'Packers', decade: '2010s', rating: 97, stats: { YDS: 4643, TD: 45, 'CMP%': '68.3' }, badges: ['MVP'], synergies: ['Rodgers_Adams', 'Rodgers_Nelson'] },
    { name: 'Davante Adams', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2010s', rating: 93, stats: { YDS: 1374, TD: 14, YPR: '14.0' }, badges: ['All-Pro'], synergies: ['Rodgers_Adams'] },
    { name: 'Jordy Nelson', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2010s', rating: 88, stats: { YDS: 1519, TD: 14, YPR: '15.1' }, badges: [], synergies: ['Rodgers_Nelson'] },
    { name: 'Eddie Lacy', pos: ['RB'], team: 'Packers', decade: '2010s', rating: 80, stats: { YDS: 1178, TD: 11, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Clay Matthews', pos: ['EDGE'], team: 'Packers', decade: '2010s', rating: 86, stats: { SACKS: 13.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Ha Ha Clinton-Dix', pos: ['DB'], team: 'Packers', decade: '2010s', rating: 80, stats: { INT: 5, PD: 10 }, badges: [], synergies: [] },
    { name: 'Aaron Jones', pos: ['RB'], team: 'Packers', decade: '2010s', rating: 85, stats: { YDS: 1084, TD: 19, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Jimmy Graham', pos: ['TE'], team: 'Packers', decade: '2010s', rating: 80, stats: { YDS: 636, TD: 6, YPR: '11.8' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Jordan Love', pos: ['QB'], team: 'Packers', decade: '2020s', rating: 85, stats: { YDS: 4159, TD: 32, 'CMP%': '64.2' }, badges: [], synergies: [] },
    { name: 'Josh Jacobs', pos: ['RB'], team: 'Packers', decade: '2020s', rating: 86, stats: { YDS: 1329, TD: 15, YPC: '4.7' }, badges: [], synergies: [] },
    { name: 'Jayden Reed', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2020s', rating: 82, stats: { YDS: 992, TD: 6, YPR: '13.5' }, badges: [], synergies: [] },
    { name: 'Jaire Alexander', pos: ['DB'], team: 'Packers', decade: '2020s', rating: 87, stats: { INT: 3, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Rashan Gary', pos: ['EDGE'], team: 'Packers', decade: '2020s', rating: 85, stats: { SACKS: 9.5, FF: 2 }, badges: [], synergies: [] },
    { name: 'Tucker Kraft', pos: ['TE'], team: 'Packers', decade: '2020s', rating: 80, stats: { YDS: 742, TD: 6, YPR: '11.8' }, badges: [], synergies: [] },
    { name: 'Romeo Doubs', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2020s', rating: 80, stats: { YDS: 930, TD: 7, YPR: '12.8' }, badges: [], synergies: [] },

    // ============ EAGLES ============
    // 1980s
    { name: 'Reggie White', pos: ['EDGE'], team: 'Eagles', decade: '1980s', rating: 97, stats: { SACKS: 18, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Randall Cunningham', pos: ['QB'], team: 'Eagles', decade: '1980s', rating: 87, stats: { YDS: 3400, TD: 21, 'CMP%': '56.4' }, badges: [], synergies: [] },
    { name: 'Mike Quick', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '1980s', rating: 86, stats: { YDS: 1052, TD: 9, YPR: '18.7' }, badges: [], synergies: [] },
    { name: 'Keith Byars', pos: ['RB'], team: 'Eagles', decade: '1980s', rating: 80, stats: { YDS: 705, TD: 6, YPC: '3.7' }, badges: [], synergies: [] },
    { name: 'Eric Allen', pos: ['DB'], team: 'Eagles', decade: '1980s', rating: 85, stats: { INT: 6, PD: 12 }, badges: [], synergies: [] },
    { name: 'Jerome Brown', pos: ['EDGE'], team: 'Eagles', decade: '1980s', rating: 87, stats: { SACKS: 9, FF: 4 }, badges: [], synergies: [] },
    { name: 'Keith Jackson', pos: ['TE'], team: 'Eagles', decade: '1980s', rating: 85, stats: { YDS: 869, TD: 6, YPR: '13.3' }, badges: [], synergies: [] },
    { name: 'Cris Carter', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '1980s', rating: 80, stats: { YDS: 761, TD: 5, YPR: '13.0' }, badges: ['HOF'], synergies: [] },

    // 1990s
    { name: 'Randall Cunningham', pos: ['QB'], team: 'Eagles', decade: '1990s', rating: 85, stats: { YDS: 3466, TD: 22, 'CMP%': '58.5' }, badges: [], synergies: [] },
    { name: 'Ricky Watters', pos: ['RB'], team: 'Eagles', decade: '1990s', rating: 85, stats: { YDS: 1411, TD: 7, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Irving Fryar', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '1990s', rating: 82, stats: { YDS: 1195, TD: 11, YPR: '14.3' }, badges: [], synergies: [] },
    { name: 'Eric Allen', pos: ['DB'], team: 'Eagles', decade: '1990s', rating: 87, stats: { INT: 7, PD: 14 }, badges: [], synergies: [] },
    { name: 'William Fuller', pos: ['EDGE'], team: 'Eagles', decade: '1990s', rating: 83, stats: { SACKS: 9, FF: 3 }, badges: [], synergies: [] },
    { name: 'Seth Joyner', pos: ['DB'], team: 'Eagles', decade: '1990s', rating: 84, stats: { INT: 3, PD: 9 }, badges: [], synergies: [] },
    { name: 'Chad Lewis', pos: ['TE'], team: 'Eagles', decade: '1990s', rating: 78, stats: { YDS: 480, TD: 4, YPR: '11.0' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Donovan McNabb', pos: ['QB'], team: 'Eagles', decade: '2000s', rating: 86, stats: { YDS: 3916, TD: 31, 'CMP%': '59.0' }, badges: [], synergies: [] },
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2000s', rating: 93, stats: { YDS: 1200, TD: 14, YPR: '15.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Brian Westbrook', pos: ['RB'], team: 'Eagles', decade: '2000s', rating: 86, stats: { YDS: 1333, TD: 9, YPC: '4.6' }, badges: [], synergies: [] },
    { name: 'Brian Dawkins', pos: ['DB'], team: 'Eagles', decade: '2000s', rating: 92, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Trent Cole', pos: ['EDGE'], team: 'Eagles', decade: '2000s', rating: 85, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'L.J. Smith', pos: ['TE'], team: 'Eagles', decade: '2000s', rating: 78, stats: { YDS: 585, TD: 5, YPR: '10.8' }, badges: [], synergies: [] },
    { name: 'DeSean Jackson', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2000s', rating: 85, stats: { YDS: 1156, TD: 9, YPR: '18.2' }, badges: [], synergies: [] },

    // 2010s
    { name: 'Carson Wentz', pos: ['QB'], team: 'Eagles', decade: '2010s', rating: 84, stats: { YDS: 3296, TD: 33, 'CMP%': '60.2' }, badges: [], synergies: [] },
    { name: 'LeSean McCoy', pos: ['RB'], team: 'Eagles', decade: '2010s', rating: 89, stats: { YDS: 1607, TD: 17, YPC: '4.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Fletcher Cox', pos: ['EDGE'], team: 'Eagles', decade: '2010s', rating: 89, stats: { SACKS: 10.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jason Kelce', pos: ['OL'], team: 'Eagles', decade: '2010s', rating: 94, stats: { 'AP': 6, 'PB': 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Zach Ertz', pos: ['TE'], team: 'Eagles', decade: '2010s', rating: 86, stats: { YDS: 1163, TD: 6, YPR: '11.8' }, badges: [], synergies: [] },
    { name: 'DeSean Jackson', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2010s', rating: 84, stats: { YDS: 1069, TD: 6, YPR: '17.5' }, badges: [], synergies: [] },
    { name: 'Malcolm Jenkins', pos: ['DB'], team: 'Eagles', decade: '2010s', rating: 84, stats: { INT: 3, PD: 11 }, badges: [], synergies: [] },
    { name: 'Nick Foles', pos: ['QB'], team: 'Eagles', decade: '2010s', rating: 81, stats: { YDS: 2891, TD: 25, 'CMP%': '61.5' }, badges: ['SB MVP'], synergies: [] },

    // 2020s
    { name: 'Jalen Hurts', pos: ['QB'], team: 'Eagles', decade: '2020s', rating: 88, stats: { YDS: 3858, TD: 23, 'CMP%': '66.5' }, badges: [], synergies: [] },
    { name: 'Saquon Barkley', pos: ['RB'], team: 'Eagles', decade: '2020s', rating: 93, stats: { YDS: 2005, TD: 13, YPC: '5.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'A.J. Brown', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2020s', rating: 91, stats: { YDS: 1456, TD: 11, YPR: '15.8' }, badges: [], synergies: [] },
    { name: 'DeVonta Smith', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2020s', rating: 87, stats: { YDS: 1219, TD: 7, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Dallas Goedert', pos: ['TE'], team: 'Eagles', decade: '2020s', rating: 84, stats: { YDS: 765, TD: 5, YPR: '11.7' }, badges: [], synergies: [] },
    { name: 'Haason Reddick', pos: ['EDGE'], team: 'Eagles', decade: '2020s', rating: 86, stats: { SACKS: 16, FF: 4 }, badges: [], synergies: [] },
    { name: 'Darius Slay', pos: ['DB'], team: 'Eagles', decade: '2020s', rating: 87, stats: { INT: 4, PD: 14 }, badges: ['All-Pro'], synergies: [] },

    // ============ RAVENS ============
    // 2000s
    { name: 'Ray Lewis', pos: ['DB'], team: 'Ravens', decade: '2000s', rating: 96, stats: { INT: 3, PD: 9 }, badges: ['HOF', 'DPOY', 'SB MVP'], synergies: [] },
    { name: 'Ed Reed', pos: ['DB'], team: 'Ravens', decade: '2000s', rating: 97, stats: { INT: 9, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Jamal Lewis', pos: ['RB'], team: 'Ravens', decade: '2000s', rating: 87, stats: { YDS: 2066, TD: 14, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Todd Heap', pos: ['TE'], team: 'Ravens', decade: '2000s', rating: 83, stats: { YDS: 855, TD: 7, YPR: '11.7' }, badges: [], synergies: [] },
    { name: 'Terrell Suggs', pos: ['EDGE'], team: 'Ravens', decade: '2000s', rating: 90, stats: { SACKS: 14, FF: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Steve McNair', pos: ['QB'], team: 'Ravens', decade: '2000s', rating: 82, stats: { YDS: 3050, TD: 17, 'CMP%': '61.0' }, badges: [], synergies: [] },
    { name: 'Derrick Mason', pos: ['WR1', 'WR2'], team: 'Ravens', decade: '2000s', rating: 83, stats: { YDS: 1087, TD: 5, YPR: '12.4' }, badges: [], synergies: [] },
    { name: 'Haloti Ngata', pos: ['EDGE'], team: 'Ravens', decade: '2000s', rating: 87, stats: { SACKS: 6, FF: 3 }, badges: ['All-Pro'], synergies: [] },

    // 2010s
    { name: 'Joe Flacco', pos: ['QB'], team: 'Ravens', decade: '2010s', rating: 82, stats: { YDS: 3817, TD: 25, 'CMP%': '61.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Ray Rice', pos: ['RB'], team: 'Ravens', decade: '2010s', rating: 86, stats: { YDS: 1364, TD: 12, YPC: '4.7' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Terrell Suggs', pos: ['EDGE'], team: 'Ravens', decade: '2010s', rating: 87, stats: { SACKS: 11, FF: 4 }, badges: [], synergies: [] },
    { name: 'Marshal Yanda', pos: ['OL'], team: 'Ravens', decade: '2010s', rating: 93, stats: { 'AP': 5, 'PB': 8 }, badges: ['HOF'], synergies: [] },
    { name: 'C.J. Mosley', pos: ['DB'], team: 'Ravens', decade: '2010s', rating: 86, stats: { INT: 2, PD: 8 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Lamar Jackson', pos: ['QB'], team: 'Ravens', decade: '2010s', rating: 91, stats: { YDS: 3127, TD: 36, 'CMP%': '66.1' }, badges: ['MVP'], synergies: [] },
    { name: 'Steve Smith Sr.', pos: ['WR1', 'WR2'], team: 'Ravens', decade: '2010s', rating: 83, stats: { YDS: 1065, TD: 6, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Torrey Smith', pos: ['WR1', 'WR2'], team: 'Ravens', decade: '2010s', rating: 80, stats: { YDS: 966, TD: 8, YPR: '16.5' }, badges: [], synergies: [] },
    { name: 'Dennis Pitta', pos: ['TE'], team: 'Ravens', decade: '2010s', rating: 80, stats: { YDS: 669, TD: 7, YPR: '11.4' }, badges: [], synergies: [] },
    { name: 'Jimmy Smith', pos: ['DB'], team: 'Ravens', decade: '2010s', rating: 82, stats: { INT: 3, PD: 12 }, badges: [], synergies: [] },

    // 2020s
    { name: 'Lamar Jackson', pos: ['QB'], team: 'Ravens', decade: '2020s', rating: 94, stats: { YDS: 4172, TD: 37, 'CMP%': '67.2' }, badges: ['MVP'], synergies: [] },
    { name: 'Derrick Henry', pos: ['RB'], team: 'Ravens', decade: '2020s', rating: 90, stats: { YDS: 1921, TD: 16, YPC: '4.9' }, badges: [], synergies: [] },
    { name: 'Mark Andrews', pos: ['TE'], team: 'Ravens', decade: '2020s', rating: 88, stats: { YDS: 1361, TD: 9, YPR: '12.0' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Kyle Hamilton', pos: ['DB'], team: 'Ravens', decade: '2020s', rating: 91, stats: { INT: 5, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Roquan Smith', pos: ['DB'], team: 'Ravens', decade: '2020s', rating: 88, stats: { INT: 3, PD: 8 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Zay Flowers', pos: ['WR1', 'WR2'], team: 'Ravens', decade: '2020s', rating: 83, stats: { YDS: 1047, TD: 5, YPR: '13.1' }, badges: [], synergies: [] },
    { name: 'Marlon Humphrey', pos: ['DB'], team: 'Ravens', decade: '2020s', rating: 85, stats: { INT: 3, PD: 13 }, badges: ['All-Pro'], synergies: [] },

    // ============ BILLS ============
    // 1990s
    { name: 'Jim Kelly', pos: ['QB'], team: 'Bills', decade: '1990s', rating: 90, stats: { YDS: 3844, TD: 33, 'CMP%': '60.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Thurman Thomas', pos: ['RB'], team: 'Bills', decade: '1990s', rating: 92, stats: { YDS: 1487, TD: 12, YPC: '4.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Andre Reed', pos: ['WR1', 'WR2'], team: 'Bills', decade: '1990s', rating: 88, stats: { YDS: 1312, TD: 10, YPR: '13.9' }, badges: ['HOF'], synergies: [] },
    { name: 'Bruce Smith', pos: ['EDGE'], team: 'Bills', decade: '1990s', rating: 95, stats: { SACKS: 14, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Cornelius Bennett', pos: ['EDGE'], team: 'Bills', decade: '1990s', rating: 85, stats: { SACKS: 8, FF: 3 }, badges: [], synergies: [] },
    { name: 'Nate Odomes', pos: ['DB'], team: 'Bills', decade: '1990s', rating: 82, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },
    { name: 'Pete Metzelaars', pos: ['TE'], team: 'Bills', decade: '1990s', rating: 77, stats: { YDS: 417, TD: 4, YPR: '10.8' }, badges: [], synergies: [] },
    { name: 'James Lofton', pos: ['WR1', 'WR2'], team: 'Bills', decade: '1990s', rating: 84, stats: { YDS: 1072, TD: 8, YPR: '17.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Henry Jones', pos: ['DB'], team: 'Bills', decade: '1990s', rating: 83, stats: { INT: 8, PD: 13 }, badges: [], synergies: [] },

    // 2020s
    { name: 'Josh Allen', pos: ['QB'], team: 'Bills', decade: '2020s', rating: 94, stats: { YDS: 4306, TD: 35, 'CMP%': '63.3' }, badges: [], synergies: [] },
    { name: 'Stefon Diggs', pos: ['WR1', 'WR2'], team: 'Bills', decade: '2020s', rating: 89, stats: { YDS: 1429, TD: 11, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Von Miller', pos: ['EDGE'], team: 'Bills', decade: '2020s', rating: 84, stats: { SACKS: 8, FF: 2 }, badges: [], synergies: [] },
    { name: 'James Cook', pos: ['RB'], team: 'Bills', decade: '2020s', rating: 83, stats: { YDS: 1122, TD: 8, YPC: '5.1' }, badges: [], synergies: [] },
    { name: 'Dalton Kincaid', pos: ['TE'], team: 'Bills', decade: '2020s', rating: 82, stats: { YDS: 842, TD: 4, YPR: '10.5' }, badges: [], synergies: [] },
    { name: "Tre'Davious White", pos: ['DB'], team: 'Bills', decade: '2020s', rating: 85, stats: { INT: 6, PD: 17 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Greg Rousseau', pos: ['EDGE'], team: 'Bills', decade: '2020s', rating: 82, stats: { SACKS: 8, FF: 3 }, badges: [], synergies: [] },

    // ============ DOLPHINS ============
    // 1970s
    { name: 'Bob Griese', pos: ['QB'], team: 'Dolphins', decade: '1970s', rating: 87, stats: { YDS: 2252, TD: 16, 'CMP%': '56.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Larry Csonka', pos: ['RB'], team: 'Dolphins', decade: '1970s', rating: 87, stats: { YDS: 1117, TD: 9, YPC: '4.4' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Paul Warfield', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1970s', rating: 89, stats: { YDS: 891, TD: 8, YPR: '20.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Mercury Morris', pos: ['RB'], team: 'Dolphins', decade: '1970s', rating: 82, stats: { YDS: 1000, TD: 12, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Dick Anderson', pos: ['DB'], team: 'Dolphins', decade: '1970s', rating: 85, stats: { INT: 7, PD: 12 }, badges: [], synergies: [] },
    { name: 'Nick Buoniconti', pos: ['DB'], team: 'Dolphins', decade: '1970s', rating: 86, stats: { INT: 4, PD: 10 }, badges: ['HOF'], synergies: [] },
    { name: 'Bill Stanfill', pos: ['EDGE'], team: 'Dolphins', decade: '1970s', rating: 83, stats: { SACKS: '9*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Jim Mandich', pos: ['TE'], team: 'Dolphins', decade: '1970s', rating: 77, stats: { YDS: 389, TD: 3, YPR: '11.6' }, badges: [], synergies: [] },
    { name: 'Howard Twilley', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1970s', rating: 79, stats: { YDS: 625, TD: 4, YPR: '14.2' }, badges: [], synergies: [] },

    // 1980s
    { name: 'Dan Marino', pos: ['QB'], team: 'Dolphins', decade: '1980s', rating: 96, stats: { YDS: 5084, TD: 48, 'CMP%': '64.2' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Mark Clayton', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1980s', rating: 85, stats: { YDS: 1389, TD: 18, YPR: '16.0' }, badges: [], synergies: [] },
    { name: 'Mark Duper', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1980s', rating: 84, stats: { YDS: 1313, TD: 11, YPR: '18.5' }, badges: [], synergies: [] },
    { name: 'Bob Baumhower', pos: ['EDGE'], team: 'Dolphins', decade: '1980s', rating: 82, stats: { SACKS: 7, FF: 2 }, badges: [], synergies: [] },
    { name: 'Glenn Blackwood', pos: ['DB'], team: 'Dolphins', decade: '1980s', rating: 80, stats: { INT: 5, PD: 10 }, badges: [], synergies: [] },
    { name: 'Nat Moore', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1980s', rating: 81, stats: { YDS: 841, TD: 6, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Bruce Hardy', pos: ['TE'], team: 'Dolphins', decade: '1980s', rating: 77, stats: { YDS: 452, TD: 3, YPR: '11.3' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Tyreek Hill', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '2020s', rating: 93, stats: { YDS: 1799, TD: 13, YPR: '14.1' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tua Tagovailoa', pos: ['QB'], team: 'Dolphins', decade: '2020s', rating: 84, stats: { YDS: 4624, TD: 29, 'CMP%': '69.3' }, badges: [], synergies: [] },
    { name: 'Jaylen Waddle', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '2020s', rating: 86, stats: { YDS: 1356, TD: 8, YPR: '13.4' }, badges: [], synergies: [] },
    { name: 'Jevon Holland', pos: ['DB'], team: 'Dolphins', decade: '2020s', rating: 86, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Jaelan Phillips', pos: ['EDGE'], team: 'Dolphins', decade: '2020s', rating: 83, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: "De'Von Achane", pos: ['RB'], team: 'Dolphins', decade: '2020s', rating: 84, stats: { YDS: 905, TD: 9, YPC: '7.0' }, badges: [], synergies: [] },

    // ============ VIKINGS ============
    // 1970s
    { name: 'Fran Tarkenton', pos: ['QB'], team: 'Vikings', decade: '1970s', rating: 89, stats: { YDS: 2994, TD: 25, 'CMP%': '56.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Chuck Foreman', pos: ['RB'], team: 'Vikings', decade: '1970s', rating: 84, stats: { YDS: 1112, TD: 13, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Carl Eller', pos: ['EDGE'], team: 'Vikings', decade: '1970s', rating: 91, stats: { SACKS: '15*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Alan Page', pos: ['EDGE'], team: 'Vikings', decade: '1970s', rating: 94, stats: { SACKS: '12*', FF: 4 }, badges: ['HOF', 'MVP', 'DPOY'], synergies: [] },
    { name: 'Paul Krause', pos: ['DB'], team: 'Vikings', decade: '1970s', rating: 90, stats: { INT: 8, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'John Gilliam', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1970s', rating: 82, stats: { YDS: 907, TD: 7, YPR: '17.5' }, badges: [], synergies: [] },
    { name: 'Stu Voigt', pos: ['TE'], team: 'Vikings', decade: '1970s', rating: 76, stats: { YDS: 382, TD: 3, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Ahmad Rashad', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1970s', rating: 84, stats: { YDS: 1095, TD: 9, YPR: '16.0' }, badges: [], synergies: [] },

    // 1990s
    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1990s', rating: 95, stats: { YDS: 1632, TD: 17, YPR: '18.3' }, badges: ['HOF'], synergies: ['Cunningham_Moss'] },
    { name: 'Cris Carter', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1990s', rating: 91, stats: { YDS: 1371, TD: 17, YPR: '13.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Randall Cunningham', pos: ['QB'], team: 'Vikings', decade: '1990s', rating: 84, stats: { YDS: 3704, TD: 34, 'CMP%': '60.9' }, badges: [], synergies: ['Cunningham_Moss'] },
    { name: 'Robert Smith', pos: ['RB'], team: 'Vikings', decade: '1990s', rating: 85, stats: { YDS: 1521, TD: 7, YPC: '4.8' }, badges: [], synergies: [] },
    { name: 'John Randle', pos: ['EDGE'], team: 'Vikings', decade: '1990s', rating: 93, stats: { SACKS: 15.5, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Orlando Thomas', pos: ['DB'], team: 'Vikings', decade: '1990s', rating: 80, stats: { INT: 5, PD: 10 }, badges: [], synergies: [] },
    { name: 'Jeff George', pos: ['QB'], team: 'Vikings', decade: '1990s', rating: 79, stats: { YDS: 2816, TD: 18, 'CMP%': '58.7' }, badges: [], synergies: [] },

    // 2010s
    { name: 'Adrian Peterson', pos: ['RB'], team: 'Vikings', decade: '2010s', rating: 93, stats: { YDS: 2097, TD: 12, YPC: '6.0' }, badges: ['MVP'], synergies: [] },
    { name: 'Harrison Smith', pos: ['DB'], team: 'Vikings', decade: '2010s', rating: 88, stats: { INT: 5, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Everson Griffen', pos: ['EDGE'], team: 'Vikings', decade: '2010s', rating: 85, stats: { SACKS: 13, FF: 3 }, badges: [], synergies: [] },
    { name: 'Stefon Diggs', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2010s', rating: 87, stats: { YDS: 1130, TD: 9, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Adam Thielen', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2010s', rating: 86, stats: { YDS: 1373, TD: 9, YPR: '14.4' }, badges: [], synergies: [] },
    { name: 'Kirk Cousins', pos: ['QB'], team: 'Vikings', decade: '2010s', rating: 82, stats: { YDS: 4298, TD: 30, 'CMP%': '67.4' }, badges: [], synergies: [] },
    { name: 'Kyle Rudolph', pos: ['TE'], team: 'Vikings', decade: '2010s', rating: 81, stats: { YDS: 609, TD: 5, YPR: '10.9' }, badges: [], synergies: [] },
    { name: 'Danielle Hunter', pos: ['EDGE'], team: 'Vikings', decade: '2010s', rating: 87, stats: { SACKS: 14.5, FF: 3 }, badges: [], synergies: [] },

    // 2020s
    { name: 'Justin Jefferson', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2020s', rating: 96, stats: { YDS: 1809, TD: 10, YPR: '15.3' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Sam Darnold', pos: ['QB'], team: 'Vikings', decade: '2020s', rating: 81, stats: { YDS: 4319, TD: 35, 'CMP%': '66.2' }, badges: [], synergies: [] },
    { name: 'Aaron Jones', pos: ['RB'], team: 'Vikings', decade: '2020s', rating: 84, stats: { YDS: 1138, TD: 9, YPC: '4.6' }, badges: [], synergies: [] },
    { name: 'Jonathan Greenard', pos: ['EDGE'], team: 'Vikings', decade: '2020s', rating: 85, stats: { SACKS: 12, FF: 3 }, badges: [], synergies: [] },
    { name: 'Byron Murphy Jr.', pos: ['DB'], team: 'Vikings', decade: '2020s', rating: 83, stats: { INT: 4, PD: 12 }, badges: [], synergies: [] },
    { name: 'T.J. Hockenson', pos: ['TE'], team: 'Vikings', decade: '2020s', rating: 85, stats: { YDS: 960, TD: 6, YPR: '11.4' }, badges: [], synergies: [] },
    { name: 'Jordan Addison', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2020s', rating: 82, stats: { YDS: 1020, TD: 8, YPR: '14.2' }, badges: [], synergies: [] },

    // ============ BENGALS ============
    // 1980s
    { name: 'Ken Anderson', pos: ['QB'], team: 'Bengals', decade: '1980s', rating: 85, stats: { YDS: 3754, TD: 29, 'CMP%': '62.3' }, badges: ['MVP'], synergies: [] },
    { name: 'James Brooks', pos: ['RB'], team: 'Bengals', decade: '1980s', rating: 84, stats: { YDS: 1239, TD: 8, YPC: '5.3' }, badges: [], synergies: [] },
    { name: 'Cris Collinsworth', pos: ['WR1', 'WR2'], team: 'Bengals', decade: '1980s', rating: 83, stats: { YDS: 1130, TD: 5, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Eddie Brown', pos: ['WR1', 'WR2'], team: 'Bengals', decade: '1980s', rating: 82, stats: { YDS: 1273, TD: 9, YPR: '16.5' }, badges: [], synergies: [] },
    { name: 'Eddie Edwards', pos: ['EDGE'], team: 'Bengals', decade: '1980s', rating: 80, stats: { SACKS: 8, FF: 2 }, badges: [], synergies: [] },
    { name: 'Ken Riley', pos: ['DB'], team: 'Bengals', decade: '1980s', rating: 84, stats: { INT: 5, PD: 11 }, badges: [], synergies: [] },
    { name: 'Boomer Esiason', pos: ['QB'], team: 'Bengals', decade: '1980s', rating: 87, stats: { YDS: 3572, TD: 28, 'CMP%': '57.5' }, badges: ['MVP'], synergies: [] },
    { name: 'Ickey Woods', pos: ['RB'], team: 'Bengals', decade: '1980s', rating: 81, stats: { YDS: 1066, TD: 15, YPC: '4.2' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Joe Burrow', pos: ['QB'], team: 'Bengals', decade: '2020s', rating: 92, stats: { YDS: 4611, TD: 35, 'CMP%': '68.2' }, badges: [], synergies: ['Burrow_Chase'] },
    { name: "Ja'Marr Chase", pos: ['WR1', 'WR2'], team: 'Bengals', decade: '2020s', rating: 95, stats: { YDS: 1708, TD: 17, YPR: '16.5' }, badges: ['All-Pro'], synergies: ['Burrow_Chase'] },
    { name: 'Tee Higgins', pos: ['WR1', 'WR2'], team: 'Bengals', decade: '2020s', rating: 85, stats: { YDS: 1029, TD: 7, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Joe Mixon', pos: ['RB'], team: 'Bengals', decade: '2020s', rating: 83, stats: { YDS: 1205, TD: 9, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Trey Hendrickson', pos: ['EDGE'], team: 'Bengals', decade: '2020s', rating: 89, stats: { SACKS: 17.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jessie Bates', pos: ['DB'], team: 'Bengals', decade: '2020s', rating: 86, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },
    { name: 'Sam Hubbard', pos: ['EDGE'], team: 'Bengals', decade: '2020s', rating: 82, stats: { SACKS: 7.5, FF: 3 }, badges: [], synergies: [] },

    // ============ BROWNS ============
    // 1960s
    { name: 'Jim Brown', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 99, stats: { YDS: 1863, TD: 17, YPC: '5.2' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Leroy Kelly', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 86, stats: { YDS: 1239, TD: 11, YPC: '4.7' }, badges: ['HOF'], synergies: [] },
    { name: 'Paul Warfield', pos: ['WR1', 'WR2'], team: 'Browns', decade: '1960s', rating: 89, stats: { YDS: 1067, TD: 9, YPR: '20.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Frank Ryan', pos: ['QB'], team: 'Browns', decade: '1960s', rating: 82, stats: { YDS: 2974, TD: 25, 'CMP%': '52.3' }, badges: [], synergies: [] },
    { name: 'Jim Houston', pos: ['EDGE'], team: 'Browns', decade: '1960s', rating: 83, stats: { SACKS: '9*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Ross Fichtner', pos: ['DB'], team: 'Browns', decade: '1960s', rating: 80, stats: { INT: 6, PD: 9 }, badges: [], synergies: [] },
    { name: 'Gary Collins', pos: ['WR1', 'WR2'], team: 'Browns', decade: '1960s', rating: 84, stats: { YDS: 946, TD: 13, YPR: '17.8' }, badges: [], synergies: [] },
    { name: 'Ernie Green', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 79, stats: { YDS: 750, TD: 5, YPC: '4.4' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Myles Garrett', pos: ['EDGE'], team: 'Browns', decade: '2020s', rating: 95, stats: { SACKS: 16, FF: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Nick Chubb', pos: ['RB'], team: 'Browns', decade: '2020s', rating: 88, stats: { YDS: 1525, TD: 12, YPC: '5.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Amari Cooper', pos: ['WR1', 'WR2'], team: 'Browns', decade: '2020s', rating: 84, stats: { YDS: 1250, TD: 7, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Denzel Ward', pos: ['DB'], team: 'Browns', decade: '2020s', rating: 86, stats: { INT: 4, PD: 13 }, badges: ['All-Pro'], synergies: [] },
    { name: 'David Njoku', pos: ['TE'], team: 'Browns', decade: '2020s', rating: 82, stats: { YDS: 882, TD: 6, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'Deshaun Watson', pos: ['QB'], team: 'Browns', decade: '2020s', rating: 78, stats: { YDS: 2800, TD: 17, 'CMP%': '61.4' }, badges: [], synergies: [] },

    // ============ COLTS ============
    // 1960s
    { name: 'Johnny Unitas', pos: ['QB'], team: 'Colts', decade: '1960s', rating: 93, stats: { YDS: 2830, TD: 20, 'CMP%': '54.6' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'John Mackey', pos: ['TE'], team: 'Colts', decade: '1960s', rating: 91, stats: { YDS: 829, TD: 7, YPR: '15.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Lenny Moore', pos: ['RB'], team: 'Colts', decade: '1960s', rating: 88, stats: { YDS: 867, TD: 16, YPC: '4.5' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Gino Marchetti', pos: ['EDGE'], team: 'Colts', decade: '1960s', rating: 91, stats: { SACKS: '14*', FF: 2 }, badges: ['HOF'], synergies: [] },
    { name: 'Raymond Berry', pos: ['WR1', 'WR2'], team: 'Colts', decade: '1960s', rating: 87, stats: { YDS: 1298, TD: 10, YPR: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Bobby Boyd', pos: ['DB'], team: 'Colts', decade: '1960s', rating: 84, stats: { INT: 9, PD: 11 }, badges: [], synergies: [] },
    { name: 'Tom Matte', pos: ['RB'], team: 'Colts', decade: '1960s', rating: 79, stats: { YDS: 780, TD: 7, YPC: '4.1' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Peyton Manning', pos: ['QB'], team: 'Colts', decade: '2000s', rating: 97, stats: { YDS: 4557, TD: 49, 'CMP%': '65.0' }, badges: ['HOF', 'MVP'], synergies: ['Manning_Harrison', 'Manning_Wayne'] },
    { name: 'Marvin Harrison', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2000s', rating: 95, stats: { YDS: 1722, TD: 15, YPR: '14.8' }, badges: ['HOF'], synergies: ['Manning_Harrison'] },
    { name: 'Reggie Wayne', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2000s', rating: 89, stats: { YDS: 1510, TD: 10, YPR: '14.2' }, badges: ['HOF'], synergies: ['Manning_Wayne'] },
    { name: 'Edgerrin James', pos: ['RB'], team: 'Colts', decade: '2000s', rating: 90, stats: { YDS: 1709, TD: 13, YPC: '4.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Dwight Freeney', pos: ['EDGE'], team: 'Colts', decade: '2000s', rating: 91, stats: { SACKS: 13, FF: 9 }, badges: ['HOF'], synergies: [] },
    { name: 'Robert Mathis', pos: ['EDGE'], team: 'Colts', decade: '2000s', rating: 87, stats: { SACKS: 11.5, FF: 5 }, badges: [], synergies: [] },
    { name: 'Bob Sanders', pos: ['DB'], team: 'Colts', decade: '2000s', rating: 88, stats: { INT: 4, PD: 10 }, badges: ['DPOY'], synergies: [] },
    { name: 'Dallas Clark', pos: ['TE'], team: 'Colts', decade: '2000s', rating: 84, stats: { YDS: 1106, TD: 10, YPR: '12.4' }, badges: [], synergies: [] },

    // ============ GIANTS ============
    // 1980s
    { name: 'Lawrence Taylor', pos: ['EDGE'], team: 'Giants', decade: '1980s', rating: 99, stats: { SACKS: 15.5, FF: 4 }, badges: ['HOF', 'MVP', 'DPOY'], synergies: [] },
    { name: 'Phil Simms', pos: ['QB'], team: 'Giants', decade: '1980s', rating: 84, stats: { YDS: 3487, TD: 22, 'CMP%': '55.4' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Mark Bavaro', pos: ['TE'], team: 'Giants', decade: '1980s', rating: 85, stats: { YDS: 867, TD: 6, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Joe Morris', pos: ['RB'], team: 'Giants', decade: '1980s', rating: 83, stats: { YDS: 1516, TD: 21, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Harry Carson', pos: ['DB'], team: 'Giants', decade: '1980s', rating: 87, stats: { INT: 2, PD: 8 }, badges: ['HOF'], synergies: [] },
    { name: 'Leonard Marshall', pos: ['EDGE'], team: 'Giants', decade: '1980s', rating: 85, stats: { SACKS: 11.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Mark Collins', pos: ['DB'], team: 'Giants', decade: '1980s', rating: 80, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Carl Banks', pos: ['DB'], team: 'Giants', decade: '1980s', rating: 83, stats: { INT: 2, PD: 7 }, badges: [], synergies: [] },

    // 2000s
    { name: 'Michael Strahan', pos: ['EDGE'], team: 'Giants', decade: '2000s', rating: 94, stats: { SACKS: 14.5, FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Eli Manning', pos: ['QB'], team: 'Giants', decade: '2000s', rating: 83, stats: { YDS: 3762, TD: 24, 'CMP%': '57.8' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Tiki Barber', pos: ['RB'], team: 'Giants', decade: '2000s', rating: 87, stats: { YDS: 1860, TD: 11, YPC: '4.7' }, badges: [], synergies: [] },
    { name: 'Plaxico Burress', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2000s', rating: 83, stats: { YDS: 1214, TD: 12, YPR: '15.6' }, badges: [], synergies: [] },
    { name: 'Osi Umenyiora', pos: ['EDGE'], team: 'Giants', decade: '2000s', rating: 86, stats: { SACKS: 13, FF: 6 }, badges: [], synergies: [] },
    { name: 'Amani Toomer', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2000s', rating: 82, stats: { YDS: 1143, TD: 8, YPR: '14.2' }, badges: [], synergies: [] },
    { name: 'Antonio Pierce', pos: ['DB'], team: 'Giants', decade: '2000s', rating: 80, stats: { INT: 2, PD: 8 }, badges: [], synergies: [] },
    { name: 'Jeremy Shockey', pos: ['TE'], team: 'Giants', decade: '2000s', rating: 83, stats: { YDS: 894, TD: 7, YPR: '12.0' }, badges: [], synergies: [] },

    // 2010s
    { name: 'Odell Beckham Jr.', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2010s', rating: 89, stats: { YDS: 1450, TD: 13, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Saquon Barkley', pos: ['RB'], team: 'Giants', decade: '2010s', rating: 86, stats: { YDS: 1307, TD: 11, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Eli Manning', pos: ['QB'], team: 'Giants', decade: '2010s', rating: 79, stats: { YDS: 4432, TD: 30, 'CMP%': '61.8' }, badges: [], synergies: [] },
    { name: 'Jason Pierre-Paul', pos: ['EDGE'], team: 'Giants', decade: '2010s', rating: 85, stats: { SACKS: 12.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Landon Collins', pos: ['DB'], team: 'Giants', decade: '2010s', rating: 83, stats: { INT: 4, PD: 10 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Victor Cruz', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2010s', rating: 83, stats: { YDS: 1536, TD: 9, YPR: '13.9' }, badges: [], synergies: [] },

    // ============ RAMS ============
    // 1960s
    { name: 'Deacon Jones', pos: ['EDGE'], team: 'Rams', decade: '1960s', rating: 97, stats: { SACKS: '22*', FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Merlin Olsen', pos: ['EDGE'], team: 'Rams', decade: '1960s', rating: 92, stats: { SACKS: '10*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Dick Bass', pos: ['RB'], team: 'Rams', decade: '1960s', rating: 80, stats: { YDS: 1033, TD: 6, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Roman Gabriel', pos: ['QB'], team: 'Rams', decade: '1960s', rating: 84, stats: { YDS: 2779, TD: 24, 'CMP%': '53.5' }, badges: ['MVP'], synergies: [] },
    { name: 'Jack Snow', pos: ['WR1', 'WR2'], team: 'Rams', decade: '1960s', rating: 81, stats: { YDS: 1008, TD: 8, YPR: '16.8' }, badges: [], synergies: [] },
    { name: 'Eddie Meador', pos: ['DB'], team: 'Rams', decade: '1960s', rating: 84, stats: { INT: 8, PD: 12 }, badges: [], synergies: [] },

    // 1980s
    { name: 'Eric Dickerson', pos: ['RB'], team: 'Rams', decade: '1980s', rating: 96, stats: { YDS: 2105, TD: 14, YPC: '5.6' }, badges: ['HOF'], synergies: [] },
    { name: 'Jack Youngblood', pos: ['EDGE'], team: 'Rams', decade: '1980s', rating: 88, stats: { SACKS: 12, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Henry Ellard', pos: ['WR1', 'WR2'], team: 'Rams', decade: '1980s', rating: 84, stats: { YDS: 1414, TD: 7, YPR: '17.2' }, badges: [], synergies: [] },
    { name: 'Nolan Cromwell', pos: ['DB'], team: 'Rams', decade: '1980s', rating: 83, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Vince Ferragamo', pos: ['QB'], team: 'Rams', decade: '1980s', rating: 76, stats: { YDS: 2512, TD: 14, 'CMP%': '53.8' }, badges: [], synergies: [] },
    { name: 'Flipper Anderson', pos: ['WR1', 'WR2'], team: 'Rams', decade: '1980s', rating: 80, stats: { YDS: 1146, TD: 5, YPR: '19.1' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Kurt Warner', pos: ['QB'], team: 'Rams', decade: '2000s', rating: 91, stats: { YDS: 4353, TD: 36, 'CMP%': '65.1' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Marshall Faulk', pos: ['RB'], team: 'Rams', decade: '2000s', rating: 93, stats: { YDS: 1381, TD: 17, YPC: '4.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Isaac Bruce', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2000s', rating: 89, stats: { YDS: 1471, TD: 13, YPR: '15.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Torry Holt', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2000s', rating: 91, stats: { YDS: 1696, TD: 12, YPR: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Leonard Little', pos: ['EDGE'], team: 'Rams', decade: '2000s', rating: 83, stats: { SACKS: 10.5, FF: 4 }, badges: [], synergies: [] },
    { name: 'Aeneas Williams', pos: ['DB'], team: 'Rams', decade: '2000s', rating: 87, stats: { INT: 4, PD: 12 }, badges: ['HOF'], synergies: [] },

    // 2010s
    { name: 'Aaron Donald', pos: ['EDGE'], team: 'Rams', decade: '2010s', rating: 99, stats: { SACKS: 20.5, FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Todd Gurley', pos: ['RB'], team: 'Rams', decade: '2010s', rating: 88, stats: { YDS: 1305, TD: 19, YPC: '4.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jared Goff', pos: ['QB'], team: 'Rams', decade: '2010s', rating: 80, stats: { YDS: 4688, TD: 32, 'CMP%': '63.4' }, badges: [], synergies: [] },
    { name: 'Robert Woods', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2010s', rating: 82, stats: { YDS: 1134, TD: 6, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'Jalen Ramsey', pos: ['DB'], team: 'Rams', decade: '2010s', rating: 90, stats: { INT: 4, PD: 15 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Cooper Kupp', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2010s', rating: 90, stats: { YDS: 1947, TD: 16, YPR: '13.0' }, badges: ['All-Pro', 'SB MVP'], synergies: [] },

    // 2020s
    { name: 'Puka Nacua', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2020s', rating: 88, stats: { YDS: 1486, TD: 6, YPR: '13.2' }, badges: [], synergies: [] },
    { name: 'Cooper Kupp', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2020s', rating: 87, stats: { YDS: 1140, TD: 8, YPR: '12.5' }, badges: [], synergies: [] },
    { name: 'Matthew Stafford', pos: ['QB'], team: 'Rams', decade: '2020s', rating: 84, stats: { YDS: 3965, TD: 24, 'CMP%': '64.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Kyren Williams', pos: ['RB'], team: 'Rams', decade: '2020s', rating: 82, stats: { YDS: 1299, TD: 14, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Byron Young', pos: ['EDGE'], team: 'Rams', decade: '2020s', rating: 80, stats: { SACKS: 8, FF: 2 }, badges: [], synergies: [] },
    { name: 'Tre Tomlinson', pos: ['DB'], team: 'Rams', decade: '2020s', rating: 78, stats: { INT: 3, PD: 10 }, badges: [], synergies: [] },

    // ============ CHARGERS ============
    // 1960s
    { name: 'Lance Alworth', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1960s', rating: 92, stats: { YDS: 1602, TD: 13, YPR: '19.4' }, badges: ['HOF'], synergies: [] },
    { name: 'John Hadl', pos: ['QB'], team: 'Chargers', decade: '1960s', rating: 82, stats: { YDS: 3473, TD: 27, 'CMP%': '51.3' }, badges: [], synergies: [] },
    { name: 'Paul Lowe', pos: ['RB'], team: 'Chargers', decade: '1960s', rating: 83, stats: { YDS: 1121, TD: 7, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Earl Faison', pos: ['EDGE'], team: 'Chargers', decade: '1960s', rating: 85, stats: { SACKS: '11*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Charlie McNeil', pos: ['DB'], team: 'Chargers', decade: '1960s', rating: 82, stats: { INT: 9, PD: 10 }, badges: [], synergies: [] },
    { name: 'Keith Lincoln', pos: ['RB'], team: 'Chargers', decade: '1960s', rating: 82, stats: { YDS: 896, TD: 6, YPC: '4.6' }, badges: [], synergies: [] },

    // 1980s
    { name: 'Dan Fouts', pos: ['QB'], team: 'Chargers', decade: '1980s', rating: 89, stats: { YDS: 4802, TD: 33, 'CMP%': '58.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Kellen Winslow', pos: ['TE'], team: 'Chargers', decade: '1980s', rating: 92, stats: { YDS: 1290, TD: 10, YPR: '13.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Charlie Joiner', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1980s', rating: 85, stats: { YDS: 1132, TD: 7, YPR: '15.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Wes Chandler', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1980s', rating: 84, stats: { YDS: 1032, TD: 9, YPR: '17.1' }, badges: [], synergies: [] },
    { name: 'Chuck Muncie', pos: ['RB'], team: 'Chargers', decade: '1980s', rating: 82, stats: { YDS: 1144, TD: 19, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Fred Dean', pos: ['EDGE'], team: 'Chargers', decade: '1980s', rating: 88, stats: { SACKS: 12, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Gill Byrd', pos: ['DB'], team: 'Chargers', decade: '1980s', rating: 82, stats: { INT: 6, PD: 12 }, badges: [], synergies: [] },

    // 2000s
    { name: 'LaDainian Tomlinson', pos: ['RB'], team: 'Chargers', decade: '2000s', rating: 96, stats: { YDS: 1815, TD: 28, YPC: '4.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Drew Brees', pos: ['QB'], team: 'Chargers', decade: '2000s', rating: 87, stats: { YDS: 3576, TD: 27, 'CMP%': '64.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Antonio Gates', pos: ['TE'], team: 'Chargers', decade: '2000s', rating: 92, stats: { YDS: 1101, TD: 13, YPR: '12.1' }, badges: [], synergies: [] },
    { name: 'Shawne Merriman', pos: ['EDGE'], team: 'Chargers', decade: '2000s', rating: 87, stats: { SACKS: 17, FF: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Philip Rivers', pos: ['QB'], team: 'Chargers', decade: '2000s', rating: 86, stats: { YDS: 4009, TD: 34, 'CMP%': '65.3' }, badges: [], synergies: [] },
    { name: 'Vincent Jackson', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '2000s', rating: 84, stats: { YDS: 1098, TD: 9, YPR: '16.8' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Justin Herbert', pos: ['QB'], team: 'Chargers', decade: '2020s', rating: 88, stats: { YDS: 4739, TD: 32, 'CMP%': '65.8' }, badges: [], synergies: [] },
    { name: 'Derwin James', pos: ['DB'], team: 'Chargers', decade: '2020s', rating: 89, stats: { INT: 4, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Khalil Mack', pos: ['EDGE'], team: 'Chargers', decade: '2020s', rating: 88, stats: { SACKS: 17, FF: 6 }, badges: [], synergies: [] },
    { name: 'Keenan Allen', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '2020s', rating: 86, stats: { YDS: 1243, TD: 7, YPR: '12.3' }, badges: [], synergies: [] },
    { name: 'Austin Ekeler', pos: ['RB'], team: 'Chargers', decade: '2020s', rating: 83, stats: { YDS: 915, TD: 13, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Quentin Johnston', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '2020s', rating: 79, stats: { YDS: 850, TD: 5, YPR: '14.5' }, badges: [], synergies: [] },

    // ============ LIONS ============
    // 1990s
    { name: 'Barry Sanders', pos: ['RB'], team: 'Lions', decade: '1990s', rating: 98, stats: { YDS: 2053, TD: 11, YPC: '6.1' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Herman Moore', pos: ['WR1', 'WR2'], team: 'Lions', decade: '1990s', rating: 87, stats: { YDS: 1686, TD: 14, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Brett Perriman', pos: ['WR1', 'WR2'], team: 'Lions', decade: '1990s', rating: 82, stats: { YDS: 1488, TD: 9, YPR: '15.4' }, badges: [], synergies: [] },
    { name: 'Scott Mitchell', pos: ['QB'], team: 'Lions', decade: '1990s', rating: 77, stats: { YDS: 3167, TD: 20, 'CMP%': '58.0' }, badges: [], synergies: [] },
    { name: 'Robert Porcher', pos: ['EDGE'], team: 'Lions', decade: '1990s', rating: 84, stats: { SACKS: 11.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Bennie Blades', pos: ['DB'], team: 'Lions', decade: '1990s', rating: 80, stats: { INT: 4, PD: 9 }, badges: [], synergies: [] },
    { name: 'Lomas Brown', pos: ['OL'], team: 'Lions', decade: '1990s', rating: 85, stats: { 'AP': 2, 'PB': 7 }, badges: [], synergies: [] },

    // 2010s
    { name: 'Calvin Johnson', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2010s', rating: 95, stats: { YDS: 1964, TD: 5, YPR: '16.6' }, badges: ['HOF'], synergies: [] },
    { name: 'Matthew Stafford', pos: ['QB'], team: 'Lions', decade: '2010s', rating: 84, stats: { YDS: 5038, TD: 41, 'CMP%': '62.4' }, badges: [], synergies: [] },
    { name: 'Darius Slay', pos: ['DB'], team: 'Lions', decade: '2010s', rating: 88, stats: { INT: 8, PD: 18 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Ezekiel Ansah', pos: ['EDGE'], team: 'Lions', decade: '2010s', rating: 82, stats: { SACKS: 14.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Golden Tate', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2010s', rating: 83, stats: { YDS: 1331, TD: 5, YPR: '11.8' }, badges: [], synergies: [] },
    { name: 'Marvin Jones', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2010s', rating: 81, stats: { YDS: 1101, TD: 9, YPR: '14.9' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Amon-Ra St. Brown', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2020s', rating: 89, stats: { YDS: 1515, TD: 10, YPR: '12.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jared Goff', pos: ['QB'], team: 'Lions', decade: '2020s', rating: 85, stats: { YDS: 4575, TD: 30, 'CMP%': '67.3' }, badges: [], synergies: [] },
    { name: 'Jahmyr Gibbs', pos: ['RB'], team: 'Lions', decade: '2020s', rating: 87, stats: { YDS: 1412, TD: 16, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Sam LaPorta', pos: ['TE'], team: 'Lions', decade: '2020s', rating: 85, stats: { YDS: 889, TD: 10, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Aidan Hutchinson', pos: ['EDGE'], team: 'Lions', decade: '2020s', rating: 89, stats: { SACKS: 11.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Kerby Joseph', pos: ['DB'], team: 'Lions', decade: '2020s', rating: 85, stats: { INT: 7, PD: 12 }, badges: ['All-Pro'], synergies: [] },

    // ============ RAIDERS ============
    // 1970s
    { name: 'Ken Stabler', pos: ['QB'], team: 'Raiders', decade: '1970s', rating: 86, stats: { YDS: 2737, TD: 26, 'CMP%': '59.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Willie Brown', pos: ['DB'], team: 'Raiders', decade: '1970s', rating: 89, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Cliff Branch', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1970s', rating: 86, stats: { YDS: 1036, TD: 9, YPR: '18.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Dave Casper', pos: ['TE'], team: 'Raiders', decade: '1970s', rating: 88, stats: { YDS: 852, TD: 9, YPR: '15.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Mark van Eeghen', pos: ['RB'], team: 'Raiders', decade: '1970s', rating: 80, stats: { YDS: 1080, TD: 7, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Jack Tatum', pos: ['DB'], team: 'Raiders', decade: '1970s', rating: 88, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },
    { name: 'Ted Hendricks', pos: ['EDGE'], team: 'Raiders', decade: '1970s', rating: 89, stats: { SACKS: '10*', FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Fred Biletnikoff', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1970s', rating: 87, stats: { YDS: 929, TD: 6, YPR: '14.0' }, badges: ['HOF', 'SB MVP'], synergies: [] },

    // 1980s
    { name: 'Marcus Allen', pos: ['RB'], team: 'Raiders', decade: '1980s', rating: 90, stats: { YDS: 1759, TD: 11, YPC: '4.6' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Howie Long', pos: ['EDGE'], team: 'Raiders', decade: '1980s', rating: 90, stats: { SACKS: 13, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Mike Haynes', pos: ['DB'], team: 'Raiders', decade: '1980s', rating: 92, stats: { INT: 6, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Todd Christensen', pos: ['TE'], team: 'Raiders', decade: '1980s', rating: 85, stats: { YDS: 1153, TD: 12, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Jim Plunkett', pos: ['QB'], team: 'Raiders', decade: '1980s', rating: 79, stats: { YDS: 2685, TD: 16, 'CMP%': '53.2' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Lester Hayes', pos: ['DB'], team: 'Raiders', decade: '1980s', rating: 88, stats: { INT: 5, PD: 14 }, badges: [], synergies: [] },

    // 2010s
    { name: 'Khalil Mack', pos: ['EDGE'], team: 'Raiders', decade: '2010s', rating: 92, stats: { SACKS: 15, FF: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Amari Cooper', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '2010s', rating: 85, stats: { YDS: 1153, TD: 7, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Derek Carr', pos: ['QB'], team: 'Raiders', decade: '2010s', rating: 81, stats: { YDS: 3937, TD: 28, 'CMP%': '63.5' }, badges: [], synergies: [] },
    { name: 'Latavius Murray', pos: ['RB'], team: 'Raiders', decade: '2010s', rating: 78, stats: { YDS: 1066, TD: 6, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'Charles Woodson', pos: ['DB'], team: 'Raiders', decade: '2010s', rating: 86, stats: { INT: 5, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Michael Crabtree', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '2010s', rating: 80, stats: { YDS: 922, TD: 8, YPR: '12.0' }, badges: [], synergies: [] },

    // 2020s
    { name: 'Maxx Crosby', pos: ['EDGE'], team: 'Raiders', decade: '2020s', rating: 91, stats: { SACKS: 13, FF: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Davante Adams', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '2020s', rating: 89, stats: { YDS: 1516, TD: 14, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Brock Bowers', pos: ['TE'], team: 'Raiders', decade: '2020s', rating: 88, stats: { YDS: 1194, TD: 5, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Josh Jacobs', pos: ['RB'], team: 'Raiders', decade: '2020s', rating: 82, stats: { YDS: 1653, TD: 12, YPC: '4.5' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Nate Hobbs', pos: ['DB'], team: 'Raiders', decade: '2020s', rating: 79, stats: { INT: 2, PD: 9 }, badges: [], synergies: [] },

    // ============ BRONCOS ============
    // 1980s
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1980s', rating: 92, stats: { YDS: 3485, TD: 22, 'CMP%': '56.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Sammy Winder', pos: ['RB'], team: 'Broncos', decade: '1980s', rating: 79, stats: { YDS: 1048, TD: 9, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Vance Johnson', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '1980s', rating: 80, stats: { YDS: 1095, TD: 7, YPR: '14.2' }, badges: [], synergies: [] },
    { name: 'Karl Mecklenburg', pos: ['EDGE'], team: 'Broncos', decade: '1980s', rating: 86, stats: { SACKS: 12, FF: 3 }, badges: [], synergies: [] },
    { name: 'Dennis Smith', pos: ['DB'], team: 'Broncos', decade: '1980s', rating: 83, stats: { INT: 5, PD: 11 }, badges: [], synergies: [] },
    { name: 'Steve Watson', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '1980s', rating: 79, stats: { YDS: 901, TD: 5, YPR: '15.5' }, badges: [], synergies: [] },

    // 1990s
    { name: 'Terrell Davis', pos: ['RB'], team: 'Broncos', decade: '1990s', rating: 93, stats: { YDS: 2008, TD: 21, YPC: '5.1' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1990s', rating: 91, stats: { YDS: 3768, TD: 26, 'CMP%': '58.6' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Shannon Sharpe', pos: ['TE'], team: 'Broncos', decade: '1990s', rating: 91, stats: { YDS: 1107, TD: 10, YPR: '12.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Rod Smith', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '1990s', rating: 86, stats: { YDS: 1222, TD: 8, YPR: '14.6' }, badges: [], synergies: [] },
    { name: 'Steve Atwater', pos: ['DB'], team: 'Broncos', decade: '1990s', rating: 89, stats: { INT: 4, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Neil Smith', pos: ['EDGE'], team: 'Broncos', decade: '1990s', rating: 86, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: 'Ed McCaffrey', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '1990s', rating: 83, stats: { YDS: 1317, TD: 9, YPR: '14.3' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Champ Bailey', pos: ['DB'], team: 'Broncos', decade: '2000s', rating: 94, stats: { INT: 10, PD: 18 }, badges: ['HOF'], synergies: [] },
    { name: 'Jake Plummer', pos: ['QB'], team: 'Broncos', decade: '2000s', rating: 80, stats: { YDS: 3366, TD: 18, 'CMP%': '60.0' }, badges: [], synergies: [] },
    { name: 'Rod Smith', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '2000s', rating: 84, stats: { YDS: 1144, TD: 7, YPR: '14.0' }, badges: [], synergies: [] },
    { name: 'Clinton Portis', pos: ['RB'], team: 'Broncos', decade: '2000s', rating: 84, stats: { YDS: 1591, TD: 15, YPC: '5.5' }, badges: [], synergies: [] },
    { name: 'Trevor Pryce', pos: ['EDGE'], team: 'Broncos', decade: '2000s', rating: 84, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'Shannon Sharpe', pos: ['TE'], team: 'Broncos', decade: '2000s', rating: 86, stats: { YDS: 768, TD: 6, YPR: '11.5' }, badges: ['HOF'], synergies: [] },

    // 2010s
    { name: 'Von Miller', pos: ['EDGE'], team: 'Broncos', decade: '2010s', rating: 93, stats: { SACKS: 18.5, FF: 4 }, badges: ['SB MVP'], synergies: [] },
    { name: 'Peyton Manning', pos: ['QB'], team: 'Broncos', decade: '2010s', rating: 90, stats: { YDS: 5477, TD: 55, 'CMP%': '68.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Demaryius Thomas', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '2010s', rating: 86, stats: { YDS: 1619, TD: 14, YPR: '13.7' }, badges: [], synergies: [] },
    { name: 'C.J. Anderson', pos: ['RB'], team: 'Broncos', decade: '2010s', rating: 79, stats: { YDS: 1007, TD: 7, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Chris Harris Jr.', pos: ['DB'], team: 'Broncos', decade: '2010s', rating: 88, stats: { INT: 4, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Emmanuel Sanders', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '2010s', rating: 84, stats: { YDS: 1404, TD: 9, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Aqib Talib', pos: ['DB'], team: 'Broncos', decade: '2010s', rating: 86, stats: { INT: 5, PD: 13 }, badges: ['All-Pro'], synergies: [] },

    // ============ SAINTS ============
    // 2000s
    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2000s', rating: 93, stats: { YDS: 5069, TD: 34, 'CMP%': '70.6' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Reggie Bush', pos: ['RB'], team: 'Saints', decade: '2000s', rating: 80, stats: { YDS: 793, TD: 6, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Marques Colston', pos: ['WR1', 'WR2'], team: 'Saints', decade: '2000s', rating: 84, stats: { YDS: 1202, TD: 11, YPR: '14.3' }, badges: [], synergies: [] },
    { name: 'Will Smith', pos: ['EDGE'], team: 'Saints', decade: '2000s', rating: 84, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'Darren Sharper', pos: ['DB'], team: 'Saints', decade: '2000s', rating: 85, stats: { INT: 9, PD: 13 }, badges: [], synergies: [] },
    { name: 'Jeremy Shockey', pos: ['TE'], team: 'Saints', decade: '2000s', rating: 81, stats: { YDS: 544, TD: 5, YPR: '11.0' }, badges: [], synergies: [] },
    { name: 'Deuce McAllister', pos: ['RB'], team: 'Saints', decade: '2000s', rating: 83, stats: { YDS: 1388, TD: 13, YPC: '4.3' }, badges: [], synergies: [] },

    // 2010s
    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2010s', rating: 94, stats: { YDS: 5476, TD: 46, 'CMP%': '71.2' }, badges: ['HOF'], synergies: ['Brees_Thomas'] },
    { name: 'Michael Thomas', pos: ['WR1', 'WR2'], team: 'Saints', decade: '2010s', rating: 90, stats: { YDS: 1725, TD: 9, YPR: '12.5' }, badges: ['All-Pro'], synergies: ['Brees_Thomas'] },
    { name: 'Alvin Kamara', pos: ['RB'], team: 'Saints', decade: '2010s', rating: 87, stats: { YDS: 883, TD: 18, YPC: '4.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Cameron Jordan', pos: ['EDGE'], team: 'Saints', decade: '2010s', rating: 89, stats: { SACKS: 15.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Marshon Lattimore', pos: ['DB'], team: 'Saints', decade: '2010s', rating: 86, stats: { INT: 4, PD: 14 }, badges: [], synergies: [] },
    { name: 'Jimmy Graham', pos: ['TE'], team: 'Saints', decade: '2010s', rating: 88, stats: { YDS: 1310, TD: 16, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Mark Ingram', pos: ['RB'], team: 'Saints', decade: '2010s', rating: 82, stats: { YDS: 1124, TD: 12, YPC: '4.6' }, badges: [], synergies: [] },

    // ============ SEAHAWKS ============
    // 1980s
    { name: 'Steve Largent', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '1980s', rating: 89, stats: { YDS: 1287, TD: 12, YPR: '15.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Kenny Easley', pos: ['DB'], team: 'Seahawks', decade: '1980s', rating: 91, stats: { INT: 10, PD: 15 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Curt Warner', pos: ['RB'], team: 'Seahawks', decade: '1980s', rating: 84, stats: { YDS: 1449, TD: 13, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Jacob Green', pos: ['EDGE'], team: 'Seahawks', decade: '1980s', rating: 84, stats: { SACKS: 12, FF: 3 }, badges: [], synergies: [] },
    { name: 'Dave Krieg', pos: ['QB'], team: 'Seahawks', decade: '1980s', rating: 80, stats: { YDS: 3671, TD: 27, 'CMP%': '57.5' }, badges: [], synergies: [] },
    { name: 'Daryl Turner', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '1980s', rating: 78, stats: { YDS: 730, TD: 8, YPR: '17.4' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Shaun Alexander', pos: ['RB'], team: 'Seahawks', decade: '2000s', rating: 88, stats: { YDS: 1880, TD: 27, YPC: '4.3' }, badges: ['MVP'], synergies: [] },
    { name: 'Matt Hasselbeck', pos: ['QB'], team: 'Seahawks', decade: '2000s', rating: 82, stats: { YDS: 3459, TD: 24, 'CMP%': '60.5' }, badges: [], synergies: [] },
    { name: 'Lofa Tatupu', pos: ['DB'], team: 'Seahawks', decade: '2000s', rating: 82, stats: { INT: 3, PD: 9 }, badges: [], synergies: [] },
    { name: 'Marcus Trufant', pos: ['DB'], team: 'Seahawks', decade: '2000s', rating: 81, stats: { INT: 4, PD: 12 }, badges: [], synergies: [] },
    { name: 'Darrell Jackson', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2000s', rating: 80, stats: { YDS: 956, TD: 8, YPR: '13.4' }, badges: [], synergies: [] },

    // 2010s
    { name: 'Russell Wilson', pos: ['QB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { YDS: 3983, TD: 34, 'CMP%': '64.5' }, badges: [], synergies: [] },
    { name: 'Marshawn Lynch', pos: ['RB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { YDS: 1590, TD: 12, YPC: '4.6' }, badges: [], synergies: [] },
    { name: 'Richard Sherman', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 93, stats: { INT: 8, PD: 16 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Earl Thomas', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 92, stats: { INT: 5, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Bobby Wagner', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { INT: 3, PD: 9 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Doug Baldwin', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2010s', rating: 85, stats: { YDS: 1069, TD: 14, YPR: '13.4' }, badges: [], synergies: [] },
    { name: 'Michael Bennett', pos: ['EDGE'], team: 'Seahawks', decade: '2010s', rating: 86, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'Tyler Lockett', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2010s', rating: 83, stats: { YDS: 1175, TD: 10, YPR: '14.8' }, badges: [], synergies: [] },

    // 2020s
    { name: 'DK Metcalf', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2020s', rating: 86, stats: { YDS: 1170, TD: 8, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Devon Witherspoon', pos: ['DB'], team: 'Seahawks', decade: '2020s', rating: 89, stats: { INT: 4, PD: 15 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Kenneth Walker III', pos: ['RB'], team: 'Seahawks', decade: '2020s', rating: 83, stats: { YDS: 1050, TD: 9, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Geno Smith', pos: ['QB'], team: 'Seahawks', decade: '2020s', rating: 81, stats: { YDS: 4282, TD: 30, 'CMP%': '69.8' }, badges: [], synergies: [] },
    { name: 'Jaxon Smith-Njigba', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '2020s', rating: 82, stats: { YDS: 1130, TD: 6, YPR: '13.2' }, badges: [], synergies: [] },

    // ============ JETS ============
    // 1960s
    { name: 'Joe Namath', pos: ['QB'], team: 'Jets', decade: '1960s', rating: 85, stats: { YDS: 4007, TD: 26, 'CMP%': '50.1' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Don Maynard', pos: ['WR1', 'WR2'], team: 'Jets', decade: '1960s', rating: 88, stats: { YDS: 1434, TD: 10, YPR: '18.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Matt Snell', pos: ['RB'], team: 'Jets', decade: '1960s', rating: 79, stats: { YDS: 895, TD: 5, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Gerry Philbin', pos: ['EDGE'], team: 'Jets', decade: '1960s', rating: 82, stats: { SACKS: '10*', FF: 2 }, badges: [], synergies: [] },
    { name: 'Johnny Sample', pos: ['DB'], team: 'Jets', decade: '1960s', rating: 79, stats: { INT: 5, PD: 9 }, badges: [], synergies: [] },
    { name: 'George Sauer', pos: ['WR1', 'WR2'], team: 'Jets', decade: '1960s', rating: 83, stats: { YDS: 1141, TD: 6, YPR: '15.3' }, badges: [], synergies: [] },
    { name: 'Emerson Boozer', pos: ['RB'], team: 'Jets', decade: '1960s', rating: 80, stats: { YDS: 831, TD: 10, YPC: '4.2' }, badges: [], synergies: [] },

    // 2000s
    { name: 'Darrelle Revis', pos: ['DB'], team: 'Jets', decade: '2000s', rating: 93, stats: { INT: 6, PD: 21 }, badges: ['HOF'], synergies: [] },
    { name: 'Curtis Martin', pos: ['RB'], team: 'Jets', decade: '2000s', rating: 87, stats: { YDS: 1697, TD: 12, YPC: '3.9' }, badges: ['HOF'], synergies: [] },
    { name: 'Chad Pennington', pos: ['QB'], team: 'Jets', decade: '2000s', rating: 79, stats: { YDS: 3120, TD: 22, 'CMP%': '65.4' }, badges: [], synergies: [] },
    { name: 'Laveranues Coles', pos: ['WR1', 'WR2'], team: 'Jets', decade: '2000s', rating: 80, stats: { YDS: 1098, TD: 7, YPR: '13.5' }, badges: [], synergies: [] },
    { name: 'John Abraham', pos: ['EDGE'], team: 'Jets', decade: '2000s', rating: 85, stats: { SACKS: 11, FF: 4 }, badges: [], synergies: [] },
    { name: 'Shaun Ellis', pos: ['EDGE'], team: 'Jets', decade: '2000s', rating: 81, stats: { SACKS: 8.5, FF: 3 }, badges: [], synergies: [] },

    // 2020s
    { name: 'Sauce Gardner', pos: ['DB'], team: 'Jets', decade: '2020s', rating: 94, stats: { INT: 5, PD: 20 }, badges: ['DPOY'], synergies: [] },
    { name: 'Breece Hall', pos: ['RB'], team: 'Jets', decade: '2020s', rating: 85, stats: { YDS: 1226, TD: 10, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Garrett Wilson', pos: ['WR1', 'WR2'], team: 'Jets', decade: '2020s', rating: 84, stats: { YDS: 1042, TD: 6, YPR: '12.0' }, badges: [], synergies: [] },
    { name: 'Jermaine Johnson', pos: ['EDGE'], team: 'Jets', decade: '2020s', rating: 81, stats: { SACKS: 8, FF: 3 }, badges: [], synergies: [] },
    { name: 'Quinnen Williams', pos: ['EDGE'], team: 'Jets', decade: '2020s', rating: 87, stats: { SACKS: 12, FF: 2 }, badges: [], synergies: [] },
    { name: 'Aaron Rodgers', pos: ['QB'], team: 'Jets', decade: '2020s', rating: 82, stats: { YDS: 3500, TD: 24, 'CMP%': '63.0' }, badges: ['HOF'], synergies: [] },

    // ============ TEXANS ============
    // 2010s
    { name: 'J.J. Watt', pos: ['EDGE'], team: 'Texans', decade: '2010s', rating: 97, stats: { SACKS: 20.5, FF: 5 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'DeAndre Hopkins', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2010s', rating: 91, stats: { YDS: 1572, TD: 11, YPR: '14.2' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Arian Foster', pos: ['RB'], team: 'Texans', decade: '2010s', rating: 86, stats: { YDS: 1424, TD: 15, YPC: '4.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Deshaun Watson', pos: ['QB'], team: 'Texans', decade: '2010s', rating: 84, stats: { YDS: 4165, TD: 33, 'CMP%': '67.3' }, badges: [], synergies: [] },
    { name: 'Andre Johnson', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2010s', rating: 88, stats: { YDS: 1598, TD: 8, YPR: '14.6' }, badges: [], synergies: [] },
    { name: 'Whitney Mercilus', pos: ['EDGE'], team: 'Texans', decade: '2010s', rating: 80, stats: { SACKS: 8, FF: 3 }, badges: [], synergies: [] },
    { name: 'Johnathan Joseph', pos: ['DB'], team: 'Texans', decade: '2010s', rating: 82, stats: { INT: 4, PD: 13 }, badges: [], synergies: [] },

    // 2020s
    { name: 'C.J. Stroud', pos: ['QB'], team: 'Texans', decade: '2020s', rating: 86, stats: { YDS: 4108, TD: 23, 'CMP%': '63.9' }, badges: [], synergies: [] },
    { name: 'Nico Collins', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2020s', rating: 87, stats: { YDS: 1297, TD: 8, YPR: '16.0' }, badges: [], synergies: [] },
    { name: 'Will Anderson Jr.', pos: ['EDGE'], team: 'Texans', decade: '2020s', rating: 85, stats: { SACKS: 10, FF: 3 }, badges: [], synergies: [] },
    { name: 'Tank Dell', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2020s', rating: 82, stats: { YDS: 965, TD: 7, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Joe Mixon', pos: ['RB'], team: 'Texans', decade: '2020s', rating: 82, stats: { YDS: 1119, TD: 9, YPC: '4.4' }, badges: [], synergies: [] },
    { name: 'Derek Stingley Jr.', pos: ['DB'], team: 'Texans', decade: '2020s', rating: 84, stats: { INT: 4, PD: 13 }, badges: [], synergies: [] },

    // ============ FALCONS ============
    // 2010s
    { name: 'Matt Ryan', pos: ['QB'], team: 'Falcons', decade: '2010s', rating: 87, stats: { YDS: 4944, TD: 38, 'CMP%': '69.9' }, badges: ['MVP'], synergies: ['Ryan_Julio'] },
    { name: 'Julio Jones', pos: ['WR1', 'WR2'], team: 'Falcons', decade: '2010s', rating: 93, stats: { YDS: 1871, TD: 8, YPR: '15.2' }, badges: ['All-Pro'], synergies: ['Ryan_Julio'] },
    { name: 'Devonta Freeman', pos: ['RB'], team: 'Falcons', decade: '2010s', rating: 82, stats: { YDS: 1056, TD: 11, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Grady Jarrett', pos: ['EDGE'], team: 'Falcons', decade: '2010s', rating: 85, stats: { SACKS: 7.5, FF: 2 }, badges: [], synergies: [] },
    { name: 'Desmond Trufant', pos: ['DB'], team: 'Falcons', decade: '2010s', rating: 83, stats: { INT: 4, PD: 13 }, badges: [], synergies: [] },
    { name: 'Calvin Ridley', pos: ['WR1', 'WR2'], team: 'Falcons', decade: '2010s', rating: 83, stats: { YDS: 1374, TD: 9, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Austin Hooper', pos: ['TE'], team: 'Falcons', decade: '2010s', rating: 80, stats: { YDS: 787, TD: 6, YPR: '11.5' }, badges: [], synergies: [] },

    // ============ CARDINALS ============
    // 2000s
    { name: 'Larry Fitzgerald', pos: ['WR1', 'WR2'], team: 'Cardinals', decade: '2000s', rating: 91, stats: { YDS: 1431, TD: 12, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Kurt Warner', pos: ['QB'], team: 'Cardinals', decade: '2000s', rating: 84, stats: { YDS: 3753, TD: 26, 'CMP%': '65.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Edgerrin James', pos: ['RB'], team: 'Cardinals', decade: '2000s', rating: 83, stats: { YDS: 1159, TD: 6, YPC: '3.9' }, badges: ['HOF'], synergies: [] },
    { name: 'Anquan Boldin', pos: ['WR1', 'WR2'], team: 'Cardinals', decade: '2000s', rating: 85, stats: { YDS: 1402, TD: 10, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Adrian Wilson', pos: ['DB'], team: 'Cardinals', decade: '2000s', rating: 84, stats: { INT: 5, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Bertrand Berry', pos: ['EDGE'], team: 'Cardinals', decade: '2000s', rating: 81, stats: { SACKS: 9.5, FF: 3 }, badges: [], synergies: [] },

    // 2020s
    { name: 'Kyler Murray', pos: ['QB'], team: 'Cardinals', decade: '2020s', rating: 82, stats: { YDS: 3502, TD: 21, 'CMP%': '66.0' }, badges: [], synergies: [] },
    { name: 'Trey McBride', pos: ['TE'], team: 'Cardinals', decade: '2020s', rating: 86, stats: { YDS: 1146, TD: 4, YPR: '11.7' }, badges: [], synergies: [] },
    { name: 'James Conner', pos: ['RB'], team: 'Cardinals', decade: '2020s', rating: 82, stats: { YDS: 1049, TD: 10, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'Marvin Harrison Jr.', pos: ['WR1', 'WR2'], team: 'Cardinals', decade: '2020s', rating: 84, stats: { YDS: 1100, TD: 8, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Budda Baker', pos: ['DB'], team: 'Cardinals', decade: '2020s', rating: 86, stats: { INT: 2, PD: 9 }, badges: ['All-Pro'], synergies: [] },

    // ============ BUCCANEERS ============
    // 2000s
    { name: 'Warren Sapp', pos: ['EDGE'], team: 'Buccaneers', decade: '2000s', rating: 93, stats: { SACKS: 12, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Derrick Brooks', pos: ['DB'], team: 'Buccaneers', decade: '2000s', rating: 94, stats: { INT: 5, PD: 13 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Ronde Barber', pos: ['DB'], team: 'Buccaneers', decade: '2000s', rating: 87, stats: { INT: 7, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'John Lynch', pos: ['DB'], team: 'Buccaneers', decade: '2000s', rating: 88, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
    { name: 'Brad Johnson', pos: ['QB'], team: 'Buccaneers', decade: '2000s', rating: 79, stats: { YDS: 3406, TD: 22, 'CMP%': '62.3' }, badges: [], synergies: [] },
    { name: 'Mike Alstott', pos: ['RB'], team: 'Buccaneers', decade: '2000s', rating: 82, stats: { YDS: 627, TD: 10, YPC: '3.7' }, badges: [], synergies: [] },
    { name: 'Keyshawn Johnson', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '2000s', rating: 82, stats: { YDS: 1088, TD: 8, YPR: '13.5' }, badges: [], synergies: [] },
    { name: 'Simeon Rice', pos: ['EDGE'], team: 'Buccaneers', decade: '2000s', rating: 87, stats: { SACKS: 14, FF: 4 }, badges: [], synergies: [] },

    // 2010s
    { name: 'Mike Evans', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '2010s', rating: 88, stats: { YDS: 1524, TD: 12, YPR: '15.0' }, badges: [], synergies: [] },
    { name: 'Lavonte David', pos: ['DB'], team: 'Buccaneers', decade: '2010s', rating: 87, stats: { INT: 3, PD: 10 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Gerald McCoy', pos: ['EDGE'], team: 'Buccaneers', decade: '2010s', rating: 85, stats: { SACKS: 9.5, FF: 2 }, badges: [], synergies: [] },
    { name: 'Jameis Winston', pos: ['QB'], team: 'Buccaneers', decade: '2010s', rating: 78, stats: { YDS: 5109, TD: 33, 'CMP%': '61.0' }, badges: [], synergies: [] },
    { name: 'Chris Godwin', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '2010s', rating: 85, stats: { YDS: 1333, TD: 9, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Shaquil Barrett', pos: ['EDGE'], team: 'Buccaneers', decade: '2010s', rating: 86, stats: { SACKS: 14, FF: 3 }, badges: [], synergies: [] },

    // 2020s
    { name: 'Tom Brady', pos: ['QB'], team: 'Buccaneers', decade: '2020s', rating: 91, stats: { YDS: 5316, TD: 43, 'CMP%': '67.5' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Mike Evans', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '2020s', rating: 89, stats: { YDS: 1255, TD: 11, YPR: '14.5' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Chris Godwin', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '2020s', rating: 86, stats: { YDS: 1140, TD: 8, YPR: '13.2' }, badges: [], synergies: [] },
    { name: 'Vita Vea', pos: ['EDGE'], team: 'Buccaneers', decade: '2020s', rating: 84, stats: { SACKS: 6, FF: 2 }, badges: [], synergies: [] },
    { name: 'Antoine Winfield Jr.', pos: ['DB'], team: 'Buccaneers', decade: '2020s', rating: 89, stats: { INT: 4, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Leonard Fournette', pos: ['RB'], team: 'Buccaneers', decade: '2020s', rating: 80, stats: { YDS: 812, TD: 8, YPC: '4.0' }, badges: [], synergies: [] },

    // ============ PANTHERS ============
    // 2010s
    { name: 'Cam Newton', pos: ['QB'], team: 'Panthers', decade: '2010s', rating: 88, stats: { YDS: 3837, TD: 35, 'CMP%': '59.8' }, badges: ['MVP'], synergies: [] },
    { name: 'Luke Kuechly', pos: ['DB'], team: 'Panthers', decade: '2010s', rating: 93, stats: { INT: 4, PD: 12 }, badges: ['DPOY'], synergies: [] },
    { name: 'Christian McCaffrey', pos: ['RB'], team: 'Panthers', decade: '2010s', rating: 90, stats: { YDS: 1387, TD: 19, YPC: '4.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Greg Olsen', pos: ['TE'], team: 'Panthers', decade: '2010s', rating: 84, stats: { YDS: 1104, TD: 7, YPR: '13.0' }, badges: [], synergies: [] },
    { name: 'Julius Peppers', pos: ['EDGE'], team: 'Panthers', decade: '2010s', rating: 85, stats: { SACKS: 10, FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Steve Smith', pos: ['WR1', 'WR2'], team: 'Panthers', decade: '2010s', rating: 85, stats: { YDS: 1174, TD: 7, YPR: '14.2' }, badges: [], synergies: [] },
    { name: 'Thomas Davis', pos: ['DB'], team: 'Panthers', decade: '2010s', rating: 82, stats: { INT: 2, PD: 8 }, badges: [], synergies: [] },

    // ============ TITANS ============
    // 1990s/2000s
    { name: 'Steve McNair', pos: ['QB'], team: 'Titans', decade: '2000s', rating: 88, stats: { YDS: 3228, TD: 21, 'CMP%': '60.1' }, badges: ['MVP'], synergies: [] },
    { name: 'Eddie George', pos: ['RB'], team: 'Titans', decade: '2000s', rating: 86, stats: { YDS: 1509, TD: 14, YPC: '3.7' }, badges: [], synergies: [] },
    { name: 'Jevon Kearse', pos: ['EDGE'], team: 'Titans', decade: '2000s', rating: 87, stats: { SACKS: 14.5, FF: 7 }, badges: [], synergies: [] },
    { name: 'Derrick Mason', pos: ['WR1', 'WR2'], team: 'Titans', decade: '2000s', rating: 83, stats: { YDS: 1168, TD: 5, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Frank Wycheck', pos: ['TE'], team: 'Titans', decade: '2000s', rating: 80, stats: { YDS: 622, TD: 4, YPR: '10.5' }, badges: [], synergies: [] },
    { name: 'Samari Rolle', pos: ['DB'], team: 'Titans', decade: '2000s', rating: 82, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },

    // ============ COMMANDERS ============
    // 1980s
    { name: 'Joe Theismann', pos: ['QB'], team: 'Commanders', decade: '1980s', rating: 84, stats: { YDS: 3714, TD: 29, 'CMP%': '60.1' }, badges: ['MVP'], synergies: [] },
    { name: 'John Riggins', pos: ['RB'], team: 'Commanders', decade: '1980s', rating: 87, stats: { YDS: 1347, TD: 24, YPC: '3.9' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Art Monk', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1980s', rating: 86, stats: { YDS: 1372, TD: 8, YPR: '14.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Dexter Manley', pos: ['EDGE'], team: 'Commanders', decade: '1980s', rating: 86, stats: { SACKS: 14, FF: 3 }, badges: [], synergies: [] },
    { name: 'Darrell Green', pos: ['DB'], team: 'Commanders', decade: '1980s', rating: 90, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Gary Clark', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1980s', rating: 85, stats: { YDS: 1229, TD: 7, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Don Warren', pos: ['TE'], team: 'Commanders', decade: '1980s', rating: 78, stats: { YDS: 420, TD: 3, YPR: '10.5' }, badges: [], synergies: [] },
    { name: 'Charles Mann', pos: ['EDGE'], team: 'Commanders', decade: '1980s', rating: 85, stats: { SACKS: 11.5, FF: 3 }, badges: [], synergies: [] },

    // 1990s
    { name: 'Mark Rypien', pos: ['QB'], team: 'Commanders', decade: '1990s', rating: 82, stats: { YDS: 3564, TD: 28, 'CMP%': '59.1' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Earnest Byner', pos: ['RB'], team: 'Commanders', decade: '1990s', rating: 81, stats: { YDS: 1048, TD: 6, YPC: '4.0' }, badges: [], synergies: [] },
    { name: 'Art Monk', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1990s', rating: 84, stats: { YDS: 1049, TD: 6, YPR: '13.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Darrell Green', pos: ['DB'], team: 'Commanders', decade: '1990s', rating: 88, stats: { INT: 5, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Charles Mann', pos: ['EDGE'], team: 'Commanders', decade: '1990s', rating: 83, stats: { SACKS: 9, FF: 2 }, badges: [], synergies: [] },
    { name: 'Gary Clark', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1990s', rating: 83, stats: { YDS: 1112, TD: 6, YPR: '14.2' }, badges: [], synergies: [] },

    // ============ JAGUARS ============
    // 1990s
    { name: 'Mark Brunell', pos: ['QB'], team: 'Jaguars', decade: '1990s', rating: 82, stats: { YDS: 3281, TD: 20, 'CMP%': '59.5' }, badges: [], synergies: [] },
    { name: 'Fred Taylor', pos: ['RB'], team: 'Jaguars', decade: '1990s', rating: 86, stats: { YDS: 1399, TD: 14, YPC: '4.8' }, badges: [], synergies: [] },
    { name: 'Jimmy Smith', pos: ['WR1', 'WR2'], team: 'Jaguars', decade: '1990s', rating: 85, stats: { YDS: 1244, TD: 8, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Keenan McCardell', pos: ['WR1', 'WR2'], team: 'Jaguars', decade: '1990s', rating: 83, stats: { YDS: 1164, TD: 6, YPR: '13.8' }, badges: [], synergies: [] },
    { name: 'Tony Boselli', pos: ['OL'], team: 'Jaguars', decade: '1990s', rating: 93, stats: { 'AP': 3, 'PB': 5 }, badges: ['HOF'], synergies: [] },
    { name: 'Kevin Hardy', pos: ['EDGE'], team: 'Jaguars', decade: '1990s', rating: 80, stats: { SACKS: 7, FF: 2 }, badges: [], synergies: [] },
    { name: 'Aaron Beasley', pos: ['DB'], team: 'Jaguars', decade: '1990s', rating: 79, stats: { INT: 4, PD: 10 }, badges: [], synergies: [] },

    // ============ OFFENSIVE LINEMEN ============
    // 1960s
    { name: 'Jim Parker', pos: ['OL'], team: 'Colts', decade: '1960s', rating: 94, stats: { 'AP': 8, 'PB': 8 }, badges: ['HOF'], synergies: [] },
    { name: 'Jim Otto', pos: ['OL'], team: 'Raiders', decade: '1960s', rating: 91, stats: { 'AP': 6, 'PB': 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Bob Brown', pos: ['OL'], team: 'Eagles', decade: '1960s', rating: 89, stats: { 'AP': 5, 'PB': 6 }, badges: ['HOF'], synergies: [] },
    { name: 'Roosevelt Brown', pos: ['OL'], team: 'Giants', decade: '1960s', rating: 90, stats: { 'AP': 6, 'PB': 9 }, badges: ['HOF'], synergies: [] },
    { name: 'Ron Mix', pos: ['OL'], team: 'Chargers', decade: '1960s', rating: 90, stats: { 'AP': 5, 'PB': 8 }, badges: ['HOF'], synergies: [] },

    // 1970s
    { name: 'Art Shell', pos: ['OL'], team: 'Raiders', decade: '1970s', rating: 92, stats: { 'AP': 5, 'PB': 8 }, badges: ['HOF'], synergies: [] },
    { name: 'Mike Webster', pos: ['OL'], team: 'Steelers', decade: '1970s', rating: 93, stats: { 'AP': 5, 'PB': 9 }, badges: ['HOF'], synergies: ['Steelers70s'] },
    { name: 'Joe DeLamielleure', pos: ['OL'], team: 'Bills', decade: '1970s', rating: 88, stats: { 'AP': 4, 'PB': 6 }, badges: ['HOF'], synergies: [] },
    { name: 'John Hannah', pos: ['OL'], team: 'Patriots', decade: '1970s', rating: 95, stats: { 'AP': 7, 'PB': 9 }, badges: ['HOF'], synergies: [] },
    { name: 'Gene Upshaw', pos: ['OL'], team: 'Raiders', decade: '1970s', rating: 90, stats: { 'AP': 5, 'PB': 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Rayfield Wright', pos: ['OL'], team: 'Cowboys', decade: '1970s', rating: 89, stats: { 'AP': 4, 'PB': 6 }, badges: ['HOF'], synergies: [] },
    { name: 'Larry Little', pos: ['OL'], team: 'Dolphins', decade: '1970s', rating: 90, stats: { 'AP': 5, 'PB': 5 }, badges: ['HOF'], synergies: [] },

    // 1980s
    { name: 'Anthony Munoz', pos: ['OL'], team: 'Bengals', decade: '1980s', rating: 97, stats: { 'AP': 9, 'PB': 11 }, badges: ['HOF'], synergies: [] },
    { name: 'Joe Jacoby', pos: ['OL'], team: 'Commanders', decade: '1980s', rating: 87, stats: { 'AP': 3, 'PB': 4 }, badges: [], synergies: [] },
    { name: 'Mike Munchak', pos: ['OL'], team: 'Titans', decade: '1980s', rating: 89, stats: { 'AP': 4, 'PB': 9 }, badges: ['HOF'], synergies: [] },
    { name: 'Dwight Stephenson', pos: ['OL'], team: 'Dolphins', decade: '1980s', rating: 92, stats: { 'AP': 5, 'PB': 5 }, badges: ['HOF'], synergies: [] },
    { name: 'Jim Covert', pos: ['OL'], team: 'Bears', decade: '1980s', rating: 87, stats: { 'AP': 2, 'PB': 2 }, badges: ['HOF'], synergies: [] },
    { name: 'Gary Zimmerman', pos: ['OL'], team: 'Vikings', decade: '1980s', rating: 90, stats: { 'AP': 3, 'PB': 7 }, badges: ['HOF'], synergies: [] },

    // 1990s
    { name: 'Larry Allen', pos: ['OL'], team: 'Cowboys', decade: '1990s', rating: 96, stats: { 'AP': 7, 'PB': 11 }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Bruce Matthews', pos: ['OL'], team: 'Titans', decade: '1990s', rating: 94, stats: { 'AP': 6, 'PB': 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Jonathan Ogden', pos: ['OL'], team: 'Ravens', decade: '2000s', rating: 93, stats: { 'AP': 6, 'PB': 11 }, badges: ['HOF'], synergies: [] },
    { name: 'Randall McDaniel', pos: ['OL'], team: 'Vikings', decade: '1990s', rating: 92, stats: { 'AP': 6, 'PB': 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Roaf', pos: ['OL'], team: 'Saints', decade: '1990s', rating: 91, stats: { 'AP': 5, 'PB': 11 }, badges: ['HOF'], synergies: [] },
    { name: 'Steve Wisniewski', pos: ['OL'], team: 'Raiders', decade: '1990s', rating: 86, stats: { 'AP': 2, 'PB': 8 }, badges: [], synergies: [] },

    // 2000s
    { name: 'Walter Jones', pos: ['OL'], team: 'Seahawks', decade: '2000s', rating: 96, stats: { 'AP': 6, 'PB': 9 }, badges: ['HOF'], synergies: [] },
    { name: 'Orlando Pace', pos: ['OL'], team: 'Rams', decade: '2000s', rating: 92, stats: { 'AP': 3, 'PB': 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Alan Faneca', pos: ['OL'], team: 'Steelers', decade: '2000s', rating: 91, stats: { 'AP': 6, 'PB': 9 }, badges: ['HOF'], synergies: [] },
    { name: 'Steve Hutchinson', pos: ['OL'], team: 'Vikings', decade: '2000s', rating: 90, stats: { 'AP': 5, 'PB': 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Jeff Saturday', pos: ['OL'], team: 'Colts', decade: '2000s', rating: 88, stats: { 'AP': 3, 'PB': 5 }, badges: [], synergies: [] },
    { name: 'Kevin Mawae', pos: ['OL'], team: 'Jets', decade: '2000s', rating: 89, stats: { 'AP': 3, 'PB': 8 }, badges: ['HOF'], synergies: [] },

    // 2010s
    { name: 'Zack Martin', pos: ['OL'], team: 'Cowboys', decade: '2010s', rating: 94, stats: { 'AP': 6, 'PB': 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Trent Williams', pos: ['OL'], team: 'Commanders', decade: '2010s', rating: 93, stats: { 'AP': 5, 'PB': 9 }, badges: [], synergies: [] },
    { name: 'Joe Thomas', pos: ['OL'], team: 'Browns', decade: '2010s', rating: 95, stats: { 'AP': 6, 'PB': 10 }, badges: ['HOF'], synergies: [] },
    { name: 'Tyron Smith', pos: ['OL'], team: 'Cowboys', decade: '2010s', rating: 90, stats: { 'AP': 4, 'PB': 8 }, badges: [], synergies: [] },
    { name: 'David Bakhtiari', pos: ['OL'], team: 'Packers', decade: '2010s', rating: 89, stats: { 'AP': 3, 'PB': 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Lane Johnson', pos: ['OL'], team: 'Eagles', decade: '2010s', rating: 90, stats: { 'AP': 4, 'PB': 5 }, badges: ['All-Pro'], synergies: [] },

    // 2020s
    { name: 'Trent Williams', pos: ['OL'], team: '49ers', decade: '2020s', rating: 95, stats: { 'AP': 4, 'PB': 6 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Penei Sewell', pos: ['OL'], team: 'Lions', decade: '2020s', rating: 92, stats: { 'AP': 3, 'PB': 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Rashawn Slater', pos: ['OL'], team: 'Chargers', decade: '2020s', rating: 89, stats: { 'AP': 2, 'PB': 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Landon Dickerson', pos: ['OL'], team: 'Eagles', decade: '2020s', rating: 88, stats: { 'AP': 2, 'PB': 2 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tristan Wirfs', pos: ['OL'], team: 'Buccaneers', decade: '2020s', rating: 91, stats: { 'AP': 3, 'PB': 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Quenton Nelson', pos: ['OL'], team: 'Colts', decade: '2020s', rating: 90, stats: { 'AP': 4, 'PB': 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Frank Ragnow', pos: ['OL'], team: 'Lions', decade: '2020s', rating: 88, stats: { 'AP': 2, 'PB': 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Creed Humphrey', pos: ['OL'], team: 'Chiefs', decade: '2020s', rating: 89, stats: { 'AP': 3, 'PB': 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tyler Linderbaum', pos: ['OL'], team: 'Ravens', decade: '2020s', rating: 87, stats: { 'AP': 2, 'PB': 2 }, badges: ['All-Pro'], synergies: [] },

    // ============ ADDITIONAL TEAMS & ERAS ============

    // BEARS - 1980s
    { name: 'Walter Payton', pos: ['RB'], team: 'Bears', decade: '1980s', rating: 97, stats: { YDS: 1551, TD: 11, YPC: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Jim McMahon', pos: ['QB'], team: 'Bears', decade: '1980s', rating: 80, stats: { YDS: 2392, TD: 15, 'CMP%': '56.2' }, badges: [], synergies: [] },
    { name: 'Richard Dent', pos: ['EDGE'], team: 'Bears', decade: '1980s', rating: 90, stats: { SACKS: 17, FF: 4 }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Mike Singletary', pos: ['DB'], team: 'Bears', decade: '1980s', rating: 93, stats: { INT: 2, PD: 8 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Willie Gault', pos: ['WR1', 'WR2'], team: 'Bears', decade: '1980s', rating: 80, stats: { YDS: 765, TD: 5, YPR: '17.8' }, badges: [], synergies: [] },
    { name: 'Dan Hampton', pos: ['EDGE'], team: 'Bears', decade: '1980s', rating: 88, stats: { SACKS: 10, FF: 3 }, badges: ['HOF'], synergies: [] },

    // MARK GASTINEAU - Jets 1980s
    { name: 'Mark Gastineau', pos: ['EDGE'], team: 'Jets', decade: '1980s', rating: 88, stats: { SACKS: 22, FF: 3 }, badges: [], synergies: [] },
    { name: 'Ken OBrien', pos: ['QB'], team: 'Jets', decade: '1980s', rating: 79, stats: { YDS: 3888, TD: 25, 'CMP%': '59.6' }, badges: [], synergies: [] },
    { name: 'Wesley Walker', pos: ['WR1', 'WR2'], team: 'Jets', decade: '1980s', rating: 82, stats: { YDS: 978, TD: 7, YPR: '18.5' }, badges: [], synergies: [] },
    { name: 'Freeman McNeil', pos: ['RB'], team: 'Jets', decade: '1980s', rating: 82, stats: { YDS: 1070, TD: 5, YPC: '4.3' }, badges: [], synergies: [] },

    // LEE ROY SELMON - Buccaneers 1980s
    { name: 'Lee Roy Selmon', pos: ['EDGE'], team: 'Buccaneers', decade: '1980s', rating: 89, stats: { SACKS: 11, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },

    // ADDITIONAL BRONCOS 1970s
    { name: 'Floyd Little', pos: ['RB'], team: 'Broncos', decade: '1970s', rating: 83, stats: { YDS: 1133, TD: 6, YPC: '4.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Craig Morton', pos: ['QB'], team: 'Broncos', decade: '1970s', rating: 79, stats: { YDS: 2251, TD: 14, 'CMP%': '52.8' }, badges: [], synergies: [] },
    { name: 'Haven Moses', pos: ['WR1', 'WR2'], team: 'Broncos', decade: '1970s', rating: 80, stats: { YDS: 812, TD: 6, YPR: '16.5' }, badges: [], synergies: [] },
    { name: 'Tom Jackson', pos: ['DB'], team: 'Broncos', decade: '1970s', rating: 82, stats: { INT: 3, PD: 9 }, badges: [], synergies: [] },
    { name: 'Lyle Alzado', pos: ['EDGE'], team: 'Broncos', decade: '1970s', rating: 83, stats: { SACKS: '10*', FF: 3 }, badges: [], synergies: [] },

    // BILLS 1970s (OJ era)
    { name: 'O.J. Simpson', pos: ['RB'], team: 'Bills', decade: '1970s', rating: 95, stats: { YDS: 2003, TD: 12, YPC: '6.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Joe Ferguson', pos: ['QB'], team: 'Bills', decade: '1970s', rating: 77, stats: { YDS: 2519, TD: 14, 'CMP%': '51.8' }, badges: [], synergies: [] },
    { name: 'Robert James', pos: ['DB'], team: 'Bills', decade: '1970s', rating: 78, stats: { INT: 5, PD: 9 }, badges: [], synergies: [] },

    // ADDITIONAL OL for teams that need them
    { name: 'Mark Bortz', pos: ['OL'], team: 'Bears', decade: '1980s', rating: 83, stats: { 'AP': 1, 'PB': 2 }, badges: [], synergies: [] },
    { name: 'Russ Grimm', pos: ['OL'], team: 'Commanders', decade: '1980s', rating: 90, stats: { 'AP': 4, 'PB': 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Jackie Slater', pos: ['OL'], team: 'Rams', decade: '1980s', rating: 89, stats: { 'AP': 3, 'PB': 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Dermontti Dawson', pos: ['OL'], team: 'Steelers', decade: '1990s', rating: 93, stats: { 'AP': 6, 'PB': 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Kevin Williams', pos: ['OL'], team: 'Cowboys', decade: '2000s', rating: 80, stats: { 'AP': 1, 'PB': 2 }, badges: [], synergies: [] },

    // ============ GAP FILLS ============
    // 49ers|1980s OL
    { name: 'Jesse Sapolu', pos: ['OL'], team: '49ers', decade: '1980s', rating: 84, stats: { AP: 1, PB: 4 }, badges: [], synergies: [] },
    { name: 'Randy Cross', pos: ['OL'], team: '49ers', decade: '1980s', rating: 86, stats: { AP: 3, PB: 3 }, badges: [], synergies: [] },
    { name: 'Guy McIntyre', pos: ['OL'], team: '49ers', decade: '1980s', rating: 83, stats: { AP: 1, PB: 5 }, badges: [], synergies: [] },

    // 49ers|1990s OL
    { name: 'Jesse Sapolu', pos: ['OL'], team: '49ers', decade: '1990s', rating: 84, stats: { AP: 1, PB: 4 }, badges: [], synergies: [] },
    { name: 'Harris Barton', pos: ['OL'], team: '49ers', decade: '1990s', rating: 83, stats: { AP: 1, PB: 2 }, badges: [], synergies: [] },

    // 49ers|2000s WR, OL
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: '49ers', decade: '2000s', rating: 93, stats: { YDS: 1412, TD: 13, YPR: '15.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Joe Staley', pos: ['OL'], team: '49ers', decade: '2000s', rating: 86, stats: { AP: 2, PB: 6 }, badges: [], synergies: [] },

    // 49ers|2010s OL
    { name: 'Joe Staley', pos: ['OL'], team: '49ers', decade: '2010s', rating: 89, stats: { AP: 2, PB: 6 }, badges: [], synergies: [] },
    { name: 'Mike Iupati', pos: ['OL'], team: '49ers', decade: '2010s', rating: 85, stats: { AP: 1, PB: 4 }, badges: ['All-Pro'], synergies: [] },

    // Bears|1980s TE
    { name: 'Emery Moorehead', pos: ['TE'], team: 'Bears', decade: '1980s', rating: 78, stats: { YDS: 472, TD: 4, YPR: '11.3' }, badges: [], synergies: [] },

    // Bengals|1980s TE
    { name: 'Rodney Holman', pos: ['TE'], team: 'Bengals', decade: '1980s', rating: 84, stats: { YDS: 736, TD: 7, YPR: '12.5' }, badges: [], synergies: [] },

    // Bengals|2020s TE, OL
    { name: 'Irv Smith Jr.', pos: ['TE'], team: 'Bengals', decade: '2020s', rating: 76, stats: { YDS: 396, TD: 3, YPR: '10.4' }, badges: [], synergies: [] },
    { name: 'Jonah Williams', pos: ['OL'], team: 'Bengals', decade: '2020s', rating: 79, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },
    { name: 'Cordell Volson', pos: ['OL'], team: 'Bengals', decade: '2020s', rating: 76, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },

    // Bills|1970s WR, TE, EDGE
    { name: 'Bob Chandler', pos: ['WR1', 'WR2'], team: 'Bills', decade: '1970s', rating: 80, stats: { YDS: 786, TD: 6, YPR: '14.8' }, badges: [], synergies: [] },
    { name: 'Paul Seymour', pos: ['TE'], team: 'Bills', decade: '1970s', rating: 76, stats: { YDS: 362, TD: 2, YPR: '11.0' }, badges: [], synergies: [] },
    { name: 'Sherman White', pos: ['EDGE'], team: 'Bills', decade: '1970s', rating: 79, stats: { SACKS: '9*', FF: 2 }, badges: [], synergies: [] },

    // Bills|1990s OL
    { name: 'Kent Hull', pos: ['OL'], team: 'Bills', decade: '1990s', rating: 86, stats: { AP: 2, PB: 3 }, badges: [], synergies: [] },
    { name: 'Will Wolford', pos: ['OL'], team: 'Bills', decade: '1990s', rating: 84, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },

    // Bills|2020s OL
    { name: 'Dion Dawkins', pos: ['OL'], team: 'Bills', decade: '2020s', rating: 83, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },
    { name: 'Spencer Brown', pos: ['OL'], team: 'Bills', decade: '2020s', rating: 79, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },

    // Broncos|1970s TE, OL
    { name: 'Riley Odoms', pos: ['TE'], team: 'Broncos', decade: '1970s', rating: 82, stats: { YDS: 561, TD: 5, YPR: '12.4' }, badges: [], synergies: [] },
    { name: 'Claudie Minor', pos: ['OL'], team: 'Broncos', decade: '1970s', rating: 80, stats: { AP: 1, PB: 2 }, badges: [], synergies: [] },

    // Broncos|1980s TE, OL
    { name: 'Clarence Kay', pos: ['TE'], team: 'Broncos', decade: '1980s', rating: 77, stats: { YDS: 398, TD: 3, YPR: '11.7' }, badges: [], synergies: [] },
    { name: 'Keith Bishop', pos: ['OL'], team: 'Broncos', decade: '1980s', rating: 82, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },

    // Broncos|1990s OL
    { name: 'Gary Zimmerman', pos: ['OL'], team: 'Broncos', decade: '1990s', rating: 92, stats: { AP: 4, PB: 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Mark Schlereth', pos: ['OL'], team: 'Broncos', decade: '1990s', rating: 82, stats: { AP: 0, PB: 3 }, badges: [], synergies: [] },

    // Broncos|2000s OL
    { name: 'Matt Lepsis', pos: ['OL'], team: 'Broncos', decade: '2000s', rating: 81, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },
    { name: 'Tom Nalen', pos: ['OL'], team: 'Broncos', decade: '2000s', rating: 87, stats: { AP: 3, PB: 5 }, badges: [], synergies: [] },

    // Broncos|2010s TE, OL
    { name: 'Julius Thomas', pos: ['TE'], team: 'Broncos', decade: '2010s', rating: 82, stats: { YDS: 788, TD: 12, YPR: '12.4' }, badges: [], synergies: [] },
    { name: 'Ryan Clady', pos: ['OL'], team: 'Broncos', decade: '2010s', rating: 87, stats: { AP: 2, PB: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Garett Bolles', pos: ['OL'], team: 'Broncos', decade: '2010s', rating: 82, stats: { AP: 1, PB: 1 }, badges: [], synergies: [] },

    // Browns|1960s TE, OL
    { name: 'Milt Morin', pos: ['TE'], team: 'Browns', decade: '1960s', rating: 80, stats: { YDS: 578, TD: 4, YPR: '13.1' }, badges: [], synergies: [] },
    { name: 'Dick Schafrath', pos: ['OL'], team: 'Browns', decade: '1960s', rating: 87, stats: { AP: 3, PB: 6 }, badges: [], synergies: [] },
    { name: 'Gene Hickerson', pos: ['OL'], team: 'Browns', decade: '1960s', rating: 90, stats: { AP: 4, PB: 6 }, badges: ['HOF'], synergies: [] },

    // Browns|2020s OL
    { name: 'Jedrick Wills', pos: ['OL'], team: 'Browns', decade: '2020s', rating: 79, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },
    { name: 'Wyatt Teller', pos: ['OL'], team: 'Browns', decade: '2020s', rating: 88, stats: { AP: 2, PB: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Joel Bitonio', pos: ['OL'], team: 'Browns', decade: '2020s', rating: 90, stats: { AP: 3, PB: 6 }, badges: ['All-Pro'], synergies: [] },

    // Browns|2010s (full roster)
    { name: 'Josh Gordon', pos: ['WR1', 'WR2'], team: 'Browns', decade: '2010s', rating: 83, stats: { YDS: 1646, TD: 9, YPR: '17.8' }, badges: [], synergies: [] },
    { name: 'Joe Haden', pos: ['DB'], team: 'Browns', decade: '2010s', rating: 83, stats: { INT: 5, PD: 13 }, badges: [], synergies: [] },
    { name: 'Myles Garrett', pos: ['EDGE'], team: 'Browns', decade: '2010s', rating: 89, stats: { SACKS: 13.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Nick Chubb', pos: ['RB'], team: 'Browns', decade: '2010s', rating: 85, stats: { YDS: 1494, TD: 8, YPC: '5.0' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Baker Mayfield', pos: ['QB'], team: 'Browns', decade: '2010s', rating: 78, stats: { YDS: 3563, TD: 22, 'CMP%': '61.6' }, badges: [], synergies: [] },
    { name: 'Jarvis Landry', pos: ['WR1', 'WR2'], team: 'Browns', decade: '2010s', rating: 81, stats: { YDS: 1174, TD: 6, YPR: '12.1' }, badges: [], synergies: [] },
    { name: 'Joel Bitonio', pos: ['OL'], team: 'Browns', decade: '2010s', rating: 88, stats: { AP: 2, PB: 5 }, badges: ['All-Pro'], synergies: [] },

    // Buccaneers|1980s (full starters)
    { name: 'Doug Williams', pos: ['QB'], team: 'Buccaneers', decade: '1980s', rating: 80, stats: { YDS: 2448, TD: 16, 'CMP%': '52.0' }, badges: ['SB MVP'], synergies: [] },
    { name: 'James Wilder', pos: ['RB'], team: 'Buccaneers', decade: '1980s', rating: 83, stats: { YDS: 1300, TD: 10, YPC: '3.9' }, badges: [], synergies: [] },
    { name: 'Kevin House', pos: ['WR1', 'WR2'], team: 'Buccaneers', decade: '1980s', rating: 80, stats: { YDS: 842, TD: 5, YPR: '17.1' }, badges: [], synergies: [] },
    { name: 'Jimmie Giles', pos: ['TE'], team: 'Buccaneers', decade: '1980s', rating: 82, stats: { YDS: 665, TD: 7, YPR: '13.5' }, badges: [], synergies: [] },
    { name: 'Hugh Green', pos: ['EDGE'], team: 'Buccaneers', decade: '1980s', rating: 82, stats: { SACKS: 8.5, FF: 3 }, badges: [], synergies: [] },
    { name: 'Cedric Brown', pos: ['DB'], team: 'Buccaneers', decade: '1980s', rating: 78, stats: { INT: 4, PD: 9 }, badges: [], synergies: [] },

    // Buccaneers|2000s TE, OL
    { name: 'Kellen Winslow II', pos: ['TE'], team: 'Buccaneers', decade: '2000s', rating: 80, stats: { YDS: 672, TD: 5, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Lomas Brown', pos: ['OL'], team: 'Buccaneers', decade: '2000s', rating: 80, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },

    // Buccaneers|2010s RB, TE, OL
    { name: 'Doug Martin', pos: ['RB'], team: 'Buccaneers', decade: '2010s', rating: 82, stats: { YDS: 1454, TD: 11, YPC: '4.2' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Cameron Brate', pos: ['TE'], team: 'Buccaneers', decade: '2010s', rating: 79, stats: { YDS: 591, TD: 6, YPR: '11.6' }, badges: [], synergies: [] },
    { name: 'Ali Marpet', pos: ['OL'], team: 'Buccaneers', decade: '2010s', rating: 84, stats: { AP: 1, PB: 1 }, badges: [], synergies: [] },

    // Buccaneers|2020s TE
    { name: 'Rob Gronkowski', pos: ['TE'], team: 'Buccaneers', decade: '2020s', rating: 89, stats: { YDS: 802, TD: 6, YPR: '12.5' }, badges: ['HOF'], synergies: [] },

    // Cardinals|2000s TE, OL
    { name: 'Leonard Pope', pos: ['TE'], team: 'Cardinals', decade: '2000s', rating: 75, stats: { YDS: 298, TD: 2, YPR: '10.3' }, badges: [], synergies: [] },
    { name: 'Levi Brown', pos: ['OL'], team: 'Cardinals', decade: '2000s', rating: 76, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },

    // Cardinals|2020s OL, EDGE
    { name: 'D.J. Humphries', pos: ['OL'], team: 'Cardinals', decade: '2020s', rating: 81, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },
    { name: 'Dennis Gardeck', pos: ['EDGE'], team: 'Cardinals', decade: '2020s', rating: 78, stats: { SACKS: 7, FF: 2 }, badges: [], synergies: [] },

    // Chargers|1960s TE
    { name: 'Dave Kocourek', pos: ['TE'], team: 'Chargers', decade: '1960s', rating: 81, stats: { YDS: 672, TD: 5, YPR: '14.8' }, badges: [], synergies: [] },

    // Chargers|1980s OL
    { name: 'Ed White', pos: ['OL'], team: 'Chargers', decade: '1980s', rating: 84, stats: { AP: 2, PB: 4 }, badges: [], synergies: [] },
    { name: 'Don Macek', pos: ['OL'], team: 'Chargers', decade: '1980s', rating: 81, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Chargers|2000s OL, DB
    { name: 'Marcus McNeill', pos: ['OL'], team: 'Chargers', decade: '2000s', rating: 84, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },
    { name: 'Quentin Jammer', pos: ['DB'], team: 'Chargers', decade: '2000s', rating: 81, stats: { INT: 3, PD: 14 }, badges: [], synergies: [] },

    // Chargers|2020s TE
    { name: 'Gerald Everett', pos: ['TE'], team: 'Chargers', decade: '2020s', rating: 77, stats: { YDS: 535, TD: 4, YPR: '10.8' }, badges: [], synergies: [] },

    // Chiefs|1960s OL
    { name: 'Jim Tyrer', pos: ['OL'], team: 'Chiefs', decade: '1960s', rating: 87, stats: { AP: 3, PB: 6 }, badges: [], synergies: [] },
    { name: 'Ed Budde', pos: ['OL'], team: 'Chiefs', decade: '1960s', rating: 85, stats: { AP: 2, PB: 6 }, badges: [], synergies: [] },

    // Chiefs|1990s WR
    { name: 'Andre Rison', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '1990s', rating: 82, stats: { YDS: 844, TD: 7, YPR: '13.2' }, badges: [], synergies: [] },

    // Chiefs|2010s OL
    { name: 'Mitchell Schwartz', pos: ['OL'], team: 'Chiefs', decade: '2010s', rating: 88, stats: { AP: 2, PB: 2 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Eric Fisher', pos: ['OL'], team: 'Chiefs', decade: '2010s', rating: 82, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Colts|2020s (full roster)
    { name: 'Anthony Richardson', pos: ['QB'], team: 'Colts', decade: '2020s', rating: 78, stats: { YDS: 2584, TD: 15, 'CMP%': '55.0' }, badges: [], synergies: [] },
    { name: 'Jonathan Taylor', pos: ['RB'], team: 'Colts', decade: '2020s', rating: 87, stats: { YDS: 1218, TD: 10, YPC: '4.9' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Michael Pittman Jr.', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2020s', rating: 82, stats: { YDS: 1015, TD: 5, YPR: '12.2' }, badges: [], synergies: [] },
    { name: 'DeForest Buckner', pos: ['EDGE'], team: 'Colts', decade: '2020s', rating: 87, stats: { SACKS: 8, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Kenny Moore II', pos: ['DB'], team: 'Colts', decade: '2020s', rating: 83, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },

    // Commanders|1990s TE, OL
    { name: 'Ethan Horton', pos: ['TE'], team: 'Commanders', decade: '1990s', rating: 77, stats: { YDS: 385, TD: 3, YPR: '11.0' }, badges: [], synergies: [] },
    { name: 'Jim Lachey', pos: ['OL'], team: 'Commanders', decade: '1990s', rating: 88, stats: { AP: 3, PB: 3 }, badges: [], synergies: [] },

    // Commanders|2010s (full roster)
    { name: 'Kirk Cousins', pos: ['QB'], team: 'Commanders', decade: '2010s', rating: 81, stats: { YDS: 4093, TD: 25, 'CMP%': '65.9' }, badges: [], synergies: [] },
    { name: 'Alfred Morris', pos: ['RB'], team: 'Commanders', decade: '2010s', rating: 82, stats: { YDS: 1613, TD: 13, YPC: '4.8' }, badges: [], synergies: [] },
    { name: 'DeSean Jackson', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '2010s', rating: 83, stats: { YDS: 1042, TD: 6, YPR: '17.9' }, badges: [], synergies: [] },
    { name: 'Jordan Reed', pos: ['TE'], team: 'Commanders', decade: '2010s', rating: 83, stats: { YDS: 877, TD: 11, YPR: '12.0' }, badges: [], synergies: [] },
    { name: 'Ryan Kerrigan', pos: ['EDGE'], team: 'Commanders', decade: '2010s', rating: 84, stats: { SACKS: 11, FF: 3 }, badges: [], synergies: [] },
    { name: 'DeAngelo Hall', pos: ['DB'], team: 'Commanders', decade: '2010s', rating: 80, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },

    // Cowboys|1980s OL
    { name: 'Pat Donovan', pos: ['OL'], team: 'Cowboys', decade: '1980s', rating: 83, stats: { AP: 1, PB: 4 }, badges: [], synergies: [] },
    { name: 'Mark Tuinei', pos: ['OL'], team: 'Cowboys', decade: '1980s', rating: 81, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Cowboys|2020s OL
    { name: 'Tyler Smith', pos: ['OL'], team: 'Cowboys', decade: '2020s', rating: 84, stats: { AP: 1, PB: 2 }, badges: [], synergies: [] },
    { name: 'Zack Martin', pos: ['OL'], team: 'Cowboys', decade: '2020s', rating: 92, stats: { AP: 5, PB: 7 }, badges: ['HOF', 'All-Pro'], synergies: [] },

    // Dolphins|1980s RB
    { name: 'Andra Franklin', pos: ['RB'], team: 'Dolphins', decade: '1980s', rating: 78, stats: { YDS: 746, TD: 7, YPC: '3.8' }, badges: [], synergies: [] },
    { name: 'Tony Nathan', pos: ['RB'], team: 'Dolphins', decade: '1980s', rating: 79, stats: { YDS: 782, TD: 5, YPC: '4.3' }, badges: [], synergies: [] },

    // Dolphins|2020s TE, OL
    { name: 'Jonnu Smith', pos: ['TE'], team: 'Dolphins', decade: '2020s', rating: 80, stats: { YDS: 625, TD: 5, YPR: '11.4' }, badges: [], synergies: [] },
    { name: 'Terron Armstead', pos: ['OL'], team: 'Dolphins', decade: '2020s', rating: 87, stats: { AP: 1, PB: 5 }, badges: [], synergies: [] },

    // Eagles|1980s OL
    { name: 'Ron Baker', pos: ['OL'], team: 'Eagles', decade: '1980s', rating: 80, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },
    { name: 'Jerry Sisemore', pos: ['OL'], team: 'Eagles', decade: '1980s', rating: 83, stats: { AP: 1, PB: 2 }, badges: [], synergies: [] },

    // Eagles|1990s OL
    { name: 'Tra Thomas', pos: ['OL'], team: 'Eagles', decade: '1990s', rating: 84, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },
    { name: 'Jon Runyan', pos: ['OL'], team: 'Eagles', decade: '1990s', rating: 81, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },

    // Eagles|2000s OL
    { name: 'Tra Thomas', pos: ['OL'], team: 'Eagles', decade: '2000s', rating: 85, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },
    { name: 'Jon Runyan', pos: ['OL'], team: 'Eagles', decade: '2000s', rating: 83, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },
    { name: 'Shawn Andrews', pos: ['OL'], team: 'Eagles', decade: '2000s', rating: 84, stats: { AP: 2, PB: 2 }, badges: ['All-Pro'], synergies: [] },

    // Eagles|2010s OL
    { name: 'Jason Peters', pos: ['OL'], team: 'Eagles', decade: '2010s', rating: 91, stats: { AP: 4, PB: 9 }, badges: ['All-Pro'], synergies: [] },

    // Falcons|2010s OL
    { name: 'Jake Matthews', pos: ['OL'], team: 'Falcons', decade: '2010s', rating: 83, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },
    { name: 'Alex Mack', pos: ['OL'], team: 'Falcons', decade: '2010s', rating: 87, stats: { AP: 2, PB: 6 }, badges: ['All-Pro'], synergies: [] },

    // Giants|1980s WR, OL
    { name: 'Lionel Manuel', pos: ['WR1', 'WR2'], team: 'Giants', decade: '1980s', rating: 79, stats: { YDS: 792, TD: 5, YPR: '13.6' }, badges: [], synergies: [] },
    { name: 'Brad Benson', pos: ['OL'], team: 'Giants', decade: '1980s', rating: 81, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },

    // Giants|2000s OL
    { name: 'Shaun O\'Hara', pos: ['OL'], team: 'Giants', decade: '2000s', rating: 83, stats: { AP: 1, PB: 2 }, badges: [], synergies: [] },
    { name: 'David Diehl', pos: ['OL'], team: 'Giants', decade: '2000s', rating: 81, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },

    // Giants|2010s TE, OL
    { name: 'Evan Engram', pos: ['TE'], team: 'Giants', decade: '2010s', rating: 79, stats: { YDS: 654, TD: 6, YPR: '12.3' }, badges: [], synergies: [] },
    { name: 'Justin Pugh', pos: ['OL'], team: 'Giants', decade: '2010s', rating: 81, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },

    // Jaguars|1990s TE
    { name: 'Pete Mitchell', pos: ['TE'], team: 'Jaguars', decade: '1990s', rating: 78, stats: { YDS: 512, TD: 3, YPR: '10.9' }, badges: [], synergies: [] },

    // Jets|1960s TE, OL
    { name: 'Pete Lammons', pos: ['TE'], team: 'Jets', decade: '1960s', rating: 78, stats: { YDS: 536, TD: 4, YPR: '13.2' }, badges: [], synergies: [] },
    { name: 'Winston Hill', pos: ['OL'], team: 'Jets', decade: '1960s', rating: 85, stats: { AP: 2, PB: 8 }, badges: [], synergies: [] },

    // Jets|1980s TE, OL, DB
    { name: 'Mickey Shuler', pos: ['TE'], team: 'Jets', decade: '1980s', rating: 80, stats: { YDS: 589, TD: 4, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Marvin Powell', pos: ['OL'], team: 'Jets', decade: '1980s', rating: 85, stats: { AP: 2, PB: 5 }, badges: [], synergies: [] },
    { name: 'Jerry Holmes', pos: ['DB'], team: 'Jets', decade: '1980s', rating: 78, stats: { INT: 4, PD: 9 }, badges: [], synergies: [] },

    // Jets|2000s TE
    { name: 'Anthony Becht', pos: ['TE'], team: 'Jets', decade: '2000s', rating: 76, stats: { YDS: 378, TD: 3, YPR: '10.2' }, badges: [], synergies: [] },

    // Jets|2020s TE, OL
    { name: 'Tyler Conklin', pos: ['TE'], team: 'Jets', decade: '2020s', rating: 79, stats: { YDS: 621, TD: 3, YPR: '10.5' }, badges: [], synergies: [] },
    { name: 'Alijah Vera-Tucker', pos: ['OL'], team: 'Jets', decade: '2020s', rating: 82, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },

    // Lions|1990s TE
    { name: 'Ron Hall', pos: ['TE'], team: 'Lions', decade: '1990s', rating: 76, stats: { YDS: 352, TD: 2, YPR: '10.4' }, badges: [], synergies: [] },

    // Lions|2010s RB, TE, OL
    { name: 'Reggie Bush', pos: ['RB'], team: 'Lions', decade: '2010s', rating: 79, stats: { YDS: 1006, TD: 4, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Eric Ebron', pos: ['TE'], team: 'Lions', decade: '2010s', rating: 78, stats: { YDS: 574, TD: 5, YPR: '11.8' }, badges: [], synergies: [] },
    { name: 'Taylor Decker', pos: ['OL'], team: 'Lions', decade: '2010s', rating: 82, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Packers|1990s OL
    { name: 'Frank Winters', pos: ['OL'], team: 'Packers', decade: '1990s', rating: 82, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },
    { name: 'Adam Timmerman', pos: ['OL'], team: 'Packers', decade: '1990s', rating: 81, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Packers|2020s OL
    { name: 'Elgton Jenkins', pos: ['OL'], team: 'Packers', decade: '2020s', rating: 85, stats: { AP: 1, PB: 2 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Josh Myers', pos: ['OL'], team: 'Packers', decade: '2020s', rating: 79, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },

    // Panthers|2010s OL
    { name: 'Trai Turner', pos: ['OL'], team: 'Panthers', decade: '2010s', rating: 84, stats: { AP: 1, PB: 5 }, badges: [], synergies: [] },
    { name: 'Michael Oher', pos: ['OL'], team: 'Panthers', decade: '2010s', rating: 79, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },

    // Patriots|2000s TE, OL
    { name: 'Benjamin Watson', pos: ['TE'], team: 'Patriots', decade: '2000s', rating: 79, stats: { YDS: 643, TD: 4, YPR: '12.3' }, badges: [], synergies: [] },
    { name: 'Matt Light', pos: ['OL'], team: 'Patriots', decade: '2000s', rating: 85, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },

    // Patriots|2010s OL
    { name: 'Nate Solder', pos: ['OL'], team: 'Patriots', decade: '2010s', rating: 83, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },
    { name: 'Shaq Mason', pos: ['OL'], team: 'Patriots', decade: '2010s', rating: 85, stats: { AP: 1, PB: 2 }, badges: ['All-Pro'], synergies: [] },

    // Raiders|1980s WR, OL
    { name: 'Tim Brown', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1980s', rating: 82, stats: { YDS: 725, TD: 5, YPR: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Henry Lawrence', pos: ['OL'], team: 'Raiders', decade: '1980s', rating: 84, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },

    // Raiders|1990s (full roster)
    { name: 'Jeff Hostetler', pos: ['QB'], team: 'Raiders', decade: '1990s', rating: 79, stats: { YDS: 3242, TD: 16, 'CMP%': '57.2' }, badges: [], synergies: [] },
    { name: 'Tim Brown', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1990s', rating: 89, stats: { YDS: 1408, TD: 9, YPR: '14.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Napoleon Kaufman', pos: ['RB'], team: 'Raiders', decade: '1990s', rating: 81, stats: { YDS: 1294, TD: 6, YPC: '5.0' }, badges: [], synergies: [] },
    { name: 'Rocket Ismail', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1990s', rating: 80, stats: { YDS: 1049, TD: 5, YPR: '15.8' }, badges: [], synergies: [] },
    { name: 'Darrell Russell', pos: ['EDGE'], team: 'Raiders', decade: '1990s', rating: 83, stats: { SACKS: 8.5, FF: 2 }, badges: [], synergies: [] },
    { name: 'Terry McDaniel', pos: ['DB'], team: 'Raiders', decade: '1990s', rating: 84, stats: { INT: 6, PD: 13 }, badges: [], synergies: [] },
    { name: 'Chester McGlockton', pos: ['EDGE'], team: 'Raiders', decade: '1990s', rating: 84, stats: { SACKS: 7.5, FF: 3 }, badges: [], synergies: [] },

    // Raiders|2010s TE, OL
    { name: 'Jared Cook', pos: ['TE'], team: 'Raiders', decade: '2010s', rating: 81, stats: { YDS: 896, TD: 6, YPR: '13.2' }, badges: [], synergies: [] },
    { name: 'Rodney Hudson', pos: ['OL'], team: 'Raiders', decade: '2010s', rating: 88, stats: { AP: 2, PB: 3 }, badges: ['All-Pro'], synergies: [] },

    // Raiders|2020s QB, OL
    { name: 'Derek Carr', pos: ['QB'], team: 'Raiders', decade: '2020s', rating: 80, stats: { YDS: 3522, TD: 24, 'CMP%': '60.8' }, badges: [], synergies: [] },
    { name: 'Kolton Miller', pos: ['OL'], team: 'Raiders', decade: '2020s', rating: 83, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Rams|1960s TE, OL
    { name: 'Marlin McKeever', pos: ['TE'], team: 'Rams', decade: '1960s', rating: 77, stats: { YDS: 392, TD: 3, YPR: '12.6' }, badges: [], synergies: [] },
    { name: 'Charlie Cowan', pos: ['OL'], team: 'Rams', decade: '1960s', rating: 83, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },

    // Rams|1980s TE
    { name: 'David Hill', pos: ['TE'], team: 'Rams', decade: '1980s', rating: 77, stats: { YDS: 405, TD: 3, YPR: '11.6' }, badges: [], synergies: [] },

    // Rams|2000s TE
    { name: 'Ernie Conwell', pos: ['TE'], team: 'Rams', decade: '2000s', rating: 77, stats: { YDS: 426, TD: 4, YPR: '10.8' }, badges: [], synergies: [] },

    // Rams|2010s TE, OL
    { name: 'Tyler Higbee', pos: ['TE'], team: 'Rams', decade: '2010s', rating: 79, stats: { YDS: 542, TD: 4, YPR: '11.1' }, badges: [], synergies: [] },
    { name: 'Andrew Whitworth', pos: ['OL'], team: 'Rams', decade: '2010s', rating: 88, stats: { AP: 2, PB: 4 }, badges: [], synergies: [] },

    // Rams|2020s TE, OL
    { name: 'Tyler Higbee', pos: ['TE'], team: 'Rams', decade: '2020s', rating: 79, stats: { YDS: 495, TD: 3, YPR: '10.8' }, badges: [], synergies: [] },
    { name: 'Joe Noteboom', pos: ['OL'], team: 'Rams', decade: '2020s', rating: 77, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },

    // Ravens|2020s EDGE
    { name: 'Odafe Oweh', pos: ['EDGE'], team: 'Ravens', decade: '2020s', rating: 83, stats: { SACKS: 8, FF: 3 }, badges: [], synergies: [] },

    // Saints|2000s OL
    { name: 'Jahri Evans', pos: ['OL'], team: 'Saints', decade: '2000s', rating: 90, stats: { AP: 4, PB: 6 }, badges: [], synergies: [] },
    { name: 'Jon Stinchcomb', pos: ['OL'], team: 'Saints', decade: '2000s', rating: 80, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },
    { name: 'Carl Nicks', pos: ['OL'], team: 'Saints', decade: '2000s', rating: 85, stats: { AP: 2, PB: 2 }, badges: ['All-Pro'], synergies: [] },

    // Saints|2010s OL
    { name: 'Terron Armstead', pos: ['OL'], team: 'Saints', decade: '2010s', rating: 88, stats: { AP: 2, PB: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jahri Evans', pos: ['OL'], team: 'Saints', decade: '2010s', rating: 87, stats: { AP: 2, PB: 6 }, badges: [], synergies: [] },

    // Seahawks|1980s TE, OL
    { name: 'Charle Young', pos: ['TE'], team: 'Seahawks', decade: '1980s', rating: 78, stats: { YDS: 412, TD: 3, YPR: '11.8' }, badges: [], synergies: [] },
    { name: 'Bryan Millard', pos: ['OL'], team: 'Seahawks', decade: '1980s', rating: 80, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Seahawks|2000s TE, EDGE
    { name: 'Jerramy Stevens', pos: ['TE'], team: 'Seahawks', decade: '2000s', rating: 77, stats: { YDS: 482, TD: 5, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Patrick Kerney', pos: ['EDGE'], team: 'Seahawks', decade: '2000s', rating: 84, stats: { SACKS: 14.5, FF: 4 }, badges: [], synergies: [] },

    // Seahawks|2010s TE, OL
    { name: 'Jimmy Graham', pos: ['TE'], team: 'Seahawks', decade: '2010s', rating: 83, stats: { YDS: 923, TD: 10, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'Russell Okung', pos: ['OL'], team: 'Seahawks', decade: '2010s', rating: 84, stats: { AP: 1, PB: 2 }, badges: [], synergies: [] },
    { name: 'Duane Brown', pos: ['OL'], team: 'Seahawks', decade: '2010s', rating: 83, stats: { AP: 0, PB: 3 }, badges: [], synergies: [] },

    // Seahawks|2020s TE, OL, EDGE
    { name: 'Noah Fant', pos: ['TE'], team: 'Seahawks', decade: '2020s', rating: 78, stats: { YDS: 485, TD: 3, YPR: '10.8' }, badges: [], synergies: [] },
    { name: 'Charles Cross', pos: ['OL'], team: 'Seahawks', decade: '2020s', rating: 79, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },
    { name: 'Uchenna Nwosu', pos: ['EDGE'], team: 'Seahawks', decade: '2020s', rating: 82, stats: { SACKS: 9.5, FF: 2 }, badges: [], synergies: [] },

    // Steelers|1970s TE
    { name: 'Randy Grossman', pos: ['TE'], team: 'Steelers', decade: '1970s', rating: 76, stats: { YDS: 348, TD: 3, YPR: '11.6' }, badges: [], synergies: [] },

    // Steelers|1990s TE
    { name: 'Eric Green', pos: ['TE'], team: 'Steelers', decade: '1990s', rating: 82, stats: { YDS: 681, TD: 7, YPR: '12.5' }, badges: [], synergies: [] },

    // Steelers|2010s TE, OL
    { name: 'Vance McDonald', pos: ['TE'], team: 'Steelers', decade: '2010s', rating: 78, stats: { YDS: 510, TD: 4, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Maurkice Pouncey', pos: ['OL'], team: 'Steelers', decade: '2010s', rating: 90, stats: { AP: 2, PB: 9 }, badges: [], synergies: [] },
    { name: 'David DeCastro', pos: ['OL'], team: 'Steelers', decade: '2010s', rating: 88, stats: { AP: 3, PB: 6 }, badges: ['All-Pro'], synergies: [] },

    // Steelers|2020s OL
    { name: 'Broderick Jones', pos: ['OL'], team: 'Steelers', decade: '2020s', rating: 78, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },
    { name: 'Dan Moore', pos: ['OL'], team: 'Steelers', decade: '2020s', rating: 76, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },

    // Texans|2010s TE, OL
    { name: 'Owen Daniels', pos: ['TE'], team: 'Texans', decade: '2010s', rating: 80, stats: { YDS: 615, TD: 5, YPR: '11.5' }, badges: [], synergies: [] },
    { name: 'Duane Brown', pos: ['OL'], team: 'Texans', decade: '2010s', rating: 86, stats: { AP: 1, PB: 3 }, badges: [], synergies: [] },

    // Texans|2020s TE, OL
    { name: 'Dalton Schultz', pos: ['TE'], team: 'Texans', decade: '2020s', rating: 80, stats: { YDS: 635, TD: 5, YPR: '10.9' }, badges: [], synergies: [] },
    { name: 'Laremy Tunsil', pos: ['OL'], team: 'Texans', decade: '2020s', rating: 89, stats: { AP: 2, PB: 3 }, badges: ['All-Pro'], synergies: [] },

    // Titans|1980s (Oilers era — full roster)
    { name: 'Warren Moon', pos: ['QB'], team: 'Titans', decade: '1980s', rating: 87, stats: { YDS: 3689, TD: 23, 'CMP%': '58.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Earl Campbell', pos: ['RB'], team: 'Titans', decade: '1980s', rating: 90, stats: { YDS: 1376, TD: 10, YPC: '4.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Drew Hill', pos: ['WR1', 'WR2'], team: 'Titans', decade: '1980s', rating: 84, stats: { YDS: 1169, TD: 8, YPR: '16.5' }, badges: [], synergies: [] },
    { name: 'Ernest Givins', pos: ['WR1', 'WR2'], team: 'Titans', decade: '1980s', rating: 82, stats: { YDS: 970, TD: 6, YPR: '14.2' }, badges: [], synergies: [] },
    { name: 'Elvin Bethea', pos: ['EDGE'], team: 'Titans', decade: '1980s', rating: 85, stats: { SACKS: '10*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Mike Reinfeldt', pos: ['DB'], team: 'Titans', decade: '1980s', rating: 80, stats: { INT: 6, PD: 10 }, badges: [], synergies: [] },
    { name: 'Dave Casper', pos: ['TE'], team: 'Titans', decade: '1980s', rating: 81, stats: { YDS: 484, TD: 4, YPR: '12.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Bruce Matthews', pos: ['OL'], team: 'Titans', decade: '1980s', rating: 88, stats: { AP: 3, PB: 8 }, badges: ['HOF'], synergies: [] },

    // Titans|1990s (full roster)
    { name: 'Steve McNair', pos: ['QB'], team: 'Titans', decade: '1990s', rating: 85, stats: { YDS: 3228, TD: 19, 'CMP%': '58.5' }, badges: [], synergies: [] },
    { name: 'Eddie George', pos: ['RB'], team: 'Titans', decade: '1990s', rating: 87, stats: { YDS: 1399, TD: 14, YPC: '3.8' }, badges: [], synergies: [] },
    { name: 'Derrick Mason', pos: ['WR1', 'WR2'], team: 'Titans', decade: '1990s', rating: 82, stats: { YDS: 1128, TD: 5, YPR: '13.5' }, badges: [], synergies: [] },
    { name: 'Frank Wycheck', pos: ['TE'], team: 'Titans', decade: '1990s', rating: 81, stats: { YDS: 748, TD: 5, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Jevon Kearse', pos: ['EDGE'], team: 'Titans', decade: '1990s', rating: 89, stats: { SACKS: 14.5, FF: 7 }, badges: [], synergies: [] },
    { name: 'Blaine Bishop', pos: ['DB'], team: 'Titans', decade: '1990s', rating: 83, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },

    // Titans|2000s OL
    { name: 'Brad Hopkins', pos: ['OL'], team: 'Titans', decade: '2000s', rating: 83, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },
    { name: 'Benji Olson', pos: ['OL'], team: 'Titans', decade: '2000s', rating: 80, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },
    { name: 'Kevin Mawae', pos: ['OL'], team: 'Titans', decade: '2000s', rating: 89, stats: { AP: 3, PB: 8 }, badges: ['HOF'], synergies: [] },

    // Vikings|1970s OL
    { name: 'Ron Yary', pos: ['OL'], team: 'Vikings', decade: '1970s', rating: 91, stats: { AP: 6, PB: 7 }, badges: ['HOF'], synergies: [] },
    { name: 'Mick Tingelhoff', pos: ['OL'], team: 'Vikings', decade: '1970s', rating: 89, stats: { AP: 5, PB: 6 }, badges: ['HOF'], synergies: [] },
    { name: 'Ed White', pos: ['OL'], team: 'Vikings', decade: '1970s', rating: 85, stats: { AP: 2, PB: 4 }, badges: [], synergies: [] },

    // Vikings|1990s TE
    { name: 'Steve Jordan', pos: ['TE'], team: 'Vikings', decade: '1990s', rating: 82, stats: { YDS: 592, TD: 4, YPR: '11.4' }, badges: [], synergies: [] },

    // Vikings|2000s (full roster — Culpepper/Moss era)
    { name: 'Daunte Culpepper', pos: ['QB'], team: 'Vikings', decade: '2000s', rating: 85, stats: { YDS: 4717, TD: 39, 'CMP%': '64.2' }, badges: [], synergies: [] },
    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2000s', rating: 93, stats: { YDS: 1437, TD: 13, YPR: '17.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Michael Bennett', pos: ['RB'], team: 'Vikings', decade: '2000s', rating: 78, stats: { YDS: 681, TD: 5, YPC: '3.8' }, badges: [], synergies: [] },
    { name: 'Nate Burleson', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2000s', rating: 79, stats: { YDS: 849, TD: 6, YPR: '13.5' }, badges: [], synergies: [] },
    { name: 'Kevin Williams', pos: ['EDGE'], team: 'Vikings', decade: '2000s', rating: 89, stats: { SACKS: 8.5, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Antoine Winfield', pos: ['DB'], team: 'Vikings', decade: '2000s', rating: 84, stats: { INT: 4, PD: 12 }, badges: [], synergies: [] },
    { name: 'Jim Kleinsasser', pos: ['TE'], team: 'Vikings', decade: '2000s', rating: 78, stats: { YDS: 418, TD: 3, YPR: '10.5' }, badges: [], synergies: [] },
    { name: 'Pat Williams', pos: ['EDGE'], team: 'Vikings', decade: '2000s', rating: 84, stats: { SACKS: 4.5, FF: 2 }, badges: [], synergies: [] },

    // Vikings|2010s OL
    { name: 'Matt Kalil', pos: ['OL'], team: 'Vikings', decade: '2010s', rating: 78, stats: { AP: 0, PB: 1 }, badges: [], synergies: [] },
    { name: 'Riley Reiff', pos: ['OL'], team: 'Vikings', decade: '2010s', rating: 79, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },
    { name: 'Brian O\'Neill', pos: ['OL'], team: 'Vikings', decade: '2010s', rating: 82, stats: { AP: 0, PB: 2 }, badges: [], synergies: [] },

    // Vikings|2020s OL
    { name: 'Christian Darrisaw', pos: ['OL'], team: 'Vikings', decade: '2020s', rating: 85, stats: { AP: 1, PB: 2 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Garrett Bradbury', pos: ['OL'], team: 'Vikings', decade: '2020s', rating: 78, stats: { AP: 0, PB: 0 }, badges: [], synergies: [] },

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
