import {
  AchievementData, ExpectedError, RaretyOrder,
  UserGetAdminResponse, UserGetProfileResponse,
  UsersAdminUpdateRequest,
  UsersAuthenticateResponse,
  getFightsLeft,
  isUuid,
} from '@labrute/core';
import {
  Achievement, Lang,
  PrismaClient,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import moment from 'moment';
import fetch from 'node-fetch';
import { DISCORD, GLOBAL } from '../context.js';
import dailyJob from '../dailyJob.js';
import ServerState from '../utils/ServerState.js';
import auth from '../utils/auth.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

const Users = {
  get: (prisma: PrismaClient) => async (
    req: Request<{
      id: string
    }>,
    res: Response<UserGetAdminResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new Error(translate('unauthorized', authed));
      }

      if (!isUuid(req.params.id)) {
        throw new Error(translate('invalidParameters', authed));
      }

      const user = await prisma.user.findFirst({
        where: {
          id: req.params.id,
        },
        include: {
          achievements: {
            select: {
              count: true,
              name: true,
            },
          },
        },
      });

      if (!user) {
        throw new ExpectedError(translate('userNotFound', authed));
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

      res.send({
        ...user,
        achievements: mergedAchievements,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  authenticate: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<UsersAuthenticateResponse>,
  ) => {
    try {
      const { id } = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id },
        include: {
          brutes: {
            where: {
              deletedAt: null,
            },
            orderBy: [
              { favorite: 'desc' },
              { createdAt: 'asc' },
            ],
          },
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      res.send({
        user,
        modifiers: await ServerState.getModifiers(prisma),
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  runDailyJob: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!user?.admin) {
        throw new Error(translate('unauthorized', authed));
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

      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      if (!id) {
        throw new ExpectedError(translate('noIDProvided', authed));
      }

      const user = await prisma.user.findFirst({
        where: {
          id,
        },
      });

      if (!user) {
        throw new Error(translate('userNotFound', authed));
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
      for (const achievement of req.body.achievements) {
        if (achievement.count === 0) {
          // eslint-disable-next-line no-await-in-loop
          await prisma.achievement.deleteMany({
            where: {
              userId: user.id,
              name: achievement.name,
            },
          });
        } else {
          // eslint-disable-next-line no-await-in-loop
          const existingAchievement = await prisma.achievement.findFirst({
            where: {
              userId: user.id,
              name: achievement.name,
            },
            select: {
              id: true,
            },
          });

          if (existingAchievement) {
            // eslint-disable-next-line no-await-in-loop
            await prisma.achievement.update({
              where: {
                id: existingAchievement.id,
              },
              data: {
                count: achievement.count,
              },
            });
          } else {
            // eslint-disable-next-line no-await-in-loop
            await prisma.achievement.create({
              data: {
                userId: user.id,
                name: achievement.name,
                count: achievement.count,
              },
            });
          }
        }
      }

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
              ranking: true,
            },
            where: {
              deletedAt: null,
            },
            orderBy: [
              { ranking: 'asc' },
              { level: 'desc' },
            ],
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
  isDoneForToday: (prisma: PrismaClient) => async (
    req: Request<{ userId: string }>,
    res: Response<boolean>,
  ) => {
    try {
      if (!req.params.userId) {
        throw new ExpectedError('No user ID provided');
      }

      const brutes = await prisma.brute.findMany({
        where: {
          userId: req.params.userId,
          deletedAt: null,
        },
        select: {
          lastFight: true,
          fightsLeft: true,
          skills: true,
        },
      });

      const isDoneForToday = brutes.every((brute) => getFightsLeft(brute) === 0);

      res.send(isDoneForToday);
    } catch (error) {
      sendError(res, error);
    }
  },
  getDinoRpgRewards: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: {
          dinorpgDone: true,
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      if (user.dinorpgDone && moment.utc().isSame(moment.utc(user.dinorpgDone), 'day')) {
        throw new ExpectedError(translate('alreadyClaimed', authed));
      }

      let dinoRpgDone = false;

      const dinoRpgResponse = await fetch(`${GLOBAL.config.dinoRpgUrl}/api/v1/eternaltwin/${authed.id}`);
      const data = await dinoRpgResponse.text();

      dinoRpgDone = data === 'true';

      if (data !== 'true' && data !== 'false') {
        if (data.includes('doesn\'t exist.')) {
          throw new ExpectedError(translate('noDinoRpgAccount', authed));
        }

        throw new Error(data);
      }

      if (!dinoRpgDone) {
        throw new ExpectedError(translate('needToUseEveryAction', authed));
      }

      // Update brutes who already fought today (+1 fight left)
      await prisma.user.update({
        where: { id: authed.id },
        data: {
          dinorpgDone: new Date(),
          brutes: {
            updateMany: {
              where: {
                deletedAt: null,
                lastFight: {
                  gte: new Date(),
                },
              },
              data: {
                fightsLeft: {
                  increment: 1,
                },
              },
            },
          },
        },
      });

      // Get brutes who didn't fight today
      const brutes = await prisma.brute.findMany({
        where: {
          userId: authed.id,
          deletedAt: null,
          lastFight: {
            lt: new Date(),
          },
        },
        select: {
          id: true,
          skills: true,
          lastFight: true,
          fightsLeft: true,
        },
      });

      for (const brute of brutes) {
        const fightsLeft = getFightsLeft(brute) + 1;

        // eslint-disable-next-line no-await-in-loop
        await prisma.brute.update({
          where: {
            id: brute.id,
          },
          data: {
            fightsLeft,
            lastFight: new Date(),
          },
        });
      }

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Users;
