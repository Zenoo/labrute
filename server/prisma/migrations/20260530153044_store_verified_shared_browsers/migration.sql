-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sharedBrowserId" VARCHAR(255);

-- CreateTable
CREATE TABLE "SharedBrowser" (
    "id" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SharedBrowser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "User_sharedBrowserId_idx" ON "User"("sharedBrowserId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sharedBrowserId_fkey" FOREIGN KEY ("sharedBrowserId") REFERENCES "SharedBrowser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
