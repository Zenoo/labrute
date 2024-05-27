import { FightModifier, PrismaClient } from '@labrute/prisma';
import moment from 'moment';
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
    select: { id: true },
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

const getModifiers = async (prisma: PrismaClient) => {
  const serverState = await prisma.serverState.findFirst({
    where: { id: 1 },
    select: {
      activeModifiers: true,
    },
  });

  return serverState?.activeModifiers || [];
};

const setModifiers = async (prisma: PrismaClient, modifiers: FightModifier[]) => {
  const tomorrow = moment.utc().add(1, 'day').toDate();

  await prisma.serverState.upsert({
    where: { id: 1 },
    update: {
      activeModifiers: modifiers,
      modifiersEndAt: tomorrow,
    },
    create: {
      activeModifiers: modifiers,
      modifiersEndAt: tomorrow,
    },
    select: { id: true },
  });
};

const areModifiersExpired = async (prisma: PrismaClient) => {
  const serverState = await prisma.serverState.findFirst({
    where: { id: 1 },
    select: {
      modifiersEndAt: true,
    },
  });

  return !serverState?.modifiersEndAt || moment.utc(serverState.modifiersEndAt).isSameOrBefore(moment.utc(), 'day');
};

export default {
  setReady,
  isReady,
  setGlobalTournamentValid,
  isGlobalTournamentValid,
  getModifiers,
  setModifiers,
  areModifiersExpired,
};
