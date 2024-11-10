-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "sortedBrutes" TEXT[] DEFAULT ARRAY[]::TEXT[];
