import {
  Animation,
} from '@labrute/core';
import { BruteSpritesheet } from '@labrute/prisma';
import { Resvg } from '@resvg/resvg-js';
import Spritesmith, { SpritesmithResult } from 'spritesmith';
import Vinyl from 'vinyl';
import getFrame, { FRAMES } from '../animations/getFrame.js';

const createSpritesheet = async (visuals: Omit<BruteSpritesheet, 'id' | 'image' | 'json' | 'version'>) => {
  const model = visuals.gender;

  // Get every model animation
  const frames: Vinyl.BufferFile[] = [];
  const animations = Object.keys(FRAMES[model]) as Animation[];
  for (let i = 0; i < animations.length; i += 1) {
    const animation = animations[i];

    // Get every animation frame
    for (let j = 0; j < FRAMES[model][animation].length; j += 1) {
      // Get frame getter
      const frameGetter = getFrame(animation, model, j);

      if (!frameGetter) {
        throw new Error(`No frame for ${animation} ${model} ${j}`);
      }

      // Convert SVG to PNG
      const resvg = new Resvg(frameGetter({
        body: {
          longHair: visuals.longHair,
          lowerRightArm: visuals.lowerRightArm,
          rightHand: visuals.rightHand,
          upperRightArm: visuals.upperRightArm,
          rightShoulder: visuals.rightShoulder,
          rightFoot: visuals.rightFoot,
          lowerRightLeg: visuals.lowerRightLeg,
          upperRightLeg: visuals.upperRightLeg,
          leftFoot: visuals.leftFoot,
          lowerLeftLeg: visuals.lowerLeftLeg,
          pelvis: visuals.pelvis,
          upperLeftLeg: visuals.upperLeftLeg,
          tummy: visuals.tummy,
          torso: visuals.torso,
          head: visuals.head,
          leftHand: visuals.leftHand,
          upperLeftArm: visuals.upperLeftArm,
          lowerLeftArm: visuals.lowerLeftArm,
          leftShoulder: visuals.leftShoulder,
        },
        colors: {
          skinColor: visuals.skinColor,
          skinShade: visuals.skinShade,
          hairColor: visuals.hairColor,
          hairShade: visuals.hairShade,
          primaryColor: visuals.primaryColor,
          primaryShade: visuals.primaryShade,
          secondaryColor: visuals.secondaryColor,
          secondaryShade: visuals.secondaryShade,
          accentColor: visuals.accentColor,
          accentShade: visuals.accentShade,
        },
      }));
      const pngData = resvg.render();
      const png = pngData.asPng();

      // Create vinyl
      const vynil = new Vinyl({
        contents: png,
        path: `${animation}_${model}_${j + 1}.png`,
      });

      frames.push(vynil);
    }
  }

  const spritesheet = await new Promise<SpritesmithResult & {
    image: Buffer;
  }>((resolve, reject) => {
    // Create spritesheet
    Spritesmith.run({ src: frames }, (err, result) => {
      if (err) {
        reject(err);
        throw err;
      }

      resolve(result);
    });
  });

  return spritesheet;
};

export default createSpritesheet;