import { Brute } from '@labrute/prisma';
import { BruteRankings } from '../constants';

export const getWinsNeededToRankUp = (
  brute: Pick<Brute, 'ranking'>
) => BruteRankings[0] + 1 - brute.ranking;
