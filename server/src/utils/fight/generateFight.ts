import {
  AchievementsStore,
  BOSS_GOLD_REWARD,
  Boss,
  CLAN_SIZE_LIMIT,
  DetailedFight, ExpectedError, Fighter, SkillByName, StepType, WeaponByName, bosses,
  randomItem,
} from '@labrute/core';
import {
  Brute, FightModifier, InventoryItemType, LogType, Prisma, PrismaClient,
} from '@labrute/prisma';
import applySpy from './applySpy.js';
import {
  Stats,
  checkDeaths, getOpponents, orderFighters, playFighterTurn, saboteur,
} from './fightMethods.js';
import getFighters from './getFighters.js';
import handleStats from './handleStats.js';
import updateAchievements from './updateAchievements.js';

type GenerateFightResult = {
  data: Prisma.FightCreateInput;
  boss?: {
    xp: number;
    gold: number;
  }
};

const generateFight = async (
  prisma: PrismaClient,
  brute1: Brute,
  brute2: Brute | null,
  modifiers: FightModifier[],
  allowBackup: boolean,
  achievementsActive: boolean,
  isTournamentFinal: boolean,
  boss?: Boss,
  bossHP?: number,
  clanId?: string,
): Promise<GenerateFightResult> => {
  if (brute1.id === brute2?.id) {
    throw new ExpectedError('Attempted to created a fight between the same brutes');
  }

  const isTournamentFight = !allowBackup;

  // Achievements
  const achievements: AchievementsStore = {
    [brute1.id]: {
      userId: brute1.userId,
      achievements: {},
    },
  };

  if (brute2) {
    achievements[brute2.id] = {
      userId: brute2.userId,
      achievements: {},
    };
  }

  // Stats
  const stats: Stats = {
    [brute1.id]: {
      userId: brute1.userId,
    },
  };

  if (brute2) {
    stats[brute2.id] = {
      userId: brute2.userId,
    };
  }

  // Get brute backups
  const brute1Backups = allowBackup ? await prisma.brute.findMany({
    where: {
      skills: { has: 'backup' },
      level: { lt: brute1.level },
      userId: brute1.userId,
      deletedAt: null,
    },
  }) : [];
  const brute2Backups = (brute2 && allowBackup) ? await prisma.brute.findMany({
    where: {
      skills: { has: 'backup' },
      level: { lt: brute2.level },
      userId: brute2.userId,
      deletedAt: null,
    },
  }) : [];

  const brute1Backup = brute1Backups.length
    ? randomItem(brute1Backups)
    : null;
  const brute2Backup = brute2Backups.length
    ? randomItem(brute2Backups)
    : null;

  // Global fight data
  const fightDataFighters = getFighters(
    { brute: brute1, backup: brute1Backup },
    { brute: brute2, backup: brute2Backup, boss: boss || undefined },
  )
    // Adjust boss HP
    .map((fighter) => {
      if (fighter.type === 'boss') {
        return {
          ...fighter,
          hp: bossHP || fighter.hp,
        };
      }
      return fighter;
    });
  const fightDataInitialFighters = getFighters(
    { brute: brute1, backup: brute1Backup },
    { brute: brute2, backup: brute2Backup, boss: boss || undefined },
  )
    // Adjust boss HP
    .map((fighter) => {
      if (fighter.type === 'boss') {
        return {
          ...fighter,
          hp: bossHP || fighter.hp,
        };
      }
      return fighter;
    });

  const fightData: DetailedFight = {
    modifiers,
    fighters: fightDataFighters,
    initialFighters: fightDataInitialFighters,
    steps: [],
    initiative: 0,
    winner: null,
    loser: null,
  };

  // Poison fighters (not for bosses)
  if (brute2 && !boss) {
    [brute1, brute2].forEach((brute) => {
      if (brute.skills.includes('chef')) {
        const fighter = fightData.fighters.find(({ id }) => id === brute.id);

        if (!fighter) {
          throw new Error('Fighter 1 not found');
        }
        getOpponents(fightData, fighter).forEach((opponent) => {
          // eslint-disable-next-line no-param-reassign
          opponent.poisoned = true;
        });
      }
    });
  }

  const mainFighters = fightData.fighters.filter(({ master }) => !master);
  const petFighters = fightData.fighters.filter(({ type }) => type === 'pet');
  const firstMainFighter = mainFighters[0];
  const secondMainFighter = mainFighters[1];

  if (!firstMainFighter || !secondMainFighter) {
    throw new Error('Invalid number of fighters');
  }

  // Add arrive step for all fighters
  [...mainFighters, ...petFighters].forEach((fighter) => {
    fightData.steps.push({
      a: StepType.Arrive,
      f: fighter.index,
    });
  });

  // Add spy steps
  applySpy(fightData, firstMainFighter, secondMainFighter);
  applySpy(fightData, secondMainFighter, firstMainFighter);

  // Pre-fight saboteur
  saboteur(fightData, achievements);

  let turn = 0;

  // Fight loop
  while (!fightData.loser) {
    const firstFighter = fightData.fighters[0];
    if (!firstFighter) {
      // No fighters left
      break;
    }

    // Order fighters by initiative (random if equal)
    orderFighters(fightData);

    // Set current initiative to first fighter
    fightData.initiative = firstFighter.initiative;

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
    checkDeaths(fightData, stats);

    turn += 1;
  }

  if (!fightData.loser) {
    throw new Error('Fight not finished');
  }

  // Get winner
  const winner = fightData.fighters.find((fighter) => fighter.index !== fightData.loser
    && (fighter.type === 'brute' || fighter.type === 'boss')
    && !fighter.master);

  if (!winner) {
    throw new Error('No winner found');
  }

  // Get loser
  const loser = fightData.fighters.find((fighter) => fighter.index === fightData.loser);

  if (!loser) {
    throw new Error('No loser found');
  }

  // Set fight winner and loser
  fightData.winner = winner.index;

  // Add end step
  fightData.steps.push({
    a: StepType.End,
    w: fightData.winner,
    l: fightData.loser,
  });

  // Reduce the size of the fighters data
  const fighters: Fighter[] = fightData.initialFighters.map((fighter) => ({
    id: fighter.id,
    name: fighter.name,
    gender: fighter.gender,
    body: fighter.body,
    colors: fighter.colors,
    rank: fighter.rank,
    level: fighter.level,
    agility: fighter.agility,
    strength: fighter.strength,
    speed: fighter.speed,
    type: fighter.type,
    master: fighter.master,
    maxHp: fighter.maxHp,
    hp: fighter.hp,
    weapons: fighter.weapons.map((weapon) => WeaponByName[weapon.name]),
    skills: fighter.skills.map((skill) => SkillByName[skill.name]),
    shield: fighter.shield,
  }));

  const result: GenerateFightResult = {
    data: {
      brute1: { connect: { id: brute1.id } },
      winner: winner.name,
      loser: loser.name,
      steps: JSON.stringify(fightData.steps),
      fighters: JSON.stringify(fighters),
    },
  };

  if (brute2) {
    result.data.brute2 = { connect: { id: brute2.id } };
  }

  if (boss) {
    // Update clan limit and boss if boss slain
    const bossFighter = fighters.find((fighter) => fighter.type === 'boss');
    if (bossFighter && loser.id === bossFighter.id) {
      const clan = await prisma.clan.findUnique({
        where: { id: clanId },
        select: {
          limit: true,
          brutes: {
            select: {
              id: true,
              userId: true,
            },
          },
          bossDamages: {
            select: {
              brute: {
                select: {
                  id: true,
                  userId: true,
                },
              },
            },
          },
        },
      });

      if (!clan) {
        throw new Error('Clan not found');
      }

      // Combine all bruteIds
      const bruteIds = new Set(clan.brutes.map((brute) => brute.id));
      clan.bossDamages.forEach((damage) => {
        bruteIds.add(damage.brute.id);
      });

      // Get brutes that already have a BossTicket
      const brutesWithTicket = await prisma.bruteInventoryItem.findMany({
        where: {
          bruteId: { in: Array.from(bruteIds) },
          type: InventoryItemType.bossTicket,
        },
        select: {
          bruteId: true,
        },
      });

      // Add 1x BossTicket to those brutes
      await prisma.bruteInventoryItem.updateMany({
        where: {
          bruteId: { in: brutesWithTicket.map((brute) => brute.bruteId) },
          type: InventoryItemType.bossTicket,
        },
        data: {
          count: { increment: 1 },
        },
      });

      // Get brutes that don't have a BossTicket
      const brutesWithoutTicket = Array.from(bruteIds)
        .filter((bruteId) => !brutesWithTicket.find((brute) => brute.bruteId === bruteId));

      // Add 1x BossTicket to those brutes
      await prisma.bruteInventoryItem.createMany({
        data: brutesWithoutTicket.map((bruteId) => ({
          bruteId,
          type: InventoryItemType.bossTicket,
          count: 1,
        })),
      });

      // Update clan
      await prisma.clan.update({
        where: { id: clanId },
        data: {
          // Set new boss
          boss: randomItem(bosses).name,
          damageOnBoss: 0,
          // Increase clan limit
          limit: Math.min(CLAN_SIZE_LIMIT, clan.limit + 5),
          // Reset boss damages
          bossDamages: {
            deleteMany: {},
          },
        },
      });

      // Give gold to users
      const userIds = new Set(clan.brutes.map((brute) => brute.userId || ''));
      clan.bossDamages.forEach((damage) => {
        userIds.add(damage.brute.userId || '');
      });
      const goldGains = Math.floor(BOSS_GOLD_REWARD / userIds.size);

      await prisma.user.updateMany({
        where: { id: { in: Array.from(userIds) } },
        data: {
          gold: { increment: goldGains },
        },
      });

      // Add log
      await prisma.log.createMany({
        data: Array.from(bruteIds).map((bruteId) => ({
          type: LogType.bossDefeat,
          gold: goldGains,
          currentBruteId: bruteId,
        })),
      });

      result.boss = {
        xp: 0,
        gold: goldGains,
      };
    } else {
      // Update damage on boss + store it
      const initialBoss = fightDataInitialFighters.find((fighter) => fighter.type === 'boss');
      const finalBoss = fightData.fighters.find((fighter) => fighter.type === 'boss');
      if (!initialBoss || !finalBoss) {
        throw new Error('Boss not found');
      }
      if (!clanId) {
        throw new Error('Clan ID not found');
      }

      const damage = initialBoss.hp - finalBoss.hp;

      await prisma.clan.update({
        where: { id: clanId },
        data: {
          damageOnBoss: { increment: damage },
          bossDamages: {
            upsert: {
              where: {
                bruteId_clanId: {
                  bruteId: winner.type === 'brute' ? winner.id : loser.id,
                  clanId,
                },
              },
              update: { damage: { increment: damage } },
              create: {
                damage,
                bruteId: winner.type === 'brute' ? winner.id : loser.id,
              },
            },
          },
        },
      });
    }
  }

  // Add achievements from stats
  handleStats(fightData, stats, achievements, isTournamentFight, isTournamentFinal);

  // Update achievements
  if (achievementsActive) {
    await updateAchievements(prisma, achievements, isTournamentFight);
  }

  return result;
};

export default generateFight;
