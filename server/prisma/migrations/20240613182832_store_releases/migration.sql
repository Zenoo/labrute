-- CreateTable
CREATE TABLE "Release" (
    "version" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Release_pkey" PRIMARY KEY ("version")
);

-- CreateIndex
CREATE UNIQUE INDEX "Release_version_key" ON "Release"("version");
