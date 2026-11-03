import {
  BATTLE_ROYALE_BASE_VISION,
  BATTLE_ROYALE_MOVES_PER_DAY,
  BattleRoyaleBruteView,
  BattleRoyaleKnownTiles,
  BattleRoyaleStateResponse,
  BattleRoyaleTile,
  generateBattleRoyaleTiles,
  getBattleRoyaleStartRadius,
  getCalculatedBrute,
  getPositionsInRange,
  getTileKey,
  getXPNeeded,
  isWinner,
  Modifiers,
  pickSpawnPositions,
  splitIntoGroups,
} from '@labrute/core';
import {
  BattleRoyaleBrute, BattleRoyaleMap, Prisma, PrismaClient,
} from '@labrute/prisma';
import { DISCORD, LOGGER } from '../context.js';
import { generateFight } from './fight/generateFight.js';
import { shuffle } from './shuffle.js';

export const getMapTiles = (map: Pick<BattleRoyaleMap, 'tiles'>) => (
  map.tiles as unknown as BattleRoyaleTile[]
);

export const getKnownTiles = (brute: Pick<BattleRoyaleBrute, 'knownTiles'>) => (
  brute.knownTiles as unknown as BattleRoyaleKnownTiles
);

/** Other living brutes standing on each position of the map (one brute per tile) */
export const getOccupation = async (
  prisma: PrismaClient,
  mapId: string,
  excludeBruteId: string,
) => {
  const others = await prisma.battleRoyaleBrute.findMany({
    where: { mapId, eliminated: false, bruteId: { not: excludeBruteId } },
    select: {
      x: true,
      y: true,
      brute: {
        select: {
          id: true, name: true, gender: true, body: true, colors: true,
        },
      },
    },
  });

  const occupation = new Map<string, BattleRoyaleBruteView>();
  for (const other of others) {
    occupation.set(getTileKey(other.x, other.y), other.brute);
  }
  return occupation;
};

/**
 * Updates the known tiles of a brute with the tiles in its vision.
 * A scout refreshes everything (perks and brutes), a simple move only
 * discovers the terrain of tiles that were never seen.
 */
export const revealTiles = (
  known: BattleRoyaleKnownTiles,
  tiles: BattleRoyaleTile[],
  position: { x: number, y: number },
  vision: number,
  radius: number,
  options: { scout: false } | { scout: true, occupation: Map<string, BattleRoyaleBruteView> },
) => {
  const next = { ...known };
  const byKey = new Map(tiles.map((tile) => [getTileKey(tile.x, tile.y), tile]));
  const now = new Date().toISOString();

  for (const { x, y } of getPositionsInRange(position.x, position.y, vision)) {
    if (x * x + y * y > radius * radius) {
      // Out of the safe zone, can't be scouted anymore
      delete next[getTileKey(x, y)];
      continue;
    }

    const key = getTileKey(x, y);
    const tile = byKey.get(key);
    if (!tile) continue;

    if (options.scout) {
      const brute = options.occupation.get(key) ?? null;
      next[key] = {
        type: tile.type,
        // A brute standing on a tile has consumed its perk
        perk: brute ? undefined : tile.perk,
        scoutedAt: now,
        brute,
      };
    } else if (!next[key]) {
      next[key] = {
        type: tile.type,
        perk: tile.perk,
        scoutedAt: now,
      };
    }
  }

  return next;
};

export const buildState = async (
  prisma: PrismaClient,
  participant: BattleRoyaleBrute,
  map: BattleRoyaleMap,
): Promise<BattleRoyaleStateResponse> => {
  const alive = map.resolved
    ? await prisma.battleRoyaleBrute.count({ where: { mapId: map.id, eliminated: false } })
    : null;

  return {
    eventId: participant.eventId,
    round: map.round,
    radius: map.radius,
    position: { x: participant.x, y: participant.y },
    level: participant.level,
    vision: participant.vision,
    movesLeft: participant.movesLeft,
    lastScoutAt: participant.lastScoutAt?.toISOString() ?? null,
    eliminated: participant.eliminated,
    resolved: map.resolved,
    alive,
    knownTiles: getKnownTiles(participant),
    // Maps are only revealed once resolved, to prevent scouting with throwaway accounts
    fullMap: map.resolved ? getMapTiles(map) : null,
  };
};

/** Grants levels to a brute, bounded by the event max level */
export const grantLevels = async (
  prisma: PrismaClient,
  participant: Pick<BattleRoyaleBrute, 'id' | 'bruteId'>,
  levels: number,
  maxLevel: number,
) => {
  const brute = await prisma.brute.findUnique({
    where: { id: participant.bruteId },
    select: { level: true, xp: true },
  });
  if (!brute) return 0;

  let { level } = brute;
  let xp = 0;
  let granted = 0;
  for (let i = 0; i < levels && level + granted < maxLevel; i++) {
    xp += getXPNeeded(level + 1 + granted);
    granted++;
  }
  if (!granted) return 0;

  await prisma.brute.update({
    where: { id: participant.bruteId },
    data: { xp: { increment: xp } },
    select: { id: true },
  });
  await prisma.battleRoyaleBrute.update({
    where: { id: participant.id },
    data: { level: { increment: granted } },
    select: { id: true },
  });
  level += granted;

  return xp;
};

/** Plays a fight between two participants, the loser is eliminated and the winner gains a level */
export const resolveBattle = async (
  prisma: PrismaClient,
  modifiers: Modifiers,
  maxLevel: number,
  attacker: Pick<BattleRoyaleBrute, 'id' | 'bruteId'>,
  defender: Pick<BattleRoyaleBrute, 'id' | 'bruteId'>,
) => {
  const [baseBrute1, baseBrute2] = await Promise.all([
    prisma.brute.findUniqueOrThrow({ where: { id: attacker.bruteId } }),
    prisma.brute.findUniqueOrThrow({ where: { id: defender.bruteId } }),
  ]);
  const brute1 = getCalculatedBrute(baseBrute1, modifiers);
  const brute2 = getCalculatedBrute(baseBrute2, modifiers);

  let generatedFight: Prisma.FightCreateInput | null = null;
  for (let retry = 0; !generatedFight && retry < 10; retry++) {
    try {
      const result = await generateFight({
        prisma,
        team1: { brutes: [brute1] },
        team2: { brutes: [brute2] },
        modifiers,
        backups: false,
        achievements: false,
      });
      generatedFight = result.data;
    } catch (error) {
      if (!(error instanceof Error)) throw error;
      LOGGER.log(`Error while generating a battle royale fight between ${brute1.name} and ${brute2.name}, retrying...`);
      DISCORD().sendError(error);
    }
  }
  if (!generatedFight) {
    throw new Error('Could not generate battle royale fight');
  }

  const { id: fightId } = await prisma.fight.create({
    data: generatedFight,
    select: { id: true },
  });

  const attackerWon = isWinner(brute1, generatedFight);
  const winner = attackerWon ? attacker : defender;
  const loser = attackerWon ? defender : attacker;

  await prisma.battleRoyaleBrute.update({
    where: { id: loser.id },
    data: { eliminated: true, eliminatedAt: new Date() },
    select: { id: true },
  });
  const xpGained = await grantLevels(prisma, winner, 1, maxLevel);

  return { fightId, attackerWon, xpGained: attackerWon ? xpGained : 0 };
};

/** Marks a map as resolved when at most one brute is left, returns whether it is */
export const checkMapResolved = async (prisma: PrismaClient, mapId: string) => {
  const alive = await prisma.battleRoyaleBrute.count({
    where: { mapId, eliminated: false },
  });
  if (alive > 1) return false;

  await prisma.battleRoyaleMap.update({
    where: { id: mapId },
    data: { resolved: true, resolvedAt: new Date() },
    select: { id: true },
  });
  return true;
};

/**
 * Splits brutes into groups and generates a map for each of them.
 * Existing participants (next rounds) keep their level and vision.
 */
export const createBattleRoyaleRound = async (
  prisma: PrismaClient,
  event: { id: string, groupSize: number, baseVision: number },
  bruteIds: string[],
  round: number,
) => {
  const groups = splitIntoGroups(shuffle([...bruteIds]), event.groupSize);

  for (const group of groups) {
    const radius = getBattleRoyaleStartRadius(group.length);
    const tiles = generateBattleRoyaleTiles(radius);
    const spawns = pickSpawnPositions(tiles, group.length);

    const map = await prisma.battleRoyaleMap.create({
      data: {
        eventId: event.id,
        round,
        radius,
        tiles: tiles as unknown as Prisma.InputJsonValue,
        // A lone brute wins its map by default
        resolved: group.length < 2,
        resolvedAt: group.length < 2 ? new Date() : null,
      },
      select: { id: true },
    });

    for (const [index, bruteId] of group.entries()) {
      const spawn = spawns[index];
      if (!spawn) throw new Error('Not enough spawn positions');

      const knownTiles = revealTiles(
        {},
        tiles,
        spawn,
        event.baseVision,
        radius,
        { scout: false },
      );

      const data = {
        mapId: map.id,
        x: spawn.x,
        y: spawn.y,
        movesLeft: BATTLE_ROYALE_MOVES_PER_DAY,
        lastScoutAt: null,
        eliminated: false,
        eliminatedAt: null,
      };

      const existing = await prisma.battleRoyaleBrute.findUnique({
        where: { eventId_bruteId: { eventId: event.id, bruteId } },
        select: { id: true, vision: true },
      });

      if (existing) {
        await prisma.battleRoyaleBrute.update({
          where: { id: existing.id },
          data: {
            ...data,
            knownTiles: revealTiles(
              {},
              tiles,
              spawn,
              existing.vision,
              radius,
              { scout: false },
            ) as unknown as Prisma.InputJsonValue,
          },
          select: { id: true },
        });
      } else {
        await prisma.battleRoyaleBrute.create({
          data: {
            ...data,
            eventId: event.id,
            bruteId,
            level: 0,
            vision: event.baseVision || BATTLE_ROYALE_BASE_VISION,
            knownTiles: knownTiles as unknown as Prisma.InputJsonValue,
          },
          select: { id: true },
        });
      }
    }

    // Initial free scout, once every brute of the map is placed
    const placed = await prisma.battleRoyaleBrute.findMany({
      where: { mapId: map.id },
      select: {
        id: true, x: true, y: true, vision: true, knownTiles: true,
        brute: {
          select: {
            id: true, name: true, gender: true, body: true, colors: true,
          },
        },
      },
    });
    const occupation = new Map(placed.map((p) => [getTileKey(p.x, p.y), p.brute]));
    for (const p of placed) {
      const others = new Map(occupation);
      others.delete(getTileKey(p.x, p.y));
      await prisma.battleRoyaleBrute.update({
        where: { id: p.id },
        data: {
          knownTiles: revealTiles(
            getKnownTiles(p),
            tiles,
            p,
            p.vision,
            radius,
            { scout: true, occupation: others },
          ) as unknown as Prisma.InputJsonValue,
        },
        select: { id: true },
      });
    }
  }

  return groups.length;
};
