-- UP --

/* POSTGRES: CREATE TABLE `logs` with 
  id
  number current_brute
  string type
  nullable number level
  nullable string brute
  nullable number fight
  nullable number xp
*/
CREATE TABLE IF NOT EXISTS logs (
  id serial NOT NULL PRIMARY KEY,
  current_brute integer NOT NULL,
  type varchar(255) NOT NULL,
  level integer,
  brute varchar(255),
  fight integer,
  xp integer
);

-- DOWN --

-- POSTGRES: DROP TABLE `logs`
DROP TABLE IF EXISTS logs;