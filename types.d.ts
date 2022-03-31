declare module "./server/db/config/config.json" {
  type Config = {
    user: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: string;
  };
  type ConfigHolder = {
    development: Config,
    production: Config
    test: Config
  };

  const config:ConfigHolder;
  export = config;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_PORT: number;
    }
  }
}

export {};