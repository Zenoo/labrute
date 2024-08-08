-- DropForeignKey
ALTER TABLE "Clan" DROP CONSTRAINT "Clan_masterId_fkey";

-- AlterTable
ALTER TABLE "Clan" ALTER COLUMN "masterId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Clan" ADD CONSTRAINT "Clan_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;


-- set clan.masterId to null if the clan is deleted
UPDATE "Clan" SET "masterId" = NULL WHERE "deletedAt" IS NOT NULL;

-- set brute.clanId to null if the clan is deleted
UPDATE "Brute"
SET "clanId" = NULL
WHERE "clanId" IS NOT NULL
AND EXISTS (
    SELECT 1
    FROM "Clan"
    WHERE "id" = "Brute"."clanId"
    AND "deletedAt" IS NOT NULL
);
