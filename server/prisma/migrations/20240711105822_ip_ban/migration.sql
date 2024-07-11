-- AlterTable
ALTER TABLE "User" ADD COLUMN     "banReason" TEXT,
ADD COLUMN     "bannedAt" DATE,
ADD COLUMN     "ips" TEXT[] DEFAULT ARRAY[]::TEXT[];
