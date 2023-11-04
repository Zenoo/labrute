/*
  Warnings:

  - A unique constraint covering the columns `[bruteId,reason,status]` on the table `BruteReport` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "BruteReport_bruteId_reason_key";

-- CreateIndex
CREATE UNIQUE INDEX "BruteReport_bruteId_reason_status_key" ON "BruteReport"("bruteId", "reason", "status");
