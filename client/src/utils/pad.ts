/**
 * Pad a number
 * @param n Nmber to pad
 * @param width Pad width
 * @param z Fill character
 * @returns Padded number
 */
const pad = (n: number, width: number, z = '0') => {
  const nString = `${n}`;
  return nString.length >= width
    ? nString
    : new Array(width - nString.length + 1).join(z) + n.toString();
};

export default pad;