import {
  Event, EventStatus, FightModifier, PrismaClient,
} from '@labrute/prisma';
import dayjs from 'dayjs';
import { LOGGER } from '../context.js';

let SERVER_READY = true;
let MODIFIERS: FightModifier[] | null = null;
let BANNED_IPS: string[] | null = null;
let NEXT_MODIFIERS: FightModifier[] | null = null;
let CURRENT_EVENT: Event | null | undefined;

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
  const tomorrow = dayjs.utc().add(1, 'day').toDate();
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

  return !serverState?.modifiersEndAt || dayjs.utc(serverState.modifiersEndAt).isSameOrBefore(dayjs.utc(), 'day');
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

const setNextModifiers = async (prisma: PrismaClient, modifiers: FightModifier[]) => {
  const serverState = await prisma.serverState.findFirst({
    select: { id: true },
  });

  if (!serverState) {
    await prisma.serverState.create({
      data: { nextModifiers: modifiers },
      select: { id: true },
    });
  } else {
    await prisma.serverState.update({
      where: { id: serverState.id },
      data: { nextModifiers: modifiers },
      select: { id: true },
    });
  }

  NEXT_MODIFIERS = modifiers;
};

const getNextModifiers = async (prisma: PrismaClient) => {
  if (NEXT_MODIFIERS) {
    return NEXT_MODIFIERS;
  }

  const serverState = await prisma.serverState.findFirst({
    select: {
      nextModifiers: true,
    },
  });

  return serverState?.nextModifiers || [];
};

const getCurrentEvent = async (prisma: PrismaClient) => {
  if (typeof CURRENT_EVENT !== 'undefined') {
    return CURRENT_EVENT;
  }

  const event = await prisma.event.findFirst({
    where: { status: { not: EventStatus.finished } },
  });

  CURRENT_EVENT = event;

  return CURRENT_EVENT;
};

const setCurrentEvent = (event: Event | null | undefined) => {
  CURRENT_EVENT = event;
};

export const ServerState = {
  setReady,
  isReady,
  setGlobalTournamentValid,
  isGlobalTournamentValid,
  getModifiers,
  setModifiers,
  areModifiersExpired,
  getBannedIps,
  addBannedIps,
  isIpBanned,
  removeBannedIps,
  setNextModifiers,
  getNextModifiers,
  getCurrentEvent,
  setCurrentEvent,
};
