import { default as availableSkills } from './brute/skills';
import { Brute } from '@backend/types';
import { default as availableWeapons } from './brute/weapons';
import { default as availablePets } from './brute/pets';
import randomBetween from './randomBetween';
import weightedRandom from './weightedRandom';

const createRandomBruteStats = (): Omit<Brute['data'], 'name' | 'gender' | 'body' | 'colors' | 'master' | 'victories' | 'pupils' | 'user'> => {
  // Starting budget
  let availablePoints = 11;

  const skillWeaponOrPet = Math.random();

  // 3.5792% chance of having a pet
  const hasPet = skillWeaponOrPet < 0.035792;
  const pet = hasPet ? weightedRandom(availablePets) : null;

  // HP (2 to 5)
  let endurance = randomBetween(2, 5);
  availablePoints -= endurance;

  // Take into account the endurance malus from the pet
  if (pet) {
    // Can go into negatives
    endurance -= pet.enduranceMalus;
  }

  const standardHP = Math.floor(1 * 1.5 + 50);
  // If endurance is negative, use 0 instead to not go under 51 HP at Lv1
  const hp = standardHP + Math.max(endurance, 0) * 6;

  // Strength (2 to 5)
  const strength = Math.min(randomBetween(2, 5), availablePoints - 2 * 2);
  availablePoints -= strength;

  // Agility (2 to 5)
  const agility = Math.min(randomBetween(2, 5), availablePoints - 2 * 1);
  availablePoints -= agility;

  // Speed (2 to 5)
  const speed = availablePoints;

  // 48.3369% chance of having a skill
  const hasSkill = !hasPet && skillWeaponOrPet < 0.483369 + 0.035792;
  const skills = hasSkill ? [weightedRandom(availableSkills).name] : [];

  // 48.0838% chance of having a weapon
  const hasWeapon = !hasPet && !hasSkill && skillWeaponOrPet >= 0.480838 + 0.035792;
  const weapons = hasWeapon ? [weightedRandom(availableWeapons).name] : [];

  return {
    level: 1,
    xp: 0,
    stats: {
      hp,
      endurance,
      strength,
      agility,
      speed,
    },
    skills,
    pets: {
      dog: pet && pet.name === 'dog' ? 1 : 0,
      panther: pet && pet.name === 'panther' ? 1 : 0,
      bear: pet && pet.name === 'bear' ? 1 : 0,
    },
    ranking: 10,
    weapons,
  };
};

export default createRandomBruteStats;