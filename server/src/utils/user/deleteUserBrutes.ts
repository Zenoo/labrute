import { BruteDeletionReason } from '@labrute/core';
import {
  Brute, Prisma, PrismaClient, User,
} from '@labrute/prisma';

export const deleteUserBrutes = async (prisma: PrismaClient, user: Pick<User, 'id'> & {
  brutes: Pick<Brute, 'id'>[];
}) => {
  // Delete all brutes
  await prisma.brute.updateMany({
    where: {
      userId: user.id,
      deletedAt: null,
    },
    data: {
      deletedAt: new Date(),
      deletionReason: BruteDeletionReason.BANNED_USER,
    },
  });

  // Remove brutes from clan fighters
  if (user.brutes.length > 0) {
    const joinedBruteIds = Prisma.join(user.brutes.map((b) => Prisma.sql`${b.id}::uuid`));
    await prisma.$executeRaw`DELETE FROM "_ClanWarAttackerFighters" WHERE "A" IN (${joinedBruteIds});`;
    await prisma.$executeRaw`DELETE FROM "_ClanWarDefenderFighters" WHERE "A" IN (${joinedBruteIds});`;
  }

  for (const brute of user.brutes) {
    // Remove brutes from followed
    await prisma.brute.update({
      where: { id: brute.id },
      data: {
        followers: {
          set: [],
        },
      },
    });
  }
};
