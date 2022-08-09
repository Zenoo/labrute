import { Response } from 'express';

const sendError = (res: Response, error: unknown) => {
  console.error(error);
  if (error instanceof Error) {
    res.status(500).send(error.message);
  } else {
    res.status(500).send(error);
  }
};

export default sendError;