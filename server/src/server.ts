import dotenv from 'dotenv';
import express from 'express';

import bodyParser from 'body-parser';
import initRoutes from './routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.listen(port, () => {
  console.log(`App running: http://localhost:${port}/`);
});

initRoutes(app);
