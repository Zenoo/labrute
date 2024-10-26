-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "eventTournamentRoundWatched" INTEGER,
ADD COLUMN     "eventTournamentWatchedDate" DATE;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lastReleaseSeen" TEXT;
