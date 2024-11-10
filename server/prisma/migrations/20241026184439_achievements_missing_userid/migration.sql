UPDATE "Achievement" a
SET "userId" = b."userId"
FROM "Brute" b
WHERE a."bruteId" = b."id"
AND a."userId" IS NULL;
