/*
  Warnings:

  - You are about to drop the column `deleted` on the `Brute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "deleted",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3);
