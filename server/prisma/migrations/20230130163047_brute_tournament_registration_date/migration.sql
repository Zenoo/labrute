-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "nextTournamentDate" DATE;
UPDATE "Brute" SET "nextTournamentDate" = now()::date + interval '1 day' WHERE "registeredForTournament" = TRUE;
