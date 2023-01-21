/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `login` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `personId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Record` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `connexionToken` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DestinyChoice" AS ENUM ('0', '1');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "Weapon" AS ENUM ('fan', 'keyboard', 'knife', 'leek', 'mug', 'sai', 'racquet', 'axe', 'bumps', 'flail', 'fryingPan', 'hatchet', 'mammothBone', 'morningStar', 'trombone', 'baton', 'halbard', 'lance', 'trident', 'whip', 'noodleBowl', 'piopio', 'shuriken', 'broadsword', 'scimitar', 'sword');

-- CreateEnum
CREATE TYPE "Skill" AS ENUM ('herculeanStrength', 'felineAgility', 'lightningBolt', 'vitality', 'immortality', 'reconnaissance', 'weaponsMaster', 'martialArts', 'sixthSense', 'hostility', 'fistsOfFury', 'shield', 'armor', 'toughenedSkin', 'untouchable', 'sabotage', 'shock', 'bodybuilder', 'relentless', 'survival', 'leadSkeleton', 'balletShoes', 'determination', 'firstStrike', 'resistant', 'counterAttack', 'ironHead', 'thief', 'fierceBrute', 'tragicPotion', 'net', 'bomb', 'hammer', 'cryOfTheDamned', 'hypnosis', 'flashFlood', 'tamer', 'regeneration', 'chef', 'spy', 'saboteur', 'backup', 'hideaway', 'monk');

-- CreateEnum
CREATE TYPE "Pet" AS ENUM ('dog1', 'dog2', 'dog3', 'panther', 'bear');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Lang" ADD VALUE 'de';
ALTER TYPE "Lang" ADD VALUE 'es';

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_authorId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_personId_fkey";

-- DropIndex
DROP INDEX "User_login_key";

-- DropIndex
DROP INDEX "User_personId_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "active",
DROP COLUMN "login",
DROP COLUMN "password",
DROP COLUMN "personId",
ADD COLUMN     "bruteLimit" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "name" VARCHAR(255) NOT NULL,
ADD COLUMN     "sacrificePoints" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "connexionToken",
ADD COLUMN     "connexionToken" UUID NOT NULL,
ALTER COLUMN "lang" SET DEFAULT 'fr';

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "Record";

-- DropTable
DROP TABLE "Request";

-- DropEnum
DROP TYPE "RecordAction";

-- DropEnum
DROP TYPE "RequestStatus";

-- CreateTable
CREATE TABLE "BruteBody" (
    "id" SERIAL NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "longHair" INTEGER NOT NULL,
    "lowerRightArm" INTEGER NOT NULL,
    "rightHand" INTEGER NOT NULL,
    "upperRightArm" INTEGER NOT NULL,
    "rightShoulder" INTEGER NOT NULL,
    "rightFoot" INTEGER NOT NULL,
    "lowerRightLeg" INTEGER NOT NULL,
    "upperRightLeg" INTEGER NOT NULL,
    "leftFoot" INTEGER NOT NULL,
    "lowerLeftLeg" INTEGER NOT NULL,
    "pelvis" INTEGER NOT NULL,
    "upperLeftLeg" INTEGER NOT NULL,
    "tummy" INTEGER NOT NULL,
    "torso" INTEGER NOT NULL,
    "head" INTEGER NOT NULL,
    "leftHand" INTEGER NOT NULL,
    "upperLeftArm" INTEGER NOT NULL,
    "lowerLeftArm" INTEGER NOT NULL,
    "leftShoulder" INTEGER NOT NULL,

    CONSTRAINT "BruteBody_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BruteColors" (
    "id" SERIAL NOT NULL,
    "bruteId" INTEGER NOT NULL,
    "skinColor" VARCHAR(255) NOT NULL,
    "skinShade" VARCHAR(255) NOT NULL,
    "hairColor" VARCHAR(255) NOT NULL,
    "hairShade" VARCHAR(255) NOT NULL,
    "primaryColor" VARCHAR(255) NOT NULL,
    "primaryShade" VARCHAR(255) NOT NULL,
    "secondaryColor" VARCHAR(255) NOT NULL,
    "secondaryShade" VARCHAR(255) NOT NULL,
    "accentColor" VARCHAR(255) NOT NULL,
    "accentShade" VARCHAR(255) NOT NULL,

    CONSTRAINT "BruteColors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Brute" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "spritesheet" BYTEA NOT NULL,
    "spritesheetJson" JSON NOT NULL,
    "destinyPath" "DestinyChoice"[] DEFAULT ARRAY[]::"DestinyChoice"[],
    "level" INTEGER NOT NULL DEFAULT 1,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "hp" INTEGER NOT NULL DEFAULT 0,
    "endurance" INTEGER NOT NULL DEFAULT 0,
    "strength" INTEGER NOT NULL DEFAULT 0,
    "agility" INTEGER NOT NULL DEFAULT 0,
    "speed" INTEGER NOT NULL DEFAULT 0,
    "ranking" INTEGER NOT NULL DEFAULT 0,
    "gender" "Gender" NOT NULL,
    "userId" UUID NOT NULL,
    "weapons" "Weapon"[] DEFAULT ARRAY[]::"Weapon"[],
    "skills" "Skill"[] DEFAULT ARRAY[]::"Skill"[],
    "pets" "Pet"[] DEFAULT ARRAY[]::"Pet"[],
    "masterId" INTEGER,
    "pupilsCount" INTEGER NOT NULL DEFAULT 0,
    "clanId" INTEGER,
    "tournament" DATE NOT NULL,
    "lastFight" DATE NOT NULL,
    "fightsLeft" INTEGER NOT NULL DEFAULT 6,

    CONSTRAINT "Brute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clan" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Clan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BruteBody_bruteId_key" ON "BruteBody"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BruteColors_bruteId_key" ON "BruteColors"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "Clan_name_key" ON "Clan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "BruteBody" ADD CONSTRAINT "BruteBody_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteColors" ADD CONSTRAINT "BruteColors_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
