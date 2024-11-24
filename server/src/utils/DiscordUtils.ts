/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Brute, FightModifier } from '@labrute/prisma';
import { EmbedBuilder, WebhookClient } from 'discord.js';
import type { Response } from 'express';
import { pad, Release } from '@labrute/core';
import { Logger } from '../logger/index.js';
import translate from './translate.js';

const DEFAULT_TIMEOUT = 5000;
// Maximum accepted length for the embed title
const MAX_EMBED_TITLE_LENGTH = 256;
// Maximum accepted length for the main message content
export const MAX_CONTENT_LENGTH = 2000;
// Ellipsis character, used to indicate truncated content
const ELLIPSIS = '…';
const SEND_MESSAGE_PREFIX = '```\n';
const SEND_MESSAGE_SUFFIX = '\n```';
const SEND_MESSAGE_SUFFIX_TRUNCATED = `\n${ELLIPSIS}\n\`\`\``;
// Maximum length of a `sendMessage` input to avoid truncation
export const SEND_MESSAGE_SAFE_LENGTH = MAX_CONTENT_LENGTH
  - SEND_MESSAGE_PREFIX.length
  - SEND_MESSAGE_SUFFIX.length;

/**
 * Format the provided string as an embed title.
 *
 * If the string is too long, it will be truncated to fit.
 */
function formatEmbedTitle(title: string) {
  if (title.length <= MAX_EMBED_TITLE_LENGTH) {
    return title;
  }
  const shortTitle = title.substring(0, MAX_EMBED_TITLE_LENGTH - ELLIPSIS.length);
  return shortTitle + ELLIPSIS;
}

export interface DiscordClient {
  sendError(error: Error, res?: Response): void;
  sendRankUpNotification(brute: Pick<Brute, 'name' | 'level' | 'ranking'>): void;
  sendAscendNotification(brute: Pick<Brute, 'name'>, ascensions: number): void;
  sendModifiersNotification(modifiers: FightModifier[]): void;
  sendRelease(release: Release): Promise<void>;
  sendMessage(message: string): Promise<void>;
  updateKnownIssues(issues: string[]): Promise<void>;
}

export const NOOP_DISCORD_CLIENT: DiscordClient = {
  sendError(error) {
    console.error(error);
  },
  sendRankUpNotification(brute) {
    // eslint-disable-next-line no-console
    console.log(`Rank up: ${brute.name} is now ${brute.ranking} at level ${brute.level}`);
  },
  sendAscendNotification(brute, ascensions) {
    // eslint-disable-next-line no-console
    console.log(`Rank up: ${brute.name} has now ascended ${ascensions} times`);
  },
  sendModifiersNotification(modifiers) {
    // eslint-disable-next-line no-console
    console.log(`Modifiers: ${modifiers.join(', ')}`);
  },
  sendRelease(release) {
    // eslint-disable-next-line no-console
    console.log(`Release: ${release.version}`);
    return Promise.resolve();
  },
  sendMessage(message) {
    // eslint-disable-next-line no-console
    console.log(message);
    return Promise.resolve();
  },
  updateKnownIssues() {
    return Promise.resolve();
  },
};

export interface NetworkDiscordClientOptions {
  notificationWebhookId: string,
  notificationWebhookToken: string,
  logWebhookId: string,
  logWebhookToken: string,
  rankUpWebhookId: string,
  rankUpWebhookToken: string,
  releaseWebhookId: string,
  releaseWebhookToken: string,
  knownIssuesWebhookId: string,
  knownIssuesWebhookToken: string,
  timeout?: number
  logger: Logger,
  server: URL,
}

export class NetworkDiscordClient implements DiscordClient {
  readonly #logger: Logger;

  readonly #server: URL;

  /**
   * Client used to send tournament notifications
   */
  readonly #notificationClient: WebhookClient;

  /**
   * Client used to send logs
   */
  readonly #logClient: WebhookClient;

  /**
   * Client used to send rank up notifications
   */
  readonly #rankUpClient: WebhookClient;

  /**
   * Client used to send release notifications
   */
  readonly #releaseClient: WebhookClient;

  /**
   * Client used to manage known issues
   */
  readonly #knownIssuesClient: WebhookClient;

  /**
   * Create a new Discord client
   *
   * If the config is `null`, methods will be no-ops.
   */
  public constructor(options: NetworkDiscordClientOptions) {
    const clientOptions = {
      rest: {
        timeout: options.timeout ?? DEFAULT_TIMEOUT,
      },
    };
    this.#notificationClient = new WebhookClient(
      {
        id: options.notificationWebhookId,
        token: options.notificationWebhookToken,
      },
      clientOptions,
    );
    this.#logClient = new WebhookClient(
      {
        id: options.logWebhookId,
        token: options.logWebhookToken,
      },
      clientOptions,
    );
    this.#rankUpClient = new WebhookClient(
      {
        id: options.rankUpWebhookId,
        token: options.rankUpWebhookToken,
      },
      clientOptions,
    );
    this.#releaseClient = new WebhookClient(
      {
        id: options.releaseWebhookId,
        token: options.releaseWebhookToken,
      },
      clientOptions,
    );
    this.#knownIssuesClient = new WebhookClient(
      {
        id: options.knownIssuesWebhookId,
        token: options.knownIssuesWebhookToken,
      },
      clientOptions,
    );
    this.#logger = options.logger;
    this.#server = options.server;
  }

  public sendError(error: Error, res?: Response) {
    const embed = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle(formatEmbedTitle(res ? res.req.url : error.message))
      .setAuthor({
        name: 'LaBrute',
        iconURL: `${this.#server}favicon.png`,
      })
      .setDescription(`\`\`\`
${error.stack}
\`\`\``)
      .setTimestamp();

    if (res) {
      embed.addFields(
        // Request method
        { name: 'Method', value: res.req.method, inline: true },
        // Response status code
        { name: 'Status code', value: (res.statusCode || 0).toString(), inline: true },
        // Response status message
        { name: 'Status', value: res.statusMessage || '', inline: true },
      );

      // Request params
      if (Object.keys(res.req.params as object).length) {
        embed.addFields({
          name: 'Params',
          value: `\`\`\`json
  ${JSON.stringify(res.req.params)}
  \`\`\``.substring(0, 1024),
        });
      }

      // Request body
      if (Object.keys(res.req.body as object).length) {
        embed.addFields({
          name: 'Body',
          value: `\`\`\`json
  ${JSON.stringify(res.req.body)}
  \`\`\``.substring(0, 1024),
        });
      }
    }

    this.#logClient.send({ embeds: [embed] }).catch((err) => {
      this.#logger.error(`Error trying to send a message: ${err}`);
    });
  }

  public sendRankUpNotification(brute: Pick<Brute, 'name' | 'level' | 'ranking'>) {
    const embed = new EmbedBuilder()
      .setColor(0xebad70)
      .setTitle(formatEmbedTitle(`${brute.name} ranked up to ${translate(`rank.${brute.ranking}`)} at level ${brute.level}`))
      .setURL(`${this.#server}${brute.name}/cell`)
      .setAuthor({
        name: 'LaBrute',
        iconURL: `${this.#server}/favicon.png`,
        url: `${this.#server}${brute.name}/ranking`,
      })
      .setThumbnail(`${this.#server}/images/rankings/lvl_${brute.ranking}.webp`)
      .setTimestamp();

    this.#rankUpClient.send({ embeds: [embed] }).catch((err) => {
      this.#logger.error(`Error trying to send a message: ${err}`);
    });
  }

  public sendAscendNotification(brute: Pick<Brute, 'name'>, ascensions: number) {
    const embed = new EmbedBuilder()
      .setColor(0xeb8770)
      .setTitle(formatEmbedTitle(ascensions === 1 ? `${brute.name} has ascended` : `${brute.name} has now ascended ${ascensions} times`))
      .setURL(`${this.#server}${brute.name}/cell`)
      .setAuthor({
        name: 'LaBrute',
        iconURL: `${this.#server}/favicon.png`,
        url: `${this.#server}${brute.name}/ranking`,
      })
      .setThumbnail(`${this.#server}/images/ear.gif`)
      .setTimestamp();

    this.#rankUpClient.send({ embeds: [embed] }).catch((err) => {
      this.#logger.error(`Error trying to send a message: ${err}`);
    });
  }

  public sendModifiersNotification(modifiers: FightModifier[]) {
    const embed = new EmbedBuilder()
      .setColor(0xebad70)
      .setTitle(formatEmbedTitle('Today is special !'))
      .setURL(this.#server.toString())
      .setAuthor({
        name: 'LaBrute',
        iconURL: `${this.#server}/favicon.png`,
        url: this.#server.toString(),
      })
      .setDescription('Lucky (or unlucky) you! Today is a special day, the following modifiers will be active:')
      .setThumbnail(`${this.#server}/images/header/right/1${pad(Math.floor(Math.random() * (11 - 1 + 1) + 1), 2)}.png`)
      .addFields(
        modifiers.map((modifier) => ({
          name: translate(`modifier.${modifier}`),
          value: translate(`modifier.${modifier}.desc`),
        })),
      )
      .setTimestamp();

    this.#notificationClient.send({ embeds: [embed] }).catch((err) => {
      this.#logger.error(`Error trying to send a message: ${err}`);
    });
  }

  public async sendRelease(release: Release) {
    await this.#releaseClient.send({
      content: `<@&1086045548177530920>
:flag_gb: **MyBrute v${release.version}**
${release.features.length ? `**Features:**
${release.features.map((feature) => `- ${feature}`).join('\n')}
` : ''}
${release.fixes.length ? `**Fixes:**
${release.fixes.map((fix) => `- ${fix}`).join('\n')}
` : ''}`,
      files: release.attachments?.map((attachment) => ({
        attachment: `${this.#server}/images/releases/${attachment}`,
      })),
    });
  }

  public async sendMessage(message: string) {
    let content = SEND_MESSAGE_PREFIX + message + SEND_MESSAGE_SUFFIX;
    if (content.length > MAX_CONTENT_LENGTH) {
      const shortLen = MAX_CONTENT_LENGTH
        - SEND_MESSAGE_PREFIX.length
        - SEND_MESSAGE_SUFFIX_TRUNCATED.length;
      const short = message.substring(0, shortLen);
      content = SEND_MESSAGE_PREFIX + short + SEND_MESSAGE_SUFFIX_TRUNCATED;
    }
    await this.#logClient.send({ content });
  }

  public async updateKnownIssues(issues: string[]) {
    const embed = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle('Known Issues')
      .setDescription(issues.length ? issues.map((issue) => `• ${issue}`).join('\n') : 'No known issues')
      .setTimestamp();

    // Fetch the known issues message
    try {
      const message = await this.#knownIssuesClient.fetchMessage('1310056621774471241');

      // Update existing message
      await this.#knownIssuesClient.editMessage(message.id, { embeds: [embed] });
    } catch (_error) {
      // No message exists, create new one
      await this.#knownIssuesClient.send({ embeds: [embed] });
    }
  }
}
