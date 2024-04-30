import { ARENA_OPPONENTS_COUNT, ARENA_OPPONENTS_MAX_GAP, BruteWithBodyColors } from '@labrute/core';
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
      if (!randomlySelectedBruteIds.includes(bruteIds[randomIndex])) {
        randomlySelectedBruteIds.push(bruteIds[randomIndex]);
      }
    }
  }

  const opponents = [];
  for (let i = 0; i < randomlySelectedBruteIds.length; i++) {
    const id = randomlySelectedBruteIds[i];

    // eslint-disable-next-line no-await-in-loop
    const opponent = await prisma.brute.findFirst({
      where: {
        ...bruteSearch,
        id,
      },
      select: {
        id: true,
        name: true,
        gender: true,
        level: true,
        hp: true,
        strengthValue: true,
        agilityValue: true,
        speedValue: true,
        deletedAt: true,
        body: true,
        colors: true,
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
        if (!additionalRandomlySelectedBruteIds.includes(additionalBruteIds[randomIndex])) {
          additionalRandomlySelectedBruteIds.push(additionalBruteIds[randomIndex]);
        }
      }
    }

    const additionalOpponents: BruteWithBodyColors[] = [];
    for (let i = 0; i < additionalRandomlySelectedBruteIds.length; i++) {
      const id = additionalRandomlySelectedBruteIds[i];

      // eslint-disable-next-line no-await-in-loop
      const opponent = await prisma.brute.findFirst({
        where: {
          ...additionalBruteSearch,
          id,
        },
        include: { body: true, colors: true },
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