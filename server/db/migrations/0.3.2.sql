-- UP --

-- POSTGRES: UPDATE TABLE `users`, 
-- Add field name
ALTER TABLE users ADD COLUMN name varchar(255) NOT NULL;
-- Put value display_name.current.value from the jsonb field data into the field name
UPDATE users SET name = data->'display_name'->'current'->'value';
-- Drop column data
ALTER TABLE users DROP COLUMN data;
-- Set id type to uuid
ALTER TABLE users ALTER COLUMN id SET DATA TYPE uuid USING id::uuid;

-- DOWN --

-- POSTGRES: UPDATE TABLE `users`,
-- Add jsonb column data
ALTER TABLE users ADD COLUMN data jsonb NOT NULL;
-- Put field name into the jsonb field display_name.current.value
UPDATE users SET data = to_json('{"display_name":{"current":{"value":' || name || '}}}');
-- Drop column name
ALTER TABLE users DROP COLUMN name;
-- Set id type to varchar(255)
ALTER TABLE users ALTER COLUMN id SET DATA TYPE varchar(255);