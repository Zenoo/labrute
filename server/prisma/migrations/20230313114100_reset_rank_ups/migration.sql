-- Set `canRankUp` to true and `ranking` to 11 for brutes with `ranking` < 11
UPDATE "Brute"
SET "canRankUp" = true, "ranking" = 11
WHERE "ranking" < 11;