import { isMainThread } from 'node:worker_threads';
import { Logger } from './logger/index.js';
import { DiscordClient, NetworkDiscordClient, NOOP_DISCORD_CLIENT } from './utils/DiscordUtils.js';
import Env from './utils/Env.js';
import { CONSOLE } from './logger/console.js';
import { DiscordLogHandler } from './logger/discord.js';
import { PARENT_PORT } from './logger/parent-port.js';

export interface ServerContext {
  selfUrl: URL,
  discord: DiscordClient,
  logger: Logger,
}

export function createContext(): ServerContext {
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

  return {
    selfUrl,
    discord,
    logger,
  };
}

export const GLOBAL: ServerContext = createContext();
export const LOGGER: Logger = GLOBAL.logger;
export const DISCORD: DiscordClient = GLOBAL.discord;
