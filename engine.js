// Simulation Engine — hidden, non-linear rating system

class SimulationEngine {
    constructor(roster, gameMode = 'nfl') {
        this.roster = roster;
        this.gameMode = gameMode;
        this.activeSynergies = [];
        this.penalties = [];
    }

    calculateTeamRating() {
        let synergyBonus = 0;
        let legacyBonus = 0;
        let balancePenalty = 0;

        // Position weights (QB most important, then playmakers)
        const posWeights = {
            'QB': 1.8, 'RB': 1.0, 'WR1': 1.3, 'WR2': 1.1, 'TE': 0.9, 'OL': 0.7,
            'EDGE': 1.3, 'DB': 1.0
        };

        let totalWeight = 0;
        let weightedSum = 0;

        Object.entries(posWeights).forEach(([pos, weight]) => {
            const player = this.roster[pos];
            if (player) {
                weightedSum += player.rating * weight;
                totalWeight += weight;
            }
        });

        let baseRating = weightedSum / totalWeight;

        // Legacy multiplier (capped — stacking legends has diminishing returns)
        const allPlayers = Object.values(this.roster).filter(Boolean);
        let rawLegacy = 0;
        allPlayers.forEach(player => {
            if (player.badges.includes('HOF')) rawLegacy += 0.4;
            if (player.badges.includes('MVP')) rawLegacy += 0.6;
            if (player.badges.includes('DPOY')) rawLegacy += 0.5;
            if (player.badges.includes('SB MVP')) rawLegacy += 0.3;
        });
        legacyBonus = Math.min(rawLegacy, 2.5);

        // Synergy calculation
        synergyBonus = this.calculateSynergies();

        // Weakest link penalty (reduced)
        const ratings = allPlayers.map(p => p.rating);
        const minRating = Math.min(...ratings);
        const avgRating = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        if (minRating < avgRating - 7) {
            balancePenalty = (avgRating - minRating - 7) * 0.3;
            this.penalties.push({
                label: `Weakest link: ${allPlayers.find(p => p.rating === minRating).name}`,
                value: -balancePenalty.toFixed(1)
            });
        }

        // Era diversity bonus (using all 3 available decades = bonus)
        const decades = [...new Set(allPlayers.map(p => p.decade))];
        const eraBonus = decades.length >= 3 ? 1.0 : decades.length >= 2 ? 0.3 : 0;

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

        const synergiesDb = this.gameMode === 'cfb' ? (typeof CFB_SYNERGIES !== 'undefined' ? CFB_SYNERGIES : {}) : SYNERGIES;

        for (const [key, synergy] of Object.entries(synergiesDb)) {
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
        const maxWins = this.gameMode === 'cfb' ? 12 : 17;

        if (this.gameMode === 'cfb') {
            // CFB: 12 game season (easier thresholds)
            if (rating >= 95) return 12;
            if (rating >= 93) return Math.random() > 0.6 ? 12 : 11;
            if (rating >= 91) return Math.random() > 0.5 ? 11 : 10;
            if (rating >= 89) return Math.random() > 0.5 ? 10 : 9;
            if (rating >= 87) return Math.random() > 0.5 ? 9 : 8;
            if (rating >= 85) return Math.random() > 0.5 ? 8 : 7;
            if (rating >= 83) return Math.random() > 0.5 ? 7 : 6;
            if (rating >= 81) return Math.random() > 0.5 ? 6 : 5;
            if (rating >= 79) return Math.random() > 0.5 ? 5 : 4;
            return Math.max(2, Math.floor(rating / 18));
        } else {
            // NFL: 17 game season (easier thresholds)
            if (rating >= 95) return 17;
            if (rating >= 93) return Math.random() > 0.6 ? 17 : 16;
            if (rating >= 91) return Math.random() > 0.5 ? 16 : 15;
            if (rating >= 89) return Math.random() > 0.5 ? 14 : 13;
            if (rating >= 87) return Math.random() > 0.5 ? 13 : 12;
            if (rating >= 85) return Math.random() > 0.5 ? 12 : 11;
            if (rating >= 83) return Math.random() > 0.5 ? 11 : 10;
            if (rating >= 81) return Math.random() > 0.5 ? 10 : 9;
            if (rating >= 79) return Math.random() > 0.5 ? 9 : 8;
            if (rating >= 77) return Math.random() > 0.5 ? 8 : 7;
            return Math.max(3, Math.floor(rating / 12));
        }
    }

    simulateSeason() {
        const result = this.calculateTeamRating();
        const totalGames = this.gameMode === 'cfb' ? 12 : 17;
        const wins = result.wins;
        const losses = totalGames - wins;

        // Generate week-by-week results
        const weeks = [];
        let winsLeft = wins;
        let lossesLeft = losses;

        for (let i = 0; i < totalGames; i++) {
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
