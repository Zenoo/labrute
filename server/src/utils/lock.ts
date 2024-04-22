import { ExpectedError } from '@labrute/core';
import { User } from '@labrute/prisma';
import translate from './translate.js';

interface Lock {
  userId: string;
  timer: NodeJS.Timeout;
}

let locked: Lock[] = [];

export const unlock = (user: User) => {
  const existingLock = locked.find((l) => l.userId === user.id);
  if (existingLock) {
    clearTimeout(existingLock.timer);
    locked = locked.filter((l) => l.userId !== user.id);
  }
};

export const lock = (user: User) => {
  if (locked.some((l) => l.userId === user.id)) throw new ExpectedError(translate('slowDown', user));
  const timeout = setInterval(() => {
    unlock(user);
  }, 5000);
  const newLock: Lock = {
    timer: timeout,
    userId: user.id,
  };
  locked.push(newLock);
};