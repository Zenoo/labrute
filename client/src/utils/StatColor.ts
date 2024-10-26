import { FightStat } from '@labrute/core';

const agilityColor = '#8686ff';
const speedColor = '#eb9800';

const StatColor: Record<FightStat, string> = {
  [FightStat.REVERSAL]: '#8fbc8f',
  [FightStat.COUNTER]: '#8a4520',
  [FightStat.EVASION]: agilityColor,
  [FightStat.DEXTERITY]: '#ffb6c1',
  [FightStat.BLOCK]: '#808080',
  [FightStat.ACCURACY]: agilityColor,
  [FightStat.DISARM]: '#ff70ff',
  [FightStat.COMBO]: agilityColor,
  [FightStat.DEFLECT]: '#ff4500',
  [FightStat.ARMOR]: '#008080',
  [FightStat.HIT_SPEED]: '#800080',
  [FightStat.INITIATIVE]: '#f08080',
  [FightStat.STRENGTH]: 'red',
  [FightStat.AGILITY]: agilityColor,
  [FightStat.SPEED]: speedColor,
  [FightStat.ENDURANCE]: '#17a717',
  [FightStat.DAMAGE]: 'red',
};

export const PerkColor = {
  Random: '#8686ff',
  Ascended: '#ff9400',
} as const;

export default StatColor;
