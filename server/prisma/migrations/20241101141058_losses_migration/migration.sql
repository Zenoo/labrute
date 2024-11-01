-- Initialize losses to match victories for existing brutes
UPDATE "Brute"
SET losses = victories;
