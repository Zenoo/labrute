import { User } from '@labrute/prisma';
import { t } from 'i18next';

export const translate = (
  key: string,
  user?: Pick<User, 'lang'> | null,
  options?: Record<string, unknown>,
) => t(key, { lng: user?.lang, ...options });
