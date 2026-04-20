-- AlterEnum
ALTER TYPE "public"."UserLogType" ADD VALUE 'TRANSFER_BRUTE';

-- AlterTable
ALTER TABLE "public"."UserLog" ADD COLUMN     "targetUserId" UUID;
