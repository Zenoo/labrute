-- CreateIndex
CREATE INDEX "Brute_masterId_idx" ON "Brute"("masterId");

-- CreateIndex
CREATE INDEX "BruteReport_bruteId_idx" ON "BruteReport"("bruteId");

-- CreateIndex
CREATE INDEX "ClanPost_authorId_idx" ON "ClanPost"("authorId");

-- CreateIndex
CREATE INDEX "ClanThread_creatorId_idx" ON "ClanThread"("creatorId");

-- CreateIndex
CREATE INDEX "Event_winnerId_idx" ON "Event"("winnerId");

-- CreateIndex
CREATE INDEX "Fight_brute1Id_idx" ON "Fight"("brute1Id");

-- CreateIndex
CREATE INDEX "Fight_brute2Id_idx" ON "Fight"("brute2Id");

-- CreateIndex
CREATE INDEX "TournamentXp_bruteId_idx" ON "TournamentXp"("bruteId");
