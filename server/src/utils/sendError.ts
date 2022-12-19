import { Response } from 'express';
import { Client } from 'pg';

const sendError = async (res: Response, error: unknown, client?: Client) => {
  if (client) {
    await client.end();
  }
  console.error(error);
  if (error instanceof Error) {
    res.status(500).send(error.message);
  } else {
    res.status(500).send(error);
  }
};

export default sendError;