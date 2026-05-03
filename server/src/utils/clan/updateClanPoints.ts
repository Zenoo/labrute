import { getBruteGoldValueFromLevel, getBruteGoldValueFromRanking } from '@labrute/core';
import { Brute, PrismaClient } from '@labrute/prisma';
import { traced } from '../trace.js';

export const updateClanPoints = async (
  prisma: PrismaClient,
  clanId: string,
  operation: 'add' | 'remove',
  brute: Pick<Brute, 'level' | 'ranking'>,
  previousBrute?: Pick<Brute, 'level' | 'ranking'>,
) => {
  if (operation === 'add') {
    const previousPoints = (previousBrute
      ? getBruteGoldValueFromLevel(previousBrute.level)
      + getBruteGoldValueFromRanking(previousBrute.ranking) * 2
      : 0);
    const newPoints = getBruteGoldValueFromLevel(brute.level)
      + getBruteGoldValueFromRanking(brute.ranking) * 2;

    if (previousPoints === newPoints) return;

    await traced('updateClanPoints.add.updateClan', () => prisma.clan.update({
      where: {
        id: clanId,
      },
      data: {
        points: {
          increment: newPoints - previousPoints,
        },
      },
    }));
  } else {
    const points = getBruteGoldValueFromLevel(brute.level)
      + getBruteGoldValueFromRanking(brute.ranking) * 2;

    await traced('updateClanPoints.remove.updateClan', () => prisma.clan.update({
      where: {
        id: clanId,
      },
      data: {
        points: {
          decrement: points,
        },
      },
    }));
  }
};
