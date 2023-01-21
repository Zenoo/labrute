import {
  ARENA_OPPONENTS_COUNT, ARENA_OPPONENTS_MAX_GAP, BruteWithBodyColors, createRandomBruteStats,
  getLevelUpChoices, getSacriPoints, updateBruteData,
} from '@labrute/core';
import {
  DestinyChoiceSide, Gender, Prisma, PrismaClient,
} from '@labrute/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth';
import createSpritesheet from '../utils/createSpritesheet';
import formatSpritesheet from '../utils/formatSpritesheet';
import sendError from '../utils/sendError';

const Brutes = {
  list: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      await auth(prisma, req);

      const brutes = await prisma.brute.findMany({
        where: {
          deleted: false,
        },
      });

      res.send(brutes);
    } catch (error) {
      sendError(res, error);
    }
  },
  get: (prisma: PrismaClient) => async (
    req: Request<{ name: string }, unknown, { include: Prisma.BruteInclude }>,
    res: Response,
  ) => {
    try {
      const brute = await prisma.brute.findFirstOrThrow({
        where: {
          name: req.params.name,
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
          deleted: false,
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

      // Get brute amount for user
      const bruteCount = await prisma.brute.count({
        where: {
          userId: user.id,
          deleted: false,
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
        where: { name: req.body.master, deleted: false },
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
            currentBrute: { connect: { id: brute.id } },
            type: 'child',
            brute: brute.name,
          },
        });
      }

      res.send({ brute, pointsLost });

      // Create animations spritesheet after response to avoid blocking the request
      const spritesheet = await createSpritesheet(brute);

      // Store spritesheet image in database as blob and data as json
      await prisma.brute.update({
        where: { id: brute.id },
        data: {
          spritesheet: spritesheet.image,
          spritesheetJson: formatSpritesheet(spritesheet, brute) as unknown as Prisma.JsonObject,
        },
      });
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
          deleted: false,
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
            brute: { connect: { id: brute.id } },
          },
        });
        firstDestinyChoice = newFirstDestinyChoice;

        const newSecondDestinyChoice = await prisma.destinyChoice.create({
          data: {
            ...newChoices[1],
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
          deleted: false,
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
        data: updatedBruteData,
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
        deleted: false,
      };
      const bruteCount = await prisma.brute.count({
        where: bruteSearch,
      });

      const opponents: BruteWithBodyColors[] = [];
      for (let i = 0; i < ARENA_OPPONENTS_COUNT; i++) {
        const skip = Math.floor(Math.random() * bruteCount);

        // eslint-disable-next-line no-await-in-loop
        const opponent = await prisma.brute.findFirstOrThrow({
          where: bruteSearch,
          skip,
          include: { body: true, colors: true },
        });

        opponents.push(opponent);
      }

      // Complete with lower levels if not enough
      if (opponents.length < ARENA_OPPONENTS_COUNT) {
        const additionalBruteSearch = {
          name: { not: req.params.name },
          level: {
            lt: +req.params.level,
            gte: +req.params.level - ARENA_OPPONENTS_MAX_GAP,
          },
          deleted: false,
        };
        const additionalBruteCount = await prisma.brute.count({
          where: additionalBruteSearch,
        });

        const additionalOpponents: BruteWithBodyColors[] = [];
        for (let i = 0; i < ARENA_OPPONENTS_COUNT - opponents.length; i++) {
          const skip = Math.floor(Math.random() * additionalBruteCount);

          // eslint-disable-next-line no-await-in-loop
          const opponent = await prisma.brute.findFirstOrThrow({
            where: additionalBruteSearch,
            skip,
            include: { body: true, colors: true },
          });

          additionalOpponents.push(opponent);
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
          deleted: false,
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
          deleted: true,
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
      const count = await prisma.brute.count({
        where: {
          name: req.params.name,
          spritesheetJson: { not: Prisma.DbNull },
          deleted: false,
        },
      });

      res.send(count === 1);
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Brutes;
