/*
  Warnings:

  - You are about to alter the column `agilityStat` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `agilityValue` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `enduranceStat` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `enduranceValue` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `speedStat` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `speedValue` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `strengthStat` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to alter the column `strengthValue` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Brute" ALTER COLUMN "agilityStat" SET DEFAULT 0,
ALTER COLUMN "agilityStat" SET DATA TYPE INTEGER,
ALTER COLUMN "agilityValue" SET DEFAULT 0,
ALTER COLUMN "agilityValue" SET DATA TYPE INTEGER,
ALTER COLUMN "enduranceStat" SET DEFAULT 0,
ALTER COLUMN "enduranceStat" SET DATA TYPE INTEGER,
ALTER COLUMN "enduranceValue" SET DEFAULT 0,
ALTER COLUMN "enduranceValue" SET DATA TYPE INTEGER,
ALTER COLUMN "speedStat" SET DEFAULT 0,
ALTER COLUMN "speedStat" SET DATA TYPE INTEGER,
ALTER COLUMN "speedValue" SET DEFAULT 0,
ALTER COLUMN "speedValue" SET DATA TYPE INTEGER,
ALTER COLUMN "strengthStat" SET DEFAULT 0,
ALTER COLUMN "strengthStat" SET DATA TYPE INTEGER,
ALTER COLUMN "strengthValue" SET DEFAULT 0,
ALTER COLUMN "strengthValue" SET DATA TYPE INTEGER;
