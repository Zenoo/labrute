/*
  Warnings:

  - The `weapons` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skills` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "WeaponName" AS ENUM ('fan', 'keyboard', 'knife', 'leek', 'mug', 'sai', 'racquet', 'axe', 'bumps', 'flail', 'fryingPan', 'hatchet', 'mammothBone', 'morningStar', 'trombone', 'baton', 'halbard', 'lance', 'trident', 'whip', 'noodleBowl', 'piopio', 'shuriken', 'broadsword', 'scimitar', 'sword');

-- CreateEnum
CREATE TYPE "SkillName" AS ENUM ('herculeanStrength', 'felineAgility', 'lightningBolt', 'vitality', 'immortality', 'reconnaissance', 'weaponsMaster', 'martialArts', 'sixthSense', 'hostility', 'fistsOfFury', 'shield', 'armor', 'toughenedSkin', 'untouchable', 'sabotage', 'shock', 'bodybuilder', 'relentless', 'survival', 'leadSkeleton', 'balletShoes', 'determination', 'firstStrike', 'resistant', 'counterAttack', 'ironHead', 'thief', 'fierceBrute', 'tragicPotion', 'net', 'bomb', 'hammer', 'cryOfTheDamned', 'hypnosis', 'flashFlood', 'tamer', 'regeneration', 'chef', 'spy', 'saboteur', 'backup', 'hideaway', 'monk');

-- AlterTable
ALTER TABLE "Brute" DROP COLUMN "weapons",
ADD COLUMN     "weapons" "WeaponName"[] DEFAULT ARRAY[]::"WeaponName"[],
DROP COLUMN "skills",
ADD COLUMN     "skills" "SkillName"[] DEFAULT ARRAY[]::"SkillName"[];

-- DropEnum
DROP TYPE "Skill";

-- DropEnum
DROP TYPE "Weapon";
