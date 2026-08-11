-- DropForeignKey
ALTER TABLE "BossDamage" DROP CONSTRAINT "BossDamage_clanId_fkey";

-- DropForeignKey
ALTER TABLE "ClanThread" DROP CONSTRAINT "ClanThread_clanId_fkey";

-- DropForeignKey
ALTER TABLE "ClanWar" DROP CONSTRAINT "ClanWar_attackerId_fkey";

-- DropForeignKey
ALTER TABLE "ClanWar" DROP CONSTRAINT "ClanWar_defenderId_fkey";

-- AlterTable
ALTER TABLE "ClanWar" ALTER COLUMN "attackerId" DROP NOT NULL,
ALTER COLUMN "defenderId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_attackerId_fkey" FOREIGN KEY ("attackerId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_defenderId_fkey" FOREIGN KEY ("defenderId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
