import {
  BATTLE_ROYALE_SCOUT_COOLDOWN_MS,
  BattleRoyaleMoveRequest,
  BattleRoyaleMoveResponse,
  BattleRoyalePerk,
  BattleRoyaleStateResponse,
  BattleRoyaleTile,
  ExpectedError,
  getAdjacentPositions,
  getTileKey,
  getTileMoveCost,
  isInsideBattleRoyaleMap,
  isUuid,
  LimitError,
  NotFoundError,
} from '@labrute/core';
import {
  EventStatus, EventType, Prisma, PrismaClient,
} from '@labrute/prisma';
import type { Request, Response } from 'express';
import { auth } from '../utils/auth.js';
import {
  buildState, checkMapResolved, getKnownTiles, getMapTiles, getOccupation,
  grantLevels, resolveBattle, revealTiles,
} from '../utils/battleRoyale.js';
import { sendError } from '../utils/sendError.js';
import { ServerState } from '../utils/ServerState.js';
import { traced } from '../utils/trace.js';
import { translate } from '../utils/translate.js';

type Params = { id: string, bruteId: string };

const loadParticipant = async (
  prisma: PrismaClient,
  req: Request<Params>,
) => {
  const user = await auth(prisma, req);
  const { id, bruteId } = req.params;

  if (!isUuid(id) || !isUuid(bruteId)) {
    throw new ExpectedError(translate('invalidParameters', user));
  }

  const brute = await traced('battleRoyale.findBrute', () => prisma.brute.findFirst({
    where: { id: bruteId, userId: user.id, deletedAt: null },
    select: { id: true },
  }));
  if (!brute) {
    throw new NotFoundError(translate('bruteNotFound', user));
  }

  const participant = await traced('battleRoyale.findParticipant', () => prisma.battleRoyaleBrute.findUnique({
    where: { eventId_bruteId: { eventId: id, bruteId } },
    include: { map: true, event: { select: { type: true, status: true, maxLevel: true } } },
  }));
  if (!participant || participant.event.type !== EventType.battleRoyale) {
    throw new NotFoundError(translate('battleRoyaleNotParticipating', user));
  }

  return { user, participant };
};

export const BattleRoyales = {
  get: (prisma: PrismaClient) => async (
    req: Request<Params>,
    res: Response<BattleRoyaleStateResponse>,
  ) => {
    try {
      const { participant } = await loadParticipant(prisma, req);
      res.status(200).send(await buildState(prisma, participant, participant.map));
    } catch (error) {
      sendError(res, error);
    }
  },
  scout: (prisma: PrismaClient) => async (
    req: Request<Params>,
    res: Response<BattleRoyaleStateResponse>,
  ) => {
    try {
      const { user, participant } = await loadParticipant(prisma, req);
      const { map } = participant;

      if (participant.eliminated) {
        throw new LimitError(translate('battleRoyaleEliminated', user));
      }
      if (map.resolved) {
        throw new LimitError(translate('battleRoyaleMapResolved', user));
      }

      const now = Date.now();
      if (participant.lastScoutAt
        && now - participant.lastScoutAt.getTime() < BATTLE_ROYALE_SCOUT_COOLDOWN_MS) {
        throw new LimitError(translate('battleRoyaleScoutCooldown', user));
      }

      const occupation = await getOccupation(prisma, map.id, participant.bruteId);
      const knownTiles = revealTiles(
        getKnownTiles(participant),
        getMapTiles(map),
        participant,
        participant.vision,
        map.radius,
        { scout: true, occupation },
      );

      // Guard against concurrent scouts
      const updated = await prisma.battleRoyaleBrute.updateMany({
        where: { id: participant.id, lastScoutAt: participant.lastScoutAt },
        data: {
          lastScoutAt: new Date(now),
          knownTiles: knownTiles as unknown as Prisma.InputJsonValue,
        },
      });
      if (!updated.count) {
        throw new LimitError(translate('battleRoyaleScoutCooldown', user));
      }

      const fresh = await prisma.battleRoyaleBrute.findUniqueOrThrow({
        where: { id: participant.id },
      });
      res.status(200).send(await buildState(prisma, fresh, map));
    } catch (error) {
      sendError(res, error);
    }
  },
  move: (prisma: PrismaClient) => async (
    req: Request<Params, unknown, BattleRoyaleMoveRequest>,
    res: Response<BattleRoyaleMoveResponse>,
  ) => {
    try {
      const { user, participant } = await loadParticipant(prisma, req);
      const { map, event } = participant;
      const { x, y } = req.body;

      if (!Number.isInteger(x) || !Number.isInteger(y)) {
        throw new ExpectedError(translate('invalidParameters', user));
      }
      if (event.status !== EventStatus.ongoing) {
        throw new LimitError(translate('battleRoyaleInvalidMove', user));
      }
      if (participant.eliminated) {
        throw new LimitError(translate('battleRoyaleEliminated', user));
      }
      if (map.resolved) {
        throw new LimitError(translate('battleRoyaleMapResolved', user));
      }

      const tiles = getMapTiles(map);
      const target = tiles.find((tile) => tile.x === x && tile.y === y);
      const isAdjacent = getAdjacentPositions(participant.x, participant.y)
        .some((position) => position.x === x && position.y === y);

      if (!target || !isAdjacent || !isInsideBattleRoyaleMap(x, y, map.radius)
        || target.type === 'barrier') {
        throw new LimitError(translate('battleRoyaleInvalidMove', user));
      }

      const cost = getTileMoveCost(target.type);
      if (participant.movesLeft < cost) {
        throw new LimitError(translate('battleRoyaleNoMovesLeft', user));
      }

      // Reserve the move, guarding against concurrent requests
      const reserved = await prisma.battleRoyaleBrute.updateMany({
        where: {
          id: participant.id,
          eliminated: false,
          x: participant.x,
          y: participant.y,
          movesLeft: participant.movesLeft,
        },
        data: { movesLeft: participant.movesLeft - cost },
      });
      if (!reserved.count) {
        throw new LimitError(translate('battleRoyaleInvalidMove', user));
      }

      // Fight if the tile is occupied, then claim the tile atomically.
      // Claiming is serialized per map so two brutes can never end up on the same tile:
      // if someone else moved in during our fight, we fight them too.
      let fightId: string | null = null;
      let won: boolean | null = null;
      let xpGained = 0;
      let claimed = false;
      let pickedUpPerk = null as BattleRoyalePerk | null;
      const modifiers = await ServerState.getModifiers(prisma);

      for (let attempt = 0; attempt < 10 && !claimed; attempt++) {
        const defender = await prisma.battleRoyaleBrute.findFirst({
          where: {
            mapId: map.id, x, y, eliminated: false, bruteId: { not: participant.bruteId },
          },
          select: { id: true, bruteId: true },
        });

        if (defender) {
          const battle = await resolveBattle(
            prisma,
            modifiers,
            event.maxLevel,
            participant,
            defender,
          );
          fightId = battle.fightId;
          won = battle.attackerWon;
          xpGained += battle.xpGained;
          if (!won) break;
        }

        claimed = await prisma.$transaction(async (tx) => {
          await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtext(${map.id}))`;
          const occupant = await tx.battleRoyaleBrute.findFirst({
            where: {
              mapId: map.id, x, y, eliminated: false, bruteId: { not: participant.bruteId },
            },
            select: { id: true },
          });
          if (occupant) return false;

          await tx.battleRoyaleBrute.update({
            where: { id: participant.id },
            data: { x, y },
            select: { id: true },
          });

          // A brute standing on a tile always consumes its perk, atomically with the claim
          const freshMap = await tx.battleRoyaleMap.findUniqueOrThrow({
            where: { id: map.id },
            select: { tiles: true },
          });
          const freshTiles = freshMap.tiles as unknown as BattleRoyaleTile[];
          const freshTarget = freshTiles.find((tile) => tile.x === x && tile.y === y);
          if (freshTarget?.perk) {
            pickedUpPerk = freshTarget.perk;
            delete freshTarget.perk;
            await tx.battleRoyaleMap.update({
              where: { id: map.id },
              data: { tiles: freshTiles as unknown as Prisma.InputJsonValue },
              select: { id: true },
            });
          }
          return true;
        });
      }

      if (!claimed && won !== false) {
        // Could not settle on the tile, the move is refunded
        await prisma.battleRoyaleBrute.update({
          where: { id: participant.id },
          data: { movesLeft: { increment: cost } },
          select: { id: true },
        });
        throw new LimitError(translate('battleRoyaleInvalidMove', user));
      }

      if (claimed) {
        // Move and pick up perks (consumed in the claim transaction)
        let { vision } = participant;
        if (pickedUpPerk) {
          if (pickedUpPerk.type === 'vision') {
            vision += pickedUpPerk.value;
          } else {
            xpGained += await grantLevels(
              prisma,
              participant,
              pickedUpPerk.value,
              event.maxLevel,
            );
          }
        }

        const { tiles: latestTiles } = await prisma.battleRoyaleMap.findUniqueOrThrow({
          where: { id: map.id },
          select: { tiles: true },
        });

        // Moving reveals everything in vision, brutes included (without using the scout cooldown)
        const knownTiles = revealTiles(
          getKnownTiles(participant),
          latestTiles as unknown as BattleRoyaleTile[],
          { x, y },
          vision,
          map.radius,
          { scout: true, occupation: await getOccupation(prisma, map.id, participant.bruteId) },
        );
        const knownKey = getTileKey(x, y);
        const knownTarget = knownTiles[knownKey];
        if (knownTarget) {
          knownTiles[knownKey] = { ...knownTarget, perk: undefined, brute: null };
        }

        await prisma.battleRoyaleBrute.update({
          where: { id: participant.id },
          data: {
            vision,
            knownTiles: knownTiles as unknown as Prisma.InputJsonValue,
          },
          select: { id: true },
        });
      }

      await checkMapResolved(prisma, map.id);

      const [freshParticipant, freshMap] = await Promise.all([
        prisma.battleRoyaleBrute.findUniqueOrThrow({ where: { id: participant.id } }),
        prisma.battleRoyaleMap.findUniqueOrThrow({ where: { id: map.id } }),
      ]);

      res.status(200).send({
        ...(await buildState(prisma, freshParticipant, freshMap)),
        fightId,
        won,
        perk: pickedUpPerk,
        xpGained,
      });
    } catch (error) {
      sendError(res, error);
    }
  },
};
