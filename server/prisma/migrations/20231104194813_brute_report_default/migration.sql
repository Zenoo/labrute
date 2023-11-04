/*
  Warnings:

  - The `reason` column on the `BruteReport` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "BruteReportReason" AS ENUM ('name');

-- AlterTable
ALTER TABLE "BruteReport" DROP COLUMN "reason",
ADD COLUMN     "reason" "BruteReportReason" NOT NULL DEFAULT 'name',
ALTER COLUMN "status" SET DEFAULT 'pending';
