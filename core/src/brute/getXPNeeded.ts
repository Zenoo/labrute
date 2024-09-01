import { Brute } from '@labrute/prisma';

export const getXPNeeded = (level: number) => Math.floor(1.2 * level + 3);

export const getTotalXP = (brute: Pick<Brute, 'level' | 'xp'>) => {
  const recursive = (level: number, total: number): number => {
    if (level === 1) return total;
    const xpNeeded = getXPNeeded(level);
    return recursive(level - 1, total + xpNeeded);
  };

  return recursive(brute.level, brute.xp);
};
