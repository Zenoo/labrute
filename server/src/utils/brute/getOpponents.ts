import { ARENA_OPPONENTS_COUNT, ARENA_OPPONENTS_MAX_GAP } from '@labrute/core';
import { Brute, PrismaClient } from '@labrute/prisma';

const getOpponents = async (
  prisma: PrismaClient,
  brute: Pick<Brute, 'name' | 'level'>,
) => {
  // Get same level random opponents
  const bruteSearch = {
    name: { not: brute.name },
    level: brute.level,
    deletedAt: null,
  };
  const bruteIds = await prisma.brute.findMany({
    where: bruteSearch,
    select: { id: true },
  }).then((brutes) => brutes.map((b) => b.id));

  const randomlySelectedBruteIds: string[] = [];

  // Select all if less or equal to ARENA_OPPONENTS_COUNT
  if (bruteIds.length <= ARENA_OPPONENTS_COUNT) {
    randomlySelectedBruteIds.push(...bruteIds);
  } else {
    // Select ARENA_OPPONENTS_COUNT random ids
    while (randomlySelectedBruteIds.length < ARENA_OPPONENTS_COUNT) {
      const randomIndex = Math.floor(Math.random() * bruteIds.length);
      const randomId = bruteIds[randomIndex];

      if (!randomId) {
        throw new Error('No random id found');
      }

      if (!randomlySelectedBruteIds.includes(randomId)) {
        randomlySelectedBruteIds.push(randomId);
      }
    }
  }

  const opponents = [];
  for (const bruteId of randomlySelectedBruteIds) {
    const opponent = await prisma.brute.findFirst({
      where: {
        ...bruteSearch,
        id: bruteId,
      },
      select: {
        id: true,
        name: true,
        ranking: true,
        gender: true,
        level: true,
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
    });

    if (opponent) {
      opponents.push(opponent);
    }
  }

  // Complete with lower levels if not enough
  if (opponents.length < ARENA_OPPONENTS_COUNT) {
    const additionalBruteSearch = {
      name: { not: brute.name },
      level: {
        lt: +brute.level,
        gte: +brute.level - ARENA_OPPONENTS_MAX_GAP,
      },
      deletedAt: null,
    };
    const additionalBruteIds = await prisma.brute.findMany({
      where: additionalBruteSearch,
      select: { id: true },
    }).then((brutes) => brutes.map((b) => b.id));

    const additionalRandomlySelectedBruteIds: string[] = [];

    // Select all if less or equal to ARENA_OPPONENTS_COUNT
    if (additionalBruteIds.length <= ARENA_OPPONENTS_COUNT - opponents.length) {
      additionalRandomlySelectedBruteIds.push(...additionalBruteIds);
    } else {
      // Select ARENA_OPPONENTS_COUNT random ids
      while (additionalRandomlySelectedBruteIds
        .length < ARENA_OPPONENTS_COUNT - opponents.length) {
        const randomIndex = Math.floor(Math.random() * additionalBruteIds.length);
        const randomId = additionalBruteIds[randomIndex];

        if (!randomId) {
          throw new Error('No random id found');
        }
        if (!additionalRandomlySelectedBruteIds.includes(randomId)) {
          additionalRandomlySelectedBruteIds.push(randomId);
        }
      }
    }

    const additionalOpponents: Brute[] = [];
    for (const bruteId of additionalRandomlySelectedBruteIds) {
      const opponent = await prisma.brute.findFirst({
        where: {
          ...additionalBruteSearch,
          id: bruteId,
        },
      });

      if (opponent) {
        additionalOpponents.push(opponent);
      }
    }
    opponents.push(...additionalOpponents);
  }

  return opponents;
};

export default getOpponents;
