/*
  Warnings:

  - The values [accepted,rejected] on the enum `ClanWarStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ClanWarStatus_new" AS ENUM ('pending', 'ongoing', 'waitingForRewards', 'finished');
ALTER TABLE "ClanWar" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "ClanWar" ALTER COLUMN "status" TYPE "ClanWarStatus_new" USING ("status"::text::"ClanWarStatus_new");
ALTER TYPE "ClanWarStatus" RENAME TO "ClanWarStatus_old";
ALTER TYPE "ClanWarStatus_new" RENAME TO "ClanWarStatus";
DROP TYPE "ClanWarStatus_old";
ALTER TABLE "ClanWar" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;
