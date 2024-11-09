import { Brute, SkillName } from '@labrute/prisma';
import { FightStat, SkillModifiers } from './skills';

type BruteStats = Pick<Brute, 'enduranceStat' | 'enduranceModifier' | 'strengthStat' | 'strengthModifier' | 'agilityStat' | 'agilityModifier' | 'speedStat' | 'speedModifier'>;

const applySkillModifiers = <T extends BruteStats>(brute: T, skill: SkillName) => {
  const updatedBrute = { ...brute };

  Object.entries(SkillModifiers[skill]).forEach(([unsafeStat, modifier]) => {
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
      updatedBrute[`${stat}Stat`] += modifier.flat;
    }

    // Percent modifier
    if (modifier.percent) {
      updatedBrute[`${stat}Modifier`] *= 1 + modifier.percent;
    }
  });

  return updatedBrute;
};

export default applySkillModifiers;
