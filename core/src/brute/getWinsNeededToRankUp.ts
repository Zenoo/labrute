import { Brute } from '@labrute/prisma';
import { BruteRankings } from '../constants';

export const getWinsNeededToRankUp = (
  brute: Pick<Brute, 'ranking' | 'ascendedSkills'>
) => (brute.ranking === 0
  ? BruteRankings[0] + 1 - brute.ranking + brute.ascendedSkills.length // TODO: check if this is ok
  : BruteRankings[0] + 1 - brute.ranking
);
