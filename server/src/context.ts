import { isMainThread } from 'node:worker_threads';
import { Logger } from './logger/index.js';
import { DiscordClient, NetworkDiscordClient, NOOP_DISCORD_CLIENT } from './utils/DiscordUtils.js';
import Env from './utils/Env.js';
import { CONSOLE } from './logger/console.js';
import { DiscordLogHandler } from './logger/discord.js';
import { PARENT_PORT } from './logger/parent-port.js';
import {ASYNC_DISPOSE} from "./utils/dispose.js";
import {PrismaClient} from "@labrute/prisma";

const DEBUG_QUERIES = false;

export class ServerContext {
  public readonly selfUrl: URL;

  public readonly discord: DiscordClient;

  public readonly logger: Logger;

  public readonly prisma: PrismaClient;

  public constructor() {
    const selfUrl = new URL(Env.SELF_URL);
    const fallbackLogger: Logger = new Logger([isMainThread ? CONSOLE : PARENT_PORT]);

    let discord: DiscordClient;
    if (
      typeof Env.DISCORD_WEBHOOK_ID === 'string'
      && typeof Env.DISCORD_WEBHOOK_TOKEN === 'string'
      && typeof Env.DISCORD_LOGS_WEBHOOK_ID === 'string'
      && typeof Env.DISCORD_LOGS_WEBHOOK_TOKEN === 'string'
    ) {
      discord = new NetworkDiscordClient({
        tournamentWebhookId: Env.DISCORD_WEBHOOK_ID,
        tournamentWebhookToken: Env.DISCORD_WEBHOOK_TOKEN,
        logWebhookId: Env.DISCORD_LOGS_WEBHOOK_ID,
        logWebhookToken: Env.DISCORD_LOGS_WEBHOOK_TOKEN,
        server: selfUrl,
        logger: fallbackLogger,
      });
    } else {
      discord = NOOP_DISCORD_CLIENT;
    }

    let logger: Logger;
    if (isMainThread) {
      const discordLogHandler = new DiscordLogHandler(discord, (e: Error) => {
        fallbackLogger.error(e);
      });
      logger = new Logger([CONSOLE, discordLogHandler]);
    } else {
      logger = fallbackLogger;
    }

    const prisma = new PrismaClient(DEBUG_QUERIES ? {
      log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'stdout',
          level: 'error',
        },
        {
          emit: 'stdout',
          level: 'info',
        },
        {
          emit: 'stdout',
          level: 'warn',
        },
      ],
    } : undefined);

    if (DEBUG_QUERIES) {
      prisma.$on('query', (e) => {
        logger.warn(`Query: ${e.query}`);
        logger.warn(`Params: ${e.params}`);
        logger.warn(`Duration: ${e.duration}ms`);
      });
    }

    this.selfUrl = selfUrl;
    this.discord = discord;
    this.logger = logger;
    this.prisma = prisma;
  }

  public async close(): Promise<void> {
    const logger = this.logger.close();
    const prisma = this.prisma.$disconnect();
    await Promise.allSettled([logger, prisma]);
  }

  public async [ASYNC_DISPOSE](): Promise<void> {
    await this.close();
  }
}

export const GLOBAL: ServerContext = new ServerContext();
export const LOGGER: Logger = GLOBAL.logger;
export const DISCORD: DiscordClient = GLOBAL.discord;
