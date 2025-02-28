-- DropForeignKey
ALTER TABLE "BossDamage" DROP CONSTRAINT "BossDamage_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_bruteId_fkey";

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
