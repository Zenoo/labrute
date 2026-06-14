-- DropForeignKey
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "Achievement" DROP CONSTRAINT "Achievement_userId_fkey";

-- DropForeignKey
ALTER TABLE "Brute" DROP CONSTRAINT "Brute_userId_fkey";

-- DropForeignKey
ALTER TABLE "BruteReport" DROP CONSTRAINT "BruteReport_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "InventoryItem" DROP CONSTRAINT "InventoryItem_userId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_userId_fkey";

-- DropForeignKey
ALTER TABLE "TournamentGold" DROP CONSTRAINT "TournamentGold_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserLog" DROP CONSTRAINT "UserLog_bruteId_fkey";

-- DropForeignKey
ALTER TABLE "UserLog" DROP CONSTRAINT "UserLog_userId_fkey";

-- AddForeignKey
ALTER TABLE "UserLog" ADD CONSTRAINT "UserLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLog" ADD CONSTRAINT "UserLog_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brute" ADD CONSTRAINT "Brute_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentGold" ADD CONSTRAINT "TournamentGold_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Achievement" ADD CONSTRAINT "Achievement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BruteReport" ADD CONSTRAINT "BruteReport_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InventoryItem" ADD CONSTRAINT "InventoryItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
