-- DropForeignKey
ALTER TABLE "ClanWarFighters" DROP CONSTRAINT "ClanWarFighters_clanWarId_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_clanWarId_fkey";

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_clanWarId_fkey" FOREIGN KEY ("clanWarId") REFERENCES "ClanWar"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWarFighters" ADD CONSTRAINT "ClanWarFighters_clanWarId_fkey" FOREIGN KEY ("clanWarId") REFERENCES "ClanWar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
