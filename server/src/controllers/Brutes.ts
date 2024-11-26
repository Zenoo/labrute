import {
  ARENA_OPPONENTS_COUNT,
  AdminPanelBrute,
  BruteDeletionReason,
  BruteGetInventoryResponse,
  BruteRankings,
  BruteRestoreResponse,
  BruteUpdateEventRoundWatchedResponse,
  BrutesCreateResponse,
  BrutesExistsResponse, BrutesGetClanIdAsMasterResponse, BrutesGetDestinyResponse,
  BrutesGetFightsLeftResponse, BrutesGetForRankResponse,
  BrutesGetForVersusResponse,
  BrutesGetLevelUpChoicesResponse,
  BrutesGetOpponentsResponse,
  BrutesGetRankingResponse,
  DestinyBranch, EventFreeResets, ExpectedError,
  HookBrute,
  MAX_FAVORITE_BRUTES,
  RESET_PRICE,
  canLevelUp,
  createRandomBruteStats,
  getBruteGoldValue,
  getFightsLeft,
  getGoldNeededForNewBrute,
  getLevelUpChoices,
  getRandomStartingStats,
  getXPNeeded,
  isNameValid,
  updateBruteData,
} from '@labrute/core';
import {
  Brute,
  DestinyChoiceSide, DestinyChoiceType, EventStatus, Gender,
  InventoryItemType, LogType, PetName, Prisma, PrismaClient, SkillName, TournamentType,
  WeaponName,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import moment from 'moment';
import { DISCORD, LOGGER } from '../context.js';
import auth from '../utils/auth.js';
import checkBody from '../utils/brute/checkBody.js';
import checkColors from '../utils/brute/checkColors.js';
import checkLevelUpAchievements from '../utils/brute/checkLevelUpAchievements.js';
import getOpponents from '../utils/brute/getOpponents.js';
import { resetBrute } from '../utils/brute/resetBrute.js';
import updateClanPoints from '../utils/clan/updateClanPoints.js';
import { ilike } from '../utils/ilike.js';
import sendError from '../utils/sendError.js';
import ServerState from '../utils/ServerState.js';
import translate from '../utils/translate.js';
import { increaseAchievement } from './Achievements.js';

const Brutes = {
  getForVersus: (prisma: PrismaClient) => async (
    req: Request<{
      name: string
    }>,
    res: Response<BrutesGetForVersusResponse>,
  ) => {
    try {
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
        },
        select: {
          id: true,
          name: true,
          body: true,
          colors: true,
          gender: true,
          level: true,
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
          name: ilike(req.params.name),
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
              lastSeen: true,
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
          name: ilike(req.params.name),
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
          name: ilike(req.params.name),
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
      eventId: string | null,
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

      if (req.body.gender !== Gender.male && req.body.gender !== Gender.female) {
        throw new ExpectedError(translate('invalidParameters', authed));
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
          name: ilike(req.body.name),
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
            select: { id: true, eventId: true },
          },
        },
      });

      if (!user) {
        throw new Error(translate('userNotFound', authed));
      }

      // Only one brute per event
      if (req.body.eventId && user.brutes.some((b) => b.eventId === req.body.eventId)) {
        throw new ExpectedError(translate('oneBrutePerEvent', authed));
      }

      // No creation for started events
      if (req.body.eventId) {
        const event = await prisma.event.findFirst({
          where: { id: req.body.eventId },
          select: { status: true },
        });

        if (!event) {
          throw new ExpectedError(translate('eventNotFound', authed));
        }

        if (event.status !== EventStatus.starting) {
          throw new ExpectedError(translate('eventAlreadyStarted', authed));
        }
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
          event: req.body.eventId ? { connect: { id: req.body.eventId } } : undefined,
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
        select: { id: true },
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
            type: LogType.child,
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
          name: ilike(req.params.name),
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
          name: ilike(req.params.name),
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
          lastFight: true,
          fightsLeft: true,
          eventId: true,
        },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      // Check event max level
      if (brute.eventId) {
        const event = await prisma.event.findFirst({
          where: { id: brute.eventId },
          select: { maxLevel: true },
        });

        if (!event) {
          throw new ExpectedError(translate('eventNotFound', authed));
        }

        if (brute.level >= event.maxLevel) {
          throw new ExpectedError(translate('eventMaxLevelReached', authed));
        }
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
          type: LogType.up,
          destinyChoice: { connect: { id: destinyChoice.id } },
          level: updatedBrute.level,
        },
        select: { id: true },
      });

      if (updatedBrute.masterId) {
        // Add log to master
        await prisma.log.create({
          data: {
            currentBrute: { connect: { id: updatedBrute.masterId } },
            type: LogType.childup,
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
          name: ilike(req.params.name),
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
              ranking: true,
              level: true,
              gender: true,
              hp: true,
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
              deletedAt: true,
              body: true,
              colors: true,
              skills: true,
              weapons: true,
              pets: true,
              eventId: true,
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
          name: ilike(req.params.name),
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
          eventId: true,
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
          where: { name: ilike(req.params.name), deletedAt: null },
          select: { ranking: true },
        });

        if (!brute) {
          throw new ExpectedError('Brute not found');
        }
        rank = brute.ranking;
      } else {
        rank = +req.params.rank;
      }

      // rank -1 means event brutes
      const rankOrEvent = rank === -1
        ? { eventId: { not: null } }
        : rank === BruteRankings[0]
          // Hide event brutes from the first rank
          ? { eventId: null, ranking: rank }
          : { ranking: rank };

      // Get first 15 brutes of the same rank with the highest level and XP
      const topBrutes = await prisma.brute.findMany({
        where: {
          deletedAt: null,
          userId: { not: null },
          ...rankOrEvent,
        },
        orderBy: rank === 0
          ? [
            { ascensions: 'desc' },
            { level: 'desc' },
            { xp: 'desc' },
          ]
          : [
            { level: 'desc' },
            { xp: 'desc' },
          ],
        take: 15,
        select: {
          id: true,
          name: true,
          body: true,
          colors: true,
          gender: true,
          ranking: true,
          level: true,
          ascensions: true,
        },
      });

      // Get total brutes of the same rank
      const total = await prisma.brute.count({
        where: {
          deletedAt: null,
          userId: { not: null },
          ...rankOrEvent,
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
            name: ilike(req.params.name),
            deletedAt: null,
            userId: { not: null },
            ...rankOrEvent,
          },
          select: {
            id: true,
            name: true,
            body: true,
            colors: true,
            gender: true,
            ranking: true,
            level: true,
            xp: true,
            ascensions: true,
          },
        });

        // Don't rank bot brutes
        if (brute) {
          // Find the brute position in the list
          const position = await prisma.brute.count({
            where: {
              ...rankOrEvent,
              deletedAt: null,
              id: { not: brute.id },
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
              ...rankOrEvent,
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
            select: {
              id: true,
              name: true,
              body: true,
              colors: true,
              gender: true,
              ranking: true,
              level: true,
              ascensions: true,
            },
          });

          const nearbyLowerBrutes = await prisma.brute.findMany({
            where: {
              ...rankOrEvent,
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
            select: {
              id: true,
              name: true,
              body: true,
              colors: true,
              gender: true,
              ranking: true,
              level: true,
              ascensions: true,
            },
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

      // Get the brute
      const brute = await prisma.brute.findFirst({
        where: { name: ilike(name), deletedAt: null },
        select: {
          id: true,
          ranking: true,
          level: true,
          xp: true,
          userId: true,
          ascensions: true,
          eventId: true,
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

      const rankOrEvent = brute.eventId
        ? { eventId: { not: null } }
        : rank === BruteRankings[0]
          // Hide event brutes from the first rank
          ? { eventId: null, ranking: rank }
          : { ranking: rank };

      // Find the brute position
      const position = await prisma.brute.count({
        where: {
          ...rankOrEvent,
          deletedAt: null,
          id: { not: brute.id },
          userId: { not: null },
          OR: rank === 0
            ? [
              { ascensions: { gt: brute.ascensions } },
              {
                AND: [
                  { ascensions: { equals: brute.ascensions } },
                  {
                    OR: [
                      { level: { gt: brute.level } },
                      { level: brute.level, xp: { gt: brute.xp } },
                    ],
                  },
                ],
              },
            ]
            : [
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

      const brute = await prisma.brute.findFirst({
        where: { name: ilike(name), deletedAt: null },
        select: { name: true },
      });

      if (!brute) {
        res.send({
          exists: false,
        });
        return;
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
          name: ilike(name),
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
          eventId: true,
          xp: true,
          ascensions: true,
          ascendedWeapons: true,
          ascendedSkills: true,
          ascendedPets: true,
        },
      });

      if (!userBrute) {
        throw new ExpectedError(translate('bruteNotFound', authed));
      }

      if (!userBrute.canRankUpSince) {
        throw new ExpectedError(translate('bruteCannotRankUp', authed));
      }

      if (userBrute.ranking === 0) {
        throw new ExpectedError(translate('bruteAlreadyMaxRank', authed));
      }

      const brute = await resetBrute({
        prisma,
        brute: userBrute,
        free: true,
        rankUp: true,
      });

      // Achievement
      await increaseAchievement(prisma, authed.id, brute.id, `rankUp${brute.ranking as 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0}`);

      // Add rank up log
      await prisma.log.create({
        data: {
          currentBruteId: brute.id,
          type: LogType.lvl,
          level: brute.ranking,
        },
        select: { id: true },
      });

      // Update clan points
      if (userBrute.clanId) {
        await updateClanPoints(prisma, userBrute.clanId, 'add', brute, userBrute);
      }

      // Send notification
      DISCORD.sendRankUpNotification({
        name: brute.name,
        ranking: brute.ranking,
        level: userBrute.level,
      });

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  ascend: (prisma: PrismaClient) => async (
    req: Request<{
      name: string,
    }, unknown, {
      data: {
        weapon?: WeaponName,
        skill?: SkillName,
        pet?: PetName
      }
    }>,
    res: Response,
  ) => {
    try {
      const { name } = req.params;
      const { data: { weapon, skill, pet } } = req.body;

      const authed = await auth(prisma, req);

      if (!name) {
        throw new Error(translate('missingName', authed));
      }

      if (!weapon && !skill && !pet) {
        throw new Error(translate('missingChoice', authed));
      }

      if ((weapon && skill) || (weapon && pet) || (skill && pet)) {
        throw new Error(translate('multipleChoices', authed));
      }

      const isWeapon = Object.values(WeaponName).includes(weapon as WeaponName);
      const isSkill = Object.values(SkillName).includes(skill as SkillName);
      const isPet = Object.values(PetName).includes(pet as PetName);
      if (!isWeapon && !isSkill && !isPet) {
        throw new Error('Wrong choice type');
      }

      const userBrute = await prisma.brute.findFirst({
        where: {
          name: ilike(name),
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
          eventId: true,
          xp: true,
          weapons: true,
          skills: true,
          pets: true,
          ascensions: true,
          ascendedWeapons: true,
          ascendedSkills: true,
          ascendedPets: true,
          destinyChoices: true,
        },
      });

      if (!userBrute) {
        throw new ExpectedError(translate('bruteNotFound', authed));
      }

      if (!userBrute.canRankUpSince) {
        throw new ExpectedError(translate('bruteCannotRankUp', authed));
      }

      if (userBrute.ranking !== 0) {
        throw new ExpectedError(translate('bruteNotMaxRank', authed));
      }

      if (isWeapon) {
        if (!userBrute.weapons.includes(weapon as WeaponName)) {
          throw new ExpectedError(translate('bruteMissingWeapon', authed));
        }
        if (userBrute.ascendedWeapons.includes(weapon as WeaponName)) {
          throw new ExpectedError(translate('bruteWeaponAlreadyAscended', authed));
        }
      }
      if (isSkill) {
        if (!userBrute.skills.includes(skill as SkillName)) {
          throw new ExpectedError(translate('bruteMissingSkill', authed));
        }
        if (userBrute.ascendedSkills.includes(skill as SkillName)) {
          throw new ExpectedError(translate('bruteSkillAlreadyAscended', authed));
        }
      }
      if (isPet) {
        if (!userBrute.pets.includes(pet as PetName)) {
          throw new ExpectedError(translate('bruteMissingPet', authed));
        }
        if (userBrute.ascendedPets.includes(pet as PetName)) {
          throw new ExpectedError(translate('brutePetAlreadyAscended', authed));
        }

        if (pet === PetName.dog2 && !userBrute.ascendedPets.includes(PetName.dog1)) {
          throw new ExpectedError(translate('bruteMissingPet', authed));
        }
        if (pet === PetName.dog3 && !userBrute.ascendedPets.includes(PetName.dog2)) {
          throw new ExpectedError(translate('bruteMissingPet', authed));
        }
      }

      const brute = await resetBrute({
        prisma,
        brute: userBrute,
        free: true,
        ascended: { weapon, skill, pet },
      });

      // Achievement
      await increaseAchievement(prisma, authed.id, brute.id, 'ascend');

      // Add ascend log
      await prisma.log.create({
        data: {
          currentBruteId: brute.id,
          type: LogType.ascend,
          level: brute.ascensions,
        },
        select: { id: true },
      });

      // Update clan points
      if (userBrute.clanId) {
        await updateClanPoints(prisma, userBrute.clanId, 'add', brute, userBrute);
      }

      // Send notification
      DISCORD.sendAscendNotification({
        name: brute.name,
      }, brute.ascensions);

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
        throw new ExpectedError('Missing name');
      }

      const brute = await prisma.brute.findFirst({
        where: { name: ilike(name), deletedAt: null },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      const destinyChoices = await prisma.destinyChoice.findMany({
        where: { bruteId: brute.id },
      });

      // Get Destiny tree
      const getBranchRecursive = (
        path: DestinyChoiceSide[],
        level: number,
      ) => {
        const destinyChoice = destinyChoices.find((c) => c.path.join(',') === path.join(','));

        if (!destinyChoice) {
          return null;
        }

        const branch: DestinyBranch = {
          ...destinyChoice,
          level,
          current: brute.destinyPath.join(',').startsWith(path.join(',')),
          [DestinyChoiceSide.LEFT]: getBranchRecursive(
            [...path, DestinyChoiceSide.LEFT],
            level + 1,
          ),
          [DestinyChoiceSide.RIGHT]: getBranchRecursive(
            [...path, DestinyChoiceSide.RIGHT],
            level + 1,
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
        level: 1,
        current: true,
        [DestinyChoiceSide.LEFT]: getBranchRecursive(
          [DestinyChoiceSide.LEFT],
          2,
        ) as DestinyBranch,
        [DestinyChoiceSide.RIGHT]: getBranchRecursive(
          [DestinyChoiceSide.RIGHT],
          2,
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
        where: { name: ilike(name), deletedAt: null },
        select: {
          id: true,
          fightsLeft: true,
          lastFight: true,
          skills: true,
          eventId: true,
        },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      // Get current modifiers
      const modifiers = await ServerState.getModifiers(prisma);

      const fightsLeft = getFightsLeft(brute, modifiers);

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
          name: ilike(name),
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
          id,
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
          name: ilike(brute.name),
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
          name: ilike(req.params.name),
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
        throw new ExpectedError(translate('bruteNotFound', authed));
      }

      // Check if user has enough gold
      if (!brute.user || (
        (!brute.eventId || brute.resets >= EventFreeResets)
        && brute.user.gold < RESET_PRICE
      )) {
        throw new ExpectedError(translate('notEnoughGold', authed));
      }

      const updatedBrute = await resetBrute({
        prisma,
        brute,
        user: authed,
        free: !!brute.eventId && brute.resets < EventFreeResets,
      });

      // Update clan points
      if (brute.clanId) {
        await updateClanPoints(prisma, brute.clanId, 'add', updatedBrute, brute);
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
          name: ilike(req.params.name),
          deletedAt: null,
          userId: user.id,
        },
        select: { id: true, gender: true },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', user));
      }

      // Check if brute can change visuals
      const inventory = await prisma.inventoryItem.findUnique({
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
        await prisma.inventoryItem.delete({
          where: {
            type_bruteId: {
              bruteId: brute.id,
              type: InventoryItemType.visualReset,
            },
          },
        });
      } else {
        await prisma.inventoryItem.update({
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
          select: { id: true },
        });
      }

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
          name: ilike(newName),
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
          name: ilike(name),
          deletedAt: null,
        },
        select: {
          id: true,
          name: true,
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

      const nameChangeItem = brute.inventory[0];

      if (!nameChangeItem || nameChangeItem.count < 1) {
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
        LOGGER.log(`Brute ${brute.name} changed name to ${newName}`);
      }

      // Update brute name
      await prisma.brute.update({
        where: { id: brute.id },
        data,
      });

      // Remove name change item
      if (nameChangeItem.count === 1) {
        await prisma.inventoryItem.delete({
          where: { id: nameChangeItem.id },
        });
      } else {
        await prisma.inventoryItem.update({
          where: { id: nameChangeItem.id },
          data: {
            count: {
              decrement: 1,
            },
          },
          select: { id: true },
        });
      }

      res.send({ success: true });
    } catch (error) {
      sendError(res, error);
    }
  },
  getInventory: (prisma: PrismaClient) => async (
    req: Request<{ name: string }>,
    res: Response<BruteGetInventoryResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          userId: authed.id,
        },
        select: {
          id: true,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', authed));
      }

      const inventory = await prisma.inventoryItem.findMany({
        where: {
          OR: [
            { bruteId: brute.id },
            { userId: authed.id },
          ],
        },
      });

      res.send(inventory);
    } catch (error) {
      sendError(res, error);
    }
  },
  giveItem: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { id: string, item: InventoryItemType }>,
    res: Response,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const user = await prisma.user.findFirst({
        where: { id: authed.id },
        select: { admin: true },
      });

      if (!user?.admin) {
        throw new Error(translate('unauthorized', authed));
      }

      const brute = await prisma.brute.findFirst({
        where: {
          id: req.body.id,
          deletedAt: null,
        },
        select: { id: true },
      });

      if (!brute) {
        throw new Error(translate('bruteNotFound', authed));
      }

      await prisma.inventoryItem.upsert({
        where: {
          type_bruteId: {
            type: req.body.item,
            bruteId: brute.id,
          },
        },
        create: {
          type: req.body.item,
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
  getClanIdAsMaster: (prisma: PrismaClient) => async (
    req: Request<{ name: string }>,
    res: Response<BrutesGetClanIdAsMasterResponse>,
  ) => {
    try {
      const authed = await auth(prisma, req);

      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          userId: authed.id,
        },
        select: {
          id: true,
          clanId: true,
          clan: {
            select: {
              masterId: true,
            },
          },
        },
      });

      if (!brute) {
        res.send({ id: null });
        return;
      }

      const clanId = brute.clan?.masterId === brute.id ? brute.clanId : null;

      res.send({ id: clanId });
    } catch (error) {
      sendError(res, error);
    }
  },
  updateEventRoundWatched: (prisma: PrismaClient) => async (
    req: Request<{ name: string, fight: string }>,
    res: Response<BruteUpdateEventRoundWatchedResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.name) {
        throw new Error(translate('missingParameters', user));
      }

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: ilike(req.params.name),
          deletedAt: null,
          userId: user.id,
          eventId: { not: null },
        },
        select: {
          id: true,
          eventTournamentRoundWatched: true,
          eventTournamentWatchedDate: true,
          name: true,
        },
      });

      if (!brute) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Get fight
      const fight = await prisma.fight.findFirst({
        where: {
          id: req.params.fight,
        },
        select: {
          loser: true,
          tournamentStep: true,
        },
      });

      if (!fight) {
        throw new ExpectedError(translate('fightNotFound', user));
      }

      const now = moment.utc();
      let roundWatched = fight.tournamentStep;

      // Skip to last round if brute lost
      if (fight.loser === brute.name) {
        roundWatched = 999;
      }

      // Update brute watched tournament step
      await prisma.brute.update({
        where: {
          id: brute.id,
        },
        data: {
          eventTournamentRoundWatched: roundWatched,
          eventTournamentWatchedDate: now.toDate(),
        },
        select: { id: true },
      });

      res.send({
        eventTournamentRoundWatched: roundWatched,
        eventTournamentWatchedDate: now.toDate(),
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;
