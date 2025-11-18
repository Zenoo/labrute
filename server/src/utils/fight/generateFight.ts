/* eslint-disable no-param-reassign */
import {
  AchievementsStore,
  BOSS_GOLD_REWARD,
  Boss,
  BruteRanking,
  CLAN_SIZE_LIMIT,
  FightStep,
  Fighter, ForbiddenError, Modifiers, Skill, SkillByName,
  SkillId,
  StepType, Tiered, Weapon, WeaponByName,
  bossBackground, bosses,
  fightBackgrounds,
  randomItem,
  tournamentBackground,
  weightedRandom,
} from '@labrute/core';
import {
  Brute, FightModifier, Gender, InventoryItemType, LogType, Prisma, PrismaClient,
  SkillName,
  UserLogType,
  WeaponName,
} from '@labrute/prisma';
import { createManyUserLogs } from '../createUserLog.js';
import { applySpy } from './applySpy.js';
import {
  Stats,
  checkDeaths, fighterArrives,
  orderFighters, playFighterTurn,
  saboteur,
} from './fightMethods.js';
import { getFighters } from './getFighters.js';
import { handleStats } from './handleStats.js';
import { updateAchievements } from './updateAchievements.js';

export interface DetailedFighter {
  // Metadata
  id: string;
  eventId?: string;
  index: number;
  team: 'L' | 'R';
  name: string;
  gender?: Gender;
  body?: string;
  colors?: string;
  rank: BruteRanking;
  level: number;
  type: 'brute' | 'pet' | 'boss';
  // Follower/Backup variables
  master?: string;
  arrivesAtInitiative?: number;
  leavesAtInitiative?: number;
  // Pet variables
  eaten?: boolean;
  // Raw stats
  maxHp: number;
  hp: number;
  strength: number;
  agility: number;
  speed: number;
  criticalChance: number;
  criticalDamage: number;
  regeneration: number;
  // Initiative
  initiative: number; // Lower attacks next
  hitSpeed: number;
  tempo: number; // Lower is better
  // hit stats
  baseDamage: number,
  counter: number,
  reversal: number,
  combo: number,
  deflect: number,
  block: number,
  accuracy: number,
  armor: number,
  disarm: number,
  evasion: number,
  reach: number,
  // Passives
  // Destroys one enemy's weapon per hit
  sabotage: boolean;
  // tempo -25% for heavy weapons
  bodybuilder: boolean;
  // Survive with 1 HP on first death
  survival: boolean;
  // First hit of the fight is evaded
  balletShoes: boolean;
  // 70% chance of re-attacking on misses (evasion or block)
  determination: boolean;
  retryAttack: boolean;
  // 30% chance of disarming when being hit
  ironHead: boolean;
  // Max 20% max HP per hit
  resistant: boolean;
  // Regen boost at 50% HP
  fastMetabolism: number | null;
  // Available skills
  skills: Partial<Record<SkillName, Tiered<Skill>>>;
  // Available weapons
  weapons: Map<WeaponName, Tiered<Weapon>>;
  // Shield state
  shield: boolean;
  // Active skills
  activeSkills: Tiered<Skill>[];
  // Active weapon
  activeWeapon: Tiered<Weapon> | null;
  keepWeaponChance: number;
  // Pre fight sabotage
  saboteur: boolean;
  sabotagedWeapon: Weapon | null;
  // Status effects
  poisonedBy: number | null; // Fighter index
  trapped: boolean;
  // Reduce some weapons damage by 25%
  damagedWeapons: WeaponName[],
  // Keep track of consecutive hits for stun status
  hitBy: Record<number, number>,
  stunned?: boolean,
  hypnotized?: boolean,
  // Bare hand hit (for the fight modifier)
  bareHandHit?: boolean;
  // Damage immunity
  immune?: boolean;
}

export interface DetailedFight {
  modifiers: Modifiers;
  fighters: DetailedFighter[];
  initialFighters: DetailedFighter[];
  steps: FightStep[];
  initiative: number;
  winner: string | null;
  loser: string | null;
  overtime: boolean;
}

export type GenerateFightResult = {
  data: Prisma.FightCreateInput;
  boss?: {
    defeated: boolean;
    xp: number;
    gold: number;
  }
};

type Team = {
  brutes?: Brute[];
  bosses?: (Boss & {
    startHP: number;
  })[];
};

type GenerateFightParams = {
  prisma: PrismaClient;
  team1: Team;
  team2: Team;
  modifiers: Modifiers;
  backups: boolean;
  achievements: boolean;
  tournament?: 'fight' | 'finals';
  clanId?: string;
  clanWar?: boolean;
};

export const generateFight = async ({
  prisma,
  team1,
  team2,
  modifiers,
  backups,
  achievements,
  tournament,
  clanId,
  clanWar,
}: GenerateFightParams): Promise<GenerateFightResult> => {
  if (team1.brutes?.some((brute) => team2.brutes?.some((b) => b.id === brute.id))) {
    throw new ForbiddenError('Attempted to created a fight between the same brutes');
  }

  const chaos = modifiers[FightModifier.chaos] === true;

  const background = (team1.bosses?.length || team2.bosses?.length)
    ? bossBackground
    : tournament
      ? tournamentBackground
      : weightedRandom(fightBackgrounds);

  // Achievements
  const achievementsStore: AchievementsStore = {};
  // Stats
  const stats: Stats = {};

  team1.brutes?.concat(team2.brutes ?? []).forEach((brute) => {
    achievementsStore[brute.id] = {
      userId: brute.userId,
      eventId: brute.eventId,
      achievements: {},
    };

    stats[brute.id] = {
      userId: brute.userId,
    };
  });

  // Get brute backups
  const team1Backups: Brute[] = [];
  const team2Backups: Brute[] = [];
  if (backups) {
    const brute1 = team1.brutes?.[0];
    const brute2 = team2.brutes?.[0];

    if (!brute1) {
      throw new Error('No brute 1');
    }

    if (brute1.skills.includes(SkillName.backup)) {
      const brute1Backups = await prisma.brute.findMany({
        where: {
          deletedAt: null,
          userId: brute1.userId,
          id: { not: brute1.id },
          level: { lt: brute1.level },
        },
      });

      if (brute1Backups.length) {
        team1Backups.push(randomItem(brute1Backups));
      }
    }

    if (brute2 && brute2.skills.includes(SkillName.backup)) {
      const brute2Backups = await prisma.brute.findMany({
        where: {
          deletedAt: null,
          userId: brute2.userId,
          id: { not: brute2.id },
          level: { lt: brute2.level },
        },
      });

      if (brute2Backups.length) {
        team2Backups.push(randomItem(brute2Backups));
      }
    }
  }

  if (team1.bosses?.length || team2.bosses?.length) {
    // Handle bosses coming as multiple instances
    team1.bosses?.forEach((boss) => {
      team1.bosses?.push(...Array(boss.count - 1).fill({ ...boss }) as typeof boss[]);
    });
    team2.bosses?.forEach((boss) => {
      team2.bosses?.push(...Array(boss.count - 1).fill({ ...boss }) as typeof boss[]);
    });
  }

  // Global fight data
  const fightDataFighters = getFighters({
    team1: { brutes: team1.brutes ?? [], backups: team1Backups, bosses: team1.bosses ?? [] },
    team2: { brutes: team2.brutes ?? [], backups: team2Backups, bosses: team2.bosses ?? [] },
    modifiers,
    clanFight: clanWar,
  });

  const fightData: DetailedFight = {
    modifiers,
    fighters: fightDataFighters,
    initialFighters: JSON.parse(JSON.stringify(fightDataFighters)) as DetailedFighter[],
    steps: [],
    initiative: 0,
    winner: null,
    loser: null,
    overtime: false,
  };

  // Add arrive step for all fighters
  fightData.fighters.forEach((fighter) => {
    // Ignore backups
    if (fighter.type === 'brute' && fighter.master) {
      return;
    }

    fighterArrives(fightData, fighter);
  });

  // Add spy steps (only 1v1)
  if (team1.brutes?.length === 1 && team2.brutes?.length === 1) {
    orderFighters(fightData);

    const mainFighters = fightData.fighters.filter((f) => f.type === 'brute' && !f.master);

    mainFighters.forEach((brute) => {
      const opponent = mainFighters.find((f) => f.id !== brute.id);

      if (!opponent) {
        throw new Error('Opponent not found');
      }
      applySpy(fightData, brute, opponent);
    });
  }

  // Pre-fight saboteur
  saboteur(fightData, achievementsStore);

  let turn = 0;

  // Fight loop
  while (!fightData.loser && turn < 2000) {
    // Order fighters by initiative (random if equal)
    orderFighters(fightData);

    const firstFighter = fightData.fighters[0];
    if (!firstFighter) {
      // No fighters left
      break;
    }

    // Set current initiative to first fighter
    fightData.initiative = firstFighter.initiative;

    // Set overtime
    if (turn > 1000) {
      fightData.overtime = true;
    }

    // Play fighter turn
    playFighterTurn(chaos, fightData, stats, achievementsStore);

    // Check deaths
    checkDeaths(fightData, stats);

    turn += 1;
  }

  if (!fightData.loser) {
    throw new Error('Fight not finished');
  }

  // Get loser
  const loser = fightData.fighters.find((fighter) => fighter.id === fightData.loser);

  if (!loser) {
    throw new Error('No loser found');
  }

  // Get winner
  const winner = loser.team === 'L'
    ? fightData.fighters.find((fighter) => fighter.team === 'R' && (fighter.type === 'boss' || fighter.id === team2.brutes?.[0]?.id))
    : fightData.fighters.find((fighter) => fighter.team === 'L' && (fighter.type === 'boss' || fighter.id === team1.brutes?.[0]?.id));

  if (!winner) {
    throw new Error('No winner found');
  }

  // Set fight winner and loser
  fightData.winner = winner.id;

  // Add end step
  fightData.steps.push({
    a: StepType.End,
    w: winner.index,
    l: loser.index,
  });

  // Reduce the size of the fighters data
  const fighters: Fighter[] = fightData.initialFighters.map((fighter) => {
    const object: Fighter = {
      id: fighter.id,
      index: fighter.index,
      team: fighter.team,
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
      weapons: Object.keys(fighter.weapons).map((weapon) => WeaponByName[weapon as WeaponName]),
      skills: Object.values(fighter.skills).reduce((acc, skill) => {
        acc = acc.concat(Array(skill.tier).fill(SkillByName[skill.name]));
        return acc;
      }, [] as SkillId[]),
      shield: fighter.shield,
    };

    if (fighter.eventId) {
      object.eventId = fighter.eventId;
    }

    return object;
  });

  const brute1 = team1.brutes?.[0];
  const brute2 = team2.brutes?.[0];

  if (!brute1) {
    throw new Error('No brute 1');
  }

  const result: GenerateFightResult = {
    data: {
      brute1: { connect: { id: brute1.id } },
      winnerId: winner.id,
      loserId: loser.id,
      winner: winner.name,
      loser: loser.name,
      steps: JSON.stringify(fightData.steps),
      fighters: JSON.stringify(fighters),
      background: background.name,
    },
  };

  if (brute2) {
    result.data.brute2 = { connect: { id: brute2.id } };
  }

  if (team1.bosses?.length || team2.bosses?.length) {
    // Update clan limit and boss if boss slain
    const bossFighter = fightData.fighters.find((fighter) => fighter.type === 'boss');
    const anyBossStillAlive = fightData.fighters
      .some((fighter) => fighter.type === 'boss' && fighter.hp > 0);
    if (bossFighter && !anyBossStillAlive) {
      const boss = bosses.find((b) => b.name === bossFighter.name);
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

      if (!boss) {
        throw new Error('Boss not found');
      }
      if (!clan) {
        throw new Error('Clan not found');
      }

      // Combine all bruteIds
      const bruteIds = new Set(clan.brutes.map((brute) => brute.id));
      clan.bossDamages.forEach((damage) => {
        if (damage.brute) {
          bruteIds.add(damage.brute.id);
        }
      });

      // Get brutes that already have a BossTicket
      const brutesWithTicket = await prisma.inventoryItem.findMany({
        where: {
          bruteId: { in: Array.from(bruteIds) },
          type: InventoryItemType.bossTicket,
        },
        select: {
          bruteId: true,
        },
      });

      // Add 1x BossTicket to those brutes
      await prisma.inventoryItem.updateMany({
        where: {
          bruteId: { in: brutesWithTicket.map((brute) => brute.bruteId ?? '') },
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
      await prisma.inventoryItem.createMany({
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
          boss: weightedRandom(bosses).name,
          damageOnBoss: 0,
          // Increase clan limit
          limit: Math.min(CLAN_SIZE_LIMIT, clan.limit + 5),
          // +1000 points
          points: { increment: 1000 },
          // Reset boss damages
          bossDamages: {
            deleteMany: {},
          },
        },
      });

      // Give gold to users
      const userIds = new Set(clan.brutes.map((brute) => brute.userId || ''));
      clan.bossDamages.forEach((damage) => {
        userIds.add(damage.brute?.userId || '');
      });

      // Filter out empty userIds
      userIds.delete('');

      const goldGains = Math.floor((boss.reward * BOSS_GOLD_REWARD) / userIds.size);

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

      createManyUserLogs(prisma, Array.from(userIds).map((userId) => ({
        type: UserLogType.GOLD_WIN,
        userId,
        gold: goldGains,
      })));

      result.boss = {
        defeated: true,
        xp: 0,
        gold: goldGains,
      };
    } else {
      result.boss = {
        defeated: false,
        xp: 0,
        gold: 0,
      };

      // Update damage on boss + store it
      const initialBossesHp = fightData.initialFighters
        .filter((fighter) => fighter.type === 'boss')
        .reduce((sum, boss) => (boss.hp > 0 ? sum + boss.hp : sum), 0);
      const finalBossesHp = fightData.fighters
        .filter((fighter) => fighter.type === 'boss')
        .reduce((sum, boss) => (boss.hp > 0 ? sum + boss.hp : sum), 0);

      if (!clanId) {
        throw new Error('Clan ID not found');
      }

      const damage = initialBossesHp - finalBossesHp;

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
  handleStats(fightData, stats, achievementsStore, tournament);

  // Update achievements
  if (achievements) {
    await updateAchievements(prisma, achievementsStore, !!tournament);
  }
  return result;
};
