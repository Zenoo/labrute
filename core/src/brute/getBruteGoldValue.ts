import { Brute } from '@labrute/prisma';
import { BruteRankings, NEW_BRUTE_BASE_COST } from '../constants';

export const getBruteGoldValueFromLevel = (level: number) => {
  if (level < 10) return 0;
  if (level < 20) return NEW_BRUTE_BASE_COST / 5;
  if (level < 30) return NEW_BRUTE_BASE_COST * 0.4;
  if (level < 40) return NEW_BRUTE_BASE_COST / 2;
  if (level < 50) return NEW_BRUTE_BASE_COST * 0.7;
  return Math.floor((level - 50) / 10) * 100 + NEW_BRUTE_BASE_COST;
};

export const getBruteGoldValueFromRanking = (
  ranking: number
) => (BruteRankings[0] - ranking) * NEW_BRUTE_BASE_COST;

export const getBruteGoldValue = (brute: Pick<Brute, 'level' | 'ranking' | 'eventId'>) => {
  if (brute.eventId) return 0;

  const rankPoints = getBruteGoldValueFromRanking(brute.ranking);
  const levelPoints = getBruteGoldValueFromLevel(brute.level);

  return rankPoints + levelPoints;
};
