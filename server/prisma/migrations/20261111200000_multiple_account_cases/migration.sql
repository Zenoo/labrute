CREATE TABLE "MultipleAccountCase" (
    id CHAR(64) PRIMARY KEY,
    "ruleVersion" INTEGER NOT NULL,
    signal VARCHAR(32) NOT NULL,
    "browserId" UUID,
    fingerprint VARCHAR(128),
    ip VARCHAR(45),
    "userIds" UUID[] NOT NULL,
    "accountCount" INTEGER NOT NULL,
    threshold INTEGER NOT NULL,
    confidence VARCHAR(32) NOT NULL,
    "firstSeen" TIMESTAMPTZ(3) NOT NULL,
    "lastSeen" TIMESTAMPTZ(3) NOT NULL,
    "windowStart" TIMESTAMPTZ(3) NOT NULL,
    "windowEnd" TIMESTAMPTZ(3) NOT NULL,
    "detectedAt" TIMESTAMPTZ(3) NOT NULL,
    exemptions JSONB NOT NULL,
    "excludedCount" INTEGER NOT NULL,
    status VARCHAR(16) NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'dismissed', 'needs-action')),
    revision INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX "MultipleAccountCase_status_detectedAt_id_idx"
    ON "MultipleAccountCase" (status, "detectedAt", id);

CREATE TABLE "MultipleAccountCaseReview" (
    id UUID PRIMARY KEY,
    "caseId" CHAR(64) NOT NULL REFERENCES "MultipleAccountCase"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    revision INTEGER NOT NULL,
    "reviewerId" UUID NOT NULL,
    decision VARCHAR(16) NOT NULL CHECK (decision IN ('open', 'dismissed', 'needs-action')),
    reason VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "MultipleAccountCaseReview_caseId_revision_key"
    ON "MultipleAccountCaseReview" ("caseId", revision);
