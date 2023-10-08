import {
  ARENA_OPPONENTS_COUNT,
  ARENA_OPPONENTS_MAX_GAP,
  BruteRestoreResponse,
  BrutesCreateResponse,
  BrutesExistsResponse, BrutesGetDestinyResponse,
  BrutesGetFightsLeftResponse, BrutesGetForRankResponse,
  BrutesGetRankingResponse,
  BruteWithBodyColors, createRandomBruteStats,
  DestinyBranch, ExpectedError, getFightsLeft, getLevelUpChoices,
  getMaxFightsPerDay,
  getSacriPoints, getSacriPointsNeeded, getXPNeeded,
  increaseAchievement, randomBetween, updateBruteData,
} from '@labrute/core';
import {
  Brute,
  DestinyChoiceSide, DestinyChoiceType, Gender, LogType, Prisma, PrismaClient,
} from '@labrute/prisma';
import { Request, Response } from 'express';
import moment from 'moment';
import { Worker } from 'worker_threads';
import auth from '../utils/auth.js';
import checkBody from '../utils/brute/checkBody.js';
import checkColors from '../utils/brute/checkColors.js';
import checkLevelUpAchievements from '../utils/brute/checkLevelUpAchievements.js';
import getOpponents from '../utils/brute/getOpponents.js';
import sendError from '../utils/sendError.js';

const Brutes = {
  list: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req);

      const brutes = await prisma.brute.findMany({
        where: {
          deletedAt: null,
        },
      });

      res.send(brutes);
    } catch (error) {
      sendError(res, error);
    }
  },
  get: (prisma: PrismaClient) => async (
    req: Request<{
      name: string
    }, unknown, {
      include: Prisma.BruteInclude,
      where: Prisma.BruteWhereInput
    }>,
    res: Response,
  ) => {
    try {
      // Check `include` validity
      if (req.body.include) {
        if (req.body.include.tournaments
          && typeof req.body.include.tournaments !== 'boolean'
          && typeof req.body.include.tournaments.where?.date !== 'undefined'
          && req.body.include.tournaments.where.date === null) {
          throw new ExpectedError('Tournament date missing');
        }
      }

      const brute = await prisma.brute.findFirst({
        where: {
          ...req.body.where,
          name: req.params.name,
          deletedAt: null,
        },
        include: req.body.include,
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
      body: Prisma.BruteBodyCreateWithoutBruteInput,
      colors: Prisma.BruteColorsCreateWithoutBruteInput,
      master: string | null,
    }>,
    res: Response<BrutesCreateResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Check colors validity
      checkColors(req.body.gender, req.body.colors);

      // Check body validity
      checkBody(req.body.gender, req.body.body);

      // Check if name is available
      const count = await prisma.brute.count({
        where: {
          name: req.body.name,
          deletedAt: null,
        },
      });

      if (count > 0) {
        throw new ExpectedError('This name is already taken');
      }

      let pointsLost = 0;
      let newLimit = user.bruteLimit;
      // Refuse if user has too many brutes and not enough points
      if (user.brutes.length >= user.bruteLimit) {
        const sacriPoints = getSacriPointsNeeded(user);
        if (user.sacrificePoints < sacriPoints) {
          throw new ExpectedError(`You have reached your brute limit. You need ${sacriPoints} Sacripoints to unlock a new brute.`);
        } else {
          // Remove XXX sacrifice points and update brute limit
          await prisma.user.update({
            where: { id: user.id },
            data: {
              sacrificePoints: { decrement: sacriPoints },
              bruteLimit: { increment: 1 },
            },
          });
          pointsLost = sacriPoints;
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

      // Create brute
      const brute = await prisma.brute.create({
        data: {
          name: req.body.name,
          ...createRandomBruteStats(),
          gender: req.body.gender,
          user: { connect: { id: user.id } },
          body: { create: req.body.body },
          colors: { create: req.body.colors },
          master: master ? { connect: { id: master.id } } : undefined,
        },
        include: { body: true, colors: true },
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
        });

        // Add log
        await prisma.log.create({
          data: {
            currentBrute: { connect: { id: master.id } },
            type: 'child',
            brute: brute.name,
          },
        });
      }

      // Update achievements
      await checkLevelUpAchievements(prisma, brute, destinyChoice);

      // Generate spritesheet
      // eslint-disable-next-line no-new
      new Worker('./lib/workers/generateSpritesheet.js', {
        workerData: brute,
      });

      res.send({ brute, pointsLost, newLimit });
    } catch (error) {
      sendError(res, error);
    }
  },
  getLevelUpChoices: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          userId: user.id,
          deletedAt: null,
        },
        include: { body: true, colors: true },
      });
      if (!brute) {
        throw new ExpectedError('Brute not found');
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
        brute,
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
      const user = await auth(prisma, req);

      // Get brute
      let brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          userId: user.id,
          deletedAt: null,
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
      }

      const xpNeeded = getXPNeeded(brute.level + 1);

      // Check if brute has enough XP
      if (brute.xp < xpNeeded) {
        throw new ExpectedError('Not enough XP');
      }

      // Get destiny choice
      const destinyChoice = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: brute.id,
          path: { equals: [...brute.destinyPath, req.body.choice] },
        },
      });

      if (!destinyChoice) {
        throw new Error('Destiny choice not found');
      }

      // Update brute data
      const updatedBruteData = updateBruteData(brute, destinyChoice);

      const oldBrute: Brute = {
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
        throw new Error('Brute not found');
      }

      if (freshBrute.xp !== brute.xp) {
        throw new ExpectedError('Wooow, slow your clicks down!');
      }

      // Update brute
      brute = await prisma.brute.update({
        where: { id: brute.id },
        data: {
          ...updatedBruteData,
          destinyPath: { push: req.body.choice },
          xp: { decrement: xpNeeded },
        },
      });

      // Check level up achievements
      await checkLevelUpAchievements(prisma, brute, destinyChoice, oldBrute);

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
      });

      // Add log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute.id } },
          type: 'up',
        },
      });

      if (brute.masterId) {
        // Add log to master
        await prisma.log.create({
          data: {
            currentBrute: { connect: { id: brute.masterId } },
            type: 'childup',
            brute: brute.name,
          },
        });
      }

      res.send(brute);
    } catch (error) {
      sendError(res, error);
    }
  },
  getOpponents: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<BruteWithBodyColors[]>,
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
        include: { opponents: { include: { body: true, colors: true } } },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
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
        });
      }

      res.send(opponents);
    } catch (error) {
      sendError(res, error);
    }
  },
  sacrifice: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      const user = await auth(prisma, req);

      // Get brute
      const brute = await prisma.brute.findFirst({
        where: {
          name: req.params.name,
          userId: user.id,
          deletedAt: null,
        },
      });

      if (!brute) {
        throw new ExpectedError('Brute not found');
      }

      // Prevent sacrificing the day of creation
      if (moment.utc().isSame(moment.utc(brute.createdAt), 'day')) {
        throw new ExpectedError('You cannot sacrifice your brute the day of creation');
      }

      // Add SacriPoints to user
      const sacriPoints = getSacriPoints(brute);
      await prisma.user.update({
        where: { id: user.id },
        data: {
          sacrificePoints: { increment: sacriPoints },
        },
      });

      // Decrease master's pupils count
      if (brute.masterId) {
        await prisma.brute.update({
          where: { id: brute.masterId },
          data: {
            pupilsCount: { decrement: 1 },
          },
        });
      }

      // Remove pupils master
      await prisma.brute.updateMany({
        where: { masterId: brute.id },
        data: {
          masterId: null,
        },
      });

      // Completely delete if fresh brute
      const fightsFought = await prisma.fight.count({
        where: {
          OR: [
            { brute1Id: brute.id },
            { brute2Id: brute.id },
          ],
        },
      });
      if (fightsFought === 0) {
        // Delete body
        if (await prisma.bruteBody.count({ where: { bruteId: brute.id } })) {
          await prisma.bruteBody.delete({
            where: { bruteId: brute.id },
          });
        }
        // Delete colors
        if (await prisma.bruteColors.count({ where: { bruteId: brute.id } })) {
          await prisma.bruteColors.delete({
            where: { bruteId: brute.id },
          });
        }
        // Delete spritesheet
        if (await prisma.bruteSpritesheet.count({ where: { bruteId: brute.id } })) {
          await prisma.bruteSpritesheet.delete({
            where: { bruteId: brute.id },
          });
        }
        // Delete logs
        if (await prisma.log.count({ where: { currentBruteId: brute.id } })) {
          await prisma.log.deleteMany({
            where: { currentBruteId: brute.id },
          });
        }
        // Delete destiny choices
        if (await prisma.destinyChoice.count({ where: { bruteId: brute.id } })) {
          await prisma.destinyChoice.deleteMany({
            where: { bruteId: brute.id },
          });
        }
        await prisma.brute.delete({
          where: { id: brute.id },
        });
      } else {
        // Set brute as deleted
        await prisma.brute.update({
          where: { id: brute.id },
          data: {
            deletedAt: new Date(),
          },
        });
      }

      // Achievement
      await increaseAchievement(prisma, user.id, null, 'sacrifice');

      res.send({ points: sacriPoints });
    } catch (error) {
      sendError(res, error);
    }
  },
  isReadyToFight: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req);

      // Check if brute has a spritesheet
      const count = await prisma.bruteSpritesheet.count({
        where: { brute: { name: req.params.name, deletedAt: null } },
      });

      res.send(count === 1);
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
        include: { body: true, colors: true },
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
          include: { body: true, colors: true },
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
            include: { body: true, colors: true },
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
            include: { body: true, colors: true },
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

      const user = await auth(prisma, req);

      if (!name) {
        throw new Error('Missing name');
      }

      let brute = await prisma.brute.findFirst({
        where: {
          name,
          deletedAt: null,
          userId: user.id,
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
      }

      if (!brute.canRankUpSince) {
        throw new ExpectedError('Brute cannot rank up');
      }

      if (brute.ranking === 0) {
        throw new ExpectedError('Brute is already at the highest rank');
      }

      // Get first bonus
      const bonus = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: brute.id,
          path: { equals: [] },
        },
      });

      if (!bonus) {
        throw new Error('Brute has no first bonus');
      }

      // Update the brute
      brute = await prisma.brute.update({
        where: { id: brute.id },
        data: {
          // Random stats
          ...createRandomBruteStats(
            bonus.type,
            bonus.type === DestinyChoiceType.pet
              ? bonus.pet
              : bonus.type === DestinyChoiceType.weapon
                ? bonus.weapon
                : bonus.skill,
          ),
          // Rank up
          ranking: brute.ranking - 1,
          canRankUpSince: null,
          // Reset destiny
          destinyPath: [],
        },
      });

      // Reset fights left
      brute = await prisma.brute.update({
        where: { id: brute.id },
        data: {
          fightsLeft: getMaxFightsPerDay(brute),
        },
      });

      // Achievement
      await increaseAchievement(prisma, user.id, brute.id, `rankUp${brute.ranking as 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0}`);

      // Get brute first bonus
      const firstBonus = await prisma.destinyChoice.findFirst({
        where: {
          bruteId: brute.id,
          path: { equals: [] },
        },
      });

      if (!firstBonus) {
        throw new Error('Brute has no first bonus');
      }

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
        include: {
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
          });
        }
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

      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new Error('Unauthorized');
      }

      if (!name) {
        throw new Error('Missing name');
      }

      const brute = await prisma.brute.findFirst({
        where: {
          name,
          deletedAt: null,
        },
      });

      if (!brute) {
        throw new Error('Brute not found');
      }

      // Update the brute
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          ...req.body,
        },
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

      const user = await auth(prisma, req);

      if (!user.admin) {
        throw new ExpectedError('Unauthorized');
      }

      if (!id) {
        throw new ExpectedError('Missing id');
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
        throw new ExpectedError('Brute not found or not deleted');
      }

      // Check if another brute has the same name
      const brutesWithSameName = await prisma.brute.count({
        where: {
          name: brute.name,
          deletedAt: null,
        },
      });

      if (brutesWithSameName > 0) {
        throw new ExpectedError('Another brute has the same name');
      }

      // Restore the brute
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          deletedAt: null,
        },
      });

      res.send({
        success: true,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;
