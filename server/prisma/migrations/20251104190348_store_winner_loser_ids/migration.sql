/*
  Warnings:

  - Added the required column `loserId` to the `Fight` table without a default value. This is not possible if the table is not empty.
  - Added the required column `winnerId` to the `Fight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Fight" ADD COLUMN     "loserId" UUID NOT NULL,
ADD COLUMN     "winnerId" UUID NOT NULL;
