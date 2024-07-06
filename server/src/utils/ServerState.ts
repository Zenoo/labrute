import { FightModifier, PrismaClient } from '@labrute/prisma';
import moment from 'moment';
import { LOGGER } from '../context.js';

let SERVER_READY = true;
let MODIFIERS: FightModifier[] | null = null;
let RANDOM_SKILL: number | undefined;
let RANDOM_WEAPON: number | undefined;

const setReady = (ready: boolean) => {
  LOGGER.log(`Updating server state to ${ready ? 'release' : 'hold'} traffic`);

  SERVER_READY = ready;
};

const isReady = () => SERVER_READY;

const setGlobalTournamentValid = async (prisma: PrismaClient, valid: boolean) => {
  const serverState = await prisma.serverState.findFirst({
    select: { id: true },
  });
  if (!serverState) {
    await prisma.serverState.create({
      data: { globalTournamentValid: valid },
      select: { id: true },
    });
  } else {
    await prisma.serverState.update({
      where: { id: serverState.id },
      data: { globalTournamentValid: valid },
      select: { id: true },
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
  if (MODIFIERS) {
    return MODIFIERS;
  }

  const serverState = await prisma.serverState.findFirst({
    select: {
      activeModifiers: true,
    },
  });

  MODIFIERS = serverState?.activeModifiers || [];

  return MODIFIERS;
};

const setModifiers = async (prisma: PrismaClient, modifiers: FightModifier[]) => {
  const tomorrow = moment.utc().add(1, 'day').toDate();
  const serverState = await prisma.serverState.findFirst({
    select: { id: true },
  });
  if (!serverState) {
    await prisma.serverState.create({
      data: {
        activeModifiers: modifiers,
        modifiersEndAt: tomorrow,
      },
      select: { id: true },
    });
  } else {
    await prisma.serverState.update({
      where: { id: serverState.id },
      data: {
        activeModifiers: modifiers,
        modifiersEndAt: tomorrow,
      },
      select: { id: true },
    });
  }

  MODIFIERS = modifiers;
};

const areModifiersExpired = async (prisma: PrismaClient) => {
  const serverState = await prisma.serverState.findFirst({
    select: {
      modifiersEndAt: true,
    },
  });

  return !serverState?.modifiersEndAt || moment.utc(serverState.modifiersEndAt).isSameOrBefore(moment.utc(), 'day');
};

const setRandomSkill = async (prisma: PrismaClient, skill: number) => {
  const serverState = await prisma.serverState.findFirst({
    select: { id: true },
  });
  if (!serverState) {
    await prisma.serverState.create({
      data: { randomSkill: skill },
      select: { id: true },
    });
  } else {
    await prisma.serverState.update({
      where: { id: serverState.id },
      data: { randomSkill: skill },
      select: { id: true },
    });
  }

  RANDOM_SKILL = skill;
};

const getRandomSkill = async (prisma: PrismaClient) => {
  if (RANDOM_SKILL !== undefined) {
    return RANDOM_SKILL;
  }

  if (!MODIFIERS?.includes(FightModifier.randomSkill)) {
    return null;
  }

  const serverState = await prisma.serverState.findFirst({
    select: {
      randomSkill: true,
    },
  });

  return serverState ? serverState.randomSkill : null;
};

const setRandomWeapon = async (prisma: PrismaClient, weapon: number) => {
  const serverState = await prisma.serverState.findFirst({
    select: { id: true },
  });
  if (!serverState) {
    await prisma.serverState.create({
      data: { randomWeapon: weapon },
      select: { id: true },
    });
  } else {
    await prisma.serverState.update({
      where: { id: serverState.id },
      data: { randomWeapon: weapon },
      select: { id: true },
    });
  }

  RANDOM_WEAPON = weapon;
};

const getRandomWeapon = async (prisma: PrismaClient) => {
  if (RANDOM_WEAPON !== undefined) {
    return RANDOM_WEAPON;
  }

  if (!MODIFIERS?.includes(FightModifier.randomWeapon)) {
    return null;
  }

  const serverState = await prisma.serverState.findFirst({
    select: {
      randomWeapon: true,
    },
  });

  return serverState ? serverState.randomWeapon : null;
};

export default {
  setReady,
  isReady,
  setGlobalTournamentValid,
  isGlobalTournamentValid,
  getModifiers,
  setModifiers,
  areModifiersExpired,
  setRandomSkill,
  getRandomSkill,
  setRandomWeapon,
  getRandomWeapon,
};
