-- CreateEnum
CREATE TYPE "LogType" AS ENUM ('win', 'lose', 'child', 'childup', 'up', 'lvl', 'survive');

-- CreateEnum
CREATE TYPE "FighterType" AS ENUM ('brute', 'pet');

-- CreateTable
CREATE TABLE "Fight" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "brute1Id" INTEGER NOT NULL,
    "brute2Id" INTEGER NOT NULL,
    "winnerName" VARCHAR(255) NOT NULL,
    "winnerType" "FighterType" NOT NULL,
    "winnerMaster" VARCHAR(255),
    "loserName" VARCHAR(255) NOT NULL,
    "loserType" "FighterType" NOT NULL,
    "loserMaster" VARCHAR(255),
    "steps" JSON NOT NULL,
    "fighters" JSON NOT NULL,

    CONSTRAINT "Fight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currentBruteId" INTEGER NOT NULL,
    "type" "LogType" NOT NULL,
    "level" INTEGER,
    "bruteId" INTEGER,
    "fightId" INTEGER,
    "xp" INTEGER,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute1Id_fkey" FOREIGN KEY ("brute1Id") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute2Id_fkey" FOREIGN KEY ("brute2Id") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_currentBruteId_fkey" FOREIGN KEY ("currentBruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE SET NULL ON UPDATE CASCADE;
