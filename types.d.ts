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