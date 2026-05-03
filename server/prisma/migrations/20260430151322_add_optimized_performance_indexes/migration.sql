-- DropIndex
DROP INDEX "Clan_deletedAt_name_elo_idx";

-- DropIndex
DROP INDEX "Clan_deletedAt_name_points_idx";

-- CreateIndex
CREATE INDEX "Achievement_name_count_idx" ON "Achievement"("name", "count" DESC);

-- CreateIndex
CREATE INDEX "Brute_deletedAt_level_xp_idx" ON "Brute"("deletedAt", "level" DESC, "xp" DESC) WHERE ("deletedAt" IS NULL);

-- CreateIndex
CREATE INDEX "Brute_deletedAt_eventId_level_xp_idx" ON "Brute"("deletedAt", "eventId", "level" DESC, "xp" DESC) WHERE ("deletedAt" IS NULL AND "eventId" IS NOT NULL);

-- CreateIndex
CREATE INDEX "Brute_deletedAt_ascensions_level_xp_idx" ON "Brute"("deletedAt", "ascensions" DESC, "level" DESC, "xp" DESC) WHERE ("deletedAt" IS NULL);

-- CreateIndex
CREATE INDEX "Brute_deletedAt_level_idx" ON "Brute"("deletedAt", "level") WHERE ("deletedAt" IS NULL);

-- CreateIndex
CREATE INDEX "Clan_deletedAt_points_name_idx" ON "Clan"("deletedAt", "points" DESC, "name");

-- CreateIndex
CREATE INDEX "Clan_deletedAt_elo_name_idx" ON "Clan"("deletedAt", "elo" DESC, "name");

-- CreateIndex
CREATE INDEX "clan_name_trgm_gin" ON "Clan" USING GIN ("name" gin_trgm_ops);

-- RenameIndex
ALTER INDEX "Brute_name_gin_trgm_idx" RENAME TO "brute_name_trgm_gin";
