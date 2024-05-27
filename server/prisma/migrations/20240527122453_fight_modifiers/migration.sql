-- CreateEnum
CREATE TYPE "FightModifier" AS ENUM ('noThrows', 'focusOpponent', 'alwaysUseSupers', 'drawEveryWeapon');

-- AlterTable
ALTER TABLE "Fight" ADD COLUMN     "modifiers" "FightModifier"[] DEFAULT ARRAY[]::"FightModifier"[];
