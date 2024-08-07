/*
  Warnings:

  - You are about to drop the column `attackerWins` on the `ClanWar` table. All the data in the column will be lost.
  - You are about to drop the column `defenderWins` on the `ClanWar` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ClanWar" DROP COLUMN "attackerWins",
DROP COLUMN "defenderWins",
ADD COLUMN     "attackerEloChange" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "defenderEloChange" INTEGER NOT NULL DEFAULT 0;
