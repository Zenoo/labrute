-- AlterTable
ALTER TABLE "ServerState" ADD COLUMN     "nextModifiers" "FightModifier"[] DEFAULT ARRAY[]::"FightModifier"[];
