import { PrismaClient } from '@labrute/prisma';
import { isMainThread } from 'node:worker_threads';
import { Config, loadConfig } from './config.js';
import { CONSOLE } from './logger/console.js';
import { DiscordLogHandler } from './logger/discord.js';
import { Logger } from './logger/index.js';
import { PARENT_PORT } from './logger/parent-port.js';
import { DiscordClient, NetworkDiscordClient, NOOP_DISCORD_CLIENT } from './utils/DiscordUtils.js';
import { ASYNC_DISPOSE } from './utils/dispose.js';

const DEBUG_QUERIES = false;

export class ServerContext {
  public readonly config: Config;

  public readonly discord: DiscordClient;

  public readonly logger: Logger;

  public readonly prisma: PrismaClient;

  public constructor(config: Config) {
    const fallbackLogger: Logger = new Logger([isMainThread ? CONSOLE : PARENT_PORT]);

    let discord: DiscordClient;
    if (config.discordNotifications !== null && config.discordLogs !== null) {
      discord = new NetworkDiscordClient({
        tournamentWebhookId: config.discordNotifications.webhookId,
        tournamentWebhookToken: config.discordNotifications.webhookToken,
        logWebhookId: config.discordLogs.webhookId,
        logWebhookToken: config.discordLogs.webhookToken,
        server: config.selfUrl,
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

    this.config = config;
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

const config = loadConfig();
export const GLOBAL: ServerContext = new ServerContext(config);
export const LOGGER: Logger = GLOBAL.logger;
export const DISCORD: DiscordClient = GLOBAL.discord;
