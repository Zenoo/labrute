/*
  Warnings:

  - You are about to drop the `Title` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BruteToTitle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_currentBruteId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentAchievement" DROP CONSTRAINT "TournamentAchievement_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentXp" DROP CONSTRAINT "TournamentXp_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTitle" DROP CONSTRAINT "_BruteToTitle_A_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTitle" DROP CONSTRAINT "_BruteToTitle_B_fkey";

-- AlterTable
ALTER TABLE "BruteReport" ADD COLUMN     "bruteName" VARCHAR(255) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Title";

-- DropTable
DROP TABLE "_BruteToTitle";

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_currentBruteId_fkey" FOREIGN KEY ("currentBruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentAchievement" ADD CONSTRAINT "TournamentAchievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentXp" ADD CONSTRAINT "TournamentXp_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
