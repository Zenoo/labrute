import { PrismaClient } from '@labrute/prisma';
import { isMainThread } from 'node:worker_threads';
import { Config, emptyConfig, loadConfig } from './config.js';
import { CONSOLE } from './logger/console.js';
import { DiscordLogHandler } from './logger/discord.js';
import { Logger } from './logger/index.js';
import { PARENT_PORT } from './logger/parent-port.js';
import { NetworkDiscordClient, NOOP_DISCORD_CLIENT } from './utils/DiscordUtils.js';
import { ASYNC_DISPOSE } from './utils/dispose.js';

export class ServerContext {
  public discord = NOOP_DISCORD_CLIENT;

  public logger = new Logger([CONSOLE]);

  public prisma: PrismaClient;

  public config: Config = emptyConfig;

  public constructor() {
    this.prisma = new PrismaClient();
  }

  public async init() {
    const config = await loadConfig(this.prisma);

    const fallbackLogger: Logger = new Logger([isMainThread ? CONSOLE : PARENT_PORT]);

    const discord = new NetworkDiscordClient({
      notificationWebhookId: config.discordNotifications?.webhookId,
      notificationWebhookToken: config.discordNotifications?.webhookToken,
      logWebhookId: config.discordLogs?.webhookId,
      logWebhookToken: config.discordLogs?.webhookToken,
      rankUpWebhookId: config.discordRankUps?.webhookId,
      rankUpWebhookToken: config.discordRankUps?.webhookToken,
      releaseWebhookId: config.discordReleases?.webhookId,
      releaseWebhookToken: config.discordReleases?.webhookToken,
      knownIssuesWebhookId: config.discordKnownIssues?.webhookId,
      knownIssuesWebhookToken: config.discordKnownIssues?.webhookToken,
      knownIssuesMessageId: config.discordKnownIssuesMessageId,
      server: config.selfUrl,
      logger: fallbackLogger,
    });

    let logger: Logger;
    if (isMainThread) {
      const discordLogHandler = new DiscordLogHandler(discord, (e: Error) => {
        fallbackLogger.error(e);
      });
      logger = new Logger([CONSOLE, discordLogHandler]);
    } else {
      logger = fallbackLogger;
    }

    await this.logger.close();

    this.config = config;
    this.discord = discord;
    this.logger = logger;

    this.logger.info('Config initialized');

    return this;
  }

  public async close() {
    const logger = this.logger.close();
    const prisma = this.prisma.$disconnect();
    await Promise.allSettled([logger, prisma]);
  }

  public async [ASYNC_DISPOSE]() {
    await this.close();
  }
}

export const GLOBAL: ServerContext = await new ServerContext().init();
export const LOGGER = {
  log: (message: unknown) => GLOBAL.logger.log(message),
  debug: (message: unknown) => GLOBAL.logger.debug(message),
  info: (message: unknown) => GLOBAL.logger.info(message),
  warn: (message: unknown) => GLOBAL.logger.warn(message),
  error: (message: unknown) => GLOBAL.logger.error(message),
};
export const DISCORD = () => GLOBAL.discord;
