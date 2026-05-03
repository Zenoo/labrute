-- Enable pg_trgm extension for efficient ILIKE operations
CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Add GIN index using pg_trgm for case-insensitive name lookups
-- This optimizes queries using ILIKE (Prisma's mode: 'insensitive')
-- Partial index only on non-deleted brutes for better performance
CREATE INDEX "Brute_name_gin_trgm_idx" ON "Brute" USING GIN (name gin_trgm_ops) WHERE "deletedAt" IS NULL;