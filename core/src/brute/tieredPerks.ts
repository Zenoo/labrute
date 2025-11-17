import { Brute, FightModifier, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { getTempSkill } from './getTempSkill';
import { getTempWeapon } from './getTempWeapon';

export type Tiered<T> = T & {
  tier: number;
};

export const getTieredSkills = (
  brute: Pick<Brute, 'id' | 'skills'>,
  modifiers?: FightModifier[],
  filter?: (skill: SkillName) => boolean,
) => {
  const tieredSkills: Partial<Record<SkillName, number>> = {};

  for (const skill of brute.skills) {
    if (!filter || filter(skill)) {
      tieredSkills[skill] = tieredSkills[skill] ? tieredSkills[skill] + 1 : 1;
    }
  }

  if (!modifiers) {
    return tieredSkills;
  }

  const randomSkill = getTempSkill(brute, modifiers);

  if (randomSkill && (!filter || filter(randomSkill))) {
    tieredSkills[randomSkill] = tieredSkills[randomSkill]
      ? tieredSkills[randomSkill] + 1
      : 1;
  }

  return tieredSkills;
};

export const getTieredWeapons = (
  brute: Pick<Brute, 'id' | 'weapons'>,
  modifiers?: FightModifier[]
) => {
  const tieredWeapons: Partial<Record<WeaponName, number>> = {};

  for (const weapon of brute.weapons) {
    tieredWeapons[weapon] = tieredWeapons[weapon] ? tieredWeapons[weapon] + 1 : 1;
  }

  if (!modifiers) {
    return tieredWeapons;
  }

  const randomWeapon = getTempWeapon(brute, modifiers);

  if (randomWeapon) {
    tieredWeapons[randomWeapon] = tieredWeapons[randomWeapon]
      ? tieredWeapons[randomWeapon] + 1
      : 1;
  }

  return tieredWeapons;
};

export const getTieredPets = (
  brute: Pick<Brute, 'id' | 'pets'>,
) => {
  const tieredPets: Partial<Record<PetName, number>> = {};

  for (const pet of brute.pets) {
    tieredPets[pet] = tieredPets[pet] ? tieredPets[pet] + 1 : 1;
  }

  return tieredPets;
};
