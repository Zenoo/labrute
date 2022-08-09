import { Brute } from '@eternaltwin/labrute-core/types';
import { BRUTE_STARTING_POINTS } from '../constants.js';
import randomBetween from '../utils/randomBetween.js';
import weightedRandom from '../utils/weightedRandom.js';
import applySkillModifiers from './applySkillModifiers.js';
import getHP from './getHP.js';
import getXPNeeded from './getXPNeeded.js';
import { default as availablePets, PETS_TOTAL_ODDS } from './pets.js';
import { default as availableSkills, SKILLS_TOTAL_ODDS } from './skills.js';
import { default as availableWeapons, WEAPONS_TOTAL_ODDS } from './weapons.js';

interface Perk {
  name: 'pet' | 'skill' | 'weapon';
  odds: number;
}

export const perkOdds: Perk[] = [
  { name: 'pet', odds: 3.5 },
  { name: 'skill', odds: 48.25 },
  { name: 'weapon', odds: 48.25 },
];

export type RandomBruteStats = Omit<Brute['data'], 'gender' | 'body' | 'colors' | 'master' | 'victories' | 'pupils' | 'user'>;

const createRandomBruteStats = (): RandomBruteStats => {
  let brute: RandomBruteStats = {
    level: 1,
    xp: getXPNeeded(2), // TOD: Set to 0 when brutes can gain XP
    stats: {
      hp: 0,
      endurance: {
        stat: 0,
        modifier: 1,
        value: 0,
      },
      strength: {
        stat: 0,
        modifier: 1,
        value: 0,
      },
      agility: {
        stat: 0,
        modifier: 1,
        value: 0,
      },
      speed: {
        stat: 0,
        modifier: 1,
        value: 0,
      },
    },
    skills: [],
    pets: {
      dog1: false,
      dog2: false,
      dog3: false,
      panther: false,
      bear: false,
    },
    ranking: 10,
    weapons: [],
  };

  // Starting budget
  let availablePoints = BRUTE_STARTING_POINTS;

  const perk = weightedRandom(perkOdds, 100);

  // Pet
  const pet = perk.name === 'pet' ? weightedRandom(availablePets, PETS_TOTAL_ODDS) : null;
  // Skill
  brute.skills = perk.name === 'skill' ? [weightedRandom(availableSkills, SKILLS_TOTAL_ODDS).name] : [];
  // Weapon
  brute.weapons = perk.name === 'weapon' ? [weightedRandom(availableWeapons, WEAPONS_TOTAL_ODDS).name] : [];

  // Stats boosters
  if (perk.name === 'skill') {
    brute = applySkillModifiers({ data: brute } as Brute, brute.skills[0]).data;
  }

  // Enrudance (2 to 5)
  const endurancePoints = randomBetween(2, 5);
  brute.stats.endurance.stat += endurancePoints;
  availablePoints -= endurancePoints;

  // Take into account the endurance malus from the pet
  if (pet) {
    // Can go into negatives
    brute.stats.endurance.stat -= pet.enduranceMalus;
  }

  // Strength (2 to 5)
  const strengthPoints = Math.min(randomBetween(2, 5), availablePoints - 2 * 2);
  brute.stats.strength.stat += strengthPoints;
  availablePoints -= strengthPoints;

  // Agility (2 to 5)
  const agilityPoints = Math.min(randomBetween(2, 5), availablePoints - 2 * 1);
  brute.stats.agility.stat += agilityPoints;
  availablePoints -= agilityPoints;

  // Speed (2 to 5)
  brute.stats.speed.stat += availablePoints;

  // Final stat values
  brute.stats.endurance.value = Math.floor(
    brute.stats.endurance.stat * brute.stats.endurance.modifier,
  );
  brute.stats.strength.value = Math.floor(
    brute.stats.strength.stat * brute.stats.strength.modifier,
  );
  brute.stats.agility.value = Math.floor(
    brute.stats.agility.stat * brute.stats.agility.modifier,
  );
  brute.stats.speed.value = Math.floor(
    brute.stats.speed.stat * brute.stats.speed.modifier,
  );

  // Final HP
  brute.stats.hp = getHP(1, brute.stats.endurance.value);

  // Easter egg stances
  brute.stance = randomBetween(0, 1000) === 0 ? randomBetween(0, 2) : undefined;

  return brute;
};

export default createRandomBruteStats;
