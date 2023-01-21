/*
  Warnings:

  - You are about to alter the column `agilityModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.
  - You are about to alter the column `enduranceModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.
  - You are about to alter the column `speedModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.
  - You are about to alter the column `strengthModifier` on the `Brute` table. The data in that column could be lost. The data in that column will be cast from `Decimal(5,2)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Brute" ALTER COLUMN "agilityModifier" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "enduranceModifier" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "speedModifier" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "strengthModifier" SET DATA TYPE DOUBLE PRECISION;
