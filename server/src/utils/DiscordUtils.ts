/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { pad } from '@labrute/core';
import { Brute, Tournament } from '@labrute/prisma';
import { EmbedBuilder, WebhookClient } from 'discord.js';
import { Response } from 'express';
import moment from 'moment';
import { Logger } from '../logger/index.js';

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
  sendTournamentNotification(tournament: Pick<Tournament, 'date'>, brutes: Brute[]): void;
  sendMessage(message: string): Promise<void>;
}

export const NOOP_DISCORD_CLIENT: DiscordClient = {
  sendError() {
  },
  sendTournamentNotification() {
  },
  sendMessage() {
    return Promise.resolve();
  },
};

export interface NetworkDiscordClientOptions {
  tournamentWebhookId: string,
  tournamentWebhookToken: string,
  logWebhookId: string,
  logWebhookToken: string,
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
  readonly #tournamentClient: WebhookClient;

  /**
   * Client used to send logs
   */
  readonly #logClient: WebhookClient;

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
    this.#tournamentClient = new WebhookClient(
      {
        id: options.tournamentWebhookId,
        token: options.tournamentWebhookToken,
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
        { name: 'Status code', value: res.statusCode.toString(), inline: true },
        // Response status message
        { name: 'Status', value: res.statusMessage, inline: true },
      );

      // Request params
      if (Object.keys(res.req.params as object).length) {
        embed.addFields({
          name: 'Params',
          value: `\`\`\`json
  ${JSON.stringify(res.req.params)}
  \`\`\``,
        });
      }

      // Request body
      if (Object.keys(res.req.body as object).length) {
        embed.addFields({
          name: 'Body',
          value: `\`\`\`json
  ${JSON.stringify(res.req.body)}
  \`\`\``,
        });
      }
    }

    this.#logClient.send({ embeds: [embed] }).catch((err) => {
      this.#logger.error(`Error trying to send a message: ${err}`);
    });
  }

  public sendTournamentNotification(tournament: Pick<Tournament, 'date'>, brutes: Brute[]) {
    const embed = new EmbedBuilder()
      .setColor(0xebad70)
      .setTitle(formatEmbedTitle('New tournament created!'))
      .setURL(`${this.#server}${brutes[0].name}/tournament/${moment.utc(tournament.date).format('YYYY-MM-DD')}`)
      .setAuthor({
        name: 'LaBrute',
        iconURL: `${this.#server}/favicon.png`,
        url: this.#server.toString(),
      })
      .setDescription('A new tournament has been created, come check it out! Here are some of the participants:')
      .setThumbnail(`${this.#server}/images/header/right/1${pad(Math.floor(Math.random() * (11 - 1 + 1) + 1), 2)}.png`)
      .addFields(
        ...[...brutes].sort((a, b) => b.level - a.level).slice(0, 24).map((brute) => ({
          name: brute.name,
          value: `Level ${brute.level}`,
          inline: true,
        })),
        { name: '...', value: '\u200B', inline: true },
      )
      .setTimestamp()
      .setFooter({
        text: 'Beep boop, I am a bot',
        iconURL: `${this.#server}/favicon.png`,
      });

    this.#tournamentClient.send({ embeds: [embed] }).catch((err) => {
      this.#logger.error(`Error trying to send a message: ${err}`);
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
}
