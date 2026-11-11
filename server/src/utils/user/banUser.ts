import { NotFoundError, ExpectedError } from '@labrute/core';
import { PrismaClient, UserLogType } from '@labrute/prisma';
import { LOGGER } from '../../context.js';
import { createUserLog } from '../createUserLog.js';
import { translate } from '../translate.js';
import { AuthedUser } from '../auth.js';
import { deleteBrutes } from './deleteUserBrutes.js';
import { traced } from '../trace.js';

export const banUser = async (
  prisma: PrismaClient,
  userId: string,
  reason: string,
  authed?: AuthedUser,
) => {
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

  // Account sanctions never create browser or fingerprint restrictions.

  if (authed) {
    LOGGER.log(`User ${userId} has been banned by ${authed.id}`);
  } else {
    LOGGER.log(`User ${userId} has been banned for reason: ${reason}`);
  }
};
