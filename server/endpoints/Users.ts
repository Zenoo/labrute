import { Request, Response } from 'express';
import { User } from '../db/models/User';

export const Users = {
  list: (req: Request, res: Response) => {
    User
      .findAll({ include: [{ all: true }] }).then((users) => {
        return res.status(200).send(users);
      }).catch((error) => {
        return res.status(500).send(error);
      });
  }
};