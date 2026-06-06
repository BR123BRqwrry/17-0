// NFL Player Database
// Each player has: name, position(s), team, decade, rating, stats, badges, synergies

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
    // QUARTERBACKS
    { name: 'Johnny Unitas', pos: ['QB'], team: 'Colts', decade: '1960s', rating: 92, stats: { yards: 2830, td: 20, comp: '54.6%' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Bart Starr', pos: ['QB'], team: 'Packers', decade: '1960s', rating: 90, stats: { yards: 2257, td: 16, comp: '57.4%' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Joe Namath', pos: ['QB'], team: 'Jets', decade: '1960s', rating: 84, stats: { yards: 3147, td: 19, comp: '50.1%' }, badges: ['HOF'], synergies: [] },
    { name: 'Sonny Jurgensen', pos: ['QB'], team: 'Commanders', decade: '1960s', rating: 86, stats: { yards: 3209, td: 25, comp: '56.5%' }, badges: ['HOF'], synergies: [] },
    { name: 'Fran Tarkenton', pos: ['QB'], team: 'Vikings', decade: '1970s', rating: 88, stats: { yards: 2994, td: 20, comp: '56.0%' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Roger Staubach', pos: ['QB'], team: 'Cowboys', decade: '1970s', rating: 90, stats: { yards: 2620, td: 18, comp: '57.0%' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Terry Bradshaw', pos: ['QB'], team: 'Steelers', decade: '1970s', rating: 87, stats: { yards: 2915, td: 20, comp: '51.9%' }, badges: ['HOF', 'MVP'], synergies: ['Steelers70s'] },
    { name: 'Ken Stabler', pos: ['QB'], team: 'Raiders', decade: '1970s', rating: 85, stats: { yards: 2737, td: 19, comp: '59.3%' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Bob Griese', pos: ['QB'], team: 'Dolphins', decade: '1970s', rating: 86, stats: { yards: 1890, td: 13, comp: '56.2%' }, badges: ['HOF'], synergies: [] },
    { name: 'Joe Montana', pos: ['QB'], team: '49ers', decade: '1980s', rating: 97, stats: { yards: 3521, td: 26, comp: '63.7%' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice'] },
    { name: 'Dan Marino', pos: ['QB'], team: 'Dolphins', decade: '1980s', rating: 95, stats: { yards: 4746, td: 38, comp: '59.3%' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1980s', rating: 92, stats: { yards: 3485, td: 22, comp: '56.3%' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Warren Moon', pos: ['QB'], team: 'Titans', decade: '1980s', rating: 87, stats: { yards: 3520, td: 23, comp: '58.4%' }, badges: ['HOF'], synergies: [] },
    { name: 'Dan Fouts', pos: ['QB'], team: 'Chargers', decade: '1980s', rating: 88, stats: { yards: 4082, td: 27, comp: '58.8%' }, badges: ['HOF'], synergies: [] },
    { name: 'Steve Young', pos: ['QB'], team: '49ers', decade: '1990s', rating: 95, stats: { yards: 3029, td: 25, comp: '64.3%' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Young_Rice'] },
    { name: 'Troy Aikman', pos: ['QB'], team: 'Cowboys', decade: '1990s', rating: 89, stats: { yards: 3191, td: 19, comp: '61.5%' }, badges: ['HOF', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'Brett Favre', pos: ['QB'], team: 'Packers', decade: '1990s', rating: 93, stats: { yards: 3882, td: 33, comp: '61.7%' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'John Elway', pos: ['QB'], team: 'Broncos', decade: '1990s', rating: 91, stats: { yards: 3328, td: 22, comp: '57.1%' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Peyton Manning', pos: ['QB'], team: 'Colts', decade: '2000s', rating: 97, stats: { yards: 4413, td: 33, comp: '65.0%' }, badges: ['HOF', 'MVP'], synergies: ['Manning_Harrison'] },
    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2000s', rating: 96, stats: { yards: 3997, td: 30, comp: '63.0%' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Moss', 'Brady_Gronk'] },
    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2000s', rating: 93, stats: { yards: 4888, td: 34, comp: '66.2%' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Aaron Rodgers', pos: ['QB'], team: 'Packers', decade: '2010s', rating: 96, stats: { yards: 4002, td: 35, comp: '65.8%' }, badges: ['MVP'], synergies: ['Rodgers_Adams'] },
    { name: 'Tom Brady', pos: ['QB'], team: 'Patriots', decade: '2010s', rating: 95, stats: { yards: 4355, td: 32, comp: '64.0%' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Brady_Gronk'] },
    { name: 'Russell Wilson', pos: ['QB'], team: 'Seahawks', decade: '2010s', rating: 89, stats: { yards: 3580, td: 28, comp: '64.5%' }, badges: ['SB'], synergies: [] },
    { name: 'Drew Brees', pos: ['QB'], team: 'Saints', decade: '2010s', rating: 93, stats: { yards: 4762, td: 33, comp: '69.0%' }, badges: ['HOF'], synergies: [] },
    { name: 'Patrick Mahomes', pos: ['QB'], team: 'Chiefs', decade: '2020s', rating: 98, stats: { yards: 4839, td: 37, comp: '66.3%' }, badges: ['MVP', 'SB MVP'], synergies: ['Mahomes_Kelce'] },
    { name: 'Josh Allen', pos: ['QB'], team: 'Bills', decade: '2020s', rating: 93, stats: { yards: 4306, td: 35, comp: '63.3%' }, badges: [], synergies: [] },
    { name: 'Joe Burrow', pos: ['QB'], team: 'Bengals', decade: '2020s', rating: 91, stats: { yards: 4475, td: 35, comp: '68.2%' }, badges: [], synergies: [] },
    { name: 'Lamar Jackson', pos: ['QB'], team: 'Ravens', decade: '2020s', rating: 93, stats: { yards: 3678, td: 27, comp: '64.2%' }, badges: ['MVP'], synergies: [] },
    { name: 'Jalen Hurts', pos: ['QB'], team: 'Eagles', decade: '2020s', rating: 88, stats: { yards: 3858, td: 23, comp: '66.5%' }, badges: [], synergies: [] },

    // RUNNING BACKS
    { name: 'Jim Brown', pos: ['RB'], team: 'Browns', decade: '1960s', rating: 98, stats: { yards: 1544, td: 12, ypc: '5.2' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Gale Sayers', pos: ['RB'], team: 'Bears', decade: '1960s', rating: 93, stats: { yards: 1231, td: 14, ypc: '5.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Jim Taylor', pos: ['RB'], team: 'Packers', decade: '1960s', rating: 87, stats: { yards: 1169, td: 15, ypc: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'O.J. Simpson', pos: ['RB'], team: 'Bills', decade: '1970s', rating: 94, stats: { yards: 1817, td: 12, ypc: '5.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Walter Payton', pos: ['RB'], team: 'Bears', decade: '1970s', rating: 96, stats: { yards: 1551, td: 11, ypc: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Franco Harris', pos: ['RB'], team: 'Steelers', decade: '1970s', rating: 88, stats: { yards: 1128, td: 11, ypc: '4.2' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'Earl Campbell', pos: ['RB'], team: 'Titans', decade: '1970s', rating: 92, stats: { yards: 1697, td: 13, ypc: '4.6' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Tony Dorsett', pos: ['RB'], team: 'Cowboys', decade: '1980s', rating: 88, stats: { yards: 1321, td: 8, ypc: '4.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Eric Dickerson', pos: ['RB'], team: 'Rams', decade: '1980s', rating: 95, stats: { yards: 1808, td: 13, ypc: '4.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Walter Payton', pos: ['RB'], team: 'Bears', decade: '1980s', rating: 95, stats: { yards: 1421, td: 10, ypc: '4.3' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Marcus Allen', pos: ['RB'], team: 'Raiders', decade: '1980s', rating: 89, stats: { yards: 1168, td: 11, ypc: '4.2' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Barry Sanders', pos: ['RB'], team: 'Lions', decade: '1990s', rating: 97, stats: { yards: 1527, td: 11, ypc: '5.0' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Emmitt Smith', pos: ['RB'], team: 'Cowboys', decade: '1990s', rating: 95, stats: { yards: 1484, td: 14, ypc: '4.2' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Cowboys90s'] },
    { name: 'Terrell Davis', pos: ['RB'], team: 'Broncos', decade: '1990s', rating: 92, stats: { yards: 1750, td: 15, ypc: '4.7' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: [] },
    { name: 'Marshall Faulk', pos: ['RB'], team: 'Rams', decade: '1990s', rating: 93, stats: { yards: 1381, td: 17, ypc: '4.7' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'LaDainian Tomlinson', pos: ['RB'], team: 'Chargers', decade: '2000s', rating: 95, stats: { yards: 1474, td: 17, ypc: '4.4' }, badges: ['HOF', 'MVP'], synergies: [] },
    { name: 'Priest Holmes', pos: ['RB'], team: 'Chiefs', decade: '2000s', rating: 89, stats: { yards: 1420, td: 21, ypc: '4.5' }, badges: [], synergies: [] },
    { name: 'Shaun Alexander', pos: ['RB'], team: 'Seahawks', decade: '2000s', rating: 88, stats: { yards: 1435, td: 18, ypc: '4.3' }, badges: ['MVP'], synergies: [] },
    { name: 'Jamal Lewis', pos: ['RB'], team: 'Ravens', decade: '2000s', rating: 87, stats: { yards: 1364, td: 9, ypc: '4.2' }, badges: [], synergies: [] },
    { name: 'Adrian Peterson', pos: ['RB'], team: 'Vikings', decade: '2010s', rating: 93, stats: { yards: 1266, td: 11, ypc: '4.6' }, badges: ['MVP'], synergies: [] },
    { name: 'Marshawn Lynch', pos: ['RB'], team: 'Seahawks', decade: '2010s', rating: 89, stats: { yards: 1257, td: 12, ypc: '4.3' }, badges: [], synergies: [] },
    { name: 'Le\'Veon Bell', pos: ['RB'], team: 'Steelers', decade: '2010s', rating: 88, stats: { yards: 1291, td: 9, ypc: '4.3' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Ezekiel Elliott', pos: ['RB'], team: 'Cowboys', decade: '2010s', rating: 87, stats: { yards: 1434, td: 12, ypc: '4.7' }, badges: [], synergies: [] },
    { name: 'Derrick Henry', pos: ['RB'], team: 'Titans', decade: '2020s', rating: 92, stats: { yards: 1538, td: 13, ypc: '4.8' }, badges: [], synergies: [] },
    { name: 'Saquon Barkley', pos: ['RB'], team: 'Eagles', decade: '2020s', rating: 91, stats: { yards: 2005, td: 13, ypc: '5.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Christian McCaffrey', pos: ['RB'], team: '49ers', decade: '2020s', rating: 93, stats: { yards: 1459, td: 14, ypc: '5.4' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Josh Jacobs', pos: ['RB'], team: 'Packers', decade: '2020s', rating: 86, stats: { yards: 1329, td: 12, ypc: '4.7' }, badges: [], synergies: [] },

    // WIDE RECEIVERS
    { name: 'Don Hutson', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1960s', rating: 88, stats: { yards: 851, td: 9, ypr: '17.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Charley Taylor', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1960s', rating: 85, stats: { yards: 1119, td: 9, ypr: '16.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Lance Alworth', pos: ['WR1', 'WR2'], team: 'Chargers', decade: '1960s', rating: 91, stats: { yards: 1383, td: 11, ypr: '19.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Paul Warfield', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '1970s', rating: 88, stats: { yards: 891, td: 8, ypr: '20.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Lynn Swann', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '1970s', rating: 86, stats: { yards: 820, td: 7, ypr: '17.5' }, badges: ['HOF', 'SB MVP'], synergies: ['Steelers70s'] },
    { name: 'Drew Pearson', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1970s', rating: 85, stats: { yards: 962, td: 6, ypr: '16.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Harold Carmichael', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '1970s', rating: 84, stats: { yards: 1072, td: 9, ypr: '16.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1980s', rating: 99, stats: { yards: 1364, td: 13, ypr: '17.8' }, badges: ['HOF', 'MVP', 'SB MVP'], synergies: ['Montana_Rice', 'Young_Rice'] },
    { name: 'Steve Largent', pos: ['WR1', 'WR2'], team: 'Seahawks', decade: '1980s', rating: 88, stats: { yards: 1091, td: 9, ypr: '15.4' }, badges: ['HOF'], synergies: [] },
    { name: 'James Lofton', pos: ['WR1', 'WR2'], team: 'Packers', decade: '1980s', rating: 87, stats: { yards: 1138, td: 7, ypr: '18.3' }, badges: ['HOF'], synergies: [] },
    { name: 'Art Monk', pos: ['WR1', 'WR2'], team: 'Commanders', decade: '1980s', rating: 86, stats: { yards: 1028, td: 7, ypr: '13.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Michael Irvin', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '1990s', rating: 91, stats: { yards: 1372, td: 9, ypr: '16.2' }, badges: ['HOF'], synergies: ['Cowboys90s'] },
    { name: 'Cris Carter', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '1990s', rating: 90, stats: { yards: 1163, td: 12, ypr: '13.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Tim Brown', pos: ['WR1', 'WR2'], team: 'Raiders', decade: '1990s', rating: 88, stats: { yards: 1165, td: 8, ypr: '14.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Herman Moore', pos: ['WR1', 'WR2'], team: 'Lions', decade: '1990s', rating: 87, stats: { yards: 1293, td: 10, ypr: '14.1' }, badges: [], synergies: [] },
    { name: 'Jerry Rice', pos: ['WR1', 'WR2'], team: '49ers', decade: '1990s', rating: 98, stats: { yards: 1254, td: 11, ypr: '15.1' }, badges: ['HOF', 'MVP'], synergies: ['Young_Rice'] },
    { name: 'Randy Moss', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2000s', rating: 96, stats: { yards: 1347, td: 15, ypr: '17.0' }, badges: ['HOF'], synergies: ['Brady_Moss'] },
    { name: 'Terrell Owens', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2000s', rating: 93, stats: { yards: 1200, td: 13, ypr: '15.2' }, badges: ['HOF'], synergies: [] },
    { name: 'Marvin Harrison', pos: ['WR1', 'WR2'], team: 'Colts', decade: '2000s', rating: 94, stats: { yards: 1366, td: 14, ypr: '14.8' }, badges: ['HOF'], synergies: ['Manning_Harrison'] },
    { name: 'Andre Johnson', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2000s', rating: 89, stats: { yards: 1281, td: 8, ypr: '14.6' }, badges: [], synergies: [] },
    { name: 'Larry Fitzgerald', pos: ['WR1', 'WR2'], team: 'Cardinals', decade: '2000s', rating: 91, stats: { yards: 1322, td: 10, ypr: '15.1' }, badges: [], synergies: [] },
    { name: 'Calvin Johnson', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2010s', rating: 94, stats: { yards: 1681, td: 11, ypr: '16.6' }, badges: ['HOF', 'All-Pro'], synergies: [] },
    { name: 'Julio Jones', pos: ['WR1', 'WR2'], team: 'Falcons', decade: '2010s', rating: 92, stats: { yards: 1564, td: 8, ypr: '15.2' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Antonio Brown', pos: ['WR1', 'WR2'], team: 'Steelers', decade: '2010s', rating: 93, stats: { yards: 1499, td: 11, ypr: '13.5' }, badges: ['All-Pro'], synergies: [] },
    { name: 'DeAndre Hopkins', pos: ['WR1', 'WR2'], team: 'Texans', decade: '2010s', rating: 91, stats: { yards: 1378, td: 11, ypr: '14.2' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Davante Adams', pos: ['WR1', 'WR2'], team: 'Packers', decade: '2010s', rating: 92, stats: { yards: 1374, td: 14, ypr: '14.0' }, badges: ['All-Pro'], synergies: ['Rodgers_Adams'] },
    { name: 'Tyreek Hill', pos: ['WR1', 'WR2'], team: 'Dolphins', decade: '2020s', rating: 93, stats: { yards: 1799, td: 11, ypr: '14.1' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Justin Jefferson', pos: ['WR1', 'WR2'], team: 'Vikings', decade: '2020s', rating: 95, stats: { yards: 1809, td: 10, ypr: '15.3' }, badges: ['All-Pro'], synergies: [] },
    { name: "Ja'Marr Chase", pos: ['WR1', 'WR2'], team: 'Bengals', decade: '2020s', rating: 94, stats: { yards: 1708, td: 17, ypr: '16.5' }, badges: ['All-Pro'], synergies: [] },
    { name: 'CeeDee Lamb', pos: ['WR1', 'WR2'], team: 'Cowboys', decade: '2020s', rating: 91, stats: { yards: 1749, td: 12, ypr: '14.6' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Amon-Ra St. Brown', pos: ['WR1', 'WR2'], team: 'Lions', decade: '2020s', rating: 88, stats: { yards: 1515, td: 10, ypr: '12.8' }, badges: [], synergies: [] },
    { name: 'A.J. Brown', pos: ['WR1', 'WR2'], team: 'Eagles', decade: '2020s', rating: 90, stats: { yards: 1456, td: 11, ypr: '15.8' }, badges: [], synergies: [] },

    // TIGHT ENDS
    { name: 'Mike Ditka', pos: ['TE'], team: 'Bears', decade: '1960s', rating: 88, stats: { yards: 897, td: 7, ypr: '14.2' }, badges: ['HOF'], synergies: [] },
    { name: 'John Mackey', pos: ['TE'], team: 'Colts', decade: '1960s', rating: 90, stats: { yards: 829, td: 7, ypr: '15.8' }, badges: ['HOF', 'SB MVP'], synergies: [] },
    { name: 'Charlie Sanders', pos: ['TE'], team: 'Lions', decade: '1970s', rating: 85, stats: { yards: 681, td: 5, ypr: '14.1' }, badges: ['HOF'], synergies: [] },
    { name: 'Dave Casper', pos: ['TE'], team: 'Raiders', decade: '1970s', rating: 87, stats: { yards: 768, td: 6, ypr: '15.0' }, badges: ['HOF'], synergies: [] },
    { name: 'Kellen Winslow', pos: ['TE'], team: 'Chargers', decade: '1980s', rating: 91, stats: { yards: 1075, td: 6, ypr: '13.4' }, badges: ['HOF'], synergies: [] },
    { name: 'Ozzie Newsome', pos: ['TE'], team: 'Browns', decade: '1980s', rating: 87, stats: { yards: 784, td: 5, ypr: '12.6' }, badges: ['HOF'], synergies: [] },
    { name: 'Shannon Sharpe', pos: ['TE'], team: 'Broncos', decade: '1990s', rating: 90, stats: { yards: 1062, td: 7, ypr: '12.8' }, badges: ['HOF'], synergies: [] },
    { name: 'Ben Coates', pos: ['TE'], team: 'Patriots', decade: '1990s', rating: 86, stats: { yards: 902, td: 7, ypr: '11.8' }, badges: [], synergies: [] },
    { name: 'Tony Gonzalez', pos: ['TE'], team: 'Chiefs', decade: '2000s', rating: 95, stats: { yards: 1103, td: 8, ypr: '12.5' }, badges: ['HOF'], synergies: [] },
    { name: 'Antonio Gates', pos: ['TE'], team: 'Chargers', decade: '2000s', rating: 91, stats: { yards: 964, td: 10, ypr: '12.1' }, badges: [], synergies: [] },
    { name: 'Jason Witten', pos: ['TE'], team: 'Cowboys', decade: '2000s', rating: 88, stats: { yards: 962, td: 6, ypr: '11.3' }, badges: [], synergies: [] },
    { name: 'Rob Gronkowski', pos: ['TE'], team: 'Patriots', decade: '2010s', rating: 96, stats: { yards: 1108, td: 12, ypr: '15.4' }, badges: ['HOF'], synergies: ['Brady_Gronk'] },
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2010s', rating: 95, stats: { yards: 1229, td: 10, ypr: '12.0' }, badges: [], synergies: ['Mahomes_Kelce'] },
    { name: 'George Kittle', pos: ['TE'], team: '49ers', decade: '2010s', rating: 90, stats: { yards: 1148, td: 5, ypr: '14.8' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Travis Kelce', pos: ['TE'], team: 'Chiefs', decade: '2020s', rating: 94, stats: { yards: 1066, td: 9, ypr: '11.3' }, badges: ['All-Pro'], synergies: ['Mahomes_Kelce'] },
    { name: 'Mark Andrews', pos: ['TE'], team: 'Ravens', decade: '2020s', rating: 87, stats: { yards: 847, td: 9, ypr: '12.0' }, badges: ['All-Pro'], synergies: [] },
    { name: 'Sam LaPorta', pos: ['TE'], team: 'Lions', decade: '2020s', rating: 85, stats: { yards: 889, td: 10, ypr: '11.2' }, badges: [], synergies: [] },
    { name: 'Brock Bowers', pos: ['TE'], team: 'Raiders', decade: '2020s', rating: 87, stats: { yards: 1194, td: 5, ypr: '11.2' }, badges: [], synergies: [] },

    // EDGE RUSHERS
    { name: 'Deacon Jones', pos: ['EDGE'], team: 'Rams', decade: '1960s', rating: 96, stats: { sacks: 22, ff: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Gino Marchetti', pos: ['EDGE'], team: 'Colts', decade: '1960s', rating: 90, stats: { sacks: 14, ff: 2 }, badges: ['HOF'], synergies: [] },
    { name: 'Carl Eller', pos: ['EDGE'], team: 'Vikings', decade: '1970s', rating: 90, stats: { sacks: 15, ff: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Jack Youngblood', pos: ['EDGE'], team: 'Rams', decade: '1970s', rating: 89, stats: { sacks: 14, ff: 3 }, badges: ['HOF'], synergies: [] },
    { name: 'Joe Greene', pos: ['EDGE'], team: 'Steelers', decade: '1970s', rating: 95, stats: { sacks: 13, ff: 4 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Too Tall Jones', pos: ['EDGE'], team: 'Cowboys', decade: '1970s', rating: 86, stats: { sacks: 12, ff: 3 }, badges: [], synergies: [] },
    { name: 'Lawrence Taylor', pos: ['EDGE'], team: 'Giants', decade: '1980s', rating: 99, stats: { sacks: 15.5, ff: 4 }, badges: ['HOF', 'MVP', 'DPOY'], synergies: [] },
    { name: 'Reggie White', pos: ['EDGE'], team: 'Eagles', decade: '1980s', rating: 97, stats: { sacks: 18, ff: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Mark Gastineau', pos: ['EDGE'], team: 'Jets', decade: '1980s', rating: 88, stats: { sacks: 19, ff: 2 }, badges: [], synergies: [] },
    { name: 'Howie Long', pos: ['EDGE'], team: 'Raiders', decade: '1980s', rating: 89, stats: { sacks: 12, ff: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Reggie White', pos: ['EDGE'], team: 'Packers', decade: '1990s', rating: 96, stats: { sacks: 14, ff: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Bruce Smith', pos: ['EDGE'], team: 'Bills', decade: '1990s', rating: 95, stats: { sacks: 13.5, ff: 3 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Kevin Greene', pos: ['EDGE'], team: 'Steelers', decade: '1990s', rating: 90, stats: { sacks: 14, ff: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Michael Strahan', pos: ['EDGE'], team: 'Giants', decade: '2000s', rating: 93, stats: { sacks: 14.5, ff: 4 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Dwight Freeney', pos: ['EDGE'], team: 'Colts', decade: '2000s', rating: 90, stats: { sacks: 13, ff: 6 }, badges: [], synergies: [] },
    { name: 'Julius Peppers', pos: ['EDGE'], team: 'Panthers', decade: '2000s', rating: 91, stats: { sacks: 13.5, ff: 4 }, badges: ['HOF'], synergies: [] },
    { name: 'Jason Taylor', pos: ['EDGE'], team: 'Dolphins', decade: '2000s', rating: 90, stats: { sacks: 12, ff: 5 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'J.J. Watt', pos: ['EDGE'], team: 'Texans', decade: '2010s', rating: 97, stats: { sacks: 17.5, ff: 5 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Von Miller', pos: ['EDGE'], team: 'Broncos', decade: '2010s', rating: 92, stats: { sacks: 14.5, ff: 3 }, badges: ['SB MVP'], synergies: [] },
    { name: 'Khalil Mack', pos: ['EDGE'], team: 'Raiders', decade: '2010s', rating: 91, stats: { sacks: 15, ff: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Cameron Jordan', pos: ['EDGE'], team: 'Saints', decade: '2010s', rating: 88, stats: { sacks: 13, ff: 3 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Myles Garrett', pos: ['EDGE'], team: 'Browns', decade: '2020s', rating: 94, stats: { sacks: 16, ff: 4 }, badges: ['DPOY'], synergies: [] },
    { name: 'Micah Parsons', pos: ['EDGE'], team: 'Cowboys', decade: '2020s', rating: 95, stats: { sacks: 14, ff: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'Nick Bosa', pos: ['EDGE'], team: '49ers', decade: '2020s', rating: 94, stats: { sacks: 15.5, ff: 3 }, badges: ['DPOY'], synergies: [] },
    { name: 'T.J. Watt', pos: ['EDGE'], team: 'Steelers', decade: '2020s', rating: 95, stats: { sacks: 17.5, ff: 5 }, badges: ['DPOY'], synergies: [] },
    { name: 'Maxx Crosby', pos: ['EDGE'], team: 'Raiders', decade: '2020s', rating: 90, stats: { sacks: 13, ff: 4 }, badges: ['All-Pro'], synergies: [] },

    // DEFENSIVE BACKS
    { name: 'Herb Adderley', pos: ['DB'], team: 'Packers', decade: '1960s', rating: 89, stats: { int: 7, pd: 12 }, badges: ['HOF'], synergies: [] },
    { name: 'Willie Brown', pos: ['DB'], team: 'Raiders', decade: '1960s', rating: 88, stats: { int: 6, pd: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Dick LeBeau', pos: ['DB'], team: 'Lions', decade: '1960s', rating: 86, stats: { int: 7, pd: 11 }, badges: ['HOF'], synergies: [] },
    { name: 'Mel Blount', pos: ['DB'], team: 'Steelers', decade: '1970s', rating: 93, stats: { int: 6, pd: 15 }, badges: ['HOF', 'DPOY'], synergies: ['Steelers70s'] },
    { name: 'Jack Tatum', pos: ['DB'], team: 'Raiders', decade: '1970s', rating: 87, stats: { int: 5, pd: 12 }, badges: [], synergies: [] },
    { name: 'Ken Riley', pos: ['DB'], team: 'Bengals', decade: '1970s', rating: 86, stats: { int: 7, pd: 11 }, badges: [], synergies: [] },
    { name: 'Ronnie Lott', pos: ['DB'], team: '49ers', decade: '1980s', rating: 97, stats: { int: 8, pd: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Mike Haynes', pos: ['DB'], team: 'Raiders', decade: '1980s', rating: 91, stats: { int: 6, pd: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Darrell Green', pos: ['DB'], team: 'Commanders', decade: '1980s', rating: 89, stats: { int: 5, pd: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Deion Sanders', pos: ['DB'], team: 'Cowboys', decade: '1990s', rating: 97, stats: { int: 6, pd: 18 }, badges: ['HOF', 'DPOY'], synergies: ['Cowboys90s'] },
    { name: 'Rod Woodson', pos: ['DB'], team: 'Steelers', decade: '1990s', rating: 94, stats: { int: 7, pd: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Charles Woodson', pos: ['DB'], team: 'Raiders', decade: '1990s', rating: 88, stats: { int: 5, pd: 14 }, badges: ['HOF'], synergies: [] },
    { name: 'Aeneas Williams', pos: ['DB'], team: 'Cardinals', decade: '1990s', rating: 89, stats: { int: 7, pd: 15 }, badges: ['HOF'], synergies: [] },
    { name: 'Ed Reed', pos: ['DB'], team: 'Ravens', decade: '2000s', rating: 97, stats: { int: 8, pd: 16 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Charles Woodson', pos: ['DB'], team: 'Packers', decade: '2000s', rating: 93, stats: { int: 7, pd: 15 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Troy Polamalu', pos: ['DB'], team: 'Steelers', decade: '2000s', rating: 93, stats: { int: 6, pd: 14 }, badges: ['HOF', 'DPOY'], synergies: [] },
    { name: 'Darrelle Revis', pos: ['DB'], team: 'Jets', decade: '2000s', rating: 92, stats: { int: 5, pd: 18 }, badges: ['HOF'], synergies: [] },
    { name: 'Champ Bailey', pos: ['DB'], team: 'Broncos', decade: '2000s', rating: 93, stats: { int: 6, pd: 17 }, badges: ['HOF'], synergies: [] },
    { name: 'Richard Sherman', pos: ['DB'], team: 'Seahawks', decade: '2010s', rating: 92, stats: { int: 6, pd: 16 }, badges: [], synergies: [] },
    { name: 'Patrick Peterson', pos: ['DB'], team: 'Cardinals', decade: '2010s', rating: 89, stats: { int: 5, pd: 15 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Tyrann Mathieu', pos: ['DB'], team: 'Chiefs', decade: '2010s', rating: 87, stats: { int: 5, pd: 13 }, badges: [], synergies: [] },
    { name: 'Jalen Ramsey', pos: ['DB'], team: 'Jaguars', decade: '2010s', rating: 91, stats: { int: 4, pd: 16 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Sauce Gardner', pos: ['DB'], team: 'Jets', decade: '2020s', rating: 93, stats: { int: 5, pd: 18 }, badges: ['DPOY'], synergies: [] },
    { name: 'Trevon Diggs', pos: ['DB'], team: 'Cowboys', decade: '2020s', rating: 88, stats: { int: 8, pd: 14 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Derwin James', pos: ['DB'], team: 'Chargers', decade: '2020s', rating: 89, stats: { int: 4, pd: 12 }, badges: ['All-Pro'], synergies: [] },
    { name: 'Kyle Hamilton', pos: ['DB'], team: 'Ravens', decade: '2020s', rating: 90, stats: { int: 5, pd: 14 }, badges: ['All-Pro'], synergies: [] },
];

// Synergy definitions
const SYNERGIES = {
    'Montana_Rice': { label: 'Montana → Rice Connection', bonus: 4, players: ['Joe Montana', 'Jerry Rice'] },
    'Young_Rice': { label: 'Young → Rice Connection', bonus: 3, players: ['Steve Young', 'Jerry Rice'] },
    'Brady_Moss': { label: 'Brady → Moss', bonus: 4, players: ['Tom Brady', 'Randy Moss'] },
    'Brady_Gronk': { label: 'Brady → Gronk', bonus: 3, players: ['Tom Brady', 'Rob Gronkowski'] },
    'Mahomes_Kelce': { label: 'Mahomes → Kelce', bonus: 4, players: ['Patrick Mahomes', 'Travis Kelce'] },
    'Manning_Harrison': { label: 'Manning → Harrison', bonus: 3, players: ['Peyton Manning', 'Marvin Harrison'] },
    'Rodgers_Adams': { label: 'Rodgers → Adams', bonus: 3, players: ['Aaron Rodgers', 'Davante Adams'] },
    'Cowboys90s': { label: '90s Cowboys Dynasty', bonus: 2, players: ['Troy Aikman', 'Emmitt Smith', 'Michael Irvin', 'Deion Sanders'] },
    'Steelers70s': { label: '70s Steel Curtain', bonus: 2, players: ['Terry Bradshaw', 'Franco Harris', 'Lynn Swann', 'Joe Greene', 'Mel Blount'] },
};

function getRandomTeamForPosition(position, usedDecades) {
    const posKey = position === 'WR1' || position === 'WR2' ? ['WR1', 'WR2'] : [position];
    const availableDecades = DECADES.filter(d => !usedDecades.includes(d));

    if (availableDecades.length === 0) return null;

    // Pick a random available decade
    const decade = availableDecades[Math.floor(Math.random() * availableDecades.length)];

    // Get ALL players from this decade at this position
    const allPlayersInEra = PLAYER_DB.filter(p =>
        p.decade === decade &&
        p.pos.some(pp => posKey.includes(pp))
    );

    if (allPlayersInEra.length === 0) return null;

    // Pick a featured franchise (prefer one that has a player in this pool)
    const teamsInPool = [...new Set(allPlayersInEra.map(p => p.team))];
    const team = teamsInPool[Math.floor(Math.random() * teamsInPool.length)];

    return { team, decade, players: allPlayersInEra };
}
