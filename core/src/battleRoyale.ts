import type { Gender } from '@labrute/prisma';

export const BATTLE_ROYALE_MOVES_PER_DAY = 6;
export const BATTLE_ROYALE_SCOUT_COOLDOWN_MS = 60 * 60 * 1000;
export const BATTLE_ROYALE_GROUP_SIZE = 20;
export const BATTLE_ROYALE_BASE_VISION = 2;
export const BATTLE_ROYALE_MIN_RADIUS = 0;
export const BATTLE_ROYALE_DIFFICULT_COST = 2;
// A group is merged into the previous one if it would be smaller than this
export const BATTLE_ROYALE_MIN_GROUP_SIZE = 2;

export type BattleRoyaleTileType = 'plain' | 'difficult' | 'barrier';
export type BattleRoyalePerkType = 'level' | 'vision';

export type BattleRoyalePerk = {
  type: BattleRoyalePerkType;
  value: number;
};

export type BattleRoyaleTile = {
  x: number;
  y: number;
  type: BattleRoyaleTileType;
  perk?: BattleRoyalePerk;
};

/** Minimal brute data needed to render it on the map */
export type BattleRoyaleBruteView = {
  id: string;
  name: string;
  gender: Gender;
  body: string;
  colors: string;
};

/** What a brute knows about a tile, as of its last scout */
export type BattleRoyaleKnownTile = {
  type: BattleRoyaleTileType;
  perk?: BattleRoyalePerk;
  /** ISO date of the last time this tile data was up to date */
  scoutedAt: string;
  /**
   * Brute standing on the tile when scouted, null if the tile was empty,
   * undefined if the tile was never scouted for brutes.
   * Only one brute can stand on a tile at any given time.
   */
  brute?: BattleRoyaleBruteView | null;
};

export type BattleRoyaleKnownTiles = Record<string, BattleRoyaleKnownTile>;

export type BattleRoyaleStateResponse = {
  eventId: string;
  round: number;
  radius: number;
  position: { x: number; y: number };
  /** Levels earned during the event */
  level: number;
  vision: number;
  movesLeft: number;
  lastScoutAt: string | null;
  eliminated: boolean;
  resolved: boolean;
  /** Brutes still alive on the map, only known once resolved */
  alive: number | null;
  knownTiles: BattleRoyaleKnownTiles;
  /** Complete map, only sent once the map is resolved */
  fullMap: BattleRoyaleTile[] | null;
};

export type BattleRoyaleMoveRequest = { x: number; y: number };
export type BattleRoyaleMoveResponse = BattleRoyaleStateResponse & {
  fightId: string | null;
  won: boolean | null;
  /** Perk picked up on the destination tile */
  perk: BattleRoyalePerk | null;
  /** XP gained by the brute during this move (fight win and level perk) */
  xpGained: number;
};

export const getTileKey = (x: number, y: number) => `${x},${y}`;

export const isInsideBattleRoyaleMap = (x: number, y: number, radius: number) => (
  x * x + y * y <= radius * radius
);

/** Radius of the first round map for a group of the given size */
export const getBattleRoyaleStartRadius = (groupSize: number) => (
  Math.max(4, Math.ceil(Math.sqrt((groupSize * 6) / Math.PI)))
);

/** Radius of a map `days` days after its creation */
export const getBattleRoyaleRadius = (startRadius: number, days: number) => (
  Math.max(BATTLE_ROYALE_MIN_RADIUS, startRadius - Math.max(0, days))
);

export const getAdjacentPositions = (x: number, y: number) => [
  { x, y: y - 1 },
  { x: x + 1, y },
  { x, y: y + 1 },
  { x: x - 1, y },
];

export const getTileMoveCost = (type: BattleRoyaleTileType) => {
  if (type === 'barrier') {
    return Infinity;
  }
  return type === 'difficult' ? BATTLE_ROYALE_DIFFICULT_COST : 1;
};

/** Positions inside the circle of the given radius, centered on (cx, cy) */
export const getPositionsInRange = (cx: number, cy: number, range: number) => {
  const positions: { x: number; y: number }[] = [];
  for (let x = cx - range; x <= cx + range; x++) {
    for (let y = cy - range; y <= cy + range; y++) {
      if ((x - cx) ** 2 + (y - cy) ** 2 <= range * range) {
        positions.push({ x, y });
      }
    }
  }
  return positions;
};

/** Tiles a brute can move to this turn (adjacent, passable and affordable) */
export const getAvailableMoves = (
  position: { x: number; y: number },
  movesLeft: number,
  radius: number,
  getType: (x: number, y: number) => BattleRoyaleTileType | undefined,
) => getAdjacentPositions(position.x, position.y).filter(({ x, y }) => {
  if (!isInsideBattleRoyaleMap(x, y, radius)) {
    return false;
  }
  const type = getType(x, y);
  return !!type && getTileMoveCost(type) <= movesLeft;
});

type Random = () => number;

const randomInt = (random: Random, max: number) => Math.floor(random() * max);

/**
 * Generates a circular map. Tiles unreachable from the center are turned into barriers
 * so that every walkable tile can be reached by every brute.
 */
export const generateBattleRoyaleTiles = (
  radius: number,
  random: Random = Math.random,
): BattleRoyaleTile[] => {
  const tiles = new Map<string, BattleRoyaleTile>();

  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius; y <= radius; y++) {
      if (!isInsideBattleRoyaleMap(x, y, radius)) {
        continue;
      }

      const roll = random();
      const isCenter = x === 0 && y === 0;
      const type: BattleRoyaleTileType = isCenter || roll < 0.7
        ? 'plain'
        : roll < 0.87
          ? 'difficult'
          : 'barrier';

      const tile: BattleRoyaleTile = { x, y, type };

      if (type !== 'barrier' && !isCenter && random() < 0.07) {
        tile.perk = random() < 0.6
          ? { type: 'level', value: 1 }
          : { type: 'vision', value: 1 };
      }

      tiles.set(getTileKey(x, y), tile);
    }
  }

  // Flood fill from the center
  const reachable = new Set<string>([getTileKey(0, 0)]);
  const queue = [{ x: 0, y: 0 }];
  while (queue.length) {
    const current = queue.shift();
    if (!current) break;

    for (const next of getAdjacentPositions(current.x, current.y)) {
      const key = getTileKey(next.x, next.y);
      const tile = tiles.get(key);
      if (tile && tile.type !== 'barrier' && !reachable.has(key)) {
        reachable.add(key);
        queue.push(next);
      }
    }
  }

  for (const [key, tile] of tiles) {
    if (tile.type !== 'barrier' && !reachable.has(key)) {
      tile.type = 'barrier';
      delete tile.perk;
    }
  }

  return [...tiles.values()];
};

/** Picks `count` distinct plain tiles without perks, as far as possible from each other */
export const pickSpawnPositions = (
  tiles: BattleRoyaleTile[],
  count: number,
  random: Random = Math.random,
) => {
  const candidates = tiles.filter((tile) => tile.type === 'plain' && !tile.perk);
  const spawns: { x: number; y: number }[] = [];

  while (spawns.length < count && candidates.length) {
    // Best of a few random candidates, to spread brutes
    let bestIndex = randomInt(random, candidates.length);
    let bestDistance = -1;
    for (let i = 0; i < 4; i++) {
      const index = randomInt(random, candidates.length);
      const candidate = candidates[index];
      if (!candidate) continue;
      const distance = spawns.length
        ? Math.min(...spawns.map((s) => (s.x - candidate.x) ** 2 + (s.y - candidate.y) ** 2))
        : 0;
      if (distance > bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    }

    const [chosen] = candidates.splice(bestIndex, 1);
    if (chosen) {
      spawns.push({ x: chosen.x, y: chosen.y });
    }
  }

  return spawns;
};

/** Splits ids into groups, avoiding a tiny last group */
export const splitIntoGroups = <T>(items: T[], groupSize: number) => {
  const groups: T[][] = [];
  for (let i = 0; i < items.length; i += groupSize) {
    groups.push(items.slice(i, i + groupSize));
  }

  const last = groups[groups.length - 1];
  const previous = groups[groups.length - 2];
  if (last && previous && last.length < BATTLE_ROYALE_MIN_GROUP_SIZE) {
    previous.push(...last);
    groups.pop();
  }

  return groups;
};
