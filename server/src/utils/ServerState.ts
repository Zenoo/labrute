import { FightModifier, PrismaClient } from '@labrute/prisma';
import moment from 'moment';
import { LOGGER } from '../context.js';

let SERVER_READY = true;
let MODIFIERS: FightModifier[] | null = null;
let RANDOM_SKILL: number | undefined;
let RANDOM_WEAPON: number | undefined;
let BANNED_IPS: string[] | null = null;

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

const getBannedIps = async (prisma: PrismaClient) => {
  if (BANNED_IPS) {
    return BANNED_IPS;
  }

  const bannedIps = await prisma.bannedIp.findMany({
    select: { id: true },
  });

  BANNED_IPS = bannedIps.map((ip) => ip.id);

  return BANNED_IPS;
};

const addBannedIps = async (prisma: PrismaClient, ips: string[]) => {
  const bannedIps = await getBannedIps(prisma);
  const newIps = ips.filter((ip) => !bannedIps.includes(ip));

  await prisma.bannedIp.createMany({
    data: newIps.map((ip) => ({ id: ip })),
  });

  if (BANNED_IPS) BANNED_IPS.push(...newIps);
};

const isIpBanned = async (prisma: PrismaClient, ip: string) => {
  const bannedIps = await getBannedIps(prisma);

  return bannedIps.includes(ip);
};

const removeBannedIps = async (prisma: PrismaClient, ips: string[]) => {
  const bannedIps = await getBannedIps(prisma);

  await prisma.bannedIp.deleteMany({
    where: { id: { in: ips } },
  });

  if (BANNED_IPS) BANNED_IPS = bannedIps.filter((ip) => !ips.includes(ip));
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
  getBannedIps,
  addBannedIps,
  isIpBanned,
  removeBannedIps,
};
