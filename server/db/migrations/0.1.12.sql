-- UP --

-- POSTGRES: CREATE TABLE `brutes` with an id and a JSONB data field
CREATE TABLE IF NOT EXISTS brutes (
  id serial NOT NULL PRIMARY KEY,
  data jsonb NOT NULL
);

-- DOWN --

-- POSTGRES: DROP TABLE `brutes`
DROP TABLE IF EXISTS brutes;