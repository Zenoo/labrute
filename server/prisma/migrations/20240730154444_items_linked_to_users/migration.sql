-- AlterEnum
ALTER TYPE "InventoryItemType" ADD VALUE 'favoriteFight';

-- DropForeignKey
ALTER TABLE "BruteInventoryItem" DROP CONSTRAINT "BruteInventoryItem_bruteId_fkey";

-- AlterTable
ALTER TABLE "BruteInventoryItem" ADD COLUMN     "userId" UUID,
ALTER COLUMN "bruteId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_FavoriteFights" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteFights_AB_unique" ON "_FavoriteFights"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteFights_B_index" ON "_FavoriteFights"("B");

-- AddForeignKey
ALTER TABLE "BruteInventoryItem" ADD CONSTRAINT "BruteInventoryItem_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteInventoryItem" ADD CONSTRAINT "BruteInventoryItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteFights" ADD CONSTRAINT "_FavoriteFights_A_fkey" FOREIGN KEY ("A") REFERENCES "Fight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteFights" ADD CONSTRAINT "_FavoriteFights_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
