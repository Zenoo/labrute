-- CreateTable
CREATE TABLE "_Opponents" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Opponents_AB_unique" ON "_Opponents"("A", "B");

-- CreateIndex
CREATE INDEX "_Opponents_B_index" ON "_Opponents"("B");

-- AddForeignKey
ALTER TABLE "_Opponents" ADD CONSTRAINT "_Opponents_A_fkey" FOREIGN KEY ("A") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Opponents" ADD CONSTRAINT "_Opponents_B_fkey" FOREIGN KEY ("B") REFERENCES "Brute"("id") ON DELETE CASCADE ON UPDATE CASCADE;
