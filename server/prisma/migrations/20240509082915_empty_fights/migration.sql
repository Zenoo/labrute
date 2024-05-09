-- Empty TournamentStep
TRUNCATE TABLE "TournamentStep";

-- Empty Tournament
TRUNCATE TABLE "Tournament";

-- Remove fight logs
DELETE FROM "Log" WHERE "fightId" IS NOT NULL;

-- Empty Fight
TRUNCATE TABLE "Fight";

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
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute1Id_fkey" FOREIGN KEY ("brute1Id") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute2Id_fkey" FOREIGN KEY ("brute2Id") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentStep" ADD CONSTRAINT "TournamentStep_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentStep" ADD CONSTRAINT "TournamentStep_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
