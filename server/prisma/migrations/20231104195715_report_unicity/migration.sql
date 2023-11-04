/*
  Warnings:

  - A unique constraint covering the columns `[bruteId,reason]` on the table `BruteReport` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BruteReport_bruteId_reason_key" ON "BruteReport"("bruteId", "reason");
