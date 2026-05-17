/*
  Warnings:

  - You are about to drop the column `customizationTokens` on the `Brute` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "InventoryItemType" ADD VALUE 'customizationToken';

-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "customizationTokens";
