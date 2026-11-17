import { Brute } from '@labrute/prisma';
import { getXPNeeded } from './getXPNeeded.js';

/** Bank enough XP for normal level-up choices, without removing any existing XP. */
export const getXPForTargetLevel = (brute: Pick<Brute, 'level' | 'xp'>, targetLevel: number) => {
  if (!Number.isSafeInteger(targetLevel) || targetLevel <= brute.level || targetLevel > 10000) {
    throw new Error('Target level must be an integer above the current level and at most 10000');
  }

  let required = 0;

  for (let level = brute.level + 1; level <= targetLevel; level += 1) {
    required += getXPNeeded(level);
  }

  return Math.max(brute.xp, required);
};
