-- Daily observation bounds cannot establish an account-switching sequence.
CREATE TABLE "AccountActivitySample" (
  "id" UUID NOT NULL PRIMARY KEY,
  "userId" UUID REFERENCES "User"(id) ON DELETE SET NULL ON UPDATE CASCADE,
  "browserId" UUID NOT NULL,
  "fingerprint" VARCHAR(128) NOT NULL,
  "ip" VARCHAR(45),
  "observedAt" TIMESTAMP(3) NOT NULL
);

CREATE INDEX "AccountActivitySample_observedAt_idx" ON "AccountActivitySample"("observedAt");
CREATE INDEX "AccountActivitySample_browserId_observedAt_idx"
  ON "AccountActivitySample"("browserId", "observedAt");
CREATE INDEX "AccountActivitySample_userId_idx" ON "AccountActivitySample"("userId");
