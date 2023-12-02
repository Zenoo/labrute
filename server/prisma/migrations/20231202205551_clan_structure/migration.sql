/*
  Warnings:

  - A unique constraint covering the columns `[masterId]` on the table `Clan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `masterId` to the `Clan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clan" ADD COLUMN     "limit" INTEGER NOT NULL DEFAULT 10,
ADD COLUMN     "masterId" INTEGER NOT NULL,
ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ClanThread" (
    "id" SERIAL NOT NULL,
    "clanId" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "locked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ClanThread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClanPost" (
    "id" SERIAL NOT NULL,
    "threadId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,

    CONSTRAINT "ClanPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Clan_masterId_key" ON "Clan"("masterId");

-- AddForeignKey
ALTER TABLE "Clan" ADD CONSTRAINT "Clan_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "ClanThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
