import {
  Brute, LevelUpChoice, SkillName, Stats, WeaponName,
} from '../types.js';
import randomBetween from '../utils/randomBetween.js';
import weightedRandom from '../utils/weightedRandom.js';
import { perkOdds } from './createRandomBruteStats.js';
import pets, { PETS_TOTAL_ODDS } from './pets.js';
import skills, { SKILLS_TOTAL_ODDS } from './skills.js';
import weapons, { WEAPONS_TOTAL_ODDS } from './weapons.js';

export const availableStats: Stats[] = [
  'endurance',
  'strength',
  'agility',
  'speed',
];

const getLevelUpChoices = (brute: Brute): [LevelUpChoice, LevelUpChoice] => {
  // First choice (Weapon/Skill/Pet)
  // (+1/+1 Stats if picked something already learned)
  let firstChoice: LevelUpChoice | null = null;

  // Weapon/Skill/Pet ?
  const { name: type } = weightedRandom(perkOdds, 100);

  // Perk name ?
  const name = type === 'pet'
    ? weightedRandom(pets, PETS_TOTAL_ODDS).name
    : type === 'skill'
      ? weightedRandom(skills, SKILLS_TOTAL_ODDS).name
      : weightedRandom(weapons, WEAPONS_TOTAL_ODDS).name;

  // Check if brute already has this perk
  let hasPerk = false;
  if (type === 'pet') {
    switch (name) {
      case 'dog':
        hasPerk = brute.data.pets.dog === 3;
        break;
      case 'panther':
        hasPerk = !!brute.data.pets.panther || !!brute.data.pets.bear;
        break;
      case 'bear':
        hasPerk = !!brute.data.pets.bear || !!brute.data.pets.panther;
        break;
      default:
        break;
    }
  } else if (type === 'skill') {
    const selectedSkill = skills.find((skill) => skill.name === name);
    const hasSkill = brute.data.skills.includes(name as SkillName);
    if (hasSkill) {
      hasPerk = hasSkill;
    } else if (selectedSkill?.type === 'booster') {
      // Decrease booster chances
      const boosters = skills.filter((skill) => skill.type === 'booster');
      const gottenBoosters = brute.data.skills.filter(
        (skill) => boosters.find((booster) => booster.name === skill),
      );

      switch (gottenBoosters.length) {
        case 0:
          hasPerk = false;
          break;
        case 1:
          // Reduce chance by 50%
          hasPerk = randomBetween(0, 100) < 50;
          break;
        case 2:
          // Reduce chance by 75%
          hasPerk = randomBetween(0, 100) < 75;
          break;
        case 3:
          // Reduce chance by 90%
          hasPerk = randomBetween(0, 100) < 90;
          break;
        case 4:
          // Reduce chance by 95%
          hasPerk = randomBetween(0, 100) < 95;
          break;
        case 5:
          // Reduce chance by 99%
          hasPerk = randomBetween(0, 100) < 99;
          break;
        default:
          hasPerk = false;
          break;
      }
    } else {
      hasPerk = hasSkill;
    }
  } else {
    hasPerk = brute.data.weapons.includes(name as WeaponName);
  }

  // Chose +1/+1 stat instead
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
      stats: [1, 1],
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
    stats: 2,
    chosen: false,
  };

  return [firstChoice, secondChoice];
};

export default getLevelUpChoices;
