import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  PORTRAIT_HEIGHT, PORTRAIT_WIDTH, portraitLayout,
} from '../src/utils/portraitLayout.ts';

// Crops measured in Chromium for short, wide and tall hairstyles, plus a
// highlighted portrait whose transparent filter padding extends past the origin.
const frames = [
  { x: -4, y: 41 / 3, width: 254 / 3, height: 592 / 3 },
  { x: -7 / 3, y: -7 / 3, width: 123, height: 643 / 3 },
  { x: -50 / 3, y: -20, width: 108, height: 692 / 3 },
  { x: -24, y: -28, width: 150, height: 252 },
];

for (const looking of ['left', 'right']) {
  for (const width of [30, 70, 80]) {
    test(`${looking}, ${width}px: crop changes preserve source scale and registration`, () => {
      const height = width * PORTRAIT_HEIGHT / PORTRAIT_WIDTH;
      for (const frame of frames) {
        const layout = portraitLayout(frame, looking);
        const imageWidth = parseFloat(layout.width) / 100 * width;
        const imageHeight = parseFloat(layout.height) / 100 * height;
        const left = parseFloat(layout.left) / 100 * width;
        const top = parseFloat(layout.top) / 100 * height;

        // Two arbitrary source landmarks must land at the same screen position
        // regardless of the hairstyle's crop or highlight padding.
        for (const point of [{ x: 35, y: 50 }, { x: 60, y: 210 }]) {
          const localX = (point.x - frame.x) / frame.width;
          const actualX = left + imageWidth * (looking === 'right' ? 1 - localX : localX);
          const actualY = top + imageHeight * (point.y - frame.y) / frame.height;
          const expectedX = width * (looking === 'right' ? 100 - point.x : point.x) / 100;
          assert.ok(Math.abs(actualX - expectedX) < 1e-8);
          assert.ok(Math.abs(actualY - width * point.y / 100) < 1e-8);
        }
      }
    });
  }
}
