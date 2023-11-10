-- Update body parts
UPDATE "BruteSpritesheet"
SET "longHair" = "BruteBody"."longHair",
"lowerRightArm" = "BruteBody"."lowerRightArm",
"rightHand" = "BruteBody"."rightHand",
"upperRightArm" = "BruteBody"."upperRightArm",
"rightShoulder" = "BruteBody"."rightShoulder",
"rightFoot" = "BruteBody"."rightFoot",
"lowerRightLeg" = "BruteBody"."lowerRightLeg",
"upperRightLeg" = "BruteBody"."upperRightLeg",
"leftFoot" = "BruteBody"."leftFoot",
"lowerLeftLeg" = "BruteBody"."lowerLeftLeg",
"pelvis" = "BruteBody"."pelvis",
"upperLeftLeg" = "BruteBody"."upperLeftLeg",
"tummy" = "BruteBody"."tummy",
"torso" = "BruteBody"."torso",
"head" = "BruteBody"."head",
"leftHand" = "BruteBody"."leftHand",
"upperLeftArm" = "BruteBody"."upperLeftArm",
"lowerLeftArm" = "BruteBody"."lowerLeftArm",
"leftShoulder" = "BruteBody"."leftShoulder"
FROM "BruteBody"
WHERE "BruteSpritesheet"."bruteId" = "BruteBody"."bruteId";

-- Update colors
UPDATE "BruteSpritesheet"
SET "skinColor" = "BruteColors"."skinColor",
"skinShade" = "BruteColors"."skinShade",
"hairColor" = "BruteColors"."hairColor",
"hairShade" = "BruteColors"."hairShade",
"primaryColor" = "BruteColors"."primaryColor",
"primaryShade" = "BruteColors"."primaryShade",
"secondaryColor" = "BruteColors"."secondaryColor",
"secondaryShade" = "BruteColors"."secondaryShade",
"accentColor" = "BruteColors"."accentColor",
"accentShade" = "BruteColors"."accentShade"
FROM "BruteColors"
WHERE "BruteSpritesheet"."bruteId" = "BruteColors"."bruteId";