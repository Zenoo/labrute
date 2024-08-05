-- DropIndex
DROP INDEX "Clan_name_points_idx";

-- AlterTable
ALTER TABLE "Clan" ADD COLUMN     "deletedAt" TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "ClanWar" ALTER COLUMN "status" SET DEFAULT 'ongoing';

-- CreateIndex
CREATE INDEX "Clan_deletedAt_name_points_idx" ON "Clan"("deletedAt", "name", "points");
