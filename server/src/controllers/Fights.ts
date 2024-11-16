import {
  ExpectedError, FightCreateResponse, FightGetResponse, FightLogTemplateCount,
  GLOBAL_TOURNAMENT_START_HOUR, getFightsLeft,
  getXPNeeded,
  isUuid,
  randomBetween,
} from '@labrute/core';
import {
  InventoryItemType,
  LogType, Prisma, PrismaClient, TournamentType,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import moment from 'moment';
import { DISCORD, LOGGER } from '../context.js';
import auth from '../utils/auth.js';
import getOpponents from '../utils/brute/getOpponents.js';
import generateFight from '../utils/fight/generateFight.js';
import { ilike } from '../utils/ilike.js';
import sendError from '../utils/sendError.js';
import ServerState from '../utils/ServerState.js';
import translate from '../utils/translate.js';

const Fights = {
  get: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<FightGetResponse>,
  ) => {
    try {
      if (!req.params.name || !req.params.id) {
        throw new ExpectedError(translate('missingParameters'));
      }

      if (!isUuid(req.params.id)) {
        throw new ExpectedError(translate('invalidParameters'));
      }

      // Get fight
      const fight = await prisma.fight.findFirst({
        where: {
          id: req.params.id,
          OR: [
            { brute1: { name: ilike(req.params.name) } },
            { brute2: { name: ilike(req.params.name) } },
          ],
        },
        include: {
          favoritedBy: {
            select: { id: true },
          },
        },
      });

      if (!fight) {
        throw new ExpectedError(translate('fightNotFound'));
      }

      // Limit viewing if the fight is from a global tournament round not yet reached
      const tournament = await prisma.tournament.findFirst({
        where: {
          type: TournamentType.GLOBAL,
          date: { gte: new Date() },
          fights: { some: { id: fight.id } },
        },
      });

      const now = moment.utc();
      const hour = now.hour();

      if (tournament && fight.tournamentStep > hour - GLOBAL_TOURNAMENT_START_HOUR + 1) {
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
    res: Response<FightCreateResponse>,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.body.brute1 || !req.body.brute2) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      // Get brutes
      const brute1 = await prisma.brute.findFirst({
        where: {
          name: ilike(req.body.brute1),
          deletedAt: null,
          userId: user.id,
        },
        include: {
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
          name: ilike(req.body.brute2),
          deletedAt: null,
        },
      });
      if (!brute2) {
        throw new ExpectedError(translate('bruteNotFound', user));
      }

      // Get current modifiers
      const modifiers = await ServerState.getModifiers(prisma);

      // Check if this is an arena fight
      const arenaFight = brute1.opponents.some((opponent) => opponent.name === brute2.name);

      const brute1FightsLeft = getFightsLeft(brute1, modifiers);

      // Cancel if brute1 has no fights left
      if (arenaFight && brute1FightsLeft <= 0) {
        throw new ExpectedError(translate('noFightsLeft', user));
      }

      // Update brute last fight and fights left if arena fight
      if (arenaFight) {
        await prisma.brute.update({
          where: { id: brute1.id },
          data: {
            lastFight: new Date(),
            fightsLeft: brute1FightsLeft - 1,
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

          const newGeneratedFight = await generateFight({
            prisma,
            team1: { brutes: [brute1] },
            team2: { brutes: [brute2] },
            modifiers,
            // No backups for event brutes
            backups: !brute1.eventId,
            achievements: arenaFight,
          });
          generatedFight = newGeneratedFight.data;
        } catch (error) {
          if (!(error instanceof Error)) {
            throw error;
          }

          if (error instanceof ExpectedError) {
            expectedError = error;
          } else {
            LOGGER.log(`Error while generating fight between ${brute1.name} and ${brute2.name}, retrying...`);
            DISCORD.sendError(error);
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

      // Get current event
      const event = await ServerState.getCurrentEvent(prisma);

      // Get XP gained (0 for non arena fights)
      // (+1 level for a win as an event brute)
      // (+0.5 level for a loss as an event brute)
      // (+2 for a win against a brute at least 2 level below you)
      // (+1 for a win against a brute at least 10 level below you)
      // (+0 otherwise)
      const levelDifference = brute1.level - brute2.level;
      const xpGained = arenaFight
        ? generatedFight.winner === brute1.name
          ? brute1.eventId
            ? brute1.level >= (event?.maxLevel ?? 999)
              ? 0
              : getXPNeeded(brute1.level + 1)
            : levelDifference > 10 ? 0 : levelDifference > 2 ? 1 : 2
          : brute1.eventId
            ? brute1.level >= (event?.maxLevel ?? 999)
              ? 0
              : Math.ceil(getXPNeeded(brute1.level + 1) / 2)
            : levelDifference > 10 ? 0 : 1
        : 0;

      // Update brute XP, victories and losses if arena fight
      if (arenaFight) {
        await prisma.brute.update({
          where: { id: brute1.id },
          data: {
            xp: { increment: xpGained },
            victories: { increment: generatedFight.winner === brute1.name ? 1 : 0 },
            losses: { increment: generatedFight.winner === brute1.name ? 0 : 1 },
          },
          select: { id: true },
        });
      }

      // Add fighter log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute1.id } },
          type: generatedFight.winner === brute1.name ? LogType.win : LogType.lose,
          brute: brute2.name,
          fight: { connect: { id: fightId } },
          xp: xpGained,
          template: randomBetween(0, FightLogTemplateCount - 1).toString(),
        },
        select: { id: true },
      });

      // Add opponent log
      await prisma.log.create({
        data: {
          currentBrute: { connect: { id: brute2.id } },
          type: generatedFight.winner === brute2.name ? LogType.win : LogType.lose,
          brute: brute1.name,
          fight: { connect: { id: fightId } },
          template: randomBetween(0, FightLogTemplateCount - 1).toString(),
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

      const fightsLeft = getFightsLeft(brute1, modifiers);

      // Send fight id to client
      res.send({
        id: fightId,
        xpWon: arenaFight ? xpGained : 0,
        fightsLeft: arenaFight ? fightsLeft - 1 : fightsLeft,
        victories: arenaFight ? generatedFight.winner === brute1.name ? 1 : 0 : 0,
        losses: arenaFight ? generatedFight.winner !== brute1.name ? 1 : 0 : 0,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
  toggleFavorite: (prisma: PrismaClient) => async (
    req: Request<{ id: string }>,
    res: Response,
  ) => {
    try {
      const user = await auth(prisma, req);

      if (!req.params.id) {
        throw new ExpectedError(translate('missingParameters', user));
      }

      // Get fight
      const fight = await prisma.fight.findFirst({
        where: {
          id: req.params.id,
        },
        select: {
          id: true,
          favoritedBy: {
            select: { id: true },
          },
        },
      });

      if (!fight) {
        throw new ExpectedError(translate('fightNotFound', user));
      }

      // Toggle favorite
      const isFavorited = fight.favoritedBy.some((f) => f.id === user.id);

      if (isFavorited) {
        // Unfavorite
        await prisma.fight.update({
          where: { id: fight.id },
          data: {
            favoritedBy: {
              disconnect: { id: user.id },
            },
          },
          select: { id: true },
        });

        // Add 1x favorite fight item
        await prisma.inventoryItem.upsert({
          where: {
            type_userId: {
              type: InventoryItemType.favoriteFight,
              userId: user.id,
            },
          },
          create: {
            type: InventoryItemType.favoriteFight,
            user: { connect: { id: user.id } },
          },
          update: {
            count: {
              increment: 1,
            },
          },
          select: { id: true },
        });
      } else {
        // Check if user has enough favorite fight items
        const favoriteFightItem = await prisma.inventoryItem.findFirst({
          where: {
            type: InventoryItemType.favoriteFight,
            userId: user.id,
          },
          select: { id: true, count: true },
        });

        if (!favoriteFightItem || favoriteFightItem.count <= 0) {
          throw new ExpectedError(translate('favoriteLimit', user));
        }

        // Favorite
        await prisma.fight.update({
          where: { id: fight.id },
          data: {
            favoritedBy: {
              connect: { id: user.id },
            },
          },
          select: { id: true },
        });

        // Remove 1x favorite fight item
        await prisma.inventoryItem.update({
          where: {
            type_userId: {
              type: InventoryItemType.favoriteFight,
              userId: user.id,
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
};

export default Fights;
