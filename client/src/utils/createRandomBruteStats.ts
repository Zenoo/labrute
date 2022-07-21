import { default as availableSkills } from './brute/skills';
import { Brute } from '@backend/types';
import { default as availableWeapons } from './brute/weapons';
import randomBetween from './randomBetween';

const createRandomBruteStats = (): Omit<Brute['data'], 'name' | 'gender' | 'body' | 'colors' | 'master' | 'victories' | 'pupils' | 'user'> => {
  // Starting budget
  let availablePoints = 11;

  // HP (2 to 5)
  const endurance = randomBetween(2, 5);
  availablePoints -= endurance;

  const standardHP = Math.floor(1 * 1.5 + 50);
  const hp = standardHP + endurance * 6;

  // Strength (2 to 5)
  const strength = Math.min(randomBetween(2, 5), availablePoints - 2 * 2);
  availablePoints -= strength;

  // Agility (2 to 5)
  const agility = Math.min(randomBetween(2, 5), availablePoints - 2 * 1);
  availablePoints -= agility;

  // Speed (2 to 5)
  const speed = availablePoints;

  // 25% chance of having a skill
  const hasSkill = Math.random() < 0.25;
  const skills = hasSkill ? [
    availableSkills[Math.floor(Math.random() * availableSkills.length)].name
  ] : [];

  // 50% chance of having a weapon
  const hasWeapon = Math.random() < 0.5;
  const weapons = hasWeapon ? [
    availableWeapons[Math.floor(Math.random() * availableWeapons.length)]
  ] : [];

  // 5% chance of having a dog
  const hasDog = Math.random() < 0.05;

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
      dog: hasDog ? 1 : 0,
      panther: 0,
      bear: 0,
    },
    ranking: 10,
    weapons,
  };
};

export default createRandomBruteStats;