/*
  Warnings:

  - You are about to drop the column `banWords` on the `ServerState` table. All the data in the column will be lost.

*/

-- Create BannedWord table
CREATE TABLE "BannedWord" (
    "id" SERIAL NOT NULL,
    "word" VARCHAR(255) NOT NULL,

    CONSTRAINT "BannedWord_pkey" PRIMARY KEY ("id")
);

-- Fill table with ServerState.banWords
INSERT INTO "BannedWord" ("word")
SELECT DISTINCT unnest("banWords") FROM "ServerState";

-- Drop banWords column
ALTER TABLE "ServerState" DROP COLUMN "banWords";
