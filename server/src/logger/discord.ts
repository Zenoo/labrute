import { DiscordClient, SEND_MESSAGE_SAFE_LENGTH } from '../utils/DiscordUtils.js';
import { ASYNC_DISPOSE } from '../utils/dispose.js';
import { formatLogRecord, LogHandler, LogRecord } from './index.js';

/**
 * Duration during which logs should be batched before being sent.
 */
const BATCH_TIMEOUT = 60000;

function format(batch: readonly LogRecord[]): string {
  return `${batch.map((r) => formatLogRecord(r, true)).join('\n')}\n`;
}

/**
 * Send logs to Discord.
 */
export class DiscordLogHandler implements LogHandler {
  /**
   * Discord client to use
   */
  readonly #client: DiscordClient;

  /**
   * Handler called on error.
   */
  readonly #errorHandler: ((e: Error) => void) | null;

  /**
   * Interval timer for batch requests
   */
  #batchTimer: NodeJS.Timeout | null;

  /**
   * Current batch of log records, they will be sent during th next flush.
   */
  #nextBatch: LogRecord[];

  /**
   * Non-null if there is a pending outgoing Discord request.
   */
  #currentRequest: Promise<unknown> | null;

  /**
   * If true, do not accept new logs
   */
  #closed: boolean;

  public constructor(client: DiscordClient, errorHandler?: (e: Error) => void) {
    this.#client = client;
    this.#errorHandler = errorHandler ?? null;
    this.#nextBatch = [];
    this.#batchTimer = null;
    this.#currentRequest = null;
    this.#closed = false;
  }

  public emit(record: Readonly<LogRecord>): void {
    if (this.#closed) {
      throw new Error('called `emit` on closed LogHandler');
    }
    this.#nextBatch.push(record);
    this.#ensureActive();
    const formatted = format(this.#nextBatch);
    if (formatted.length >= SEND_MESSAGE_SAFE_LENGTH) {
      this.flush().catch((e: Error) => {
        if (this.#errorHandler !== null) {
          this.#errorHandler(e);
        } else {
          throw e;
        }
      });
    }
  }

  public async flush(): Promise<void> {
    if (this.#currentRequest !== null) {
      await this.#currentRequest;
    }
    this.#currentRequest = null;
    if (this.#nextBatch.length === 0) {
      return;
    }
    let recordCount = this.#nextBatch.length;
    const formatted = format(this.#nextBatch);
    if (!this.#closed && formatted.length > SEND_MESSAGE_SAFE_LENGTH && recordCount >= 2) {
      // This flush was most likely triggered by an `emit` detecting that we
      // filled the max content length. Try to send one message less in this
      // case to reduce risks of truncation. It's not perfect because if there
      // was a pending request already then we may have accumulated more
      // messages; but it should be good enough until we get a real logger
      // instead of this hack through Discord webhooks.
      recordCount -= 1;
    }
    const batch = this.#nextBatch.splice(0, recordCount);
    const req = this.#send(batch);
    this.#currentRequest = req;
    try {
      await req;
    } finally {
      if (this.#currentRequest === req) {
        this.#currentRequest = null;
      }
    }
  }

  public async close(): Promise<void> {
    this.#closed = true;
    if (this.#batchTimer !== null) {
      clearInterval(this.#batchTimer);
      this.#batchTimer = null;
    }
    await this.flush();
  }

  #ensureActive() {
    if (this.#closed || this.#batchTimer !== null) {
      return;
    }
    this.#batchTimer = setInterval(() => this.#onTick(), BATCH_TIMEOUT);
  }

  #onTick() {
    if (this.#currentRequest === null) {
      this.flush().catch((e: Error) => {
        if (this.#errorHandler !== null) {
          this.#errorHandler(e);
        } else {
          throw e;
        }
      });
    }
  }

  async #send(batch: readonly LogRecord[]) {
    const message = format(batch);
    try {
      await this.#client.sendMessage(message);
    } catch (e) {
      if (this.#errorHandler !== null && e instanceof Error) {
        this.#errorHandler(e);
      } else {
        throw e;
      }
    }
  }

  public async [ASYNC_DISPOSE](): Promise<void> {
    await this.close();
  }
}
