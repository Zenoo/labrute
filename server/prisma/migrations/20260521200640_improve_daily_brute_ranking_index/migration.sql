-- DropIndex
DROP INDEX "DailyBruteRanking_date_position_idx";

-- CreateIndex
CREATE INDEX "DailyBruteRanking_date_rank_position_idx" ON "DailyBruteRanking"("date", "rank", "position");
