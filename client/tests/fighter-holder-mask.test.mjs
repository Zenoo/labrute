import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { setImmediate } from 'node:timers/promises';
import { Assets, DOMAdapter, Point, Texture } from 'pixi.js';
import { Symbol68 } from 'labrute-fla-parser';
import { createServer } from 'vite';

let server;
let FighterHolder;
const originalLoad = Assets.load;

before(async (t) => {
  // Keep real Pixi transforms and masks; SVG rasterization needs a browser.
  Assets.load = async () => Texture.WHITE;
  t.mock.method(DOMAdapter.get(), 'createCanvas', () => ({ getContext: () => null }));
  server = await createServer({
    configFile: false,
    ssr: { external: ['@labrute/core', '@labrute/prisma', 'pixi.js'] },
    optimizeDeps: { noDiscovery: true, entries: [] },
    server: { middlewareMode: true, watch: null, hmr: false },
  });
  ({ FighterHolder } = await server.ssrLoadModule('/src/utils/fight/FighterHolder.ts'));
});

after(async () => {
  Assets.load = originalLoad;
  await server?.close();
});

for (const gender of ['male', 'female']) {
  for (const team of ['L', 'R']) {
    test(`${gender} ${team}: Piopio's mask stays aligned with the hand after weapon changes`, async () => {
      const holder = new FighterHolder({
        renderer: { generateTexture: () => Texture.WHITE },
      }, {
        type: 'brute', name: 'Mask test', gender, team, skills: {}, shield: false,
      }, { current: 1 });
      try {
        while (!holder.loaded) await setImmediate();
        const maskOffset = Symbol68.parts.find((part) => part.name === 'Symbol39').offset;
        for (const weapon of ['piopio', 'broadsword', 'knife', 'piopio']) {
          holder.weapon = weapon;
          holder.setAnimation('idle');
          const weaponHolder = holder.container.getChildByLabel('Symbol68', true);
          const mask = weaponHolder.children.find((child) => child.label === 'Symbol39');
          const weaponPartName = { piopio: 'Symbol62', broadsword: 'Symbol41', knife: 'Symbol40' }[weapon];
          const weaponPart = weaponHolder.getChildByLabel(weaponPartName);
          assert.equal(weaponPart.mask, mask, `${weapon}: hand mask remains applied`);
          assert.equal(mask.renderable, false, 'mask is not drawn as artwork');
          const actual = mask.toGlobal(new Point(0, 0));
          const expected = weaponHolder.toGlobal(new Point(-maskOffset.x, -maskOffset.y));
          assert.ok(Math.abs(actual.x - expected.x) < 1e-6, `${weapon}: mask x stays in hand space`);
          assert.ok(Math.abs(actual.y - expected.y) < 1e-6, `${weapon}: mask y stays in hand space`);
        }
      } finally {
        holder.destroy();
      }
    });
  }
}
