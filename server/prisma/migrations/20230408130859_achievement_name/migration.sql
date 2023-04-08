/*
  Warnings:

  - Changed the type of `name` on the `Achievement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "AchievementName" AS ENUM ('fightsWon', 'fightsLost', 'saboteur');

-- AlterTable
ALTER TABLE "Achievement" DROP COLUMN "name",
ADD COLUMN     "name" "AchievementName" NOT NULL;
