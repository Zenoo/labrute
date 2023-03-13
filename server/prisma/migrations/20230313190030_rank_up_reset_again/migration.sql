-- Set `canRankUp` to true, `ranking` to 11 and `fightsLeft` + 6 for brutes with `ranking` < 11
UPDATE "Brute"
SET "canRankUp" = true, "ranking" = 11, "fightsLeft" = "fightsLeft" + 6
WHERE "ranking" < 11;