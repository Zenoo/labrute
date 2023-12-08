import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import { ExpectedError } from '@labrute/core';
import sendError from '../utils/sendError.js';
import { LOGGER } from '../context.js';

const Logs = {
  list: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    const now = new Date();
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
        where: {
          currentBruteId: brute.id,
        },
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

    LOGGER.info(`Logs.list: ${req.params.name} - ${new Date().getTime() - now.getTime()}ms`);
  },
};

export default Logs;
