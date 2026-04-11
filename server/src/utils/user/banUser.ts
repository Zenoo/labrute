import { NotFoundError, LimitError, BruteDeletionReason } from '@labrute/core';
import { PrismaClient, Prisma, UserLogType } from '@labrute/prisma';
import { LOGGER } from '../../context.js';
import { createUserLog } from '../createUserLog.js';
import { translate } from '../translate.js';
import { AuthedUser } from '../auth.js';
import { ServerState } from '../ServerState.js';

export const banUser = async (
  prisma: PrismaClient,
  userId: string,
  reason: string,
  authed?: AuthedUser,
) => {
  const user = await prisma.user.findFirst({
    where: { id: userId },
    select: {
      bannedAt: true,
      fingerprints: true,
      brutes: {
        where: {
          deletedAt: null,
        },
        select: { id: true },
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
  await prisma.brute.updateMany({
    where: {
      userId,
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

  await ServerState.addBannedFingerprints(prisma, user.fingerprints);

  if (authed) {
    LOGGER.log(`User ${userId} has been banned by ${authed.id}`);
  } else {
    LOGGER.log(`User ${userId} has been banned for reason: ${reason}`);
  }
};
