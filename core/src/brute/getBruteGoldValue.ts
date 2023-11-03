import { Brute } from '@labrute/prisma';
import { BruteRankings, NEW_BRUTE_BASE_COST } from '../constants';

const getPointsFromLevel = (level: number) => {
  if (level < 10) return 0;
  if (level < 20) return NEW_BRUTE_BASE_COST / 5;
  if (level < 30) return NEW_BRUTE_BASE_COST * 0.4;
  if (level < 40) return NEW_BRUTE_BASE_COST / 2;
  if (level < 50) return NEW_BRUTE_BASE_COST * 0.7;
  return Math.floor((level - 50) / 10) * 100 + NEW_BRUTE_BASE_COST;
};

const getBruteGoldValue = (brute: Brute) => {
  const rankPoints = (BruteRankings[0] - brute.ranking) * NEW_BRUTE_BASE_COST;
  const levelPoints = getPointsFromLevel(brute.level);

  return rankPoints + levelPoints;
};

export default getBruteGoldValue;