-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "canRankUpSince" DATE;

-- AlterTable
ALTER TABLE "TournamentStep" ADD COLUMN     "xpDistributed" BOOLEAN NOT NULL DEFAULT false;
