import { Request } from 'express';
import DB from '../db/connect.js';

export interface User {
  id: number;
  name: string;
  token: string;
}

const auth = async (request: Request) => {
  const authorization = request.headers.Authorization;

  if (!authorization) {
    throw new Error('No authorization header');
  }
  if (typeof authorization !== 'string') {
    throw new Error('Invalid authorization header');
  }

  const [username, token] = Buffer.from(authorization.split(' ')[1], 'base64')
    .toString().split(':');

  const user = await DB.query(
    'select * from users where id = $1 and token = $2',
    { params: [username, token] },
  );

  if (!user.rows || user.rows.length === 0) {
    throw new Error('Invalid user');
  }

  return user.rows[0] as User;
};

export default auth;