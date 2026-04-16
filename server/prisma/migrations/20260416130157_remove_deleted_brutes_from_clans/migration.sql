-- Remove deleted brutes from clan masters
UPDATE "Clan"
SET "masterId" = NULL
WHERE "masterId" IN (
  SELECT "id"
  FROM "Brute"
  WHERE "deletedAt" IS NOT NULL
);

-- Remove deleted brutes from clan members
UPDATE "Brute"
SET "clanId" = NULL
WHERE "deletedAt" IS NOT NULL;

-- Replace masters
UPDATE "Clan"
SET "masterId" = (
  SELECT "id"
  FROM "Brute"
  WHERE "clanId" = "Clan"."id"
    AND "deletedAt" IS NULL
  LIMIT 1
)
WHERE "masterId" IS NULL;

-- Delete empty clans
WITH empty_clans AS (
  SELECT "id", ROW_NUMBER() OVER () AS rn
  FROM "Clan"
  WHERE "masterId" IS NULL
)
UPDATE "Clan"
SET "deletedAt" = NOW() + (empty_clans.rn || ' seconds')::interval
FROM empty_clans
WHERE "Clan"."id" = empty_clans."id";
