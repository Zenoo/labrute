import { Brute } from '@labrute/prisma';
import { BruteRankings } from '../constants';

export const getWinsNeededToRankUp = (
  brute: Pick<Brute, 'ranking' | 'ascendedSkills' | 'ascendedWeapons' | 'ascendedPets'>
) => {
  const regularRequirement = BruteRankings[0] + 1 - brute.ranking;

  if (brute.ranking > 0) {
    // rankUp
    return regularRequirement;
  }

  // ascend
  const ascensions = brute.ascendedSkills.length
  + brute.ascendedWeapons.length
  + brute.ascendedPets.length;

  return regularRequirement + ascensions;
};
