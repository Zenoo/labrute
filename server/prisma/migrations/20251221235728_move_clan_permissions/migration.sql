-- CreateEnum
CREATE TYPE "public"."ClanPermission" AS ENUM ('canAcceptJoinRequests', 'canRejectJoinRequests', 'canRemoveMembers', 'canSelectWarFighters', 'canPinThreads', 'canUnpinThreads', 'canDeletePosts', 'canDeleteThreads', 'canCreateRoles', 'canChangeRoles');

-- CreateTable
CREATE TABLE "public"."ClanRole" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "clanId" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "permissions" "public"."ClanPermission"[] DEFAULT ARRAY[]::"public"."ClanPermission"[],
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClanRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ClanMemberRole" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "bruteId" UUID NOT NULL,
    "roleId" UUID NOT NULL,

    CONSTRAINT "ClanMemberRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClanRole_id_key" ON "public"."ClanRole"("id");

-- CreateIndex
CREATE INDEX "ClanRole_clanId_idx" ON "public"."ClanRole"("clanId");

-- CreateIndex
CREATE UNIQUE INDEX "ClanMemberRole_id_key" ON "public"."ClanMemberRole"("id");

-- CreateIndex
CREATE INDEX "ClanMemberRole_bruteId_idx" ON "public"."ClanMemberRole"("bruteId");

-- CreateIndex
CREATE INDEX "ClanMemberRole_roleId_idx" ON "public"."ClanMemberRole"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "ClanMemberRole_bruteId_roleId_key" ON "public"."ClanMemberRole"("bruteId", "roleId");

-- AddForeignKey
ALTER TABLE "public"."ClanRole" ADD CONSTRAINT "ClanRole_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "public"."Clan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClanMemberRole" ADD CONSTRAINT "ClanMemberRole_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "public"."Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ClanMemberRole" ADD CONSTRAINT "ClanMemberRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "public"."ClanRole"("id") ON DELETE CASCADE ON UPDATE CASCADE;
