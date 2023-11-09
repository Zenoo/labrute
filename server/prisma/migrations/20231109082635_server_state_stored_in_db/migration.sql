-- CreateTable
CREATE TABLE "ServerState" (
    "id" SERIAL NOT NULL,
    "ready" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ServerState_pkey" PRIMARY KEY ("id")
);
