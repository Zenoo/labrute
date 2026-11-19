import {
  ExpectedError, NotFoundError, parseAppealCode,
} from '@labrute/core';
import type { ResolveAppealCodeResponse } from '@labrute/core';
import type { PrismaClient } from '@labrute/prisma';
import { traced } from './trace.js';

export const resolveAppealCode = async (
  prisma: Pick<PrismaClient, 'user'>, code: unknown,
): Promise<ResolveAppealCodeResponse> => {
  const reference = typeof code === 'string' ? parseAppealCode(code)?.reference : undefined;

  if (reference === undefined) {
    throw new ExpectedError('Invalid short appeal code');
  }

  const user = await traced('appeals.resolve', () => prisma.user.findUnique({
    where: { appealReference: reference },
    select: {
      id: true,
      bannedAt: true,
      banAppealCode: true,
    },
  }));

  if (!user) {
    throw new NotFoundError('Appeal account not found');
  }

  return {
    userId: user.id,
    caseCode: user.bannedAt && user.banAppealCode ? `MC-${user.banAppealCode}` : null,
  };
};
