/*
  Warnings:

  - The `destinyPath` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "DestinyChoiceSide" AS ENUM ('0', '1');

-- CreateEnum
CREATE TYPE "DestinyChoiceType" AS ENUM ('skill', 'weapon', 'pet', 'stats');

-- CreateEnum
CREATE TYPE "BruteStat" AS ENUM ('endurance', 'strength', 'agility', 'speed');

-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "destinyPath",
ADD COLUMN     "destinyPath" "DestinyChoiceSide"[] DEFAULT ARRAY[]::"DestinyChoiceSide"[];

-- DropEnum
DROP TYPE "DestinyChoice";

-- CreateTable
CREATE TABLE "DestinyChoice" (
    "id" SERIAL NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "path" "DestinyChoiceSide"[],
    "type" "DestinyChoiceType" NOT NULL,
    "skill" "SkillName",
    "weapon" "WeaponName",
    "pet" "PetName",
    "stat1" "BruteStat",
    "stat1Value" INTEGER,
    "stat2" "BruteStat",
    "stat2Value" INTEGER,

    CONSTRAINT "DestinyChoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DestinyChoice" ADD CONSTRAINT "DestinyChoice_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
