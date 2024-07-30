/*
  Warnings:

  - A unique constraint covering the columns `[destinyChoiceId]` on the table `Log` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "DestinyChoice" ADD COLUMN     "logId" UUID;

-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "destinyChoiceId" UUID;

-- CreateTable
CREATE TABLE "_Followers" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Followers_AB_unique" ON "_Followers"("A", "B");

-- CreateIndex
CREATE INDEX "_Followers_B_index" ON "_Followers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Log_destinyChoiceId_key" ON "Log"("destinyChoiceId");

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_destinyChoiceId_fkey" FOREIGN KEY ("destinyChoiceId") REFERENCES "DestinyChoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Followers" ADD CONSTRAINT "_Followers_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Followers" ADD CONSTRAINT "_Followers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
