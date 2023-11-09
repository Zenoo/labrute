import { Lang, Prisma, PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import { ExpectedError, UsersAdminUpdateRequest } from '@labrute/core';
import dailyJob from '../dailyJob.js';
import auth from '../utils/auth.js';
import DiscordUtils from '../utils/DiscordUtils.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

const Users = {
  get: (prisma: PrismaClient) => async (
    req: Request<{
      name: string
    }, unknown, {
      include: Prisma.UserInclude,
      where: Prisma.UserWhereInput
    }>,
    res: Response,
  ) => {
    try {
      const admin = await auth(prisma, req);

      if (!admin.admin) {
        throw new Error(translate('unauthorized', admin));
      }

      const user = await prisma.user.findFirst({
        where: {
          ...req.body.where,
          name: req.params.name,
        },
        include: req.body.include,
      });

      if (!user) {
        throw new ExpectedError(translate('userNotFound', admin));
      }

      res.send(user);
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
        throw new Error(translate('unauthorized', user));
      }

      await dailyJob(prisma)().catch((error) => {
        DiscordUtils.sendError(error).catch((e) => {
          console.error(e);
        });
      });

      res.send({ message: 'Job run' });
    } catch (error) {
      sendError(res, error);
    }
  },
  changeLanguage: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { lang: Lang }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          lang: req.body.lang,
        },
      });

      res.send({ message: 'Language changed' });
    } catch (error) {
      sendError(res, error);
    }
  },
  changeFightSpeed: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { fightSpeed: number }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      const { fightSpeed } = req.body;

      if (![1, 2].includes(fightSpeed)) {
        throw new Error(translate('invalidParameters', user));
      }

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          fightSpeed: req.body.fightSpeed,
        },
      });

      res.send({ message: 'Fight speed changed' });
    } catch (error) {
      sendError(res, error);
    }
  },
  toggleBackgroundMusic: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { backgroundMusic: boolean }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      const { backgroundMusic } = req.body;

      if (typeof backgroundMusic !== 'boolean') {
        throw new Error(translate('invalidParameters', user));
      }

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          backgroundMusic: req.body.backgroundMusic,
        },
      });

      res.send({ message: 'Background music changed' });
    } catch (error) {
      sendError(res, error);
    }
  },
  adminUpdate: (prisma: PrismaClient) => async (
    req: Request<{ id: string }, unknown, UsersAdminUpdateRequest>,
    res: Response,
  ) => {
    try {
      const { params: { id } } = req;

      const admin = await auth(prisma, req);

      if (!admin.admin) {
        throw new ExpectedError(translate('unauthorized', admin));
      }

      if (!id) {
        throw new ExpectedError(translate('noIDProvided', admin));
      }

      const user = await prisma.user.findFirst({
        where: {
          id,
        },
      });

      if (!user) {
        throw new Error(translate('userNotFound', admin));
      }

      // Update the user
      await prisma.user.update({
        where: { id: user.id },
        data: {
          ...req.body.user,
        },
      });

      // Update achievements
      const queries = [];
      for (const achievement of req.body.achievements) {
        queries.push(
          prisma.achievement.upsert({
            where: {
              userId: achievement.userId,
              id: achievement.id,
            },
            update: {
              count: achievement.count,
            },
            create: {
              userId: user.id,
              name: achievement.name,
              count: achievement.count,
            },
          }),
        );
      }

      await Promise.all(queries);

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Users;
