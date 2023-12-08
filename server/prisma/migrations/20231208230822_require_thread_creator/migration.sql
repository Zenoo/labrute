/*
  Warnings:

  - Made the column `creatorId` on table `ClanThread` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ClanThread" DROP CONSTRAINT "ClanThread_creatorId_fkey";

-- AlterTable
ALTER TABLE "ClanThread" ALTER COLUMN "creatorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
