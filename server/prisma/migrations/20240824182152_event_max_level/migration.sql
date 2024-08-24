/*
  Warnings:

  - The values [weekly] on the enum `EventType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `duration` on the `Event` table. All the data in the column will be lost.
  - Added the required column `maxLevel` to the `Event` table without a default value. This is not possible if the table is not empty.

*/

-- Empty Events
DELETE FROM "Event";

-- AlterEnum
BEGIN;
CREATE TYPE "EventType_new" AS ENUM ('battleRoyale');
ALTER TABLE "Event" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Event" ALTER COLUMN "type" TYPE "EventType_new" USING ("type"::text::"EventType_new");
ALTER TYPE "EventType" RENAME TO "EventType_old";
ALTER TYPE "EventType_new" RENAME TO "EventType";
DROP TYPE "EventType_old";
ALTER TABLE "Event" ALTER COLUMN "type" SET DEFAULT 'battleRoyale';
COMMIT;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "duration",
ADD COLUMN     "maxLevel" INTEGER NOT NULL,
ALTER COLUMN "type" SET DEFAULT 'battleRoyale';
