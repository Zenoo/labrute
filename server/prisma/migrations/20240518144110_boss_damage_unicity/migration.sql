/*
  Warnings:

  - A unique constraint covering the columns `[bruteId,clanId]` on the table `BossDamage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BossDamage_bruteId_clanId_key" ON "BossDamage"("bruteId", "clanId");
