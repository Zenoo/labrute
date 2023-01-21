/*
  Warnings:

  - You are about to drop the column `agility` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `endurance` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `Brute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "agility",
DROP COLUMN "endurance",
DROP COLUMN "speed",
DROP COLUMN "strength",
ADD COLUMN     "agilityModifier" DECIMAL(65,30) NOT NULL DEFAULT 1,
ADD COLUMN     "agilityStat" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "agilityValue" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "enduranceModifier" DECIMAL(65,30) NOT NULL DEFAULT 1,
ADD COLUMN     "enduranceStat" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "enduranceValue" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "speedModifier" DECIMAL(65,30) NOT NULL DEFAULT 1,
ADD COLUMN     "speedStat" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "speedValue" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "strengthModifier" DECIMAL(65,30) NOT NULL DEFAULT 1,
ADD COLUMN     "strengthStat" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "strengthValue" DECIMAL(65,30) NOT NULL DEFAULT 0;
