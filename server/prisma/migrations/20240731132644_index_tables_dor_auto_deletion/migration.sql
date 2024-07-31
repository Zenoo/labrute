-- CreateIndex
CREATE INDEX "Fight_date_tournamentId_id_idx" ON "Fight"("date", "tournamentId", "id");

-- CreateIndex
CREATE INDEX "Log_date_idx" ON "Log"("date");
