declare namespace Express {
  interface Request {
    security?: {
      fingerprint?: string;
      browserId?: string;
      validHeaders?: boolean;
    };
  }
}
