-- CreateTable
CREATE TABLE "WorkerJob" (
    "id" SERIAL NOT NULL,
    "worker" VARCHAR(255) NOT NULL,
    "payload" JSON NOT NULL,

    CONSTRAINT "WorkerJob_pkey" PRIMARY KEY ("id")
);
