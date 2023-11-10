-- Update gender
UPDATE "BruteSpritesheet"
SET "gender" = "Brute"."gender"
FROM "Brute"
WHERE "BruteSpritesheet"."bruteId" = "Brute"."id";