import {
  AchievementData,
  BaseTitleRequirements, ExpectedError, RaretyOrder,
} from '@labrute/core';
import { AchievementName, PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import sendError from '../utils/sendError.js';

export const increaseAchievement = async (
  prisma: PrismaClient,
  userId: string | null,
  bruteId: number | null,
  name: AchievementName,
) => {
  const current = await prisma.achievement.findFirst({
    where: {
      bruteId,
      userId,
      name,
    },
    select: { id: true, count: true },
  });

  if (current) {
    // Check if achievement is already maxed
    const maxCount = AchievementData[name].perBrute;

    // Do not increase if maxed
    if (maxCount && current.count >= maxCount) {
      return;
    }

    await prisma.achievement.update({
      where: {
        id: current.id,
      },
      data: {
        count: Math.min(current.count + 1, maxCount || Infinity),
      },
      select: { id: true },
    });
  } else {
    await prisma.achievement.create({
      data: {
        bruteId,
        userId,
        name,
        count: 1,
      },
      select: { id: true },
    });

    if (bruteId) {
      // Check if brute has unlocked all unlockable achievements
      const count = await prisma.achievement.count({
        where: {
          bruteId,
          name: {
            // Filter out beta and bug achievements
            notIn: [AchievementName.beta, AchievementName.bug],
          },
        },
      });

      if (count >= Object.keys(AchievementData).length - 3) {
        // Check if brute has already unlocked the achievement
        const existing = await prisma.achievement.findFirst({
          where: {
            bruteId,
            name: AchievementName.allAchievements,
          },
          select: { id: true },
        });

        if (!existing) {
          await prisma.achievement.create({
            data: {
              bruteId,
              userId,
              name: AchievementName.allAchievements,
              count: 1,
            },
            select: { id: true },
          });
        }
      }
    }
  }
};

const Achievements = {
  getForUser: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { userId: string }>,
    res: Response,
  ) => {
    try {
      if (!req.body.userId) throw new ExpectedError('Missing user id');

      // Get achievements
      const achievements = await prisma.achievement.findMany({
        where: { userId: req.body.userId },
        select: {
          name: true,
          count: true,
        },
      });

      // Merge achievements with same name
      const mergedAchievements = achievements.reduce((acc, achievement) => {
        const existingAchievement = acc.find((a) => a.name === achievement.name);
        if (existingAchievement) {
          // Display the highest count for some achievements
          if (AchievementData[achievement.name].max) {
            existingAchievement.count = Math.max(
              existingAchievement.count,
              achievement.count,
            );
          } else {
            existingAchievement.count += achievement.count;
          }
        } else {
          acc.push(achievement);
        }
        return acc;
      }, [] as typeof achievements);

      // Order by rarety then count
      mergedAchievements.sort((a, b) => {
        const aRarety = RaretyOrder.indexOf(AchievementData[a.name].rarety);
        const bRarety = RaretyOrder.indexOf(AchievementData[b.name].rarety);
        if (aRarety < bRarety) return 1;
        if (aRarety > bRarety) return -1;
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
      });

      res.status(200).send(mergedAchievements);
    } catch (error) {
      sendError(res, error);
    }
  },
  getForBrute: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.params.name) throw new ExpectedError('Missing brute name');

      // Get achievements
      const achievements = await prisma.achievement.findMany({
        where: {
          brute: {
            deletedAt: null,
            name: req.params.name,
          },
        },
        select: {
          name: true,
          count: true,
        },
      });

      // Order by rarety then count
      achievements.sort((a, b) => {
        const aRarety = RaretyOrder.indexOf(AchievementData[a.name].rarety);
        const bRarety = RaretyOrder.indexOf(AchievementData[b.name].rarety);
        if (aRarety < bRarety) return 1;
        if (aRarety > bRarety) return -1;
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
      });

      res.status(200).send(achievements);
    } catch (error) {
      sendError(res, error);
    }
  },
  generateTitlesCSV: (req: Request, res: Response) => {
    try {
      const csvLines = [
        'name,count,title',
      ];

      Object.entries(AchievementData).forEach(([name, achievement]) => {
        csvLines.push(...BaseTitleRequirements[achievement.rarety].map((count) => `${name},${count},`));
      });

      res.header('Content-Type', 'text/csv')
        .header('Content-Disposition', 'attachment; filename="titles.csv"')
        .send(csvLines.join('\n'));
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Achievements;
