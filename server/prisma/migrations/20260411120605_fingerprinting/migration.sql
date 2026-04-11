-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "fingerprints" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateTable
CREATE TABLE "public"."BannedFingerprint" (
    "id" VARCHAR(255) NOT NULL,

    CONSTRAINT "BannedFingerprint_pkey" PRIMARY KEY ("id")
);
