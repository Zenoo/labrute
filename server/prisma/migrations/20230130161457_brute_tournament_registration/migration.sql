/*
  Warnings:

  - You are about to drop the column `tournament` on the `Brute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brute" ADD COLUMN "registeredForTournament" BOOLEAN NOT NULL DEFAULT false;
UPDATE "Brute" SET "registeredForTournament" = TRUE WHERE "tournament" = now()::date + interval '24h';
ALTER TABLE "Brute" DROP COLUMN "tournament";
