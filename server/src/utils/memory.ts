import { LOGGER } from '../context.js';

export const logMemory = (label: string) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  const used = process.memoryUsage();
  LOGGER.log(`[${label}] Memory: ${Math.round(used.heapUsed / 1024 / 1024)}MB / ${Math.round(used.heapTotal / 1024 / 1024)}MB`);
};
