/*
  Warnings:

  - A unique constraint covering the columns `[name,deletedAt]` on the table `Clan` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Clan_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "Clan_name_deletedAt_key" ON "Clan"("name", "deletedAt");
