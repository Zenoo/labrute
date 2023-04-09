import { AchievementsStore, DetailedFight } from '@labrute/core';
import { Stats } from './fightMethods.js';

const handleStats = (
  fightData: DetailedFight['data'],
  stats: Stats[],
  achievements: AchievementsStore,
  isTournamentFight: boolean,
) => {
  const winner = fightData.fighters.find((f) => !f.master && f.name === fightData.winner?.name);
  if (!winner) {
    throw new Error('Winner not found');
  }

  const loser = fightData.fighters.find((f) => !f.master && f.name !== fightData.winner?.name);
  if (!loser) {
    throw new Error('Loser not found');
  }

  for (const stat of stats) {
    const achievement = achievements.find((a) => a.bruteId === stat.bruteId);

    if (!achievement) {
      // eslint-disable-next-line no-continue
      continue;
    }

    // Win / defeat
    if (stat.bruteId === winner.id) {
      achievement.achievements.wins = 1;
    } else {
      achievement.achievements.defeats = 1;
    }

    // Flawless
    if (stat.bruteId === winner.id && winner.hp === winner.maxHp) {
      achievement.achievements.flawless = 1;
    }

    // Win with 1hp
    if (stat.bruteId === winner.id && winner.hp === 1 && !winner.survival) {
      achievement.achievements.winWith1HP = 1;
    }

    // Steal 2 weapons
    if (stat.weaponsStolen && stat.weaponsStolen >= 2) {
      achievement.achievements.steal2Weapons = 1;
    }

    // Single hit win
    if (stat.bruteId === winner.id && stat.hits === 1) {
      achievement.achievements.singleHitWin = 1;
    }

    // Hit 20 times
    if (stat.hits && stat.hits >= 20) {
      achievement.achievements.hit20times = 1;
    }

    // 10 Skills used
    if (stat.skillsUsed && stat.skillsUsed >= 10) {
      achievement.achievements.use10skills = 1;
    }

    // Tournament achievements
    if (isTournamentFight) {
      if (stat.bruteId === winner.id && winner.level <= 15) {
        // Win as Lv15-
        achievement.achievements.winTournamentAs15 = 1;
      } else if (stat.bruteId === winner.id && winner.level <= 20) {
        // Win as Lv20-
        achievement.achievements.winTournamentAs20 = 1;
      }

      if (stat.bruteId === loser.id && loser.level >= winner.level * 4) {
        // Loose against 1/4 level
        achievement.achievements.looseAgainst4 = 1;
      } else if (stat.bruteId === loser.id && loser.level >= winner.level * 3) {
        // Loose against 1/3 level
        achievement.achievements.looseAgainst3 = 1;
      } else if (stat.bruteId === loser.id && loser.level >= winner.level * 2) {
        // Loose against 1/2 level
        achievement.achievements.looseAgainst2 = 1;
      }

      if (stat.bruteId === winner.id && winner.level * 4 <= loser.level) {
        // Win against 4x level
        achievement.achievements.winAgainst4 = 1;
      } else if (stat.bruteId === winner.id && winner.level * 3 <= loser.level) {
        // Win against 3x level
        achievement.achievements.winAgainst3 = 1;
      } else if (stat.bruteId === winner.id && winner.level * 2 <= loser.level) {
        // Win against 2x level
        achievement.achievements.winAgainst2 = 1;
      }

      // Win as a lower level
      if (stat.bruteId === winner.id && winner.level < loser.level) {
        achievement.achievements.winAsLower = 1;
      }

      // Win
      if (stat.bruteId === winner.id) {
        achievement.achievements.win = 1;
      }
    }
  }
};

export default handleStats;