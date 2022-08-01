-- UP --

/* POSTGRES: CREATE TABLE `destinies` with 
  id number
  number brute
  jsonb choices
*/
CREATE TABLE IF NOT EXISTS destinies (
  id serial NOT NULL PRIMARY KEY,
  brute integer NOT NULL,
  choices jsonb NOT NULL
);

-- DOWN --

-- POSTGRES: DROP TABLE `destinies`
DROP TABLE IF EXISTS destinies;