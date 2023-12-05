import { ExpectedError, GLOBAL_TOURNAMENT_START_HOUR, getFightsLeft } from '@labrute/core';
import { Prisma, PrismaClient, TournamentType } from '@labrute/prisma';
import { Request, Response } from 'express';
import moment from 'moment';
import auth from '../utils/auth.js';
import getOpponents from '../utils/brute/getOpponents.js';
import DiscordUtils from '../utils/DiscordUtils.js';
import generateFight from '../utils/fight/generateFight.js';
import sendError from '../utils/sendError.js';
import translate from '../utils/translate.js';

const Fights = {
  get: (prisma: PrismaClient) => async (req: Request, res: Response) => {
    try {
      if (!req.params.name || !req.params.id) {
        throw new ExpectedError('Missing parameters');
      }

      if (Number.isNaN(+req.params.id)) {
        throw new ExpectedError('Invalid parameters');
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
        throw new ExpectedError('Fight not found');
      }

      // Limit viewing if the fight is from a global tournament round not yet reached
      const tournamentStep = await prisma.tournamentStep.findFirst({
        where: {
          tournament: {
            type: TournamentType.GLOBAL,
            date: { gte: new Date() },
          },
          fightId: fight.id,
        },
      });

      const now = moment.utc();
      const hour = now.hour();

      if (tournamentStep && tournamentStep.step > hour - GLOBAL_TOURNAMENT_START_HOUR + 1) {
        throw new ExpectedError('Fight unavailable for now');
      } else {
        res.send(fight);
      }
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
        throw new ExpectedError(translate('missingParameters', user));
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
        throw new ExpectedError(translate('bruteNotFound', user));
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
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Check if this is an arena fight
      const arenaFight = brute1.opponents.some((opponent) => opponent.name === brute2.name);

      // Cancel if brute1 has no fights left
      if (arenaFight && getFightsLeft(brute1) <= 0) {
        throw new ExpectedError(translate('noFightsLeft', user));
      }

      // Update brute last fight and fights left if arena fight
      if (arenaFight) {
        await prisma.brute.update({
          where: { id: brute1.id },
          data: {
            lastFight: new Date(),
            fightsLeft: getFightsLeft(brute1) - 1,
          },
          select: { id: true },
        });
      }

      // Generate fight (retry if failed)
      let generatedFight: Prisma.FightCreateInput | null = null;
      let expectedError: ExpectedError | null = null;
      let retry = 0;

      while (!generatedFight && !expectedError && retry < 10) {
        try {
          retry += 1;

          // eslint-disable-next-line no-await-in-loop
          generatedFight = await generateFight(
            prisma,
            brute1,
            brute2,
            true,
            arenaFight,
            false,
          );
        } catch (error) {
          if (error instanceof ExpectedError) {
            expectedError = error;
          } else {
            // eslint-disable-next-line no-await-in-loop
            DiscordUtils.sendLog(`Error while generating fight between ${brute1.name} and ${brute2.name}, retrying...`);
            // eslint-disable-next-line no-await-in-loop
            DiscordUtils.sendError(error);
          }
        }
      }

      if (expectedError || !generatedFight) {
        throw expectedError;
      }

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
          select: { id: true },
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
        select: { id: true },
      });

      // Add opponent log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute2.id } },
          type: generatedFight.winner === brute2.name ? 'survive' : 'lose',
          brute: brute1.name,
          fight: { connect: { id: fightId } },
        },
        select: { id: true },
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
          select: { id: true },
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
