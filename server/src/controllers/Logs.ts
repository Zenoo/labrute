import { ExpectedError } from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import sendError from '../utils/sendError.js';

const Logs = {
  list: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.params.name) {
        res.send([]);
        return;
      }

      // Get brute id
      const brute = await prisma.brute.findFirst({
        where: { name: req.params.name, deletedAt: null },
        select: { id: true },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      // Get logs
      const logs = await prisma.log.findMany({
        where: { currentBrute: { id: brute.id } },
        orderBy: { id: 'desc' },
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
