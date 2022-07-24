import { default as availableSkills } from './skills';
import { Brute, Stat } from '@backend/types';
import { default as availableWeapons } from './weapons';
import { default as availablePets } from './pets';
import randomBetween from '../randomBetween';
import weightedRandom from '../weightedRandom';
import getStandardHP from './getStandardHP';

interface Perk {
  name: 'pet' | 'skill' | 'weapon';
  odds: number;
}

const perkOdds: Perk[] = [
  { name: 'pet', odds: 0.035792 },
  { name: 'skill', odds: 0.483369 },
  { name: 'weapon', odds: 0.480839, },
];

const createRandomBruteStats = (): Omit<Brute['data'], 'name' | 'gender' | 'body' | 'colors' | 'master' | 'victories' | 'pupils' | 'user'> => {
  // Starting budget
  let availablePoints = 11;

  const perk = weightedRandom(perkOdds);

  // Pet
  const pet = perk.name === 'pet' ? weightedRandom(availablePets) : null;
  // Skill
  const skills = perk.name === 'skill' ? [weightedRandom(availableSkills).name] : [];
  // Weapon
  const weapons = perk.name === 'weapon' ? [weightedRandom(availableWeapons).name] : [];

  // Stats
  const endurance: Stat = {
    stat: 0,
    modifier: 1,
    value: 0,
  };
  const strength: Stat = {
    stat: 0,
    modifier: 1,
    value: 0,
  };
  const agility: Stat = {
    stat: 0,
    modifier: 1,
    value: 0,
  };
  const speed: Stat = {
    stat: 0,
    modifier: 1,
    value: 0,
  };

  // Stats boosters

  // Vitality modifier
  if (skills && skills.includes('vitality')) {
    endurance.modifier *= 1.5;
    endurance.stat += 3;
  }
  // Immortality modifier
  if (skills && skills.includes('immortality')) {
    endurance.modifier *= 2.5;
    strength.modifier *= 0.75;
    agility.modifier *= 0.75;
    speed.modifier *= 0.75;
  }

  // Herculean strength modifier
  if (skills && skills.includes('herculeanStrength')) {
    strength.modifier *= 1.5;
    strength.stat += 3;
  }

  // Feline agility modifier
  if (skills && skills.includes('felineAgility')) {
    agility.modifier *= 1.5;
    agility.stat += 3;
  }

  // Lightning bolt modifier
  if (skills && skills.includes('lightningBolt')) {
    speed.modifier *= 1.5;
    speed.stat += 3;
  }

  // Enrudance (2 to 5)
  const endurancePoints = randomBetween(2, 5);
  endurance.stat += endurancePoints;
  availablePoints -= endurancePoints;

  // Take into account the endurance malus from the pet
  if (pet) {
    // Can go into negatives
    endurance.stat -= pet.enduranceMalus;
  }

  // Strength (2 to 5)
  const strengthPoints = Math.min(randomBetween(2, 5), availablePoints - 2 * 2);
  strength.stat += strengthPoints;
  availablePoints -= strengthPoints;

  // Agility (2 to 5)
  const agilityPoints = Math.min(randomBetween(2, 5), availablePoints - 2 * 1);
  agility.stat += agilityPoints;
  availablePoints -= agilityPoints;

  // Speed (2 to 5)
  speed.stat += availablePoints;

  // Final stat values
  endurance.value = Math.floor(endurance.stat * endurance.modifier);
  strength.value = Math.floor(strength.stat * strength.modifier);
  agility.value = Math.floor(agility.stat * agility.modifier);
  speed.value = Math.floor(speed.stat * speed.modifier);

  // Final HP
  const standardHP = getStandardHP(1);
  // If endurance is negative, use 0 instead to not go under 51 HP at Lv1
  const hp = standardHP + Math.max(endurance.value, 0) * 6;

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