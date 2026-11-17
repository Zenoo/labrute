import { BruteDeletionReason } from '@labrute/core';
import {
  Brute, Clan, Prisma,
} from '@labrute/prisma';
import { updateClanPoints } from '../clan/updateClanPoints.js';
import { traced } from '../trace.js';

export const deleteBrutes = async (
  prisma: Prisma.TransactionClient,
  brutes: (Pick<Brute, 'id' | 'clanId' | 'level' | 'ranking' | 'ascensions'> & { masterOfClan: Pick<Clan, 'id'> | null })[],
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
      where: {
        id: brute.id,
        deletedAt: null,
      },
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
  }

  // Resolve ownership after the entire batch is removed so a future deletion cannot
  // inherit the clan. Include memberships to clean up clans with a stale master too.
  const clanIds = new Set(brutes.flatMap((brute) => [
    ...(brute.clanId ? [brute.clanId] : []),
    ...(brute.masterOfClan ? [brute.masterOfClan.id] : []),
  ]));

  for (const clanId of clanIds) {
    const clan = await traced('deleteUserBrutes.getClanOwnership', () => prisma.clan.findUnique({
      where: { id: clanId },
      select: {
        deletedAt: true,
        master: {
          select: {
            clanId: true,
            deletedAt: true,
          },
        },
        brutes: {
          where: { deletedAt: null },
          orderBy: { id: 'asc' },
          take: 1,
          select: { id: true },
        },
      },
    }));

    if (!clan || clan.deletedAt) {
      continue;
    }

    const newMaster = clan.brutes[0];

    if (!newMaster) {
      await traced('deleteUserBrutes.deleteClan', () => prisma.clan.update({
        where: { id: clanId },
        data: {
          deletedAt: new Date(),
          masterId: null,
        },
      }));
    } else if (!clan.master || clan.master.deletedAt || clan.master.clanId !== clanId) {
      await traced('deleteUserBrutes.updateClanMaster', () => prisma.clan.update({
        where: { id: clanId },
        data: {
          masterId: newMaster.id,
        },
      }));
    }
  }
};
