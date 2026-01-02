/*
  Warnings:

  - You are about to drop the `ClanMemberRole` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ClanMemberRole" DROP CONSTRAINT "ClanMemberRole_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ClanMemberRole" DROP CONSTRAINT "ClanMemberRole_roleId_fkey";

-- AlterTable
ALTER TABLE "public"."Brute" ADD COLUMN     "clanRoleId" UUID;

-- AlterTable
ALTER TABLE "public"."ClanRole" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMPTZ;

-- DropTable
DROP TABLE "public"."ClanMemberRole";

-- CreateIndex
CREATE INDEX "ClanRole_id_clanId_idx" ON "public"."ClanRole"("id", "clanId");

-- CreateIndex
CREATE INDEX "ClanRole_clanId_name_idx" ON "public"."ClanRole"("clanId", "name");

-- AddForeignKey
ALTER TABLE "public"."Brute" ADD CONSTRAINT "Brute_clanRoleId_fkey" FOREIGN KEY ("clanRoleId") REFERENCES "public"."ClanRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;
