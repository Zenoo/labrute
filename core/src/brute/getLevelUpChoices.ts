import { Brute, BruteStat, PetName, Prisma, SkillName, WeaponName } from '@labrute/prisma';
import randomBetween from '../utils/randomBetween';
import getRandomBonus from './getRandomBonus';

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
    const perk = getRandomBonus(brute);

    if (perk) {
      perkType = perk.type;
      perkName = perk.name;
    }

    preventPerk = !perk;
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
