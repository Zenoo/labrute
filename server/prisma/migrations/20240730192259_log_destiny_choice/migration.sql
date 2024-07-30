/*
  Warnings:

  - You are about to drop the column `logId` on the `DestinyChoice` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Log_destinyChoiceId_key";

-- AlterTable
ALTER TABLE "DestinyChoice" DROP COLUMN "logId";
