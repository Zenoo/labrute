/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express, Request, Response } from 'express';
import path from 'path';
import Brutes from './endpoints/Brutes.js';
import OAuth from './endpoints/OAuth.js';

const initRoutes = (app: Express) => {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!',
  }));

  // Brute
  app.get('/api/brute/list', Brutes.list);
  app.get('/api/brute/:name', Brutes.get);

  // OAuth
  app.get('/api/oauth/redirect', OAuth.redirect);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
};

export default initRoutes;