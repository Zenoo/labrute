import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const DB = {
  connect: async () => {
    const client = new pg.Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT ? +process.env.DB_PORT : 9000,
    });

    await client.connect();

    return client;
  },
};

export default DB;