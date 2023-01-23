/*
  Warnings:

  - You are about to drop the column `spritesheet` on the `Brute` table. All the data in the column will be lost.
  - You are about to drop the column `spritesheetJson` on the `Brute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "spritesheet",
DROP COLUMN "spritesheetJson";

-- CreateTable
CREATE TABLE "BruteSpritesheet" (
    "id" SERIAL NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "image" BYTEA,
    "json" JSON,

    CONSTRAINT "BruteSpritesheet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BruteSpritesheet_bruteId_key" ON "BruteSpritesheet"("bruteId");

-- AddForeignKey
ALTER TABLE "BruteSpritesheet" ADD CONSTRAINT "BruteSpritesheet_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
