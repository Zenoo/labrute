-- DropForeignKey
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_userId_fkey";

-- AlterTable
ALTER TABLE "Achievement" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
