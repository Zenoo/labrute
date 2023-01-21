/*
  Warnings:

  - You are about to alter the column `agilityModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `enduranceModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `speedModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.
  - You are about to alter the column `strengthModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "Brute" ALTER COLUMN "agilityModifier" SET DATA TYPE DECIMAL(5,2),
ALTER COLUMN "enduranceModifier" SET DATA TYPE DECIMAL(5,2),
ALTER COLUMN "speedModifier" SET DATA TYPE DECIMAL(5,2),
ALTER COLUMN "strengthModifier" SET DATA TYPE DECIMAL(5,2);
