import {
  Prisma, PrismaClient, UserLogType
} from '@labrute/prisma';
import { DISCORD } from '../context.js';
import { traced } from './trace.js';
import { increaseStats } from './stats/updateStats.js';

export const createUserLog = (prisma: PrismaClient, data: Prisma.UserLogUncheckedCreateInput) => {
  traced('createUserLog', () => prisma.userLog.create({
    data,
  })).catch((error) => {
    if (error instanceof Error) {
      DISCORD().sendError(error);
    }
  });
};

export const createManyUserLogs = (
  prisma: PrismaClient,
  data: Prisma.UserLogUncheckedCreateInput[],
) => {
  traced('createManyUserLogs', () => prisma.userLog.createMany({
    data,
  })).catch((error) => {
    if (error instanceof Error) {
      DISCORD().sendError(error);
    }
  });

  const goldWonLogs = data.filter((log) => log.type === UserLogType.GOLD_WIN);
  if (goldWonLogs.length > 0) {
    for (const log of goldWonLogs) {
      increaseStats({
        prisma,
        user: { id: log.userId },
        stats: { goldWon: log.gold ?? 0 },
      });
    }
  }

  const goldLostLogs = data.filter((log) => log.type === UserLogType.GOLD_LOSS);
  if (goldLostLogs.length > 0) {
    for (const log of goldLostLogs) {
      increaseStats({
        prisma,
        user: { id: log.userId },
        stats: { goldLost: log.gold ?? 0 },
      });
    }
  }
};
