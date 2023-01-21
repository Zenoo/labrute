-- CreateEnum
CREATE TYPE "Lang" AS ENUM ('en', 'fr');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lang" "Lang" NOT NULL DEFAULT 'en';
