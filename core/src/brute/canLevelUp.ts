import { Brute } from '@labrute/prisma';
import getXPNeeded from './getXPNeeded';

const canLevelUp = (brute: Pick<Brute, 'level' | 'xp'>): boolean => brute.xp >= getXPNeeded(brute.level + 1);

export default canLevelUp;
