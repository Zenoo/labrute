import { PrismaClient } from '@labrute/prisma';
import { LOGGER } from '../context.js';

let serverReady = true;

const setReady = (ready: boolean) => {
  LOGGER.log(`Updating server state to ${ready ? 'release' : 'hold'} traffic`);

  serverReady = ready;
};

const isReady = () => serverReady;

const setGlobalTournamentValid = async (prisma: PrismaClient, valid: boolean) => {
  await prisma.serverState.upsert({
    where: { id: 1 },
    update: {
      globalTournamentValid: valid,
    },
    create: {
      globalTournamentValid: valid,
    },
  });
};

const isGlobalTournamentValid = async (prisma: PrismaClient) => {
  const serverState = await prisma.serverState.findFirst({
    where: { id: 1 },
    select: { globalTournamentValid: true },
  });

  return serverState?.globalTournamentValid ?? false;
};

export default {
  setReady,
  isReady,
  setGlobalTournamentValid,
  isGlobalTournamentValid,
};