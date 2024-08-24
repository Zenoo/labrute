/*
  Warnings:

  - The values [WEEKLY_EVENT] on the enum `TournamentType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TournamentType_new" AS ENUM ('DAILY', 'GLOBAL', 'CUSTOM', 'BATTLE_ROYALE');
ALTER TABLE "Tournament" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Tournament" ALTER COLUMN "type" TYPE "TournamentType_new" USING ("type"::text::"TournamentType_new");
ALTER TYPE "TournamentType" RENAME TO "TournamentType_old";
ALTER TYPE "TournamentType_new" RENAME TO "TournamentType";
DROP TYPE "TournamentType_old";
ALTER TABLE "Tournament" ALTER COLUMN "type" SET DEFAULT 'DAILY';
COMMIT;
