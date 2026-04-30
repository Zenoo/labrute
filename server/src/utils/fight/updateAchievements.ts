import { AchievementsStore, TournamentAchievements } from '@labrute/core';
import { AchievementName, PrismaClient } from '@labrute/prisma';
import { traced } from '../trace.js';

export const updateAchievements = async (
  prisma: PrismaClient,
  store: AchievementsStore,
  isTournamentFight: boolean,
) => {
  const bruteAchievements: [string, string, AchievementName, number][] = [];
  const bruteAchievementsTournamentRelated: [string, AchievementName, number][] = [];
  for (const [bruteId, bruteStore] of Object.entries(store)) {
    // Disable achievements for event or bot brutes
    if (bruteStore.eventId || !bruteStore.userId) {
      continue;
    }

    for (const [_name, count] of Object.entries(bruteStore.achievements)) {
      const achievementName = _name as AchievementName;
      if (isTournamentFight && TournamentAchievements.includes(achievementName)) {
        bruteAchievementsTournamentRelated.push([bruteId, achievementName, count]);
      } else {
        bruteAchievements.push([bruteId, bruteStore.userId, achievementName, count]);
      }
    }
  }

  try {
    if (bruteAchievementsTournamentRelated.length > 0) {
      await traced('updateAchievements.updateTournamentAchievements', () => prisma.$executeRawUnsafe(/* sql */`
        INSERT INTO "TournamentAchievement"("bruteId", achievement, "achievementCount" , date) VALUES
        ${bruteAchievementsTournamentRelated.map(([bruteId, name, count]) => `('${bruteId}', '${name}', '${count}' , NOW())`).join(', ')}
        ON CONFLICT(achievement, "bruteId") DO UPDATE SET "achievementCount" = "TournamentAchievement"."achievementCount" + excluded."achievementCount";
      `));
    }
  } catch (error) {
    console.error(error);
  }

  try {
    if (bruteAchievements.length > 0) {
      await traced('updateAchievements.updateAchievements', () => prisma.$executeRawUnsafe(/* sql */`
        INSERT INTO "Achievement"("bruteId", "userId", name, count) VALUES
        ${bruteAchievements.map(([bruteId, userId, name, count]) => `('${bruteId}', '${userId}', '${name}', ${count})`).join(', ')}
        ON CONFLICT(name, "bruteId") DO UPDATE SET count = CASE
        WHEN excluded.name = '${AchievementName.maxDamage}' THEN
          GREATEST("Achievement".count, excluded.count)
        ELSE
          "Achievement".count + excluded.count
        END;
      `));
    }
  } catch (error) {
    console.error(error);
  }
};
