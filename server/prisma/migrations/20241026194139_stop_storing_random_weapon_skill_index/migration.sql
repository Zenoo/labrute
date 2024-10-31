/*
  Warnings:

  - You are about to drop the column `randomSkill` on the `ServerState` table. All the data in the column will be lost.
  - You are about to drop the column `randomWeapon` on the `ServerState` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ServerState" DROP COLUMN "randomSkill",
DROP COLUMN "randomWeapon";
