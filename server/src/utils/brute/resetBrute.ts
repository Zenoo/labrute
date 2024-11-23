import {
  ARENA_OPPONENTS_MAX_GAP,
  HookBrute,
  RESET_PRICE,
  applySkillModifiers,
  createRandomBruteStats,
  getMaxFightsPerDay,
  getRandomStartingStats,
  getTotalXP,
  pets,
  randomItem,
} from '@labrute/core';
import {
  Brute,
  DestinyChoiceType,
  PetName,
  PrismaClient, SkillName, TournamentType,
  User,
  WeaponName,
} from '@labrute/prisma';
import moment from 'moment';
import ServerState from '../ServerState.js';
import translate from '../translate.js';
import checkLevelUpAchievements from './checkLevelUpAchievements.js';
import getOpponents from './getOpponents.js';
import { removeChoiceFromDestiny } from './removeChoiceFromDestiny.js';

type Props = {
  prisma: PrismaClient,
  user?: Pick<User, 'id' | 'lang'>
  brute: Pick<Brute, 'id' | 'destinyPath' | 'ranking' | 'level' | 'eventId' | 'xp' | 'ascensions' | 'ascendedSkills' | 'ascendedWeapons' | 'ascendedPets'>,
  free: boolean,
  rankUp?: boolean,
  ascended?: {
    weapon?: WeaponName,
    skill?: SkillName,
    pet?: PetName
  }
};

export const resetBrute = async ({
  prisma,
  user,
  brute,
  free,
  rankUp,
  ascended,
}: Props) => {
  // Get first bonus
  const firstBonus = await prisma.destinyChoice.findFirst({
    where: {
      bruteId: brute.id,
      path: { equals: [] },
    },
  });

  if (!firstBonus) {
    throw new Error(translate('noFirstBonus', user));
  }

  // Remove gold from user
  if (user && !free) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        gold: { decrement: RESET_PRICE },
      },
      select: { id: true },
    });
  }

  // Get base stats
  let baseStats = await prisma.bruteStartingStats.findFirst({
    where: { bruteId: brute.id },
    omit: { id: true, bruteId: true },
  });

  if (!baseStats) {
    const newBaseStats = getRandomStartingStats();
    baseStats = newBaseStats;

    // Store starting stats
    await prisma.bruteStartingStats.create({
      data: {
        bruteId: brute.id,
        endurance: newBaseStats.endurance,
        strength: newBaseStats.strength,
        agility: newBaseStats.agility,
        speed: newBaseStats.speed,
      },
    });
  }

  // Random stats
  let stats = createRandomBruteStats(
    baseStats,
    firstBonus.type,
    firstBonus.type === DestinyChoiceType.pet
      ? firstBonus.pet
      : firstBonus.type === DestinyChoiceType.weapon
        ? firstBonus.weapon
        : firstBonus.skill,
  );

  // Get current modifiers
  const modifiers = await ServerState.getModifiers(prisma);

  const { weapon, skill, pet } = ascended || {};
  const ascendedWeapons = brute.ascendedWeapons || [];
  const ascendedSkills = brute.ascendedSkills || [];
  const ascendedPets = brute.ascendedPets || [];

  // Add new ascent to the correspond ascended list
  let { ascensions } = brute;
  if (ascended !== undefined) {
    if (weapon && Object.values(WeaponName).includes(weapon as WeaponName)) {
      ascendedWeapons.push(weapon as WeaponName);
      ascensions++;
    }
    if (skill && Object.values(SkillName).includes(skill as SkillName)) {
      ascendedSkills.push(skill as SkillName);
      ascensions++;
    }
    if (pet && Object.values(PetName).includes(pet as PetName)) {
      ascendedPets.push(pet as PetName);
      ascensions++;
    }

    // Replace the destiny choice in destiny path with random stats
    await removeChoiceFromDestiny(prisma, brute, ascended);
  }

  // Add ascended perks
  stats.weapons = stats.weapons.concat(brute.ascendedWeapons);
  stats.skills = stats.skills.concat(brute.ascendedSkills);
  stats.pets = stats.pets.concat(brute.ascendedPets);

  // Take into account the endurance malus from ascended pets
  for (const petName of brute.ascendedPets) {
    const petStats = pets.find((p) => p.name === petName);

    if (!petStats) {
      throw new Error('Pet not found');
    }

    stats.enduranceStat -= petStats.enduranceMalus;
    stats.enduranceValue = Math.floor(stats.enduranceStat * stats.enduranceModifier);
  }

  // Apply ascended skill modifiers
  for (const skillName of brute.ascendedSkills) {
    stats = applySkillModifiers(stats, skillName);
  }

  // Update the brute
  const updatedBrute: HookBrute = await prisma.brute.update({
    where: { id: brute.id },
    data: {
      ...stats,
      // Store previous destiny
      previousDestinyPath: brute.destinyPath,
      // Reset destiny
      destinyPath: [],
      // Reset fights left (not for event brutes)
      fightsLeft: brute.eventId ? undefined : getMaxFightsPerDay({
        ...stats,
        id: brute.id,
        eventId: null,
      }, modifiers),
      // Ranking
      ranking: rankUp ? brute.ranking - 1 : brute.ranking,
      ascensions,
      ascendedWeapons,
      ascendedSkills,
      ascendedPets,
      canRankUpSince: (rankUp || ascended) ? null : undefined,
      tournamentWins: (rankUp || ascended) ? 0 : undefined,
      // Restore XP for event brutes
      xp: brute.eventId ? getTotalXP(brute) : stats.xp,
      // Track resets
      resets: {
        increment: 1,
      },
    },
    include: {
      master: {
        select: {
          id: true,
          name: true,
        },
      },
      clan: {
        select: {
          id: true,
          name: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          lastSeen: true,
        },
      },
      tournaments: {
        where: {
          type: TournamentType.DAILY,
          date: moment.utc().startOf('day').toDate(),
        },
      },
      inventory: true,
    },
  });

  // Update achievements for the first bonus
  await checkLevelUpAchievements(prisma, updatedBrute, firstBonus);

  // Get new opponents
  const opponents = await getOpponents(prisma, updatedBrute);

  // Save opponents
  await prisma.brute.update({
    where: {
      id: updatedBrute.id,
    },
    data: {
      opponents: {
        set: opponents.map((o) => ({
          id: o.id,
        })),
      },
      // Update opponentsGeneratedAt
      opponentsGeneratedAt: new Date(),
    },
    select: { id: true },
  });

  // Get brutes that have this brute as opponent
  const opponentOf = await prisma.brute.findMany({
    where: {
      opponents: {
        some: {
          id: updatedBrute.id,
        },
      },
    },
    select: {
      id: true,
      name: true,
      level: true,
      opponents: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // Replace this brute in their opponents
  for (const currentBrute of opponentOf) {
    // Get same level random opponent
    const bruteSearch = {
      name: {
        notIn: [
          currentBrute.name,
          ...currentBrute.opponents.map((o) => o.name),
        ],
      },
      level: currentBrute.level,
      deletedAt: null,
    };
    const bruteIds = await prisma.brute.findMany({
      where: bruteSearch,
      select: { id: true },
    }).then((brutes) => brutes.map((b) => b.id));

    let newOpponentId: string | null = null;

    if (bruteIds.length === 0) {
      // Search lower levels if no same level brutes
      const lowerBruteIds = await prisma.brute.findMany({
        where: {
          ...bruteSearch,
          level: {
            lt: +brute.level,
            gte: +brute.level - ARENA_OPPONENTS_MAX_GAP,
          },
        },
        select: { id: true },
      }).then((brutes) => brutes.map((b) => b.id));

      if (lowerBruteIds.length > 0) {
        // Select a random lower level opponent
        newOpponentId = randomItem(lowerBruteIds);
      }
    } else {
      // Select a new random opponent
      newOpponentId = randomItem(bruteIds);
    }

    if (newOpponentId) {
      // Replace the brute with the new opponent
      await prisma.brute.update({
        where: { id: currentBrute.id },
        data: {
          opponents: {
            set: [
              ...currentBrute.opponents
                .filter((o) => o.id !== brute?.id)
                .map((o) => ({ id: o.id })),
              { id: newOpponentId },
            ],
          },
        },
        select: { id: true },
      });
    } else {
      // Remove the brute from the opponents if no opponent found
      await prisma.brute.update({
        where: { id: currentBrute.id },
        data: {
          opponents: {
            set: currentBrute.opponents
              .filter((o) => o.id !== brute?.id)
              .map((o) => ({ id: o.id })),
          },
        },
        select: { id: true },
      });
    }
  }

  return updatedBrute;
};
