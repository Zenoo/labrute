-- Remove sacrificed brutes from clans
UPDATE "Brute" SET "clanId" = NULL WHERE "clanId" IS NOT NULL AND "deletedAt" IS NOT NULL;