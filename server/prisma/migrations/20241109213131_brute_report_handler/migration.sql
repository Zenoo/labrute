-- AlterTable
ALTER TABLE "BruteReport" ADD COLUMN     "handlerId" UUID;

-- AddForeignKey
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_handlerId_fkey" FOREIGN KEY ("handlerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
