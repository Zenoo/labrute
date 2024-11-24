import { ExpectedError, LogGetForUserFeedResponse, LogListResponse } from '@labrute/core';
import { LogType, PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import sendError from '../utils/sendError.js';
import { ilike } from '../utils/ilike.js';
import auth from '../utils/auth.js';
import translate from '../utils/translate.js';

const Logs = {
  list: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<LogListResponse>,
  ) => {
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
  getForUserFeed: (prisma: PrismaClient) => async (
    req: Request<{ page: string }>,
    res: Response<LogGetForUserFeedResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.page) {
        throw new ExpectedError(translate('invalidParameters', user));
      }

      // Get followed brutes
      const brutes = await prisma.brute.findMany({
        where: {
          followers: {
            some: {
              id: user.id,
            },
          },
        },
        select: {
          id: true,
          name: true,
          gender: true,
          body: true,
          colors: true,
        },
      });

      const now = new Date();

      // Get logs
      const logs = await prisma.log.findMany({
        where: {
          date: {
            lte: now,
          },
          type: {
            in: [
              LogType.lvl,
              LogType.up,
            ],
          },
          currentBrute: {
            followers: {
              some: {
                id: user.id,
              },
            },
          },
        },
        orderBy: { date: 'desc' },
        take: 20,
        skip: +req.params.page * 20,
        include: {
          currentBrute: {
            select: { name: true },
          },
          destinyChoice: true,
        },
      });

      res.status(200).send({ brutes, logs });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Logs;
