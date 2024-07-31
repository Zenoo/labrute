-- CreateEnum
CREATE TYPE "ClanWarStatus" AS ENUM ('pending', 'accepted', 'rejected', 'ongoing', 'waitingForRewards', 'finished');

-- AlterTable
ALTER TABLE "Fight" ADD COLUMN     "clanWarId" UUID;

-- CreateTable
CREATE TABLE "ClanWar" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "duration" INTEGER NOT NULL DEFAULT 7,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "ClanWarStatus" NOT NULL DEFAULT 'pending',
    "attackerId" UUID NOT NULL,
    "defenderId" UUID NOT NULL,
    "attackerWins" INTEGER NOT NULL DEFAULT 0,
    "defenderWins" INTEGER NOT NULL DEFAULT 0,
    "winnerId" UUID,

    CONSTRAINT "ClanWar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClanWarFighters" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "clanWarId" UUID NOT NULL,
    "day" INTEGER NOT NULL,

    CONSTRAINT "ClanWarFighters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClanWarAttackerFighters" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateTable
CREATE TABLE "_ClanWarDefenderFighters" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ClanWar_id_key" ON "ClanWar"("id");

-- CreateIndex
CREATE INDEX "ClanWar_status_idx" ON "ClanWar"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ClanWarFighters_id_key" ON "ClanWarFighters"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ClanWarFighters_clanWarId_day_key" ON "ClanWarFighters"("clanWarId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "_ClanWarAttackerFighters_AB_unique" ON "_ClanWarAttackerFighters"("A", "B");

-- CreateIndex
CREATE INDEX "_ClanWarAttackerFighters_B_index" ON "_ClanWarAttackerFighters"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ClanWarDefenderFighters_AB_unique" ON "_ClanWarDefenderFighters"("A", "B");

-- CreateIndex
CREATE INDEX "_ClanWarDefenderFighters_B_index" ON "_ClanWarDefenderFighters"("B");

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_clanWarId_fkey" FOREIGN KEY ("clanWarId") REFERENCES "ClanWar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_attackerId_fkey" FOREIGN KEY ("attackerId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_defenderId_fkey" FOREIGN KEY ("defenderId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWar" ADD CONSTRAINT "ClanWar_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanWarFighters" ADD CONSTRAINT "ClanWarFighters_clanWarId_fkey" FOREIGN KEY ("clanWarId") REFERENCES "ClanWar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarAttackerFighters" ADD CONSTRAINT "_ClanWarAttackerFighters_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarAttackerFighters" ADD CONSTRAINT "_ClanWarAttackerFighters_B_fkey" FOREIGN KEY ("B") REFERENCES "ClanWarFighters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarDefenderFighters" ADD CONSTRAINT "_ClanWarDefenderFighters_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClanWarDefenderFighters" ADD CONSTRAINT "_ClanWarDefenderFighters_B_fkey" FOREIGN KEY ("B") REFERENCES "ClanWarFighters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
