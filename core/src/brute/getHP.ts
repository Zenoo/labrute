import { Brute } from '@labrute/prisma';

export const getBruteHP = (brute: Pick<Brute, 'level' | 'hpStat' | 'hpModifier'>) => Math.floor(
  50
  + brute.hpStat * brute.hpModifier
  + brute.level * 2,
);

export const readableHPFormula = (
  level: string | number,
  hpStat: string | number,
  hpModifier: string | number,
) => `50 + (${hpStat} * ${hpModifier}) + ${level} * 2`;
