import { PrismaClient } from '@labrute/prisma';
import dayjs from 'dayjs';
import { traced } from '../trace.js';

type RollupGranularity = 'monthly' | 'yearly' | 'allTime';

export const computeDailyStats = async (
  prisma: PrismaClient,
) => {
  const targetDate = dayjs.utc().subtract(1, 'day').startOf('day').toDate();
  const monthDate = dayjs.utc(targetDate).startOf('month').toDate();
  const yearDate = dayjs.utc(targetDate).startOf('year').toDate();
  const allTimeDate = dayjs.utc('9999-12-31').startOf('day').toDate();
  const todayStart = dayjs.utc().startOf('day').toDate();

  const runRollupForGranularity = async (granularity: RollupGranularity, rollupDate: Date) => {
    const [status] = await traced(`dailyStats.checkUpdated.${granularity}`, () => prisma.$queryRaw<{
      userUpdated: boolean;
      bruteUpdated: boolean;
      levelUpUpdated: boolean;
      bruteLevelUpUpdated: boolean;
    }[]>`
      SELECT
        EXISTS(
          SELECT 1
          FROM "UserStats"
          WHERE granularity = ${granularity}::"StatsGranularity"
            AND "updatedAt" >= ${todayStart}::timestamp
        ) AS "userUpdated",
        EXISTS(
          SELECT 1
          FROM "BruteStats"
          WHERE granularity = ${granularity}::"StatsGranularity"
            AND "updatedAt" >= ${todayStart}::timestamp
        ) AS "bruteUpdated",
        EXISTS(
          SELECT 1
          FROM "UserLevelUpStat"
          WHERE granularity = ${granularity}::"StatsGranularity"
            AND "updatedAt" >= ${todayStart}::timestamp
        ) AS "levelUpUpdated",
        EXISTS(
          SELECT 1
          FROM "BruteLevelUpStat"
          WHERE granularity = ${granularity}::"StatsGranularity"
            AND "updatedAt" >= ${todayStart}::timestamp
        ) AS "bruteLevelUpUpdated";
    `);

    if (status?.userUpdated
      && status?.bruteUpdated
      && status?.levelUpUpdated
      && status?.bruteLevelUpUpdated) {
      return;
    }

    await traced(`dailyStats.rollup.${granularity}`, () => prisma.$transaction([
      prisma.$executeRaw`
        INSERT INTO "BruteStats"(
          date,
          day,
          granularity,
          "bruteId",
          fights,
          wins,
          losses,
          "xpGained",
          "tournamentFights",
          "clanWarFights"
        )
        SELECT
          ${rollupDate}::date AS date,
          EXTRACT(DOW FROM ${rollupDate}::date)::int AS day,
          ${granularity}::"StatsGranularity" AS granularity,
          d."bruteId",
          SUM(d.fights)::int AS fights,
          SUM(d.wins)::int AS wins,
          SUM(d.losses)::int AS losses,
          SUM(d."xpGained")::int AS "xpGained",
          SUM(d."tournamentFights")::int AS "tournamentFights",
          SUM(d."clanWarFights")::int AS "clanWarFights"
        FROM "BruteStats" d
        WHERE d.granularity = 'daily'::"StatsGranularity"
          AND d.date = ${targetDate}::date
        GROUP BY d."bruteId"
        ON CONFLICT (date, granularity, "bruteId") DO UPDATE
        SET
          fights = "BruteStats".fights + EXCLUDED.fights,
          wins = "BruteStats".wins + EXCLUDED.wins,
          losses = "BruteStats".losses + EXCLUDED.losses,
          "xpGained" = "BruteStats"."xpGained" + EXCLUDED."xpGained",
          "tournamentFights" = "BruteStats"."tournamentFights" + EXCLUDED."tournamentFights",
          "clanWarFights" = "BruteStats"."clanWarFights" + EXCLUDED."clanWarFights",
          "updatedAt" = NOW();
      `,
      prisma.$executeRaw`
        INSERT INTO "UserStats"(
          date,
          day,
          granularity,
          "userId",
          fights,
          wins,
          losses,
          "xpGained",
          "goldWon",
          "goldLost",
          "tournamentFights",
          "clanWarFights",
          "connectedDays"
        )
        SELECT
          ${rollupDate}::date AS date,
          EXTRACT(DOW FROM ${rollupDate}::date)::int AS day,
          ${granularity}::"StatsGranularity" AS granularity,
          d."userId",
          SUM(d.fights)::int AS fights,
          SUM(d.wins)::int AS wins,
          SUM(d.losses)::int AS losses,
          SUM(d."xpGained")::int AS "xpGained",
          SUM(d."goldWon")::int AS "goldWon",
          SUM(d."goldLost")::int AS "goldLost",
          SUM(d."tournamentFights")::int AS "tournamentFights",
          SUM(d."clanWarFights")::int AS "clanWarFights",
          SUM(d."connectedDays")::int AS "connectedDays"
        FROM "UserStats" d
        WHERE d.granularity = 'daily'::"StatsGranularity"
          AND d.date = ${targetDate}::date
        GROUP BY d."userId"
        ON CONFLICT (date, granularity, "userId") DO UPDATE
        SET
          fights = "UserStats".fights + EXCLUDED.fights,
          wins = "UserStats".wins + EXCLUDED.wins,
          losses = "UserStats".losses + EXCLUDED.losses,
          "xpGained" = "UserStats"."xpGained" + EXCLUDED."xpGained",
          "goldWon" = "UserStats"."goldWon" + EXCLUDED."goldWon",
          "goldLost" = "UserStats"."goldLost" + EXCLUDED."goldLost",
          "tournamentFights" = "UserStats"."tournamentFights" + EXCLUDED."tournamentFights",
          "clanWarFights" = "UserStats"."clanWarFights" + EXCLUDED."clanWarFights",
          "connectedDays" = "UserStats"."connectedDays" + EXCLUDED."connectedDays",
          "updatedAt" = NOW();
      `,
      prisma.$executeRaw`
        INSERT INTO "BruteLevelUpStat"(
          date,
          day,
          granularity,
          "bruteId",
          "choiceType",
          choice,
          offered,
          picked
        )
        SELECT
          ${rollupDate}::date AS date,
          EXTRACT(DOW FROM ${rollupDate}::date)::int AS day,
          ${granularity}::"StatsGranularity" AS granularity,
          d."bruteId",
          d."choiceType",
          d.choice,
          SUM(d.offered)::int AS offered,
          SUM(d.picked)::int AS picked
        FROM "BruteLevelUpStat" d
        WHERE d.granularity = 'daily'::"StatsGranularity"
          AND d.date = ${targetDate}::date
        GROUP BY d."bruteId", d."choiceType", d.choice
        ON CONFLICT (date, granularity, "bruteId", "choiceType", choice) DO UPDATE
        SET
          offered = "BruteLevelUpStat".offered + EXCLUDED.offered,
          picked = "BruteLevelUpStat".picked + EXCLUDED.picked,
          "updatedAt" = NOW();
      `,
      prisma.$executeRaw`
        INSERT INTO "UserLevelUpStat"(
          date,
          day,
          granularity,
          "userId",
          "choiceType",
          choice,
          offered,
          picked
        )
        SELECT
          ${rollupDate}::date AS date,
          EXTRACT(DOW FROM ${rollupDate}::date)::int AS day,
          ${granularity}::"StatsGranularity" AS granularity,
          d."userId",
          d."choiceType",
          d.choice,
          SUM(d.offered)::int AS offered,
          SUM(d.picked)::int AS picked
        FROM "UserLevelUpStat" d
        WHERE d.granularity = 'daily'::"StatsGranularity"
          AND d.date = ${targetDate}::date
        GROUP BY d."userId", d."choiceType", d.choice
        ON CONFLICT (date, granularity, "userId", "choiceType", choice) DO UPDATE
        SET
          offered = "UserLevelUpStat".offered + EXCLUDED.offered,
          picked = "UserLevelUpStat".picked + EXCLUDED.picked,
          "updatedAt" = NOW();
      `,
    ]));
  };

  await runRollupForGranularity('monthly', monthDate);
  await runRollupForGranularity('yearly', yearDate);
  await runRollupForGranularity('allTime', allTimeDate);
};
