import { AchievementsStore, DetailedFight } from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import { Stats } from './fightMethods.js';

const handleStats = (
  fightData: DetailedFight,
  stats: Stats,
  achievements: AchievementsStore,
  isTournamentFight: boolean,
  isTournamentFinal: boolean,
) => {
  const winner = fightData.fighters.find((f) => f.id === fightData.winner);
  if (!winner) {
    throw new Error('Winner not found');
  }

  const loser = fightData.fighters.find((f) => f.id === fightData.loser);
  if (!loser) {
    throw new Error('Loser not found');
  }

  for (const [bruteId, stat] of Object.entries(stats)) {
    const achievement = achievements[bruteId];

    if (!achievement) {
      // eslint-disable-next-line no-continue
      continue;
    }

    // Win / defeat
    if (bruteId === winner.id) {
      achievement.achievements.wins = 1;
    } else {
      achievement.achievements.defeats = 1;
    }

    // Max damage
    if (stat.maxDamage) {
      achievement.achievements.maxDamage = stat.maxDamage;
    }

    // Flawless
    if (bruteId === winner.id && winner.hp === winner.maxHp) {
      achievement.achievements.flawless = 1;
    }

    // Win with 1hp
    if (bruteId === winner.id
      && winner.hp === 1
      && !winner.skills.find((s) => s.name === SkillName.survival)) {
      achievement.achievements.winWith1HP = 1;
    }

    // Steal 2 weapons
    if (stat.weaponsStolen && stat.weaponsStolen >= 2) {
      achievement.achievements.steal2Weapons = 1;
    }

    // Single hit win
    if (bruteId === winner.id && stat.hits === 1) {
      // Only apply if other team member didn't hit
      if (!stat.otherTeamMembersHits) {
        achievement.achievements.singleHitWin = 1;
      }
    }

    // Hit 20 times
    if (stat.hits && stat.hits >= 20) {
      achievement.achievements.hit20times = 1;
    }

    // 10 Skills used
    if (stat.skillsUsed && stat.skillsUsed >= 10) {
      achievement.achievements.use10skills = 1;
    }

    // 5 counters
    if (stat.counters && stat.counters >= 5) {
      achievement.achievements.counter5 = 1;
    }

    // 10 evades
    if (stat.evades && stat.evades >= 10) {
      achievement.achievements.evade10 = 1;
    }

    // 25 blocks
    if (stat.blocks && stat.blocks >= 25) {
      achievement.achievements.block25 = 1;
    }

    // 4 disarms
    if (stat.disarms && stat.disarms >= 4) {
      achievement.achievements.disarm4 = 1;
    }

    // 8 disarms
    if (stat.disarms && stat.disarms >= 8) {
      achievement.achievements.disarm8 = 1;
    }

    // Kill 3 pets
    if (stat.petsKilled && stat.petsKilled >= 3) {
      achievement.achievements.kill3pets = 1;
    }

    // Tournament achievements
    if (isTournamentFight) {
      if (isTournamentFinal) {
        if (bruteId === winner.id && winner.level <= 15) {
          // Win as Lv15-
          achievement.achievements.winTournamentAs15 = 1;
        } else if (bruteId === winner.id && winner.level <= 20) {
          // Win as Lv20-
          achievement.achievements.winTournamentAs20 = 1;
        }

        // Win as a lower level
        if (bruteId === winner.id && winner.level < loser.level) {
          achievement.achievements.winAsLower = 1;
        }

        // Win
        if (bruteId === winner.id) {
          achievement.achievements.win = 1;
        }
      }

      if (bruteId === loser.id && loser.level >= winner.level * 4) {
        // Loose against 1/4 level
        achievement.achievements.looseAgainst4 = 1;
      } else if (bruteId === loser.id && loser.level >= winner.level * 3) {
        // Loose against 1/3 level
        achievement.achievements.looseAgainst3 = 1;
      } else if (bruteId === loser.id && loser.level >= winner.level * 2) {
        // Loose against 1/2 level
        achievement.achievements.looseAgainst2 = 1;
      }

      if (bruteId === winner.id && winner.level * 4 <= loser.level) {
        // Win against 4x level
        achievement.achievements.winAgainst4 = 1;
      } else if (bruteId === winner.id && winner.level * 3 <= loser.level) {
        // Win against 3x level
        achievement.achievements.winAgainst3 = 1;
      } else if (bruteId === winner.id && winner.level * 2 <= loser.level) {
        // Win against 2x level
        achievement.achievements.winAgainst2 = 1;
      }
    }
  }
};

export default handleStats;
