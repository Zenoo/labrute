-- CreateIndex
CREATE INDEX "Brute_deletedAt_eventId_ranking_idx" ON "Brute"("deletedAt", "eventId", "ranking");
