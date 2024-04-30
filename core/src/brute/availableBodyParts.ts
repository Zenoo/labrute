import { BruteBody } from '@labrute/prisma';

const availableBodyParts: {
  male: Omit<BruteBody, 'id' | 'bruteId'>;
  female: Omit<BruteBody, 'id' | 'bruteId'>;
} = {
  male: {
    p2: 7,
    p3: 11,
    p4: 4,
    p7: 6,
    p1: 1,
    p1a: 1,
    p1b: 1,
    p6: 1,
    p8: 4,
    p7b: 2,
    p5: 1,
  },
  female: {
    p2: 0,
    p3: 11,
    p4: 3,
    p7: 6,
    p1: 1,
    p1a: 1,
    p1b: 1,
    p6: 0,
    p8: 4,
    p7b: 2,
    p5: 1,
  },
} as const;

export default availableBodyParts;
