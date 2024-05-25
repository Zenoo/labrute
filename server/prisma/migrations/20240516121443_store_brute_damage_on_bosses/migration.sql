-- CreateTable
CREATE TABLE "BossDamage" (
    "id" SERIAL NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "damage" INTEGER NOT NULL,

    CONSTRAINT "BossDamage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BossDamage_bruteId_key" ON "BossDamage"("bruteId");

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
