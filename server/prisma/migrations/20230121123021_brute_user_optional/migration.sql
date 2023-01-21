-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_userId_fkey";

-- AlterTable
ALTER TABLE "Brute" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
