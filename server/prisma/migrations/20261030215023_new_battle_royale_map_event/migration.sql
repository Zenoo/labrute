-- AlterEnum
-- Rename the existing value in place so existing events keep their type,
-- then re-add 'battleRoyale' for the new map-based event
ALTER TYPE "EventType" RENAME VALUE 'battleRoyale' TO 'tourney';
ALTER TYPE "EventType" ADD VALUE 'battleRoyale';

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "baseVision" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "groupSize" INTEGER NOT NULL DEFAULT 20,
ALTER COLUMN "type" SET DEFAULT 'tourney';

-- CreateTable
CREATE TABLE "BattleRoyaleMap" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "eventId" UUID NOT NULL,
    "round" INTEGER NOT NULL,
    "radius" INTEGER NOT NULL,
    "lastShrinkAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tiles" JSONB NOT NULL,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "BattleRoyaleMap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleRoyaleBrute" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "eventId" UUID NOT NULL,
    "mapId" UUID NOT NULL,
    "bruteId" UUID NOT NULL,
    "x" INTEGER NOT NULL,
    "y" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "vision" INTEGER NOT NULL DEFAULT 2,
    "movesLeft" INTEGER NOT NULL DEFAULT 6,
    "lastMoveDate" DATE,
    "lastScoutAt" TIMESTAMP(3),
    "knownTiles" JSONB NOT NULL DEFAULT '{}',
    "eliminated" BOOLEAN NOT NULL DEFAULT false,
    "eliminatedAt" TIMESTAMP(3),

    CONSTRAINT "BattleRoyaleBrute_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BattleRoyaleMap_id_key" ON "BattleRoyaleMap"("id");

-- CreateIndex
CREATE INDEX "BattleRoyaleMap_eventId_round_idx" ON "BattleRoyaleMap"("eventId", "round");

-- CreateIndex
CREATE UNIQUE INDEX "BattleRoyaleBrute_id_key" ON "BattleRoyaleBrute"("id");

-- CreateIndex
CREATE INDEX "BattleRoyaleBrute_mapId_eliminated_idx" ON "BattleRoyaleBrute"("mapId", "eliminated");

-- CreateIndex
CREATE INDEX "BattleRoyaleBrute_bruteId_idx" ON "BattleRoyaleBrute"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BattleRoyaleBrute_eventId_bruteId_key" ON "BattleRoyaleBrute"("eventId", "bruteId");

-- AddForeignKey
ALTER TABLE "BattleRoyaleMap" ADD CONSTRAINT "BattleRoyaleMap_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleRoyaleBrute" ADD CONSTRAINT "BattleRoyaleBrute_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleRoyaleBrute" ADD CONSTRAINT "BattleRoyaleBrute_mapId_fkey" FOREIGN KEY ("mapId") REFERENCES "BattleRoyaleMap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleRoyaleBrute" ADD CONSTRAINT "BattleRoyaleBrute_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
