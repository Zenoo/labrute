/*
  Warnings:

  - You are about to drop the column `loserMaster` on the `Fight` table. All the data in the column will be lost.
  - You are about to drop the column `loserName` on the `Fight` table. All the data in the column will be lost.
  - You are about to drop the column `loserType` on the `Fight` table. All the data in the column will be lost.
  - You are about to drop the column `winnerMaster` on the `Fight` table. All the data in the column will be lost.
  - You are about to drop the column `winnerName` on the `Fight` table. All the data in the column will be lost.
  - You are about to drop the column `winnerType` on the `Fight` table. All the data in the column will be lost.
  - Added the required column `loser` to the `Fight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winner` to the `Fight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fight" DROP COLUMN "loserMaster",
DROP COLUMN "loserName",
DROP COLUMN "loserType",
DROP COLUMN "winnerMaster",
DROP COLUMN "winnerName",
DROP COLUMN "winnerType",
ADD COLUMN     "loser" VARCHAR(255) NOT NULL,
ADD COLUMN     "winner" VARCHAR(255) NOT NULL;
