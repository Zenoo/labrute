/*
  Warnings:

  - You are about to drop the column `wantToJoinId` on the `Brute` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_wantToJoinId_fkey";

-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "wantToJoinId",
ADD COLUMN     "wantToJoinClanId" INTEGER;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_wantToJoinClanId_fkey" FOREIGN KEY ("wantToJoinClanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
