import { DestinyChoice, DestinyChoiceType, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { BruteRankings } from '../constants';
import { applySkillModifiers } from './applySkillModifiers';
import { getHP } from './getHP';
import { getRandomBonus } from './getRandomBonus';
import { getRandomStartingStats } from './getRandomStartingStats';
import { pets } from './pets';
import { getBruteToSave } from './calculatedBrute';
import { keys } from '../utils';
import { TieredPerks } from '../types';

export const createRandomBruteStats = (
  baseStats?: { endurance: number, strength: number, agility: number, speed: number } | null,
  perkType?: DestinyChoiceType,
  perkName?: string | null,
  stats?: Pick<DestinyChoice, 'stat1' | 'stat1Value' | 'stat2' | 'stat2Value'>,
) => {
  const brute = {
    level: 1,
    xp: 0,
    hp: 0,
    enduranceStat: 0,
    enduranceModifier: 1,
    enduranceValue: 0,
    strengthStat: 0,
    strengthModifier: 1,
    strengthValue: 0,
    agilityStat: 0,
    agilityModifier: 1,
    agilityValue: 0,
    speedStat: 0,
    speedModifier: 1,
    speedValue: 0,
    skills: {} as TieredPerks['skills'],
    pets: {} as TieredPerks['pets'],
    ranking: BruteRankings[0],
    weapons: {} as TieredPerks['weapons'],
  };

  let perk: { type: DestinyChoiceType, name: PetName | SkillName | WeaponName } | null = null;

  // Predefined perk
  if (perkType) {
    if (perkName) {
      perk = { type: perkType, name: perkName as PetName | SkillName | WeaponName };

      if (perkType === DestinyChoiceType.pet) {
        brute.pets[perkName as PetName] = 1;
      } else if (perkType === DestinyChoiceType.skill) {
        brute.skills[perkName as SkillName] = 1;
      } else {
        brute.weapons[perkName as WeaponName] = 1;
      }
    } else if (stats) {
      if (stats.stat1 && stats.stat1Value) {
        brute[`${stats.stat1}Stat`] += stats.stat1Value;
      }
      if (stats.stat2 && stats.stat2Value) {
        brute[`${stats.stat2}Stat`] += stats.stat2Value;
      }
    }
  } else {
    // Random perk
    perk = getRandomBonus(getBruteToSave(brute), true);

    if (!perk) {
      throw new Error('No bonus found');
    }

    // Pet
    if (perk.type === DestinyChoiceType.pet) {
      brute.pets[perk.name as PetName] = 1;
    }
    // Skill
    if (perk.type === DestinyChoiceType.skill) {
      brute.skills[perk.name as SkillName] = 1;
    }
    // Weapon
    if (perk.type === DestinyChoiceType.weapon) {
      brute.weapons[perk.name as WeaponName] = 1;
    }
  }

  // Stats boosters
  if (perk?.type === 'skill') {
    const skill = keys(brute.skills)[0];

    if (!skill) {
      throw new Error('Skill not found');
    }

    applySkillModifiers(brute, skill);
  }

  // Starting stats
  const startingStats = baseStats || getRandomStartingStats();

  brute.enduranceStat += startingStats.endurance;
  brute.strengthStat += startingStats.strength;
  brute.agilityStat += startingStats.agility;
  brute.speedStat += startingStats.speed;

  // Take into account the endurance malus from the pet
  if (perk && perk.type === DestinyChoiceType.pet) {
    const pet = pets[perk.name as PetName];

    if (!pet) {
      throw new Error('Pet not found');
    }

    // Can go into negatives
    brute.enduranceStat -= pet.enduranceMalus;
  }

  // Final stat values
  brute.enduranceValue = Math.floor(
    brute.enduranceStat * brute.enduranceModifier,
  );
  brute.strengthValue = Math.floor(
    brute.strengthStat * brute.strengthModifier,
  );
  brute.agilityValue = Math.floor(
    brute.agilityStat * brute.agilityModifier,
  );
  brute.speedValue = Math.floor(
    brute.speedStat * brute.speedModifier,
  );

  // Final HP
  brute.hp = getHP(1, brute.enduranceValue);

  return brute;
};
