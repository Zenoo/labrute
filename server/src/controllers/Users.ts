import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth';
import sendError from '../utils/sendError';

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
};

export default Users;
