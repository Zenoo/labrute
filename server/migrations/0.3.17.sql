-- UP --
-- POSTGRES

-- Change table logs column current_brute type to be (0-16 chars)
ALTER TABLE logs ALTER COLUMN current_brute TYPE varchar(16);

-- Change table destinies column brute type to be (0-16 chars)
ALTER TABLE destinies ALTER COLUMN brute TYPE varchar(16);

-- Add column name to brutes table (0-16 chars)
ALTER TABLE brutes ADD COLUMN name varchar(16);
-- Copy content of data->>name into name column
UPDATE brutes SET name = data->>'name';
-- Remove name from data column
UPDATE brutes SET data = data - 'name';
-- Change primary key to be the name column
ALTER TABLE brutes DROP CONSTRAINT brutes_pkey;
ALTER TABLE brutes ADD PRIMARY KEY (name);
-- Delete id column
ALTER TABLE brutes DROP COLUMN id;

-- DOWN --

-- Add id column to brutes table
ALTER TABLE brutes ADD COLUMN id serial NOT NULL;
-- Change primary key to be the id column instead of name
ALTER TABLE brutes DROP CONSTRAINT brutes_pkey;
ALTER TABLE brutes ADD PRIMARY KEY (id);
-- Add name to data field
UPDATE brutes SET data = data || jsonb_build_object('name', name);
-- Remove name column
ALTER TABLE brutes DROP COLUMN name;

-- Change table destinies column brute type to be int
ALTER TABLE destinies ALTER COLUMN brute TYPE integer;

-- Change table logs column current_brute type to be int
ALTER TABLE logs ALTER COLUMN current_brute TYPE integer;
