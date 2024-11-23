import {
  AchievementData, BruteDeletionReason, ExpectedError,
  RaretyOrder,
  UserBannedListResponse,
  UserGetAdminResponse, UserGetNextModifiersResponse, UserGetProfileResponse,
  UserMultipleAccountsListResponse,
  UserUpdateSettingsRequest,
  UsersAdminUpdateRequest,
  UsersAuthenticateResponse,
  getFightsLeft,
  isUuid,
} from '@labrute/core';
import {
  Achievement, FightModifier, InventoryItemType, Lang,
  PrismaClient,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import moment from 'moment';
import fetch from 'node-fetch';
import { DISCORD, GLOBAL, LOGGER } from '../context.js';
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
          following: {
            select: { id: true },
          },
          notifications: {
            where: { read: false },
          },
        },
      });

      if (!user) {
        throw new Error('User not found');
      }

      res.send({
        user,
        modifiers: await ServerState.getModifiers(prisma),
        currentEvent: await ServerState.getCurrentEvent(prisma),
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
          await prisma.achievement.deleteMany({
            where: {
              userId: user.id,
              name: achievement.name,
            },
          });
        } else {
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
            await prisma.achievement.update({
              where: {
                id: existingAchievement.id,
              },
              data: {
                count: achievement.count,
              },
            });
          } else {
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

      if (!isUuid(req.params.userId)) {
        throw new ExpectedError('Invalid user ID');
      }

      const user = await prisma.user.findFirst({
        where: {
          id: req.params.userId,
          bannedAt: null,
        },
        select: {
          id: true,
          name: true,
          gold: true,
          lang: true,
          lastSeen: true,
          brutes: {
            select: {
              id: true,
              name: true,
              gender: true,
              level: true,
              enduranceStat: true,
              enduranceModifier: true,
              enduranceValue: true,
              strengthStat: true,
              strengthModifier: true,
              strengthValue: true,
              speedStat: true,
              speedModifier: true,
              speedValue: true,
              agilityStat: true,
              agilityModifier: true,
              agilityValue: true,
              hp: true,
              body: true,
              colors: true,
              ranking: true,
              skills: true,
              eventId: true,
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
          favoriteFights: {
            select: {
              id: true,
              date: true,
              brute1: {
                select: { id: true, name: true },
              },
              brute2: {
                select: { id: true, name: true },
              },
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
          id: true,
          lastFight: true,
          fightsLeft: true,
          skills: true,
          eventId: true,
        },
      });

      if (!brutes.length) {
        throw new ExpectedError('No brutes found');
      }

      const modifiers = await ServerState.getModifiers(prisma);
      const isDoneForToday = brutes.every((brute) => getFightsLeft(brute, modifiers) === 0);

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

        if (data.includes('404 Not Found')) {
          throw new ExpectedError(translate('dinoRpgServerDown', authed));
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
          OR: [
            { lastFight: { lt: new Date() } },
            { lastFight: null },
          ],
        },
        select: {
          id: true,
          skills: true,
          lastFight: true,
          fightsLeft: true,
          eventId: true,
        },
      });

      const modifiers = await ServerState.getModifiers(prisma);

      for (const brute of brutes) {
        const fightsLeft = getFightsLeft(brute, modifiers) + 1;

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
  ban: (prisma: PrismaClient) => async (
    req: Request<{ userId: string }, unknown, { reason: string }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      if (!isUuid(req.params.userId) || !req.body.reason) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      const user = await prisma.user.findFirst({
        where: { id: req.params.userId },
        select: {
          bannedAt: true,
          ips: true,
          brutes: {
            where: {
              deletedAt: null,
            },
            select: { id: true },
          },
        },
      });

      if (!user) {
        throw new ExpectedError(translate('userNotFound', authed));
      }

      if (user.bannedAt) {
        throw new ExpectedError(translate('userAlreadyBanned', authed));
      }

      // Delete all brutes
      await prisma.brute.updateMany({
        where: {
          userId: req.params.userId,
          deletedAt: null,
        },
        data: {
          deletedAt: new Date(),
          deletionReason: BruteDeletionReason.BANNED_USER,
        },
      });

      // Ban user
      await prisma.user.update({
        where: { id: req.params.userId },
        data: {
          bannedAt: new Date(),
          banReason: req.body.reason,
        },
      });

      // IP ban
      await ServerState.addBannedIps(prisma, user.ips);

      LOGGER.log(`User ${req.params.userId} has been banned by ${authed.id}`);

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  unban: (prisma: PrismaClient) => async (
    req: Request<{ userId: string }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      if (!isUuid(req.params.userId)) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      const user = await prisma.user.findFirst({
        where: { id: req.params.userId },
        select: {
          bannedAt: true,
          ips: true,
          brutes: {
            where: {
              deletedAt: { not: null },
              deletionReason: BruteDeletionReason.BANNED_USER,
            },
            select: { id: true, name: true },
          },
        },
      });

      if (!user) {
        throw new ExpectedError(translate('userNotFound', authed));
      }

      if (!user.bannedAt) {
        throw new ExpectedError(translate('userNotBanned', authed));
      }

      // Unban user
      await prisma.user.update({
        where: { id: req.params.userId },
        data: {
          bannedAt: null,
          banReason: null,
        },
      });

      // IP unban
      await ServerState.removeBannedIps(prisma, user.ips);

      // Restore all brutes
      for (const brute of user.brutes) {
        // Check if the name is available
        const existingBrute = await prisma.brute.count({
          where: {
            name: brute.name,
            deletedAt: null,
          },
        });

        if (existingBrute) {
          // Rename brute with _unbanned suffix
          await prisma.brute.update({
            where: { id: brute.id },
            data: {
              name: `${brute.name}_unbanned`,
            },
          });

          // Add 1x free name change
          await prisma.inventoryItem.upsert({
            where: {
              type_bruteId: {
                type: InventoryItemType.nameChange,
                bruteId: brute.id,
              },
            },
            create: {
              type: InventoryItemType.nameChange,
              count: 1,
              bruteId: brute.id,
            },
            update: {
              count: {
                increment: 1,
              },
            },
          });
        }

        // Restore brute
        await prisma.brute.update({
          where: { id: brute.id },
          data: {
            deletedAt: null,
            deletionReason: null,
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
  bannedList: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<UserBannedListResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const users = await prisma.user.findMany({
        where: {
          bannedAt: { not: null },
        },
        select: {
          id: true,
          name: true,
          bannedAt: true,
          banReason: true,
        },
      });

      res.send(users);
    } catch (error) {
      sendError(res, error);
    }
  },
  multipleAccountsList: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<UserMultipleAccountsListResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const ips = await prisma.$queryRaw<UserMultipleAccountsListResponse>`
        SELECT ip, array_agg(id) AS users
        FROM (
          SELECT unnest(ips) AS ip, id
          FROM "User"
          WHERE "bannedAt" IS NULL
        )
        GROUP BY ip
        HAVING COUNT(id) > 1;
      `;

      res.send(ips);
    } catch (error) {
      sendError(res, error);
    }
  },
  getNextModifiers: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<UserGetNextModifiersResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      res.send(await ServerState.getNextModifiers(prisma));
    } catch (error) {
      sendError(res, error);
    }
  },
  setNextModifiers: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { modifiers: FightModifier[] }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const admin = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!admin?.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      const { modifiers } = req.body;

      if (!modifiers || !Array.isArray(modifiers)) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      await ServerState.setNextModifiers(prisma, modifiers);

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  toggleFollow: (prisma: PrismaClient) => async (
    req: Request<{ bruteId: string }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      if (!isUuid(req.params.bruteId)) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { following: { select: { id: true } } },
      });

      if (!user) {
        throw new Error(translate('userNotFound', user));
      }

      if (user.following.some((brute) => brute.id === req.params.bruteId)) {
        // Unfollow
        await prisma.user.update({
          where: { id: authed.id },
          data: {
            following: {
              disconnect: {
                id: req.params.bruteId,
              },
            },
          },
        });
      } else {
        // Follow
        await prisma.user.update({
          where: { id: authed.id },
          data: {
            following: {
              connect: {
                id: req.params.bruteId,
              },
            },
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
  updateSettings: (prisma: PrismaClient) => async (
    req: Request<never, unknown, UserUpdateSettingsRequest>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      const {
        fightSpeed,
        backgroundMusic,
        displayVersusPage,
        displayOpponentDetails,
      } = req.body;

      if (![1, 2].includes(fightSpeed) || typeof backgroundMusic !== 'boolean' || typeof displayVersusPage !== 'boolean' || typeof displayOpponentDetails !== 'boolean') {
        throw new ExpectedError(translate('invalidParameters', user));
      }

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          fightSpeed,
          backgroundMusic,
          displayVersusPage,
          displayOpponentDetails,
        },
        select: { id: true },
      });

      res.send({ message: 'Settings updated' });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Users;
