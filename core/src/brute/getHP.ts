import { Brute } from '@labrute/prisma';

export const getHP = (level: number, hpStat: number, hpModifier: number) => Math.floor(
  50
  + hpStat * hpModifier
  + level * 2,
);

export const getBruteHP = (brute: Pick<Brute, 'level' | 'hpStat' | 'hpModifier'>) => getHP(brute.level, brute.hpStat, brute.hpModifier);

export const readableHPFormula = (
  level: string | number,
  hpStat: string | number,
  hpModifier: string | number,
) => `50 + (${hpStat} * ${hpModifier}) + ${level} * 2`;
