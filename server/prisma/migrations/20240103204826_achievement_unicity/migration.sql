/*
  Warnings:

  - A unique constraint covering the columns `[name,bruteId]` on the table `Achievement` will be added. If there are existing duplicate values, this will fail.

*/

-- Delete duplicate values
DELETE FROM "Achievement" WHERE "id" NOT IN (SELECT MIN("id") FROM "Achievement" GROUP BY "name", "bruteId");

-- CreateIndex
CREATE UNIQUE INDEX "Achievement_name_bruteId_key" ON "Achievement"("name", "bruteId");
