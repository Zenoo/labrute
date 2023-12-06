import { inspect } from 'node:util';

/**
 * Normalize a log message into a string.
 */
function stringifyMessage(message: unknown): string {
  return typeof message === 'string' ? message : inspect(
    message,
    {
      depth: 5,
      colors: false,
      compact: true,
      breakLength: Infinity,
    },
  );
}

export enum LogLevel {
  Debug,
  Log,
  Info,
  Warn,
  Error,
}

/**
 * Log record written by loggers
 */
export interface LogRecord {
  level: LogLevel,
  message: string,
  time: Date,
}

// Width of the `level` field in the log.
// This corresponds to the name of the longest log level (Debug/Error)
const LEVEL_WIDTH = 5;

// Format a log record into a string
export function formatLogRecord(record: Readonly<LogRecord>, shortTime: boolean): string {
  let time: string;
  if (shortTime) {
    const hours = record.time.getUTCHours().toString();
    const minutes = record.time.getUTCMinutes().toString();
    time = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
  } else {
    time = record.time.toISOString();
  }
  const level = (LogLevel[record.level] ?? '').padEnd(LEVEL_WIDTH, ' ');
  return `${time} ${level} ${record.message}`;
}

/**
 * Internal handler for the logs.
 *
 * This is not intended to be used directly: pass it to a `Logger` constructor
 * for a more convenient interface.
 */
export interface LogHandler {
  /**
   * Emit a log record.
   */
  emit(record: Readonly<LogRecord>): void;

  /**
   * Wait until all current logs are fully written.
   */
  flush(): Promise<void>;

  /**
   * Immediately stop accepting new logs, then wait until current logs are fully written.
   */
  close(): Promise<void>;
}

export class Logger implements LogHandler {
  #handlers: LogHandler[];

  public constructor(handlers: readonly LogHandler[]) {
    this.#handlers = [...handlers];
  }

  public emit(record: LogRecord): void {
    for (const handler of this.#handlers) {
      handler.emit(record);
    }
  }

  #emitMessage(level: LogLevel, message: unknown): void {
    this.emit({
      level,
      message: stringifyMessage(message),
      time: new Date(),
    });
  }

  public debug(message: unknown): void {
    this.#emitMessage(LogLevel.Debug, message);
  }

  public log(message: unknown): void {
    this.#emitMessage(LogLevel.Log, message);
  }

  public info(message: unknown): void {
    this.#emitMessage(LogLevel.Info, message);
  }

  public warn(message: unknown): void {
    this.#emitMessage(LogLevel.Warn, message);
  }

  public error(message: unknown): void {
    this.#emitMessage(LogLevel.Error, message);
  }

  public async flush(): Promise<void> {
    await Promise.all(this.#handlers.map((h) => h.flush()));
  }

  public async close(): Promise<void> {
    await Promise.all(this.#handlers.map((h) => h.close()));
  }
}
