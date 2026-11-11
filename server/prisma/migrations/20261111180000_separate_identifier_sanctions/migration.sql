CREATE TABLE "SharedBrowserExemption" (
    "browserId" VARCHAR(255) NOT NULL,
    "userId" UUID NOT NULL,
    "reason" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" UUID,
    CONSTRAINT "SharedBrowserExemption_pkey" PRIMARY KEY ("userId", "browserId"),
    CONSTRAINT "SharedBrowserExemption_browserId_fkey" FOREIGN KEY ("browserId") REFERENCES "SharedBrowser"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "SharedBrowserExemption_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "SharedBrowserExemption_browserId_idx" ON "SharedBrowserExemption"("browserId");

CREATE TABLE "SecurityAction" (
    "id" UUID NOT NULL,
    "subjectType" VARCHAR(32) NOT NULL,
    "subjectId" VARCHAR(255) NOT NULL,
    "userId" UUID,
    "action" VARCHAR(32) NOT NULL,
    "actorId" UUID,
    "reason" VARCHAR(500) NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SecurityAction_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "SecurityAction_subjectType_subjectId_createdAt_idx" ON "SecurityAction"("subjectType", "subjectId", "createdAt");
CREATE INDEX "SecurityAction_userId_createdAt_idx" ON "SecurityAction"("userId", "createdAt");

-- Preserve approvals, without inventing the identity of the original reviewer.
INSERT INTO "SharedBrowserExemption" ("browserId", "userId", "reason", "createdAt")
SELECT b.id, u.id, COALESCE(NULLIF(TRIM(b.description), ''), 'Migrated legacy shared-browser approval'), CURRENT_TIMESTAMP
FROM "User" u INNER JOIN "SharedBrowser" b ON b.id = u."sharedBrowserId";

INSERT INTO "SecurityAction" (id, "subjectType", "subjectId", "userId", action, reason)
SELECT gen_random_uuid(), 'shared-browser', "browserId", "userId", 'legacy-grant', reason
FROM "SharedBrowserExemption";

-- Old restriction tables have no provenance: preserve state and explicitly record that limit.
INSERT INTO "SecurityAction" (id, "subjectType", "subjectId", action, reason)
SELECT gen_random_uuid(), 'browser', id, 'legacy-restrict', 'Legacy restriction: original reviewer and reason unavailable'
FROM "BannedBrowser"
UNION ALL
SELECT gen_random_uuid(), 'fingerprint', id, 'legacy-restrict', 'Legacy restriction: original reviewer and reason unavailable'
FROM "BannedFingerprint";
