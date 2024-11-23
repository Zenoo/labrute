-- DropIndex
DROP INDEX "Fight_clanWarId_tournamentId_date_idx";

-- AlterTable
ALTER TABLE "Fight" ADD COLUMN     "favoriteCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Fight_clanWarId_tournamentId_favoriteCount_date_idx" ON "Fight"("clanWarId", "tournamentId", "favoriteCount", "date");

-- Populate with data from FavoriteFight
UPDATE "Fight" SET "favoriteCount" = (SELECT COUNT(*) FROM "_FavoriteFights" WHERE "_FavoriteFights"."A" = "Fight"."id");
