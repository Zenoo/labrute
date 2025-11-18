import { FightModifier, SkillName } from '@labrute/prisma';
import { Modifiers } from '../types';
import { Pet, petList } from './pets';
import { FightStat, skillList } from './skills';
import { Weapon, weaponList } from './weapons';
import dayjs from 'dayjs';
import { seedToRandom } from '../utils';

export const CHAOS_SEEDS = new Map<string, number>();

export const getSkillStatSeed = (skill: SkillName, stat: string, type: 'flat' | 'percent' = 'flat') => `skill:${skill}:${stat}:${type}`;
export const getPetStatSeed = (pet: Pet, stat: string) => `pet:${pet.name}:${stat}`;
export const getWeaponStatSeed = (weapon: Weapon, stat: string) => `weapon:${weapon.name}:${stat}`;

export const refreshChaosSeeds = (modifiers: Modifiers) => {
  CHAOS_SEEDS.clear();

  if (!modifiers[FightModifier.chaos]) {
    return;
  }

  // Pre-compute all possible seeds
  const today = dayjs.utc().format('YYYY-MM-DD');

  // Pre-generate skill seeds
  const STATS = Object.values(FightStat);
  const TYPES = ['flat', 'percent'] as const;

  for (const skill of skillList) {
    for (const stat of STATS) {
      for (const type of TYPES) {
        const seed = getSkillStatSeed(skill.name, stat, type);
        CHAOS_SEEDS.set(seed, seedToRandom(`${today}:${seed}`, false));
      }
    }
  }

  // Pre-generate pet seeds
  for (const pet of petList) {
    for (const stat of STATS) {
      const seed = getPetStatSeed(pet, stat);
      CHAOS_SEEDS.set(seed, seedToRandom(`${today}:${seed}`, false));
    }
  }

  // Pre-generate weapon seeds
  for (const weapon of weaponList) {
    for (const stat of STATS) {
      const seed = getWeaponStatSeed(weapon, stat);
      CHAOS_SEEDS.set(seed, seedToRandom(`${today}:${seed}`, false));
    }
  }
};
