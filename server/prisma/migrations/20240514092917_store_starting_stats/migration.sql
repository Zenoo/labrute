-- CreateTable
CREATE TABLE "BruteStartingStats" (
    "id" SERIAL NOT NULL,
    "endurance" INTEGER NOT NULL DEFAULT 2,
    "strength" INTEGER NOT NULL DEFAULT 3,
    "agility" INTEGER NOT NULL DEFAULT 3,
    "speed" INTEGER NOT NULL DEFAULT 3,
    "bruteId" INTEGER NOT NULL,

    CONSTRAINT "BruteStartingStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BruteStartingStats_bruteId_key" ON "BruteStartingStats"("bruteId");

-- AddForeignKey
ALTER TABLE "BruteStartingStats" ADD CONSTRAINT "BruteStartingStats_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
