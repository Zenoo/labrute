import { getFightsLeft } from '@labrute/core';
import { PrismaClient } from '@labrute/prisma';
import { Request, Response } from 'express';
import auth from '../utils/auth.js';
import getOpponents from '../utils/brute/getOpponents.js';
import generateFight from '../utils/fight/generateFight.js';
import sendError from '../utils/sendError.js';

const Fights = {
  get: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.params.name || !req.params.id) {
        throw new Error('Invalid parameters');
      }

      // Get fight
      const fight = await prisma.fight.findFirst({
        where: {
          id: +req.params.id,
          OR: [
            { brute1: { name: req.params.name } },
            { brute2: { name: req.params.name } },
          ],
        },
      });

      if (!fight) {
        throw new Error('Fight not found');
      }

      res.send(fight);
    } catch (error) {
      sendError(res, error);
    }
  },
  create: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { brute1: string, brute2: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.body.brute1 || !req.body.brute2) {
        throw new Error('Invalid parameters');
      }

      // Get brutes
      const brute1 = await prisma.brute.findFirst({
        where: {
          name: req.body.brute1,
          deletedAt: null,
          userId: user.id,
        },
        include: {
          body: true,
          colors: true,
          opponents: {
            select: { name: true },
          },
        },
      });
      if (!brute1) {
        throw new Error('Brute 1 not found');
      }

      const brute2 = await prisma.brute.findFirst({
        where: {
          name: req.body.brute2,
          deletedAt: null,
        },
        include: {
          body: true,
          colors: true,
        },
      });
      if (!brute2) {
        throw new Error('Brute 2 not found');
      }

      // Check if this is an arena fight
      const arenaFight = brute1.opponents.some((opponent) => opponent.name === brute2.name);

      // Cancel if brute1 has no fights left
      if (arenaFight && getFightsLeft(brute1) <= 0) {
        throw new Error('No fights left');
      }

      // Update brute last fight and fights left if arena fight
      if (arenaFight) {
        await prisma.brute.update({
          where: { id: brute1.id },
          data: {
            lastFight: new Date(),
            fightsLeft: getFightsLeft(brute1) - 1,
          },
        });
      }

      const generatedFight = await generateFight(prisma, brute1, brute2);

      // Save important fight data
      const { id: fightId } = await prisma.fight.create({
        data: generatedFight,
        select: { id: true },
      });

      // Get XP gained (0 for non arena fights)
      // (+2 for a win against a brute at least 2 level below you)
      // (+1 for a win against a brute at least 10 level below you)
      // (+0 otherwise)
      const levelDifference = brute1.level - brute2.level;
      const xpGained = arenaFight
        ? generatedFight.winner === brute1.name
          ? levelDifference > 10 ? 0 : levelDifference > 2 ? 1 : 2
          : levelDifference > 10 ? 0 : 1
        : 0;

      // Update brute XP and victories if arena fight
      if (arenaFight) {
        await prisma.brute.update({
          where: { id: brute1.id },
          data: {
            xp: { increment: xpGained },
            victories: { increment: generatedFight.winner === brute1.name ? 1 : 0 },
          },
        });
      }

      // Add fighter log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute1.id } },
          type: generatedFight.winner === brute1.name ? 'win' : 'lose',
          brute: brute2.name,
          fight: { connect: { id: fightId } },
          xp: xpGained,
        },
      });

      // Add opponent log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute2.id } },
          type: generatedFight.winner === brute2.name ? 'survive' : 'lose',
          brute: brute1.name,
          fight: { connect: { id: fightId } },
        },
      });

      // Update brute opponents if the opponent was in the arena
      if (brute1.opponents.some((o) => o.name === brute2.name)) {
        // Get new opponents
        const newOpponents = await getOpponents(prisma, brute1);

        // Save opponents
        await prisma.brute.update({
          where: {
            id: brute1.id,
          },
          data: {
            opponents: {
              set: newOpponents.map((o) => ({
                id: o.id,
              })),
            },
            // Update opponentsGeneratedAt
            opponentsGeneratedAt: new Date(),
          },
        });
      }

      // Send fight id to client
      res.send({ id: fightId });
    } catch (error) {
      sendError(res, error);
    }
  },
};

export default Fights;
