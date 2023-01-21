import { Brute, BruteStat, PetName, Prisma, SkillName, WeaponName } from '@labrute/prisma';
import { PERKS_TOTAL_ODDS } from '../constants';
import randomBetween from '../utils/randomBetween';
import weightedRandom from '../utils/weightedRandom';
import { perkOdds } from './createRandomBruteStats';
import pets, { PETS_TOTAL_ODDS } from './pets';
import skills, { SKILLS_TOTAL_ODDS } from './skills';
import weapons, { limitedWeapons, MAX_LIMITED_WEAPONS, WEAPONS_TOTAL_ODDS } from './weapons';

export type LevelUpChoice = Omit<Prisma.DestinyChoiceCreateInput, 'brute'>;

const getLevelUpChoices = (
  brute: Pick<Brute, 'level' | 'pets' | 'skills' | 'weapons'>
): [LevelUpChoice, LevelUpChoice] => {
  let preventPerk = false;
  let perkType = null;
  let perkName: null | PetName | SkillName | WeaponName = null;

  // First choice (Weapon/Skill/Pet)
  // (+1/+1 Stats if picked something already learned)
  let firstChoice: LevelUpChoice | null = null;

  const bruteStats = Object.values(BruteStat);

  // Second choice (+2 Stat)
  let secondChoice: LevelUpChoice | null = {
    type: 'stats',
    stat1: bruteStats[randomBetween(0, bruteStats.length - 1)],
    stat1Value: 2,
  };

  // Less likely to get a perk the more high level the brute is
  if (brute.level >= 80 && randomBetween(0, brute.level) >= 80) {
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
          preventPerk = brute.pets.includes('dog1');
          break;
        case 'dog2':
          preventPerk = !brute.pets.includes('dog1') || brute.pets.includes('dog2');
          break;
        case 'dog3':
          preventPerk = !brute.pets.includes('dog1') || !brute.pets.includes('dog2') || brute.pets.includes('dog3');
          break;
        case 'panther':
          // Allow for both panther and bear at a 1/1000 chance
          preventPerk = brute.pets.includes('panther')
            || (randomBetween(0, 1000) > 0 ? brute.pets.includes('bear') : false);
          break;
        case 'bear':
          // Allow for both panther and bear at a 1/1000 chance
          preventPerk = brute.pets.includes('bear')
            || (randomBetween(0, 1000) > 0 ? brute.pets.includes('panther') : false);
          break;
        default:
          break;
      }
    } else if (perkType === 'skill') {
      const selectedSkill = skills.find((skill) => skill.name === perkName);
      const hasSkill = brute.skills.includes(perkName as SkillName);
      if (hasSkill) {
        preventPerk = true;
      } else if (selectedSkill?.type === 'booster') {
        // Decrease booster chances
        const boosters = skills.filter((skill) => skill.type === 'booster');
        const gottenBoosters = brute.skills.filter(
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
      const gottenLimitedWeapons = brute.weapons.filter(
        (weapon) => limitedWeapons.includes(weapon),
      );

      if (gottenLimitedWeapons.length >= MAX_LIMITED_WEAPONS) {
        preventPerk = true;
      } else {
        preventPerk = brute.weapons.includes(perkName as WeaponName);
      }
    }
  }

  // Chose +1/+1 stat instead
  if (preventPerk) {
    const { [randomBetween(0, bruteStats.length - 1)]: firstStat } = bruteStats;
    let { [randomBetween(0, bruteStats.length - 1)]: secondStat } = bruteStats;

    // Avoid duplicates
    while (secondStat === firstStat) {
      secondStat = bruteStats[randomBetween(0, bruteStats.length - 1)];
    }

    // Swap +1/+1 with +2
    firstChoice = secondChoice;
    secondChoice = {
      type: 'stats',
      stat1: firstStat,
      stat1Value: 1,
      stat2: secondStat,
      stat2Value: 1,
    };
  } else {
    if (!perkType || !perkName) {
      throw new Error('No perk type or name');
    }
    firstChoice = {
      type: perkType,
      skill: perkType === 'skill' ? perkName as SkillName : undefined,
      pet: perkType === 'pet' ? perkName as PetName : undefined,
      weapon: perkType === 'weapon' ? perkName as WeaponName : undefined,
    };
  }

  return [firstChoice, secondChoice];
};

export default getLevelUpChoices;
