-- CreateEnum
CREATE TYPE "NotificationSeverity" AS ENUM ('info', 'success', 'warning', 'error');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "severity" "NotificationSeverity" NOT NULL DEFAULT 'info';
