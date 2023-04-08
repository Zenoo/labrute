-- CreateEnum
CREATE TYPE "AchievementRarity" AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- CreateTable
CREATE TABLE "Achievement" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "illustration" VARCHAR(255),
    "rarity" "AchievementRarity" NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "bruteId" INTEGER,
    "userId" UUID NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
