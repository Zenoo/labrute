import { Request, Response } from 'express';
import { Brute } from '../db/models/Brute';

export const Users = {
  list: (req: Request, res: Response) => {
    Brute
      .findAll({ include: [{ all: true }] }).then((brutes) => {
        return res.status(200).send(brutes);
      }).catch((error) => {
        return res.status(500).send(error);
      });
  },
  get: (req: Request, res: Response) => {
    Brute
      .findOne({ where: { name: req.params.name } }).then((brute) => {
        return res.status(200).send(brute);
      }).catch((error) => {
        return res.status(500).send(error);
      });
  }
};