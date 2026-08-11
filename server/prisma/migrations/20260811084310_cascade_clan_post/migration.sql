-- DropForeignKey
ALTER TABLE "ClanPost" DROP CONSTRAINT "ClanPost_threadId_fkey";

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "ClanThread"("id") ON DELETE CASCADE ON UPDATE CASCADE;
