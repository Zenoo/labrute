import express from 'express';
import bodyParser from 'body-parser';
import { initRoutes } from './routes';
const app = express();
const port = 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

initRoutes(app);