// Shared source-coordinate viewport, independent of hair, clothing and body build.
export const PORTRAIT_WIDTH = 100;
export const PORTRAIT_HEIGHT = 220;
export const PORTRAIT_SCALE = 3;

export type PortraitFrame = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const portraitLayout = (frame: PortraitFrame, looking: 'left' | 'right') => ({
  left: `${100 * (looking === 'right'
    ? PORTRAIT_WIDTH - frame.x - frame.width : frame.x) / PORTRAIT_WIDTH}%`,
  top: `${100 * frame.y / PORTRAIT_HEIGHT}%`,
  width: `${100 * frame.width / PORTRAIT_WIDTH}%`,
  height: `${100 * frame.height / PORTRAIT_HEIGHT}%`,
});
