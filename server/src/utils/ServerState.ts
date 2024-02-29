import { PrismaClient } from '@labrute/prisma';
import { LOGGER } from '../context.js';

const setReady = async (prisma: PrismaClient, ready: boolean) => {
  LOGGER.log(`Updating server state to ${ready ? 'release' : 'hold'} traffic`);

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

  if (!serverState) {
    // Create the server state if it doesn't exist
    await prisma.serverState.create({
      data: {
        ready: true,
      },
    });

    return true;
  }

  return serverState.ready;
};

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