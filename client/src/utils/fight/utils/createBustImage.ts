import { RendererContextInterface } from '../../../hooks/useRenderer';
import { Fighter } from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { AnimationFighter } from './findFighter';
import {
  BUST_HEIGHT, bustLayout, PORTRAIT_SCALE, PORTRAIT_WIDTH,
} from '../../portraitLayout';

export async function createBustImage(
  brute: AnimationFighter | Fighter,
  renderer: RendererContextInterface,
) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    // Since non-main brutes have negative ids, we need to make them unique
    // To avoid different backup brutes loading the same cache
    const bruteUniqueId = `${brute.id}-${brute.name}`;

    renderer.onRender(bruteUniqueId, (content, frame) => {
      const img = new Image();

      img.onerror = () => reject(new Error(`Failed to load bust for ${bruteUniqueId}`));

      img.onload = () => {
        if (!frame) {
          resolve(img);

          return;
        }

        // Restore source coordinates in a fixed viewport centered on the face.
        // A tight crop starts at the hair, whose height varies independently of the face.
        const canvas = document.createElement('canvas');

        canvas.width = PORTRAIT_WIDTH * PORTRAIT_SCALE;
        canvas.height = BUST_HEIGHT;
        const context = canvas.getContext('2d');

        if (!context) {
          reject(new Error('Failed to create bust canvas'));

          return;
        }

        const layout = bustLayout(frame);

        context.drawImage(img, layout.x, layout.y, layout.width, layout.height);
        img.onload = () => resolve(img);
        img.src = canvas.toDataURL('image/png');
      };

      img.src = content;
    });

    renderer.render({
      ...brute,
      id: bruteUniqueId,
      gender: brute.gender || Gender.male,
      body: brute.body || '0'.repeat(11),
      colors: brute.colors || '0'.repeat(32),
    });
  });
}
