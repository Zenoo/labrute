-- AddForeignKey
ALTER TABLE "BruteRanking" ADD CONSTRAINT "BruteRanking_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
