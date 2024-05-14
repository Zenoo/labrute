/*
  Warnings:

  - Made the column `tournamentStep` on table `Fight` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Fight" ALTER COLUMN "tournamentStep" SET NOT NULL,
ALTER COLUMN "tournamentStep" SET DEFAULT 0;
