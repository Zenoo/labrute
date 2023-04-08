/* eslint-disable no-await-in-loop */
import { AchievementsStore } from '@labrute/core';
import { AchievementName, PrismaClient } from '@labrute/prisma';
import { workerData } from 'worker_threads';

const stores = workerData as AchievementsStore;
const prisma = new PrismaClient();

for (const store of stores) {
  for (const [_name, count] of Object.entries(store.achievements)) {
    const name = _name as AchievementName;

    const existingAchievement = await prisma.achievement.findFirst({
      where: {
        name,
        bruteId: store.bruteId,
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
      // Get user id
      const user = await prisma.user.findFirst({
        where: {
          brutes: {
            some: {
              id: store.bruteId,
            },
          },
        },
        select: { id: true },
      });

      await prisma.achievement.create({
        data: {
          name,
          count,
          userId: user?.id,
          bruteId: store.bruteId,
        },
      });
    }
  }
}