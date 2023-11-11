-- CreateTable
CREATE TABLE "Title" (
    "id" SERIAL NOT NULL,
    "name" "AchievementName" NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BruteToTitle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BruteToTitle_AB_unique" ON "_BruteToTitle"("A", "B");

-- CreateIndex
CREATE INDEX "_BruteToTitle_B_index" ON "_BruteToTitle"("B");

-- AddForeignKey
ALTER TABLE "_BruteToTitle" ADD CONSTRAINT "_BruteToTitle_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BruteToTitle" ADD CONSTRAINT "_BruteToTitle_B_fkey" FOREIGN KEY ("B") REFERENCES "Title"("id") ON DELETE CASCADE ON UPDATE CASCADE;
