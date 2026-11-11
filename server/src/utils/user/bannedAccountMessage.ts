import type { User } from '@labrute/prisma';
import { translate } from '../translate.js';

export const bannedAccountMessage = (user: Pick<User, 'id' | 'lang' | 'banReason' | 'banAppealCode'>) => {
  const code = user.banAppealCode ? `MC-${user.banAppealCode}` : `USER-${user.id}`;

  return `${translate('bannedAccount', user, {
    reason: translate(`banReason.${user.banReason || ''}`, user),
  })} ${translate('banAppealCode', user, { code })}`;
};
