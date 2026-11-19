-- Random account references. Existing UUID identities and case codes remain unchanged.
ALTER TABLE "User" ADD COLUMN "appealReference" VARCHAR(16);
CREATE UNIQUE INDEX "User_appealReference_key" ON "User"("appealReference");
ALTER TABLE "User" ALTER COLUMN "appealReference"
  SET DEFAULT upper(left(gen_random_uuid()::text, 8) || right(gen_random_uuid()::text, 8));

-- Retry the atomic backfill if a random reference collides with the unique index.
DO $$
DECLARE
  attempt INTEGER;
BEGIN
  FOR attempt IN 1..5 LOOP
    BEGIN
      UPDATE "User" SET "appealReference" = upper(left(gen_random_uuid()::text, 8) || right(gen_random_uuid()::text, 8))
      WHERE "appealReference" IS NULL;
      EXIT;
    EXCEPTION WHEN unique_violation THEN
      IF attempt = 5 THEN
        RAISE;
      END IF;
    END;
  END LOOP;
  ALTER TABLE "User" ALTER COLUMN "appealReference" SET NOT NULL;
END;
$$;
