import { RendererContextInterface } from '../../../hooks/useRenderer';
import { Fighter } from '@labrute/core';
import { Gender } from '@labrute/prisma';

async function createBustImage(
  brute: Omit<Fighter, 'shield'>,
  renderer: RendererContextInterface,
): Promise<HTMLImageElement | null> {
  return new Promise<HTMLImageElement | null>((resolve) => {
    // Since non-main brutes have negative ids, we need to make them unique
    // To avoid different backup brutes loading the same cache
    const bruteUniqueId = `${brute.id}-${brute.name}`;

    renderer.onRender(bruteUniqueId, (content: string) => {
      const img = document.createElement('img');
      img.src = content;
      resolve(img);
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

export default createBustImage;
