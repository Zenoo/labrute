-- Older batch deletions could leave an active clan owned by a deleted brute.
-- Preserve clan history, but retire clans that have no surviving members.
UPDATE "Clan" AS clan
SET "deletedAt" = CURRENT_TIMESTAMP,
    "masterId" = NULL
WHERE clan."deletedAt" IS NULL
  AND NOT EXISTS (
    SELECT 1
    FROM "Brute" AS brute
    WHERE brute."clanId" = clan.id
      AND brute."deletedAt" IS NULL
  );
