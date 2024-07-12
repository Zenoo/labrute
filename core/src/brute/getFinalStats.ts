import { Brute, SkillName } from '@labrute/prisma';
import applySkillModifiers from './applySkillModifiers';
import { getHP } from './getHP';
import { getTempSkill } from './getTempSkill';

type BruteStats = Pick<Brute, 'skills' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'agilityStat' | 'agilityModifier' | 'speedStat' | 'speedModifier' | 'level'>;

export const getFinalEndurance = (
  brute: BruteStats,
  randomSkillIndex: number | null,
) => {
  const randomSkill = getTempSkill(brute, randomSkillIndex);

  // No random skill, return normal endurance
  if (!randomSkill) {
    return brute.enduranceValue;
  }

  // Skill does not affect endurance, return normal endurance
  if (randomSkill !== SkillName.vitality && randomSkill !== SkillName.immortality) {
    return brute.enduranceValue;
  }

  // Apply skill modifiers
  const newBrute = applySkillModifiers(brute, randomSkill);

  // Return new endurance
  return Math.floor(newBrute.enduranceStat * newBrute.enduranceModifier);
};

export const getFinalHP = (
  brute: BruteStats,
  randomSkillIndex: number | null,
) => {
  const randomSkill = getTempSkill(brute, randomSkillIndex);

  // No random skill, return normal HP
  if (!randomSkill) {
    return getHP(brute.level, brute.enduranceValue);
  }

  // Skill does not affect HP, return normal HP
  if (randomSkill !== SkillName.vitality && randomSkill !== SkillName.immortality) {
    return getHP(brute.level, brute.enduranceValue);
  }

  // Apply skill modifiers
  const newBrute = applySkillModifiers(brute, randomSkill);

  // Return new HP
  return getHP(newBrute.level, Math.floor(newBrute.enduranceStat * newBrute.enduranceModifier));
};
