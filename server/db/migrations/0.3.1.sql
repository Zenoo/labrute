-- UP --

-- POSTGRES: CREATE TABLE `users` with an string id, string token and a JSONB data field
CREATE TABLE IF NOT EXISTS users (
  id varchar(255) NOT NULL PRIMARY KEY,
  token varchar(255) NOT NULL,
  data jsonb NOT NULL
);

-- DOWN --

-- POSTGRES: DROP TABLE `users`
DROP TABLE IF EXISTS users;