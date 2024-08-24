/*
  Warnings:

  - A unique constraint covering the columns `[eventId]` on the table `Tournament` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('weekly');

-- AlterEnum
ALTER TYPE "TournamentType" ADD VALUE 'WEEKLY_EVENT';

-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "eventId" UUID;

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "eventId" UUID;

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "EventType" NOT NULL DEFAULT 'weekly',
    "duration" INTEGER NOT NULL DEFAULT 7,
    "winnerId" UUID,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_eventId_key" ON "Tournament"("eventId");

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
