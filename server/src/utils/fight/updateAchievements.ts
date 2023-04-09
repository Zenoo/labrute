/* eslint-disable no-await-in-loop */
import { AchievementsStore } from '@labrute/core';
import { AchievementName, PrismaClient } from '@labrute/prisma';

const updateAchievements = async (
  prisma: PrismaClient,
  store: AchievementsStore,
) => {
  for (const [_bruteId, bruteStore] of Object.entries(store)) {
    const bruteId = +_bruteId;
    for (const [_name, count] of Object.entries(bruteStore.achievements)) {
      const name = _name as AchievementName;

      const existingAchievement = await prisma.achievement.findFirst({
        where: {
          name,
          bruteId,
        },
      });

      if (existingAchievement) {
        await prisma.achievement.update({
          where: {
            id: existingAchievement.id,
          },
          data: {
            count: {
              increment: count,
            },
          },
        });
      } else {
        await prisma.achievement.create({
          data: {
            name,
            count,
            userId: bruteStore.userId,
            bruteId,
          },
        });
      }
    }
  }
};

export default updateAchievements;