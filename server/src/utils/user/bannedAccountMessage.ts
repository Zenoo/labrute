import type { User } from '@labrute/prisma';
import { formatAppealCode } from '@labrute/core';
import { translate } from '../translate.js';

export const bannedAccountMessage = (user: Pick<User,
  'id' | 'lang' | 'banReason' | 'banAppealCode' | 'appealReference'
>) => {
  const code = formatAppealCode(user.id, user.banAppealCode, user.appealReference);

  return `${translate('bannedAccount', user, {
    reason: translate(`banReason.${user.banReason || ''}`, user),
  })} ${translate('banAppealCode', user, {
    code,
    // References contain only safe code characters; keep legacy composite codes copyable as text.
    interpolation: { escapeValue: false },
  })}`;
};
