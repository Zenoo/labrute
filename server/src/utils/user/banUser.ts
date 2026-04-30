import { NotFoundError, LimitError } from '@labrute/core';
import { PrismaClient, UserLogType } from '@labrute/prisma';
import { LOGGER } from '../../context.js';
import { createUserLog } from '../createUserLog.js';
import { translate } from '../translate.js';
import { AuthedUser } from '../auth.js';
import { ServerState } from '../ServerState.js';
import { deleteUserBrutes } from './deleteUserBrutes.js';

export const banUser = async (
  prisma: PrismaClient,
  userId: string,
  reason: string,
  authed?: AuthedUser,
) => {
  const user = await prisma.user.findFirst({
    where: { id: userId },
    select: {
      id: true,
      bannedAt: true,
      fingerprints: true,
      brutes: {
        where: {
          deletedAt: null,
        },
        select: {
          id: true,
          clanId: true,
          level: true,
          ranking: true,
          masterOfClan: {
            select: { id: true },
          },
        },
      },
    },
  });

  if (!user) {
    throw new NotFoundError(translate('userNotFound', authed));
  }

  if (user.bannedAt) {
    throw new LimitError(translate('userAlreadyBanned', authed));
  }

  // Delete all brutes
  await deleteUserBrutes(prisma, user);

  // Ban user
  await prisma.user.update({
    where: { id: userId },
    data: {
      bannedAt: new Date(),
      banReason: reason,
    },
  });

  // User log
  createUserLog(prisma, {
    type: UserLogType.BANNED,
    userId,
  });

  // Filter out known fingerprints before banning
  const fingerprintsToBan: string[] = [];
  for (const fingerprint of user.fingerprints) {
    const isKnown = await ServerState.isFingerprintKnown(prisma, fingerprint);
    if (!isKnown) {
      fingerprintsToBan.push(fingerprint);
    }
  }

  await ServerState.addBannedFingerprints(prisma, fingerprintsToBan);

  if (authed) {
    LOGGER.log(`User ${userId} has been banned by ${authed.id}`);
  } else {
    LOGGER.log(`User ${userId} has been banned for reason: ${reason}`);
  }
};
