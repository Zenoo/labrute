ALTER TABLE "MultipleAccountCase" ADD COLUMN "automaticAt" TIMESTAMPTZ(3);
ALTER TABLE "MultipleAccountCase" ADD COLUMN "automaticNote" VARCHAR(500);
ALTER TABLE "MultipleAccountCase" DROP CONSTRAINT IF EXISTS "MultipleAccountCase_status_check";
ALTER TABLE "MultipleAccountCase" ADD CONSTRAINT "MultipleAccountCase_status_check"
    CHECK (status IN ('open', 'dismissed', 'needs-action', 'processed'));
CREATE INDEX "MultipleAccountCase_userIds_idx" ON "MultipleAccountCase" USING GIN ("userIds");
CREATE INDEX "MultipleAccountCase_status_revision_id_idx" ON "MultipleAccountCase" (status, revision, id);
CREATE TABLE "MultipleAccountCaseAction" (
    "caseId" CHAR(64) NOT NULL REFERENCES "MultipleAccountCase"(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    "userId" UUID NOT NULL,
    "policyVersion" INTEGER NOT NULL,
    status VARCHAR(16) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'banned', 'skipped', 'failed')),
    reason VARCHAR(500) NOT NULL,
    attempts INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("caseId", "userId")
);
CREATE INDEX "MultipleAccountCaseAction_caseId_status_userId_idx"
    ON "MultipleAccountCaseAction" ("caseId", status, "userId");
CREATE INDEX "MultipleAccountCaseAction_userId_updatedAt_idx"
    ON "MultipleAccountCaseAction" ("userId", "updatedAt");
