import {
  AchievementData,
  BaseTitleRequirements, ExpectedError, RaretyOrder,
} from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import sendError from '../utils/sendError.js';

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
      });

      // Merge achievements with same name
      const mergedAchievements = achievements.reduce((acc, achievement) => {
        const existingAchievement = acc.find((a) => a.name === achievement.name);
        if (existingAchievement) {
          existingAchievement.count += achievement.count;
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
