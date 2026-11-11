ALTER TABLE "MultipleAccountCase" ADD COLUMN "appealCode" UUID NOT NULL DEFAULT gen_random_uuid();
CREATE UNIQUE INDEX "MultipleAccountCase_appealCode_key" ON "MultipleAccountCase" ("appealCode");
ALTER TABLE "User" ADD COLUMN "banAppealCode" UUID;
