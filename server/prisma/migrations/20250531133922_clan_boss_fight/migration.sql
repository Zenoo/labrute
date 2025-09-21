-- CreateEnum
CREATE TYPE "BossFightStatus" AS ENUM ('ONGOING', 'WON', 'LOST');

-- CreateTable
CREATE TABLE "BossFight" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "BossFightStatus" NOT NULL DEFAULT 'ONGOING',
    "clanId" UUID NOT NULL,
    "steps" TEXT NOT NULL,
    "fighters" TEXT NOT NULL,
    "reward" INTEGER NOT NULL,

    CONSTRAINT "BossFight_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BossFight_id_key" ON "BossFight"("id");

-- AddForeignKey
ALTER TABLE "BossFight" ADD CONSTRAINT "BossFight_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
