-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_addressId_fkey";

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "addressId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
