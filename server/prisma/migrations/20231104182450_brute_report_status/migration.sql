/*
  Warnings:

  - Added the required column `status` to the `BruteReport` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BruteReportStatus" AS ENUM ('pending', 'accepted', 'rejected');

-- AlterTable
ALTER TABLE "BruteReport" ADD COLUMN     "status" "BruteReportStatus" NOT NULL;
