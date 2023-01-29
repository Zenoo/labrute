-- CreateEnum
CREATE TYPE "TournamentType" AS ENUM ('DAILY', 'CUSTOM');

-- CreateTable
CREATE TABLE "Tournament" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "type" "TournamentType" NOT NULL DEFAULT 'DAILY',

    CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentStep" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "step" INTEGER NOT NULL,
    "fightId" INTEGER NOT NULL,

    CONSTRAINT "TournamentStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BruteToTournament" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BruteToTournament_AB_unique" ON "_BruteToTournament"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteToTournament_B_index" ON "_BruteToTournament"("B");

-- AddForeignKey
ALTER TABLE "TournamentStep" ADD CONSTRAINT "TournamentStep_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentStep" ADD CONSTRAINT "TournamentStep_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
