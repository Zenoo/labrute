/* eslint-disable no-await-in-loop */
import {
  BruteVisuals, SPRITESHEET_VERSION, adjustColor, colors,
} from '@labrute/core';
import { Gender, Prisma, PrismaClient } from '@labrute/prisma';
import DiscordUtils from '../utils/DiscordUtils.js';
import createSpritesheet from '../utils/createSpritesheet.js';
import formatSpritesheet from '../utils/formatSpritesheet.js';

const prisma = new PrismaClient();

await DiscordUtils.sendLog('Calculating every possible brute visual...');

// MALE

// Skin
const malesWithSkin: BruteVisuals[] = colors.male.skin.map((skinColor) => ({
  gender: Gender.male,
  longHair: 0,
  lowerRightArm: 1,
  rightHand: 1,
  upperRightArm: 1,
  rightShoulder: 1,
  rightFoot: 1,
  lowerRightLeg: 1,
  upperRightLeg: 1,
  leftFoot: 1,
  lowerLeftLeg: 1,
  pelvis: 1,
  upperLeftLeg: 1,
  tummy: 1,
  torso: 1,
  head: 1,
  leftHand: 1,
  upperLeftArm: 1,
  lowerLeftArm: 1,
  leftShoulder: 1,
  skinColor,
  skinShade: adjustColor(skinColor, -20),
  hairColor: '',
  hairShade: '',
  primaryColor: '',
  primaryShade: '',
  secondaryColor: '',
  secondaryShade: '',
  accentColor: '',
  accentShade: '',
}));

await DiscordUtils.sendLog(`1st pass: ${malesWithSkin.length} possible visuals`);

// Hair
const malesWithHair: BruteVisuals[] = [];
for (const maleWithSkin of malesWithSkin) {
  malesWithHair.push(...colors.male.hair.map((hairColor) => ({
    gender: Gender.male,
    longHair: 0,
    lowerRightArm: 1,
    rightHand: 1,
    upperRightArm: 1,
    rightShoulder: 1,
    rightFoot: 1,
    lowerRightLeg: 1,
    upperRightLeg: 1,
    leftFoot: 1,
    lowerLeftLeg: 1,
    pelvis: 1,
    upperLeftLeg: 1,
    tummy: 1,
    torso: 1,
    head: 1,
    leftHand: 1,
    upperLeftArm: 1,
    lowerLeftArm: 1,
    leftShoulder: 1,
    skinColor: maleWithSkin.skinColor,
    skinShade: maleWithSkin.skinShade,
    hairColor,
    hairShade: adjustColor(hairColor, -20),
    primaryColor: '',
    primaryShade: '',
    secondaryColor: '',
    secondaryShade: '',
    accentColor: '',
    accentShade: '',
  })));
}

await DiscordUtils.sendLog(`2nd pass: ${malesWithHair.length} possible visuals`);

// Primary
const malesWithPrimary: BruteVisuals[] = [];
for (const maleWithHair of malesWithHair) {
  malesWithPrimary.push(...colors.male.clothing.map((clothingColor) => ({
    gender: Gender.male,
    longHair: 0,
    lowerRightArm: 1,
    rightHand: 1,
    upperRightArm: 1,
    rightShoulder: 1,
    rightFoot: 1,
    lowerRightLeg: 1,
    upperRightLeg: 1,
    leftFoot: 1,
    lowerLeftLeg: 1,
    pelvis: 1,
    upperLeftLeg: 1,
    tummy: 1,
    torso: 1,
    head: 1,
    leftHand: 1,
    upperLeftArm: 1,
    lowerLeftArm: 1,
    leftShoulder: 1,
    skinColor: maleWithHair.skinColor,
    skinShade: maleWithHair.skinShade,
    hairColor: maleWithHair.hairColor,
    hairShade: maleWithHair.hairShade,
    primaryColor: clothingColor,
    primaryShade: adjustColor(clothingColor, -20),
    secondaryColor: '',
    secondaryShade: '',
    accentColor: '',
    accentShade: '',
  })));
}

await DiscordUtils.sendLog(`3rd pass: ${malesWithPrimary.length} possible visuals`);

// Secondary
const malesWithSecondary: BruteVisuals[] = [];
for (const maleWithPrimary of malesWithPrimary) {
  malesWithSecondary.push(...colors.male.clothing.map((clothingColor) => ({
    gender: Gender.male,
    longHair: 0,
    lowerRightArm: 1,
    rightHand: 1,
    upperRightArm: 1,
    rightShoulder: 1,
    rightFoot: 1,
    lowerRightLeg: 1,
    upperRightLeg: 1,
    leftFoot: 1,
    lowerLeftLeg: 1,
    pelvis: 1,
    upperLeftLeg: 1,
    tummy: 1,
    torso: 1,
    head: 1,
    leftHand: 1,
    upperLeftArm: 1,
    lowerLeftArm: 1,
    leftShoulder: 1,
    skinColor: maleWithPrimary.skinColor,
    skinShade: maleWithPrimary.skinShade,
    hairColor: maleWithPrimary.hairColor,
    hairShade: maleWithPrimary.hairShade,
    primaryColor: maleWithPrimary.primaryColor,
    primaryShade: maleWithPrimary.primaryShade,
    secondaryColor: clothingColor,
    secondaryShade: adjustColor(clothingColor, -20),
    accentColor: '',
    accentShade: '',
  })));
}

await DiscordUtils.sendLog(`4th pass: ${malesWithSecondary.length} possible visuals`);

// FEMALE

// Skin
const femalesWithSkin: BruteVisuals[] = colors.female.skin.map((skinColor) => ({
  gender: Gender.female,
  longHair: 0,
  lowerRightArm: 1,
  rightHand: 1,
  upperRightArm: 1,
  rightShoulder: 1,
  rightFoot: 1,
  lowerRightLeg: 1,
  upperRightLeg: 1,
  leftFoot: 1,
  lowerLeftLeg: 1,
  pelvis: 1,
  upperLeftLeg: 1,
  tummy: 1,
  torso: 1,
  head: 1,
  leftHand: 1,
  upperLeftArm: 1,
  lowerLeftArm: 1,
  leftShoulder: 1,
  skinColor,
  skinShade: adjustColor(skinColor, -20),
  hairColor: '',
  hairShade: '',
  primaryColor: '',
  primaryShade: '',
  secondaryColor: '',
  secondaryShade: '',
  accentColor: '',
  accentShade: '',
}));

await DiscordUtils.sendLog(`5th pass: ${malesWithSecondary.length + femalesWithSkin.length} possible visuals`);

// Hair
const femalesWithHair: BruteVisuals[] = [];
for (const femaleWithSkin of femalesWithSkin) {
  femalesWithHair.push(...colors.female.hair.map((hairColor) => ({
    gender: Gender.female,
    longHair: 0,
    lowerRightArm: 1,
    rightHand: 1,
    upperRightArm: 1,
    rightShoulder: 1,
    rightFoot: 1,
    lowerRightLeg: 1,
    upperRightLeg: 1,
    leftFoot: 1,
    lowerLeftLeg: 1,
    pelvis: 1,
    upperLeftLeg: 1,
    tummy: 1,
    torso: 1,
    head: 1,
    leftHand: 1,
    upperLeftArm: 1,
    lowerLeftArm: 1,
    leftShoulder: 1,
    skinColor: femaleWithSkin.skinColor,
    skinShade: femaleWithSkin.skinShade,
    hairColor,
    hairShade: adjustColor(hairColor, -20),
    primaryColor: '',
    primaryShade: '',
    secondaryColor: '',
    secondaryShade: '',
    accentColor: '',
    accentShade: '',
  })));
}

await DiscordUtils.sendLog(`6th pass: ${malesWithSecondary.length + femalesWithHair.length} possible visuals`);

// Primary
const femalesWithPrimary: BruteVisuals[] = [];
for (const femaleWithHair of femalesWithHair) {
  femalesWithPrimary.push(...colors.female.clothing.map((clothingColor) => ({
    gender: Gender.female,
    longHair: 0,
    lowerRightArm: 1,
    rightHand: 1,
    upperRightArm: 1,
    rightShoulder: 1,
    rightFoot: 1,
    lowerRightLeg: 1,
    upperRightLeg: 1,
    leftFoot: 1,
    lowerLeftLeg: 1,
    pelvis: 1,
    upperLeftLeg: 1,
    tummy: 1,
    torso: 1,
    head: 1,
    leftHand: 1,
    upperLeftArm: 1,
    lowerLeftArm: 1,
    leftShoulder: 1,
    skinColor: femaleWithHair.skinColor,
    skinShade: femaleWithHair.skinShade,
    hairColor: femaleWithHair.hairColor,
    hairShade: femaleWithHair.hairShade,
    primaryColor: clothingColor,
    primaryShade: adjustColor(clothingColor, -20),
    secondaryColor: '',
    secondaryShade: '',
    accentColor: '',
    accentShade: '',
  })));
}

await DiscordUtils.sendLog(`7th pass: ${malesWithSecondary.length + femalesWithPrimary.length} possible visuals`);

// Secondary
const femalesWithSecondary: BruteVisuals[] = [];
for (const femaleWithPrimary of femalesWithPrimary) {
  femalesWithSecondary.push(...colors.female.clothing.map((clothingColor) => ({
    gender: Gender.female,
    longHair: 0,
    lowerRightArm: 1,
    rightHand: 1,
    upperRightArm: 1,
    rightShoulder: 1,
    rightFoot: 1,
    lowerRightLeg: 1,
    upperRightLeg: 1,
    leftFoot: 1,
    lowerLeftLeg: 1,
    pelvis: 1,
    upperLeftLeg: 1,
    tummy: 1,
    torso: 1,
    head: 1,
    leftHand: 1,
    upperLeftArm: 1,
    lowerLeftArm: 1,
    leftShoulder: 1,
    skinColor: femaleWithPrimary.skinColor,
    skinShade: femaleWithPrimary.skinShade,
    hairColor: femaleWithPrimary.hairColor,
    hairShade: femaleWithPrimary.hairShade,
    primaryColor: femaleWithPrimary.primaryColor,
    primaryShade: femaleWithPrimary.primaryShade,
    secondaryColor: clothingColor,
    secondaryShade: adjustColor(clothingColor, -20),
    accentColor: '',
    accentShade: '',
  })));
}

const allVisuals = [...malesWithSecondary, ...femalesWithSecondary];

await DiscordUtils.sendLog(`8th pass: ${allVisuals.length} possible visuals`);
await DiscordUtils.sendLog('Regenerating all spritesheets...');

for (let i = 0; i < allVisuals.length; i++) {
  const visuals = allVisuals[i];

  // Check if spritesheet already exists and is up to date
  const existingSpritesheet = await prisma.bruteSpritesheet.findUnique({
    where: {
      // eslint-disable-next-line max-len
      gender_longHair_lowerRightArm_rightHand_upperRightArm_rightShoulder_rightFoot_lowerRightLeg_upperRightLeg_leftFoot_lowerLeftLeg_pelvis_upperLeftLeg_tummy_torso_head_leftHand_upperLeftArm_lowerLeftArm_leftShoulder_skinColor_skinShade_hairColor_hairShade_primaryColor_primaryShade_secondaryColor_secondaryShade_accentColor_accentShade: visuals,
    },
    select: {
      version: true,
    },
  });

  if (existingSpritesheet && existingSpritesheet.version === SPRITESHEET_VERSION) {
    await DiscordUtils.sendLog(`Skipped spritesheet for visual ${i + 1}/${allVisuals.length}`);

    // eslint-disable-next-line no-continue
    continue;
  }

  // Create spritesheet
  const spritesheet = await createSpritesheet(visuals);

  await prisma.bruteSpritesheet.upsert({
    where: {
      // eslint-disable-next-line max-len
      gender_longHair_lowerRightArm_rightHand_upperRightArm_rightShoulder_rightFoot_lowerRightLeg_upperRightLeg_leftFoot_lowerLeftLeg_pelvis_upperLeftLeg_tummy_torso_head_leftHand_upperLeftArm_lowerLeftArm_leftShoulder_skinColor_skinShade_hairColor_hairShade_primaryColor_primaryShade_secondaryColor_secondaryShade_accentColor_accentShade: visuals,
    },
    create: {
      image: spritesheet.image,
      json: formatSpritesheet(
        spritesheet,
        visuals,
      ) as unknown as Prisma.JsonObject,
      ...visuals,
      version: SPRITESHEET_VERSION,
    },
    update: {
      image: spritesheet.image,
      json: formatSpritesheet(
        spritesheet,
        visuals,
      ) as unknown as Prisma.JsonObject,
      version: SPRITESHEET_VERSION,
    },
  });

  await DiscordUtils.sendLog(`Regenerated spritesheet for visual ${i + 1}/${allVisuals.length}`);
}