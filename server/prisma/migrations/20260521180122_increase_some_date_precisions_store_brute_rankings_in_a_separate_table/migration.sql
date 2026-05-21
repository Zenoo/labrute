/*
  Warnings:

  - You are about to drop the column `rankingsLowerLowerNeighbourId` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `rankingsLowerNeighbourId` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `rankingsNeighboursUpdatedAt` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `rankingsUpperNeighbourId` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `rankingsUpperUpperNeighbourId` on the `Brute` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_rankingsLowerLowerNeighbourId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_rankingsLowerNeighbourId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_rankingsUpperNeighbourId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_rankingsUpperUpperNeighbourId_fkey";

-- DropIndex
DROP INDEX "Brute_rankingsLowerLowerNeighbourId_idx";

-- DropIndex
DROP INDEX "Brute_rankingsLowerNeighbourId_idx";

-- DropIndex
DROP INDEX "Brute_rankingsUpperNeighbourId_idx";

-- DropIndex
DROP INDEX "Brute_rankingsUpperUpperNeighbourId_idx";

-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "rankingsLowerLowerNeighbourId",
DROP COLUMN "rankingsLowerNeighbourId",
DROP COLUMN "rankingsNeighboursUpdatedAt",
DROP COLUMN "rankingsUpperNeighbourId",
DROP COLUMN "rankingsUpperUpperNeighbourId";

-- AlterTable
ALTER TABLE "BruteReport" ALTER COLUMN "date" SET DATA TYPE TIMESTAMP;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "bannedAt" SET DATA TYPE TIMESTAMP,
ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP;

-- CreateTable
CREATE TABLE "DailyBruteRanking" (
    "date" DATE NOT NULL,
    "rank" INTEGER NOT NULL,
    "bruteId" UUID NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "DailyBruteRanking_pkey" PRIMARY KEY ("rank","position")
);

-- CreateIndex
CREATE INDEX "DailyBruteRanking_date_position_idx" ON "DailyBruteRanking"("date", "position");

-- AddForeignKey
ALTER TABLE "DailyBruteRanking" ADD CONSTRAINT "DailyBruteRanking_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
