-- Historical snapshots lack the per-account evidence needed for scoring.
ALTER TABLE "MultipleAccountCase" ADD COLUMN "scoreEvidence" JSONB;
