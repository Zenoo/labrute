import * as dotenv from 'dotenv';

dotenv.config();

const Env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 9000,
  SELF_URL: process.env.SELF_URL || '',
  DISCORD_WEBHOOK_ID: process.env.DISCORD_WEBHOOK_ID || '',
  DISCORD_WEBHOOK_TOKEN: process.env.DISCORD_WEBHOOK_TOKEN || '',
  ETWIN_URL: process.env.ETWIN_URL || '',
  ETWIN_CLIENT_ID: process.env.ETWIN_CLIENT_ID || '',
  ETWIN_CLIENT_SECRET: process.env.ETWIN_CLIENT_SECRET || '',
  MAIL_HOST: process.env.MAIL_HOST || '',
  MAIL_PORT: process.env.MAIL_PORT || '465',
  MAIL_SECURE: process.env.MAIL_SECURE || '',
  MAIL_USER: process.env.MAIL_USER || '',
  MAIL_PASSWORD: process.env.MAIL_PASSWORD || '',
  DISCORD_LOGS_WEBHOOK_ID: process.env.DISCORD_LOGS_WEBHOOK_ID || '',
  DISCORD_LOGS_WEBHOOK_TOKEN: process.env.DISCORD_LOGS_WEBHOOK_TOKEN || '',
};

export default Env;