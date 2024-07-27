-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AchievementName" ADD VALUE 'deflector';
ALTER TYPE "AchievementName" ADD VALUE 'allFastWeapons';
ALTER TYPE "AchievementName" ADD VALUE 'allSharpWeapons';
ALTER TYPE "AchievementName" ADD VALUE 'allHeavyWeapons';
ALTER TYPE "AchievementName" ADD VALUE 'allLongWeapons';
ALTER TYPE "AchievementName" ADD VALUE 'allThrownWeapons';
ALTER TYPE "AchievementName" ADD VALUE 'allBluntWeapons';
