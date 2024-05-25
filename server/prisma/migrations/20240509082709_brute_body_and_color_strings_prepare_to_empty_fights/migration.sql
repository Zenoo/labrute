/*
  Warnings:

  - You are about to drop the `BruteBody` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BruteColors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BruteToTournament` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BruteBody" DROP CONSTRAINT "BruteBody_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "BruteColors" DROP CONSTRAINT "BruteColors_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_brute1Id_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_brute2Id_fkey";

-- DropForeignKey
ALTER TABLE "Fight" DROP CONSTRAINT "Fight_tournamentId_fkey";

-- DropForeignKey
ALTER TABLE "Log" DROP CONSTRAINT "Log_fightId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentStep" DROP CONSTRAINT "TournamentStep_fightId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentStep" DROP CONSTRAINT "TournamentStep_tournamentId_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTournament" DROP CONSTRAINT "_BruteToTournament_A_fkey";

-- DropForeignKey
ALTER TABLE "_BruteToTournament" DROP CONSTRAINT "_BruteToTournament_B_fkey";

-- AlterTable
ALTER TABLE "Brute" ADD COLUMN     "body" VARCHAR(11) NOT NULL DEFAULT '00000000000',
ADD COLUMN     "colors" VARCHAR(32) NOT NULL DEFAULT '00000000000000000000000000000000';

-- Populate body
UPDATE "Brute" SET "body" = concat(to_hex(b.p1),to_hex(b.p1a),to_hex(b.p1b),to_hex(b.p2),to_hex(b.p3),to_hex(b.p4),to_hex(b.p5),to_hex(b.p6),to_hex(b.p7),to_hex(b.p7b),to_hex(b.p8))
FROM "BruteBody" b
WHERE "Brute".id = b."bruteId";

-- Populate colors
WITH colorVars AS (
  SELECT
    ARRAY['#996600', '#eccd57', '#cb841b', '#d79b75', '#fbe6c8', '#f8d198'] AS maleSkin,
    ARRAY['#996600', '#f8cdc2', '#cb841b', '#eaaca6', '#fbe6c8', '#f8d198'] AS femaleSkin,
    ARRAY['#784129', '#fff9ae', '#b85f1d', '#4f677d', '#df7e37', '#fbcd15', '#ffaa1e', '#952f04', '#a2886f', '#fff2df'] AS maleHair,
    ARRAY['#fff9ae', '#b85f1d', '#eea2c9', '#8e63ad', '#fbcd15', '#ffaa1e', '#952f04', '#a2886f', '#fff2df'] AS femaleHair,
    ARRAY['#7bad30', '#b78104', '#bb1111', '#559399', '#fae31f', '#784129', '#7a73c8', '#fff9ae', '#f0dc99', '#b6e7a9', '#d31818', '#b85f1d', '#97cbff', '#8ba3d7', '#df7e37', '#d5eaff', '#ffaa1e', '#cbff97', '#ffcc79', '#fff2df'] AS clothing
)

UPDATE "Brute"
SET colors = (
  SELECT
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleSkin ELSE maleSkin END, b.col0), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleSkin ELSE maleSkin END, b.col0a), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleSkin ELSE maleSkin END, b.col0c), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleHair ELSE maleHair END, b.col1), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleHair ELSE maleHair END, b.col1a), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleHair ELSE maleHair END, b.col1b), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleHair ELSE maleHair END, b.col1c), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(CASE WHEN "Brute".gender = 'female' THEN femaleHair ELSE maleHair END, b.col1d), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col2), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col2a), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col2b), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col3), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col3b), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col4), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col4a), 100) - 1)::text, 2, '0') ||
    LPAD((COALESCE(ARRAY_POSITION(clothing, b.col4b), 100) - 1)::text, 2, '0')
  FROM colorVars
)
FROM "BruteColors" b
WHERE "Brute".id = b."bruteId";

-- DropTable
DROP TABLE "BruteBody";

-- DropTable
DROP TABLE "BruteColors";

-- DropTable
DROP TABLE "_BruteToTournament";
