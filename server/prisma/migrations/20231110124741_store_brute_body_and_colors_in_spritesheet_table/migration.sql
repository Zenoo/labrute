-- AlterTable
ALTER TABLE "BruteSpritesheet" ADD COLUMN     "accentColor" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "accentShade" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "hairColor" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "hairShade" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "head" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "leftFoot" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "leftHand" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "leftShoulder" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "longHair" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "lowerLeftArm" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "lowerLeftLeg" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "lowerRightArm" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "lowerRightLeg" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "pelvis" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "primaryColor" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "primaryShade" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "rightFoot" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "rightHand" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "rightShoulder" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "secondaryColor" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "secondaryShade" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "skinColor" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "skinShade" VARCHAR(255) NOT NULL DEFAULT '#000000',
ADD COLUMN     "torso" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "tummy" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "upperLeftArm" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "upperLeftLeg" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "upperRightArm" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "upperRightLeg" INTEGER NOT NULL DEFAULT 1;