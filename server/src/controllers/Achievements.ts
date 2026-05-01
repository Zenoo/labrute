import {
  AchievementData,
  AchievementGetRankingsResponse,
  AchievementsGetResponse,
  BaseTitleRequirements,
  ExpectedError,
  MissingElementError, RaretyOrder,
} from '@labrute/core';
import { AchievementName, PrismaClient } from '@labrute/prisma';
import type { Request, Response } from 'express';
import { ilike } from '../utils/ilike.js';
import { sendError } from '../utils/sendError.js';
import { traced } from '../utils/trace.js';
import { translate } from '../utils/translate.js';

// In-memory cache for achievement rankings (calculated daily)
let cachedRankingsByBrute: AchievementGetRankingsResponse | null = null;
let cachedRankingsByUser: AchievementGetRankingsResponse | null = null;

export const increaseAchievement = async (
  prisma: PrismaClient,
  userId: string,
  bruteId: string | null,
  name: AchievementName,
) => {
  const current = await traced('achievements.increaseAchievement.getCurrent', () => prisma.achievement.findFirst({
    where: {
      bruteId,
      userId,
      name,
    },
    select: { id: true, count: true },
  }));

  if (current) {
    // Check if achievement is already maxed
    const maxCount = AchievementData[name].perBrute;

    // Do not increase if maxed
    if (maxCount && current.count >= maxCount) {
      return;
    }

    await traced('achievements.increaseAchievement.updateAchievement', () => prisma.achievement.update({
      where: {
        id: current.id,
      },
      data: {
        count: Math.min(current.count + 1, maxCount || Infinity),
      },
      select: { id: true },
    }));
  } else {
    await traced('achievements.increaseAchievement.createAchievement', () => prisma.achievement.create({
      data: {
        bruteId,
        userId,
        name,
        count: 1,
      },
      select: { id: true },
    }));

    if (bruteId) {
      // Check if brute has unlocked all unlockable achievements
      const count = await traced('achievements.increaseAchievement.countAchievements', () => prisma.achievement.count({
        where: {
          bruteId,
          name: {
            // Filter out beta and bug achievements
            notIn: [AchievementName.beta, AchievementName.bug],
          },
        },
      }));

      if (count >= Object.keys(AchievementData).length - 3) {
        // Check if brute has already unlocked the achievement
        const existing = await traced('achievements.increaseAchievement.getExistingAllAchievements', () => prisma.achievement.findFirst({
          where: {
            bruteId,
            name: AchievementName.allAchievements,
          },
          select: { id: true },
        }));

        if (!existing) {
          await traced('achievements.increaseAchievement.createAllAchievements', () => prisma.achievement.create({
            data: {
              bruteId,
              userId,
              name: AchievementName.allAchievements,
              count: 1,
            },
            select: { id: true },
          }));
        }
      }
    }
  }
};

/**
 * Calculate and cache achievement rankings (should be called daily)
 */
export const calculateAchievementRankings = async (prisma: PrismaClient) => {
  // Calculate rankings by brute
  const top3ByBrute: {
    name: AchievementName;
    bruteId: string | null;
    count: number;
    bruteName: string | null;
  }[] = await traced('achievements.calculateRankings.getTop3ByBrute', () => prisma.$queryRaw`
    SELECT a.name, a."bruteId", a.count, a."bruteName"
    FROM (
      SELECT ach.name, ach."bruteId", ach.count, b.name AS "bruteName",
        ROW_NUMBER() OVER (PARTITION BY ach.name ORDER BY ach.count DESC) AS row_number
      FROM "Achievement" ach
      INNER JOIN "Brute" b ON ach."bruteId" = b.id AND b."deletedAt" IS NULL
    ) AS a
    WHERE a.row_number <= 3
  `);

  cachedRankingsByBrute = top3ByBrute.filter((t) => t.bruteId).map((t) => ({
    name: t.name,
    user: null,
    brute: {
      name: t.bruteName || '',
      id: t.bruteId || '',
    },
    count: t.count,
  }));

  // Calculate rankings by user
  const top3ByUser: {
    name: AchievementName;
    userId: string | null;
    count: number;
    userName: string | null;
  }[] = await traced('achievements.calculateRankings.getTop3ByUser', () => prisma.$queryRaw`
    SELECT a.name, "userId", count, u.name as "userName"
    FROM (
        SELECT *,
            ROW_NUMBER() OVER ( PARTITION BY name ORDER BY count DESC ) as rank
        FROM (
            SELECT name,
                "userId",
                CASE
                    WHEN name = 'maxDamage' THEN MAX(count)
                    WHEN name = 'maxLevel' THEN MAX(count)
                    ELSE SUM(count)
                END as count
            FROM "Achievement"
        WHERE "userId" IS NOT NULL
            GROUP BY name, "userId"
        )
    ) AS a
    LEFT JOIN "User" u ON "userId" = u.id
    WHERE
        rank <= 3
    ORDER BY name ASC, rank ASC;
  `);

  cachedRankingsByUser = top3ByUser.filter((t) => t.userId).map((t) => ({
    name: t.name,
    user: {
      name: t.userName || '',
      id: t.userId || '',
    },
    brute: null,
    count: Number(t.count),
  }));
};

export const Achievements = {
  getForUser: (prisma: PrismaClient) => async (
    req: Request<never, unknown, { userId: string }>,
    res: Response<AchievementsGetResponse>,
  ) => {
    try {
      if (!req.body.userId) throw new MissingElementError('Missing user id');

      // Get achievements
      const achievements = await traced('achievements.getForUser.getAchievements', () => prisma.achievement.findMany({
        where: {
          userId: req.body.userId,
        },
        select: {
          name: true,
          count: true,
        },
      }));

      // Merge achievements with same name
      const mergedAchievements = achievements.reduce((acc, achievement) => {
        const existingAchievement = acc.find((a) => a.name === achievement.name);
        if (existingAchievement) {
          // Display the highest count for some achievements
          if (AchievementData[achievement.name].max) {
            existingAchievement.count = Math.max(
              existingAchievement.count,
              achievement.count,
            );
          } else {
            existingAchievement.count += achievement.count;
          }
        } else {
          acc.push(achievement);
        }
        return acc;
      }, [] as typeof achievements);

      // Order by rarety then count
      mergedAchievements.sort((a, b) => {
        const aRarety = RaretyOrder.indexOf(AchievementData[a.name].rarety);
        const bRarety = RaretyOrder.indexOf(AchievementData[b.name].rarety);
        if (aRarety < bRarety) return 1;
        if (aRarety > bRarety) return -1;
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
      });

      res.status(200).send(mergedAchievements);
    } catch (error) {
      sendError(res, error);
    }
  },
  getForBrute: (prisma: PrismaClient) => async (
    req: Request,
    res: Response<AchievementsGetResponse>,
  ) => {
    try {
      if (!req.params.name) throw new MissingElementError('Missing brute name');

      // Get achievements
      const achievements = await traced('achievements.getForBrute.getAchievements', () => prisma.achievement.findMany({
        where: {
          brute: {
            deletedAt: null,
            name: ilike(req.params.name),
          },
        },
        select: {
          name: true,
          count: true,
        },
      }));

      // Order by rarety then count
      achievements.sort((a, b) => {
        const aRarety = RaretyOrder.indexOf(AchievementData[a.name].rarety);
        const bRarety = RaretyOrder.indexOf(AchievementData[b.name].rarety);
        if (aRarety < bRarety) return 1;
        if (aRarety > bRarety) return -1;
        if (a.count > b.count) return -1;
        if (a.count < b.count) return 1;
        return 0;
      });

      res.status(200).send(achievements);
    } catch (error) {
      sendError(res, error);
    }
  },
  generateTitlesCSV: (_req: Request, res: Response) => {
    try {
      const csvLines = [
        'name,count,title',
      ];

      Object.entries(AchievementData).forEach(([name, achievement]) => {
        csvLines.push(...BaseTitleRequirements[achievement.rarety].map((count) => `${name},${count},`));
      });

      res.header('Content-Type', 'text/csv')
        .header('Content-Disposition', 'attachment; filename="titles.csv"')
        .send(csvLines.join('\n'));
    } catch (error) {
      sendError(res, error);
    }
  },
  getRankings: (
    req: Request,
    res: Response<AchievementGetRankingsResponse>,
  ) => {
    try {
      const byUser = req.query.byUser === 'true';

      // Use cached rankings if available
      if (byUser && cachedRankingsByUser) {
        res.status(200).send(cachedRankingsByUser);
        return;
      }

      if (!byUser && cachedRankingsByBrute) {
        res.status(200).send(cachedRankingsByBrute);
        return;
      }

      // Rankings not ready yet, wait
      throw new ExpectedError(translate('rankingsNotReady'));
    } catch (error) {
      sendError(res, error);
    }
  },
};
