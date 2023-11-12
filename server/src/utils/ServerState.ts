import { PrismaClient } from '@labrute/prisma';
import DiscordUtils from './DiscordUtils.js';

const setReady = async (prisma: PrismaClient, ready: boolean) => {
  await DiscordUtils.sendLog(`Updating server state to ${ready ? 'release' : 'hold'} traffic`);

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