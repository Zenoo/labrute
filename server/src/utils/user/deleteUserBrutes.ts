import { BruteDeletionReason } from '@labrute/core';
import {
  Brute, Clan, Prisma, PrismaClient
} from '@labrute/prisma';
import { updateClanPoints } from '../clan/updateClanPoints.js';
import { traced } from '../trace.js';

export const deleteBrutes = async (
  prisma: PrismaClient,
  brutes: (Pick<Brute, 'id' | 'clanId' | 'level' | 'ranking'> & { masterOfClan: Pick<Clan, 'id'> | null })[],
  /** If not set to null, will default to BANNED_USER */
  _reason?: BruteDeletionReason | null,
) => {
  const reason = typeof _reason === 'undefined' ? BruteDeletionReason.BANNED_USER : _reason ?? undefined;

  if (brutes.length > 0) {
    // Remove brutes from clan fighters
    const joinedBruteIds = Prisma.join(brutes.map((b) => Prisma.sql`${b.id}::uuid`));
    await traced('deleteUserBrutes.removeClanWarAttackerFighters', () => prisma.$executeRaw`DELETE FROM "_ClanWarAttackerFighters" WHERE "A" = ANY(ARRAY[${joinedBruteIds}]);`);
    await traced('deleteUserBrutes.removeClanWarDefenderFighters', () => prisma.$executeRaw`DELETE FROM "_ClanWarDefenderFighters" WHERE "A" = ANY(ARRAY[${joinedBruteIds}]);`);
  }

  for (const brute of brutes) {
    // Update clan points
    if (brute.clanId) {
      await updateClanPoints(prisma, brute.clanId, 'remove', brute);
    }

    await traced('deleteUserBrutes.updateBrute', () => prisma.brute.update({
      where: { id: brute.id, deletedAt: null },
      data: {
        deletedAt: new Date(),
        deletionReason: reason,
        // Remove from followed
        followers: {
          set: [],
        },
        // Remove from clan
        clanId: null,
        clanRoleId: null,
        masterOfClan: brute.masterOfClan ? {
          disconnect: true,
        } : undefined,
        // Delete clan request
        wantToJoinClanId: null,
      },
    }));

    // Handle clan ownership transfer if the brute is a clan master
    const bruteClanId = brute.masterOfClan?.id;
    if (bruteClanId) {
      // Try to transfer ownership to another brute in the clan
      const newMaster = await traced('deleteUserBrutes.findNewMaster', () => prisma.brute.findFirst({
        where: {
          clanId: bruteClanId,
          deletedAt: null,
          id: { not: brute.id },
        },
      }));

      if (newMaster) {
        await traced('deleteUserBrutes.updateClanMaster', () => prisma.clan.update({
          where: { id: bruteClanId },
          data: {
            masterId: newMaster.id,
          },
        }));
      } else {
        // If no other brute is available, delete the clan
        await traced('deleteUserBrutes.deleteClan', () => prisma.clan.update({
          where: { id: bruteClanId },
          data: {
            deletedAt: new Date(),
          },
        }));
      }
    }
  }
};
