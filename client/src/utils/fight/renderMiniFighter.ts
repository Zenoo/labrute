import { Fighter } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Renderer, Ticker } from 'pixi.js';
import { FighterHolder } from './FighterHolder';

type MiniFighterBrute = Pick<Brute, 'id' | 'name' | 'gender' | 'body' | 'colors'>;

const LOAD_TIMEOUT_MS = 10000;

/**
 * Renders the in-fight mini fighter of a brute to an image, without needing a Pixi application
 * or a fight. Only a bare renderer is required.
 */
export const renderMiniFighter = async (
  renderer: Renderer,
  brute: MiniFighterBrute,
  options?: { team?: 'L' | 'R', animation?: 'idle' | 'win', frame?: number },
) => {
  const fighter: Fighter = {
    id: brute.id,
    index: 0,
    team: options?.team ?? 'L',
    name: brute.name,
    gender: brute.gender,
    body: brute.body,
    colors: brute.colors,
    rank: 0,
    level: 0,
    strength: 0,
    agility: 0,
    speed: 0,
    type: 'brute',
    maxHp: 0,
    hp: 0,
    weapons: {},
    skills: {},
    shield: false,
  };

  const ticker = new Ticker();
  const holder = new FighterHolder(
    { renderer, ticker },
    fighter,
    { current: 1 },
  );

  try {
    const start = performance.now();
    while (!holder.loaded && !holder.container.destroyed) {
      if (performance.now() - start > LOAD_TIMEOUT_MS) {
        throw new Error('Mini fighter load timeout');
      }
      await new Promise((resolve) => {
        setTimeout(resolve, 16);
      });
    }

    holder.setAnimation(options?.animation ?? 'idle', options?.frame ?? 0);
    holder.pause();

    // Let the freshly displayed frame's textures resolve
    await new Promise((resolve) => {
      setTimeout(resolve, 32);
    });

    const image = await renderer.extract.image({
      target: holder.container,
      format: 'png',
      resolution: 2,
    });

    return image.src;
  } finally {
    holder.destroy();
    ticker.destroy();
  }
};
