import { Sequelize } from 'sequelize';
import config from '../config/config.json';


const dbConfig = process.env.NODE_ENV === 'development' ? config.development : process.env.NODE_ENV === 'production' ? config.production : config.test;

const sequelize = new Sequelize(`postgres://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

export default sequelize;