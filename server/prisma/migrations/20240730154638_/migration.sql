-- AlterTable
ALTER TABLE "InventoryItem" RENAME CONSTRAINT "BruteInventoryItem_pkey" TO "InventoryItem_pkey";

-- RenameForeignKey
ALTER TABLE "InventoryItem" RENAME CONSTRAINT "BruteInventoryItem_bruteId_fkey" TO "InventoryItem_bruteId_fkey";

-- RenameForeignKey
ALTER TABLE "InventoryItem" RENAME CONSTRAINT "BruteInventoryItem_userId_fkey" TO "InventoryItem_userId_fkey";

-- RenameIndex
ALTER INDEX "BruteInventoryItem_bruteId_idx" RENAME TO "InventoryItem_bruteId_idx";

-- RenameIndex
ALTER INDEX "BruteInventoryItem_id_key" RENAME TO "InventoryItem_id_key";

-- RenameIndex
ALTER INDEX "BruteInventoryItem_type_bruteId_key" RENAME TO "InventoryItem_type_bruteId_key";
