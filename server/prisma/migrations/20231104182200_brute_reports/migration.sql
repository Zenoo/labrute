-- CreateTable
CREATE TABLE "BruteReport" (
    "id" SERIAL NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "userId" UUID NOT NULL,
    "reason" TEXT NOT NULL,
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BruteReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
