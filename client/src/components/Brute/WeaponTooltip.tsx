import { BARE_HANDS_DAMAGE, BASE_FIGHTER_STATS, PERKS_TOTAL_ODDS, Weapon, WeaponTypeColor } from '@labrute/core';
import { Box, Tooltip, TooltipProps } from '@mui/material';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../Text';
import StatColor from '../../utils/StatColor';

const textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';

export interface WeaponTooltipProps extends Omit<TooltipProps, 'title'> {
  weapon?: Weapon;
  bareHands?: boolean;
}

const WeaponTooltip = ({
  weapon,
  bareHands,
  children,
  ...rest
}: WeaponTooltipProps) => {
  const { t } = useTranslation();
  return (
    <Tooltip
      {...rest}
      title={(weapon || bareHands) ? (
        <>
          <Box sx={{ textAlign: 'center', my: 0.5 }}>
            {/* NAME */}
            <Text typo="Blocky" sx={{ fontSize: 13 }}>{t(weapon ? weapon.name : 'bareHands')}</Text>
            {/* ILLUSTRATION */}
            {weapon && (
              <Box
                component="img"
                src={`/images/weapons/${weapon.name}.png`}
                sx={{ display: 'inline-block', filter: 'drop-shadow(2px 2px 2px #000)' }}
              />
            )}
          </Box>
          {/* TYPES */}
          {weapon && (
            <Text typo="Blocky">
              {t('types')}:
              {' '}
              {weapon.types.map((type, index) => (
                <Fragment key={type}>
                  <Box
                    component="span"
                    sx={{
                      color: WeaponTypeColor[type],
                      textTransform: 'capitalize',
                      textShadow,
                    }}
                  >
                    {t(type)}
                  </Box>
                  {index < weapon.types.length - 1 && ', '}
                </Fragment>
              ))}
            </Text>
          )}
          {/* ODDS */}
          {weapon && (
            <Text typo="Blocky">
              {t('odds')}:
              {' '}
              <Box component="span" sx={{ opacity: 0.7 }}>
                {((weapon.odds / PERKS_TOTAL_ODDS) * 100).toFixed(2)}%
              </Box>
            </Text>
          )}
          {/* INTERVAL */}
          <Text typo="Blocky">
            {t('interval')}:
            {' '}
            <Box component="span" sx={{ opacity: 0.7 }}>
              {Math.round((weapon ? weapon.tempo : BASE_FIGHTER_STATS.tempo) * 100)}
            </Box>
          </Text>
          {/* DAMAGE */}
          <Text typo="Blocky">
            {t('damage')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.damage, textShadow }}>
              {weapon ? weapon.damage : BARE_HANDS_DAMAGE}
            </Box>
          </Text>
          {/* DRAW CHANCE */}
          {weapon && (
            <Text typo="Blocky">
              {t('drawChance')}:
              {' '}
              <Box component="span" sx={{ opacity: 0.7 }}>
                {weapon.toss}
              </Box>
            </Text>
          )}
          {/* REACH */}
          {weapon && (
            <Text typo="Blocky">
              {t('reach')}:
              {' '}
              <Box component="span" sx={{ opacity: 0.7 }}>
                {weapon.reach}
              </Box>
            </Text>
          )}
          {/* REVERSAL */}
          {(!!weapon?.reversal || (bareHands && !!BASE_FIGHTER_STATS.reversal)) && (
            <Text typo="Blocky" sx={{ color: StatColor.reversal, textShadow }}>
              {(weapon ? weapon.reversal : BASE_FIGHTER_STATS.reversal) > 0 && '+'}
              {Math.round((weapon ? weapon.reversal : BASE_FIGHTER_STATS.reversal) * 100)}
              % {t('reversal')}
            </Text>
          )}
          {/* EVASION */}
          {(!!weapon?.evasion || (bareHands && !!BASE_FIGHTER_STATS.evasion)) && (
            <Text typo="Blocky" sx={{ color: StatColor.evasion, textShadow }}>
              {(weapon ? weapon.evasion : BASE_FIGHTER_STATS.evasion) > 0 && '+'}
              {Math.round((weapon ? weapon.evasion : BASE_FIGHTER_STATS.evasion) * 100)}
              % {t('evasion')}
            </Text>
          )}
          {/* SWIFTNESS */}
          {(!!weapon?.swiftness || (bareHands && !!BASE_FIGHTER_STATS.swiftness)) && (
            <Text typo="Blocky" sx={{ color: StatColor.swiftness, textShadow }}>
              {(weapon ? weapon.swiftness : BASE_FIGHTER_STATS.swiftness) > 0 && '+'}
              {Math.round((weapon ? weapon.swiftness : BASE_FIGHTER_STATS.swiftness) * 100)}
              % {t('swiftness')}
            </Text>
          )}
          {/* BLOCK */}
          {(!!weapon?.block || (bareHands && !!BASE_FIGHTER_STATS.block)) && (
            <Text typo="Blocky" sx={{ color: StatColor.block, textShadow }}>
              {(weapon ? weapon.block : BASE_FIGHTER_STATS.block) > 0 && '+'}
              {Math.round((weapon ? weapon.block : BASE_FIGHTER_STATS.block) * 100)}
              % {t('block')}
            </Text>
          )}
          {/* ACCURACY */}
          {(!!weapon?.accuracy || (bareHands && !!BASE_FIGHTER_STATS.accuracy)) && (
            <Text typo="Blocky" sx={{ color: StatColor.accuracy, textShadow }}>
              {(weapon ? weapon.accuracy : BASE_FIGHTER_STATS.accuracy) > 0 && '+'}
              {Math.round((weapon ? weapon.accuracy : BASE_FIGHTER_STATS.accuracy) * 100)}
              % {t('accuracy')}
            </Text>
          )}
          {/* DISARM */}
          {(!!weapon?.disarm || (bareHands && !!BASE_FIGHTER_STATS.disarm)) && (
            <Text typo="Blocky" sx={{ color: StatColor.disarm, textShadow }}>
              {(weapon ? weapon.disarm : BASE_FIGHTER_STATS.disarm) > 0 && '+'}
              {Math.round((weapon ? weapon.disarm : BASE_FIGHTER_STATS.disarm) * 100)}
              % {t('disarm')}
            </Text>
          )}
          {/* COMBO */}
          {(!!weapon?.combo || (bareHands && !!BASE_FIGHTER_STATS.combo)) && (
            <Text typo="Blocky" sx={{ color: StatColor.combo, textShadow }}>
              {(weapon ? weapon.combo : BASE_FIGHTER_STATS.combo) > 0 && '+'}
              {Math.round((weapon ? weapon.combo : BASE_FIGHTER_STATS.combo) * 100)}
              % {t('combo')}
            </Text>
          )}
        </>
      ) : ''}
      componentsProps={{
        tooltip: {
          sx: {
            minHeight: 68,
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            border: 2,
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

export default WeaponTooltip;