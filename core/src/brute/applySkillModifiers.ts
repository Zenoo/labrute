import { Brute, SkillName } from '@labrute/prisma';
import { FightStat, SkillModifiers } from './skills';
import { TieredPerks } from '../types';

type BruteStats = Pick<TieredPerks, 'skills'> & Pick<Brute, 'enduranceStat' | 'enduranceModifier' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityStat' | 'agilityModifier' | 'agilityValue' | 'speedStat' | 'speedModifier' | 'speedValue'>;

export const applySkillModifiers = (brute: BruteStats, skillName: SkillName) => {
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
      brute[`${stat}Stat`] += modifier.flat[(brute.skills[skillName] ?? 1) - 1] ?? 0;
    }

    // Percent modifier
    if (modifier.percent) {
      brute[`${stat}Modifier`] *= 1 + (modifier.percent[(brute.skills[skillName] ?? 1) - 1] ?? 0);
    }

    // Update value
    if (stat !== FightStat.ENDURANCE) {
      brute[`${stat}Value`] = Math.floor(brute[`${stat}Stat`] * brute[`${stat}Modifier`]);
    }
  });
};
