-- CreateEnum
CREATE TYPE "public"."ClanPermission" AS ENUM ('canAcceptJoinRequests', 'canRejectJoinRequests', 'canRemoveMembers', 'canSelectWarFighters', 'canPinThreads', 'canUnpinThreads', 'canDeletePosts', 'canDeleteThreads', 'canCreateRoles', 'canChangeRoles');

-- AlterTable
ALTER TABLE "public"."Brute" ADD COLUMN     "clanRoleId" UUID;

-- CreateTable
CREATE TABLE "public"."ClanRole" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "clanId" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "permissions" "public"."ClanPermission"[] DEFAULT ARRAY[]::"public"."ClanPermission"[],
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClanRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClanRole_id_key" ON "public"."ClanRole"("id");

-- CreateIndex
CREATE INDEX "ClanRole_clanId_idx" ON "public"."ClanRole"("clanId");

-- CreateIndex
CREATE INDEX "ClanRole_id_clanId_idx" ON "public"."ClanRole"("id", "clanId");

-- CreateIndex
CREATE INDEX "ClanRole_clanId_name_idx" ON "public"."ClanRole"("clanId", "name");

-- AddForeignKey
ALTER TABLE "public"."Brute" ADD CONSTRAINT "Brute_clanRoleId_fkey" FOREIGN KEY ("clanRoleId") REFERENCES "public"."ClanRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClanRole" ADD CONSTRAINT "ClanRole_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "public"."Clan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
