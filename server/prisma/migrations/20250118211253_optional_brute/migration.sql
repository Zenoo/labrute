-- DropForeignKey
ALTER TABLE "BossDamage" DROP CONSTRAINT "BossDamage_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "ClanPost" DROP CONSTRAINT "ClanPost_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ClanThread" DROP CONSTRAINT "ClanThread_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_brute1Id_fkey";

-- AlterTable
ALTER TABLE "BossDamage" ALTER COLUMN "bruteId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ClanPost" ALTER COLUMN "authorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ClanThread" ALTER COLUMN "creatorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Fight" ALTER COLUMN "brute1Id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute1Id_fkey" FOREIGN KEY ("brute1Id") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
