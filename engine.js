// Simulation Engine — hidden, non-linear rating system

class SimulationEngine {
    constructor(roster) {
        this.roster = roster;
        this.activeSynergies = [];
        this.penalties = [];
    }

    calculateTeamRating() {
        let offenseRating = 0;
        let defenseRating = 0;
        let synergyBonus = 0;
        let legacyBonus = 0;
        let balancePenalty = 0;

        // Base ratings
        const offPositions = ['QB', 'RB', 'WR1', 'WR2', 'TE', 'OL'];
        const defPositions = ['EDGE', 'DB'];

        offPositions.forEach(pos => {
            const player = this.roster[pos];
            if (player) offenseRating += player.rating;
        });

        defPositions.forEach(pos => {
            const player = this.roster[pos];
            if (player) defenseRating += player.rating;
        });

        // Normalize: offense has 6 players, defense has 2
        offenseRating = offenseRating / 6;
        defenseRating = defenseRating / 2;

        // Weighted average (offense matters more in modern NFL)
        let baseRating = (offenseRating * 0.65) + (defenseRating * 0.35);

        // Legacy multiplier
        const allPlayers = Object.values(this.roster).filter(Boolean);
        allPlayers.forEach(player => {
            if (player.badges.includes('HOF')) legacyBonus += 0.8;
            if (player.badges.includes('MVP')) legacyBonus += 1.2;
            if (player.badges.includes('DPOY')) legacyBonus += 0.9;
            if (player.badges.includes('SB MVP')) legacyBonus += 0.7;
        });

        // Synergy calculation
        synergyBonus = this.calculateSynergies();

        // Weakest link penalty
        const ratings = allPlayers.map(p => p.rating);
        const minRating = Math.min(...ratings);
        const avgRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        if (minRating < avgRating - 8) {
            balancePenalty = (avgRating - minRating - 8) * 0.3;
            this.penalties.push({
                label: `Weakest link: ${allPlayers.find(p => p.rating === minRating).name}`,
                value: -balancePenalty.toFixed(1)
            });
        }

        // Era diversity bonus (spread across many decades = small bonus)
        const decades = [...new Set(allPlayers.map(p => p.decade))];
        const eraBonus = decades.length >= 6 ? 1.5 : decades.length >= 5 ? 0.8 : 0;

        // Era mismatch penalty (1960s QB with 2020s WR gets slight penalty)
        const qb = this.roster['QB'];
        const wrs = [this.roster['WR1'], this.roster['WR2']].filter(Boolean);
        if (qb && wrs.length > 0) {
            const qbEra = parseInt(qb.decade);
            wrs.forEach(wr => {
                const wrEra = parseInt(wr.decade);
                const gap = Math.abs(qbEra - wrEra);
                if (gap >= 40) {
                    const eraPenalty = 0.5;
                    balancePenalty += eraPenalty;
                    this.penalties.push({
                        label: `Era gap: ${qb.name} / ${wr.name}`,
                        value: -eraPenalty.toFixed(1)
                    });
                }
            });
        }

        // Final rating (capped at 100)
        const finalRating = Math.min(100,
            baseRating + legacyBonus + synergyBonus + eraBonus - balancePenalty
        );

        return {
            baseRating: baseRating.toFixed(1),
            legacyBonus: legacyBonus.toFixed(1),
            synergyBonus: synergyBonus.toFixed(1),
            eraBonus: eraBonus.toFixed(1),
            balancePenalty: balancePenalty.toFixed(1),
            finalRating: finalRating.toFixed(1),
            wins: this.ratingToWins(finalRating)
        };
    }

    calculateSynergies() {
        const allPlayers = Object.values(this.roster).filter(Boolean);
        const playerNames = allPlayers.map(p => p.name);
        let totalBonus = 0;

        for (const [key, synergy] of Object.entries(SYNERGIES)) {
            const matchedPlayers = synergy.players.filter(p => playerNames.includes(p));
            if (matchedPlayers.length >= 2) {
                // Scale bonus by how many of the synergy players are present
                const ratio = matchedPlayers.length / synergy.players.length;
                const bonus = synergy.bonus * ratio;
                totalBonus += bonus;
                this.activeSynergies.push({
                    label: synergy.label,
                    bonus: `+${bonus.toFixed(1)}`,
                    players: matchedPlayers
                });
            }
        }

        return totalBonus;
    }

    ratingToWins(rating) {
        // Non-linear mapping — harder at the top
        if (rating >= 99) return 17;
        if (rating >= 97) return Math.random() > 0.4 ? 17 : 16;
        if (rating >= 95) return Math.random() > 0.7 ? 16 : 15;
        if (rating >= 93) return Math.random() > 0.5 ? 15 : 14;
        if (rating >= 91) return Math.random() > 0.6 ? 14 : 13;
        if (rating >= 89) return Math.random() > 0.5 ? 13 : 12;
        if (rating >= 87) return Math.random() > 0.5 ? 12 : 11;
        if (rating >= 85) return Math.random() > 0.5 ? 11 : 10;
        if (rating >= 82) return Math.random() > 0.5 ? 10 : 9;
        if (rating >= 79) return Math.random() > 0.5 ? 9 : 8;
        if (rating >= 75) return Math.random() > 0.5 ? 8 : 7;
        return Math.max(3, Math.floor(rating / 10));
    }

    simulateSeason() {
        const result = this.calculateTeamRating();
        const wins = result.wins;
        const losses = 17 - wins;

        // Generate week-by-week results
        const weeks = [];
        let winsLeft = wins;
        let lossesLeft = losses;

        for (let i = 0; i < 17; i++) {
            if (lossesLeft === 0) {
                weeks.push('W');
                winsLeft--;
            } else if (winsLeft === 0) {
                weeks.push('L');
                lossesLeft--;
            } else {
                // Distribute losses somewhat randomly
                const lossChance = lossesLeft / (winsLeft + lossesLeft);
                if (Math.random() < lossChance) {
                    weeks.push('L');
                    lossesLeft--;
                } else {
                    weeks.push('W');
                    winsLeft--;
                }
            }
        }

        return {
            wins,
            losses,
            weeks,
            rating: result,
            synergies: this.activeSynergies,
            penalties: this.penalties
        };
    }
}
