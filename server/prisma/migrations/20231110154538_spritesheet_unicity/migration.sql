/*
  Warnings:

  - You are about to drop the column `bruteId` on the `BruteSpritesheet` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gender,longHair,lowerRightArm,rightHand,upperRightArm,rightShoulder,rightFoot,lowerRightLeg,upperRightLeg,leftFoot,lowerLeftLeg,pelvis,upperLeftLeg,tummy,torso,head,leftHand,upperLeftArm,lowerLeftArm,leftShoulder,skinColor,skinShade,hairColor,hairShade,primaryColor,primaryShade,secondaryColor,secondaryShade,accentColor,accentShade]` on the table `BruteSpritesheet` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "BruteSpritesheet" DROP CONSTRAINT "BruteSpritesheet_bruteId_fkey";

-- DropIndex
DROP INDEX "BruteSpritesheet_bruteId_key";

-- AlterTable
ALTER TABLE "BruteSpritesheet" DROP COLUMN "bruteId";

-- CreateIndex
CREATE UNIQUE INDEX "BruteSpritesheet_gender_longHair_lowerRightArm_rightHand_up_key" ON "BruteSpritesheet"("gender", "longHair", "lowerRightArm", "rightHand", "upperRightArm", "rightShoulder", "rightFoot", "lowerRightLeg", "upperRightLeg", "leftFoot", "lowerLeftLeg", "pelvis", "upperLeftLeg", "tummy", "torso", "head", "leftHand", "upperLeftArm", "lowerLeftArm", "leftShoulder", "skinColor", "skinShade", "hairColor", "hairShade", "primaryColor", "primaryShade", "secondaryColor", "secondaryShade", "accentColor", "accentShade");
