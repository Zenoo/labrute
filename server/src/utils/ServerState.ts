import { PrismaClient } from '@labrute/prisma';
import { LOGGER } from '../context.js';

let serverReady = true;

const setReady = (ready: boolean) => {
  LOGGER.log(`Updating server state to ${ready ? 'release' : 'hold'} traffic`);
  serverReady = ready;
};

const isReady = () => serverReady;

const setGlobalTournamentValid = async (prisma: PrismaClient, valid: boolean) => {
  const serverState = await prisma.serverState.findFirst({
    where: {
      globalTournamentValid: valid,
    },

  });
  if (!serverState) {
    await prisma.serverState.create({
      data: { globalTournamentValid: valid },

    });
  } else {
    await prisma.serverState.update({
      where: { id: serverState.id },
      data: { globalTournamentValid: valid },

    });
  }
};

const isGlobalTournamentValid = async (prisma: PrismaClient) => {
  const serverState = await prisma.serverState.findFirst({
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