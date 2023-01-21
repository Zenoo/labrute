import express from 'express';

import bodyParser from 'body-parser';
import { PrismaClient } from '@labrute/prisma';
import path from 'path';
import initRoutes from './routes';
import './i18n';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// Get client build
const CLIENT_BUILD = path.join(__dirname, '..', '..', 'client', 'build');
app.use(express.static(CLIENT_BUILD));

app.listen(port, () => {
  console.warn(`App running: http://localhost:${port}/`);
});

initRoutes(app, prisma);
