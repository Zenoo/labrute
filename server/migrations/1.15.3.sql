-- UP --
-- POSTGRES

-- Add spritesheet (blob) column to brutes table
ALTER TABLE brutes ADD COLUMN spritesheet BYTEA;

-- Add spritesheet_json (json) column to brutes table
ALTER TABLE brutes ADD COLUMN spritesheet_json JSON;

-- DOWN --

-- Remove spritesheet column from brutes table
ALTER TABLE brutes DROP COLUMN spritesheet;

-- Remove spritesheet_json column from brutes table
ALTER TABLE brutes DROP COLUMN spritesheet_json;
