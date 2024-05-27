/*
  Warnings:

  - The primary key for the `Achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Achievement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `bruteId` column on the `Achievement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `BannedWord` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `BannedWord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `BossDamage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Brute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `masterId` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `clanId` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `wantToJoinClanId` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `BruteInventoryItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `BruteInventoryItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `BruteReport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `BruteReport` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `BruteStartingStats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Clan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Clan` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ClanPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ClanPost` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ClanThread` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ClanThread` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `DestinyChoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `DestinyChoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Fight` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Log` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Log` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fightId` column on the `Log` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ServerState` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ServerState` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Title` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Title` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Tournament` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TournamentAchievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `TournamentAchievement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `TournamentGold` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `TournamentGold` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `TournamentXp` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `TournamentXp` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `WorkerJob` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `WorkerJob` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[id]` on the table `Achievement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BannedWord` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BossDamage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Brute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BruteInventoryItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BruteReport` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BruteStartingStats` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Clan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ClanPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ClanThread` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `DestinyChoice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Fight` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Log` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `ServerState` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Title` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Tournament` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TournamentAchievement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TournamentGold` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TournamentXp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `WorkerJob` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `BossDamage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BossDamage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `clanId` on the `BossDamage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BruteInventoryItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BruteReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `BruteStartingStats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BruteStartingStats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `masterId` on the `Clan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `threadId` on the `ClanPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `authorId` on the `ClanPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `clanId` on the `ClanThread` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `creatorId` on the `ClanThread` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `DestinyChoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Fight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currentBruteId` on the `Log` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Tournament` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `TournamentAchievement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `TournamentXp` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_BruteReportToUser` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_BruteToTitle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_BruteToTitle` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_BruteToTournament` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_BruteToTournament` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_Opponents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_Opponents` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- Allow to use  uuid_generate_v4()
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- DropForeignKey
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BossDamage" DROP CONSTRAINT "BossDamage_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BossDamage" DROP CONSTRAINT "BossDamage_clanId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_clanId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_masterId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_wantToJoinClanId_fkey";

-- DropForeignKey
ALTER TABLE "BruteInventoryItem" DROP CONSTRAINT "BruteInventoryItem_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BruteReport" DROP CONSTRAINT "BruteReport_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BruteStartingStats" DROP CONSTRAINT "BruteStartingStats_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "Clan" DROP CONSTRAINT "Clan_masterId_fkey";

-- DropForeignKey
ALTER TABLE "ClanPost" DROP CONSTRAINT "ClanPost_authorId_fkey";

-- DropForeignKey
ALTER TABLE "ClanPost" DROP CONSTRAINT "ClanPost_threadId_fkey";

-- DropForeignKey
ALTER TABLE "ClanThread" DROP CONSTRAINT "ClanThread_clanId_fkey";

-- DropForeignKey
ALTER TABLE "ClanThread" DROP CONSTRAINT "ClanThread_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "DestinyChoice" DROP CONSTRAINT "DestinyChoice_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_brute1Id_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_brute2Id_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_tournamentId_fkey";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_currentBruteId_fkey";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_fightId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentAchievement" DROP CONSTRAINT "TournamentAchievement_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentXp" DROP CONSTRAINT "TournamentXp_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "_BruteReportToUser" DROP CONSTRAINT "_BruteReportToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTitle" DROP CONSTRAINT "_BruteToTitle_A_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTitle" DROP CONSTRAINT "_BruteToTitle_B_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTournament" DROP CONSTRAINT "_BruteToTournament_A_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTournament" DROP CONSTRAINT "_BruteToTournament_B_fkey";

-- DropForeignKey
ALTER TABLE "_Opponents" DROP CONSTRAINT "_Opponents_A_fkey";

-- DropForeignKey
ALTER TABLE "_Opponents" DROP CONSTRAINT "_Opponents_B_fkey";

-- AlterTable
ALTER TABLE "Achievement" DROP CONSTRAINT if exists "Achievement_pkey";
ALTER TABLE "Achievement" ADD COLUMN "temp_id" INT ;
ALTER TABLE "Achievement" ADD COLUMN "temp_bruteId" INT;
UPDATE "Achievement" SET "temp_id" = "id";
UPDATE "Achievement" SET "temp_bruteId" = "bruteId";
ALTER TABLE "Achievement" DROP COLUMN "id";
ALTER TABLE "Achievement" DROP COLUMN "bruteId";
ALTER TABLE "Achievement" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "Achievement" ADD COLUMN "bruteId" uuid  DEFAULT NULL;
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BannedWord" DROP CONSTRAINT IF exists "BannedWord_pkey";
ALTER TABLE "BannedWord" ADD COLUMN "temp_id" INT ;
UPDATE "BannedWord" SET "temp_id" = "id";
ALTER TABLE "BannedWord" DROP COLUMN "id";
ALTER TABLE "BannedWord" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE  "BannedWord"  ADD CONSTRAINT "BannedWord_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BossDamage" DROP CONSTRAINT if exists "BossDamage_pkey";
ALTER TABLE "BossDamage" ADD COLUMN "temp_id" INT ;
ALTER TABLE "BossDamage" ADD COLUMN "temp_clanId" INT;
ALTER TABLE "BossDamage" ADD COLUMN "temp_bruteId" INT;
UPDATE "BossDamage" SET "temp_id" = "id";
UPDATE "BossDamage" SET "temp_clanId" = "clanId";
UPDATE "BossDamage" SET "temp_bruteId" = "bruteId";
ALTER TABLE "BossDamage" DROP COLUMN "clanId";
ALTER TABLE "BossDamage" DROP COLUMN "bruteId";
ALTER TABLE "BossDamage" DROP COLUMN "id";
ALTER TABLE "BossDamage" ADD COLUMN "clanId" uuid  NOT NULL;
ALTER TABLE "BossDamage" ADD COLUMN "bruteId" uuid NOT NULL;
ALTER TABLE "BossDamage" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Brute" DROP CONSTRAINT if exists "Brute_pkey";
ALTER TABLE "Brute" ADD COLUMN "temp_masterId" INT ;
ALTER TABLE "Brute" ADD COLUMN "temp_id" INT;
ALTER TABLE "Brute" ADD COLUMN "temp_clanId" INT ;
ALTER TABLE "Brute" ADD COLUMN "temp_wantToJoinClanId" INT ;
UPDATE "Brute" SET "temp_id" = "id";
UPDATE "Brute" SET "temp_masterId" = "masterId";
UPDATE "Brute" SET "temp_clanId" = "clanId";
UPDATE "Brute" SET "temp_wantToJoinClanId" = "wantToJoinClanId";
ALTER TABLE "Brute" DROP COLUMN IF EXISTS "id";
ALTER TABLE "Brute" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "Brute" DROP COLUMN "masterId";
ALTER TABLE "Brute" ADD COLUMN "masterId" uuid  DEFAULT NULL;
ALTER TABLE "Brute" DROP COLUMN "clanId";
ALTER TABLE "Brute" ADD COLUMN "clanId" uuid  DEFAULT NULL;
ALTER TABLE "Brute" DROP COLUMN "wantToJoinClanId";
ALTER TABLE "Brute" ADD COLUMN "wantToJoinClanId" uuid  DEFAULT NULL;
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BruteInventoryItem" DROP CONSTRAINT IF exists "BruteInventoryItem_pkey";
ALTER TABLE "BruteInventoryItem" ADD COLUMN "temp_id" INT;
ALTER TABLE "BruteInventoryItem" ADD COLUMN "temp_bruteId" INT;
UPDATE "BruteInventoryItem" SET "temp_id" = "id";
UPDATE "BruteInventoryItem" SET "temp_bruteId" = "bruteId";
ALTER TABLE "BruteInventoryItem" DROP COLUMN "id";
ALTER TABLE "BruteInventoryItem" DROP COLUMN "bruteId";
ALTER TABLE "BruteInventoryItem" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "BruteInventoryItem" ADD COLUMN "bruteId" uuid  NOT NULL;
ALTER TABLE "BruteInventoryItem" ADD CONSTRAINT "BruteInventoryItem_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BruteReport" DROP CONSTRAINT IF exists "BruteReport_pkey";
ALTER TABLE "BruteReport" ADD COLUMN "temp_id" INT;
ALTER TABLE "BruteReport" ADD COLUMN "temp_bruteId" INT;
UPDATE "BruteReport" SET "temp_id" = "id";
UPDATE "BruteReport" SET "temp_bruteId" = "bruteId";
ALTER TABLE "BruteReport" DROP COLUMN "id";
ALTER TABLE "BruteReport" DROP COLUMN "bruteId";
ALTER TABLE "BruteReport" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "BruteReport" ADD COLUMN "bruteId" uuid  NOT NULL ;
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BruteStartingStats" DROP CONSTRAINT IF exists "BruteStartingStats_pkey";
ALTER TABLE "BruteStartingStats" ADD COLUMN "temp_bruteId" INT;
ALTER TABLE "BruteStartingStats" ADD COLUMN "temp_id" INT;
UPDATE "BruteStartingStats" SET "temp_bruteId" = "bruteId";
UPDATE "BruteStartingStats" SET "temp_id" = "id";
ALTER TABLE "BruteStartingStats" DROP COLUMN "bruteId";
ALTER TABLE "BruteStartingStats" DROP COLUMN "id";
ALTER TABLE "BruteStartingStats" ADD COLUMN "bruteId" uuid  NOT NULL;
ALTER TABLE "BruteStartingStats" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "BruteStartingStats" ADD CONSTRAINT "BruteStartingStats_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Clan" DROP CONSTRAINT IF exists "Clan_pkey";
ALTER TABLE "Clan" ADD COLUMN "temp_id" INT;
ALTER TABLE "Clan" ADD COLUMN "temp_masterId" INT;
UPDATE "Clan" SET "temp_id" = "id";
UPDATE "Clan" SET "temp_masterId" = "masterId";
ALTER TABLE "Clan" DROP COLUMN "id";
ALTER TABLE "Clan" DROP COLUMN "masterId";
ALTER TABLE "Clan" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "Clan" ADD COLUMN "masterId" uuid  NOT NULL ;
ALTER TABLE "Clan" ADD CONSTRAINT "Clan_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ClanPost" DROP CONSTRAINT IF exists "ClanPost_pkey";
ALTER TABLE "ClanPost" ADD COLUMN "temp_id" INT;
ALTER TABLE "ClanPost" ADD COLUMN "temp_threadId" INT;
ALTER TABLE "ClanPost" ADD COLUMN "temp_authorId" INT;
UPDATE "ClanPost" SET "temp_id" = "id";
UPDATE "ClanPost" SET "temp_threadId" = "threadId";
UPDATE "ClanPost" SET "temp_authorId" = "authorId";
ALTER TABLE "ClanPost" DROP COLUMN "id";
ALTER TABLE "ClanPost" DROP COLUMN "authorId";
ALTER TABLE "ClanPost" DROP COLUMN "threadId";
ALTER TABLE "ClanPost" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "ClanPost" ADD COLUMN "threadId" uuid  NOT NULL ;
ALTER TABLE "ClanPost" ADD COLUMN "authorId" uuid  NOT NULL ;
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ClanThread" DROP CONSTRAINT IF exists "ClanThread_pkey";
ALTER TABLE "ClanThread" ADD COLUMN "temp_id" INT;
ALTER TABLE "ClanThread" ADD COLUMN "temp_clanId" INT;
ALTER TABLE "ClanThread" ADD COLUMN "temp_creatorId" INT;
UPDATE "ClanThread" SET "temp_id" = "id";
UPDATE "ClanThread" SET "temp_clanId" = "clanId";
UPDATE "ClanThread" SET "temp_creatorId" = "creatorId";
ALTER TABLE "ClanThread" DROP COLUMN "id";
ALTER TABLE "ClanThread" DROP COLUMN "clanId";
ALTER TABLE "ClanThread" DROP COLUMN "creatorId";
ALTER TABLE "ClanThread" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "ClanThread" ADD COLUMN "clanId" uuid  NOT NULL;
ALTER TABLE "ClanThread" ADD COLUMN "creatorId" uuid  NOT NULL;
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "DestinyChoice" DROP CONSTRAINT IF exists "DestinyChoice_pkey";
ALTER TABLE "DestinyChoice" ADD COLUMN "temp_id" INT;
ALTER TABLE "DestinyChoice" ADD COLUMN "temp_bruteId" INT;
UPDATE "DestinyChoice" SET "temp_id" = "id";
UPDATE "DestinyChoice" SET "temp_bruteId" = "bruteId";
ALTER TABLE "DestinyChoice" DROP COLUMN "id";
ALTER TABLE "DestinyChoice" DROP COLUMN "bruteId";
ALTER TABLE "DestinyChoice" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();;
ALTER TABLE "DestinyChoice" ADD COLUMN "bruteId" uuid  NOT NULL;
ALTER TABLE "DestinyChoice" ADD CONSTRAINT "DestinyChoice_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Fight" DROP CONSTRAINT IF exists "Fight_pkey";
ALTER TABLE "Fight" ADD COLUMN "temp_id" INT;
ALTER TABLE "Fight" ADD COLUMN "temp_brute1Id" INT;
ALTER TABLE "Fight" ADD COLUMN "temp_brute2Id" INT;
ALTER TABLE "Fight" ADD COLUMN "temp_tournamentId" INT;
UPDATE "Fight" SET "temp_id" = "id";
UPDATE "Fight" SET "temp_brute1Id" = "brute1Id";
UPDATE "Fight" SET "temp_brute2Id" = "brute2Id";
UPDATE "Fight" SET "temp_tournamentId" = "tournamentId";
ALTER TABLE "Fight" DROP COLUMN "id";
ALTER TABLE "Fight" DROP COLUMN "brute1Id";
ALTER TABLE "Fight" DROP COLUMN "brute2Id";
ALTER TABLE "Fight" DROP COLUMN "tournamentId";
ALTER TABLE "Fight" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "Fight" ADD COLUMN "brute1Id" uuid  NOT NULL ;
ALTER TABLE "Fight" ADD COLUMN "brute2Id" uuid  DEFAULT NULL;
ALTER TABLE "Fight" ADD COLUMN "tournamentId" uuid  DEFAULT NULL;
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Log" DROP CONSTRAINT IF exists "Log_pkey";
ALTER TABLE "Log" ADD COLUMN "temp_id" INT;
ALTER TABLE "Log" ADD COLUMN "temp_currentBruteId" INT;
ALTER TABLE "Log" ADD COLUMN "temp_fightId" INT;
UPDATE "Log" SET "temp_id" = "id";
UPDATE "Log" SET "temp_currentBruteId" = "currentBruteId";
UPDATE "Log" SET "temp_fightId" = "fightId";
ALTER TABLE "Log" DROP COLUMN "id";
ALTER TABLE "Log" DROP COLUMN "currentBruteId";
ALTER TABLE "Log" DROP COLUMN "fightId";
ALTER TABLE "Log" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "Log" ADD COLUMN "currentBruteId" uuid  NOT NULL ;
ALTER TABLE "Log" ADD COLUMN "fightId" uuid  DEFAULT NULL;
ALTER TABLE "Log" ADD CONSTRAINT "Log_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ServerState" DROP CONSTRAINT IF exists "ServerState_pkey";
ALTER TABLE "ServerState" ADD COLUMN "temp_id" INT;
UPDATE "ServerState" SET "temp_id" = "id";
ALTER TABLE "ServerState" DROP COLUMN "id";
ALTER TABLE "ServerState" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "ServerState" ADD CONSTRAINT "ServerState_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Title" DROP CONSTRAINT IF exists "Title_pkey";
ALTER TABLE "Title" ADD COLUMN "temp_id" INT;
UPDATE "Title" SET "temp_id" = "id";
ALTER TABLE "Title" DROP COLUMN "id";
ALTER TABLE "Title" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "Title" ADD CONSTRAINT "Title_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Tournament" DROP CONSTRAINT IF exists "Tournament_pkey";
ALTER TABLE "Tournament" ADD COLUMN "temp_id" INT;
UPDATE "Tournament" SET "temp_id" = "id";
ALTER TABLE "Tournament" DROP COLUMN "id";
ALTER TABLE "Tournament" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TournamentAchievement" DROP CONSTRAINT IF exists "TournamentAchievement_pkey";
ALTER TABLE "TournamentAchievement" ADD COLUMN "temp_id" INT;
ALTER TABLE "TournamentAchievement" ADD COLUMN "temp_bruteId" INT;
UPDATE "TournamentAchievement" SET "temp_id" = "id";
UPDATE "TournamentAchievement" SET "temp_bruteId" = "bruteId";
ALTER TABLE "TournamentAchievement" DROP COLUMN "id";
ALTER TABLE "TournamentAchievement" DROP COLUMN "bruteId";
ALTER TABLE "TournamentAchievement" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "TournamentAchievement" ADD COLUMN "bruteId" uuid  NOT NULL ;
ALTER TABLE "TournamentAchievement" ADD CONSTRAINT "TournamentAchievement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TournamentGold" DROP CONSTRAINT IF exists "TournamentGold_pkey";
ALTER TABLE "TournamentGold" ADD COLUMN "temp_id" INT;
UPDATE "TournamentGold" SET "temp_id" = "id";
ALTER TABLE "TournamentGold" DROP COLUMN "id";
ALTER TABLE "TournamentGold" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "TournamentGold" ADD CONSTRAINT "TournamentGold_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TournamentXp" DROP CONSTRAINT IF exists "TournamentXp_pkey";
ALTER TABLE "TournamentXp" ADD COLUMN "temp_id" INT;
ALTER TABLE "TournamentXp" ADD COLUMN "temp_bruteId" INT;
UPDATE "TournamentXp" SET "temp_id" = "id";
UPDATE "TournamentXp" SET "temp_bruteId" = "bruteId";
ALTER TABLE "TournamentXp" DROP COLUMN "id";
ALTER TABLE "TournamentXp" DROP COLUMN "bruteId";
ALTER TABLE "TournamentXp" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "TournamentXp" ADD COLUMN "bruteId" uuid  NOT NULL;
ALTER TABLE "TournamentXp" ADD CONSTRAINT "TournamentXp_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WorkerJob" DROP CONSTRAINT IF exists "WorkerJob_pkey";
ALTER TABLE "WorkerJob" ADD COLUMN "temp_id" INT;
UPDATE "WorkerJob" SET "temp_id" = "id";
ALTER TABLE "WorkerJob" DROP COLUMN "id";
ALTER TABLE "WorkerJob" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4();
ALTER TABLE "WorkerJob" ADD CONSTRAINT "WorkerJob_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_BruteReportToUser" ADD COLUMN "temp_A" INT;
UPDATE "_BruteReportToUser" SET "temp_A" = "A";
ALTER TABLE "_BruteReportToUser" DROP COLUMN "A";
ALTER TABLE "_BruteReportToUser" ADD COLUMN "A" uuid NOT NULL ;

-- AlterTable
ALTER TABLE "_BruteToTitle" ADD COLUMN "temp_A" INT;
UPDATE "_BruteToTitle" SET "temp_A" = "A";
ALTER TABLE "_BruteToTitle" DROP COLUMN "A";
ALTER TABLE "_BruteToTitle" ADD COLUMN "A" uuid NOT NULL ;
ALTER TABLE "_BruteToTitle" ADD COLUMN "temp_B" INT;
UPDATE "_BruteToTitle" SET "temp_B" = "B";
ALTER TABLE "_BruteToTitle" DROP COLUMN "B";
ALTER TABLE "_BruteToTitle" ADD COLUMN "B" uuid NOT NULL;

-- AlterTable
ALTER TABLE "_BruteToTournament" ADD COLUMN "temp_A" INT;
UPDATE "_BruteToTournament" SET "temp_A" = "A";
ALTER TABLE "_BruteToTournament" DROP COLUMN "A";
ALTER TABLE "_BruteToTournament" ADD COLUMN "A" uuid NOT NULL ;
ALTER TABLE "_BruteToTournament" ADD COLUMN "temp_B" INT;
UPDATE "_BruteToTournament" SET "temp_B" = "B";
ALTER TABLE "_BruteToTournament" DROP COLUMN "B";
ALTER TABLE "_BruteToTournament" ADD COLUMN "B" uuid NOT NULL ;

-- AlterTable
ALTER TABLE "_Opponents" ADD COLUMN "temp_A" INT;
UPDATE "_Opponents" SET "temp_A" = "A";
ALTER TABLE "_Opponents" DROP COLUMN "A";
ALTER TABLE "_Opponents" ADD COLUMN "A" uuid NOT NULL ;
ALTER TABLE "_Opponents" ADD COLUMN "temp_B" INT;
UPDATE "_Opponents" SET "temp_B" = "B";
ALTER TABLE "_Opponents" DROP COLUMN "B";
ALTER TABLE "_Opponents" ADD COLUMN "B" uuid NOT NULL ;


-- UPDATE DATAS
UPDATE "Achievement" SET "bruteId" = "Brute"."id" FROM "Brute" WHERE "Achievement"."temp_bruteId" = "Brute"."temp_id";
UPDATE "Brute" SET "masterId" = "id" WHERE "temp_masterId" = "temp_id";
UPDATE "Brute" b SET "clanId" = c."id" FROM "Clan" c WHERE b."temp_clanId" = c."temp_id" AND b."temp_id" IS NOT NULL;
UPDATE "BruteInventoryItem" bii SET "bruteId" = b."id" FROM "Brute" b WHERE bii."temp_bruteId" = b."temp_id" AND bii."temp_bruteId" IS NOT NULL;
UPDATE "BruteReport" br SET "bruteId" = b."id" FROM "Brute" b WHERE br."temp_bruteId" = b."temp_id" AND br."temp_bruteId" IS NOT NULL;
UPDATE "Clan" c SET "masterId" = b."id" FROM  "Brute" b WHERE c."temp_masterId" = b."temp_id" AND c."temp_masterId" IS NOT NULL;

UPDATE "ClanPost" cp
SET "authorId" = b."id",
    "threadId" = ct."id"
FROM "Brute" b, "ClanThread" ct
WHERE b."temp_id" = cp."temp_authorId"
  AND ct."temp_id" = cp."temp_threadId"
  AND cp."temp_authorId" IS NOT NULL
  AND cp."temp_threadId" IS NOT NULL;

UPDATE "ClanThread" ct
SET "clanId" = c."id" , "creatorId" = b."id"
FROM "Clan" c ,"Brute" b
WHERE c."temp_id" = ct."temp_clanId"
    AND b."temp_id" = ct."temp_creatorId"
    AND ct."temp_clanId"  IS NOT NULL
    AND ct."temp_creatorId" IS NOT NULL;


UPDATE "BossDamage" bd
SET "clanId" = c."id" , "bruteId" = b."id"
FROM "Clan" c , "Brute" b
WHERE c."temp_id" = bd."temp_clanId" AND b."temp_id" = bd."temp_bruteId" AND bd."temp_clanId"  IS NOT NULL AND bd."temp_bruteId" IS NOT NULL;


UPDATE "BruteStartingStats" bss
SET  "bruteId" = b."id"
FROM  "Brute" b
WHERE b."temp_id" = bss."temp_bruteId" AND bss."temp_bruteId" IS NOT NULL;

UPDATE "DestinyChoice" dc SET "bruteId" = b."id" FROM "Brute" b WHERE b."temp_id" = dc."temp_bruteId"  AND dc."temp_bruteId" IS NOT NULL;

UPDATE "Fight" f
SET "brute1Id" = b1."id" ,  "brute2Id" = b2."id" , "tournamentId" = t."id"
FROM "Brute" b1, "Brute" b2, "Tournament" t
WHERE b1."temp_id" = f."temp_brute1Id" AND b2."temp_id" = f."temp_brute2Id" AND t."temp_id" =  f."temp_tournamentId"
    AND f."brute1Id"  IS NOT NULL
    AND f."brute2Id"  IS NOT NULL
    AND f."tournamentId"  IS NOT NULL;

UPDATE "Log" l
SET "currentBruteId" = b."id" , "fightId" = f."id"
FROM "Brute" b , "Fight" f
WHERE b."temp_id" = l."temp_currentBruteId"
    AND f."temp_id" = l."temp_fightId"
    AND l."currentBruteId" IS NOT NULL
    AND l."fightId" IS NOT NULL;

UPDATE "TournamentAchievement" ta
SET "bruteId" = b."id" FROM "Brute" b
WHERE b."temp_id" = ta."temp_bruteId" AND ta."bruteId" IS NOT NULL;



UPDATE "_BruteReportToUser" btr
SET "A" = b."id" FROM "Brute" b WHERE b."temp_id" = btr."temp_A" AND btr."A" IS NOT NULL;

UPDATE "_BruteToTitle" btt
SET "A" = b."id" , "B" = t."id"
FROM "Brute" b , "Title" t
WHERE b."temp_id" = btt."temp_A" AND t."temp_id" = btt."temp_B" AND btt."A" IS NOT NULL AND btt."B" IS NOT NULL;


UPDATE "_BruteToTournament" bt
SET "A" = b."id" , "B" = t."id" FROM "Brute" b , "Tournament" t  WHERE b."temp_id" = bt."temp_A" AND t."temp_id" = bt."temp_B" AND bt."A" IS NOT NULL AND bt."B" IS NOT NULL;

UPDATE "_Opponents" o
SET "A" = b1."id" , "B" = b2."id"
FROM "Brute" b1 , "Brute" b2
WHERE b1."temp_id" = o."temp_A"
  AND b2."temp_id" = o."temp_B"
  AND o."A" IS NOT NULL
  AND o."B" IS NOT NULL;


--  Delete all temp_ columns
ALTER TABLE "Achievement" DROP COLUMN "temp_id"  ;
ALTER TABLE "Achievement" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "BannedWord" DROP COLUMN "temp_id"  ;
ALTER TABLE "Brute" DROP COLUMN "temp_masterId"  ;
ALTER TABLE "Brute" DROP COLUMN "temp_id" ;
ALTER TABLE "Brute" DROP COLUMN "temp_clanId"  ;
ALTER TABLE "Brute" DROP COLUMN "temp_wantToJoinClanId"  ;
ALTER TABLE "BruteInventoryItem" DROP COLUMN "temp_id" ;
ALTER TABLE "BruteInventoryItem" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "BruteReport" DROP COLUMN "temp_id" ;
ALTER TABLE "BruteReport" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "Clan" DROP COLUMN "temp_id" ;
ALTER TABLE "Clan" DROP COLUMN "temp_masterId" ;
ALTER TABLE "ClanPost" DROP COLUMN "temp_id" ;
ALTER TABLE "ClanPost" DROP COLUMN "temp_threadId" ;
ALTER TABLE "ClanPost" DROP COLUMN "temp_authorId" ;
ALTER TABLE "ClanThread" DROP COLUMN "temp_id" ;
ALTER TABLE "ClanThread" DROP COLUMN "temp_clanId" ;
ALTER TABLE "ClanThread" DROP COLUMN "temp_creatorId" ;
ALTER TABLE "BossDamage" DROP COLUMN "temp_clanId" ;
ALTER TABLE "BossDamage" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "BossDamage" DROP COLUMN "temp_id" ;
ALTER TABLE "BruteStartingStats" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "BruteStartingStats" DROP COLUMN "temp_id" ;
ALTER TABLE "DestinyChoice" DROP COLUMN "temp_id" ;
ALTER TABLE "DestinyChoice" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "Fight" DROP COLUMN "temp_id" ;
ALTER TABLE "Fight" DROP COLUMN "temp_brute1Id" ;
ALTER TABLE "Fight" DROP COLUMN "temp_brute2Id" ;
ALTER TABLE "Fight" DROP COLUMN "temp_tournamentId" ;
ALTER TABLE "Log" DROP COLUMN "temp_id" ;
ALTER TABLE "Log" DROP COLUMN "temp_currentBruteId" ;
ALTER TABLE "Log" DROP COLUMN "temp_fightId" ;
ALTER TABLE "ServerState" DROP COLUMN "temp_id" ;
ALTER TABLE "Title" DROP COLUMN "temp_id" ;
ALTER TABLE "Tournament" DROP COLUMN "temp_id" ;
ALTER TABLE "TournamentAchievement" DROP COLUMN "temp_id" ;
ALTER TABLE "TournamentAchievement" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "TournamentGold" DROP COLUMN "temp_id" ;
ALTER TABLE "TournamentXp" DROP COLUMN "temp_id" ;
ALTER TABLE "TournamentXp" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "WorkerJob" DROP COLUMN "temp_id" ;
ALTER TABLE "_BruteReportToUser" DROP COLUMN "temp_A" ;
ALTER TABLE "_BruteToTitle" DROP COLUMN "temp_A" ;
ALTER TABLE "_BruteToTitle" DROP COLUMN "temp_B" ;
ALTER TABLE "_BruteToTournament" DROP COLUMN "temp_A" ;
ALTER TABLE "_BruteToTournament" DROP COLUMN "temp_B" ;
ALTER TABLE "_Opponents" DROP COLUMN "temp_A" ;
ALTER TABLE "_Opponents" DROP COLUMN "temp_B" ;

-- CreateIndex
CREATE INDEX "Fight_tournamentId_winner_brute1Id_brute2Id_idx" ON "Fight"("tournamentId", "winner", "brute1Id", "brute2Id");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_id_key" ON "Achievement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_name_bruteId_key" ON "Achievement"("name", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BannedWord_id_key" ON "BannedWord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BossDamage_id_key" ON "BossDamage"("id");

-- CreateIndex
CREATE INDEX "BossDamage_clanId_idx" ON "BossDamage"("clanId");

-- CreateIndex
CREATE UNIQUE INDEX "BossDamage_bruteId_clanId_key" ON "BossDamage"("bruteId", "clanId");

-- CreateIndex
CREATE UNIQUE INDEX "Brute_id_key" ON "Brute"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteInventoryItem_id_key" ON "BruteInventoryItem"("id");

-- CreateIndex
CREATE INDEX "BruteInventoryItem_bruteId_idx" ON "BruteInventoryItem"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BruteInventoryItem_type_bruteId_key" ON "BruteInventoryItem"("type", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BruteReport_id_key" ON "BruteReport"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteStartingStats_id_key" ON "BruteStartingStats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteStartingStats_bruteId_key" ON "BruteStartingStats"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "Clan_id_key" ON "Clan"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Clan_masterId_key" ON "Clan"("masterId");

-- CreateIndex
CREATE UNIQUE INDEX "ClanPost_id_key" ON "ClanPost"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ClanThread_id_key" ON "ClanThread"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DestinyChoice_id_key" ON "DestinyChoice"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Fight_id_key" ON "Fight"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Log_id_key" ON "Log"("id");

-- CreateIndex
CREATE INDEX "Log_currentBruteId_date_idx" ON "Log"("currentBruteId", "date");

-- CreateIndex
CREATE UNIQUE INDEX "ServerState_id_key" ON "ServerState"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Title_id_key" ON "Title"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tournament_id_key" ON "Tournament"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentAchievement_id_key" ON "TournamentAchievement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentGold_id_key" ON "TournamentGold"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentXp_id_key" ON "TournamentXp"("id");

-- CreateIndex
CREATE UNIQUE INDEX "WorkerJob_id_key" ON "WorkerJob"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_BruteReportToUser_AB_unique" ON "_BruteReportToUser"("A", "B");

-- CreateIndex
CREATE UNIQUE INDEX "_BruteToTitle_AB_unique" ON "_BruteToTitle"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteToTitle_B_index" ON "_BruteToTitle"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BruteToTournament_AB_unique" ON "_BruteToTournament"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteToTournament_B_index" ON "_BruteToTournament"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Opponents_AB_unique" ON "_Opponents"("A", "B");

-- CreateIndex
CREATE INDEX "_Opponents_B_index" ON "_Opponents"("B");

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_wantToJoinClanId_fkey" FOREIGN KEY ("wantToJoinClanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteStartingStats" ADD CONSTRAINT "BruteStartingStats_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute1Id_fkey" FOREIGN KEY ("brute1Id") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute2Id_fkey" FOREIGN KEY ("brute2Id") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_currentBruteId_fkey" FOREIGN KEY ("currentBruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DestinyChoice" ADD CONSTRAINT "DestinyChoice_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentAchievement" ADD CONSTRAINT "TournamentAchievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentXp" ADD CONSTRAINT "TournamentXp_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Clan" ADD CONSTRAINT "Clan_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "ClanThread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClanPost" ADD CONSTRAINT "ClanPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BossDamage" ADD CONSTRAINT "BossDamage_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteInventoryItem" ADD CONSTRAINT "BruteInventoryItem_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTournament" ADD CONSTRAINT "_BruteToTournament_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Opponents" ADD CONSTRAINT "_Opponents_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Opponents" ADD CONSTRAINT "_Opponents_B_fkey" FOREIGN KEY ("B") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTitle" ADD CONSTRAINT "_BruteToTitle_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTitle" ADD CONSTRAINT "_BruteToTitle_B_fkey" FOREIGN KEY ("B") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteReportToUser" ADD CONSTRAINT "_BruteReportToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "BruteReport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
