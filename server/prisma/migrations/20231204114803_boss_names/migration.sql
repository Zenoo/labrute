/*
  Warnings:

  - The values [whiteBear,redPanther] on the enum `BossName` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BossName_new" AS ENUM ('GoldClaw', 'EmberFang');
ALTER TABLE "Clan" ALTER COLUMN "boss" DROP DEFAULT;
ALTER TABLE "Clan" ALTER COLUMN "boss" TYPE "BossName_new" USING ("boss"::text::"BossName_new");
ALTER TYPE "BossName" RENAME TO "BossName_old";
ALTER TYPE "BossName_new" RENAME TO "BossName";
DROP TYPE "BossName_old";
ALTER TABLE "Clan" ALTER COLUMN "boss" SET DEFAULT 'GoldClaw';
COMMIT;

-- AlterTable
ALTER TABLE "Clan" ALTER COLUMN "boss" SET DEFAULT 'GoldClaw';
