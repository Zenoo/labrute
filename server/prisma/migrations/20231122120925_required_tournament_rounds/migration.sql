/*
  Warnings:

  - Made the column `rounds` on table `Tournament` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tournament" ALTER COLUMN "rounds" SET NOT NULL;
