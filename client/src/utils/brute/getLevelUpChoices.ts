import { Brute, LevelUpChoice, SkillName, Stats, WeaponName } from '@eternaltwin/labrute-core/types';
import randomBetween from '../randomBetween.js';
import weightedRandom from '../weightedRandom.js';
import { perkOdds } from './createRandomBruteStats.js';
import pets from './pets.js';
import skills from './skills.js';
import weapons from './weapons.js';

export const availableStats: Stats[] = [
  'endurance',
  'strength',
  'agility',
  'speed',
];

const getLevelUpChoices = (brute: Brute): [LevelUpChoice, LevelUpChoice] => {
  // First choice (Weapon/Skill/Pet)
  // (+2/+1 Stats if picked something already learned)
  let firstChoice: LevelUpChoice | null = null;

  // Weapon/Skill/Pet ?
  const { name: type } = weightedRandom(perkOdds);

  // Perk name ?
  const name = type === 'pet'
    ? weightedRandom(pets).name
    : type === 'skill'
      ? weightedRandom(skills).name
      : weightedRandom(weapons).name;

  // Check if brute already has this perk
  let hasPerk = false;
  if (type === 'pet') {
    switch (name) {
      case 'dog':
        hasPerk = brute.data.pets.dog === 3;
        break;
      case 'panther':
        hasPerk = !!brute.data.pets.panther;
        break;
      case 'bear':
        hasPerk = !!brute.data.pets.bear;
        break;
      default:
        break;
    }
  } else {
    hasPerk = type === 'skill'
      ? brute.data.skills.includes(name as SkillName)
      : brute.data.weapons.includes(name as WeaponName);
  }

  // Chose +2/+1 stat instead
  if (hasPerk) {
    const { [randomBetween(0, availableStats.length - 1)]: firstStat } = availableStats;
    let { [randomBetween(0, availableStats.length - 1)]: secondStat } = availableStats;

    // Avoid duplicates
    while (secondStat === firstStat) {
      secondStat = availableStats[randomBetween(0, availableStats.length - 1)];
    }

    firstChoice = {
      type: 'stats',
      name: [firstStat, secondStat],
      stats: [2, 1],
      chosen: false,
    };
  } else {
    firstChoice = {
      type,
      name,
      chosen: false,
    };
  }

  // Second choice (+3 Stat)
  const secondChoice: LevelUpChoice = {
    type: 'stats',
    name: availableStats[randomBetween(0, availableStats.length - 1)],
    stats: 3,
    chosen: false,
  };

  return [firstChoice, secondChoice];
};

export default getLevelUpChoices;
