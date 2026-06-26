import { RendererContextInterface } from '../../../hooks/useRenderer';
import { Fighter } from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { AnimationFighter } from './findFighter';

export async function createBustImage(
  brute: AnimationFighter | Fighter,
  renderer: RendererContextInterface,
) {
  return new Promise<HTMLImageElement>((resolve) => {
    // Since non-main brutes have negative ids, we need to make them unique
    // To avoid different backup brutes loading the same cache
    const bruteUniqueId = `${brute.id}-${brute.name}`;

    renderer.onRender(bruteUniqueId, (content: string) => {
      const img = new Image();
      img.onload = () => {
        resolve(img);
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
