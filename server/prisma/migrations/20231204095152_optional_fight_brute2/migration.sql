-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_brute2Id_fkey";

-- AlterTable
ALTER TABLE "Fight" ALTER COLUMN "brute2Id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute2Id_fkey" FOREIGN KEY ("brute2Id") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
