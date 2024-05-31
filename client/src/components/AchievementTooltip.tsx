import { AchievementData } from '@labrute/core';
import { Achievement, AchievementName } from '@labrute/prisma';
import { Tooltip, TooltipProps, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from './Text';

export interface AchievementTooltipProps extends Omit<TooltipProps, 'title'> {
  achievement?: Pick<Achievement, 'name' | 'count'>;
  name?: AchievementName;
}

export const AchievementTooltip = ({
  achievement,
  name,
  children,
  ...rest
}: AchievementTooltipProps) => {
  const { t } = useTranslation();
  const { palette: { mode } } = useTheme();

  const achievementName = achievement?.name || name || AchievementName.win;

  return (
    <Tooltip
      {...rest}
      title={(
        <>
          <Text bold h6>
            {t(`achievements.${achievementName}`)}{achievement ? ` (${achievement.count})` : ''}
          </Text>
          <Text
            sx={{
              color: `achievements.${AchievementData[achievementName].rarety}.main`,
              fontStyle: 'italic',
              textTransform: 'capitalize',
            }}
          >
            {t(AchievementData[achievementName].rarety)}
          </Text>
          <Text sx={{ fontStyle: 'italic', color: 'achievements.common.main' }}>{t(`achievements.${achievementName}.description`)}</Text>
          {AchievementData[achievementName].onePerFight && (
            <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
              {t('maxPerFight')}:{' '}
              <Text component="span" subtitle2 bold color="error">1</Text>
            </Text>
          )}
          {AchievementData[achievementName].perBrute && (
            <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
              {t('maxPerBrute')}:{' '}
              <Text component="span" subtitle2 bold color="error">{AchievementData[achievementName].perBrute}</Text>
            </Text>
          )}
        </>
      )}
      componentsProps={{
        tooltip: mode === 'dark' ? undefined : {
          sx: {
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            border: 1,
            borderColor: 'primary.main',
          }
        },
        popper: { sx: { width: 250 } },
      }}
    >
      {children}
    </Tooltip>
  );
};
