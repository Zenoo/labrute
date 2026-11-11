import { isUuid } from '@labrute/core';
import type { Request } from 'express';

export const getBrowserId = (request: Pick<Request, 'signedCookies'>) => {
  const browserId: unknown = request.signedCookies?.browserId;

  return typeof browserId === 'string' && browserId.length === 36 && isUuid(browserId)
    ? browserId : undefined;
};
