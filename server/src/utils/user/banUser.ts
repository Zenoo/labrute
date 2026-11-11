import {
  NotFoundError, ExpectedError, isUuid,
} from '@labrute/core';
import {
  Prisma, PrismaClient, UserLogType,
} from '@labrute/prisma';
import { LOGGER } from '../../context.js';
import { translate } from '../translate.js';
import { AuthedUser } from '../auth.js';
import { deleteBrutes } from './deleteUserBrutes.js';
import { traced } from '../trace.js';
import { lockAccountSanction } from './accountSanctionLock.js';

export const banUserInTransaction = async (
  prisma: Prisma.TransactionClient,
  rawUserId: string,
  reason: string,
  authed?: AuthedUser,
  auditReason = reason,
  appealCode?: string,
) => {
  if (!isUuid(rawUserId) || typeof reason !== 'string' || !reason.trim() || reason.length > 500) {
    throw new ExpectedError('Invalid account ban');
  }

  const userId = rawUserId.toLowerCase();

  await lockAccountSanction(prisma, userId);

  const user = await traced('banUser.getUser', () => prisma.user.findFirst({
    where: { id: userId },
    select: {
      id: true,
      bannedAt: true,
      brutes: {
        where: {
          deletedAt: null,
        },
        select: {
          id: true,
          clanId: true,
          level: true,
          ranking: true,
          ascensions: true,
          masterOfClan: {
            select: { id: true },
          },
        },
      },
    },
  }));

  if (!user) {
    throw new NotFoundError(translate('userNotFound', authed));
  }

  if (user.bannedAt) {
    return false;
  }

  // Delete all brutes
  await deleteBrutes(prisma, user.brutes);

  // Ban user
  await traced('banUser.updateUser', () => prisma.user.update({
    where: { id: userId },
    data: {
      bannedAt: new Date(),
      banReason: reason,
      banAppealCode: appealCode ?? null,
    },
  }));

  // User log
  await traced('banUser.createUserLog', () => prisma.userLog.create({ data: { type: UserLogType.BANNED, userId } }));

  await traced('banUser.createSecurityAction', () => prisma.securityAction.create({
    data: {
      subjectType: 'account', subjectId: userId, userId, action: 'ban',
      actorId: authed?.id ?? null, reason: auditReason,
    }
  }));

  // Account sanctions never create browser or fingerprint restrictions.

  return true;
};

export const banUser = async (
  prisma: PrismaClient, userId: string, reason: string, authed?: AuthedUser,
) => {
  const changed = await prisma.$transaction((tx) => banUserInTransaction(
    tx, userId, reason, authed,
  ), { timeout: 30000 });

  if (!changed) return;

  if (authed) {
    LOGGER.log(`User ${userId} has been banned by ${authed.id}`);
  } else {
    LOGGER.log(`User ${userId} has been banned for reason: ${reason}`);
  }
};
