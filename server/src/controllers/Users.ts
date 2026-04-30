import {
  AchievementData, BruteDeletionReason, ExpectedError,
  ForbiddenError,
  KnownFingerprintAddRequest,
  KnownFingerprintListResponse,
  KnownFingerprintRemoveRequest,
  LimitError,
  MissingElementError,
  Modifiers,
  NotFoundError,
  RaretyOrder,
  UserBannedListResponse,
  UserGetAdminRequest,
  UserGetAdminResponse, UserGetNextModifiersResponse, UserGetProfileResponse,
  UserMultipleAccountsListResponse,
  UserTransferBruteRequest,
  UserUpdateSettingsRequest,
  UsersAdminUpdateRequest,
  UsersAuthenticateRequest,
  UsersAuthenticateResponse,
  Version,
  getFightsLeft,
  getTieredSkills,
  isUuid,
} from '@labrute/core';
import {
  Achievement,
  InventoryItemType, Lang, PrismaClient,
  UserLogType,
} from '@labrute/prisma';
import dayjs from 'dayjs';
import type { Request, Response } from 'express';
import fetch from 'node-fetch';
import { DISCORD, GLOBAL } from '../context.js';
import { dailyJob } from '../dailyJob.js';
import { ServerState } from '../utils/ServerState.js';
import { auth } from '../utils/auth.js';
import { createUserLog } from '../utils/createUserLog.js';
import { sendError } from '../utils/sendError.js';
import { translate } from '../utils/translate.js';
import { banUser } from '../utils/user/banUser.js';
import { decryptFPEvent } from '../utils/fingerprint.js';
import { deleteUserBrutes } from '../utils/user/deleteUserBrutes.js';
import { ilike } from '../utils/ilike.js';
import { traced } from '../utils/trace.js';

export const Users = {
  get: (prisma: PrismaClient) => async (
    req: Request<UserGetAdminRequest>,
    res: Response<UserGetAdminResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req, { admin: true });

      if (!req.params.identifier) {
        throw new ExpectedError(translate('missingParameters', authed));
      }

      const isId = isUuid(req.params.identifier);

      const user = await traced('users.get.getUser', () => prisma.user.findFirst({
        where: {
          id: isId ? req.params.identifier : undefined,
          name: !isId ? ilike(req.params.identifier) : undefined,
        },
        include: {
          achievements: {
            select: {
              count: true,
              name: true,
            },
          },
          brutes: {
            select: {
              id: true,
              name: true,
              deletedAt: true,
              deletionReason: true,
            },
          },
        },
      }));

      if (!user) {
        throw new NotFoundError(translate('userNotFound', authed));
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

      // Get other users sharing fingerprints
      const otherUsersSharingFingerprints = await traced('users.get.otherUsersSharingFingerprints', () => prisma.user.findMany({
        where: {
          fingerprints: {
            hasSome: user.fingerprints,
          },
          id: {
            not: user.id,
          },
        },
        select: {
          id: true,
          name: true,
          bannedAt: true,
          banReason: true,
          fingerprints: true,
          lastSeen: true,
          createdAt: true,
        },
      }));

      res.send({
        ...user,
        achievements: mergedAchievements,
        otherUsersSharingFingerprints,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  authenticate: (prisma: PrismaClient) => async (
    req: Request<never, unknown, UsersAuthenticateRequest>,
    res: Response<UsersAuthenticateResponse>,
  ) => {
    try {
      let authResult: Awaited<ReturnType<typeof auth>>;
      try {
        authResult = await auth(prisma, req, { skipFingerprintCheck: true });

        if (typeof req.body.eventId !== 'string') {
          throw new ExpectedError('Invalid event ID');
        }

        const fingerprint = decryptFPEvent(req.body.eventId);

        if (!authResult.fingerprints.includes(fingerprint)) {
          await traced('users.authenticate.updateUserFingerprints', () => prisma.user.update({
            where: { id: authResult.id },
            data: {
              fingerprints: {
                push: fingerprint,
              },
            },
          }));
          authResult.fingerprints.push(fingerprint);
        }
      } catch (_error) {
        res.send({
          modifiers: await ServerState.getModifiers(prisma),
          currentEvent: await ServerState.getCurrentEvent(prisma),
          version: Version,
        });
        return;
      }

      const user = await traced('users.authenticate.getUser', () => prisma.user.findFirst({
        where: { id: authResult.id },
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
      }));

      if (!user) {
        throw new Error('User not found');
      }

      res.send({
        user,
        modifiers: await ServerState.getModifiers(prisma),
        currentEvent: await ServerState.getCurrentEvent(prisma),
        version: Version,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  runDailyJob: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req, { admin: true });

      await dailyJob(prisma)().catch((error: Error) => {
        DISCORD().sendError(error);
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

      await traced('users.changeLanguage.updateUserLang', () => prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          lang: req.body.lang,
        },
        select: { id: true },
      }));

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

      await traced('users.changeFightSpeed.updateUserFightSpeed', () => prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          fightSpeed: req.body.fightSpeed,
        },
        select: { id: true },
      }));

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

      await traced('users.toggleBackgroundMusic.updateUserBackgroundMusic', () => prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          backgroundMusic: req.body.backgroundMusic,
        },
        select: { id: true },
      }));

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

      const authed = await auth(prisma, req, { admin: true });

      if (!id) {
        throw new MissingElementError(translate('noIDProvided', authed));
      }

      const user = await traced('users.adminUpdate.getUser', () => prisma.user.findFirst({
        where: {
          id,
        },
      }));

      if (!user) {
        throw new NotFoundError(translate('userNotFound', authed));
      }

      // Update the user
      await traced('users.adminUpdate.updateUser', () => prisma.user.update({
        where: { id: user.id },
        data: {
          ...req.body.user,
        },
        select: { id: true },
      }));

      // Update achievements
      for (const achievement of req.body.achievements) {
        if (achievement.count === 0) {
          await traced('users.adminUpdate.deleteAchievement', () => prisma.achievement.deleteMany({
            where: {
              userId: user.id,
              name: achievement.name,
            },
          }));
        } else {
          const existingAchievement = await traced('users.adminUpdate.getExistingAchievement', () => prisma.achievement.findFirst({
            where: {
              userId: user.id,
              name: achievement.name,
            },
            select: {
              id: true,
            },
          }));

          if (existingAchievement) {
            await traced('users.adminUpdate.updateAchievement', () => prisma.achievement.update({
              where: {
                id: existingAchievement.id,
              },
              data: {
                count: achievement.count,
              },
            }));
          } else {
            await traced('users.adminUpdate.createAchievement', () => prisma.achievement.create({
              data: {
                userId: user.id,
                name: achievement.name,
                count: achievement.count,
              },
            }));
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
        throw new MissingElementError('No user ID provided');
      }

      if (!isUuid(req.params.userId)) {
        throw new ExpectedError('Invalid user ID');
      }

      const user = await traced('users.getProfile.getUser', () => prisma.user.findFirst({
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
              weapons: true,
              pets: true,
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
              fighters: true,
              brute1: {
                select: { id: true, name: true },
              },
              brute2: {
                select: { id: true, name: true },
              },
            },
          },
        },
      }));

      if (!user) {
        throw new NotFoundError(translate('userNotFound'));
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
    // Disable CORS
    res.header('Access-Control-Allow-Origin', '*');

    try {
      if (!req.params.userId) {
        throw new MissingElementError('No user ID provided');
      }

      const brutes = await traced('users.isDoneForToday.getBrutes', () => prisma.brute.findMany({
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
      }));

      if (!brutes.length) {
        throw new NotFoundError('No brutes found');
      }

      const modifiers = await ServerState.getModifiers(prisma);
      const isDoneForToday = brutes.every(
        (brute) => getFightsLeft({ ...brute, skills: getTieredSkills(brute, modifiers) }) === 0,
      );

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

      const user = await traced('users.getDinoRpgRewards.getUser', () => prisma.user.findFirst({
        where: { id: authed.id },
        select: {
          dinorpgDone: true,
        },
      }));

      if (!user) {
        throw new Error('User not found');
      }

      if (user.dinorpgDone && dayjs.utc().isSame(dayjs.utc(user.dinorpgDone), 'day')) {
        throw new LimitError(translate('alreadyClaimed', authed));
      }

      let dinoRpgDone = false;

      const dinoRpgResponse = await fetch(`${GLOBAL.config.dinoRpgUrl}/api/v1/eternaltwin/${authed.id}`);
      const data = await dinoRpgResponse.text();

      dinoRpgDone = data === 'true';

      if (data !== 'true' && data !== 'false') {
        if (data.includes('doesn\'t exist.')) {
          throw new NotFoundError(translate('noDinoRpgAccount', authed));
        }

        if (data.includes('404 Not Found')) {
          throw new NotFoundError(translate('dinoRpgServerDown', authed));
        }

        throw new ExpectedError(data);
      }

      if (!dinoRpgDone) {
        throw new ExpectedError(translate('needToUseEveryAction', authed));
      }

      // Update brutes who already fought today (+1 fight left)
      await traced('users.getDinoRpgRewards.updateUser', () => prisma.user.update({
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
      }));

      // Get brutes who didn't fight today
      const brutes = await traced('users.getDinoRpgRewards.getBrutes', () => prisma.brute.findMany({
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
      }));

      const modifiers = await ServerState.getModifiers(prisma);

      for (const brute of brutes) {
        const fightsLeft = getFightsLeft(
          { ...brute, skills: getTieredSkills(brute, modifiers) },
        ) + 1;

        await traced('users.getDinoRpgRewards.updateBrute', () => prisma.brute.update({
          where: {
            id: brute.id,
          },
          data: {
            fightsLeft,
            lastFight: new Date(),
          },
        }));
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
      const authed = await auth(prisma, req, { admin: true });

      if (!isUuid(req.params.userId) || !req.body.reason) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      await banUser(prisma, req.params.userId, req.body.reason, authed);

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
      const authed = await auth(prisma, req, { admin: true });

      if (!isUuid(req.params.userId)) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      const user = await traced('users.unban.getUser', () => prisma.user.findFirst({
        where: { id: req.params.userId },
        select: {
          bannedAt: true,
          ips: true,
          fingerprints: true,
          brutes: {
            where: {
              deletedAt: { not: null },
              deletionReason: BruteDeletionReason.BANNED_USER,
            },
            select: { id: true, name: true },
          },
        },
      }));

      if (!user) {
        throw new NotFoundError(translate('userNotFound', authed));
      }

      if (!user.bannedAt) {
        throw new ForbiddenError(translate('userNotBanned', authed));
      }

      // Unban user
      await traced('users.unban.updateUser', () => prisma.user.update({
        where: { id: req.params.userId },
        data: {
          bannedAt: null,
          banReason: null,
        },
      }));

      // IP unban
      await ServerState.removeBannedIps(prisma, user.ips);

      // Fingerprint unban (exclude known fingerprints)
      const fingerprintsToUnban: string[] = [];
      for (const fingerprint of user.fingerprints) {
        const isKnown = await ServerState.isFingerprintKnown(prisma, fingerprint);
        if (!isKnown) {
          fingerprintsToUnban.push(fingerprint);
        }
      }
      await ServerState.removeBannedFingerprints(prisma, fingerprintsToUnban);

      // Restore all brutes
      for (const brute of user.brutes) {
        // Check if the name is available
        const existingBrute = await traced('users.unban.getExistingBrute', () => prisma.brute.count({
          where: {
            name: brute.name,
            deletedAt: null,
          },
        }));

        if (existingBrute) {
          // Rename brute with _unbanned suffix
          await traced('users.unban.updateBruteName', () => prisma.brute.update({
            where: { id: brute.id },
            data: {
              name: `${brute.name}_unbanned`,
            },
          }));

          // Add 1x free name change
          await traced('users.unban.upsertInventoryItem', () => prisma.inventoryItem.upsert({
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
          }));
        }

        // Restore brute
        await traced('users.unban.updateBrute', () => prisma.brute.update({
          where: { id: brute.id },
          data: {
            deletedAt: null,
            deletionReason: null,
          },
        }));
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
      await auth(prisma, req, { admin: true });

      const users = await traced('users.bannedList.getUsers', () => prisma.user.findMany({
        where: {
          bannedAt: { not: null },
        },
        select: {
          id: true,
          name: true,
          bannedAt: true,
          banReason: true,
        },
      }));

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
      await auth(prisma, req, { admin: true });

      const ips = await traced('users.multipleAccountsList.getIps', () => prisma.$queryRaw<UserMultipleAccountsListResponse>`
        SELECT ip, array_agg(id) AS users
        FROM (
          SELECT unnest(ips) AS ip, id
          FROM "User"
          WHERE "bannedAt" IS NULL
        )
        GROUP BY ip
        HAVING COUNT(id) > 1;
      `);

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
      await auth(prisma, req, { admin: true });

      res.send(await ServerState.getNextModifiers(prisma));
    } catch (error) {
      sendError(res, error);
    }
  },
  setNextModifiers: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { modifiers: Modifiers }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req, { admin: true });

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

      const user = await traced('users.toggleFollow.getUser', () => prisma.user.findFirst({
        where: { id: authed.id },
        select: { following: { select: { id: true } } },
      }));

      if (!user) {
        throw new Error(translate('userNotFound', user));
      }

      if (user.following.some((brute) => brute.id === req.params.bruteId)) {
        // Unfollow
        await traced('users.toggleFollow.unfollow', () => prisma.user.update({
          where: { id: authed.id },
          data: {
            following: {
              disconnect: {
                id: req.params.bruteId,
              },
            },
          },
        }));
      } else {
        // Follow
        await traced('users.toggleFollow.follow', () => prisma.user.update({
          where: { id: authed.id },
          data: {
            following: {
              connect: {
                id: req.params.bruteId,
              },
            },
          },
        }));
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

      await traced('users.updateSettings.updateUser', () => prisma.user.update({
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
      }));

      res.send({ message: 'Settings updated' });
    } catch (error) {
      sendError(res, error);
    }
  },
  disconnect: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Disconnect log
      createUserLog(prisma, {
        type: UserLogType.DISCONNECT,
        userId: user.id,
      });

      res.send({ message: 'Disconnected' });
    } catch (error) {
      sendError(res, error);
    }
  },
  deleteAccount: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);
      const user = await traced('users.deleteAccount.getUser', () => prisma.user.findFirst({
        where: { id: authed.id },
        select: {
          id: true,
          createdAt: true,
          brutes: {
            where: {
              deletedAt: null,
            },
            select: {
              id: true,
              clanId: true,
              level: true,
              ranking: true,
              masterOfClan: { select: { id: true } },
            },
          },
        },
      }));

      if (!user) {
        throw new NotFoundError(translate('userNotFound', authed));
      }

      // Prevent deleting the day of creation
      if (dayjs.utc().isSame(dayjs.utc(user.createdAt), 'day')) {
        throw new ForbiddenError(translate('cannotDeleteSameDay', authed));
      }

      await deleteUserBrutes(prisma, user);

      // Delete account (soft delete)
      await traced('users.deleteAccount.updateUser', () => prisma.user.update({
        where: { id: user.id },
        data: {
          bannedAt: new Date(),
          banReason: 'account_deleted',
        },
      }));

      createUserLog(prisma, {
        type: UserLogType.DELETED,
        userId: user.id,
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  transferBrute: (prisma: PrismaClient) => async (
    req: Request<never, unknown, UserTransferBruteRequest>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const { bruteId, targetUserId } = req.body;

      if (!isUuid(bruteId) || !isUuid(targetUserId)) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      if (targetUserId === authed.id) {
        throw new ExpectedError(translate('invalidParameters', authed));
      }

      const brute = await traced('users.transferBrute.getBrute', () => prisma.brute.findFirst({
        where: {
          id: bruteId,
          userId: authed.id,
          deletedAt: null,
        },
        select: {
          id: true,
          name: true,
        },
      }));

      if (!brute) {
        throw new NotFoundError(translate('bruteNotFound', authed));
      }

      const user = await traced('users.transferBrute.getUser', () => prisma.user.findFirst({
        where: { id: authed.id },
        select: {
          transferedBrutesCount: true,
          fingerprints: true,
          createdAt: true,
        },
      }));

      if (!user) {
        throw new NotFoundError(translate('userNotFound', authed));
      }

      if (user.transferedBrutesCount >= 1) {
        throw new LimitError(translate('transferLimitReached', authed));
      }

      const targetUser = await traced('users.transferBrute.getTargetUser', () => prisma.user.findFirst({
        where: {
          id: targetUserId,
          bannedAt: null,
        },
        select: {
          id: true,
          name: true,
          bruteLimit: true,
          fingerprints: true,
          brutes: {
            where: {
              deletedAt: null,
            },
            select: {
              id: true,
            },
          },
        },
      }));

      if (!targetUser) {
        throw new NotFoundError(translate('targetUserNotFound', authed));
      }

      if (!targetUser.fingerprints.some((fp) => user.fingerprints.includes(fp))) {
        throw new ForbiddenError(translate('targetUserWithoutSharedFingerprint', authed));
      }

      if (targetUser.brutes.length >= targetUser.bruteLimit) {
        throw new LimitError(translate('targetUserBruteLimitReached', authed));
      }

      // Check if the user was created after the transfer method was implemented (2026-04-20)
      if (dayjs.utc(user.createdAt).isAfter(dayjs.utc('2026-04-20'))) {
        await banUser(prisma, authed.id, 'Transfer abuse');
        await banUser(prisma, targetUser.id, 'Transfer abuse');
        throw new ForbiddenError('Goodbye');
      }

      // Transfer brute
      await traced('users.transferBrute.updateBrute', () => prisma.brute.update({
        where: { id: brute.id },
        data: {
          userId: targetUser.id,
          favorite: false,
        },
      }));

      // Transfer achievements related to the brute
      await traced('users.transferBrute.updateAchievements', () => prisma.achievement.updateMany({
        where: {
          userId: authed.id,
          bruteId: brute.id,
        },
        data: {
          userId: targetUser.id,
        },
      }));

      // Transfer inventory items related to the brute
      await traced('users.transferBrute.updateInventoryItems', () => prisma.inventoryItem.updateMany({
        where: {
          userId: authed.id,
          bruteId: brute.id,
        },
        data: {
          userId: targetUser.id,
        },
      }));

      // Increment transfer count
      await traced('users.transferBrute.incrementTransferCount', () => prisma.user.update({
        where: { id: authed.id },
        data: {
          transferedBrutesCount: {
            increment: 1,
          },
        },
      }));

      createUserLog(prisma, {
        type: UserLogType.TRANSFER_BRUTE,
        userId: authed.id,
        bruteId: brute.id,
        targetUserId: targetUser.id,
      });

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  knownFingerprintsList: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<KnownFingerprintListResponse>,
  ) => {
    try {
      await auth(prisma, req, { admin: true });

      const knownFingerprints = await traced('users.knownFingerprintsList.getKnownFingerprints', () => prisma.knownFingerprint.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      }));

      res.send(knownFingerprints);
    } catch (error) {
      sendError(res, error);
    }
  },
  addKnownFingerprint: (prisma: PrismaClient) => async (
    req: Request<never, unknown, KnownFingerprintAddRequest>,
    res: Response<{ success: boolean }>,
  ) => {
    try {
      const authed = await auth(prisma, req, { admin: true });

      if (!req.body.fingerprint) {
        throw new ExpectedError(translate('missingParameters', authed));
      }

      await ServerState.addKnownFingerprint(
        prisma,
        req.body.fingerprint,
        req.body.description,
      );

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  removeKnownFingerprint: (prisma: PrismaClient) => async (
    req: Request<never, unknown, KnownFingerprintRemoveRequest>,
    res: Response<{ success: boolean }>,
  ) => {
    try {
      const authed = await auth(prisma, req, { admin: true });

      if (!req.body.fingerprint) {
        throw new ExpectedError(translate('missingParameters', authed));
      }

      await ServerState.removeKnownFingerprint(prisma, req.body.fingerprint);

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
};
