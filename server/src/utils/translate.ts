import { User } from '@labrute/prisma';
import { t } from 'i18next';

const translate = (
  key: string,
  user?: User,
  options?: Record<string, unknown>,
) => t(key, { lng: user?.lang, ...options });

export default translate;