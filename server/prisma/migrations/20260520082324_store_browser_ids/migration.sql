-- AlterTable
ALTER TABLE "User" ADD COLUMN     "browserIds" TEXT[] DEFAULT ARRAY[]::TEXT[];
