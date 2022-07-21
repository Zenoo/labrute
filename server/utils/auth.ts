import { Request } from 'express';
import { Client } from 'pg';

export interface User {
  id: number;
  name: string;
  token: string;
}

const auth = async (client: Client, request: Request) => {
  const { headers: { authorization } } = request;

  if (!authorization) {
    throw new Error('No authorization header');
  }
  if (typeof authorization !== 'string') {
    throw new Error('Invalid authorization header');
  }

  const [username, token] = Buffer.from(authorization.split(' ')[1], 'base64')
    .toString().split(':');

  const user = await client.query(
    'select id, token, name from users where id = $1 and token = $2::text',
    [username, token],
  );

  if (!user.rows || user.rows.length === 0) {
    throw new Error('Invalid user');
  }

  return user.rows[0] as User;
};

export default auth;