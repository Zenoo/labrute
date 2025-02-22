-- DropForeignKey
ALTER TABLE "BruteReport" DROP CONSTRAINT "BruteReport_bruteId_fkey";

-- AlterTable
ALTER TABLE "BruteReport" ALTER COLUMN "bruteId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
