-- AlterTable
ALTER TABLE "ClanThread" ADD COLUMN     "creatorId" INTEGER;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Update creatorId with ClanPost.authorId from the first post
UPDATE "ClanThread" SET "creatorId" = (SELECT "authorId" FROM "ClanPost" WHERE "ClanPost"."threadId" = "ClanThread"."id" ORDER BY "ClanPost"."date" ASC LIMIT 1);
