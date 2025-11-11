import { Brute, FightModifier } from '@labrute/prisma';
import { applySkillModifiers } from './applySkillModifiers';
import { getHP } from './getHP';
import { getTempSkill } from './getTempSkill';
import { getScaledStat } from './scaledStat';
import { SkillModifiers } from './skills';

type BruteStats = Pick<Brute, 'id' | 'skills' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityValue' | 'agilityStat' | 'agilityModifier' | 'speedValue' | 'speedStat' | 'speedModifier' | 'level'>;

export const getFinalStat = (
  chaos: boolean,
  brute: BruteStats,
  stat: 'endurance' | 'strength' | 'agility' | 'speed',
  modifiers: FightModifier[],
  useCache = true,
) => {
  let newBrute: BruteStats = {
    ...brute,
  };

  if (chaos) {
    brute.skills
      .filter((skill) => SkillModifiers[skill][stat])
      .forEach((skillName) => {
        const modifier = SkillModifiers[skillName][stat];

        // Flat modifier
        if (modifier?.flat) {
          newBrute[`${stat}Stat`] -= modifier.flat;
          newBrute[`${stat}Stat`] += getScaledStat({
            chaos,
            skill: skillName,
            type: 'flat',
            stat,
            value: modifier.flat,
          });
        }

        // Percent modifier
        if (modifier?.percent) {
          newBrute[`${stat}Modifier`] /= 1 + modifier.percent;
          newBrute[`${stat}Modifier`] *= 1 + getScaledStat({
            chaos,
            skill: skillName,
            type: 'percent',
            stat,
            value: modifier.percent,
            precision: 2,
          });
        }
      });

    newBrute[`${stat}Value`] = Math.floor(newBrute[`${stat}Stat`] * newBrute[`${stat}Modifier`]);
  }

  const multiplier = stat === 'agility' ? modifiers.includes(FightModifier.doubleAgility) ? 2 : 1 : 1;
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
  chaos: boolean,
  brute: BruteStats,
  modifiers: FightModifier[],
  useCache = true,
) => {
  let newBrute: BruteStats = {
    ...brute,
  };

  if (chaos) {
    brute.skills
      .filter((skill) => SkillModifiers[skill].endurance)
      .forEach((skillName) => {
        const modifier = SkillModifiers[skillName].endurance;

        // Flat modifier
        if (modifier?.flat) {
          newBrute.enduranceStat -= modifier.flat;
          newBrute.enduranceStat += getScaledStat({
            chaos,
            skill: skillName,
            type: 'flat',
            stat: 'endurance',
            value: modifier.flat,
          });
        }

        // Percent modifier
        if (modifier?.percent) {
          newBrute.enduranceModifier /= 1 + modifier.percent;
          newBrute.enduranceModifier *= 1 + getScaledStat({
            chaos,
            skill: skillName,
            type: 'percent',
            stat: 'endurance',
            value: modifier.percent,
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
