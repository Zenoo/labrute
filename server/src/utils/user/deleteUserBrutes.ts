import { BruteDeletionReason } from '@labrute/core';
import {
  Brute, Clan, Prisma, PrismaClient, User,
} from '@labrute/prisma';

export const deleteUserBrutes = async (prisma: PrismaClient, user: Pick<User, 'id'> & {
  brutes: (Pick<Brute, 'id'> & { masterOfClan: Pick<Clan, 'id'> | null })[];
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

  if (user.brutes.length > 0) {
    // Remove brutes from clan fighters
    const joinedBruteIds = Prisma.join(user.brutes.map((b) => Prisma.sql`${b.id}::uuid`));
    await prisma.$executeRaw`DELETE FROM "_ClanWarAttackerFighters" WHERE "A" IN (${joinedBruteIds});`;
    await prisma.$executeRaw`DELETE FROM "_ClanWarDefenderFighters" WHERE "A" IN (${joinedBruteIds});`;
  }

  for (const brute of user.brutes) {
    await prisma.brute.update({
      where: { id: brute.id },
      data: {
        // Remove from followed
        followers: {
          set: [],
        },
        // Remove from clan
        clanId: null,
        masterOfClan: brute.masterOfClan ? {
          disconnect: true,
        } : undefined,
        // Delete clan request
        wantToJoinClanId: null,
      },
    });

    // Handle clan ownership transfer if the brute is a clan master
    if (brute.masterOfClan) {
      // Try to transfer ownership to another brute in the clan
      const newMaster = await prisma.brute.findFirst({
        where: {
          clanId: brute.masterOfClan.id,
          deletedAt: null,
          id: { not: brute.id },
        },
      });

      if (newMaster) {
        await prisma.clan.update({
          where: { id: brute.masterOfClan.id },
          data: {
            masterId: newMaster.id,
          },
        });
      } else {
        // If no other brute is available, delete the clan
        await prisma.clan.delete({
          where: { id: brute.masterOfClan.id },
        });
      }
    }
  }
};
