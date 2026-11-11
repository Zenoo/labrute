import {
  BruteDeletionReason, NotFoundError, isUuid, ExpectedError,
} from '@labrute/core';
import { InventoryItemType, PrismaClient } from '@labrute/prisma';
import type { AuthedUser } from '../auth.js';
import { lockAccountSanction } from './accountSanctionLock.js';
import { traced } from '../trace.js';

export const unbanUser = async (prisma: PrismaClient, rawId: string, actor: AuthedUser) => {
  if (!isUuid(rawId)) throw new ExpectedError('Invalid account ID');

  const id = rawId.toLowerCase();

  return prisma.$transaction(async (tx) => {
    await lockAccountSanction(tx, id);

    const user = await traced('unbanUser.getUser', () => tx.user.findUnique({
      where: { id },
      select: {
        bannedAt: true,
        brutes: {
          where: {
            deletedAt: { not: null }, deletionReason: BruteDeletionReason.BANNED_USER,
          },
          select: { id: true, name: true }
        },
      }
    }));

    if (!user) throw new NotFoundError('User not found');
    if (!user.bannedAt) return;

    // Restore all brutes
    for (const brute of user.brutes) {
      // Check if the name is available
      const duplicate = await traced('unbanUser.countDuplicateBrute', () => tx.brute.count({ where: { name: brute.name, deletedAt: null } }));

      if (duplicate) {
        // Rename brute with _unbanned suffix
        await traced('unbanUser.updateBruteName', () => tx.brute.update({
          where: { id: brute.id },
          data: { name: `${brute.name}_unbanned` }
        }));

        // Add 1x free name change
        await traced('unbanUser.upsertInventoryItem', () => tx.inventoryItem.upsert({
          where: {
            type_bruteId: { type: InventoryItemType.nameChange, bruteId: brute.id },
          },
          create: { type: InventoryItemType.nameChange, bruteId: brute.id, count: 1 },
          update: { count: { increment: 1 } }
        }));
      }

      // Restore brute
      await traced('unbanUser.updateBrute', () => tx.brute.update({
        where: { id: brute.id }, data: { deletedAt: null, deletionReason: null },
      }));
    }

    await traced('unbanUser.updateUser', () => tx.user.update({
      where: { id }, data: {
        bannedAt: null, banReason: null, banAppealCode: null,
      }
    }));

    await traced('unbanUser.createSecurityAction', () => tx.securityAction.create({
      data: {
        subjectType: 'account', subjectId: id, userId: id, actorId: actor.id,
        action: 'unban', reason: 'Manual account unban',
      }
    }));
  }, { timeout: 30000 });
};
