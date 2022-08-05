-- UP --
-- POSTGRES
/* CREATE TABLE `fights` with 
  id number
  brute_1 string (0-16)
  brute_2 string (0-16)
  data jsonb
*/
CREATE TABLE IF NOT EXISTS fights (
  id serial NOT NULL PRIMARY KEY,
  brute_1 varchar(16) NOT NULL,
  brute_2 varchar(16) NOT NULL,
  data jsonb NOT NULL
);

-- DOWN --

-- POSTGRES: DROP TABLE `fights`
DROP TABLE IF EXISTS fights;