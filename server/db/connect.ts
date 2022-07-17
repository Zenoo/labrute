import { Connection } from 'postgresql-client';

const DB = new Connection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? +process.env.DB_PORT : 9000,
});

export default DB;