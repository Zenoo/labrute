import { Request } from 'express';
import { Client } from 'pg';
import {
  BodyColors, BodyParts, Gender, User,
} from '@eternaltwin/labrute-core/types';

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
  const { rows: brutes } = await client.query<{
    name: string,
    gender: Gender,
    body: BodyParts,
    colors: BodyColors
  }>(
    `SELECT
          name,
          data->'gender' as gender,
          data->'body' as body,
          data->'colors' as colors
        FROM brutes WHERE data ->> 'user' = $1`,
    [user.id],
  );

  return {
    ...user,
    brutes: brutes.map((brute) => ({
      name: brute.name,
      data: {
        gender: brute.gender,
        body: brute.body,
        colors: brute.colors,
      },
    })),
  } as User;
};

export default auth;
