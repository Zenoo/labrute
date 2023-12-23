/*
  Warnings:

  - You are about to drop the column `head` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `leftFoot` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `leftHand` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `leftShoulder` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `longHair` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `lowerLeftArm` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `lowerLeftLeg` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `lowerRightArm` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `lowerRightLeg` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `pelvis` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `rightFoot` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `rightHand` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `rightShoulder` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `torso` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `tummy` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `upperLeftArm` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `upperLeftLeg` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `upperRightArm` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `upperRightLeg` on the `BruteBody` table. All the data in the column will be lost.
  - You are about to drop the column `accentColor` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `accentShade` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `hairColor` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `hairShade` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `primaryColor` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `primaryShade` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryColor` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `secondaryShade` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `skinColor` on the `BruteColors` table. All the data in the column will be lost.
  - You are about to drop the column `skinShade` on the `BruteColors` table. All the data in the column will be lost.

*/

-- Set p3 = 4 where longHair = 2
UPDATE "BruteBody" SET "p3" = 4 WHERE "longHair" = 2;

-- Set p3 = 7 where longHair = 3
UPDATE "BruteBody" SET "p3" = 7 WHERE "longHair" = 3;

-- AlterTable
ALTER TABLE "BruteBody" DROP COLUMN "head",
DROP COLUMN "leftFoot",
DROP COLUMN "leftHand",
DROP COLUMN "leftShoulder",
DROP COLUMN "longHair",
DROP COLUMN "lowerLeftArm",
DROP COLUMN "lowerLeftLeg",
DROP COLUMN "lowerRightArm",
DROP COLUMN "lowerRightLeg",
DROP COLUMN "pelvis",
DROP COLUMN "rightFoot",
DROP COLUMN "rightHand",
DROP COLUMN "rightShoulder",
DROP COLUMN "torso",
DROP COLUMN "tummy",
DROP COLUMN "upperLeftArm",
DROP COLUMN "upperLeftLeg",
DROP COLUMN "upperRightArm",
DROP COLUMN "upperRightLeg";

-- Set col0, col0a, col0c = skinColor
-- Set col1, col1a, col1b, col1c, col1d = hairColor
-- Set col3 = primaryColor
-- Set col2 = secondaryColor
-- Set col2b, col3b, col2a, col4, col4a = accentColor
UPDATE "BruteColors" SET "col0" = "skinColor",
"col0a" = "skinColor",
"col0c" = "skinColor",
"col1" = "hairColor",
"col1a" = "hairColor",
"col1b" = "hairColor",
"col1c" = "hairColor",
"col1d" = "hairColor",
"col3" = "primaryColor",
"col2" = "secondaryColor",
"col2b" = "accentColor",
"col3b" = "accentColor",
"col2a" = "accentColor",
"col4" = "accentColor",
"col4a" = "accentColor";


-- AlterTable
ALTER TABLE "BruteColors" DROP COLUMN "accentColor",
DROP COLUMN "accentShade",
DROP COLUMN "hairColor",
DROP COLUMN "hairShade",
DROP COLUMN "primaryColor",
DROP COLUMN "primaryShade",
DROP COLUMN "secondaryColor",
DROP COLUMN "secondaryShade",
DROP COLUMN "skinColor",
DROP COLUMN "skinShade";
