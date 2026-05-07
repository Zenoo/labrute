/*
  Warnings:

  - The values [endurance] on the enum `BruteStat` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `enduranceModifier` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `enduranceStat` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `enduranceValue` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `hp` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `endurance` on the `BruteStartingStats` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
-- First, migrate DestinyChoice data where stat is 'endurance'
-- Scale stat1Value by 6 where stat1 is 'endurance'
UPDATE "DestinyChoice"
SET "stat1Value" = "stat1Value" * 6
WHERE "stat1" = 'endurance';

-- Scale stat2Value by 6 where stat2 is 'endurance'
UPDATE "DestinyChoice"
SET "stat2Value" = "stat2Value" * 6
WHERE "stat2" = 'endurance';

-- Now create new enum and convert the columns
CREATE TYPE "BruteStat_new" AS ENUM ('hp', 'strength', 'agility', 'speed');
ALTER TABLE "DestinyChoice" ALTER COLUMN "stat1" TYPE "BruteStat_new"
  USING (CASE WHEN "stat1"::text = 'endurance' THEN 'hp'::"BruteStat_new" ELSE "stat1"::text::"BruteStat_new" END);
ALTER TABLE "DestinyChoice" ALTER COLUMN "stat2" TYPE "BruteStat_new"
  USING (CASE WHEN "stat2"::text = 'endurance' THEN 'hp'::"BruteStat_new" ELSE "stat2"::text::"BruteStat_new" END);
ALTER TYPE "BruteStat" RENAME TO "BruteStat_old";
ALTER TYPE "BruteStat_new" RENAME TO "BruteStat";
DROP TYPE "public"."BruteStat_old";
COMMIT;

-- AlterTable
-- First, add new columns with nullable defaults
ALTER TABLE "Brute" ADD COLUMN "hpModifier" DOUBLE PRECISION,
ADD COLUMN "hpStat" INTEGER,
ADD COLUMN "hpValue" INTEGER;

-- Migrate data: hp = 50 + stat * modifier + level * 2
UPDATE "Brute" SET
  "hpStat" = COALESCE("enduranceStat", 0) * 6,
  "hpModifier" = COALESCE("enduranceModifier", 1),
  "hpValue" = 50 + COALESCE("enduranceStat", 0) * COALESCE("enduranceModifier", 1) * 6 + "level" * 2;

-- Set NOT NULL constraints with defaults
ALTER TABLE "Brute" ALTER COLUMN "hpModifier" SET NOT NULL,
ALTER COLUMN "hpModifier" SET DEFAULT 1,
ALTER COLUMN "hpStat" SET NOT NULL,
ALTER COLUMN "hpStat" SET DEFAULT 0,
ALTER COLUMN "hpValue" SET NOT NULL,
ALTER COLUMN "hpValue" SET DEFAULT 0;

-- Drop old columns
ALTER TABLE "Brute" DROP COLUMN "enduranceModifier",
DROP COLUMN "enduranceStat",
DROP COLUMN "enduranceValue",
DROP COLUMN "hp";

-- AlterTable
-- First, add new hp column
ALTER TABLE "BruteStartingStats" ADD COLUMN "hp" INTEGER;

-- Migrate data: endurance points * 6 = hp
UPDATE "BruteStartingStats" SET "hp" = COALESCE("endurance", 2) * 6;

-- Set NOT NULL constraint with default
ALTER TABLE "BruteStartingStats" ALTER COLUMN "hp" SET NOT NULL,
ALTER COLUMN "hp" SET DEFAULT 12;

-- Drop old column
ALTER TABLE "BruteStartingStats" DROP COLUMN "endurance";
