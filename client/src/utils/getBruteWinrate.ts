import { Brute } from '@labrute/prisma';

export const getBruteWinrate = (
  brute: Pick<Brute, 'victories' | 'losses'>,
) => {
  if ((brute.victories + brute.losses) === 0) return '0%';

  const percent = ((brute.victories / (brute.victories + brute.losses)) * 100)
    .toLocaleString(undefined, { maximumFractionDigits: 2 });

  return `${percent}%`;
};
