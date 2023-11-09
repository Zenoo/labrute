import { PrismaClient } from '@labrute/prisma';

const setReady = async (prisma: PrismaClient, ready: boolean) => {
  await prisma.serverState.upsert({
    where: { id: 1 },
    update: {
      ready,
    },
    create: {
      ready,
    },
  });
};

const isReady = async (prisma: PrismaClient) => {
  const serverState = await prisma.serverState.findFirst({
    where: { id: 1 },
    select: { ready: true },
  });

  return serverState?.ready ?? false;
};

export default {
  setReady,
  isReady,
};