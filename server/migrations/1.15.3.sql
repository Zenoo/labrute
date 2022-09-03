-- UP --
-- POSTGRES

-----------------
-- SPRITESHEET
-----------------

-- Add spritesheet (blob) column to brutes table
ALTER TABLE brutes ADD COLUMN spritesheet BYTEA;

-- Add spritesheet_json (json) column to brutes table
ALTER TABLE brutes ADD COLUMN spritesheet_json JSON;

-----------------
-- BRUTE ID
-----------------

-- Add id (serial) column to brutes table
ALTER TABLE brutes ADD COLUMN id SERIAL;

-- Change brutes primary key to id
ALTER TABLE brutes DROP CONSTRAINT brutes_pkey;
ALTER TABLE brutes ADD CONSTRAINT brutes_pkey PRIMARY KEY (id);

-----------------
-- BRUTE DELETED
-----------------

-- Add deleted (boolean) column to brutes table
ALTER TABLE brutes ADD COLUMN deleted BOOLEAN DEFAULT FALSE;

-----------------
-- BRUTE ID IN LOG
-----------------

-- Add temporary current_brute_name column to logs table
ALTER TABLE logs ADD COLUMN current_brute_name VARCHAR(255);

-- Update current_brute_name column with current_brute
UPDATE logs SET current_brute_name = current_brute;

-- Drop current_brute column from logs table
ALTER TABLE logs DROP COLUMN current_brute;

-- Add current_brute (integer) column to logs table
ALTER TABLE logs ADD COLUMN current_brute INTEGER REFERENCES brutes(id);

-- Update current_brute column with corresponding brute id
UPDATE logs SET current_brute = brutes.id FROM brutes WHERE brutes.name = logs.current_brute_name;

-- Drop current_brute_name column from logs table
ALTER TABLE logs DROP COLUMN current_brute_name;

-----------------
-- BRUTE ID IN DESTINY_CHOICES
-----------------

-- Add temporary brute_name column to destiny_choices table
ALTER TABLE destiny_choices ADD COLUMN brute_name VARCHAR(255);

-- Update brute_name column with brute
UPDATE destiny_choices SET brute_name = brute;

-- Remove primary key from destiny_choices table
ALTER TABLE destiny_choices DROP CONSTRAINT destiny_choices_pkey;

-- Drop brute column from destiny_choices table
ALTER TABLE destiny_choices DROP COLUMN brute;

-- Add brute (integer) column to destiny_choices table
ALTER TABLE destiny_choices ADD COLUMN brute INTEGER REFERENCES brutes(id);

-- Update brute column with corresponding brute id
UPDATE destiny_choices SET brute = brutes.id FROM brutes WHERE brutes.name = destiny_choices.brute_name;

-- Drop brute_name column from destiny_choices table
ALTER TABLE destiny_choices DROP COLUMN brute_name;

-- Delete destiny_choices with no brute
DELETE FROM destiny_choices WHERE brute IS NULL;

-- Add primary key to destiny_choices table
ALTER TABLE destiny_choices ADD CONSTRAINT destiny_choices_pkey PRIMARY KEY (brute, path);

-- DOWN --

-----------------
-- BRUTE ID IN DESTINY_CHOICES
-----------------

-- Add brute_name (varchar) column to destiny_choices table
ALTER TABLE destiny_choices ADD COLUMN brute_name VARCHAR(255);

-- Update brute_name column with corresponding brute name
UPDATE destiny_choices SET brute_name = brutes.name FROM brutes WHERE brutes.id = destiny_choices.brute;

-- Remove primary key from destiny_choices table
ALTER TABLE destiny_choices DROP CONSTRAINT destiny_choices_pkey;

-- Drop brute column from destiny_choices table
ALTER TABLE destiny_choices DROP COLUMN brute;

-- Add brute (varchar) column to destiny_choices table
ALTER TABLE destiny_choices ADD COLUMN brute VARCHAR(255);

-- Update brute column with brute name
UPDATE destiny_choices SET brute = destiny_choices.brute_name;

-- Drop brute_name column from destiny_choices table
ALTER TABLE destiny_choices DROP COLUMN brute_name;

-- Add primary key to destiny_choices table
ALTER TABLE destiny_choices ADD CONSTRAINT destiny_choices_pkey PRIMARY KEY (brute, path);

-----------------
-- BRUTE ID IN LOG
-----------------

-- Add current_brute_name (varchar) column to logs table
ALTER TABLE logs ADD COLUMN current_brute_name VARCHAR(255);

-- Update current_brute_name column with current_brute corresponding name
UPDATE logs SET current_brute_name = brutes.name FROM brutes WHERE brutes.id = logs.current_brute;

-- Drop current_brute column from logs table
ALTER TABLE logs DROP COLUMN current_brute;

-- Add current_brute (varchar) column to logs table
ALTER TABLE logs ADD COLUMN current_brute VARCHAR(255);

-- Update current_brute column current_brute_name
UPDATE logs SET current_brute = current_brute_name;

-- Drop current_brute_name column from logs table
ALTER TABLE logs DROP COLUMN current_brute_name;

-----------------
-- SPRITESHEET
-----------------

-- Remove spritesheet column from brutes table
ALTER TABLE brutes DROP COLUMN spritesheet;

-- Remove spritesheet_json column from brutes table
ALTER TABLE brutes DROP COLUMN spritesheet_json;

-----------------
-- BRUTE ID
-----------------

-- Change brutes primary key to name
ALTER TABLE brutes DROP CONSTRAINT brutes_pkey;
ALTER TABLE brutes ADD CONSTRAINT brutes_pkey PRIMARY KEY (name);

-- Remove id column from brutes table
ALTER TABLE brutes DROP COLUMN id;

-----------------
-- BRUTE DELETED
-----------------

-- Delete deleted brutes
DELETE FROM brutes WHERE deleted = TRUE;

-- Remove deleted column from brutes table
ALTER TABLE brutes DROP COLUMN deleted;