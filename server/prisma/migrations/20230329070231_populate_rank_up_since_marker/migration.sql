-- Update Brute.canRankUpsince to now where canRankUp = true
UPDATE "Brute" SET "canRankUpSince" = now() WHERE "canRankUp" = true;