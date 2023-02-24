-- Get Brutes without fights in a temporary variable
CREATE TEMPORARY TABLE "BruteToDelete" AS SELECT "id" FROM "Brute" WHERE "id" NOT IN (SELECT DISTINCT "brute1Id" FROM "Fight") AND "id" NOT IN (SELECT DISTINCT "brute2Id" FROM "Fight");

-- Delete every data related to the Brutes
DELETE FROM "BruteBody" WHERE "bruteId" IN (SELECT "id" FROM "BruteToDelete");
DELETE FROM "BruteColors" WHERE "bruteId" IN (SELECT "id" FROM "BruteToDelete");
DELETE FROM "BruteSpritesheet" WHERE "bruteId" IN (SELECT "id" FROM "BruteToDelete");
DELETE FROM "Log" WHERE "currentBruteId" IN (SELECT "id" FROM "BruteToDelete");
DELETE FROM "DestinyChoice" WHERE "bruteId" IN (SELECT "id" FROM "BruteToDelete");
DELETE FROM "Brute" WHERE "id" IN (SELECT "id" FROM "BruteToDelete");

-- Drop the temporary variable
DROP TABLE "BruteToDelete";