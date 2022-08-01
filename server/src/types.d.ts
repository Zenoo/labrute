declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_PORT: number;
      PORT?: string;
      SELF_URL: string;
      ETWIN_URL: string;
      ETWIN_CLIENT_SECRET: string;
    }
  }
}

export {};