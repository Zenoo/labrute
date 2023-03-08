/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { pad } from '@labrute/core';
import { Brute, Tournament } from '@labrute/prisma';
import { EmbedBuilder, WebhookClient, WebhookCreateMessageOptions } from 'discord.js';
import { Response } from 'express';
import moment from 'moment';
import Env from './Env.js';

// const server = Env.SELF_URL; // Local debug
const server = 'https://brute.eternaltwin.org';

const send = async (props: WebhookCreateMessageOptions) => {
  try {
    if (!Env.DISCORD_WEBHOOK_ID) {
      return;
    }

    const webhookClient = new WebhookClient({
      id: Env.DISCORD_WEBHOOK_ID,
      token: Env.DISCORD_WEBHOOK_TOKEN,
    });

    await webhookClient.send(props);
  } catch (error) {
    console.error('Error trying to send a message: ', error);
  }
};

const sendLog = async (error: unknown, res?: Response) => {
  try {
    if (!Env.DISCORD_LOGS_WEBHOOK_ID) {
      return;
    }

    const webhookClient = new WebhookClient({
      id: Env.DISCORD_LOGS_WEBHOOK_ID,
      token: Env.DISCORD_LOGS_WEBHOOK_TOKEN,
    });

    const embed = new EmbedBuilder()
      .setColor(0xff0000)
      .setTitle(res ? res.req.url : '')
      .setAuthor({
        name: 'LaBrute',
        iconURL: `${server}/favicon.png`,
      })
      .setDescription(`\`\`\`
${error}
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

    await webhookClient.send({ embeds: [embed] });
  } catch (err) {
    console.error('Error trying to send a message: ', err);
  }
};

const sendSimpleMessage = async (message: string) => {
  try {
    if (!Env.DISCORD_LOGS_WEBHOOK_ID) {
      // eslint-disable-next-line no-console
      console.log(message);
      return;
    }

    const webhookClient = new WebhookClient({
      id: Env.DISCORD_LOGS_WEBHOOK_ID,
      token: Env.DISCORD_LOGS_WEBHOOK_TOKEN,
    });

    await webhookClient.send(message);
  } catch (error) {
    console.error('Error trying to send a message: ', error);
  }
};

const sendTournamentNotification = async (tournament: Tournament, brutes: Brute[]) => {
  const embed = new EmbedBuilder()
    .setColor(0xebad70)
    .setTitle('New tournament created!')
    .setURL(`${server}/${brutes[0].name}/tournament/${moment.utc(tournament.date).format('YYYY-MM-DD')}`)
    .setAuthor({
      name: 'LaBrute',
      iconURL: `${server}/favicon.png`,
      url: server,
    })
    .setDescription('A new tournament has been created, come check it out! Here are some of the participants:')
    .setThumbnail(`${server}/images/header/right/1${pad(Math.floor(Math.random() * (11 - 1 + 1) + 1), 2)}.png`)
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
      iconURL: `${server}/favicon.png`,
    });

  await send({ embeds: [embed] });
};

export default {
  send,
  sendLog,
  sendSimpleMessage,
  sendTournamentNotification,
};