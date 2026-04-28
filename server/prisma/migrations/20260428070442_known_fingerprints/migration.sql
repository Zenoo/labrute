-- CreateTable
CREATE TABLE "public"."KnownFingerprint" (
    "id" VARCHAR(255) NOT NULL,
    "description" VARCHAR(500),
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KnownFingerprint_pkey" PRIMARY KEY ("id")
);
