-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "wantToJoinId" INTEGER;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_wantToJoinId_fkey" FOREIGN KEY ("wantToJoinId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
