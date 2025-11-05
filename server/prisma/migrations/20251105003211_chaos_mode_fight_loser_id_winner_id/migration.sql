-- AlterEnum
ALTER TYPE "public"."FightModifier" ADD VALUE 'chaos';

-- AlterTable
ALTER TABLE "public"."Fight" ADD COLUMN     "loserId" UUID,
ADD COLUMN     "winnerId" UUID;
