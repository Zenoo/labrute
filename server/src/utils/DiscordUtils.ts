import { pad } from '@labrute/core';
import { Brute, Tournament } from '@labrute/prisma';
import { EmbedBuilder, WebhookClient, WebhookCreateMessageOptions } from 'discord.js';
import moment from 'moment';

const WebhookConfig = {
  id: process.env.DISCORD_WEBHOOK_ID || '',
  token: process.env.DISCORD_WEBHOOK_TOKEN || '',
};

const send = async (props: WebhookCreateMessageOptions) => {
  try {
    if (!WebhookConfig.id || process.env.NODE_ENV !== 'production') {
      return;
    }

    const webhookClient = new WebhookClient(WebhookConfig);

    await webhookClient.send(props);
  } catch (error) {
    console.error('Error trying to send a message: ', error);
  }
};

const sentTournamentNotification = async (tournament: Tournament, brutes: Brute[]) => {
  // const server = process.env.SELF_URL || ''; // Local debug
  const server = 'https://brute.eternaltwin.org';

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
      ...brutes.slice(0, 24).map((brute) => ({
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
  sentTournamentNotification,
};