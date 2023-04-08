import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import { RarityOrder } from '@labrute/core';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';

const Achievements = {
  getAll: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      // Get achievements
      const achievements = await prisma.achievement.findMany({
        where: { userId: user.id },
      });

      // Order by rarity then count
      achievements.sort((a, b) => {
        if (RarityOrder.indexOf(a.rarity) < RarityOrder.indexOf(b.rarity)) return -1;
        if (RarityOrder.indexOf(a.rarity) > RarityOrder.indexOf(b.rarity)) return 1;
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
      });

      res.status(200).send(achievements);
    } catch (error) {
      sendError(res, error);
    }
  },
  getForBrute: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      // Get achievements
      const achievements = await prisma.achievement.findMany({
        where: {
          userId: user.id,
          brute: {
            deletedAt: null,
            name: req.params.name,
          },
        },
      });

      // Order by rarity then count
      achievements.sort((a, b) => {
        if (RarityOrder.indexOf(a.rarity) < RarityOrder.indexOf(b.rarity)) return -1;
        if (RarityOrder.indexOf(a.rarity) > RarityOrder.indexOf(b.rarity)) return 1;
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
      });

      res.status(200).send(achievements);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Achievements;
