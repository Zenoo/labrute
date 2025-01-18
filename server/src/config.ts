import { PrismaClient } from '@labrute/prisma';
import * as dotenv from 'dotenv';
import Cryptr from 'cryptr';

/**
 * Configuration for the Eternaltwin client.
 *
 * The Eternaltwin client is used for authentication and logs.
 */
export interface EternaltwinConfig {
  /**
   * Absolute URL to the Eternaltwin root.
   */
  readonly url: string;

  /**
   * OAuth client reference (uuid or key).
   *
   * This should match the app as register on Eternaltwin server.
   * For apps registered through the Eternaltwin config `seed.app.<key>`,
   * the value should be `<key>@clients`.
   */
  readonly clientRef: string;

  /**
   * Secret shared with the Eternalfest server.
   *
   * For apps registered through the Eternaltwin config, it corresponds
   * to `seed.app.<key>.secret`.
   */
  readonly secret: string;

  /**
   * Name of the app as registered with Eternaltwin.
   *
   * (First part of the client key).
   */
  readonly app: string;

  /**
   * Name of the channel as register with Eternaltwin.
   *
   * (Second part of the client key).
   */
  readonly channel: string;
}

/**
 * Configuration for the Discord client.
 *
 * The discord client is used for logs and notifcations.
 */
export interface DiscordConfig {
  /**
   * Discord webhook id
   */
  readonly webhookId: string;

  /**
   * Discord webhook token (secret)
   */
  readonly webhookToken: string;
}

/**
 * Server configuration
 */
export interface Config {
  /**
   * Boolean indicating if the server should run in production mode.
   */
  readonly isProduction: boolean;

  /**
   * Port used to bind the HTTP server.
   */
  readonly port: number;

  /**
   * Absolute URL to website root, as visible externally.
   */
  readonly selfUrl: URL;

  /**
   * Regular expression used to match CORS origins.
   */
  readonly corsRegex: RegExp;

  /**
   * Secret used to sign cookies.
   */
  readonly cookieSecret: string;

  /**
   * Secret used to sign CSRF tokens.
   */
  readonly csrfSecret: string;

  /**
   * Configuration for the Eternaltwin client.
   */
  readonly eternaltwin: EternaltwinConfig;

  /**
   * Configuration for the Discord client used for notifications (optional).
   */
  readonly discordNotifications: DiscordConfig | null;

  /**
   * Configuration for the Discord client used for logs (optional).
   */
  readonly discordLogs: DiscordConfig | null;

  /**
   * Configuration for the Discord client used for rank ups (optional).
   */
  readonly discordRankUps: DiscordConfig | null;

  /**
   * Configuration for the Discord client used for releases (optional).
   */
  readonly discordReleases: DiscordConfig | null;

  /**
   * Configuration for the Discord client used for known issues (optional).
   */
  readonly discordKnownIssues: DiscordConfig | null;

  /**
   * Discord known issues message ID
   */
  readonly discordKnownIssuesMessageId: string;

  /**
   * Absolute URL to the DinoRPG website.
   */
  readonly dinoRpgUrl: string;
}

export const emptyConfig: Config = {
  isProduction: false,
  port: 50380,
  selfUrl: new URL('http://localhost:3000/'),
  corsRegex: /.*/,
  cookieSecret: 'dev',
  csrfSecret: 'dev2',
  eternaltwin: {
    url: 'http://localhost:50320/',
    clientRef: 'brute_dev@clients',
    secret: 'dev',
    app: 'brute',
    channel: 'dev',
  },
  discordNotifications: null,
  discordLogs: null,
  discordRankUps: null,
  discordReleases: null,
  discordKnownIssues: null,
  discordKnownIssuesMessageId: '1310056621774471241',
  dinoRpgUrl: 'https://dinorpg.eternaltwin.org',
};

/**
 * Read the port value based on the provided env value.
 *
 * Returns a default port if the value is missing or invalid.
 *
 * @param envPort Value of the `PORT` environment variable.
 */
export function readPort(envPort: string | undefined) {
  if (typeof envPort === 'string') {
    const numPort = parseInt(envPort, 10);
    if (!Number.isNaN(numPort)) {
      return numPort;
    }
  }
  return emptyConfig.port;
}

/**
 * Read the self-URL value based on the provided env value.
 *
 * Returns a default port if the value is missing or invalid.
 *
 * @param envSelfUrl Value of the `SELF_URL` environment variable.
 */
export function readSelfUrl(envSelfUrl: string | undefined): URL {
  if (typeof envSelfUrl === 'string') {
    try {
      const selfUrl = new URL(envSelfUrl);
      if (selfUrl.protocol === 'http:' || selfUrl.protocol === 'https:') {
        return selfUrl;
      }
    } catch {
      // fall through and return default
    }
  }
  return emptyConfig.selfUrl;
}

/**
 * Regular expression used to match CORS origins.
 */
export function readCorsRegex(envCorsRegex: string | undefined) {
  if (typeof envCorsRegex === 'string') {
    try {
      return new RegExp(envCorsRegex);
    } catch {
      // fall through and return default
    }
  }
  return /.*/;
}

/**
 * Read the cookie secret value based on the provided env value.
 */
export function readCookieSecret(envCookieSecret: string | undefined) {
  if (typeof envCookieSecret === 'string') {
    return envCookieSecret;
  }
  return emptyConfig.cookieSecret;
}

/**
 * Read the CSRF secret value based on the provided env value.
 */
export function readCsrfSecret(envCsrfSecret: string | undefined) {
  if (typeof envCsrfSecret === 'string') {
    return envCsrfSecret;
  }
  return emptyConfig.csrfSecret;
}

/**
 * Read the provided environment recorded and build a config object.
 */
export async function readConfig(
  env: Record<string, string | undefined>,
  prisma?: PrismaClient,
): Promise<Config> {
  const isProduction = env.NODE_ENV === 'production';
  const port = readPort(env.PORT);
  const selfUrl = readSelfUrl(env.SELF_URL);
  const corsRegex = readCorsRegex(env.CORS_REGEX);
  const cookieSecret = readCookieSecret(env.COOKIE_SECRET);
  const csrfSecret = readCsrfSecret(env.CSRF_SECRET);

  const configVars = await prisma?.config.findMany({
    select: {
      key: true,
      value: true,
    },
  }) ?? [];

  const cryptrSecret = configVars.find((v) => v.key === 'CRYPTR_SECRET')?.value ?? 'dev';
  const cryptr = new Cryptr(cryptrSecret);

  const eternaltwinUrl = env.ETERNALTWIN_URL ?? env.ETWIN_URL ?? emptyConfig.eternaltwin.url;
  const eternaltwinClientRef = env.ETERNALTWIN_CLIENT_REF
    ?? env.ETWIN_CLIENT_ID
    ?? emptyConfig.eternaltwin.clientRef;
  const eternaltwinSecret = env.ETERNALTWIN_SECRET
    ?? env.ETWIN_CLIENT_SECRET
    ?? emptyConfig.eternaltwin.secret;
  const eternaltwinApp = env.ETERNALTWIN_APP ?? emptyConfig.eternaltwin.app;
  const eternaltwinChannel = env.ETERNALTWIN_CHANNEL ?? emptyConfig.eternaltwin.channel;

  let rawDiscordNotifId = env.DISCORD_WEBHOOK_ID;
  let rawDiscordNotifToken = env.DISCORD_WEBHOOK_TOKEN;
  let rawDiscordLogId = env.DISCORD_LOGS_WEBHOOK_ID;
  let rawDiscordLogToken = env.DISCORD_LOGS_WEBHOOK_TOKEN;
  let rawDiscordRankUpId = env.DISCORD_RANKUP_WEBHOOK_ID;
  let rawDiscordRankUpToken = env.DISCORD_RANKUP_WEBHOOK_TOKEN;
  let rawDiscordReleasesId = env.DISCORD_RELEASES_WEBHOOK_ID;
  let rawDiscordReleasesToken = env.DISCORD_RELEASES_WEBHOOK_TOKEN;
  let rawDiscordKnownIssuesId = env.DISCORD_KNOWN_ISSUES_WEBHOOK_ID;
  let rawDiscordKnownIssuesToken = env.DISCORD_KNOWN_ISSUES_WEBHOOK_TOKEN;
  let { discordKnownIssuesMessageId } = emptyConfig;

  let dinoRpgUrl = env.DINORPG_URL ?? emptyConfig.dinoRpgUrl;

  for (const { key, value } of configVars) {
    const decryptedValue = key === 'CRYPTR_SECRET' ? value : cryptr.decrypt(value);
    switch (key) {
      case 'DISCORD_WEBHOOK_ID':
        rawDiscordNotifId = decryptedValue;
        break;
      case 'DISCORD_WEBHOOK_TOKEN':
        rawDiscordNotifToken = decryptedValue;
        break;
      case 'DISCORD_LOGS_WEBHOOK_ID':
        rawDiscordLogId = decryptedValue;
        break;
      case 'DISCORD_LOGS_WEBHOOK_TOKEN':
        rawDiscordLogToken = decryptedValue;
        break;
      case 'DISCORD_RANKUP_WEBHOOK_ID':
        rawDiscordRankUpId = decryptedValue;
        break;
      case 'DISCORD_RANKUP_WEBHOOK_TOKEN':
        rawDiscordRankUpToken = decryptedValue;
        break;
      case 'DISCORD_RELEASES_WEBHOOK_ID':
        rawDiscordReleasesId = decryptedValue;
        break;
      case 'DISCORD_RELEASES_WEBHOOK_TOKEN':
        rawDiscordReleasesToken = decryptedValue;
        break;
      case 'DISCORD_KNOWN_ISSUES_WEBHOOK_ID':
        rawDiscordKnownIssuesId = decryptedValue;
        break;
      case 'DISCORD_KNOWN_ISSUES_WEBHOOK_TOKEN':
        rawDiscordKnownIssuesToken = decryptedValue;
        break;
      case 'DISCORD_KNOWN_ISSUES_MESSAGE_ID':
        discordKnownIssuesMessageId = decryptedValue;
        break;
      case 'DINORPG_URL':
        dinoRpgUrl = decryptedValue;
        break;
      default:
        break;
    }
  }

  const eternaltwin: EternaltwinConfig = {
    url: eternaltwinUrl,
    clientRef: eternaltwinClientRef,
    secret: eternaltwinSecret,
    app: eternaltwinApp,
    channel: eternaltwinChannel,
  };

  let discordNotifications: DiscordConfig | null = null;
  if (typeof rawDiscordNotifId === 'string' && typeof rawDiscordNotifToken === 'string') {
    discordNotifications = {
      webhookId: rawDiscordNotifId,
      webhookToken: rawDiscordNotifToken,
    };
  }

  let discordLogs: DiscordConfig | null = null;
  if (typeof rawDiscordLogId === 'string' && typeof rawDiscordLogToken === 'string') {
    discordLogs = {
      webhookId: rawDiscordLogId,
      webhookToken: rawDiscordLogToken,
    };
  }

  let discordRankUps: DiscordConfig | null = null;
  if (typeof rawDiscordRankUpId === 'string' && typeof rawDiscordRankUpToken === 'string') {
    discordRankUps = {
      webhookId: rawDiscordRankUpId,
      webhookToken: rawDiscordRankUpToken,
    };
  }

  let discordReleases: DiscordConfig | null = null;
  if (typeof rawDiscordReleasesId === 'string' && typeof rawDiscordReleasesToken === 'string') {
    discordReleases = {
      webhookId: rawDiscordReleasesId,
      webhookToken: rawDiscordReleasesToken,
    };
  }

  let discordKnownIssues: DiscordConfig | null = null;
  if (typeof rawDiscordKnownIssuesId === 'string' && typeof rawDiscordKnownIssuesToken === 'string') {
    discordKnownIssues = {
      webhookId: rawDiscordKnownIssuesId,
      webhookToken: rawDiscordKnownIssuesToken,
    };
  }

  return {
    isProduction,
    port,
    selfUrl,
    corsRegex,
    cookieSecret,
    csrfSecret,
    eternaltwin,
    discordNotifications,
    discordLogs,
    discordRankUps,
    discordReleases,
    discordKnownIssues,
    discordKnownIssuesMessageId,
    dinoRpgUrl,
  };
}

/**
 * Load the configuration from the ambient environment.
 *
 * As part of this resolution, if a `.env` file is present in the current
 * working directory, it is loaded and applied to the process environment.
 */
export async function loadConfig(prisma?: PrismaClient): Promise<Config> {
  dotenv.config();

  return readConfig(process.env, prisma);
}
