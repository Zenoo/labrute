-- BRUTESPRITESHEET.JSON

-- Create temporary field to store the json
ALTER TABLE "BruteSpritesheet" ADD COLUMN "json_tmp" TEXT;
-- Copy the stringified json to the new field
UPDATE "BruteSpritesheet" SET "json_tmp" = "json"::TEXT;
-- Drop the old json field
ALTER TABLE "BruteSpritesheet" DROP COLUMN "json";
-- Rename the new field to the old field name
ALTER TABLE "BruteSpritesheet" RENAME COLUMN "json_tmp" TO "json";

-- FIGHT.STEPS

-- Create temporary field to store the json
ALTER TABLE "Fight" ADD COLUMN "steps_tmp" TEXT NOT NULL DEFAULT '{}';
-- Copy the stringified json to the new field
UPDATE "Fight" SET "steps_tmp" = "steps"::TEXT;
-- Drop the old json field
ALTER TABLE "Fight" DROP COLUMN "steps";
-- Rename the new field to the old field name
ALTER TABLE "Fight" RENAME COLUMN "steps_tmp" TO "steps";

-- FIGHT.FIGHTERS

-- Create temporary field to store the json
ALTER TABLE "Fight" ADD COLUMN "fighters_tmp" TEXT NOT NULL DEFAULT '{}';
-- Copy the stringified json to the new field
UPDATE "Fight" SET "fighters_tmp" = "fighters"::TEXT;
-- Drop the old json field
ALTER TABLE "Fight" DROP COLUMN "fighters";
-- Rename the new field to the old field name
ALTER TABLE "Fight" RENAME COLUMN "fighters_tmp" TO "fighters";

-- WORKERJOB.PAYLOAD

-- Create temporary field to store the json
ALTER TABLE "WorkerJob" ADD COLUMN "payload_tmp" TEXT NOT NULL DEFAULT '{}';
-- Copy the stringified json to the new field
UPDATE "WorkerJob" SET "payload_tmp" = "payload"::TEXT;
-- Drop the old json field
ALTER TABLE "WorkerJob" DROP COLUMN "payload";
-- Rename the new field to the old field name
ALTER TABLE "WorkerJob" RENAME COLUMN "payload_tmp" TO "payload";