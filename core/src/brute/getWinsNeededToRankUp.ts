import { Brute } from '@labrute/prisma';
import { BruteRankings } from '../constants';

export const getWinsNeededToRankUp = (
  brute: Pick<Brute, 'ranking'>
) => (brute.ranking === 0
  ? BruteRankings[0] + 1 - brute.ranking // TODO: take current ascensions count into account
  : BruteRankings[0] + 1 - brute.ranking
);
