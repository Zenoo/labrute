import {
  createRandomBruteStats, FIGHTS_PER_DAY, getBruteHP, getBruteToSave, getLevelUpChoices,
  getRandomBody, getRandomColors, LevelUpChoice,
} from '@labrute/core';
import {
  Brute, DestinyChoiceSide, DestinyChoiceType, Gender, Prisma,
} from '@labrute/prisma';
import { updateBruteData } from '../utils/brute/updateBruteData.js';

/** Keep the actual starting stats and both branches so resets and destiny exploration work. */
export const createPlayableBrute = (
  name: string, level: number, gender: Gender = Math.random() < 0.5 ? 'male' : 'female',
  perk?: { type: DestinyChoiceType; name: string },
  retained?: Pick<Brute, 'ascendedSkills' | 'ascendedWeapons' | 'ascendedPets'>,
): Prisma.BruteCreateInput => {
  const startingStats = {
    hp: 12,
    strength: 3,
    agility: 3,
    speed: 3,
  };
  const firstPerk = perk?.type === 'pet' && ['dog2', 'dog3'].includes(perk.name)
    ? {
      type: perk.type,
      name: 'dog1',
    } : perk;
  let data = {
    ...getBruteToSave(createRandomBruteStats(startingStats, firstPerk?.type, firstPerk?.name)),
    id: '',
    eventId: null as string | null,
    name,
    gender,
    body: getRandomBody(gender),
    colors: getRandomColors(gender),
    fightsLeft: FIGHTS_PER_DAY,
    lastFight: null as Date | null,
  };
  const path: DestinyChoiceSide[] = [];
  const choices: LevelUpChoice[] = [];
  // The level-one perk must also be present for destiny resets.
  let initial: LevelUpChoice;

  if (data.skills[0]) {
    initial = {
      type: 'skill',
      skill: data.skills[0],
    };
  } else if (data.weapons[0]) {
    initial = {
      type: 'weapon',
      weapon: data.weapons[0],
    };
  } else {
    initial = {
      type: 'pet',
      pet: data.pets[0],
    };
  }

  choices.push({
    ...initial,
    path: [],
  });
  const retainedChoices: LevelUpChoice[] = [
    ...(retained?.ascendedSkills ?? []).map((skill) => ({
      type: 'skill' as const,
      skill,
    })),
    ...(retained?.ascendedWeapons ?? []).map((weapon) => ({
      type: 'weapon' as const,
      weapon,
    })),
    ...(retained?.ascendedPets ?? []).map((pet) => ({
      type: 'pet' as const,
      pet,
    })),
  ];

  for (const choice of retainedChoices) {
    // Retained perks affect stats and future offers, without consuming a level or destiny branch.
    data = {
      ...data,
      ...updateBruteData(data, choice),
      level: 1,
    };
    data.hpValue = getBruteHP(data);
  }

  for (let next = 2; next <= level + 1; next++) {
    const offered = getLevelUpChoices(data);

    if (perk && next <= level) {
      const perkName = perk.type === 'pet' && perk.name === 'dog3' && next === 2 ? 'dog2' : perk.name;
      offered[0] = {
        type: perk.type,
        [perk.type]: perkName,
      };
    }

    choices.push(
      {
        ...offered[0],
        path: [...path, 'LEFT'],
      },
      {
        ...offered[1],
        path: [...path, 'RIGHT'],
      },
    );

    if (next <= level) {
      const side = (perk || Math.random() < 0.5) ? 0 : 1;
      data = {
        ...data,
        ...updateBruteData(data, offered[side]),
      };
      path.push(side === 0 ? 'LEFT' : 'RIGHT');
    }
  }

  const {
    id: _id, eventId: _eventId, ...brute
  } = data;

  return {
    ...brute,
    destinyPath: path,
    startingStats: { create: startingStats },
    destinyChoices: { create: choices },
  };
};
