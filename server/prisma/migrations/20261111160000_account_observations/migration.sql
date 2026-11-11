-- Deliberately no backfill: legacy arrays do not encode which identifiers were seen together.
CREATE TABLE "AccountObservation" (
    "id" CHAR(64) NOT NULL,
    "userId" UUID NOT NULL,
    "browserId" UUID NOT NULL,
    "fingerprint" VARCHAR(36) NOT NULL,
    "visitorId" CHAR(32) NOT NULL,
    "ja3Hash" CHAR(64),
    "ja4Hash" CHAR(64),
    "ip" VARCHAR(45),
    "formatVersion" INTEGER NOT NULL DEFAULT 1,
    "observedDay" DATE NOT NULL,
    "firstSeen" TIMESTAMP(3) NOT NULL,
    "lastSeen" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "AccountObservation_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "AccountObservation_lastSeen_idx" ON "AccountObservation"("lastSeen");
CREATE INDEX "AccountObservation_browserId_lastSeen_idx" ON "AccountObservation"("browserId", "lastSeen");
CREATE INDEX "AccountObservation_fingerprint_ip_lastSeen_idx" ON "AccountObservation"("fingerprint", "ip", "lastSeen");
CREATE INDEX "AccountObservation_userId_lastSeen_idx" ON "AccountObservation"("userId", "lastSeen");

ALTER TABLE "AccountObservation" ADD CONSTRAINT "AccountObservation_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
