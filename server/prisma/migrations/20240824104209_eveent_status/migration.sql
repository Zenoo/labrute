-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('ongoing', 'finished');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "status" "EventStatus" NOT NULL DEFAULT 'ongoing';

-- CreateIndex
CREATE INDEX "Event_date_type_status_idx" ON "Event"("date", "type", "status");
