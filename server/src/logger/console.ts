import { formatLogRecord, LogHandler, LogLevel, LogRecord } from './index.js';

/**
 * Write logs to JS console.
 */
export const CONSOLE: LogHandler = {
  emit(record: Readonly<LogRecord>): void {
    const formatted = formatLogRecord(record, false);
    switch (record.level) {
      case LogLevel.Debug: {
        console.debug(formatted);
        break;
      }
      case LogLevel.Log: {
        console.log(formatted);
        break;
      }
      case LogLevel.Info: {
        console.info(formatted);
        break;
      }
      case LogLevel.Warn: {
        console.warn(formatted);
        break;
      }
      case LogLevel.Error:
      default: {
        console.error(formatted);
        break;
      }
    }
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
