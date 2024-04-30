/*
  Warnings:

  - The primary key for the `Achievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `bruteId` column on the `Achievement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `BannedWord` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Brute` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `masterId` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `clanId` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `wantToJoinClanId` column on the `Brute` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `BruteBody` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BruteColors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BruteInventoryItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `BruteReport` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Clan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ClanPost` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ClanThread` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DestinyChoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Fight` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `brute2Id` column on the `Fight` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Log` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `fightId` column on the `Log` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ServerState` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Title` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tournament` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TournamentAchievement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TournamentGold` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TournamentStep` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TournamentXp` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WorkerJob` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Achievement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BannedWord` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Brute` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BruteBody` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BruteColors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BruteInventoryItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `BruteReport` will be added. If there are existing duplicate values, this will fail.
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
  - A unique constraint covering the columns `[id]` on the table `TournamentStep` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TournamentXp` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `WorkerJob` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `Achievement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `BannedWord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Brute` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `BruteBody` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BruteBody` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `BruteColors` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BruteColors` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `BruteInventoryItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BruteInventoryItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `BruteReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `BruteReport` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Clan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `masterId` on the `Clan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `ClanPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `threadId` on the `ClanPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `authorId` on the `ClanPost` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `ClanThread` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `clanId` on the `ClanThread` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `creatorId` on the `ClanThread` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `DestinyChoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `DestinyChoice` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Fight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `brute1Id` on the `Fight` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Log` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currentBruteId` on the `Log` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `ServerState` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Title` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Tournament` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `TournamentAchievement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `TournamentAchievement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `TournamentGold` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `TournamentStep` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tournamentId` on the `TournamentStep` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fightId` on the `TournamentStep` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `TournamentXp` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bruteId` on the `TournamentXp` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `WorkerJob` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
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
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_clanId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_masterId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_wantToJoinClanId_fkey";

-- DropForeignKey
ALTER TABLE "BruteBody" DROP CONSTRAINT "BruteBody_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BruteColors" DROP CONSTRAINT "BruteColors_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BruteInventoryItem" DROP CONSTRAINT "BruteInventoryItem_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BruteReport" DROP CONSTRAINT "BruteReport_bruteId_fkey";

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
ALTER TABLE "Log" DROP CONSTRAINT "Log_currentBruteId_fkey";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_fightId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentAchievement" DROP CONSTRAINT "TournamentAchievement_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentStep" DROP CONSTRAINT "TournamentStep_fightId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentStep" DROP CONSTRAINT "TournamentStep_tournamentId_fkey";

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

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_pkey";
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
ALTER TABLE "BruteBody" DROP CONSTRAINT IF exists "BruteBody_pkey";
ALTER TABLE "BruteBody" ADD COLUMN "temp_id" INT;
ALTER TABLE "BruteBody" ADD COLUMN "temp_bruteId" INT;
UPDATE "BruteBody" SET "temp_id" = "id";
UPDATE "BruteBody" SET "temp_bruteId" = "bruteId";
ALTER TABLE "BruteBody" DROP COLUMN "id";
ALTER TABLE "BruteBody" DROP COLUMN "bruteId";
ALTER TABLE "BruteBody" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "BruteBody" ADD COLUMN "bruteId" uuid  DEFAULT NULL; 
ALTER TABLE "BruteBody" ADD CONSTRAINT "BruteBody_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "BruteColors" DROP CONSTRAINT IF exists "BruteColors_pkey";
ALTER TABLE "BruteColors" ADD COLUMN "temp_id" INT;
ALTER TABLE "BruteColors" ADD COLUMN "temp_bruteId" INT;
UPDATE "BruteColors" SET "temp_id" = "id";
UPDATE "BruteColors" SET "temp_bruteId" = "bruteId";
ALTER TABLE "BruteColors" DROP COLUMN "id";
ALTER TABLE "BruteColors" DROP COLUMN "bruteId";
ALTER TABLE "BruteColors" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "BruteColors" ADD COLUMN "bruteId" uuid  DEFAULT NULL; 
ALTER TABLE "BruteColors" ADD CONSTRAINT "BruteColors_pkey" PRIMARY KEY ("id");


-- AlterTable
ALTER TABLE "BruteInventoryItem" DROP CONSTRAINT IF exists "BruteInventoryItem_pkey";
ALTER TABLE "BruteInventoryItem" ADD COLUMN "temp_id" INT;
ALTER TABLE "BruteInventoryItem" ADD COLUMN "temp_bruteId" INT;
UPDATE "BruteInventoryItem" SET "temp_id" = "id";
UPDATE "BruteInventoryItem" SET "temp_bruteId" = "bruteId";
ALTER TABLE "BruteInventoryItem" DROP COLUMN "id";
ALTER TABLE "BruteInventoryItem" DROP COLUMN "bruteId";
ALTER TABLE "BruteInventoryItem" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "BruteInventoryItem" ADD COLUMN "bruteId" uuid  DEFAULT NULL; 
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
ALTER TABLE "BruteReport" ADD COLUMN "bruteId" uuid  DEFAULT NULL; 
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Clan" DROP CONSTRAINT IF exists "Clan_pkey";
ALTER TABLE "Clan" ADD COLUMN "temp_id" INT;
ALTER TABLE "Clan" ADD COLUMN "temp_masterId" INT;
UPDATE "Clan" SET "temp_id" = "id";
UPDATE "Clan" SET "temp_masterId" = "masterId";
ALTER TABLE "Clan" DROP COLUMN "id";
ALTER TABLE "Clan" DROP COLUMN "masterId";
ALTER TABLE "Clan" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "Clan" ADD COLUMN "masterId" uuid  DEFAULT NULL; 
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
ALTER TABLE "ClanPost" ADD COLUMN "threadId" uuid  DEFAULT NULL; 
ALTER TABLE "ClanPost" ADD COLUMN "authorId" uuid  DEFAULT NULL; 
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
ALTER TABLE "ClanThread" ADD COLUMN "clanId" uuid  DEFAULT NULL; 
ALTER TABLE "ClanThread" ADD COLUMN "creatorId" uuid  DEFAULT NULL; 
ALTER TABLE "ClanThread" ADD CONSTRAINT "ClanThread_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "DestinyChoice" DROP CONSTRAINT IF exists "DestinyChoice_pkey";
ALTER TABLE "DestinyChoice" ADD COLUMN "temp_id" INT;
ALTER TABLE "DestinyChoice" ADD COLUMN "temp_bruteId" INT;
UPDATE "DestinyChoice" SET "temp_id" = "id";
UPDATE "DestinyChoice" SET "temp_bruteId" = "bruteId";
ALTER TABLE "DestinyChoice" DROP COLUMN "id";
ALTER TABLE "DestinyChoice" DROP COLUMN "bruteId";
ALTER TABLE "DestinyChoice" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "DestinyChoice" ADD COLUMN "bruteId" uuid  DEFAULT NULL;  
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
ALTER TABLE "Fight" ADD COLUMN "brute1Id" uuid  DEFAULT NULL; 
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
ALTER TABLE "Log" ADD COLUMN "currentBruteId"uuid  DEFAULT NULL; 
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
ALTER TABLE "TournamentAchievement" ADD COLUMN "bruteId" uuid  DEFAULT NULL; 
ALTER TABLE "TournamentAchievement" ADD CONSTRAINT "TournamentAchievement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TournamentGold" DROP CONSTRAINT IF exists "TournamentGold_pkey";
ALTER TABLE "TournamentGold" ADD COLUMN "temp_id" INT;
UPDATE "TournamentGold" SET "temp_id" = "id";
ALTER TABLE "TournamentGold" DROP COLUMN "id";
ALTER TABLE "TournamentGold" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "TournamentGold" ADD CONSTRAINT "TournamentGold_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TournamentStep" DROP CONSTRAINT IF exists "TournamentStep_pkey";
ALTER TABLE "TournamentStep" ADD COLUMN "temp_id" INT;
ALTER TABLE "TournamentStep" ADD COLUMN "temp_tournamentId" INT;
ALTER TABLE "TournamentStep" ADD COLUMN "temp_fightId" INT;
UPDATE "TournamentStep" SET "temp_id" = "id";
UPDATE "TournamentStep" SET "temp_tournamentId" = "tournamentId";
UPDATE "TournamentStep" SET "temp_fightId" = "fightId";
ALTER TABLE "TournamentStep" DROP COLUMN "id";
ALTER TABLE "TournamentStep" DROP COLUMN "tournamentId";
ALTER TABLE "TournamentStep" DROP COLUMN "fightId";
ALTER TABLE "TournamentStep" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "TournamentStep" ADD COLUMN "tournamentId" uuid  DEFAULT NULL; 
ALTER TABLE "TournamentStep" ADD COLUMN "fightId" uuid  DEFAULT NULL; 
ALTER TABLE "TournamentStep" ADD CONSTRAINT "TournamentStep_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TournamentXp" DROP CONSTRAINT IF exists "TournamentXp_pkey";
ALTER TABLE "TournamentXp" ADD COLUMN "temp_id" INT;
ALTER TABLE "TournamentXp" ADD COLUMN "temp_bruteId" INT;
UPDATE "TournamentXp" SET "temp_id" = "id";
UPDATE "TournamentXp" SET "temp_bruteId" = "bruteId";
ALTER TABLE "TournamentXp" DROP COLUMN "id";
ALTER TABLE "TournamentXp" DROP COLUMN "bruteId";
ALTER TABLE "TournamentXp" ADD COLUMN "id" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "TournamentXp" ADD COLUMN "bruteId" uuid  DEFAULT NULL; 
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
ALTER TABLE "_BruteReportToUser" ADD COLUMN "A" uuid NOT NULL DEFAULT uuid_generate_v4(); 

-- AlterTable
ALTER TABLE "_BruteToTitle" ADD COLUMN "temp_A" INT;
UPDATE "_BruteToTitle" SET "temp_A" = "A";
ALTER TABLE "_BruteToTitle" DROP COLUMN "A";
ALTER TABLE "_BruteToTitle" ADD COLUMN "A" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "_BruteToTitle" ADD COLUMN "temp_B" INT;
UPDATE "_BruteToTitle" SET "temp_B" = "B";
ALTER TABLE "_BruteToTitle" DROP COLUMN "B";
ALTER TABLE "_BruteToTitle" ADD COLUMN "B" uuid NOT NULL DEFAULT uuid_generate_v4(); 


-- AlterTable
ALTER TABLE "_BruteToTournament" ADD COLUMN "temp_A" INT;
UPDATE "_BruteToTournament" SET "temp_A" = "A";
ALTER TABLE "_BruteToTournament" DROP COLUMN "A";
ALTER TABLE "_BruteToTournament" ADD COLUMN "A" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "_BruteToTournament" ADD COLUMN "temp_B" INT;
UPDATE "_BruteToTournament" SET "temp_B" = "B";
ALTER TABLE "_BruteToTournament" DROP COLUMN "B";
ALTER TABLE "_BruteToTournament" ADD COLUMN "B" uuid NOT NULL DEFAULT uuid_generate_v4(); 

-- AlterTable
ALTER TABLE "_Opponents" ADD COLUMN "temp_A" INT;
UPDATE "_Opponents" SET "temp_A" = "A";
ALTER TABLE "_Opponents" DROP COLUMN "A";
ALTER TABLE "_Opponents" ADD COLUMN "A" uuid NOT NULL DEFAULT uuid_generate_v4(); 
ALTER TABLE "_Opponents" ADD COLUMN "temp_B" INT;
UPDATE "_Opponents" SET "temp_B" = "B";
ALTER TABLE "_Opponents" DROP COLUMN "B";
ALTER TABLE "_Opponents" ADD COLUMN "B" uuid NOT NULL DEFAULT uuid_generate_v4(); 

-- UPDATE DATAS
UPDATE "Achievement" SET "bruteId" = "Brute"."id" FROM "Brute" WHERE "Achievement"."temp_bruteId" = "Brute"."temp_id";
UPDATE "Brute" SET "masterId" = "id" WHERE "temp_masterId" = "temp_id";
UPDATE "Brute" SET "clanId" = (SELECT "id" FROM "Clan" WHERE "Brute"."temp_clanId" = "Clan"."temp_id") WHERE EXISTS (SELECT 1 FROM "Clan" WHERE "Brute"."temp_clanId" = "Clan"."temp_id");
UPDATE "Brute" SET "clanId" = (SELECT "id" FROM "Clan" WHERE "Brute"."temp_wantToJoinClanId" = "Clan"."temp_id") WHERE EXISTS (SELECT 1 FROM "Clan" WHERE "Brute"."temp_wantToJoinClanId" = "Clan"."temp_id");
UPDATE "BruteBody" SET "bruteId" = (SELECT "id" FROM "Brute" WHERE "BruteBody"."temp_bruteId" = "Brute"."temp_id") WHERE EXISTS ( SELECT 1 FROM "Brute" WHERE "BruteBody"."temp_bruteId" = "Brute"."temp_id");
UPDATE "BruteColors" SET "bruteId" = (SELECT "id" FROM "Brute" WHERE "BruteColors"."temp_bruteId" = "Brute"."temp_id") WHERE EXISTS (     SELECT 1 FROM "Brute" WHERE "BruteColors"."temp_bruteId" = "Brute"."temp_id" );
UPDATE "BruteInventoryItem" SET "bruteId" = (SELECT "id" FROM "Brute" WHERE "BruteInventoryItem"."temp_bruteId" = "Brute"."temp_id")WHERE EXISTS ( SELECT 1 FROM "Brute" WHERE "BruteInventoryItem"."temp_bruteId" = "Brute"."temp_id");
UPDATE "BruteReport" SET "bruteId" = (SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "BruteReport"."temp_bruteId") WHERE EXISTS ( SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "BruteReport"."temp_bruteId" );
UPDATE "Clan" SET "masterId" = (SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "Clan"."temp_masterId") WHERE EXISTS ( SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "Clan"."temp_masterId" );
UPDATE "ClanPost" SET "authorId" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "ClanPost"."temp_authorId"
),
"threadId" = (
    SELECT "id" FROM "ClanThread" WHERE "ClanThread"."temp_id" = "ClanPost"."temp_threadId"
)
WHERE EXISTS (
    SELECT 1 FROM "Brute" 
    WHERE "Brute"."temp_id" = "ClanPost"."temp_authorId"
) AND EXISTS (
    SELECT 1 FROM "ClanThread" 
    WHERE "ClanThread"."temp_id" = "ClanPost"."temp_threadId"
);
UPDATE "ClanThread"
SET "clanId" = (
    SELECT "id" FROM "Clan" WHERE "Clan"."temp_id" = "ClanThread"."temp_clanId"
),
"creatorId" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "ClanThread"."temp_creatorId"
)
WHERE EXISTS (
    SELECT 1 FROM "Clan" WHERE "Clan"."temp_id" = "ClanThread"."temp_clanId"
) AND EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "ClanThread"."temp_creatorId"
);
UPDATE "DestinyChoice"
SET "bruteId" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "DestinyChoice"."temp_bruteId"
)
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "DestinyChoice"."temp_bruteId"
);
UPDATE "Fight"
SET "brute1Id" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "Fight"."temp_brute1Id"
),
"brute2Id" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "Fight"."temp_brute2Id"
),
"tournamentId" = (
    SELECT "id" FROM "Tournament" WHERE "Tournament"."temp_id" = "Fight"."temp_tournamentId"
)
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "Fight"."temp_brute1Id"
) AND EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "Fight"."temp_brute2Id"
) AND EXISTS (
    SELECT 1 FROM "Tournament" WHERE "Tournament"."temp_id" = "Fight"."temp_tournamentId"
);
UPDATE "Log"
SET "currentBruteId" = (
        SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "Log"."temp_currentBruteId"
    ),
    "fightId" = (
        SELECT "id" FROM "Fight" WHERE "Fight"."temp_id" = "Log"."temp_fightId"
    )
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "Log"."temp_currentBruteId"
) AND EXISTS (
    SELECT 1 FROM "Fight" WHERE "Fight"."temp_id" = "Log"."temp_fightId"
);
UPDATE "TournamentAchievement"
SET "bruteId" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "TournamentAchievement"."temp_bruteId"
)
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "TournamentAchievement"."temp_bruteId"
);
UPDATE "TournamentStep"
SET "fightId" = (
        SELECT "id" FROM "Fight" WHERE "Fight"."temp_id" = "TournamentStep"."temp_fightId"
    ),
    "tournamentId" = (
        SELECT "id" FROM "Tournament" WHERE "Tournament"."temp_id" = "TournamentStep"."temp_tournamentId"
    )
WHERE EXISTS (
    SELECT 1 FROM "Fight" WHERE "Fight"."temp_id" = "TournamentStep"."temp_fightId"
) AND EXISTS (
    SELECT 1 FROM "Tournament" WHERE "Tournament"."temp_id" = "TournamentStep"."temp_tournamentId"
);
UPDATE "TournamentXp"
SET "bruteId" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "TournamentXp"."temp_bruteId"
)
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "TournamentXp"."temp_bruteId"
);
UPDATE "_BruteReportToUser"
SET "A" = (
    SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "_BruteReportToUser"."temp_A"
)
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "_BruteReportToUser"."temp_A"
);
UPDATE "_BruteToTitle"
SET "A" = (
        SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "_BruteToTitle"."temp_A"
    ),
    "B" = (
        SELECT "id" FROM "Title" WHERE "Title"."temp_id" = "_BruteToTitle"."temp_B"
    )
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "_BruteToTitle"."temp_A"
) AND EXISTS (
    SELECT 1 FROM "Title" WHERE "Title"."temp_id" = "_BruteToTitle"."temp_B"
);
UPDATE "_BruteToTournament"
SET "A" = (
        SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "_BruteToTournament"."temp_A"
    ),
    "B" = (
        SELECT "id" FROM "Tournament" WHERE "Tournament"."temp_id" = "_BruteToTournament"."temp_B"
    )
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "_BruteToTournament"."temp_A"
) AND EXISTS (
    SELECT 1 FROM "Tournament" WHERE "Tournament"."temp_id" = "_BruteToTournament"."temp_B"
);

UPDATE "_Opponents"
SET "A" = (
        SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "_Opponents"."temp_A"
    ),
    "B" = (
        SELECT "id" FROM "Brute" WHERE "Brute"."temp_id" = "_Opponents"."temp_B"
    )
WHERE EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "_Opponents"."temp_A"
) AND EXISTS (
    SELECT 1 FROM "Brute" WHERE "Brute"."temp_id" = "_Opponents"."temp_B"
);
--  Delete all temp_ columns
ALTER TABLE "Achievement" DROP COLUMN "temp_id"  ;
ALTER TABLE "Achievement" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "BannedWord" DROP COLUMN "temp_id"  ;
ALTER TABLE "Brute" DROP COLUMN "temp_masterId"  ;
ALTER TABLE "Brute" DROP COLUMN "temp_id" ;
ALTER TABLE "Brute" DROP COLUMN "temp_clanId"  ;
ALTER TABLE "Brute" DROP COLUMN "temp_wantToJoinClanId"  ;
ALTER TABLE "BruteBody" DROP COLUMN "temp_id" ;
ALTER TABLE "BruteBody" DROP COLUMN "temp_bruteId" ;
ALTER TABLE "BruteColors" DROP COLUMN "temp_id" ;
ALTER TABLE "BruteColors" DROP COLUMN "temp_bruteId" ;
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
ALTER TABLE "TournamentStep" DROP COLUMN "temp_id" ;
ALTER TABLE "TournamentStep" DROP COLUMN "temp_tournamentId" ;
ALTER TABLE "TournamentStep" DROP COLUMN "temp_fightId" ;
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
CREATE UNIQUE INDEX "Achievement_id_key" ON "Achievement"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_name_bruteId_key" ON "Achievement"("name", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BannedWord_id_key" ON "BannedWord"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Brute_id_key" ON "Brute"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteBody_id_key" ON "BruteBody"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteBody_bruteId_key" ON "BruteBody"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BruteColors_id_key" ON "BruteColors"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteColors_bruteId_key" ON "BruteColors"("bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BruteInventoryItem_id_key" ON "BruteInventoryItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BruteInventoryItem_type_bruteId_key" ON "BruteInventoryItem"("type", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "BruteReport_id_key" ON "BruteReport"("id");

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
CREATE UNIQUE INDEX "TournamentStep_id_key" ON "TournamentStep"("id");

-- CreateIndex
CREATE INDEX "TournamentStep_tournamentId_step_idx" ON "TournamentStep"("tournamentId", "step");

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
ALTER TABLE "BruteBody" ADD CONSTRAINT "BruteBody_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteColors" ADD CONSTRAINT "BruteColors_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_clanId_fkey" FOREIGN KEY ("clanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_wantToJoinClanId_fkey" FOREIGN KEY ("wantToJoinClanId") REFERENCES "Clan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute1Id_fkey" FOREIGN KEY ("brute1Id") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_brute2Id_fkey" FOREIGN KEY ("brute2Id") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_currentBruteId_fkey" FOREIGN KEY ("currentBruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DestinyChoice" ADD CONSTRAINT "DestinyChoice_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentStep" ADD CONSTRAINT "TournamentStep_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentStep" ADD CONSTRAINT "TournamentStep_fightId_fkey" FOREIGN KEY ("fightId") REFERENCES "Fight"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

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

-- AddForeignKey
ALTER TABLE "Fight" ADD CONSTRAINT "Fight_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;