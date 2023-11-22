-- Update Tournament.rounds to max(Tournament.steps.step)

UPDATE "Tournament"
SET "rounds" = (
  SELECT MAX("TournamentStep"."step")
  FROM "TournamentStep"
  WHERE "TournamentStep"."tournamentId" = "Tournament"."id"
)
WHERE "Tournament"."type" = 'GLOBAL';

UPDATE "Tournament"
SET "rounds" = 6
WHERE "Tournament"."type" = 'DAILY';
