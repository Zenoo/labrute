/*
  Warnings:

  - You are about to drop the column `description` on the `Achievement` table. All the data in the column will be lost.
  - You are about to drop the column `illustration` on the `Achievement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "description",
DROP COLUMN "illustration";
