/*
  Warnings:

  - The values [survive] on the enum `LogType` will be removed. If these variants are still used in the database, this will fail.

*/

-- Replace 'survive' with 'win'
UPDATE "Log" SET "type" = 'win' WHERE "type" = 'survive';

-- AlterEnum
BEGIN;
CREATE TYPE "LogType_new" AS ENUM ('win', 'lose', 'child', 'childup', 'up', 'lvl', 'tournament', 'tournamentXp', 'bossDefeat');
ALTER TABLE "Log" ALTER COLUMN "type" TYPE "LogType_new" USING ("type"::text::"LogType_new");
ALTER TYPE "LogType" RENAME TO "LogType_old";
ALTER TYPE "LogType_new" RENAME TO "LogType";
DROP TYPE "LogType_old";
COMMIT;
