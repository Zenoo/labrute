-- Give a customization token per rank up
INSERT INTO "InventoryItem" ("type", "bruteId", "count")
(SELECT 'customizationToken', "id", 11 - "ranking"
FROM "Brute"
WHERE "ranking" < 11
AND "deletedAt" IS NULL)
ON CONFLICT ("type", "bruteId") DO UPDATE
SET count = EXCLUDED.count;
