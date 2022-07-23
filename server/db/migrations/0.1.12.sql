-- UP --

-- POSTGRES: CERATE TABLE `migration` with a version string field
CREATE TABLE IF NOT EXISTS migration (
  version varchar(255) NOT NULL PRIMARY KEY
);

-- POSTGRES: CREATE TABLE `brutes` with an id and a JSONB data field
CREATE TABLE IF NOT EXISTS brutes (
  id serial NOT NULL PRIMARY KEY,
  data jsonb NOT NULL
);

-- DOWN --

-- POSTGRES: DROP TABLE `migration`
DROP TABLE IF EXISTS migration;

-- POSTGRES: DROP TABLE `brutes`
DROP TABLE IF EXISTS brutes;