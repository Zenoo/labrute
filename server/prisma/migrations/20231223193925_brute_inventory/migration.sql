-- CreateEnum
CREATE TYPE "InventoryItemType" AS ENUM ('visualReset');

-- CreateTable
CREATE TABLE "BruteInventoryItem" (
    "id" SERIAL NOT NULL,
    "type" "InventoryItemType" NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,
    "bruteId" INTEGER NOT NULL,

    CONSTRAINT "BruteInventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BruteInventoryItem_type_bruteId_key" ON "BruteInventoryItem"("type", "bruteId");

-- AddForeignKey
ALTER TABLE "BruteInventoryItem" ADD CONSTRAINT "BruteInventoryItem_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Give 1 visualReset to all non-deleted brutes
INSERT INTO "BruteInventoryItem" ("type", "bruteId") SELECT 'visualReset', "id" FROM "Brute" WHERE "deletedAt" IS NULL;
