import { Prisma, PrismaClient } from '@labrute/prisma';
import { DISCORD } from '../context.js';
import { traced } from './trace.js';

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
};
