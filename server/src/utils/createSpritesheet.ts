import {
  Animation,
  Brute,
} from '@eternaltwin/labrute-core/types';
import Vynil from 'vinyl';
import convertSvgToPng from 'convert-svg-to-png';
import SpriteSmith from 'spritesmith';
import getFrame, { FRAMES } from '../animations/getFrame.js';

const createSpritesheet = async (brute: Brute) => {
  const frames: Vynil.BufferFile[] = [];
  const model = brute.data.gender;

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

      // Convert SVG to PNG
      // eslint-disable-next-line no-await-in-loop
      const png = await convertSvgToPng.convert(frameGetter({
        body: brute.data.body,
        colors: brute.data.colors,
      }));

      // Create vinyl
      const frame = new Vynil({
        contents: png,
        path: `${animation}-${model}-${j + 1}.png`,
      });

      frames.push(frame);
    }
  }

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