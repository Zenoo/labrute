-- Add the losses column with a default value of 0
ALTER TABLE "Brute" ADD COLUMN "losses" INTEGER NOT NULL DEFAULT 0;

-- Initialize losses to match victories for existing brutes
UPDATE "Brute"
SET losses = victories;
