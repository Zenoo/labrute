import { Brute } from '@labrute/prisma';
import { EventFreeResets, RESET_PRICE } from '../constants';

export const getResetCost = (brute: Pick<Brute, 'eventId' | 'resets'>) => {
  if (!brute.eventId) {
    return RESET_PRICE;
  }

  if (brute.resets >= EventFreeResets) {
    return RESET_PRICE;
  }

  return 0;
};
