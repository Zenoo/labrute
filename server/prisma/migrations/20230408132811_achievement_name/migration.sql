/*
  Warnings:

  - The values [saboteur] on the enum `AchievementName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AchievementName_new" AS ENUM ('fightsWon', 'fightsLost', 'saboteurUsed');
ALTER TABLE "Achievement" ALTER COLUMN "name" TYPE "AchievementName_new" USING ("name"::text::"AchievementName_new");
ALTER TYPE "AchievementName" RENAME TO "AchievementName_old";
ALTER TYPE "AchievementName_new" RENAME TO "AchievementName";
DROP TYPE "AchievementName_old";
COMMIT;
