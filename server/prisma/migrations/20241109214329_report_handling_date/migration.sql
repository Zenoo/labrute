-- AlterTable
ALTER TABLE "BruteReport" ADD COLUMN     "handledAt" TIMESTAMPTZ;

-- CreateIndex
CREATE INDEX "BruteReport_status_idx" ON "BruteReport"("status");
