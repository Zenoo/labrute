import { env } from 'process';

const URLHelper = {
  etwin: env.NODE_ENV === 'production'
    ? 'https://eternal-twin.net'
    : 'http://localhost:50320',
  self: env.NODE_ENV === 'production'
    ? 'https://labrute.eternal-twin.net'
    : 'http://localhost:3000',
};

export default URLHelper;
