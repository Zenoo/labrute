-- DropIndex
DROP INDEX "User_createdAt_idx";

-- CreateIndex
CREATE INDEX "User_lastSeen_idx" ON "User"("lastSeen");
