/*
  Warnings:

  - You are about to drop the `TournamentEarning` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TournamentEarning" DROP CONSTRAINT "TournamentEarning_bruteId_fkey";

-- DropTable
DROP TABLE "TournamentEarning";

-- CreateTable
CREATE TABLE "TournamentAchievement" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "achievement" "AchievementName" NOT NULL,
    "achievementCount" INTEGER NOT NULL,

    CONSTRAINT "TournamentAchievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentGold" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "userId" UUID NOT NULL,
    "gold" INTEGER NOT NULL,

    CONSTRAINT "TournamentGold_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TournamentXp" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,

    CONSTRAINT "TournamentXp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TournamentAchievement" ADD CONSTRAINT "TournamentAchievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentGold" ADD CONSTRAINT "TournamentGold_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentXp" ADD CONSTRAINT "TournamentXp_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
