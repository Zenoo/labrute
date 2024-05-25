/*
  Warnings:

  - You are about to drop the `TournamentStep` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TournamentStep" DROP CONSTRAINT "TournamentStep_fightId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentStep" DROP CONSTRAINT "TournamentStep_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Fight" ADD COLUMN     "tournamentStep" INTEGER;

-- DropTable
DROP TABLE "TournamentStep";

-- Empty Tournament
TRUNCATE TABLE "Tournament" CASCADE;
