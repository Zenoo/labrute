/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express, Request, Response } from 'express';
import path from 'path';
import { Brutes } from './endpoints/Brutes';

export function initRoutes(app: Express) {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }));

  app.get('/api/brute/list', Brutes.list);
  app.get('/api/brute/:name', Brutes.get);

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}