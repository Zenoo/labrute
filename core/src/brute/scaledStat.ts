import { Brute, PetName, SkillName } from '@labrute/prisma';
import { randomGenerator } from '../utils';
import { FightStat } from './skills';
import { Pet } from './pets';
import { Weapon } from './weapons';

const scalingByPet = {
  [PetName.bear]: {
    strength: 0.4,
    agility: 0.1,
    speed: 0.1,
    hp: 0.4,
  },
  [PetName.panther]: {
    strength: 0.25,
    agility: 0.3,
    speed: 0.3,
    hp: 0.15,
  },
  [PetName.dog3]: {
    strength: 0.1,
    agility: 0.2,
    speed: 0.4,
    hp: 0.1,
  },
  [PetName.dog2]: {
    strength: 0.1,
    agility: 0.2,
    speed: 0.4,
    hp: 0.1,
  },
  [PetName.dog1]: {
    strength: 0.1,
    agility: 0.2,
    speed: 0.4,
    hp: 0.1,
  },
} as const;

type NumberKeysOf<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

export const CHAOS_SCALE = 5;

export const getSkillStatSeed = (skill: SkillName, stat: FightStat, type: 'flat' | 'percent' = 'flat') => `skill:${skill}:${stat}:${type}`;
export const getPetStatSeed = (pet: Pet, stat: string) => `pet:${pet.name}:${stat}`;
export const getWeaponStatSeed = (weapon: Weapon, stat: string) => `weapon:${weapon.name}:${stat}`;

export const getScaledStat = (
  chaos: boolean,
  seed: string,
  stat: number,
  precision = 0
) => {
  if (!chaos) {
    return stat;
  }

  const min = stat / CHAOS_SCALE;
  const max = stat * CHAOS_SCALE;

  const random = randomGenerator(seed);

  // Generate a random number between min and max
  const randomNumber = min + (random.next() * (max - min));

  if (precision === 0) {
    return Math.ceil(randomNumber);
  }

  return parseFloat(randomNumber.toFixed(precision));
};

const petStatToBruteStat = {
  strength: 'strengthValue',
  agility: 'agilityValue',
  speed: 'speedValue',
  hp: 'hp',
} as const;

export const getPetScaledStat = (
  chaos: boolean,
  brute: Pick<Brute, 'hp' | 'strengthValue' | 'agilityValue' | 'speedValue'>,
  pet: Pet,
  stat: NumberKeysOf<Pet>,
  precision = 0
) => {
  // Some stats scale with brute stats
  if (stat === 'strength' || stat === 'agility' || stat === 'speed' || stat === 'hp') {
    const base = pet[stat];
    const scaling = scalingByPet[pet.name][stat];
    const bruteStat = brute[petStatToBruteStat[stat]];
    const result = base + Math.ceil(scaling * bruteStat);

    if (!chaos) {
      return result;
    }

    return getScaledStat(
      chaos,
      getPetStatSeed(pet, stat),
      result,
    );
  }

  // Other stats don't scale with brute stats
  if (!chaos) {
    return pet[stat];
  }

  return getScaledStat(
    chaos,
    getPetStatSeed(pet, stat),
    pet[stat],
    precision
  );
};

export const getWeaponScaledStat = (
  chaos: boolean,
  weapon: Weapon,
  stat: NumberKeysOf<Weapon>,
  precision = 0
) => {
  if (!chaos) {
    return weapon[stat];
  }

  return getScaledStat(
    chaos,
    getWeaponStatSeed(weapon, stat),
    weapon[stat],
    precision
  );
};
