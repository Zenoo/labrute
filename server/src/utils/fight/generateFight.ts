import {
  AchievementsStore,
  BruteWithBodyColors, DetailedFight, ExpectedError, Fighter, randomBetween,
} from '@labrute/core';
import { Prisma, PrismaClient } from '@labrute/prisma';
import {
  Stats,
  checkDeaths, getOpponents, orderFighters, playFighterTurn, saboteur, stepFighter,
} from './fightMethods.js';
import getFighters from './getFighters.js';
import handleStats from './handleStats.js';
import updateAchievements from './updateAchievements.js';

const generateFight = async (
  prisma: PrismaClient,
  brute1: BruteWithBodyColors,
  brute2: BruteWithBodyColors,
  allowBackup: boolean,
  achievementsActive: boolean,
  isTournamentFinal: boolean,
) => {
  if (brute1.id === brute2.id) {
    throw new ExpectedError('Attempted to created a fight between the same brutes');
  }

  // Achievements
  const achievements: AchievementsStore = {
    [brute1.id]: {
      userId: brute1.userId,
      achievements: {},
    },
    [brute2.id]: {
      userId: brute2.userId,
      achievements: {},
    },
  };

  // Stats
  const stats: Stats = {
    [brute1.id]: {
      userId: brute1.userId,
    },
    [brute2.id]: {
      userId: brute2.userId,
    },
  };

  // Get brute backups
  const brute1Backups = allowBackup ? await prisma.brute.findMany({
    where: {
      skills: { has: 'backup' },
      level: { lt: brute1.level },
      userId: brute1.userId,
      deletedAt: null,
    },
    include: {
      body: true,
      colors: true,
    },
  }) : [];
  const brute2Backups = allowBackup ? await prisma.brute.findMany({
    where: {
      skills: { has: 'backup' },
      level: { lt: brute2.level },
      userId: brute2.userId,
      deletedAt: null,
    },
    include: {
      body: true,
      colors: true,
    },
  }) : [];

  const brute1Backup = brute1Backups.length
    ? brute1Backups[randomBetween(0, brute1Backups.length - 1)]
    : null;
  const brute2Backup = brute2Backups.length
    ? brute2Backups[randomBetween(0, brute2Backups.length - 1)]
    : null;

  // Global fight data
  const fightData: DetailedFight['data'] = {
    fighters: getFighters(
      { brute: brute1, backup: brute1Backup },
      { brute: brute2, backup: brute2Backup },
    ),
    initialFighters: getFighters(
      { brute: brute1, backup: brute1Backup },
      { brute: brute2, backup: brute2Backup },
    ),
    steps: [],
    initiative: 0,
    winner: null,
    loser: null,
  };

  // Pre-fight saboteur
  saboteur(fightData, achievements);

  // Poison fighters
  [brute1, brute2].forEach((brute) => {
    if (brute.skills.includes('chef')) {
      const fighter = fightData.fighters.find(({ type, name }) => type === 'brute' && name === brute.name);

      if (!fighter) {
        throw new Error('Fighter 1 not found');
      }
      getOpponents(fightData, fighter).forEach((opponent) => {
        // eslint-disable-next-line no-param-reassign
        opponent.poisoned = true;
      });
    }
  });

  const mainFighters = fightData.fighters.filter(({ master }) => !master);
  const petFighters = fightData.fighters.filter(({ type }) => type === 'pet');

  if (mainFighters.length !== 2) {
    throw new Error('Invalid number of fighters');
  }

  // Add arrive step for all fighters
  [...mainFighters, ...petFighters].forEach((fighter) => {
    fightData.steps.push({
      action: 'arrive',
      fighter: stepFighter(fighter),
    });
  });

  let turn = 0;

  // Fight loop
  while (!fightData.loser) {
    if (!fightData.fighters.length) {
      // No fighters left
      break;
    }

    // Order fighters by initiative (random if equal)
    orderFighters(fightData);

    // Set current initiative to first fighter
    fightData.initiative = fightData.fighters[0].initiative;

    // Poison fighters if turn > 100
    if (turn > 1000) {
      fightData.fighters.forEach((fighter) => {
        // eslint-disable-next-line no-param-reassign
        fighter.poisoned = true;
      });
    }

    // Play fighter turn
    playFighterTurn(fightData, stats, achievements);

    // Check deaths
    checkDeaths(fightData);

    turn += 1;
  }

  if (!fightData.loser) {
    throw new Error('Fight not finished');
  }

  const { loser } = fightData;

  // Get winner
  const winner = fightData.fighters.find((fighter) => fighter.name !== loser.name
    && fighter.type === 'brute'
    && !fighter.master);

  if (!winner) {
    throw new Error('No winner found');
  }

  // Set fight winner and loser
  fightData.winner = stepFighter(winner);

  // Add end step
  fightData.steps.push({
    action: 'end',
    winner: fightData.winner,
    loser: fightData.loser,
  });

  // Reduce the size of the fighters data
  const fighters: Fighter[] = fightData.initialFighters.map((fighter) => ({
    id: fighter.id,
    name: fighter.name,
    gender: fighter.gender,
    rank: fighter.rank,
    level: fighter.level,
    agility: fighter.agility,
    strength: fighter.strength,
    speed: fighter.speed,
    data: fighter.data,
    type: fighter.type,
    master: fighter.master,
    maxHp: fighter.maxHp,
    hp: fighter.hp,
    weapons: fighter.weapons.map((weapon) => ({
      name: weapon.name,
      animation: weapon.animation,
    })),
    skills: fighter.skills.map((skill) => skill.name),
    shield: fighter.shield,
  }));

  const data: Prisma.FightCreateInput = {
    brute1: { connect: { id: brute1.id } },
    brute2: { connect: { id: brute2.id } },
    winner: winner.name,
    loser: loser.name,
    steps: fightData.steps as unknown as Prisma.JsonArray,
    fighters: fighters as unknown as Prisma.JsonArray,
  };

  // Add achievements from stats
  handleStats(fightData, stats, achievements, !allowBackup, isTournamentFinal);

  // Update achievements
  if (achievementsActive) {
    await updateAchievements(prisma, achievements);
  }

  return data;
};

export default generateFight;