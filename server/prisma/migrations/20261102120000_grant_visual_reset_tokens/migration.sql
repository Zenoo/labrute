-- Grant one additional visual reset token after the appearance update.
INSERT INTO "InventoryItem" ("type", "bruteId", "count")
SELECT 'visualReset', "id", 1
FROM "Brute"
WHERE "deletedAt" IS NULL
ON CONFLICT ("type", "bruteId") DO UPDATE
SET "count" = "InventoryItem"."count" + EXCLUDED."count";
