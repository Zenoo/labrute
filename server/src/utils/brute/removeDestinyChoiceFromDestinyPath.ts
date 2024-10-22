import { randomBetween } from '@labrute/core';
import {
  Brute,
  BruteStat,
  DestinyChoiceType,
  PetName,
  PrismaClient,
  SkillName,
  WeaponName,
} from '@labrute/prisma';

export const removeDestinyChoiceFromDestinyPath = async (
  prisma: PrismaClient,
  brute: Pick<Brute, 'id'>,
  destinyChoice: WeaponName | SkillName | PetName,
) => {
  const destinyChoices = await prisma.destinyChoice.findMany({
    where: {
      bruteId: brute.id,
    },
  });

  const isWeapon = Object.values(WeaponName).includes(destinyChoice as WeaponName);
  const isSkill = Object.values(SkillName).includes(destinyChoice as SkillName);
  const isPet = Object.values(PetName).includes(destinyChoice as PetName);

  if (!isWeapon && !isSkill && !isPet) {
    return;
  }

  // Replace the destiny choice in destiny path with random stats
  const bruteStats = Object.values(BruteStat);

  for (const choice of destinyChoices) {
    if (isWeapon && (choice.type !== DestinyChoiceType.weapon || choice.weapon !== destinyChoice)) {
      continue;
    }
    if (isSkill && (choice.type !== DestinyChoiceType.skill || choice.skill !== destinyChoice)) {
      continue;
    }
    if (isPet && (choice.type !== DestinyChoiceType.pet || choice.pet !== destinyChoice)) {
      continue;
    }

    // Create a stat choice of either +1/+1 or +2
    const { [randomBetween(0, bruteStats.length - 1)]: firstStat } = bruteStats;
    let { [randomBetween(0, bruteStats.length - 1)]: secondStat } = bruteStats;

    const statValue = randomBetween(1, 2);

    // Avoid duplicates
    while (secondStat === firstStat) {
      secondStat = bruteStats[randomBetween(0, bruteStats.length - 1)];
    }

    await prisma.destinyChoice.update({
      where: { id: choice.id },
      data: {
        ...choice,
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
  }
};