/**
 * Returns the x value if it is within the bounds of the canvas.
 * Returns the closest bound if the x value is outside the bounds of the canvas
 */
const insideXBounds = (x: number) => {
  if (x > 480) return 480;
  if (x < 5) return 5;
  return x;
};

export default insideXBounds;