import { PrismaClient } from '@labrute/prisma';
import { Request } from 'express';

const auth = async (prisma: PrismaClient, request: Request) => {
  const { headers: { authorization } } = request;

  if (!authorization) {
    throw new Error('No authorization header');
  }
  if (typeof authorization !== 'string') {
    throw new Error('Invalid authorization header');
  }

  const [id, token] = Buffer.from(authorization.split(' ')[1], 'base64')
    .toString().split(':');

  const user = await prisma.user.findFirstOrThrow({
    where: {
      id,
      connexionToken: token,
    },
    include: {
      brutes: {
        include: {
          body: true,
          colors: true,
        },
      },
    },
  });

  return user;
};

export default auth;
