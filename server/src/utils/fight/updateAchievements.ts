/* eslint-disable no-await-in-loop */
import { AchievementsStore, TournamentAchievements } from '@labrute/core';
import { AchievementName, PrismaClient } from '@labrute/prisma';

const updateAchievements = async (
  prisma: PrismaClient,
  store: AchievementsStore,
  isTournamentFight: boolean,
) => {
  for (const [_bruteId, bruteStore] of Object.entries(store)) {
    const bruteId = +_bruteId;
    for (const [_name, count] of Object.entries(bruteStore.achievements)) {
      const name = _name as AchievementName;
      const isTournamentRelated = TournamentAchievements.includes(name);

      // Tournament fight, delay if achievement is tournament related
      if (isTournamentFight && isTournamentRelated) {
        // Get existing delayed achievement
        const existingAchievement = await prisma.tournamentAchievement.findFirst({
          where: {
            achievement: name,
            bruteId,
          },
          select: { id: true, achievementCount: true },
        });

        if (existingAchievement) {
          // Update existing delayed achievement
          await prisma.tournamentAchievement.update({
            where: {
              id: existingAchievement.id,
            },
            data: {
              achievementCount: {
                increment: count,
              },
            },
            select: { id: true },
          });
        } else {
          // Create new delayed achievement
          await prisma.tournamentAchievement.create({
            data: {
              achievement: name,
              achievementCount: count,
              bruteId,
              date: new Date(),
            },
            select: { id: true },
          });
        }
      } else {
        // Normal fight or non tournament related achievement, update immediately

        // Get existing achievement
        const existingAchievement = await prisma.achievement.findFirst({
          where: {
            name,
            bruteId,
          },
          select: { id: true, count: true },
        });

        if (existingAchievement) {
          // Only update max damage if it's higher
          if (name === AchievementName.maxDamage) {
            if ((existingAchievement.count || 0) < count) {
              await prisma.achievement.update({
                where: {
                  id: existingAchievement.id,
                },
                data: {
                  count,
                },
                select: { id: true },
              });
            }
          } else {
            // Update existing achievement
            await prisma.achievement.update({
              where: {
                id: existingAchievement.id,
              },
              data: {
                count: {
                  increment: count,
                },
              },
              select: { id: true },
            });
          }
        } else {
          // Create new achievement
          await prisma.achievement.create({
            data: {
              name,
              count,
              userId: bruteStore.userId,
              bruteId,
            },
            select: { id: true },
          });
        }
      }
    }
  }
};

export default updateAchievements;