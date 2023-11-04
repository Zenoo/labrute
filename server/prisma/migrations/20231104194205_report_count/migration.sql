/*
  Warnings:

  - You are about to drop the column `userId` on the `BruteReport` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BruteReport" DROP CONSTRAINT "BruteReport_userId_fkey";

-- AlterTable
ALTER TABLE "BruteReport" DROP COLUMN "userId",
ADD COLUMN     "count" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "_BruteReportToUser" (
    "A" INTEGER NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BruteReportToUser_AB_unique" ON "_BruteReportToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteReportToUser_B_index" ON "_BruteReportToUser"("B");

-- AddForeignKey
ALTER TABLE "_BruteReportToUser" ADD CONSTRAINT "_BruteReportToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "BruteReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteReportToUser" ADD CONSTRAINT "_BruteReportToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
