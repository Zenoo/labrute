import { Brute, FightModifier, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { CalculatedBrute, Modifiers, TieredPerks } from '../types';
import { getTempWeapon } from './getTempWeapon';
import { getTempSkill } from './getTempSkill';
import { entries } from '../utils';
import { FightStat, SkillModifiers } from './skills';
import { getScaledStat } from './scaledStat';
import { getHP } from './getHP';
import { applySkillModifiers } from './applySkillModifiers';

export const getTieredSkills = (brute: Pick<Brute, 'id' | 'skills'>, modifiers: Modifiers) => {
  const tieredSkills: TieredPerks['skills'] = {};

  for (const skill of brute.skills) {
    tieredSkills[skill] = tieredSkills[skill]
      ? tieredSkills[skill] + 1
      : 1;
  }

  const randomSkill = getTempSkill(brute, modifiers);

  if (randomSkill) {
    tieredSkills[randomSkill] = tieredSkills[randomSkill]
      ? tieredSkills[randomSkill] + 1
      : 1;
  }

  return tieredSkills;
};

export const getTieredWeapons = (brute: Pick<Brute, 'id' | 'weapons'>, modifiers: Modifiers) => {
  const tieredWeapons: TieredPerks['weapons'] = {};

  for (const weapon of brute.weapons) {
    tieredWeapons[weapon] = tieredWeapons[weapon]
      ? tieredWeapons[weapon] + 1
      : 1;
  }

  const randomWeapon = getTempWeapon(brute, modifiers);

  if (randomWeapon) {
    tieredWeapons[randomWeapon] = tieredWeapons[randomWeapon]
      ? tieredWeapons[randomWeapon] + 1
      : 1;
  }

  return tieredWeapons;
};

export const getTieredPets = (brute: Pick<Brute, 'pets'>) => {
  const tieredPets: TieredPerks['pets'] = {};

  for (const pet of brute.pets) {
    tieredPets[pet] = tieredPets[pet]
      ? tieredPets[pet] + 1
      : 1;
  }

  return tieredPets;
};

/**
 * Get the calculated brute with temporary skills/weapons/pets applied
 * It includes all the recalculated stats
 * There is no need to do any recalculation after using this function
 */
export const getCalculatedBrute = <T extends Pick<Brute, 'id' | 'weapons' | 'skills' | 'pets' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityStat' | 'agilityModifier' | 'agilityValue' | 'speedStat' | 'speedModifier' | 'speedValue' | 'level' | 'hp'>>(
  brute: T,
  modifiers: Modifiers
) => {
  const calculatedBrute: Omit<T, 'weapons' | 'skills' | 'pets'> & TieredPerks = {
    ...brute,
    weapons: {},
    skills: {},
    pets: {},
  };

  // Weapons
  for (const weapon of brute.weapons) {
    calculatedBrute.weapons[weapon] = calculatedBrute.weapons[weapon]
      ? calculatedBrute.weapons[weapon] + 1
      : 1;
  }

  const randomWeapon = getTempWeapon(brute, modifiers);

  if (randomWeapon) {
    calculatedBrute.weapons[randomWeapon] = calculatedBrute.weapons[randomWeapon]
      ? calculatedBrute.weapons[randomWeapon] + 1
      : 1;
    calculatedBrute.randomWeapon = randomWeapon;
  }

  // Skills
  for (const skill of brute.skills) {
    calculatedBrute.skills[skill] = calculatedBrute.skills[skill]
      ? calculatedBrute.skills[skill] + 1
      : 1;
  }

  const randomSkill = getTempSkill(brute, modifiers);

  if (randomSkill) {
    calculatedBrute.skills[randomSkill] = calculatedBrute.skills[randomSkill]
      ? calculatedBrute.skills[randomSkill] + 1
      : 1;
    calculatedBrute.randomSkill = randomSkill;

    applySkillModifiers(calculatedBrute, randomSkill);
  }

  // Pets
  for (const pet of brute.pets) {
    calculatedBrute.pets[pet] = calculatedBrute.pets[pet]
      ? calculatedBrute.pets[pet] + 1
      : 1;
  }

  const skillsList = modifiers[FightModifier.chaos] ? entries(calculatedBrute.skills) : [];

  // HP
  if (modifiers[FightModifier.chaos]) {
    for (const [skillName, tier] of skillsList) {
      const modifier = SkillModifiers[skillName].endurance;

      if (!modifier) {
        continue;
      }

      // Flat modifier
      if (modifier?.flat) {
        calculatedBrute.enduranceStat -= modifier.flat[tier - 1] ?? 0;
        calculatedBrute.enduranceStat += getScaledStat({
          chaos: true,
          skill: skillName,
          type: 'flat',
          stat: 'endurance',
          value: modifier.flat[tier - 1] ?? 0,
        });
      }

      // Percent modifier
      if (modifier?.percent) {
        calculatedBrute.enduranceModifier /= 1 + (modifier.percent[tier - 1] ?? 0);
        calculatedBrute.enduranceModifier *= 1 + getScaledStat({
          chaos: true,
          skill: skillName,
          type: 'percent',
          stat: 'endurance',
          value: modifier.percent[tier - 1] ?? 0,
          precision: 2,
        });
      }
    }

    calculatedBrute.enduranceValue = Math.floor(
      calculatedBrute.enduranceStat * calculatedBrute.enduranceModifier,
    );

    calculatedBrute.hp = getHP(
      calculatedBrute.level,
      calculatedBrute.enduranceValue,
    );
  }

  // Strength, Agility, Speed
  for (const stat of [FightStat.STRENGTH, FightStat.AGILITY, FightStat.SPEED] as const) {
    if (modifiers[FightModifier.chaos]) {
      for (const [skillName, tier] of skillsList) {
        const modifier = SkillModifiers[skillName][stat];

        if (!modifier) {
          continue;
        }

        // Flat modifier
        if (modifier?.flat) {
          calculatedBrute[`${stat}Stat`] -= modifier.flat[tier - 1] ?? 0;
          calculatedBrute[`${stat}Stat`] += getScaledStat({
            chaos: true,
            skill: skillName,
            type: 'flat',
            stat,
            value: modifier.flat[tier - 1] ?? 0,
          });
        }

        // Percent modifier
        if (modifier?.percent) {
          calculatedBrute[`${stat}Modifier`] /= 1 + (modifier.percent[tier - 1] ?? 0);
          calculatedBrute[`${stat}Modifier`] *= 1 + getScaledStat({
            chaos: true,
            skill: skillName,
            type: 'percent',
            stat,
            value: modifier.percent[tier - 1] ?? 0,
            precision: 2,
          });
        }
      }

      calculatedBrute[`${stat}Value`] = Math.floor(calculatedBrute[`${stat}Stat`] * calculatedBrute[`${stat}Modifier`]);
    }

    if (stat === FightStat.AGILITY && modifiers[FightModifier.doubleAgility]) {
      calculatedBrute[`${stat}Value`] *= 2;
    }
  }

  return calculatedBrute;
};
export const getWeaponsList = (brute: Pick<CalculatedBrute, 'weapons'>) => {
  const weapons: WeaponName[] = [];

  for (const [weaponName, tier] of entries(brute.weapons)) {
    for (let i = 0; i < tier; i++) {
      weapons.push(weaponName);
    }
  }

  return weapons;
};

export const getSkillsList = (brute: Pick<CalculatedBrute, 'skills'>) => {
  const skills: SkillName[] = [];

  for (const [skillName, tier] of entries(brute.skills)) {
    for (let i = 0; i < tier; i++) {
      skills.push(skillName);
    }
  }

  return skills;
};

export const getPetsList = (brute: Pick<CalculatedBrute, 'pets'>) => {
  const pets: PetName[] = [];

  for (const [petName, tier] of entries(brute.pets)) {
    for (let i = 0; i < tier; i++) {
      pets.push(petName);
    }
  }

  return pets;
};

export const getBruteToSave = <T extends Pick<CalculatedBrute, 'weapons' | 'skills' | 'pets'>>(
  brute: T,
) => {
  const bruteToSave: Omit<T, 'weapons' | 'skills' | 'pets'> & Pick<Brute, 'weapons' | 'skills' | 'pets'> = {
    ...brute,
    weapons: getWeaponsList(brute),
    skills: getSkillsList(brute),
    pets: getPetsList(brute),
  };

  return bruteToSave;
};
