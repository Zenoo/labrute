import { LogHandler } from './index.js';

/**
 * Dummy logger discarding all log records.
 */
export const NOOP: LogHandler = {
  emit(): void {
    // Nothing to do
  },
  flush(): Promise<void> {
    // Nothing to do
    return Promise.resolve();
  },
  close(): Promise<void> {
    // Nothing to do
    return Promise.resolve();
  },
};
