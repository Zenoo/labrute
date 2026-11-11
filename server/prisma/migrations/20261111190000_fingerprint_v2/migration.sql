-- Fresh start for fingerprint data. Account/browser sanctions are separate.
UPDATE "User" SET fingerprints = '{}'::text[] WHERE cardinality(fingerprints) > 0;
DELETE FROM "KnownFingerprint";
DELETE FROM "BannedFingerprint";
DELETE FROM "AccountObservation";

ALTER TABLE "AccountObservation" ALTER COLUMN "fingerprint" TYPE VARCHAR(128);
ALTER TABLE "AccountObservation" ALTER COLUMN "formatVersion" SET DEFAULT 2;
