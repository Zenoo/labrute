import {
  ARENA_OPPONENTS_COUNT, ARENA_OPPONENTS_MAX_GAP, BrutesGetForRankResponse,
  BrutesGetRankingResponse,
  BruteWithBodyColors, createRandomBruteStats,
  getLevelUpChoices, getSacriPoints, updateBruteData,
} from '@labrute/core';
import {
  DestinyChoiceSide, Gender, Prisma, PrismaClient,
} from '@labrute/prisma';
import { Request, Response } from 'express';
import { Worker } from 'worker_threads';
import auth from '../utils/auth.js';
import checkColors from '../utils/brute/checkColors.js';
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
      const brute = await prisma.brute.findFirstOrThrow({
        where: {
          ...req.body.where,
          name: req.params.name,
          deletedAt: null,
        },
        include: req.body.include,
      });

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
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      // Check colors validity
      checkColors(req.body.gender, req.body.colors);

      // Check if name is available
      const count = await prisma.brute.count({
        where: {
          name: req.body.name,
          deletedAt: null,
        },
      });

      if (count > 0) {
        throw new Error('This name is already taken');
      }

      // Get brute amount for user
      const bruteCount = await prisma.brute.count({
        where: {
          userId: user.id,
          deletedAt: null,
        },
      });

      let pointsLost = 0;
      // Refuse if user has too many brutes and not enough points
      if (bruteCount >= user.bruteLimit) {
        if (user.sacrificePoints < 500) {
          throw new Error('You have reached your brute limit. You need 500 Sacripoints to unlock a new brute.');
        } else {
          // Remove 500 sacrifice points and update brute limit
          await prisma.user.update({
            where: { id: user.id },
            data: {
              sacrificePoints: { decrement: 500 },
              bruteLimit: { increment: 1 },
            },
          });
          pointsLost = 500;
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

      // Generate spritesheet
      // eslint-disable-next-line no-new
      new Worker('./lib/workers/generateSpritesheet.js', {
        workerData: brute,
      });

      res.send({ brute, pointsLost });
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
        throw new Error('Brute not found');
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
    res: Response,
  ) => {
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
        throw new Error('Brute not found');
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

      // Update brute
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          ...updatedBruteData,
          destinyPath: { push: req.body.choice },
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

      res.send({});
    } catch (error) {
      sendError(res, error);
    }
  },
  getOpponents: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req);

      // Get same level random opponents
      const bruteSearch = {
        name: { not: req.params.name },
        level: +req.params.level,
        deletedAt: null,
      };
      const bruteCount = await prisma.brute.count({
        where: bruteSearch,
      });

      // Get ARENA_OPPONENTS_COUNT random indexes between 0 and bruteCount
      const opponentIndexes: number[] = [];
      while (opponentIndexes.length < bruteCount
        && opponentIndexes.length < ARENA_OPPONENTS_COUNT) {
        const randomIndex = Math.floor(Math.random() * bruteCount);
        if (!opponentIndexes.includes(randomIndex)) {
          opponentIndexes.push(randomIndex);
        }
      }

      const opponents: BruteWithBodyColors[] = [];
      for (let i = 0; i < opponentIndexes.length; i++) {
        const skip = opponentIndexes[i];

        // eslint-disable-next-line no-await-in-loop
        const opponent = await prisma.brute.findFirst({
          where: {
            ...bruteSearch,
          },
          skip,
          include: { body: true, colors: true },
        });

        if (opponent) {
          opponents.push(opponent);
        }
      }

      // Complete with lower levels if not enough
      if (opponents.length < ARENA_OPPONENTS_COUNT) {
        const additionalBruteSearch = {
          name: { not: req.params.name },
          level: {
            lt: +req.params.level,
            gte: +req.params.level - ARENA_OPPONENTS_MAX_GAP,
          },
          deletedAt: null,
        };
        const additionalBruteCount = await prisma.brute.count({
          where: additionalBruteSearch,
        });

        // Get remaining random indexes between 0 and additionalBruteCount
        const additionalOpponentIndexes: number[] = [];
        while (additionalOpponentIndexes.length < additionalBruteCount
          && additionalOpponentIndexes.length < ARENA_OPPONENTS_COUNT - opponents.length) {
          const randomIndex = Math.floor(Math.random() * additionalBruteCount);
          if (!additionalOpponentIndexes.includes(randomIndex)) {
            additionalOpponentIndexes.push(randomIndex);
          }
        }

        const additionalOpponents: BruteWithBodyColors[] = [];
        for (let i = 0; i < additionalOpponentIndexes.length; i++) {
          const skip = additionalOpponentIndexes[i];

          // eslint-disable-next-line no-await-in-loop
          const opponent = await prisma.brute.findFirst({
            where: {
              ...additionalBruteSearch,
            },
            skip,
            include: { body: true, colors: true },
          });

          if (opponent) {
            additionalOpponents.push(opponent);
          }
        }
        opponents.push(...additionalOpponents);
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
        throw new Error('Brute not found');
      }

      // Add SacriPoints to user
      const sacriPoints = getSacriPoints(brute.level);
      await prisma.user.update({
        where: { id: user.id },
        data: {
          sacrificePoints: { increment: sacriPoints },
        },
      });

      // Set brute as deleted
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          deletedAt: new Date(),
        },
      });

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
    res: Response,
  ) => {
    try {
      if (!req.params.name) {
        throw new Error('Missing name');
      }

      let rank: number;

      // Get brute rank if not provided
      if (typeof req.params.rank === 'undefined') {
        rank = (await prisma.brute.findFirstOrThrow({
          where: { name: req.params.name, deletedAt: null },
          select: { ranking: true },
        })).ranking;
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

      const result: BrutesGetForRankResponse = {
        topBrutes,
        nearbyBrutes: [],
        position: 0,
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
      const brute = await prisma.brute.findFirstOrThrow({
        where: { name, deletedAt: null },
        select: {
          ranking: true, level: true, xp: true, userId: true,
        },
      });

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
};

export default Brutes;
