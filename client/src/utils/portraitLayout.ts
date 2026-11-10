// Shared source-coordinate viewport, independent of hair, clothing and body build.
export const PORTRAIT_WIDTH = 100;
export const PORTRAIT_HEIGHT = 220;
export const PORTRAIT_SCALE = 3;
// The header opening is 40 screen pixels tall; bust containers use a 0.15 scale.
export const BUST_HEIGHT = Math.ceil(40 / 0.15);

export type PortraitFrame = {
  x: number;
  y: number;
  width: number;
  height: number;
};

// Keep the face in the fixed viewport, even when hair extends above it.
export const bustLayout = (frame: PortraitFrame): PortraitFrame => ({
  x: frame.x * PORTRAIT_SCALE,
  y: (frame.y - 5) * PORTRAIT_SCALE,
  width: frame.width * PORTRAIT_SCALE,
  height: frame.height * PORTRAIT_SCALE,
});

export const portraitLayout = (frame: PortraitFrame, looking: 'left' | 'right') => ({
  left: `${100 * (looking === 'right'
    ? PORTRAIT_WIDTH - frame.x - frame.width : frame.x) / PORTRAIT_WIDTH}%`,
  top: `${100 * frame.y / PORTRAIT_HEIGHT}%`,
  width: `${100 * frame.width / PORTRAIT_WIDTH}%`,
  height: `${100 * frame.height / PORTRAIT_HEIGHT}%`,
});
