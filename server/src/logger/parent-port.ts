import { parentPort } from 'node:worker_threads';
import { LogHandler, LogRecord } from './index.js';

const EVENT = 'Log';

/**
 * Send to logs to the parent thread.
 *
 * Logs are posted as objects defined as `{event: 'Log', record: LogRecord}`.
 */
export const PARENT_PORT: LogHandler = {
  emit(record: Readonly<LogRecord>): void {
    parentPort?.postMessage({ event: EVENT, record });
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

/**
 * Create a callback for `message` worker event that forwards logs.
 *
 * The boolean indeicates if the message was forwarded.
 */
export function forwardWorkerLog(target: LogHandler): (message: unknown) => boolean {
  return (message: unknown): boolean => {
    if (typeof message !== 'object' || message === null) {
      return false;
    }
    const event: unknown = Reflect.get(message, 'event');
    if (event !== 'Log') {
      return false;
    }
    const record: unknown = Reflect.get(message, 'record');
    if (typeof record !== 'object' || record === null) {
      return false;
    }
    // We could do a deeper type validation, but at this point was assume that
    // it's a valid log record.
    target.emit(record as LogRecord);
    return true;
  };
}
