-- CreateTable
CREATE TABLE "TournamentEarning" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "points" INTEGER,
    "achievement" "AchievementName",
    "achievementCount" INTEGER,

    CONSTRAINT "TournamentEarning_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TournamentEarning" ADD CONSTRAINT "TournamentEarning_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
