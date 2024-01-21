-- CreateIndex
CREATE INDEX "Clan_name_points_idx" ON "Clan"("name", "points");

-- CreateIndex
CREATE INDEX "Tournament_type_date_idx" ON "Tournament"("type", "date");
