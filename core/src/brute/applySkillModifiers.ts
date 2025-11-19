import { Brute, SkillName } from '@labrute/prisma';
import { FightStat, SkillModifiers } from './skills';
import { TieredPerks } from '../types';

type BruteStats = Pick<TieredPerks, 'skills'> & Pick<Brute, 'enduranceStat' | 'enduranceModifier' | 'strengthStat' | 'strengthModifier' | 'strengthValue' | 'agilityStat' | 'agilityModifier' | 'agilityValue' | 'speedStat' | 'speedModifier' | 'speedValue'>;

export const applySkillModifiers = (
  brute: BruteStats,
  skillName: SkillName,
  skillTier = 1,
  removePreviousTier = true,
) => {
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
      // Remove previous tier modifier if applicable
      if (skillTier > 1 && removePreviousTier) {
        brute[`${stat}Stat`] -= modifier.flat[skillTier - 2] ?? 0;
      }
      brute[`${stat}Stat`] += modifier.flat[skillTier - 1] ?? 0;
    }

    // Percent modifier
    if (modifier.percent) {
      // Remove previous tier modifier if applicable
      if (skillTier > 1 && removePreviousTier) {
        brute[`${stat}Modifier`] /= 1 + (modifier.percent[skillTier - 2] ?? 0);
      }
      brute[`${stat}Modifier`] *= 1 + (modifier.percent[skillTier - 1] ?? 0);
    }

    // Update value
    if (stat !== FightStat.ENDURANCE) {
      brute[`${stat}Value`] = Math.floor(brute[`${stat}Stat`] * brute[`${stat}Modifier`]);
    }
  });
};
