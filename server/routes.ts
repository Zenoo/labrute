import { Express, Request, Response } from 'express';
import path from 'path';
import { Users } from './endpoints/Users';

export function initRoutes(app: Express) {
  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }));

  app.get('/api/user/list', Users.list);

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}