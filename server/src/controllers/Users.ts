import {
  AchievementData, ExpectedError, RaretyOrder, UserGetProfileResponse, UsersAdminUpdateRequest,
} from '@labrute/core';
import {
  Achievement, Lang, Prisma, PrismaClient,
} from '@labrute/prisma';
import { Request, Response } from 'express';
import { DISCORD } from '../context.js';
import dailyJob from '../dailyJob.js';
import auth from '../utils/auth.js';
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

      await dailyJob(prisma)().catch((error: Error) => {
        DISCORD.sendError(error);
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
        select: { id: true },
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
        select: { id: true },
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
        select: { id: true },
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
        select: { id: true },
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
  getProfile: (prisma: PrismaClient) => async (
    req: Request<{
      userId: string
    }>,
    res: Response<UserGetProfileResponse>,
  ) => {
    try {
      if (!req.params.userId) {
        throw new ExpectedError('No user ID provided');
      }

      const user = await prisma.user.findFirst({
        where: {
          id: req.params.userId,
        },
        select: {
          id: true,
          name: true,
          gold: true,
          lang: true,
          brutes: {
            select: {
              id: true,
              name: true,
              gender: true,
              level: true,
              strengthValue: true,
              speedValue: true,
              agilityValue: true,
              hp: true,
              body: true,
              colors: true,
            },
            where: {
              deletedAt: null,
            },
          },
          achievements: {
            select: {
              name: true,
              count: true,
            },
          },
        },
      });

      if (!user) {
        throw new ExpectedError(translate('userNotFound'));
      }

      // Merge achievements with same name
      const mergedAchievements = user.achievements.reduce((acc, achievement) => {
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
      }, [] as Pick<Achievement, 'count' | 'name'>[]);

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

      res.send({
        ...user,
        achievements: mergedAchievements,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Users;
