import {
  ARENA_OPPONENTS_COUNT,
  ARENA_OPPONENTS_MAX_GAP,
  AdminPanelBrute,
  BruteDeletionReason,
  BruteRestoreResponse,
  BrutesCreateResponse,
  BrutesExistsResponse, BrutesGetDestinyResponse,
  BrutesGetFightsLeftResponse, BrutesGetForRankResponse,
  BrutesGetLevelUpChoicesResponse,
  BrutesGetOpponentsResponse,
  BrutesGetRankingResponse,
  DestinyBranch, ExpectedError,
  HookBrute,
  MAX_FAVORITE_BRUTES,
  RESET_PRICE,
  canLevelUp,
  createRandomBruteStats,
  getBruteGoldValue,
  getFightsLeft,
  getGoldNeededForNewBrute,
  getLevelUpChoices,
  getMaxFightsPerDay,
  getRandomStartingStats,
  getXPNeeded,
  isNameValid,
  randomBetween, updateBruteData,
} from '@labrute/core';
import {
  Brute,
  DestinyChoiceSide, DestinyChoiceType, Gender,
  InventoryItemType, LogType, Prisma, PrismaClient, TournamentType,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import moment from 'moment';
import auth from '../utils/auth.js';
import checkBody from '../utils/brute/checkBody.js';
import checkColors from '../utils/brute/checkColors.js';
import checkLevelUpAchievements from '../utils/brute/checkLevelUpAchievements.js';
import getOpponents from '../utils/brute/getOpponents.js';
import updateClanPoints from '../utils/clan/updateClanPoints.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';
import { increaseAchievement } from './Achievements.js';
import { LOGGER } from '../context.js';

const Brutes = {
  getForVersus: (prisma: PrismaClient) => async (
    req: Request<{
      name: string
    }>,
    res: Response<Brute>,
  ) => {
    try {
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
        },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      res.send(brute);
    } catch (error) {
      sendError(res, error);
    }
  },
  getForHook: (prisma: PrismaClient) => async (
    req: Request<{
      name: string
    }>,
    res: Response<HookBrute>,
  ) => {
    try {
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
        },
        include: {
          master: {
            select: {
              id: true,
              name: true,
            },
          },
          clan: {
            select: {
              id: true,
              name: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
            },
          },
          tournaments: {
            where: {
              type: TournamentType.DAILY,
              date: moment.utc().startOf('day').toDate(),
            },
          },
          inventory: {
            select: {
              type: true,
              count: true,
            },
          },
        },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      res.send(brute);
    } catch (error) {
      sendError(res, error);
    }
  },
  getForAdmin: (prisma: PrismaClient) => async (
    req: Request<{
      name: string
    }>,
    res: Response<AdminPanelBrute>,
  ) => {
    try {
      const { id, lang } = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id },
        select: { admin: true },
      });

      if (!user?.admin) {
        throw new ExpectedError(translate('unauthorized', { ...user, lang }));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
        },
        include: {
          user: true,
        },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      res.send(brute);
    } catch (error) {
      sendError(res, error);
    }
  },
  isNameAvailable: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req);

      const count = await prisma.brute.count({
        where: {
          name: req.params.name,
          deletedAt: null,
        },
      });

      res.status(200).send(count === 0);
    } catch (error) {
      sendError(res, error);
    }
  },
  create: (prisma: PrismaClient) => async (
    req: Request<never, unknown, {
      name: string,
      user: string,
      gender: Gender,
      body: string,
      colors: string,
      master: string | null,
    }>,
    res: Response<BrutesCreateResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      // Check name length
      if (!isNameValid(req.body.name)) {
        throw new ExpectedError(translate('invalidName', authed));
      }

      if (typeof req.body.colors !== 'string' || typeof req.body.body !== 'string') {
        throw new ExpectedError('Invalid body or colors');
      }

      // Check colors validity
      checkColors(authed, req.body.gender, req.body.colors);

      // Check body validity
      checkBody(authed, req.body.gender, req.body.body);

      // Check name for banned words
      const banned: { count: bigint }[] = await prisma.$queryRaw`SELECT COUNT(*) FROM "BannedWord" WHERE ${req.body.name.toLowerCase()} LIKE CONCAT('%', word, '%')`;

      if (typeof banned?.[0]?.count !== 'bigint') {
        throw new Error('Error while checking banned words');
      }
      if (banned[0].count > 0) {
        throw new ExpectedError(translate('nameContainsBannedWord', authed));
      }

      // Check if name is available
      const count = await prisma.brute.count({
        where: {
          name: {
            equals: req.body.name,
            mode: 'insensitive',
          },
          deletedAt: null,
        },
      });

      if (count > 0) {
        throw new ExpectedError(translate('nameAlreadyTaken', authed));
      }

      // Get user
      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: {
          id: true,
          gold: true,
          bruteLimit: true,
          brutes: {
            where: { deletedAt: null },
            select: { id: true },
          },
        },
      });

      if (!user) {
        throw new Error(translate('userNotFound', authed));
      }

      let goldLost = 0;
      let newLimit = user.bruteLimit;
      // Refuse if user has too many brutes and not enough gold
      if (user.brutes.length >= user.bruteLimit) {
        const gold = getGoldNeededForNewBrute(user);
        if (user.gold < gold) {
          throw new ExpectedError(translate('bruteLimitReached', authed, { gold }));
        } else {
          // Remove XXX Gold and update brute limit
          await prisma.user.update({
            where: { id: user.id },
            data: {
              gold: { decrement: gold },
              bruteLimit: { increment: 1 },
            },
            select: { id: true },
          });
          goldLost = gold;
          newLimit += 1;
        }
      }

      const master = req.body.master ? await prisma.brute.findFirst({
        where: {
          name: req.body.master,
          deletedAt: null,
          userId: {
            not: user.id,
          },
        },
        select: { id: true },
      }) : undefined;

      const startingStats = getRandomStartingStats();

      // Create brute
      const brute = await prisma.brute.create({
        data: {
          name: req.body.name,
          ...createRandomBruteStats(startingStats),
          gender: req.body.gender,
          user: { connect: { id: user.id } },
          body: req.body.body,
          colors: req.body.colors,
          master: master ? { connect: { id: master.id } } : undefined,
        },
      });

      // Store starting stats
      await prisma.bruteStartingStats.create({
        data: {
          bruteId: brute.id,
          endurance: startingStats.endurance,
          strength: startingStats.strength,
          agility: startingStats.agility,
          speed: startingStats.speed,
        },
      });

      // Get first bonus type
      const firstBonusType = brute.skills.length
        ? DestinyChoiceType.skill
        : brute.weapons.length
          ? DestinyChoiceType.weapon
          : DestinyChoiceType.pet;

      // Store first bonus
      const destinyChoice = await prisma.destinyChoice.create({
        data: {
          type: firstBonusType,
          pet: firstBonusType === DestinyChoiceType.pet
            ? brute.pets[0] : undefined,
          skill: firstBonusType === DestinyChoiceType.skill
            ? brute.skills[0] : undefined,
          weapon: firstBonusType === DestinyChoiceType.weapon
            ? brute.weapons[0] : undefined,
          bruteId: brute.id,
          path: [],
        },
      });

      // Update master's pupils count
      if (master) {
        await prisma.brute.update({
          where: { id: master.id },
          data: { pupilsCount: { increment: 1 } },
          select: { id: true },
        });

        // Add log
        await prisma.log.create({
          data: {
            currentBrute: { connect: { id: master.id } },
            type: 'child',
            brute: brute.name,
          },
          select: { id: true },
        });
      }

      // Update achievements
      await checkLevelUpAchievements(prisma, brute, destinyChoice);

      res.send({ brute, goldLost, newLimit });
    } catch (error) {
      sendError(res, error);
    }
  },
  getLevelUpChoices: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<BrutesGetLevelUpChoicesResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          userId: authed.id,
        },
        select: {
          id: true,
          level: true,
          xp: true,
          destinyPath: true,
          pets: true,
          skills: true,
          weapons: true,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', authed));
      }

      if (!canLevelUp(brute)) {
        throw new ExpectedError(translate('bruteCannotLevelUp', authed));
      }

      const firstChoicePath = [...brute.destinyPath, DestinyChoiceSide.LEFT];
      const secondChoicePath = [...brute.destinyPath, DestinyChoiceSide.RIGHT];

      // Get destiny choices
      let firstDestinyChoice = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: brute.id,
          path: { equals: firstChoicePath },
        },
      });
      let secondDestinyChoice = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: brute.id,
          path: { equals: secondChoicePath },
        },
      });

      if (!firstDestinyChoice || !secondDestinyChoice) {
        const newChoices = getLevelUpChoices(brute);

        // Create destiny choices
        const newFirstDestinyChoice = await prisma.destinyChoice.create({
          data: {
            ...newChoices[0],
            path: firstChoicePath,
            brute: { connect: { id: brute.id } },
          },
        });
        firstDestinyChoice = newFirstDestinyChoice;

        const newSecondDestinyChoice = await prisma.destinyChoice.create({
          data: {
            ...newChoices[1],
            path: secondChoicePath,
            brute: { connect: { id: brute.id } },
          },
        });
        secondDestinyChoice = newSecondDestinyChoice;
      }

      res.send({
        choices: [firstDestinyChoice, secondDestinyChoice],
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  levelUp: (prisma: PrismaClient) => async (
    req: Request<{ name: string }, unknown, { choice: DestinyChoiceSide }>,
    res: Response<Brute>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          userId: authed.id,
        },
        select: {
          id: true,
          level: true,
          xp: true,
          destinyPath: true,
          skills: true,
          enduranceStat: true,
          strengthStat: true,
          agilityStat: true,
          speedStat: true,
          enduranceModifier: true,
          strengthModifier: true,
          agilityModifier: true,
          speedModifier: true,
          enduranceValue: true,
          strengthValue: true,
          agilityValue: true,
          speedValue: true,
          pets: true,
          weapons: true,
          hp: true,
          clanId: true,
          ranking: true,
        },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      const xpNeeded = getXPNeeded(brute.level + 1);

      // Check if brute has enough XP
      if (brute.xp < xpNeeded) {
        throw new ExpectedError(translate('notEnoughXP', authed));
      }

      // Get destiny choice
      const destinyChoice = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: brute.id,
          path: { equals: [...brute.destinyPath, req.body.choice] },
        },
      });

      if (!destinyChoice) {
        throw new ExpectedError(translate('destinyChoiceNotFound', authed));
      }

      // Update brute data
      const updatedBruteData = updateBruteData(brute, destinyChoice);

      const oldBrute = {
        ...brute,
        destinyPath: [...brute.destinyPath],
        pets: [...brute.pets],
        skills: [...brute.skills],
        weapons: [...brute.weapons],
      };

      // Refetch brute XP
      const freshBrute = await prisma.brute.findFirst({
        where: {
          id: brute.id,
        },
        select: { xp: true },
      });

      if (!freshBrute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      if (freshBrute.xp !== brute.xp) {
        throw new ExpectedError(translate('slowDown', authed));
      }

      // Update brute
      const updatedBrute = await prisma.brute.update({
        where: { id: brute.id },
        data: {
          ...updatedBruteData,
          destinyPath: { push: req.body.choice },
          xp: freshBrute.xp - xpNeeded,
        },
      });

      try {
        // Check level up achievements
        await checkLevelUpAchievements(prisma, updatedBrute, destinyChoice, oldBrute);
      } catch (error) {
        LOGGER.log(`Error while checking level up achievements for brute ${updatedBrute.name} with destiny choice ${JSON.stringify(destinyChoice)}`);
        LOGGER.error(error);
      }
      // Get new opponents
      const opponents = await getOpponents(prisma, updatedBrute);

      // Save opponents
      await prisma.brute.update({
        where: {
          id: updatedBrute.id,
        },
        data: {
          opponents: {
            set: opponents.map((o) => ({
              id: o.id,
            })),
          },
          // Update opponentsGeneratedAt
          opponentsGeneratedAt: new Date(),
        },
        select: { id: true },
      });

      // Add log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: updatedBrute.id } },
          type: 'up',
        },
        select: { id: true },
      });

      if (updatedBrute.masterId) {
        // Add log to master
        await prisma.log.create({
          data: {
            currentBrute: { connect: { id: updatedBrute.masterId } },
            type: 'childup',
            brute: updatedBrute.name,
          },
          select: { id: true },
        });
      }

      // Update clan points
      if (brute.clanId) {
        await updateClanPoints(prisma, brute.clanId, 'add', updatedBrute, oldBrute);
      }

      res.send(updatedBrute);
    } catch (error) {
      sendError(res, error);
    }
  },
  getOpponents: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<BrutesGetOpponentsResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          userId: user.id,
        },
        select: {
          id: true,
          name: true,
          level: true,
          opponentsGeneratedAt: true,
          opponents: {
            select: {
              id: true,
              name: true,
              level: true,
              gender: true,
              hp: true,
              strengthValue: true,
              agilityValue: true,
              speedValue: true,
              deletedAt: true,
              body: true,
              colors: true,
            },
          },
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Handle deleted opponents
      let opponents = brute.opponents.filter((o) => o.deletedAt === null);

      // If never generated today or not enough opponents, reset opponents
      if (!brute.opponentsGeneratedAt || moment.utc(brute.opponentsGeneratedAt).isBefore(moment.utc().startOf('day')) || opponents.length < ARENA_OPPONENTS_COUNT) {
        // Get opponents
        opponents = await getOpponents(prisma, brute);

        // Save opponents
        await prisma.brute.update({
          where: {
            id: brute.id,
          },
          data: {
            opponents: {
              set: opponents.map((o) => ({
                id: o.id,
              })),
            },
            // Update opponentsGeneratedAt
            opponentsGeneratedAt: new Date(),
          },
          select: { id: true },
        });
      }

      res.send(opponents);
    } catch (error) {
      sendError(res, error);
    }
  },
  sacrifice: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const authed = await auth(prisma, req);

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          userId: authed.id,
        },
        select: {
          id: true,
          createdAt: true,
          masterId: true,
          clanId: true,
          level: true,
          ranking: true,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', authed));
      }

      // Prevent sacrificing the day of creation
      if (moment.utc().isSame(moment.utc(brute.createdAt), 'day')) {
        throw new ExpectedError(translate('cannotSacrificeSameDay', authed));
      }

      // Check if brute is master of a clan
      const isClanMaster = await prisma.clan.count({
        where: {
          masterId: brute.id,
        },
      });

      if (isClanMaster) {
        throw new ExpectedError(translate('cannotSacrificeClanMaster', authed));
      }

      // Add Gold to user
      const gold = getBruteGoldValue(brute);
      await prisma.user.update({
        where: { id: authed.id },
        data: {
          gold: { increment: gold },
        },
        select: { id: true },
      });

      // Decrease master's pupils count
      if (brute.masterId) {
        await prisma.brute.update({
          where: { id: brute.masterId },
          data: {
            pupilsCount: { decrement: 1 },
          },
          select: { id: true },
        });
      }

      // Remove pupils master
      await prisma.brute.updateMany({
        where: { masterId: brute.id },
        data: {
          masterId: null,
        },
      });

      // Set brute as deleted
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          deletedAt: new Date(),
          clanId: null,
          // Delete join request
          wantToJoinClanId: null,
        },
        select: { id: true },
      });

      // Update clan points
      if (brute.clanId) {
        await updateClanPoints(prisma, brute.clanId, 'remove', brute);
      }

      // Achievement
      await increaseAchievement(prisma, authed.id, null, 'sacrifice');

      res.send({ gold });
    } catch (error) {
      sendError(res, error);
    }
  },
  getForRank: (prisma: PrismaClient) => async (
    req: Request<{
      name?: string
      rank?: string
    }, unknown, never>,
    res: Response<BrutesGetForRankResponse>,
  ) => {
    try {
      if (!req.params.name) {
        throw new Error('Missing name');
      }

      let rank: number;

      // Get brute rank if not provided
      if (typeof req.params.rank === 'undefined') {
        const brute = await prisma.brute.findFirst({
          where: { name: req.params.name, deletedAt: null },
          select: { ranking: true },
        });

        if (!brute) {
          throw new ExpectedError('Brute not found');
        }
        rank = brute.ranking;
      } else {
        rank = +req.params.rank;
      }

      // Get first 15 brutes of the same rank with the highest level and XP
      const topBrutes = await prisma.brute.findMany({
        where: {
          ranking: rank,
          deletedAt: null,
          userId: { not: null },
        },
        orderBy: [
          { level: 'desc' },
          { xp: 'desc' },
        ],
        take: 15,
      });

      // Get total brutes of the same rank
      const total = await prisma.brute.count({
        where: {
          ranking: rank,
          deletedAt: null,
          userId: { not: null },
        },
      });

      const result: BrutesGetForRankResponse = {
        topBrutes,
        nearbyBrutes: [],
        position: 0,
        total,
      };

      // If current brute is not in the list, get it
      if (!topBrutes.find((b) => b.name === req.params.name)) {
        const brute = await prisma.brute.findFirst({
          where: {
            name: req.params.name,
            ranking: rank,
            deletedAt: null,
          },
        });

        // Don't rank bot brutes
        if (brute && brute.userId) {
          // Find the brute position in the list
          const position = await prisma.brute.count({
            where: {
              ranking: rank,
              deletedAt: null,
              name: { not: brute.name },
              userId: { not: null },
              OR: [
                { level: { gt: brute.level } },
                { level: brute.level, xp: { gt: brute.xp } },
              ],
            },
          });

          // Find the brutes around the current brute
          const nearbyHigherBrutes = await prisma.brute.findMany({
            where: {
              ranking: rank,
              deletedAt: null,
              name: { not: brute.name },
              userId: { not: null },
              OR: [
                { level: { gt: brute.level } },
                { level: brute.level, xp: { gt: brute.xp } },
              ],
            },
            orderBy: [
              { level: 'asc' },
              { xp: 'asc' },
            ],
            take: 2,
          });

          const nearbyLowerBrutes = await prisma.brute.findMany({
            where: {
              ranking: rank,
              deletedAt: null,
              name: { not: brute.name },
              userId: { not: null },
              OR: [
                { level: { lt: brute.level } },
                { level: brute.level, xp: { lte: brute.xp } },
              ],
            },
            orderBy: [
              { level: 'desc' },
              { xp: 'desc' },
            ],
            take: 2,
          });

          result.nearbyBrutes = [
            ...nearbyHigherBrutes
              .filter((b) => !topBrutes.find((t) => t.name === b.name))
              .reverse(),
            brute,
            ...nearbyLowerBrutes,
          ];
          result.position = position + 1;
        }
      }

      res.send(result);
    } catch (error) {
      sendError(res, error);
    }
  },
  getRanking: (prisma: PrismaClient) => async (
    req: Request<{
      name?: string
    }, unknown, never>,
    res: Response<BrutesGetRankingResponse>,
  ) => {
    try {
      const { params: { name } } = req;

      if (!name) {
        throw new Error('Missing name');
      }

      // Get the brute ranking
      const brute = await prisma.brute.findFirst({
        where: { name, deletedAt: null },
        select: {
          ranking: true, level: true, xp: true, userId: true,
        },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      // Don't rank bot brutes
      if (!brute.userId) {
        res.send({
          ranking: 0,
        });
        return;
      }

      const rank = brute.ranking;

      // Find the brute position
      const position = await prisma.brute.count({
        where: {
          ranking: rank,
          deletedAt: null,
          name: { not: name },
          userId: { not: null },
          OR: [
            { level: { gt: brute.level } },
            { level: brute.level, xp: { gt: brute.xp } },
          ],
        },
      });

      res.send({
        ranking: position + 1,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  exists: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<BrutesExistsResponse>,
  ) => {
    try {
      const { params: { name } } = req;

      if (!name) {
        throw new Error('Missing name');
      }

      let brute = await prisma.brute.findFirst({
        where: { name, deletedAt: null },
        select: { name: true },
      });

      if (!brute) {
        // Try case insensitive
        brute = await prisma.brute.findFirst({
          where: { name: { equals: name, mode: 'insensitive' }, deletedAt: null },
          select: { name: true },
        });

        if (!brute) {
          res.send({
            exists: false,
          });
          return;
        }
      }

      res.send({
        exists: true,
        name: brute.name,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  rankUp: (prisma: PrismaClient) => async (
    req: Request,
    res: Response,
  ) => {
    try {
      const { params: { name } } = req;

      const authed = await auth(prisma, req);

      if (!name) {
        throw new Error(translate('missingName', authed));
      }

      const userBrute = await prisma.brute.findFirst({
        where: {
          name,
          deletedAt: null,
          userId: authed.id,
        },
        select: {
          id: true,
          ranking: true,
          canRankUpSince: true,
          destinyPath: true,
          clanId: true,
          level: true,
        },
      });

      if (!userBrute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      if (!userBrute.canRankUpSince) {
        throw new ExpectedError(translate('bruteCannotRankUp', authed));
      }

      if (userBrute.ranking === 0) {
        throw new ExpectedError(translate('bruteAlreadyMaxRank', authed));
      }

      // Get first bonus
      const firstBonus = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: userBrute.id,
          path: { equals: [] },
        },
      });

      if (!firstBonus) {
        throw new Error(translate('noFirstBonus', authed));
      }

      // Get base stats
      let baseStats = await prisma.bruteStartingStats.findFirst({
        where: { bruteId: userBrute.id },
        omit: { id: true, bruteId: true },
      });

      if (!baseStats) {
        const newBaseStats = getRandomStartingStats();
        baseStats = newBaseStats;

        // Store starting stats
        await prisma.bruteStartingStats.create({
          data: {
            bruteId: userBrute.id,
            endurance: newBaseStats.endurance,
            strength: newBaseStats.strength,
            agility: newBaseStats.agility,
            speed: newBaseStats.speed,
          },
        });
      }

      // Random stats
      const stats = createRandomBruteStats(
        baseStats,
        firstBonus.type,
        firstBonus.type === DestinyChoiceType.pet
          ? firstBonus.pet
          : firstBonus.type === DestinyChoiceType.weapon
            ? firstBonus.weapon
            : firstBonus.skill,
      );

      // Update the brute
      const brute = await prisma.brute.update({
        where: { id: userBrute.id },
        data: {
          ...stats,
          // Rank up
          ranking: userBrute.ranking - 1,
          canRankUpSince: null,
          tournamentWins: 0,
          // Store previous destiny
          previousDestinyPath: userBrute.destinyPath,
          // Reset destiny
          destinyPath: [],
          // Reset fights left
          fightsLeft: getMaxFightsPerDay(stats),
        },
      });

      // Achievement
      await increaseAchievement(prisma, authed.id, brute.id, `rankUp${brute.ranking as 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0}`);

      // Update achievements for the first bonus
      await checkLevelUpAchievements(prisma, brute, firstBonus);

      // Add rank up log
      await prisma.log.create({
        data: {
          date: new Date(),
          currentBruteId: brute.id,
          type: LogType.lvl,
          level: brute.ranking,
        },
        select: { id: true },
      });

      // Get new opponents
      const opponents = await getOpponents(prisma, brute);

      // Save opponents
      await prisma.brute.update({
        where: {
          id: brute.id,
        },
        data: {
          opponents: {
            set: opponents.map((o) => ({
              id: o.id,
            })),
          },
          // Update opponentsGeneratedAt
          opponentsGeneratedAt: new Date(),
        },
        select: { id: true },
      });

      // Get brutes that have this brute as opponent
      const opponentOf = await prisma.brute.findMany({
        where: {
          opponents: {
            some: {
              id: brute.id,
            },
          },
        },
        select: {
          id: true,
          name: true,
          level: true,
          opponents: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      // Replace this brute in their opponents
      for (const currentBrute of opponentOf) {
        // Get same level random opponent
        const bruteSearch = {
          name: {
            notIn: [
              currentBrute.name,
              ...currentBrute.opponents.map((o) => o.name),
            ],
          },
          level: currentBrute.level,
          deletedAt: null,
        };
        // eslint-disable-next-line no-await-in-loop
        const bruteIds = await prisma.brute.findMany({
          where: bruteSearch,
          select: { id: true },
        }).then((brutes) => brutes.map((b) => b.id));

        let newOpponentId: number | null = null;

        if (bruteIds.length === 0) {
          // Search lower levels if no same level brutes
          // eslint-disable-next-line no-await-in-loop
          const lowerBruteIds = await prisma.brute.findMany({
            where: {
              ...bruteSearch,
              level: {
                lt: +brute.level,
                gte: +brute.level - ARENA_OPPONENTS_MAX_GAP,
              },
            },
            select: { id: true },
          }).then((brutes) => brutes.map((b) => b.id));

          if (lowerBruteIds.length > 0) {
            // Select a random lower level opponent
            newOpponentId = lowerBruteIds[randomBetween(0, lowerBruteIds.length - 1)];
          }
        } else {
          // Select a new random opponent
          newOpponentId = bruteIds[randomBetween(0, bruteIds.length - 1)];
        }

        if (newOpponentId) {
          // Replace the brute with the new opponent
          // eslint-disable-next-line no-await-in-loop
          await prisma.brute.update({
            where: { id: currentBrute.id },
            data: {
              opponents: {
                set: [
                  ...currentBrute.opponents
                    .filter((o) => o.id !== brute?.id)
                    .map((o) => ({ id: o.id })),
                  { id: newOpponentId },
                ],
              },
            },
            select: { id: true },
          });
        } else {
          // Remove the brute from the opponents if no opponent found
          // eslint-disable-next-line no-await-in-loop
          await prisma.brute.update({
            where: { id: currentBrute.id },
            data: {
              opponents: {
                set: currentBrute.opponents
                  .filter((o) => o.id !== brute?.id)
                  .map((o) => ({ id: o.id })),
              },
            },
            select: { id: true },
          });
        }
      }

      // Update clan points
      if (userBrute.clanId) {
        await updateClanPoints(prisma, userBrute.clanId, 'add', brute, userBrute);
      }

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  getDestiny: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<BrutesGetDestinyResponse>,
  ) => {
    try {
      const { params: { name } } = req;

      if (!name) {
        throw new Error('Missing name');
      }

      const brute = await prisma.brute.findFirst({
        where: { name, deletedAt: null },
      });

      if (!brute) {
        throw new Error('Brute not found');
      }

      const destinyChoices = await prisma.destinyChoice.findMany({
        where: { bruteId: brute.id },
      });

      // Get Destiny tree
      const getBranchRecursive = (path: DestinyChoiceSide[]) => {
        const destinyChoice = destinyChoices.find((c) => c.path.join(',') === path.join(','));

        if (!destinyChoice) {
          return null;
        }

        const branch: DestinyBranch = {
          ...destinyChoice,
          current: brute.destinyPath.join(',').startsWith(path.join(',')),
          [DestinyChoiceSide.LEFT]: getBranchRecursive(
            [...path, DestinyChoiceSide.LEFT],
          ),
          [DestinyChoiceSide.RIGHT]: getBranchRecursive(
            [...path, DestinyChoiceSide.RIGHT],
          ),
        };

        return branch;
      };

      // Create Destiny tree
      const firstBonus = destinyChoices.find((c) => c.path.length === 0);

      if (!firstBonus) {
        throw new Error('Brute has no first bonus');
      }

      const destinyTree: DestinyBranch = {
        ...firstBonus,
        current: true,
        [DestinyChoiceSide.LEFT]: getBranchRecursive(
          [DestinyChoiceSide.LEFT],
        ) as DestinyBranch,
        [DestinyChoiceSide.RIGHT]: getBranchRecursive(
          [DestinyChoiceSide.RIGHT],
        ) as DestinyBranch,
      };

      res.send(destinyTree);
    } catch (error) {
      sendError(res, error);
    }
  },
  getFightsLeft: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<BrutesGetFightsLeftResponse>,
  ) => {
    try {
      const { params: { name } } = req;

      if (!name) {
        throw new ExpectedError('Missing name');
      }

      const brute = await prisma.brute.findFirst({
        where: { name, deletedAt: null },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      const fightsLeft = getFightsLeft(brute);

      res.send({
        fightsLeft,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  adminUpdate: (prisma: PrismaClient) => async (
    req: Request<{ name: string }, unknown, Prisma.BruteUncheckedUpdateInput>,
    res: Response,
  ) => {
    try {
      const { params: { name } } = req;

      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!user) {
        throw new Error(translate('userNotFound', authed));
      }

      if (!user.admin) {
        throw new Error(translate('unauthorized', authed));
      }

      if (!name) {
        throw new Error(translate('missingName', authed));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name,
          deletedAt: null,
        },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      // Update the brute
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          ...req.body,
        },
        select: { id: true },
      });

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  restore: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response<BruteRestoreResponse>,
  ) => {
    try {
      const { params: { id } } = req;

      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!user) {
        throw new ExpectedError(translate('userNotFound', authed));
      }

      if (!user.admin) {
        throw new ExpectedError(translate('unauthorized', authed));
      }

      if (!id) {
        throw new ExpectedError(translate('noIDProvided', authed));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          id: +id,
          deletedAt: {
            not: null,
          },
        },
        select: { name: true, id: true },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFoundOrNotDeleted', authed));
      }

      // Check if another brute has the same name
      const brutesWithSameName = await prisma.brute.count({
        where: {
          name: brute.name,
          deletedAt: null,
        },
      });

      if (brutesWithSameName > 0) {
        throw new ExpectedError(translate('anotherBruteHasThisName', authed));
      }

      // Restore the brute
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          deletedAt: null,
        },
        select: { id: true },
      });

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  toggleFavorite: (prisma: PrismaClient) => async (
    req: Request<{ name: string }>,
    res: Response,
  ) => {
    try {
      const { params: { name } } = req;

      const authed = await auth(prisma, req);

      if (!name) {
        throw new Error(translate('missingName', authed));
      }

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: {
          id: true,
          brutes: {
            where: { deletedAt: null },
            select: {
              id: true,
              name: true,
              favorite: true,
            },
          },
        },
      });

      if (!user) {
        throw new Error(translate('userNotFound', authed));
      }

      const brute = user.brutes.find((b) => b.name === name);

      if (!brute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      // Abort if limit reached
      const favoritesCount = user.brutes.filter((b) => b.favorite).length;
      if (!brute.favorite && favoritesCount >= MAX_FAVORITE_BRUTES) {
        throw new ExpectedError(translate('favoriteLimitReached', authed));
      }

      // Toggle favorite
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          favorite: !brute.favorite,
        },
        select: { id: true },
      });

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  reset: (prisma: PrismaClient) => async (
    req: Request<{ name: string }>,
    res: Response<Brute>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          userId: authed.id,
        },
        include: {
          user: {
            select: {
              gold: true,
            },
          },
        },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      // Check if user has enough gold
      if (!brute.user || brute.user.gold < RESET_PRICE) {
        throw new ExpectedError(translate('notEnoughGold', authed));
      }

      // Get first bonus
      const firstBonus = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: brute.id,
          path: { equals: [] },
        },
      });

      if (!firstBonus) {
        throw new Error(translate('noFirstBonus', authed));
      }

      // Remove gold from user
      await prisma.user.update({
        where: { id: authed.id },
        data: {
          gold: { decrement: RESET_PRICE },
        },
        select: { id: true },
      });

      // Get base stats
      let baseStats = await prisma.bruteStartingStats.findFirst({
        where: { bruteId: brute.id },
        omit: { id: true, bruteId: true },
      });

      if (!baseStats) {
        const newBaseStats = getRandomStartingStats();
        baseStats = newBaseStats;

        // Store starting stats
        await prisma.bruteStartingStats.create({
          data: {
            bruteId: brute.id,
            endurance: newBaseStats.endurance,
            strength: newBaseStats.strength,
            agility: newBaseStats.agility,
            speed: newBaseStats.speed,
          },
        });
      }

      // Random stats
      const stats = createRandomBruteStats(
        baseStats,
        firstBonus.type,
        firstBonus.type === DestinyChoiceType.pet
          ? firstBonus.pet
          : firstBonus.type === DestinyChoiceType.weapon
            ? firstBonus.weapon
            : firstBonus.skill,
      );

      // Update the brute
      const updatedBrute: HookBrute = await prisma.brute.update({
        where: { id: brute.id },
        data: {
          ...stats,
          // Store previous destiny
          previousDestinyPath: brute.destinyPath,
          // Reset destiny
          destinyPath: [],
          // Reset fights left
          fightsLeft: getMaxFightsPerDay(stats),
          // Keep ranking
          ranking: brute.ranking,
        },
        include: {
          master: {
            select: {
              id: true,
              name: true,
            },
          },
          clan: {
            select: {
              id: true,
              name: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
            },
          },
          tournaments: {
            where: {
              type: TournamentType.DAILY,
              date: moment.utc().startOf('day').toDate(),
            },
          },
          inventory: true,
        },
      });

      // Update achievements for the first bonus
      await checkLevelUpAchievements(prisma, updatedBrute, firstBonus);

      // Get new opponents
      const opponents = await getOpponents(prisma, updatedBrute);

      // Save opponents
      await prisma.brute.update({
        where: {
          id: updatedBrute.id,
        },
        data: {
          opponents: {
            set: opponents.map((o) => ({
              id: o.id,
            })),
          },
          // Update opponentsGeneratedAt
          opponentsGeneratedAt: new Date(),
        },
        select: { id: true },
      });

      // Get brutes that have this brute as opponent
      const opponentOf = await prisma.brute.findMany({
        where: {
          opponents: {
            some: {
              id: updatedBrute.id,
            },
          },
        },
        select: {
          id: true,
          name: true,
          level: true,
          opponents: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      // Replace this brute in their opponents
      for (const currentBrute of opponentOf) {
        // Get same level random opponent
        const bruteSearch = {
          name: {
            notIn: [
              currentBrute.name,
              ...currentBrute.opponents.map((o) => o.name),
            ],
          },
          level: currentBrute.level,
          deletedAt: null,
        };
        // eslint-disable-next-line no-await-in-loop
        const bruteIds = await prisma.brute.findMany({
          where: bruteSearch,
          select: { id: true },
        }).then((brutes) => brutes.map((b) => b.id));

        let newOpponentId: number | null = null;

        if (bruteIds.length === 0) {
          // Search lower levels if no same level brutes
          // eslint-disable-next-line no-await-in-loop
          const lowerBruteIds = await prisma.brute.findMany({
            where: {
              ...bruteSearch,
              level: {
                lt: +brute.level,
                gte: +brute.level - ARENA_OPPONENTS_MAX_GAP,
              },
            },
            select: { id: true },
          }).then((brutes) => brutes.map((b) => b.id));

          if (lowerBruteIds.length > 0) {
            // Select a random lower level opponent
            newOpponentId = lowerBruteIds[randomBetween(0, lowerBruteIds.length - 1)];
          }
        } else {
          // Select a new random opponent
          newOpponentId = bruteIds[randomBetween(0, bruteIds.length - 1)];
        }

        if (newOpponentId) {
          // Replace the brute with the new opponent
          // eslint-disable-next-line no-await-in-loop
          await prisma.brute.update({
            where: { id: currentBrute.id },
            data: {
              opponents: {
                set: [
                  ...currentBrute.opponents
                    .filter((o) => o.id !== brute?.id)
                    .map((o) => ({ id: o.id })),
                  { id: newOpponentId },
                ],
              },
            },
            select: { id: true },
          });
        } else {
          // Remove the brute from the opponents if no opponent found
          // eslint-disable-next-line no-await-in-loop
          await prisma.brute.update({
            where: { id: currentBrute.id },
            data: {
              opponents: {
                set: currentBrute.opponents
                  .filter((o) => o.id !== brute?.id)
                  .map((o) => ({ id: o.id })),
              },
            },
            select: { id: true },
          });
        }
      }

      // Update clan points
      if (brute.clanId) {
        await updateClanPoints(prisma, brute.clanId, 'add', brute, updatedBrute);
      }

      res.send(updatedBrute);
    } catch (error) {
      sendError(res, error);
    }
  },
  resetVisuals: (prisma: PrismaClient) => async (
    req: Request<{
      name: string,
    }, unknown, {
      body: string,
      colors: string,
    }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Check if user owns the brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true, gender: true },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', user));
      }

      // Check if brute can change visuals
      const inventory = await prisma.bruteInventoryItem.findUnique({
        where: {
          type_bruteId: {
            bruteId: brute.id,
            type: InventoryItemType.visualReset,
          },
        },
      });

      if (!inventory) {
        throw new ExpectedError(translate('unauthorized', user));
      }

      // Check colors validity
      checkColors(user, brute.gender, req.body.colors);

      // Check body validity
      checkBody(user, brute.gender, req.body.body);

      // Update the brute body and colors
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          body: req.body.body,
          colors: req.body.colors,
        },
      });

      // Update the brute inventory
      if (inventory.count === 1) {
        await prisma.bruteInventoryItem.delete({
          where: {
            type_bruteId: {
              bruteId: brute.id,
              type: InventoryItemType.visualReset,
            },
          },
        });
      } else {
        await prisma.bruteInventoryItem.update({
          where: {
            type_bruteId: {
              bruteId: brute.id,
              type: InventoryItemType.visualReset,
            },
          },
          data: {
            count: {
              decrement: 1,
            },
          },
        });
      }

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  giveFreeVisualReset: (prisma: PrismaClient) => async (
    req: Request<{
      name: string,
    }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      // Check is user is admin
      if (!user?.admin) {
        throw new Error(translate('unauthorized', authed));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          deletedAt: null,
        },
        select: { id: true },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      // Give free visual reset
      await prisma.bruteInventoryItem.upsert({
        where: {
          type_bruteId: {
            bruteId: brute.id,
            type: InventoryItemType.visualReset,
          },
        },
        create: {
          type: InventoryItemType.visualReset,
          count: 1,
          bruteId: brute.id,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      });

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  changeName: (prisma: PrismaClient) => async (
    req: Request<{ name: string, newName: string }>,
    res: Response,
  ) => {
    try {
      const { params: { name, newName } } = req;

      const authed = await auth(prisma, req);

      // Check name length
      if (!isNameValid(newName)) {
        throw new ExpectedError(translate('invalidName', authed));
      }

      // Check name for banned words
      const banned: { count: bigint }[] = await prisma.$queryRaw`SELECT COUNT(*) FROM "BannedWord" WHERE ${newName.toLowerCase()} LIKE CONCAT('%', word, '%')`;

      if (typeof banned?.[0]?.count !== 'bigint') {
        throw new Error('Error while checking banned words');
      }
      if (banned[0].count > 0) {
        throw new ExpectedError(translate('nameContainsBannedWord', authed));
      }

      // Check if name is available
      const count = await prisma.brute.count({
        where: {
          name: {
            equals: newName,
            mode: 'insensitive',
          },
          deletedAt: null,
        },
      });

      if (count > 0) {
        throw new ExpectedError(translate('nameAlreadyTaken', authed));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          userId: authed.id,
          name,
          deletedAt: null,
        },
        select: {
          id: true,
          deletionReason: true,
          inventory: {
            where: {
              type: InventoryItemType.nameChange,
            },
            select: {
              count: true,
              id: true,
            },
          },
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', authed));
      }

      if (brute.inventory.length === 0 || brute.inventory[0].count < 1) {
        throw new ExpectedError(translate('noNameChange', authed));
      }

      const data: Prisma.BruteUpdateInput = {
        name: newName,
      };

      if (brute.deletionReason && [
        BruteDeletionReason.DUPLICATE_NAME,
        BruteDeletionReason.INNAPROPRIATE_NAME,
      ].includes(brute.deletionReason as BruteDeletionReason)) {
        data.deletionReason = null;
        data.willBeDeletedAt = null;
      }

      // Update brute name
      await prisma.brute.update({
        where: { id: brute.id },
        data,
      });

      // Remove name change item
      if (brute.inventory[0].count === 1) {
        await prisma.bruteInventoryItem.delete({
          where: { id: brute.inventory[0].id },
        });
      } else {
        await prisma.bruteInventoryItem.update({
          where: { id: brute.inventory[0].id },
          data: {
            count: {
              decrement: 1,
            },
          },
        });
      }

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;
