-- CreateEnum
CREATE TYPE "StatsGranularity" AS ENUM ('daily', 'monthly', 'yearly', 'allTime');

-- CreateTable
CREATE TABLE "UserStats" (
    "date" DATE NOT NULL,
    "day" INTEGER NOT NULL DEFAULT 0,
    "granularity" "StatsGranularity" NOT NULL,
    "userId" UUID NOT NULL,
    "fights" INTEGER NOT NULL DEFAULT 0,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "xpGained" INTEGER NOT NULL DEFAULT 0,
    "tournamentFights" INTEGER NOT NULL DEFAULT 0,
    "clanWarFights" INTEGER NOT NULL DEFAULT 0,
    "clanBossDamage" INTEGER NOT NULL DEFAULT 0,
    "clanBossFights" INTEGER NOT NULL DEFAULT 0,
    "goldWon" INTEGER NOT NULL DEFAULT 0,
    "goldLost" INTEGER NOT NULL DEFAULT 0,
    "connectedDays" INTEGER NOT NULL DEFAULT 0,
    "createdBrutes" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserStats_pkey" PRIMARY KEY ("date","granularity","userId")
);

-- CreateTable
CREATE TABLE "BruteStats" (
    "date" DATE NOT NULL,
    "day" INTEGER NOT NULL DEFAULT 0,
    "granularity" "StatsGranularity" NOT NULL,
    "bruteId" UUID NOT NULL,
    "fights" INTEGER NOT NULL DEFAULT 0,
    "wins" INTEGER NOT NULL DEFAULT 0,
    "losses" INTEGER NOT NULL DEFAULT 0,
    "xpGained" INTEGER NOT NULL DEFAULT 0,
    "tournamentFights" INTEGER NOT NULL DEFAULT 0,
    "clanWarFights" INTEGER NOT NULL DEFAULT 0,
    "clanBossDamage" INTEGER NOT NULL DEFAULT 0,
    "clanBossFights" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BruteStats_pkey" PRIMARY KEY ("date","granularity","bruteId")
);

-- CreateTable
CREATE TABLE "UserLevelUpStat" (
    "date" DATE NOT NULL,
    "day" INTEGER NOT NULL DEFAULT 0,
    "granularity" "StatsGranularity" NOT NULL,
    "userId" UUID NOT NULL,
    "choiceType" "DestinyChoiceType" NOT NULL,
    "choice" VARCHAR(50) NOT NULL,
    "offered" INTEGER NOT NULL DEFAULT 0,
    "picked" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserLevelUpStat_pkey" PRIMARY KEY ("date","granularity","userId","choiceType","choice")
);

-- CreateTable
CREATE TABLE "BruteLevelUpStat" (
    "date" DATE NOT NULL,
    "day" INTEGER NOT NULL DEFAULT 0,
    "granularity" "StatsGranularity" NOT NULL,
    "bruteId" UUID NOT NULL,
    "choiceType" "DestinyChoiceType" NOT NULL,
    "choice" VARCHAR(50) NOT NULL,
    "offered" INTEGER NOT NULL DEFAULT 0,
    "picked" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BruteLevelUpStat_pkey" PRIMARY KEY ("date","granularity","bruteId","choiceType","choice")
);

-- CreateIndex
CREATE INDEX "UserStats_granularity_date_userId_idx" ON "UserStats"("granularity", "date" DESC, "userId");

-- CreateIndex
CREATE INDEX "UserStats_userId_granularity_date_idx" ON "UserStats"("userId", "granularity", "date" DESC);

-- CreateIndex
CREATE INDEX "BruteStats_granularity_date_bruteId_idx" ON "BruteStats"("granularity", "date" DESC, "bruteId");

-- CreateIndex
CREATE INDEX "BruteStats_bruteId_granularity_date_idx" ON "BruteStats"("bruteId", "granularity", "date" DESC);

-- CreateIndex
CREATE INDEX "UserLevelUpStat_userId_granularity_date_idx" ON "UserLevelUpStat"("userId", "granularity", "date" DESC);

-- CreateIndex
CREATE INDEX "UserLevelUpStat_granularity_date_userId_idx" ON "UserLevelUpStat"("granularity", "date" DESC, "userId");

-- CreateIndex
CREATE INDEX "UserLevelUpStat_choiceType_choice_granularity_date_idx" ON "UserLevelUpStat"("choiceType", "choice", "granularity", "date" DESC);

-- CreateIndex
CREATE INDEX "BruteLevelUpStat_bruteId_granularity_date_idx" ON "BruteLevelUpStat"("bruteId", "granularity", "date" DESC);

-- CreateIndex
CREATE INDEX "BruteLevelUpStat_granularity_date_bruteId_idx" ON "BruteLevelUpStat"("granularity", "date" DESC, "bruteId");

-- CreateIndex
CREATE INDEX "BruteLevelUpStat_choiceType_choice_granularity_date_idx" ON "BruteLevelUpStat"("choiceType", "choice", "granularity", "date" DESC);

-- AddForeignKey
ALTER TABLE "UserStats" ADD CONSTRAINT "UserStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteStats" ADD CONSTRAINT "BruteStats_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLevelUpStat" ADD CONSTRAINT "UserLevelUpStat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteLevelUpStat" ADD CONSTRAINT "BruteLevelUpStat_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- Populate with existing data

-- Iterate over all non deleted brutes to upsert allTime stats
INSERT INTO "BruteStats" (
  date,
  day,
  granularity,
  "bruteId",
  "fights",
  "wins",
  "losses",
  "xpGained"
)
SELECT
  '9999-12-31'::date AS "date",
  EXTRACT(DOW FROM '9999-12-31'::date)::int AS "day",
  'allTime' AS "granularity",
  b.id AS "bruteId",
  b.victories + b.losses AS "fights",
  b.victories AS "wins",
  b.losses AS "losses",
  b.xp AS "xpGained"
FROM "Brute" b
WHERE b."deletedAt" IS NULL;


-- Iterate over all non banned users to upsert allTime stats
-- with the sum of all their brutes stats
INSERT INTO "UserStats" (
  date,
  day,
  granularity,
  "userId",
  "fights",
  "wins",
  "losses",
  "xpGained",
  "goldWon",
  "createdBrutes"
)
SELECT
  '9999-12-31'::date AS "date",
  EXTRACT(DOW FROM '9999-12-31'::date)::int AS "day",
  'allTime' AS "granularity",
  u.id AS "userId",
  COALESCE(SUM(b.victories + b.losses), 0) AS "fights",
  COALESCE(SUM(b.victories), 0) AS "wins",
  COALESCE(SUM(b.losses), 0) AS "losses",
  COALESCE(SUM(b.xp), 0) AS "xpGained",
  u.gold AS "goldWon",
  COALESCE(COUNT(b.id), 0) AS "createdBrutes"
FROM "User" u
LEFT JOIN "Brute" b ON b."userId" = u.id AND b."deletedAt" IS NULL
WHERE u."bannedAt" IS NULL
GROUP BY u.id;
