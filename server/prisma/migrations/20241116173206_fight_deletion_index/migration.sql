-- CreateIndex
CREATE INDEX "Fight_clanWarId_tournamentId_date_idx" ON "Fight"("clanWarId", "tournamentId", "date");
