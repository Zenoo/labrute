-- Populate brute stats

WITH "BruteStatsTargets" AS (
  SELECT "bruteId"
  FROM "BruteStats"
  WHERE "granularity" = 'allTime'
),
"FightPairs" AS (
  SELECT "brute1Id" AS "bruteId", "tournamentId", "clanWarId"
  FROM "Fight"
  WHERE "brute1Id" IS NOT NULL
    AND ("tournamentId" IS NOT NULL OR "clanWarId" IS NOT NULL)

  UNION ALL

  SELECT "brute2Id" AS "bruteId", "tournamentId", "clanWarId"
  FROM "Fight"
  WHERE "brute2Id" IS NOT NULL
    AND ("tournamentId" IS NOT NULL OR "clanWarId" IS NOT NULL)
),
"FightAgg" AS (
  SELECT
    fp."bruteId",
    COUNT(*) FILTER (WHERE fp."tournamentId" IS NOT NULL) AS "tournamentFights",
    COUNT(*) FILTER (WHERE fp."clanWarId" IS NOT NULL) AS "clanWarFights"
  FROM "FightPairs" fp
  JOIN "BruteStatsTargets" t ON t."bruteId" = fp."bruteId"
  GROUP BY fp."bruteId"
),
"BossAgg" AS (
  SELECT
    bd."bruteId",
    COALESCE(SUM(bd."damage"), 0) AS "clanBossDamage",
    COUNT(*) AS "clanBossFights"
  FROM "BossDamage" bd
  JOIN "BruteStatsTargets" t ON t."bruteId" = bd."bruteId"
  GROUP BY bd."bruteId"
)
UPDATE "BruteStats" bs
SET
  "tournamentFights" = COALESCE(fa."tournamentFights", 0),
  -- This does not catch brutes only held in the fighters json
  -- but it's better than nothing
  "clanWarFights" = COALESCE(fa."clanWarFights", 0),
  "clanBossDamage" = COALESCE(ba."clanBossDamage", 0),
  "clanBossFights" = COALESCE(ba."clanBossFights", 0)
FROM "BruteStatsTargets" t
LEFT JOIN "FightAgg" fa ON fa."bruteId" = t."bruteId"
LEFT JOIN "BossAgg" ba ON ba."bruteId" = t."bruteId"
WHERE bs."granularity" = 'allTime'
  AND bs."bruteId" = t."bruteId";

-- Populate user stats (sum of all their brutes stats)

WITH "BruteStatsSum" AS (
  SELECT
    b."userId",
    SUM(bs."tournamentFights") AS "tournamentFights",
    SUM(bs."clanWarFights") AS "clanWarFights",
    SUM(bs."clanBossDamage") AS "clanBossDamage",
    SUM(bs."clanBossFights") AS "clanBossFights"
  FROM "Brute" b
  JOIN "BruteStats" bs ON bs."bruteId" = b.id AND bs."granularity" = 'allTime'
  WHERE b."deletedAt" IS NULL
  GROUP BY b."userId"
)
UPDATE "UserStats"
SET
  "tournamentFights" = COALESCE(bs."tournamentFights", 0),
  "clanWarFights" = COALESCE(bs."clanWarFights", 0),
  "clanBossDamage" = COALESCE(bs."clanBossDamage", 0),
  "clanBossFights" = COALESCE(bs."clanBossFights", 0)
FROM "BruteStatsSum" bs
WHERE "UserStats"."userId" = bs."userId"
  AND "UserStats"."granularity" = 'allTime';

-- Populate UserStats daily from UserLog with CONNECT/GOLD_WIN/GOLD_LOSS/CREATE_BRUTE

WITH "UserLogAgg" AS (
  SELECT
    "userId",
    DATE("date") AS "date",
    CASE WHEN COUNT(*) FILTER (WHERE "type" = 'CONNECT') > 0 THEN 1 ELSE 0 END AS "connectedDays",
    SUM("gold") FILTER (WHERE "type" = 'GOLD_WIN') AS "goldWon",
    SUM("gold") FILTER (WHERE "type" = 'GOLD_LOSS') AS "goldLost",
    COUNT(*) FILTER (WHERE "type" = 'CREATE_BRUTE') AS "createdBrutes"
  FROM "UserLog"
  WHERE "type" IN ('CONNECT', 'GOLD_WIN', 'GOLD_LOSS', 'CREATE_BRUTE')
  GROUP BY "userId", DATE("date")
)
INSERT INTO "UserStats" ("userId", "granularity", "date", "connectedDays", "goldWon", "goldLost", "createdBrutes")
SELECT
  "userId",
  'daily' AS "granularity",
  "date",
  "connectedDays",
  COALESCE("goldWon", 0),
  COALESCE("goldLost", 0),
  COALESCE("createdBrutes", 0)
FROM "UserLogAgg"
ON CONFLICT ("userId", "granularity", "date") DO UPDATE
SET
  "connectedDays" = EXCLUDED."connectedDays",
  "goldWon" = EXCLUDED."goldWon",
  "goldLost" = EXCLUDED."goldLost",
  "createdBrutes" = EXCLUDED."createdBrutes";

-- Rollup daily stats into monthly stats (sum of daily stats for each month)

WITH "UserStatsDaily" AS (
  SELECT
    "userId",
    DATE_TRUNC('month', "date") AS "month",
    SUM("connectedDays") AS "connectedDays",
    SUM("goldWon") AS "goldWon",
    SUM("goldLost") AS "goldLost",
    SUM("createdBrutes") AS "createdBrutes"
  FROM "UserStats"
  WHERE "granularity" = 'daily'
  GROUP BY "userId", DATE_TRUNC('month', "date")
)
INSERT INTO "UserStats" ("userId", "granularity", "date", "connectedDays", "goldWon", "goldLost", "createdBrutes")
SELECT
  "userId",
  'monthly' AS "granularity",
  "month" AS "date",
  COALESCE("connectedDays", 0),
  COALESCE("goldWon", 0),
  COALESCE("goldLost", 0),
  COALESCE("createdBrutes", 0)
FROM "UserStatsDaily"
ON CONFLICT ("userId", "granularity", "date") DO UPDATE
SET
  "connectedDays" = EXCLUDED."connectedDays",
  "goldWon" = EXCLUDED."goldWon",
  "goldLost" = EXCLUDED."goldLost",
  "createdBrutes" = EXCLUDED."createdBrutes";

-- Rollup monthly stats into yearly stats (sum of monthly stats for each year)

WITH "UserStatsMonthly" AS (
  SELECT
    "userId",
    DATE_TRUNC('year', "date") AS "year",
    SUM("connectedDays") AS "connectedDays",
    SUM("goldWon") AS "goldWon",
    SUM("goldLost") AS "goldLost",
    SUM("createdBrutes") AS "createdBrutes"
  FROM "UserStats"
  WHERE "granularity" = 'monthly'
  GROUP BY "userId", DATE_TRUNC('year', "date")
)
INSERT INTO "UserStats" ("userId", "granularity", "date", "connectedDays", "goldWon", "goldLost", "createdBrutes")
SELECT
  "userId",
  'yearly' AS "granularity",
  "year" AS "date",
  COALESCE("connectedDays", 0),
  COALESCE("goldWon", 0),
  COALESCE("goldLost", 0),
  COALESCE("createdBrutes", 0)
FROM "UserStatsMonthly"
ON CONFLICT ("userId", "granularity", "date") DO UPDATE
SET
  "connectedDays" = EXCLUDED."connectedDays",
  "goldWon" = EXCLUDED."goldWon",
  "goldLost" = EXCLUDED."goldLost",
  "createdBrutes" = EXCLUDED."createdBrutes";
