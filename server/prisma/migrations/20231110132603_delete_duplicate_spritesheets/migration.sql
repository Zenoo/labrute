-- BruteSpritesheet has the following fields:
-- longHair, lowerRightArm, rightHand, upperRightArm, rightShoulder, rightFoot, lowerRightLeg, upperRightLeg, leftFoot, lowerLeftLeg, pelvis, upperLeftLeg, tummy, torso, head, leftHand, upperLeftArm, lowerLeftArm, leftShoulder, skinColor, skinShade, hairColor, hairShade, primaryColor, primaryShade, secondaryColor, secondaryShade, accentColor, accentShade

-- Delete duplicate spritesheets where the combination of those fields is unique
DELETE FROM "BruteSpritesheet"
WHERE id IN (
  SELECT id FROM (
    SELECT id, RANK() OVER (PARTITION BY
      "gender",
      "longHair",
      "lowerRightArm",
      "rightHand",
      "upperRightArm",
      "rightShoulder",
      "rightFoot",
      "lowerRightLeg",
      "upperRightLeg",
      "leftFoot",
      "lowerLeftLeg",
      "pelvis",
      "upperLeftLeg",
      "tummy",
      "torso",
      "head",
      "leftHand",
      "upperLeftArm",
      "lowerLeftArm",
      "leftShoulder",
      "skinColor",
      "skinShade",
      "hairColor",
      "hairShade",
      "primaryColor",
      "primaryShade",
      "secondaryColor",
      "secondaryShade",
      "accentColor",
      "accentShade"
      ORDER BY id) AS rank
    FROM "BruteSpritesheet"
  ) as sub WHERE sub.rank > 1
);