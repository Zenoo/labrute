-- DropIndex
DROP INDEX "BruteReport_status_idx";

-- CreateIndex
CREATE INDEX "BruteReport_status_count_idx" ON "BruteReport"("status", "count");

-- CreateIndex
CREATE INDEX "BruteReport_status_handledAt_idx" ON "BruteReport"("status", "handledAt");
