/*
  Warnings:

  - You are about to drop the column `bruteId` on the `Log` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_bruteId_fkey";

-- AlterTable
ALTER TABLE "Log" DROP COLUMN "bruteId",
ADD COLUMN     "brute" VARCHAR(255);
