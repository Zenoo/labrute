DELETE FROM "Achievement"
WHERE "bruteId" IN (
  SELECT "id"
  FROM "Brute"
  WHERE "eventId" IS NOT NULL
);

DELETE FROM "TournamentAchievement"
WHERE "bruteId" IN (
  SELECT "id"
  FROM "Brute"
  WHERE "eventId" IS NOT NULL
);
