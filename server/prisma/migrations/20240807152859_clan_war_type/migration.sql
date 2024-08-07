-- CreateEnum
CREATE TYPE "ClanWarType" AS ENUM ('friendly', 'official');

-- AlterTable
ALTER TABLE "ClanWar" ADD COLUMN     "type" "ClanWarType" NOT NULL DEFAULT 'official';
