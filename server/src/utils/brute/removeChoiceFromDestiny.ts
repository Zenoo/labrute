import { randomBetween } from '@labrute/core';
import {
  Brute,
  BruteStat,
  DestinyChoiceSide,
  DestinyChoiceType,
  PetName,
  PrismaClient,
  SkillName,
  WeaponName,
} from '@labrute/prisma';

export const removeChoiceFromDestiny = async (
  prisma: PrismaClient,
  brute: Pick<Brute, 'id' | 'destinyPath'>,
  ascended?: {
    weapon?: WeaponName,
    skill?: SkillName,
    pet?: PetName
  },
) => {
  const { weapon, skill, pet } = ascended || {};
  const isWeapon = weapon && Object.values(WeaponName).includes(weapon as WeaponName);
  const isSkill = skill && Object.values(SkillName).includes(skill as SkillName);
  const isPet = pet && Object.values(PetName).includes(pet as PetName);

  if (!isWeapon && !isSkill && !isPet) {
    throw new Error('Invalid destiny choice type');
  }

  if ((isWeapon && isSkill) || (isWeapon && isPet) || (isSkill && isPet)) {
    throw new Error('Invalid destiny choice type');
  }

  const destinyChoice = weapon || skill || pet;

  if (!destinyChoice) {
    throw new Error('Invalid destiny choice');
  }

  let destinyChoiceType: DestinyChoiceType;
  let originalDestinyChoiceType: 'originalWeapon' | 'originalSkill' | 'originalPet';
  if (isWeapon) {
    destinyChoiceType = DestinyChoiceType.weapon;
    originalDestinyChoiceType = 'originalWeapon';
  } else if (isSkill) {
    destinyChoiceType = DestinyChoiceType.skill;
    originalDestinyChoiceType = 'originalSkill';
  } else {
    if (!isPet) {
      throw new Error('Invalid destiny choice type');
    }
    destinyChoiceType = DestinyChoiceType.pet;
    originalDestinyChoiceType = 'originalPet';
  }

  const allMatchingChoices = await prisma.destinyChoice.findMany({
    where: {
      bruteId: brute.id,
      type: destinyChoiceType,
      [destinyChoiceType]: destinyChoice,
    },
  });

  if (!allMatchingChoices.length) {
    throw new Error('No matching destiny choice found');
  }

  // Keep only those whose path is a prefix of current brute.destinyPath
  const onCurrentPath = allMatchingChoices
    .filter((c) => c.path.length <= brute.destinyPath.length
      && c.path.every((side: DestinyChoiceSide, idx: number) => brute.destinyPath[idx] === side));

  if (!onCurrentPath.length) {
    throw new Error('No matching destiny choice found');
  }

  // Choose shortest path
  const choiceToReplace = onCurrentPath
    .sort((a, b) => a.path.length - b.path.length)[0];

  if (!choiceToReplace) {
    throw new Error('No matching destiny choice found');
  }

  // Replace the destiny choice in destiny path with random stats
  const bruteStats = Object.values(BruteStat);

  // Create a stat choice of either +1/+1 or +2
  const { [randomBetween(0, bruteStats.length - 1)]: firstStat } = bruteStats;
  let { [randomBetween(0, bruteStats.length - 1)]: secondStat } = bruteStats;

  const statValue = randomBetween(1, 2);

  // Avoid duplicates
  while (secondStat === firstStat) {
    secondStat = bruteStats[randomBetween(0, bruteStats.length - 1)];
  }

  await prisma.destinyChoice.update({
    where: { id: choiceToReplace.id },
    data: {
      ...choiceToReplace,
      [originalDestinyChoiceType]: destinyChoice,
      type: DestinyChoiceType.stats,
      skill: null,
      pet: null,
      weapon: null,
      stat1: firstStat as BruteStat,
      stat1Value: statValue,
      stat2: statValue === 1 ? secondStat as BruteStat : null,
      stat2Value: statValue === 1 ? 1 : null,
    },
  });
};
