-- Set Brute.tournamentWins to 1 where 0 and canRankUpSince is not null
UPDATE "Brute" SET "tournamentWins" = 12 - "ranking" WHERE "tournamentWins" = 0 AND "canRankUpSince" IS NOT NULL;
