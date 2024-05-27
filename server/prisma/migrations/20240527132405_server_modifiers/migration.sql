-- AlterTable
ALTER TABLE "ServerState" ADD COLUMN     "activeModifiers" "FightModifier"[] DEFAULT ARRAY[]::"FightModifier"[],
ADD COLUMN     "modifiersEndAt" DATE;
