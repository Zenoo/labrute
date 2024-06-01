import { FightModifier, PrismaClient } from '@labrute/prisma';
import moment from 'moment';
import { LOGGER } from '../context.js';

let SERVER_READY = true;
let MODIFIERS: FightModifier[] | null = null;

const setReady = (ready: boolean) => {
  LOGGER.log(`Updating server state to ${ready ? 'release' : 'hold'} traffic`);

  SERVER_READY = ready;
};

const isReady = () => SERVER_READY;

const setGlobalTournamentValid = async (prisma: PrismaClient, valid: boolean) => {
  await prisma.serverState.upsert({
    where: { id: 1 },
    update: {
      globalTournamentValid: valid,
    },
    create: {
      globalTournamentValid: valid,
    },
    select: { id: true },
  });
};

const isGlobalTournamentValid = async (prisma: PrismaClient) => {
  const serverState = await prisma.serverState.findFirst({
    where: { id: 1 },
    select: { globalTournamentValid: true },
  });

  return serverState?.globalTournamentValid ?? false;
};

const getModifiers = async (prisma: PrismaClient) => {
  if (MODIFIERS) {
    return MODIFIERS;
  }

  const serverState = await prisma.serverState.findFirst({
    where: { id: 1 },
    select: {
      activeModifiers: true,
    },
  });

  MODIFIERS = serverState?.activeModifiers || [];

  return MODIFIERS;
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

  MODIFIERS = modifiers;
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
