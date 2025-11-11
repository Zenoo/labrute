import { Brute, PetName, SkillName } from '@labrute/prisma';
import { seedToRandom } from '../utils';
import { Pet } from './pets';
import { Weapon } from './weapons';
import { FightStat } from './skills';

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

const CHAOS_SCALE = 3;

const getSkillStatSeed = (skill: SkillName, stat: string, type: 'flat' | 'percent' = 'flat') => `skill:${skill}:${stat}:${type}`;
const getPetStatSeed = (pet: Pet, stat: string) => `pet:${pet.name}:${stat}`;
const getWeaponStatSeed = (weapon: Weapon, stat: string) => `weapon:${weapon.name}:${stat}`;

export const getScaledStat = ({
  chaos,
  skill,
  type = 'flat',
  pet,
  weapon,
  stat,
  value,
  precision = 0
}: {
  chaos: boolean,
  skill?: SkillName,
  type?: 'flat' | 'percent',
  pet?: Pet,
  weapon?: Weapon,
  stat: string,
  value: number,
  precision?: number,
}) => {
  if (!chaos) {
    return value;
  }

  if (value === 0) {
    return 0;
  }

  // Get min and max values
  let min = value < 0 ? value * CHAOS_SCALE : value / CHAOS_SCALE;
  const max = value < 0 ? value / CHAOS_SCALE : value * CHAOS_SCALE;

  // Prevent damage drop
  if (stat === FightStat.DAMAGE) {
    min = value;
  }

  // Get unique seed
  let seed = '';

  if (skill) {
    seed = getSkillStatSeed(skill, stat, type);
  } else if (pet) {
    seed = getPetStatSeed(pet, stat);
  } else if (weapon) {
    seed = getWeaponStatSeed(weapon, stat);
  } else {
    throw new Error('Either skill, pet or weapon must be provided for scaled stat');
  }

  // Generate a random number between min and max
  const randomNumber = min + (seedToRandom(seed) * (max - min));

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

    return getScaledStat({
      chaos,
      pet,
      stat,
      value: result,
      precision,
    });
  }

  // Other stats don't scale with brute stats
  if (!chaos) {
    return pet[stat];
  }

  return getScaledStat({
    chaos,
    pet,
    stat,
    value: pet[stat],
    precision,
  });
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

  return getScaledStat({
    chaos,
    weapon,
    stat,
    value: weapon[stat],
    precision,
  });
};
