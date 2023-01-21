/*
  Warnings:

  - The `pets` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PetName" AS ENUM ('dog1', 'dog2', 'dog3', 'panther', 'bear');

-- AlterTable
ALTER TABLE "Brute" ALTER COLUMN "ranking" SET DEFAULT 10,
DROP COLUMN "pets",
ADD COLUMN     "pets" "PetName"[] DEFAULT ARRAY[]::"PetName"[];

-- DropEnum
DROP TYPE "Pet";
