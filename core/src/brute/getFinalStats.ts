import { Brute } from '@labrute/prisma';
import applySkillModifiers from './applySkillModifiers';
import { getHP } from './getHP';
import { getTempSkill } from './getTempSkill';

type BruteStats = Pick<Brute, 'skills' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityValue' | 'agilityStat' | 'agilityModifier' | 'speedValue' | 'speedStat' | 'speedModifier' | 'level'>;

export const getFinalStat = (
  brute: BruteStats,
  stat: 'endurance' | 'strength' | 'agility' | 'speed',
  randomSkillIndex: number | null,
) => {
  const randomSkill = getTempSkill(brute, randomSkillIndex);

  // No random skill, return normal stat
  if (!randomSkill) {
    return brute[`${stat}Value`];
  }

  // Apply skill modifiers
  const newBrute = applySkillModifiers(brute, randomSkill);

  // Return new stat
  return Math.floor(newBrute[`${stat}Stat`] * newBrute[`${stat}Modifier`]);
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

  // Apply skill modifiers
  const newBrute = applySkillModifiers(brute, randomSkill);

  // Return new HP
  return getHP(newBrute.level, Math.floor(newBrute.enduranceStat * newBrute.enduranceModifier));
};
