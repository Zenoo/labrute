/*
  Warnings:

  - A unique constraint covering the columns `[clanId]` on the table `BossDamage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clanId` to the `BossDamage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BossDamage" ADD COLUMN     "clanId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "BossDamage_clanId_key" ON "BossDamage"("clanId");

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
