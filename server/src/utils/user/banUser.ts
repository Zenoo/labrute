import { NotFoundError, ExpectedError } from '@labrute/core';
import { PrismaClient, UserLogType } from '@labrute/prisma';
import { LOGGER } from '../../context.js';
import { createUserLog } from '../createUserLog.js';
import { translate } from '../translate.js';
import { AuthedUser } from '../auth.js';
import { ServerState } from '../ServerState.js';
import { deleteBrutes } from './deleteUserBrutes.js';
import { traced } from '../trace.js';

export const banUser = async (
  prisma: PrismaClient,
  userId: string,
  reason: string,
  authed?: AuthedUser,
  options?: { banFingerprints?: boolean },
) => {
  const user = await traced('banUser.getUser', () => prisma.user.findFirst({
    where: { id: userId },
    select: {
      id: true,
      bannedAt: true,
      fingerprints: true,
      browserIds: true,
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
  }));

  if (!user) {
    throw new NotFoundError(translate('userNotFound', authed));
  }

  if (user.bannedAt) {
    throw new ExpectedError(translate('userAlreadyBanned', authed));
  }

  // Delete all brutes
  await deleteBrutes(prisma, user.brutes);

  // Ban user
  await traced('banUser.updateUser', () => prisma.user.update({
    where: { id: userId },
    data: {
      bannedAt: new Date(),
      banReason: reason,
    },
  }));

  // User log
  createUserLog(prisma, {
    type: UserLogType.BANNED,
    userId,
  });

  // Only ban fingerprints if explicitly requested (e.g., manual admin ban for abuse)
  // Do NOT ban fingerprints for automatic multiple account detection, as fingerprints
  // can be shared between legitimate users (e.g., iPhones of the same model)
  // Per FingerprintJS: "FP-ing cannot be relied upon as a single method of identification"
  if (options?.banFingerprints) {
    // Filter out known fingerprints before banning
    const fingerprintsToBan: string[] = [];
    for (const fingerprint of user.fingerprints) {
      const isKnown = await ServerState.isFingerprintKnown(prisma, fingerprint);
      if (!isKnown) {
        fingerprintsToBan.push(fingerprint);
      }
    }

    await ServerState.addBannedFingerprints(prisma, fingerprintsToBan);
  }

  // Ban browser IDs
  await ServerState.addBannedBrowsers(prisma, user.browserIds);

  if (authed) {
    LOGGER.log(`User ${userId} has been banned by ${authed.id}`);
  } else {
    LOGGER.log(`User ${userId} has been banned for reason: ${reason}`);
  }
};
