import { Brute } from '@labrute/prisma';
import { BruteRankings } from '../constants';

export const getWinsNeededToRankUp = (
  brute: Pick<Brute, 'ranking' | 'ascensions'>
) => {
  const regularRequirement = BruteRankings[0] + 1 - brute.ranking;

  if (brute.ranking > 0) {
    // rankUp
    return regularRequirement;
  }

  // ascend
  return regularRequirement + brute.ascensions;
};
