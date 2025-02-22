-- DropForeignKey
ALTER TABLE "DestinyChoice" DROP CONSTRAINT "DestinyChoice_bruteId_fkey";

-- AddForeignKey
ALTER TABLE "DestinyChoice" ADD CONSTRAINT "DestinyChoice_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
