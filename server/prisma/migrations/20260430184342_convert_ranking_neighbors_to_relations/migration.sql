-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "rankingsLowerLowerNeighbourId" UUID,
ADD COLUMN     "rankingsLowerNeighbourId" UUID,
ADD COLUMN     "rankingsNeighboursUpdatedAt" DATE,
ADD COLUMN     "rankingsUpperNeighbourId" UUID,
ADD COLUMN     "rankingsUpperUpperNeighbourId" UUID;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_rankingsUpperNeighbourId_fkey" FOREIGN KEY ("rankingsUpperNeighbourId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_rankingsUpperUpperNeighbourId_fkey" FOREIGN KEY ("rankingsUpperUpperNeighbourId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_rankingsLowerNeighbourId_fkey" FOREIGN KEY ("rankingsLowerNeighbourId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_rankingsLowerLowerNeighbourId_fkey" FOREIGN KEY ("rankingsLowerLowerNeighbourId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
