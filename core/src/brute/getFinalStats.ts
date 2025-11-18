import { Brute, FightModifier } from '@labrute/prisma';
import { applySkillModifiers } from './applySkillModifiers';
import { getHP } from './getHP';
import { getTempSkill } from './getTempSkill';
import { getScaledStat } from './scaledStat';
import { SkillModifiers } from './skills';
import { getTieredSkills } from './tieredPerks';
import { entries } from '../utils';
import { Modifiers } from '../types';

type BruteStats = Pick<Brute, 'id' | 'skills' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityValue' | 'agilityStat' | 'agilityModifier' | 'speedValue' | 'speedStat' | 'speedModifier' | 'level'>;

export const getFinalStat = (
  brute: BruteStats,
  stat: 'endurance' | 'strength' | 'agility' | 'speed',
  modifiers: Modifiers,
  useCache = true,
) => {
  let newBrute: BruteStats = {
    ...brute,
  };

  if (modifiers[FightModifier.chaos]) {
    entries(getTieredSkills(brute, undefined, (skill) => !!SkillModifiers[skill][stat]))
      .forEach(([skillName, tier]) => {
        const modifier = SkillModifiers[skillName][stat];

        // Flat modifier
        if (modifier?.flat) {
          newBrute[`${stat}Stat`] -= modifier.flat[tier - 1] ?? 0;
          newBrute[`${stat}Stat`] += getScaledStat({
            chaos: true,
            skill: skillName,
            type: 'flat',
            stat,
            value: modifier.flat[tier - 1] ?? 0,
          });
        }

        // Percent modifier
        if (modifier?.percent) {
          newBrute[`${stat}Modifier`] /= 1 + (modifier.percent[tier - 1] ?? 0);
          newBrute[`${stat}Modifier`] *= 1 + getScaledStat({
            chaos: true,
            skill: skillName,
            type: 'percent',
            stat,
            value: modifier.percent[tier - 1] ?? 0,
            precision: 2,
          });
        }
      });

    newBrute[`${stat}Value`] = Math.floor(newBrute[`${stat}Stat`] * newBrute[`${stat}Modifier`]);
  }

  const multiplier = stat === 'agility' ? modifiers[FightModifier.doubleAgility] ? 2 : 1 : 1;
  const randomSkill = getTempSkill(newBrute, modifiers, useCache);

  // No random skill, return normal stat
  if (!randomSkill) {
    return newBrute[`${stat}Value`] * multiplier;
  }

  // Apply skill modifiers
  newBrute = applySkillModifiers(newBrute, randomSkill);

  // Return new stat
  return Math.floor(newBrute[`${stat}Stat`] * newBrute[`${stat}Modifier`]) * multiplier;
};

export const getFinalHP = (
  brute: BruteStats,
  modifiers: Modifiers,
  useCache = true,
) => {
  let newBrute: BruteStats = {
    ...brute,
  };

  if (modifiers[FightModifier.chaos]) {
    entries(getTieredSkills(brute, undefined, (skill) => !!SkillModifiers[skill].endurance))
      .forEach(([skillName, tier]) => {
        const modifier = SkillModifiers[skillName].endurance;

        // Flat modifier
        if (modifier?.flat) {
          newBrute.enduranceStat -= modifier.flat[tier - 1] ?? 0;
          newBrute.enduranceStat += getScaledStat({
            chaos: true,
            skill: skillName,
            type: 'flat',
            stat: 'endurance',
            value: modifier.flat[tier - 1] ?? 0,
          });
        }

        // Percent modifier
        if (modifier?.percent) {
          newBrute.enduranceModifier /= 1 + (modifier.percent[tier - 1] ?? 0);
          newBrute.enduranceModifier *= 1 + getScaledStat({
            chaos: true,
            skill: skillName,
            type: 'percent',
            stat: 'endurance',
            value: modifier.percent[tier - 1] ?? 0,
            precision: 2,
          });
        }
      });

    newBrute.enduranceValue = Math.floor(newBrute.enduranceStat * newBrute.enduranceModifier);
  }

  const randomSkill = getTempSkill(newBrute, modifiers, useCache);

  // No random skill, return normal HP
  if (!randomSkill) {
    return getHP(newBrute.level, newBrute.enduranceValue);
  }

  // Apply skill modifiers
  newBrute = applySkillModifiers(newBrute, randomSkill);

  // Return new HP
  return getHP(newBrute.level, Math.floor(newBrute.enduranceStat * newBrute.enduranceModifier));
};
