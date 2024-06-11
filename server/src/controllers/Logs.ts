import { ExpectedError } from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import sendError from '../utils/sendError.js';
import { ilike } from '../utils/ilike.js';

const Logs = {
  list: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.params.name) {
        res.send([]);
        return;
      }

      // Get brute id
      const brute = await prisma.brute.findFirst({
        where: { name: ilike(req.params.name), deletedAt: null },
        select: { id: true },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      const now = new Date();

      // Get logs
      const logs = await prisma.log.findMany({
        where: {
          currentBruteId: brute.id,
          date: {
            lte: now,
          },
        },
        orderBy: { date: 'desc' },
        take: 7,
        include: {
          currentBrute: {
            select: { name: true },
          },
        },
      });

      res.status(200).send(logs);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Logs;
