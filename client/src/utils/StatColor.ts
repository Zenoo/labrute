import { FightStat } from '@labrute/core';

const StatColor: Record<FightStat, string> = {
  [FightStat.REVERSAL]: '#8fbc8f',
  [FightStat.COUNTER]: '#daa520',
  [FightStat.EVASION]: '#17a717',
  [FightStat.SWIFTNESS]: '#ffb6c1',
  [FightStat.BLOCK]: '#8686ff',
  [FightStat.ACCURACY]: '#808080',
  [FightStat.DISARM]: '#ff70ff',
  [FightStat.COMBO]: 'orange',
  [FightStat.DEFLECT]: '#ff4500',
  [FightStat.ARMOR]: '#008080',
  [FightStat.HIT_SPEED]: '#800080',
  [FightStat.INITIATIVE]: '#f08080',
  [FightStat.STRENGTH]: 'red',
  [FightStat.AGILITY]: '#8686ff',
  [FightStat.SPEED]: '#eb9800',
  [FightStat.ENDURANCE]: '#17a717',
  [FightStat.DAMAGE]: 'red',
} as const;

export default StatColor;
