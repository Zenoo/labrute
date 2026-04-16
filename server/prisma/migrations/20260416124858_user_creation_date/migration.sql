-- AlterTable
-- 1. Add the column as nullable with default
ALTER TABLE "public"."User" ADD COLUMN "createdAt" DATE DEFAULT CURRENT_TIMESTAMP;

-- 2. Set createdAt for existing users to CURRENT_TIMESTAMP if null
UPDATE "public"."User" SET "createdAt" = CURRENT_TIMESTAMP WHERE "createdAt" IS NULL;

-- 3. Alter the column to be NOT NULL
ALTER TABLE "public"."User" ALTER COLUMN "createdAt" SET NOT NULL;
