-- AlterTable
ALTER TABLE "Fight" ADD COLUMN     "tournamentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;
