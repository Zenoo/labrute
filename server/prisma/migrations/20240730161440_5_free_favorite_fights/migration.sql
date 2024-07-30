-- Create an InventoryItem entry for each User
INSERT INTO "InventoryItem" ("userId", type, count)
SELECT id, 'favoriteFight', 5
FROM "User";
