import { getBruteGoldValue } from '@labrute/core';
import { Brute, PrismaClient } from '@labrute/prisma';

const updateClanPoints = async (
  prisma: PrismaClient,
  clanId: string,
  operation: 'add' | 'remove',
  brute: Pick<Brute, 'level' | 'ranking'>,
  previousBrute?: Pick<Brute, 'level' | 'ranking'>,
) => {
  if (operation === 'add') {
    const previousPoints = previousBrute
      ? getBruteGoldValue(previousBrute)
      : 0;
    const newPoints = getBruteGoldValue(brute);

    if (previousPoints === newPoints) return;

    await prisma.clan.update({
      where: {
        id: clanId,
      },
      data: {
        points: {
          increment: newPoints - previousPoints,
        },
      },
    });
  } else {
    const points = getBruteGoldValue(brute);

    await prisma.clan.update({
      where: {
        id: clanId,
      },
      data: {
        points: {
          decrement: points,
        },
      },
    });
  }
};

export default updateClanPoints;