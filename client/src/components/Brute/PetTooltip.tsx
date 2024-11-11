import { PERKS_TOTAL_ODDS, Pet, getPetStat } from '@labrute/core';
import { Box, Tooltip, TooltipProps, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrute } from '../../hooks/useBrute';
import StatColor from '../../utils/StatColor';
import Text from '../Text';
import { Brute } from '@labrute/prisma';

const textShadowBase = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
const textProps = {
  fontSize: 12,
  lineHeight: 1.2,
} as const;

export interface PetTooltipProps extends Omit<TooltipProps, 'title'> {
  pet?: Pet;
  brute?: Pick<Brute, 'hp' | 'strengthValue' | 'agilityValue' | 'speedValue'>;
}

const PetTooltip = ({
  pet,
  brute: specificBrute,
  children,
  ...rest
}: PetTooltipProps) => {
  const { t } = useTranslation();
  const { brute: authedBrute } = useBrute();
  const theme = useTheme();

  const textShadow = useMemo(() => (theme.palette.mode === 'dark' ? textShadowBase : undefined), [theme.palette.mode]);

  const brute = specificBrute || authedBrute;

  return (
    <Tooltip
      {...rest}
      title={(pet && brute) ? (
        <>
          <Box sx={{ textAlign: 'center', my: 0.5 }}>
            {/* NAME */}
            <Text bold h5>{t(pet.name)}</Text>
          </Box>
          {/* ODDS */}
          <Text {...textProps}>
            {t('odds')}:
            {' '}
            <Text component="span" bold sx={{ opacity: 0.7 }} {...textProps}>
              {((pet.odds / PERKS_TOTAL_ODDS) * 100).toFixed(2)}%
            </Text>
          </Text>
          {/* ENDURANCE MALUS */}
          <Text {...textProps}>
            {t('enduranceMalus')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.endurance, textShadow }} {...textProps}>
              {pet.enduranceMalus}
            </Text>
          </Text>
          {/* INITIATIVE */}
          <Text {...textProps}>
            {t('initiative')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.initiative, textShadow }} {...textProps}>
              {pet.initiative}
            </Text>
          </Text>
          {/* STRENGTH */}
          <Text {...textProps}>
            {t('strength')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.strength, textShadow }} {...textProps}>
              {getPetStat(brute, pet, 'strength')}
            </Text>
          </Text>
          {/* AGILITY */}
          <Text {...textProps}>
            {t('agility')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.agility, textShadow }} {...textProps}>
              {getPetStat(brute, pet, 'agility')}
            </Text>
          </Text>
          {/* SPEED */}
          <Text {...textProps}>
            {t('speed')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.speed, textShadow }} {...textProps}>
              {getPetStat(brute, pet, 'speed')}
            </Text>
          </Text>
          {/* HP */}
          <Text {...textProps}>
            {t('HP')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.endurance, textShadow }} {...textProps}>
              {getPetStat(brute, pet, 'hp')}
            </Text>
          </Text>
          {/* DAMAGE */}
          <Text {...textProps}>
            {t('damage')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.damage, textShadow }} {...textProps}>
              {pet.damage}
            </Text>
          </Text>
          {/* EVASION */}
          {!!pet.evasion && (
            <Text bold sx={{ color: StatColor.evasion, textShadow }} {...textProps}>
              {pet.evasion > 0 && '+'}
              {Math.round(pet.evasion * 100)}
              % {t('evasion')}
            </Text>
          )}
          {/* ACCURACY */}
          {!!pet.accuracy && (
            <Text bold sx={{ color: StatColor.accuracy, textShadow }} {...textProps}>
              {pet.accuracy > 0 && '+'}
              {Math.round(pet.accuracy * 100)}
              % {t('accuracy')}
            </Text>
          )}
          {/* DISARM */}
          {!!pet.disarm && (
            <Text bold sx={{ color: StatColor.disarm, textShadow }} {...textProps}>
              {pet.disarm > 0 && '+'}
              {Math.round(pet.disarm * 100)}
              % {t('disarm')}
            </Text>
          )}
          {/* COMBO */}
          {!!pet.combo && (
            <Text bold sx={{ color: StatColor.combo, textShadow }} {...textProps}>
              {pet.combo > 0 && '+'}
              {Math.round(pet.combo * 100)}
              % {t('combo')}
            </Text>
          )}
        </>
      ) : ''}
      componentsProps={{
        tooltip: {
          sx: {
            minHeight: 68,
          }
        },
        popper: { sx: { width: 250 } },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default PetTooltip;
