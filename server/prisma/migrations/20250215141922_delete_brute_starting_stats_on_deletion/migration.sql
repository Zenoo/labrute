-- DropForeignKey
ALTER TABLE "BruteStartingStats" DROP CONSTRAINT "BruteStartingStats_bruteId_fkey";

-- AddForeignKey
ALTER TABLE "BruteStartingStats" ADD CONSTRAINT "BruteStartingStats_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
