-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "customizationTokens" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "UnlockedColors" (
    "bruteId" UUID NOT NULL,
    "bodyPart" VARCHAR(5) NOT NULL,
    "colors" TEXT[] DEFAULT ARRAY[]::TEXT[],

    CONSTRAINT "UnlockedColors_pkey" PRIMARY KEY ("bruteId","bodyPart")
);

-- AddForeignKey
ALTER TABLE "UnlockedColors" ADD CONSTRAINT "UnlockedColors_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
