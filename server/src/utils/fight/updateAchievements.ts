/* eslint-disable no-await-in-loop */
import { AchievementsStore, TournamentAchievements } from '@labrute/core';
import { AchievementName, PrismaClient } from '@labrute/prisma';

const updateAchievements = async (
  prisma: PrismaClient,
  store: AchievementsStore,
  isTournamentFight: boolean,
) => {
  const bruteAcheivments = [];
  const bruteAcheivmentsTournamentRelated = [];
  for (const [bruteId, bruteStore] of Object.entries(store)) {
    for (const [_name, count] of Object.entries(bruteStore.achievements)) {
      const name = _name as AchievementName;
      const achievementName = _name as AchievementName;
      if (isTournamentFight && TournamentAchievements.includes(name)) {
        bruteAcheivmentsTournamentRelated.push([bruteId, achievementName, count]);
      } else {
        bruteAcheivments.push([bruteId, achievementName, count]);
      }
    }
  }

  try {
    if (bruteAcheivmentsTournamentRelated.length > 0) {
      await prisma.$executeRawUnsafe(`
    INSERT INTO "TournamentAchievement"("bruteId", achievement, "achievementCount" , date) VALUES
    ${bruteAcheivmentsTournamentRelated.map(([bruteId, name, count]) => `('${bruteId}', '${name}', '${count}' , NOW())`).join(', ')}
    ON CONFLICT(achievement, "bruteId") DO UPDATE SET "achievementCount" = "TournamentAchievement"."achievementCount" + excluded."achievementCount";
  `);
    }
  } catch (error) {
    console.error(error);
  }

  try {
    if (bruteAcheivments.length > 0) {
      await prisma.$executeRawUnsafe(`
    INSERT INTO "Achievement"("bruteId", name, count) VALUES
    ${bruteAcheivments.map(([bruteId, name, count]) => `('${bruteId}', '${name}', ${count})`).join(', ')}
    ON CONFLICT(name, "bruteId") DO UPDATE SET count = CASE WHEN excluded.name =  '${AchievementName.maxDamage}' THEN
                      GREATEST("Achievement".count, excluded.count)
                    ELSE
                      "Achievement".count + excluded.count
                    END;
  `);
    }
  } catch (error) {
    console.error(error);
  }
};

export default updateAchievements;
