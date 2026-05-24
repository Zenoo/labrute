/*
  Warnings:

  - You are about to drop the column `rankingPosition` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `rankingPositionUpdatedAt` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the `DailyBruteRanking` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DailyBruteRanking" DROP CONSTRAINT "DailyBruteRanking_bruteId_fkey";

-- DropIndex
DROP INDEX "Brute_rankingPosition_idx";

-- DropIndex
DROP INDEX "User_createdAt_idx";

-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "rankingPosition",
DROP COLUMN "rankingPositionUpdatedAt";

-- AlterTable
ALTER TABLE "ServerState" ADD COLUMN     "bruteRankingsUpdatedAt" DATE;

-- DropTable
DROP TABLE "DailyBruteRanking";

-- CreateTable
CREATE TABLE "BruteRanking" (
    "bruteId" UUID NOT NULL,
    "ranking" INTEGER NOT NULL,
    "position" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "BruteRanking_ranking_position_idx" ON "BruteRanking"("ranking", "position");

-- CreateIndex
CREATE UNIQUE INDEX "BruteRanking_bruteId_key" ON "BruteRanking"("bruteId");

-- CreateIndex
CREATE INDEX "User_lastSeen_idx" ON "User"("lastSeen");
