import { Request } from 'express';
import { Client } from 'pg';
import { Gender, User } from '../types/types.js';

const auth = async (client: Client, request: Request) => {
  const { headers: { authorization } } = request;

  if (!authorization) {
    throw new Error('No authorization header');
  }
  if (typeof authorization !== 'string') {
    throw new Error('Invalid authorization header');
  }

  const [id, token] = Buffer.from(authorization.split(' ')[1], 'base64')
    .toString().split(':');

  const userQuery = await client.query<User>(
    'select * from users where id = $1 and token = $2::text',
    [id, token],
  );

  if (!userQuery.rows || userQuery.rows.length === 0) {
    throw new Error('Invalid user');
  }

  const user = userQuery.rows[0];

  // Fetch brutes for user
  const brutes = await client.query<{ id: number, name: string, gender: Gender }>(
    `SELECT
          id,
          data->>'name' as name,
          data->>'gender' as gender
        FROM brutes WHERE data ->> 'user' = $1`,
    [user.id],
  );

  return {
    ...user,
    brutes: brutes.rows.map((brute) => ({
      id: brute.id,
      data: {
        name: brute.name,
        gender: brute.gender,
      },
    })),
  } as User;
};

export default auth;