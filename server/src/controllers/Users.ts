import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import dailyJob from '../dailyJob.js';
import auth from '../utils/auth.js';
import DiscordUtils from '../utils/DiscordUtils.js';
import sendError from '../utils/sendError.js';

const Users = {
  list: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req);

      const users = await prisma.user.findMany();

      res.send(users);
    } catch (error) {
      sendError(res, error);
    }
  },
  authenticate: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      res.send(user);
    } catch (error) {
      sendError(res, error);
    }
  },
  runDailyJob: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new Error('Unauthorized');
      }

      await dailyJob(prisma)().catch((error) => {
        DiscordUtils.sendLog(error).catch((e) => {
          console.error(e);
        });
      });

      res.send({ message: 'Job run' });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Users;
