-- UP --
-- POSTGRES

-- Add bruteLimit column to users table
ALTER TABLE users ADD COLUMN brute_limit INTEGER DEFAULT 3;

-- Add sacrifice_points column to users table
ALTER TABLE users ADD COLUMN sacrifice_points INTEGER DEFAULT 0;

-- DOWN --

-- Remove bruteLimit column from users table
ALTER TABLE users DROP COLUMN brute_limit;

-- Remove sacrifice_points column from users table
ALTER TABLE users DROP COLUMN sacrifice_points;
