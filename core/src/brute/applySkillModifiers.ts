import { Brute, SkillName } from '@labrute/prisma';
import { FightStat, SkillModifiers } from './skills';

type BruteStats = Pick<Brute, 'skills' | 'enduranceStat' | 'enduranceModifier' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityStat' | 'agilityModifier' | 'agilityValue' | 'speedStat' | 'speedModifier' | 'speedValue'>;

export const applySkillModifiers = <T extends BruteStats>(brute: T, skillName: SkillName) => {
  const updatedBrute = { ...brute };
  const tieredSkills: Partial<Record<SkillName, number>> = {};

  for (const skill of brute.skills) {
    tieredSkills[skill] = tieredSkills[skill] ? tieredSkills[skill] + 1 : 1;
  }

  Object.entries(SkillModifiers[skillName]).forEach(([unsafeStat, modifier]) => {
    const stat = unsafeStat as FightStat;

    // Ignore every stat but endurance, strength, agility, and speed
    if (stat !== FightStat.ENDURANCE
      && stat !== FightStat.STRENGTH
      && stat !== FightStat.AGILITY
      && stat !== FightStat.SPEED) {
      return;
    }

    // Flat modifier
    if (modifier.flat) {
      updatedBrute[`${stat}Stat`] += modifier.flat[(tieredSkills[skillName] ?? 1) - 1] ?? 0;
    }

    // Percent modifier
    if (modifier.percent) {
      updatedBrute[`${stat}Modifier`] *= 1 + (modifier.percent[(tieredSkills[skillName] ?? 1) - 1] ?? 0);
    }

    // Update value
    if (stat !== FightStat.ENDURANCE) {
      updatedBrute[`${stat}Value`] = Math.floor(updatedBrute[`${stat}Stat`] * updatedBrute[`${stat}Modifier`]);
    }
  });

  return updatedBrute;
};
