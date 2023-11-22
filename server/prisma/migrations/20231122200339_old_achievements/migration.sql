-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AchievementName" ADD VALUE 'counter5';
ALTER TYPE "AchievementName" ADD VALUE 'evade10';
ALTER TYPE "AchievementName" ADD VALUE 'block25';
ALTER TYPE "AchievementName" ADD VALUE 'throw10b2b';
ALTER TYPE "AchievementName" ADD VALUE 'disarm8';
ALTER TYPE "AchievementName" ADD VALUE 'damage50once';
ALTER TYPE "AchievementName" ADD VALUE 'kill3pets';
