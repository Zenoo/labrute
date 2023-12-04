-- CreateEnum
CREATE TYPE "BossName" AS ENUM ('whiteBear', 'redPanther');

-- AlterTable
ALTER TABLE "Clan" ADD COLUMN     "boss" "BossName" NOT NULL DEFAULT 'whiteBear',
ADD COLUMN     "damageOnBoss" INTEGER NOT NULL DEFAULT 0;
