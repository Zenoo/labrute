import {
  Animation, BruteWithBodyColors, promiseBatch,
} from '@labrute/core';
import { Gender } from '@labrute/prisma';
import convertSvgToPng from 'convert-svg-to-png';
import SpriteSmith from 'spritesmith';
import Vynil from 'vinyl';
import getFrame, { FRAMES } from '../animations/getFrame';

interface ConvertProps {
  animation: Animation;
  model: Gender;
  index: number;
  frame: string;
}

const convertToPng = async ({
  animation, model, index, frame,
}: ConvertProps) => {
  const png = await convertSvgToPng.convert(frame);

  // Create vinyl
  const vynil = new Vynil({
    contents: png,
    path: `${animation}_${model}_${index + 1}.png`,
  });

  return vynil;
};

const createSpritesheet = async (brute: BruteWithBodyColors) => {
  const model = brute.gender;

  const convertProps: ConvertProps[] = [];

  // Get every model animation
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

      if (!brute.body || !brute.colors) {
        throw new Error('Brute body or colors not found');
      }

      // Prepare frame for conversion
      convertProps.push({
        animation,
        model,
        index: j,
        frame: frameGetter({
          body: brute.body,
          colors: brute.colors,
        }),
      });
    }
  }

  // Convert all frames to png, 8 at a time
  const frames = await promiseBatch(convertToPng, convertProps, 8);

  const spritesheet = await new Promise<SpriteSmith.SpriteResult>((resolve, reject) => {
    // Create spritesheet
    SpriteSmith.run({ src: frames }, (err, result) => {
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