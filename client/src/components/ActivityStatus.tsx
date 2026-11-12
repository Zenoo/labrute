import { User } from '@labrute/prisma';
import { Circle } from '@mui/icons-material';
import { SvgIconOwnProps, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = SvgIconOwnProps & {
  user: Pick<User, 'lastSeen'>;
};

export const ActivityStatus = ({
  user,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const lastSeen = dayjs.utc(user.lastSeen);
  const now = dayjs.utc();

  const daysSinceLastSeen = lastSeen.diff(now, 'days');
  let activityColor: SvgIconOwnProps['color'] = 'error';

  if (daysSinceLastSeen > -3) {
    activityColor = 'success';
  } else if (daysSinceLastSeen > -7) {
    activityColor = 'warning';
  }

  return (
    <Tooltip title={t('lastSeen', { date: lastSeen.fromNow() })}>
      <Circle
        color={activityColor}
        {...rest}
      />
    </Tooltip>
  );
};
