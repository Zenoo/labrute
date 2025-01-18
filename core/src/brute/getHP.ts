import { Brute } from '@labrute/prisma';

// If endurance is negative, use 0 instead to not go under 51 HP
export const getHP = (level: number, endurance: number) => Math.floor(
  50
  + (
    Math.max(endurance, 0)
    + level * 0.25
  ) * 6,
);

export const readableHPFormula = (
  level: string | number,
  endurance: string | number,
) => `50 + (max(${endurance}, 0) + ${level} * 0.25) * 6`;

export const convertEnduranceToHP = (brute: Pick<Brute, 'enduranceModifier'>, endurance: number) => Math.floor(
  brute.enduranceModifier * endurance * 6,
);
