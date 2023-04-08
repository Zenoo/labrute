/* eslint-disable no-param-reassign */
import { AchievementName, AchievementRarity } from '@labrute/prisma';

export const RarityOrder = [
  AchievementRarity.common,
  AchievementRarity.uncommon,
  AchievementRarity.rare,
  AchievementRarity.epic,
  AchievementRarity.legendary,
];

export const AchievementRarities: Record<AchievementName, AchievementRarity> = {
  fightsWon: AchievementRarity.common,
  fightsLost: AchievementRarity.common,
  saboteurUsed: AchievementRarity.common,
};

export const AchievementIllustrations: Record<AchievementName, string> = {
  fightsWon: '',
  fightsLost: '',
  saboteurUsed: '',
};

export type AchievementsStore = {
  bruteId?: number;
  achievements: Partial<Record<AchievementName, number>>;
}[];

export const uppdateAchievement = (
  store: AchievementsStore,
  name: AchievementName,
  count: number,
  bruteId?: number,
) => {
  const current = store.find(
    (s) => s.bruteId === bruteId,
  );

  if (current) {
    const previousCount = current.achievements[name] || 0;

    current.achievements[name] = previousCount + count;
  } else {
    store.push({
      bruteId,
      achievements: {
        [name]: count,
      }
    });
  }
};