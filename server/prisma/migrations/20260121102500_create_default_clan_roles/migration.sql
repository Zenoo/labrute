-- Create default 'Member' role for every clan that doesn't have roles
INSERT INTO "ClanRole" ("id", "clanId", "name", "permissions")
SELECT uuid_generate_v4(), id, 'Member', ARRAY[]::"ClanPermission"[]
FROM "Clan"
WHERE id NOT IN (SELECT "clanId" FROM "ClanRole");

-- Assign this new role to all brutes in those clans (except the master)
UPDATE "Brute"
SET "clanRoleId" = cr.id
FROM "ClanRole" cr
WHERE "Brute"."clanId" = cr."clanId"
  AND "Brute"."id" != (SELECT "masterId" FROM "Clan" WHERE "id" = cr."clanId")
  AND cr."name" = 'Member';
