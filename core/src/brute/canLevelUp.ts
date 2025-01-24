import { Brute } from '@labrute/prisma';
import { getXPNeeded } from './getXPNeeded';

export const canLevelUp = (brute: Pick<Brute, 'level' | 'xp'>): boolean => brute.xp >= getXPNeeded(brute.level + 1);
