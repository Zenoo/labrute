-- UP --
-- POSTGRES

-- Drop table destinies
DROP TABLE IF EXISTS destinies;

/* Create table destiny_choices
  brute varchar(16)
  path int[]
  choice jsonb
  PK (brute, path)
*/
CREATE TABLE IF NOT EXISTS destiny_choices (
  brute varchar(16) NOT NULL,
  path int[] NOT NULL,
  choice jsonb NOT NULL,
  PRIMARY KEY (brute, path)
);

-- Add column destiny_path to brutes table (int[])
ALTER TABLE brutes ADD COLUMN destiny_path integer[];

-- Empty table brutes
DELETE FROM brutes;

-- DOWN --

-- Remove column destiny_path from brutes table
ALTER TABLE brutes DROP COLUMN destiny_path;

-- Drop table destiny_choices
DROP TABLE IF EXISTS destiny_choices;

-- Create table destinies
CREATE TABLE IF NOT EXISTS destinies (
  id serial NOT NULL PRIMARY KEY,
  brute varchar(16) NOT NULL,
  choices jsonb NOT NULL
);