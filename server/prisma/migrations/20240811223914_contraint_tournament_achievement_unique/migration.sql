/*
  Warnings:

  - A unique constraint covering the columns `[achievement,bruteId]` on the table `TournamentAchievement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TournamentAchievement_achievement_bruteId_key" ON "TournamentAchievement"("achievement", "bruteId");
