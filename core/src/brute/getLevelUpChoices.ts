import { PERKS_TOTAL_ODDS } from '../constants.js';
import {
  Brute, LevelUpChoice, PetName, SkillName, Stats, WeaponName,
} from '../types.js';
import randomBetween from '../utils/randomBetween.js';
import weightedRandom from '../utils/weightedRandom.js';
import { perkOdds } from './createRandomBruteStats.js';
import pets, { PETS_TOTAL_ODDS } from './pets.js';
import skills, { SKILLS_TOTAL_ODDS } from './skills.js';
import weapons, { limitedWeapons, MAX_LIMITED_WEAPONS, WEAPONS_TOTAL_ODDS } from './weapons.js';

export const availableStats: Stats[] = [
  'endurance',
  'strength',
  'agility',
  'speed',
];

const getLevelUpChoices = (brute: Brute): [LevelUpChoice, LevelUpChoice] => {
  let preventPerk = false;
  let perkType = null;
  let perkName: null | PetName | SkillName | WeaponName = null;

  // First choice (Weapon/Skill/Pet)
  // (+1/+1 Stats if picked something already learned)
  let firstChoice: LevelUpChoice | null = null;

  // Second choice (+2 Stat)
  let secondChoice: LevelUpChoice = {
    type: 'stats',
    name: availableStats[randomBetween(0, availableStats.length - 1)],
    stats: 2,
  };

  // Less likely to get a perk the more high level the brute is
  if (brute.data.level >= 80 && randomBetween(0, brute.data.level) >= 80) {
    preventPerk = true;
  }

  if (!preventPerk) {
    // Weapon/Skill/Pet ?
    perkType = weightedRandom(perkOdds, PERKS_TOTAL_ODDS).name;

    // Perk name ?
    perkName = perkType === 'pet'
      ? weightedRandom(pets, PETS_TOTAL_ODDS).name
      : perkType === 'skill'
        ? weightedRandom(skills, SKILLS_TOTAL_ODDS).name
        : weightedRandom(weapons, WEAPONS_TOTAL_ODDS).name;

    // Check if the perk should be prevented
    if (perkType === 'pet') {
      switch (perkName) {
        case 'dog1':
          preventPerk = brute.data.pets.dog1;
          break;
        case 'dog2':
          preventPerk = !brute.data.pets.dog1 || brute.data.pets.dog2;
          break;
        case 'dog3':
          preventPerk = !brute.data.pets.dog1 || !brute.data.pets.dog2 || brute.data.pets.dog3;
          break;
        case 'panther':
          // Allow for both panther and bear at a 1/1000 chance
          preventPerk = brute.data.pets.panther
            || (randomBetween(0, 1000) > 0 ? brute.data.pets.bear : false);
          break;
        case 'bear':
          // Allow for both panther and bear at a 1/1000 chance
          preventPerk = brute.data.pets.bear
            || (randomBetween(0, 1000) > 0 ? brute.data.pets.panther : false);
          break;
        default:
          break;
      }
    } else if (perkType === 'skill') {
      const selectedSkill = skills.find((skill) => skill.name === perkName);
      const hasSkill = brute.data.skills.includes(perkName as SkillName);
      if (hasSkill) {
        preventPerk = true;
      } else if (selectedSkill?.type === 'booster') {
        // Decrease booster chances
        const boosters = skills.filter((skill) => skill.type === 'booster');
        const gottenBoosters = brute.data.skills.filter(
          (skill) => boosters.find((booster) => booster.name === skill),
        );

        switch (gottenBoosters.length) {
          case 0:
            preventPerk = false;
            break;
          case 1:
            // 5% chance of getting a second booster
            preventPerk = randomBetween(0, 100) < 95;
            break;
          case 2:
            // 2% chance of getting a third booster
            preventPerk = randomBetween(0, 100) < 98;
            break;
          case 3:
            // 0.1% chance of getting a fourth booster
            preventPerk = randomBetween(0, 1000) < 10;
            break;
          case 4:
            // 0.1% chance of getting a fifth booster
            preventPerk = randomBetween(0, 1000) < 10;
            break;
          case 5:
            // 0.1% chance of getting a sixth booster
            preventPerk = randomBetween(0, 1000) < 10;
            break;
          default:
            preventPerk = false;
            break;
        }
      } else {
        preventPerk = false;
      }
    } else {
      // Limit some weapons
      const gottenLimitedWeapons = brute.data.weapons.filter(
        (weapon) => limitedWeapons.includes(weapon),
      );

      if (gottenLimitedWeapons.length >= MAX_LIMITED_WEAPONS) {
        preventPerk = true;
      } else {
        preventPerk = brute.data.weapons.includes(perkName as WeaponName);
      }
    }
  }

  // Chose +1/+1 stat instead
  if (preventPerk) {
    const { [randomBetween(0, availableStats.length - 1)]: firstStat } = availableStats;
    let { [randomBetween(0, availableStats.length - 1)]: secondStat } = availableStats;

    // Avoid duplicates
    while (secondStat === firstStat) {
      secondStat = availableStats[randomBetween(0, availableStats.length - 1)];
    }

    // Swap +1/+1 with +2
    firstChoice = secondChoice;
    secondChoice = {
      type: 'stats',
      name: [firstStat, secondStat],
      stats: [1, 1],
    };
  } else {
    if (!perkType || !perkName) {
      throw new Error('No perk type or name');
    }
    firstChoice = {
      type: perkType,
      name: perkName,
    };
  }

  return [firstChoice, secondChoice];
};

export default getLevelUpChoices;
