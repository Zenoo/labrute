-- CreateIndex
CREATE INDEX "Achievement_userId_idx" ON "Achievement"("userId");

-- CreateIndex
CREATE INDEX "BossDamage_bruteId_idx" ON "BossDamage"("bruteId");

-- CreateIndex
CREATE INDEX "Brute_userId_idx" ON "Brute"("userId");

-- CreateIndex
CREATE INDEX "Brute_clanId_idx" ON "Brute"("clanId");

-- CreateIndex
CREATE INDEX "Brute_wantToJoinClanId_idx" ON "Brute"("wantToJoinClanId");

-- CreateIndex
CREATE INDEX "Brute_eventId_idx" ON "Brute"("eventId");

-- CreateIndex
CREATE INDEX "BruteReport_handlerId_idx" ON "BruteReport"("handlerId");

-- CreateIndex
CREATE INDEX "BruteStartingStats_bruteId_idx" ON "BruteStartingStats"("bruteId");

-- CreateIndex
CREATE INDEX "Clan_masterId_idx" ON "Clan"("masterId");

-- CreateIndex
CREATE INDEX "ClanPost_threadId_idx" ON "ClanPost"("threadId");

-- CreateIndex
CREATE INDEX "ClanThread_clanId_idx" ON "ClanThread"("clanId");

-- CreateIndex
CREATE INDEX "ClanWar_attackerId_idx" ON "ClanWar"("attackerId");

-- CreateIndex
CREATE INDEX "ClanWar_defenderId_idx" ON "ClanWar"("defenderId");

-- CreateIndex
CREATE INDEX "ClanWar_winnerId_idx" ON "ClanWar"("winnerId");

-- CreateIndex
CREATE INDEX "ClanWarFighters_clanWarId_idx" ON "ClanWarFighters"("clanWarId");

-- CreateIndex
CREATE INDEX "InventoryItem_userId_idx" ON "InventoryItem"("userId");

-- CreateIndex
CREATE INDEX "Tournament_eventId_idx" ON "Tournament"("eventId");

-- CreateIndex
CREATE INDEX "TournamentAchievement_bruteId_idx" ON "TournamentAchievement"("bruteId");

-- CreateIndex
CREATE INDEX "TournamentGold_userId_idx" ON "TournamentGold"("userId");

-- CreateIndex
CREATE INDEX "UserLog_bruteId_idx" ON "UserLog"("bruteId");
