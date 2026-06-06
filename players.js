const TEAMS = [
    'Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears', 'Bengals',
    'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers', 'Texans', 'Colts',
    'Jaguars', 'Chiefs', 'Raiders', 'Chargers', 'Rams', 'Dolphins', 'Vikings',
    'Patriots', 'Saints', 'Giants', 'Jets', 'Eagles', 'Steelers', '49ers',
    'Seahawks', 'Buccaneers', 'Titans', 'Commanders'
];

const DECADES = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

const POSITIONS = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'EDGE', 'DB'];

const PLAYER_DB = [
    // ===== QUARTERBACKS =====
    // 1960s
    { name: 'Johnny Unitas', pos: ['QB'], team: 'Colts', decade: '1960s', rating: 93, stats: { YDS: 2830, TD: 20, 'CMP%': '54.6' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Bart Starr', pos: ['QB'], team: 'Packers', decade: '1960s', rating: 91, stats: { YDS: 2257, TD: 16, 'CMP%': '57.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Joe Namath', pos: ['QB'], team: 'Jets', decade: '1960s', rating: 85, stats: { YDS: 3147, TD: 19, 'CMP%': '50.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Sonny Jurgensen', pos: ['QB'], team: 'Commanders', decade: '1960s', rating: 87, stats: { YDS: 3209, TD: 25, 'CMP%': '56.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Len Dawson', pos: ['QB'], team: 'Chiefs', decade: '1960s', rating: 88, stats: { YDS: 2527, TD: 20, 'CMP%': '57.1' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Norm Snead', pos: ['QB'], team: 'Eagles', decade: '1960s', rating: 78, stats: { YDS: 2768, TD: 18, 'CMP%': '49.8' }, badges: [], synergies: [] },
    // 1970s
    { name: 'Roger Staubach', pos: ['QB'], team: 'Cowboys', decade: '1970s', rating: 91, stats: { YDS: 2620, TD: 18, 'CMP%': '57.0' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Terry Bradshaw', pos: ['QB'], team: 'Steelers', decade: '1970s', rating: 88, stats: { YDS: 2915, TD: 20, 'CMP%': '51.9' }, badges: ['HOF', 'MVP'], synergies: ['Steelers70s'] },
    { name: 'Fran Tarkenton', pos: ['QB'], team: 'Vikings', decade: '1970s', rating: 89, stats: { YDS: 2994, TD: 20, 'CMP%': '56.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Ken Stabler', pos: ['QB'], team: 'Raiders', decade: '1970s', rating: 86, stats: { YDS: 2737, TD: 19, 'CMP%': '59.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Bob Griese', pos: ['QB'], team: 'Dolphins', decade: '1970s', rating: 87, stats: { YDS: 1890, TD: 13, 'CMP%': '56.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Ken Anderson', pos: ['QB'], team: 'Bengals', decade: '1970s', rating: 85, stats: { YDS: 2667, TD: 16, 'CMP%': '58.0' }, badges: ['MVP'], synergies: [] },
    // 1980s
    { name: 'Joe Montana', pos: ['QB'], team: '49ers', decade: '1980s', rating: 97, stats: { YDS: 3521, TD: 26, 'CMP%': '63.7' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice'] },
    { name: 'Dan Marino', pos: ['QB'], team: 'Dolphins', decade: '1980s', rating: 96, stats: { YDS: 4746, TD: 38, 'CMP%': '59.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1980s', rating: 92, stats: { YDS: 3485, TD: 22, 'CMP%': '56.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Warren Moon', pos: ['QB'], team: 'Titans', decade: '1980s', rating: 87, stats: { YDS: 3520, TD: 23, 'CMP%': '58.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Dan Fouts', pos: ['QB'], team: 'Chargers', decade: '1980s', rating: 89, stats: { YDS: 4082, TD: 27, 'CMP%': '58.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Phil Simms', pos: ['QB'], team: 'Giants', decade: '1980s', rating: 84, stats: { YDS: 3359, TD: 21, 'CMP%': '55.4' }, badges: ['SB MVP'], synergies: [] },
    { name: 'Jim Kelly', pos: ['QB'], team: 'Bills', decade: '1980s', rating: 86, stats: { YDS: 3130, TD: 20, 'CMP%': '57.8' }, badges: ['HOF'], synergies: [] },
    // 1990s
    { name: 'Steve Young', pos: ['QB'], team: '49ers', decade: '1990s', rating: 96, stats: { YDS: 3029, TD: 25, 'CMP%': '64.3' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Young_Rice'] },
    { name: 'Brett Favre', pos: ['QB'], team: 'Packers', decade: '1990s', rating: 94, stats: { YDS: 3882, TD: 33, 'CMP%': '61.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Troy Aikman', pos: ['QB'], team: 'Cowboys', decade: '1990s', rating: 89, stats: { YDS: 3191, TD: 19, 'CMP%': '61.5' }, badges: ['HOF', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1990s', rating: 91, stats: { YDS: 3328, TD: 22, 'CMP%': '57.1' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Drew Bledsoe', pos: ['QB'], team: 'Patriots', decade: '1990s', rating: 83, stats: { YDS: 3706, TD: 23, 'CMP%': '58.2' }, badges: [], synergies: [] },
    { name: 'Randall Cunningham', pos: ['QB'], team: 'Vikings', decade: '1990s', rating: 84, stats: { YDS: 3704, TD: 34, 'CMP%': '60.9' }, badges: [], synergies: ['Cunningham_Moss'] },
    // 2000s
    { name: 'Peyton Manning', pos: ['QB'], team: 'Colts', decade: '2000s', rating: 97, stats: { YDS: 4413, TD: 33, 'CMP%': '65.0' }, badges: ['HOF', 'MVP'], synergies: ['Manning_Harrison', 'Manning_Wayne'] },
    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2000s', rating: 96, stats: { YDS: 3997, TD: 30, 'CMP%': '63.0' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Moss', 'Brady_Gronk'] },
    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2000s', rating: 93, stats: { YDS: 4888, TD: 34, 'CMP%': '66.2' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Kurt Warner', pos: ['QB'], team: 'Rams', decade: '2000s', rating: 91, stats: { YDS: 4353, TD: 36, 'CMP%': '65.1' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Donovan McNabb', pos: ['QB'], team: 'Eagles', decade: '2000s', rating: 86, stats: { YDS: 3365, TD: 23, 'CMP%': '58.4' }, badges: [], synergies: [] },
    { name: 'Ben Roethlisberger', pos: ['QB'], team: 'Steelers', decade: '2000s', rating: 87, stats: { YDS: 3490, TD: 24, 'CMP%': '62.1' }, badges: [], synergies: [] },
    // 2010s
    { name: 'Aaron Rodgers', pos: ['QB'], team: 'Packers', decade: '2010s', rating: 97, stats: { YDS: 4002, TD: 35, 'CMP%': '65.8' }, badges: ['MVP'], synergies: ['Rodgers_Adams', 'Rodgers_Nelson'] },
    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2010s', rating: 95, stats: { YDS: 4355, TD: 32, 'CMP%': '64.0' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Gronk'] },
    { name: 'Russell Wilson', pos: ['QB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { YDS: 3580, TD: 28, 'CMP%': '64.5' }, badges: [], synergies: [] },
    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2010s', rating: 94, stats: { YDS: 4762, TD: 33, 'CMP%': '69.0' }, badges: ['HOF'], synergies: ['Brees_Thomas'] },
    { name: 'Matt Ryan', pos: ['QB'], team: 'Falcons', decade: '2010s', rating: 87, stats: { YDS: 4561, TD: 30, 'CMP%': '65.9' }, badges: ['MVP'], synergies: ['Ryan_Julio'] },
    { name: 'Cam Newton', pos: ['QB'], team: 'Panthers', decade: '2010s', rating: 86, stats: { YDS: 3509, TD: 24, 'CMP%': '59.8' }, badges: ['MVP'], synergies: [] },
    // 2020s
    { name: 'Patrick Mahomes', pos: ['QB'], team: 'Chiefs', decade: '2020s', rating: 98, stats: { YDS: 4839, TD: 37, 'CMP%': '66.3' }, badges: ['MVP', 'SB MVP'], synergies: ['Mahomes_Kelce'] },
    { name: 'Josh Allen', pos: ['QB'], team: 'Bills', decade: '2020s', rating: 94, stats: { YDS: 4306, TD: 35, 'CMP%': '63.3' }, badges: [], synergies: [] },
    { name: 'Joe Burrow', pos: ['QB'], team: 'Bengals', decade: '2020s', rating: 92, stats: { YDS: 4475, TD: 35, 'CMP%': '68.2' }, badges: [], synergies: ['Burrow_Chase'] },
    { name: 'Lamar Jackson', pos: ['QB'], team: 'Ravens', decade: '2020s', rating: 94, stats: { YDS: 3678, TD: 27, 'CMP%': '64.2' }, badges: ['MVP'], synergies: [] },
    { name: 'Jalen Hurts', pos: ['QB'], team: 'Eagles', decade: '2020s', rating: 88, stats: { YDS: 3858, TD: 23, 'CMP%': '66.5' }, badges: [], synergies: [] },
    { name: 'Dak Prescott', pos: ['QB'], team: 'Cowboys', decade: '2020s', rating: 87, stats: { YDS: 4516, TD: 36, 'CMP%': '69.5' }, badges: [], synergies: [] },

    // ===== RUNNING BACKS =====
    // 1960s
    { name: 'Jim Brown', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 99, stats: { YDS: 1544, TD: 12, YPC: '5.2' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Gale Sayers', pos: ['RB'], team: 'Bears', decade: '1960s', rating: 94, stats: { YDS: 1231, TD: 14, YPC: '5.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Jim Taylor', pos: ['RB'], team: 'Packers', decade: '1960s', rating: 87, stats: { YDS: 1169, TD: 15, YPC: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Paul Hornung', pos: ['RB'], team: 'Packers', decade: '1960s', rating: 85, stats: { YDS: 681, TD: 13, YPC: '3.8' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Leroy Kelly', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 86, stats: { YDS: 1205, TD: 11, YPC: '4.7' }, badges: ['HOF'], synergies: [] },
    // 1970s
    { name: 'O.J. Simpson', pos: ['RB'], team: 'Bills', decade: '1970s', rating: 95, stats: { YDS: 1817, TD: 12, YPC: '5.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Walter Payton', pos: ['RB'], team: 'Bears', decade: '1970s', rating: 96, stats: { YDS: 1551, TD: 11, YPC: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Franco Harris', pos: ['RB'], team: 'Steelers', decade: '1970s', rating: 88, stats: { YDS: 1128, TD: 11, YPC: '4.2' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'Earl Campbell', pos: ['RB'], team: 'Titans', decade: '1970s', rating: 93, stats: { YDS: 1697, TD: 13, YPC: '4.6' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Chuck Foreman', pos: ['RB'], team: 'Vikings', decade: '1970s', rating: 84, stats: { YDS: 1112, TD: 13, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Larry Csonka', pos: ['RB'], team: 'Dolphins', decade: '1970s', rating: 87, stats: { YDS: 1117, TD: 9, YPC: '4.4' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    // 1980s
    { name: 'Eric Dickerson', pos: ['RB'], team: 'Rams', decade: '1980s', rating: 96, stats: { YDS: 1808, TD: 13, YPC: '4.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Walter Payton', pos: ['RB'], team: 'Bears', decade: '1980s', rating: 95, stats: { YDS: 1421, TD: 10, YPC: '4.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Tony Dorsett', pos: ['RB'], team: 'Cowboys', decade: '1980s', rating: 88, stats: { YDS: 1321, TD: 8, YPC: '4.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Marcus Allen', pos: ['RB'], team: 'Raiders', decade: '1980s', rating: 90, stats: { YDS: 1168, TD: 11, YPC: '4.2' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Roger Craig', pos: ['RB'], team: '49ers', decade: '1980s', rating: 87, stats: { YDS: 1138, TD: 9, YPC: '4.1' }, badges: [], synergies: [] },
    { name: 'John Riggins', pos: ['RB'], team: 'Commanders', decade: '1980s', rating: 86, stats: { YDS: 1239, TD: 14, YPC: '3.9' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    // 1990s
    { name: 'Barry Sanders', pos: ['RB'], team: 'Lions', decade: '1990s', rating: 98, stats: { YDS: 1527, TD: 11, YPC: '5.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Emmitt Smith', pos: ['RB'], team: 'Cowboys', decade: '1990s', rating: 95, stats: { YDS: 1484, TD: 14, YPC: '4.2' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'Terrell Davis', pos: ['RB'], team: 'Broncos', decade: '1990s', rating: 93, stats: { YDS: 1750, TD: 15, YPC: '4.7' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Marshall Faulk', pos: ['RB'], team: 'Rams', decade: '1990s', rating: 93, stats: { YDS: 1381, TD: 17, YPC: '4.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Curtis Martin', pos: ['RB'], team: 'Jets', decade: '1990s', rating: 88, stats: { YDS: 1287, TD: 10, YPC: '4.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Eddie George', pos: ['RB'], team: 'Titans', decade: '1990s', rating: 86, stats: { YDS: 1304, TD: 10, YPC: '3.7' }, badges: [], synergies: [] },
    // 2000s
    { name: 'LaDainian Tomlinson', pos: ['RB'], team: 'Chargers', decade: '2000s', rating: 96, stats: { YDS: 1474, TD: 17, YPC: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Priest Holmes', pos: ['RB'], team: 'Chiefs', decade: '2000s', rating: 89, stats: { YDS: 1420, TD: 21, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Shaun Alexander', pos: ['RB'], team: 'Seahawks', decade: '2000s', rating: 88, stats: { YDS: 1435, TD: 18, YPC: '4.3' }, badges: ['MVP'], synergies: [] },
    { name: 'Jamal Lewis', pos: ['RB'], team: 'Ravens', decade: '2000s', rating: 87, stats: { YDS: 1364, TD: 9, YPC: '4.2' }, badges: [], synergies: [] },
    { name: 'Clinton Portis', pos: ['RB'], team: 'Commanders', decade: '2000s', rating: 85, stats: { YDS: 1315, TD: 11, YPC: '4.3' }, badges: [], synergies: [] },
    { name: 'Edgerrin James', pos: ['RB'], team: 'Colts', decade: '2000s', rating: 90, stats: { YDS: 1506, TD: 12, YPC: '4.1' }, badges: ['HOF'], synergies: [] },
    // 2010s
    { name: 'Adrian Peterson', pos: ['RB'], team: 'Vikings', decade: '2010s', rating: 93, stats: { YDS: 1266, TD: 11, YPC: '4.6' }, badges: ['MVP'], synergies: [] },
    { name: 'Marshawn Lynch', pos: ['RB'], team: 'Seahawks', decade: '2010s', rating: 90, stats: { YDS: 1257, TD: 12, YPC: '4.3' }, badges: [], synergies: [] },
    { name: "Le'Veon Bell", pos: ['RB'], team: 'Steelers', decade: '2010s', rating: 89, stats: { YDS: 1291, TD: 9, YPC: '4.3' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Ezekiel Elliott', pos: ['RB'], team: 'Cowboys', decade: '2010s', rating: 87, stats: { YDS: 1434, TD: 12, YPC: '4.7' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Todd Gurley', pos: ['RB'], team: 'Rams', decade: '2010s', rating: 88, stats: { YDS: 1305, TD: 17, YPC: '4.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jamaal Charles', pos: ['RB'], team: 'Chiefs', decade: '2010s', rating: 87, stats: { YDS: 1287, TD: 12, YPC: '5.5' }, badges: [], synergies: [] },
    // 2020s
    { name: 'Derrick Henry', pos: ['RB'], team: 'Titans', decade: '2020s', rating: 92, stats: { YDS: 1538, TD: 13, YPC: '4.8' }, badges: [], synergies: [] },
    { name: 'Saquon Barkley', pos: ['RB'], team: 'Eagles', decade: '2020s', rating: 93, stats: { YDS: 2005, TD: 13, YPC: '5.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Christian McCaffrey', pos: ['RB'], team: '49ers', decade: '2020s', rating: 94, stats: { YDS: 1459, TD: 14, YPC: '5.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Josh Jacobs', pos: ['RB'], team: 'Packers', decade: '2020s', rating: 86, stats: { YDS: 1329, TD: 12, YPC: '4.7' }, badges: [], synergies: [] },
    { name: 'Breece Hall', pos: ['RB'], team: 'Jets', decade: '2020s', rating: 85, stats: { YDS: 1226, TD: 10, YPC: '4.5' }, badges: [], synergies: [] },
    { name: 'Jahmyr Gibbs', pos: ['RB'], team: 'Lions', decade: '2020s', rating: 87, stats: { YDS: 1412, TD: 15, YPC: '5.0' }, badges: [], synergies: [] },

    // ===== WIDE RECEIVERS =====
    // 1960s
    { name: 'Lance Alworth', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1960s', rating: 92, stats: { YDS: 1383, TD: 11, YPR: '19.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Charley Taylor', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1960s', rating: 86, stats: { YDS: 1119, TD: 9, YPR: '16.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Don Maynard', pos: ['WR1', 'WR2'], team: 'Jets', decade: '1960s', rating: 88, stats: { YDS: 1434, TD: 10, YPR: '18.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Paul Warfield', pos: ['WR1', 'WR2'], team: 'Browns', decade: '1960s', rating: 89, stats: { YDS: 1067, TD: 9, YPR: '20.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Bobby Mitchell', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1960s', rating: 84, stats: { YDS: 1101, TD: 8, YPR: '17.9' }, badges: ['HOF'], synergies: [] },
    { name: 'Otis Taylor', pos: ['WR1', 'WR2'], team: 'Chiefs', decade: '1960s', rating: 85, stats: { YDS: 1110, TD: 7, YPR: '18.9' }, badges: [], synergies: [] },
    // 1970s
    { name: 'Lynn Swann', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1970s', rating: 87, stats: { YDS: 820, TD: 7, YPR: '17.5' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'Drew Pearson', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { YDS: 962, TD: 6, YPR: '16.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Harold Carmichael', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '1970s', rating: 85, stats: { YDS: 1072, TD: 9, YPR: '16.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Cliff Branch', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1970s', rating: 86, stats: { YDS: 1036, TD: 9, YPR: '18.1' }, badges: ['HOF'], synergies: [] },
    { name: 'John Stallworth', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1970s', rating: 87, stats: { YDS: 946, TD: 8, YPR: '18.6' }, badges: ['HOF'], synergies: ['Steelers70s'] },
    { name: 'Charlie Joiner', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1970s', rating: 84, stats: { YDS: 980, TD: 6, YPR: '15.3' }, badges: ['HOF'], synergies: [] },
    // 1980s
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 99, stats: { YDS: 1364, TD: 13, YPR: '17.8' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice', 'Young_Rice'] },
    { name: 'Steve Largent', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '1980s', rating: 89, stats: { YDS: 1091, TD: 9, YPR: '15.4' }, badges: ['HOF'], synergies: [] },
    { name: 'James Lofton', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1980s', rating: 88, stats: { YDS: 1138, TD: 7, YPR: '18.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Art Monk', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1980s', rating: 87, stats: { YDS: 1028, TD: 7, YPR: '13.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Mark Clayton', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1980s', rating: 85, stats: { YDS: 1150, TD: 12, YPR: '16.0' }, badges: [], synergies: [] },
    { name: 'Gary Clark', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1980s', rating: 86, stats: { YDS: 1112, TD: 8, YPR: '15.7' }, badges: [], synergies: [] },
    // 1990s
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1990s', rating: 98, stats: { YDS: 1254, TD: 11, YPR: '15.1' }, badges: ['HOF', 'MVP'], synergies: ['Young_Rice'] },
    { name: 'Michael Irvin', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1990s', rating: 92, stats: { YDS: 1372, TD: 9, YPR: '16.2' }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Cris Carter', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1990s', rating: 91, stats: { YDS: 1163, TD: 12, YPR: '13.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Tim Brown', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1990s', rating: 89, stats: { YDS: 1165, TD: 8, YPR: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Herman Moore', pos: ['WR1', 'WR2'], team: 'Lions', decade: '1990s', rating: 87, stats: { YDS: 1293, TD: 10, YPR: '14.1' }, badges: [], synergies: [] },
    { name: 'Isaac Bruce', pos: ['WR1', 'WR2'], team: 'Rams', decade: '1990s', rating: 89, stats: { YDS: 1338, TD: 10, YPR: '16.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1990s', rating: 95, stats: { YDS: 1413, TD: 15, YPR: '18.3' }, badges: ['HOF'], synergies: ['Cunningham_Moss'] },
    // 2000s
    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Patriots', decade: '2000s', rating: 96, stats: { YDS: 1493, TD: 23, YPR: '17.0' }, badges: ['HOF'], synergies: ['Brady_Moss'] },
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2000s', rating: 93, stats: { YDS: 1200, TD: 13, YPR: '15.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Marvin Harrison', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2000s', rating: 95, stats: { YDS: 1366, TD: 14, YPR: '14.8' }, badges: ['HOF'], synergies: ['Manning_Harrison'] },
    { name: 'Andre Johnson', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2000s', rating: 90, stats: { YDS: 1281, TD: 8, YPR: '14.6' }, badges: [], synergies: [] },
    { name: 'Larry Fitzgerald', pos: ['WR1', 'WR2'], team: 'Cardinals', decade: '2000s', rating: 91, stats: { YDS: 1322, TD: 10, YPR: '15.1' }, badges: [], synergies: [] },
    { name: 'Reggie Wayne', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2000s', rating: 89, stats: { YDS: 1264, TD: 10, YPR: '14.2' }, badges: ['HOF'], synergies: ['Manning_Wayne'] },
    { name: 'Steve Smith', pos: ['WR1', 'WR2'], team: 'Panthers', decade: '2000s', rating: 90, stats: { YDS: 1311, TD: 9, YPR: '15.0' }, badges: [], synergies: [] },
    { name: 'Chad Johnson', pos: ['WR1', 'WR2'], team: 'Bengals', decade: '2000s', rating: 88, stats: { YDS: 1355, TD: 9, YPR: '14.5' }, badges: [], synergies: [] },
    // 2010s
    { name: 'Calvin Johnson', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2010s', rating: 95, stats: { YDS: 1681, TD: 11, YPR: '16.6' }, badges: ['HOF'], synergies: [] },
    { name: 'Julio Jones', pos: ['WR1', 'WR2'], team: 'Falcons', decade: '2010s', rating: 93, stats: { YDS: 1564, TD: 8, YPR: '15.2' }, badges: ['All-Pro'], synergies: ['Ryan_Julio'] },
    { name: 'Antonio Brown', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2010s', rating: 94, stats: { YDS: 1499, TD: 11, YPR: '13.5' }, badges: ['All-Pro'], synergies: [] },
    { name: 'DeAndre Hopkins', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2010s', rating: 91, stats: { YDS: 1378, TD: 11, YPR: '14.2' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Davante Adams', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2010s', rating: 93, stats: { YDS: 1374, TD: 14, YPR: '14.0' }, badges: ['All-Pro'], synergies: ['Rodgers_Adams'] },
    { name: 'Michael Thomas', pos: ['WR1', 'WR2'], team: 'Saints', decade: '2010s', rating: 90, stats: { YDS: 1503, TD: 9, YPR: '12.5' }, badges: ['All-Pro'], synergies: ['Brees_Thomas'] },
    { name: 'Odell Beckham Jr.', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2010s', rating: 89, stats: { YDS: 1367, TD: 12, YPR: '14.5' }, badges: [], synergies: [] },
    { name: 'Jordy Nelson', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2010s', rating: 88, stats: { YDS: 1257, TD: 13, YPR: '15.1' }, badges: [], synergies: ['Rodgers_Nelson'] },
    // 2020s
    { name: 'Justin Jefferson', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2020s', rating: 96, stats: { YDS: 1809, TD: 10, YPR: '15.3' }, badges: ['All-Pro'], synergies: [] },
    { name: "Ja'Marr Chase", pos: ['WR1', 'WR2'], team: 'Bengals', decade: '2020s', rating: 95, stats: { YDS: 1708, TD: 17, YPR: '16.5' }, badges: ['All-Pro'], synergies: ['Burrow_Chase'] },
    { name: 'Tyreek Hill', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '2020s', rating: 93, stats: { YDS: 1799, TD: 11, YPR: '14.1' }, badges: ['All-Pro'], synergies: [] },
    { name: 'CeeDee Lamb', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '2020s', rating: 92, stats: { YDS: 1749, TD: 12, YPR: '14.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Amon-Ra St. Brown', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2020s', rating: 89, stats: { YDS: 1515, TD: 10, YPR: '12.8' }, badges: [], synergies: [] },
    { name: 'A.J. Brown', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2020s', rating: 91, stats: { YDS: 1456, TD: 11, YPR: '15.8' }, badges: [], synergies: [] },
    { name: 'Puka Nacua', pos: ['WR1', 'WR2'], team: 'Rams', decade: '2020s', rating: 88, stats: { YDS: 1486, TD: 6, YPR: '13.2' }, badges: [], synergies: [] },
    { name: 'Malik Nabers', pos: ['WR1', 'WR2'], team: 'Giants', decade: '2020s', rating: 87, stats: { YDS: 1204, TD: 7, YPR: '13.7' }, badges: [], synergies: [] },

    // ===== TIGHT ENDS =====
    // 1960s
    { name: 'Mike Ditka', pos: ['TE'], team: 'Bears', decade: '1960s', rating: 89, stats: { YDS: 897, TD: 7, YPR: '14.2' }, badges: ['HOF'], synergies: [] },
    { name: 'John Mackey', pos: ['TE'], team: 'Colts', decade: '1960s', rating: 91, stats: { YDS: 829, TD: 7, YPR: '15.8' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Jackie Smith', pos: ['TE'], team: 'Cardinals', decade: '1960s', rating: 85, stats: { YDS: 798, TD: 5, YPR: '16.3' }, badges: ['HOF'], synergies: [] },
    // 1970s
    { name: 'Dave Casper', pos: ['TE'], team: 'Raiders', decade: '1970s', rating: 88, stats: { YDS: 768, TD: 6, YPR: '15.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Charlie Sanders', pos: ['TE'], team: 'Lions', decade: '1970s', rating: 86, stats: { YDS: 681, TD: 5, YPR: '14.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Riley Odoms', pos: ['TE'], team: 'Broncos', decade: '1970s', rating: 82, stats: { YDS: 619, TD: 4, YPR: '13.2' }, badges: [], synergies: [] },
    // 1980s
    { name: 'Kellen Winslow', pos: ['TE'], team: 'Chargers', decade: '1980s', rating: 92, stats: { YDS: 1075, TD: 6, YPR: '13.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Ozzie Newsome', pos: ['TE'], team: 'Browns', decade: '1980s', rating: 88, stats: { YDS: 784, TD: 5, YPR: '12.6' }, badges: ['HOF'], synergies: [] },
    { name: 'Todd Christensen', pos: ['TE'], team: 'Raiders', decade: '1980s', rating: 85, stats: { YDS: 922, TD: 8, YPR: '11.5' }, badges: [], synergies: [] },
    // 1990s
    { name: 'Shannon Sharpe', pos: ['TE'], team: 'Broncos', decade: '1990s', rating: 91, stats: { YDS: 1062, TD: 7, YPR: '12.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Ben Coates', pos: ['TE'], team: 'Patriots', decade: '1990s', rating: 87, stats: { YDS: 902, TD: 7, YPR: '11.8' }, badges: [], synergies: [] },
    { name: 'Jay Novacek', pos: ['TE'], team: 'Cowboys', decade: '1990s', rating: 84, stats: { YDS: 705, TD: 5, YPR: '11.0' }, badges: [], synergies: ['Cowboys90s'] },
    { name: 'Tony Gonzalez', pos: ['TE'], team: 'Chiefs', decade: '1990s', rating: 90, stats: { YDS: 948, TD: 7, YPR: '12.1' }, badges: ['HOF'], synergies: [] },
    // 2000s
    { name: 'Tony Gonzalez', pos: ['TE'], team: 'Chiefs', decade: '2000s', rating: 95, stats: { YDS: 1103, TD: 8, YPR: '12.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Antonio Gates', pos: ['TE'], team: 'Chargers', decade: '2000s', rating: 92, stats: { YDS: 964, TD: 10, YPR: '12.1' }, badges: [], synergies: [] },
    { name: 'Jason Witten', pos: ['TE'], team: 'Cowboys', decade: '2000s', rating: 89, stats: { YDS: 962, TD: 6, YPR: '11.3' }, badges: [], synergies: [] },
    { name: 'Todd Heap', pos: ['TE'], team: 'Ravens', decade: '2000s', rating: 83, stats: { YDS: 753, TD: 6, YPR: '11.7' }, badges: [], synergies: [] },
    // 2010s
    { name: 'Rob Gronkowski', pos: ['TE'], team: 'Patriots', decade: '2010s', rating: 97, stats: { YDS: 1108, TD: 12, YPR: '15.4' }, badges: ['HOF'], synergies: ['Brady_Gronk'] },
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2010s', rating: 95, stats: { YDS: 1229, TD: 10, YPR: '12.0' }, badges: [], synergies: ['Mahomes_Kelce'] },
    { name: 'George Kittle', pos: ['TE'], team: '49ers', decade: '2010s', rating: 91, stats: { YDS: 1148, TD: 5, YPR: '14.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Zach Ertz', pos: ['TE'], team: 'Eagles', decade: '2010s', rating: 86, stats: { YDS: 916, TD: 6, YPR: '10.8' }, badges: [], synergies: [] },
    // 2020s
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2020s', rating: 94, stats: { YDS: 1066, TD: 9, YPR: '11.3' }, badges: ['All-Pro'], synergies: ['Mahomes_Kelce'] },
    { name: 'Mark Andrews', pos: ['TE'], team: 'Ravens', decade: '2020s', rating: 88, stats: { YDS: 847, TD: 9, YPR: '12.0' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Sam LaPorta', pos: ['TE'], team: 'Lions', decade: '2020s', rating: 85, stats: { YDS: 889, TD: 10, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Brock Bowers', pos: ['TE'], team: 'Raiders', decade: '2020s', rating: 88, stats: { YDS: 1194, TD: 5, YPR: '11.2' }, badges: [], synergies: [] },
    { name: 'Trey McBride', pos: ['TE'], team: 'Cardinals', decade: '2020s', rating: 86, stats: { YDS: 1146, TD: 4, YPR: '11.7' }, badges: [], synergies: [] },

    // ===== EDGE RUSHERS =====
    // 1960s
    { name: 'Deacon Jones', pos: ['EDGE'], team: 'Rams', decade: '1960s', rating: 97, stats: { SACKS: '22*', FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Gino Marchetti', pos: ['EDGE'], team: 'Colts', decade: '1960s', rating: 91, stats: { SACKS: '14*', FF: 2 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Davis', pos: ['EDGE'], team: 'Packers', decade: '1960s', rating: 89, stats: { SACKS: '12*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Doug Atkins', pos: ['EDGE'], team: 'Bears', decade: '1960s', rating: 88, stats: { SACKS: '11*', FF: 2 }, badges: ['HOF'], synergies: [] },
    // 1970s
    { name: 'Joe Greene', pos: ['EDGE'], team: 'Steelers', decade: '1970s', rating: 96, stats: { SACKS: '13*', FF: 4 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Carl Eller', pos: ['EDGE'], team: 'Vikings', decade: '1970s', rating: 91, stats: { SACKS: '15*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Jack Youngblood', pos: ['EDGE'], team: 'Rams', decade: '1970s', rating: 90, stats: { SACKS: '14*', FF: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Too Tall Jones', pos: ['EDGE'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { SACKS: '12*', FF: 3 }, badges: [], synergies: [] },
    { name: 'Lyle Alzado', pos: ['EDGE'], team: 'Broncos', decade: '1970s', rating: 84, stats: { SACKS: '11*', FF: 2 }, badges: [], synergies: [] },
    // 1980s
    { name: 'Lawrence Taylor', pos: ['EDGE'], team: 'Giants', decade: '1980s', rating: 99, stats: { SACKS: 15.5, FF: 4 }, badges: ['HOF', 'MVP', 'DPOY'], synergies: [] },
    { name: 'Reggie White', pos: ['EDGE'], team: 'Eagles', decade: '1980s', rating: 97, stats: { SACKS: 18, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Howie Long', pos: ['EDGE'], team: 'Raiders', decade: '1980s', rating: 90, stats: { SACKS: 12, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Mark Gastineau', pos: ['EDGE'], team: 'Jets', decade: '1980s', rating: 88, stats: { SACKS: 19, FF: 2 }, badges: [], synergies: [] },
    { name: 'Richard Dent', pos: ['EDGE'], team: 'Bears', decade: '1980s', rating: 89, stats: { SACKS: 14.5, FF: 4 }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Andre Tippett', pos: ['EDGE'], team: 'Patriots', decade: '1980s', rating: 87, stats: { SACKS: 14, FF: 3 }, badges: ['HOF'], synergies: [] },
    // 1990s
    { name: 'Reggie White', pos: ['EDGE'], team: 'Packers', decade: '1990s', rating: 96, stats: { SACKS: 14, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Bruce Smith', pos: ['EDGE'], team: 'Bills', decade: '1990s', rating: 95, stats: { SACKS: 13.5, FF: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Kevin Greene', pos: ['EDGE'], team: 'Panthers', decade: '1990s', rating: 90, stats: { SACKS: 14, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Derrick Thomas', pos: ['EDGE'], team: 'Chiefs', decade: '1990s', rating: 92, stats: { SACKS: 14.5, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Charles Haley', pos: ['EDGE'], team: 'Cowboys', decade: '1990s', rating: 89, stats: { SACKS: 11, FF: 3 }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Chris Doleman', pos: ['EDGE'], team: 'Vikings', decade: '1990s', rating: 88, stats: { SACKS: 12.5, FF: 3 }, badges: ['HOF'], synergies: [] },
    // 2000s
    { name: 'Michael Strahan', pos: ['EDGE'], team: 'Giants', decade: '2000s', rating: 94, stats: { SACKS: 14.5, FF: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Dwight Freeney', pos: ['EDGE'], team: 'Colts', decade: '2000s', rating: 91, stats: { SACKS: 13, FF: 6 }, badges: [], synergies: [] },
    { name: 'Julius Peppers', pos: ['EDGE'], team: 'Panthers', decade: '2000s', rating: 91, stats: { SACKS: 13.5, FF: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Jason Taylor', pos: ['EDGE'], team: 'Dolphins', decade: '2000s', rating: 91, stats: { SACKS: 12, FF: 5 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Jared Allen', pos: ['EDGE'], team: 'Vikings', decade: '2000s', rating: 90, stats: { SACKS: 15.5, FF: 5 }, badges: ['HOF'], synergies: [] },
    { name: 'DeMarcus Ware', pos: ['EDGE'], team: 'Cowboys', decade: '2000s', rating: 92, stats: { SACKS: 15.5, FF: 4 }, badges: ['HOF'], synergies: [] },
    // 2010s
    { name: 'J.J. Watt', pos: ['EDGE'], team: 'Texans', decade: '2010s', rating: 97, stats: { SACKS: 17.5, FF: 5 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Von Miller', pos: ['EDGE'], team: 'Broncos', decade: '2010s', rating: 93, stats: { SACKS: 14.5, FF: 3 }, badges: ['SB MVP'], synergies: [] },
    { name: 'Khalil Mack', pos: ['EDGE'], team: 'Raiders', decade: '2010s', rating: 92, stats: { SACKS: 15, FF: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Cameron Jordan', pos: ['EDGE'], team: 'Saints', decade: '2010s', rating: 89, stats: { SACKS: 13, FF: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Chandler Jones', pos: ['EDGE'], team: 'Cardinals', decade: '2010s', rating: 88, stats: { SACKS: 14, FF: 5 }, badges: [], synergies: [] },
    { name: 'Calais Campbell', pos: ['EDGE'], team: 'Jaguars', decade: '2010s', rating: 87, stats: { SACKS: 12, FF: 4 }, badges: [], synergies: [] },
    // 2020s
    { name: 'Myles Garrett', pos: ['EDGE'], team: 'Browns', decade: '2020s', rating: 95, stats: { SACKS: 16, FF: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Micah Parsons', pos: ['EDGE'], team: 'Cowboys', decade: '2020s', rating: 95, stats: { SACKS: 14, FF: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'Nick Bosa', pos: ['EDGE'], team: '49ers', decade: '2020s', rating: 95, stats: { SACKS: 15.5, FF: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'T.J. Watt', pos: ['EDGE'], team: 'Steelers', decade: '2020s', rating: 96, stats: { SACKS: 17.5, FF: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Maxx Crosby', pos: ['EDGE'], team: 'Raiders', decade: '2020s', rating: 91, stats: { SACKS: 13, FF: 4 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Trey Hendrickson', pos: ['EDGE'], team: 'Bengals', decade: '2020s', rating: 89, stats: { SACKS: 14, FF: 3 }, badges: ['All-Pro'], synergies: [] },

    // ===== DEFENSIVE BACKS =====
    // 1960s
    { name: 'Herb Adderley', pos: ['DB'], team: 'Packers', decade: '1960s', rating: 90, stats: { INT: 7, PD: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Brown', pos: ['DB'], team: 'Raiders', decade: '1960s', rating: 89, stats: { INT: 6, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Dick LeBeau', pos: ['DB'], team: 'Lions', decade: '1960s', rating: 87, stats: { INT: 7, PD: 11 }, badges: ['HOF'], synergies: [] },
    { name: 'Emlen Tunnell', pos: ['DB'], team: 'Giants', decade: '1960s', rating: 88, stats: { INT: 6, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Lem Barney', pos: ['DB'], team: 'Lions', decade: '1960s', rating: 88, stats: { INT: 8, PD: 12 }, badges: ['HOF'], synergies: [] },
    // 1970s
    { name: 'Mel Blount', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 93, stats: { INT: 6, PD: 15 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Jack Tatum', pos: ['DB'], team: 'Raiders', decade: '1970s', rating: 88, stats: { INT: 5, PD: 12 }, badges: [], synergies: [] },
    { name: 'Ken Riley', pos: ['DB'], team: 'Bengals', decade: '1970s', rating: 86, stats: { INT: 7, PD: 11 }, badges: [], synergies: [] },
    { name: 'Roger Wehrli', pos: ['DB'], team: 'Cardinals', decade: '1970s', rating: 87, stats: { INT: 6, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Jimmy Johnson', pos: ['DB'], team: '49ers', decade: '1970s', rating: 86, stats: { INT: 6, PD: 12 }, badges: ['HOF'], synergies: [] },
    // 1980s
    { name: 'Ronnie Lott', pos: ['DB'], team: '49ers', decade: '1980s', rating: 97, stats: { INT: 8, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Mike Haynes', pos: ['DB'], team: 'Raiders', decade: '1980s', rating: 92, stats: { INT: 6, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Darrell Green', pos: ['DB'], team: 'Commanders', decade: '1980s', rating: 90, stats: { INT: 5, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Kenny Easley', pos: ['DB'], team: 'Seahawks', decade: '1980s', rating: 91, stats: { INT: 7, PD: 13 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Eric Allen', pos: ['DB'], team: 'Eagles', decade: '1980s', rating: 85, stats: { INT: 6, PD: 12 }, badges: [], synergies: [] },
    // 1990s
    { name: 'Deion Sanders', pos: ['DB'], team: 'Cowboys', decade: '1990s', rating: 98, stats: { INT: 6, PD: 18 }, badges: ['HOF', 'DPOY'], synergies: ['Cowboys90s'] },
    { name: 'Rod Woodson', pos: ['DB'], team: 'Steelers', decade: '1990s', rating: 95, stats: { INT: 7, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Charles Woodson', pos: ['DB'], team: 'Raiders', decade: '1990s', rating: 88, stats: { INT: 5, PD: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Aeneas Williams', pos: ['DB'], team: 'Cardinals', decade: '1990s', rating: 90, stats: { INT: 7, PD: 15 }, badges: ['HOF'], synergies: [] },
    { name: 'Darrell Green', pos: ['DB'], team: 'Commanders', decade: '1990s', rating: 89, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    { name: 'Ty Law', pos: ['DB'], team: 'Patriots', decade: '1990s', rating: 87, stats: { INT: 6, PD: 14 }, badges: ['HOF'], synergies: [] },
    // 2000s
    { name: 'Ed Reed', pos: ['DB'], team: 'Ravens', decade: '2000s', rating: 97, stats: { INT: 8, PD: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Charles Woodson', pos: ['DB'], team: 'Packers', decade: '2000s', rating: 93, stats: { INT: 7, PD: 15 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Troy Polamalu', pos: ['DB'], team: 'Steelers', decade: '2000s', rating: 93, stats: { INT: 6, PD: 14 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Darrelle Revis', pos: ['DB'], team: 'Jets', decade: '2000s', rating: 93, stats: { INT: 5, PD: 18 }, badges: ['HOF'], synergies: [] },
    { name: 'Champ Bailey', pos: ['DB'], team: 'Broncos', decade: '2000s', rating: 94, stats: { INT: 6, PD: 17 }, badges: ['HOF'], synergies: [] },
    { name: 'Ronde Barber', pos: ['DB'], team: 'Buccaneers', decade: '2000s', rating: 87, stats: { INT: 5, PD: 13 }, badges: ['HOF'], synergies: [] },
    // 2010s
    { name: 'Richard Sherman', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 93, stats: { INT: 6, PD: 16 }, badges: [], synergies: [] },
    { name: 'Patrick Peterson', pos: ['DB'], team: 'Cardinals', decade: '2010s', rating: 89, stats: { INT: 5, PD: 15 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Jalen Ramsey', pos: ['DB'], team: 'Jaguars', decade: '2010s', rating: 92, stats: { INT: 4, PD: 16 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Earl Thomas', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 92, stats: { INT: 5, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tyrann Mathieu', pos: ['DB'], team: 'Cardinals', decade: '2010s', rating: 87, stats: { INT: 5, PD: 13 }, badges: [], synergies: [] },
    { name: 'Marcus Peters', pos: ['DB'], team: 'Chiefs', decade: '2010s', rating: 86, stats: { INT: 7, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    // 2020s
    { name: 'Sauce Gardner', pos: ['DB'], team: 'Jets', decade: '2020s', rating: 94, stats: { INT: 5, PD: 18 }, badges: ['DPOY'], synergies: [] },
    { name: 'Trevon Diggs', pos: ['DB'], team: 'Cowboys', decade: '2020s', rating: 88, stats: { INT: 8, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Derwin James', pos: ['DB'], team: 'Chargers', decade: '2020s', rating: 89, stats: { INT: 4, PD: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Kyle Hamilton', pos: ['DB'], team: 'Ravens', decade: '2020s', rating: 91, stats: { INT: 5, PD: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Devon Witherspoon', pos: ['DB'], team: 'Seahawks', decade: '2020s', rating: 89, stats: { INT: 4, PD: 15 }, badges: [], synergies: [] },
    { name: 'Jevon Holland', pos: ['DB'], team: 'Dolphins', decade: '2020s', rating: 86, stats: { INT: 4, PD: 11 }, badges: [], synergies: [] },
];

// Synergy definitions
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
    'Cowboys90s': { label: '90s Cowboys Dynasty', bonus: 2, players: ['Troy Aikman', 'Emmitt Smith', 'Michael Irvin', 'Deion Sanders', 'Charles Haley', 'Jay Novacek'] },
    'Steelers70s': { label: '70s Steel Curtain', bonus: 2, players: ['Terry Bradshaw', 'Franco Harris', 'Lynn Swann', 'John Stallworth', 'Joe Greene', 'Mel Blount'] },
};

function getRandomTeamForPosition(position, usedDecades) {
    const posKey = position === 'WR1' || position === 'WR2' ? ['WR1', 'WR2'] : [position];
    const availableDecades = DECADES.filter(d => !usedDecades.includes(d));

    if (availableDecades.length === 0) return null;

    const decade = availableDecades[Math.floor(Math.random() * availableDecades.length)];
    const allPlayersInEra = PLAYER_DB.filter(p =>
        p.decade === decade &&
        p.pos.some(pp => posKey.includes(pp))
    );

    if (allPlayersInEra.length === 0) return null;

    const teamsInPool = [...new Set(allPlayersInEra.map(p => p.team))];
    const team = teamsInPool[Math.floor(Math.random() * teamsInPool.length)];

    return { team, decade, players: allPlayersInEra };
}
