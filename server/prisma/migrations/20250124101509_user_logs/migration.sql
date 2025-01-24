-- CreateEnum
CREATE TYPE "UserLogType" AS ENUM ('CONNECT', 'DISCONNECT', 'GOLD_WIN', 'CREATE_BRUTE', 'RENAME_BRUTE', 'SACRIFICE_BRUTE', 'BANNED');

-- CreateTable
CREATE TABLE "UserLog" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "type" "UserLogType" NOT NULL,
    "bruteId" UUID,
    "gold" INTEGER,

    CONSTRAINT "UserLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserLog_id_key" ON "UserLog"("id");

-- AddForeignKey
ALTER TABLE "UserLog" ADD CONSTRAINT "UserLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLog" ADD CONSTRAINT "UserLog_bruteId_fkey" FOREIGN KEY ("bruteId") REFERENCES "Brute"("id") ON DELETE SET NULL ON UPDATE CASCADE;
