import {
  ANIMATION_ANCHORS,
  Animation, Animations,
  BruteVisuals,
} from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { SpritesmithResult } from 'spritesmith';
import { FRAMES } from '../animations/getFrame.js';

interface Frame {
  frame: {
    x: number;
    y: number;
    w: number;
    h: number;
  },
  rotated: boolean,
  trimmed: boolean,
  anchor: {
    x: number;
    y: number;
  },
}

type FrameFileName = `${Animation}_${Gender}_${number}.png`;

export interface SpritesheetJson {
  frames: {
    [frame: FrameFileName]: Frame,
  },
  animations: Record<Animation, string[]>,
  meta: {
    app: string;
    version: string;
    image: string;
    format: string;
    size: {
      w: number;
      h: number;
    },
    scale: string;
    smartupdate: string;
  }
}

const generateAnimationArray = (animation: Animation, gender: Gender) => Array.from(
  { length: FRAMES[gender][animation].length },
  (v, k) => `${animation}_${gender}_${k + 1}.png`,
);

const generateAnimations = (gender: Gender) => Animations
  .reduce<Record<Animation, string[]>>((acc, animation) => {
    acc[animation] = generateAnimationArray(animation, gender);

    return acc;
  }, {} as Record<Animation, string[]>);

const formatSpritesheet = (
  spritesheet: SpritesmithResult,
  visuals: BruteVisuals,
): SpritesheetJson => {
  // Set visuals in URL
  const imageUrl = new URL('https://test.com/');

  imageUrl.searchParams.set('lh', visuals.longHair.toString());
  imageUrl.searchParams.set('lra', visuals.lowerRightArm.toString());
  imageUrl.searchParams.set('rh', visuals.rightHand.toString());
  imageUrl.searchParams.set('ura', visuals.upperRightArm.toString());
  imageUrl.searchParams.set('rs', visuals.rightShoulder.toString());
  imageUrl.searchParams.set('rf', visuals.rightFoot.toString());
  imageUrl.searchParams.set('lrl', visuals.lowerRightLeg.toString());
  imageUrl.searchParams.set('url', visuals.upperRightLeg.toString());
  imageUrl.searchParams.set('lf', visuals.leftFoot.toString());
  imageUrl.searchParams.set('lll', visuals.lowerLeftLeg.toString());
  imageUrl.searchParams.set('p', visuals.pelvis.toString());
  imageUrl.searchParams.set('ull', visuals.upperLeftLeg.toString());
  imageUrl.searchParams.set('t', visuals.tummy.toString());
  imageUrl.searchParams.set('to', visuals.torso.toString());
  imageUrl.searchParams.set('h', visuals.head.toString());
  imageUrl.searchParams.set('lha', visuals.leftHand.toString());
  imageUrl.searchParams.set('ula', visuals.upperLeftArm.toString());
  imageUrl.searchParams.set('lla', visuals.lowerLeftArm.toString());
  imageUrl.searchParams.set('ls', visuals.leftShoulder.toString());
  imageUrl.searchParams.set('sc', visuals.skinColor);
  imageUrl.searchParams.set('ss', visuals.skinShade);
  imageUrl.searchParams.set('hc', visuals.hairColor);
  imageUrl.searchParams.set('hs', visuals.hairShade);
  imageUrl.searchParams.set('pc', visuals.primaryColor);
  imageUrl.searchParams.set('ps', visuals.primaryShade);
  imageUrl.searchParams.set('sec', visuals.secondaryColor);
  imageUrl.searchParams.set('ses', visuals.secondaryShade);
  imageUrl.searchParams.set('ac', visuals.accentColor);
  imageUrl.searchParams.set('as', visuals.accentShade);

  return {
    frames: {
      ...Object.entries(spritesheet.coordinates)
        .reduce<Record<FrameFileName, Frame>>((acc, [frame, data]) => {
          const animationName = frame.split('_')[0] as Animation;
          acc[frame as FrameFileName] = {
            frame: {
              x: data.x,
              y: data.y,
              w: data.width,
              h: data.height,
            },
            rotated: false,
            trimmed: false,
            anchor: {
              x: ANIMATION_ANCHORS[visuals.gender][animationName][0],
              y: ANIMATION_ANCHORS[visuals.gender][animationName][1],
            },
          };

          return acc;
        }, {} as Record<FrameFileName, Frame>),
    },
    animations: generateAnimations(visuals.gender),
    meta: {
      app: 'https://www.codeandweb.com/texturepacker',
      version: '1.0',
      image: `${visuals.gender}.png${imageUrl.search}`,
      format: 'RGBA8888',
      size: { w: spritesheet.properties.width, h: spritesheet.properties.height },
      scale: '1',
      smartupdate: '$TexturePacker:SmartUpdate:ecc90d11856343dacff9417a6254e566:b33a3fe65889c54d0315918392650172:b920835fe2519a5dc0b950d29546a2e7$',
    },
  };
};

export default formatSpritesheet;