import { Prisma, PrismaClient } from '@labrute/prisma';
import { DISCORD } from '../context.js';

export const createUserLog = (prisma: PrismaClient, data: Prisma.UserLogUncheckedCreateInput) => {
  prisma.userLog.create({
    data,
  }).catch((error) => {
    if (error instanceof Error) {
      DISCORD().sendError(error);
    }
  });
};
