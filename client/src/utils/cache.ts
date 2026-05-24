import dayjs from "dayjs";

const rankingCache = new Map<string, number>();
let rankingCacheDate = dayjs.utc().startOf('day');

export const getCachedRanking = (bruteName: string): number | null => {
  // Clear cache if it's a new day
  if (!dayjs.utc().isSame(rankingCacheDate, 'day')) {
    rankingCache.clear();
    rankingCacheDate = dayjs.utc().startOf('day');
  }

  return rankingCache.get(bruteName) ?? null;
};

export const setCachedRanking = (bruteName: string, ranking: number): void => {
  rankingCache.set(bruteName, ranking);
};
