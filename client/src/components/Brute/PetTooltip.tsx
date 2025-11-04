import { PERKS_TOTAL_ODDS, Pet, convertEnduranceToHP, getPetScaledStat } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Box, Tooltip, TooltipProps, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import StatColor from '../../utils/StatColor';
import Text from '../Text';

const textShadowBase = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
const textProps = {
  fontSize: 12,
  lineHeight: 1.2,
} as const;

export interface PetTooltipProps extends Omit<TooltipProps, 'title'> {
  pet?: Pet;
  brute?: Pick<Brute, 'hp' | 'strengthValue' | 'agilityValue' | 'speedValue' | 'enduranceModifier'>;
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
  const { chaos } = useAuth();

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
          {/* HP MALUS */}
          <Text {...textProps}>
            {t('hpMalus')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.endurance, textShadow }} {...textProps}>
              {convertEnduranceToHP(brute, getPetScaledStat(chaos, brute, pet, 'enduranceMalus'))}
            </Text>
          </Text>
          {/* INITIATIVE */}
          <Text {...textProps}>
            {t('initiative')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.initiative, textShadow }} {...textProps}>
              {getPetScaledStat(chaos, brute, pet, 'initiative', 2)}
            </Text>
          </Text>
          {/* STRENGTH */}
          <Text {...textProps}>
            {t('strength')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.strength, textShadow }} {...textProps}>
              {getPetScaledStat(chaos, brute, pet, 'strength')}
            </Text>
          </Text>
          {/* AGILITY */}
          <Text {...textProps}>
            {t('agility')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.agility, textShadow }} {...textProps}>
              {getPetScaledStat(chaos, brute, pet, 'agility')}
            </Text>
          </Text>
          {/* SPEED */}
          <Text {...textProps}>
            {t('speed')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.speed, textShadow }} {...textProps}>
              {getPetScaledStat(chaos, brute, pet, 'speed')}
            </Text>
          </Text>
          {/* HP */}
          <Text {...textProps}>
            {t('HP')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.endurance, textShadow }} {...textProps}>
              {getPetScaledStat(chaos, brute, pet, 'hp')}
            </Text>
          </Text>
          {/* DAMAGE */}
          <Text {...textProps}>
            {t('damage')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.damage, textShadow }} {...textProps}>
              {getPetScaledStat(chaos, brute, pet, 'damage')}
            </Text>
          </Text>
          {/* EVASION */}
          {!!pet.evasion && (
            <Text bold sx={{ color: StatColor.evasion, textShadow }} {...textProps}>
              {pet.evasion > 0 && '+'}
              {Math.round(getPetScaledStat(chaos, brute, pet, 'evasion', 2) * 100)}
              % {t('evasion')}
            </Text>
          )}
          {/* ACCURACY */}
          {!!pet.accuracy && (
            <Text bold sx={{ color: StatColor.accuracy, textShadow }} {...textProps}>
              {pet.accuracy > 0 && '+'}
              {Math.round(getPetScaledStat(chaos, brute, pet, 'accuracy', 2) * 100)}
              % {t('accuracy')}
            </Text>
          )}
          {/* DISARM */}
          {!!pet.disarm && (
            <Text bold sx={{ color: StatColor.disarm, textShadow }} {...textProps}>
              {pet.disarm > 0 && '+'}
              {Math.round(getPetScaledStat(chaos, brute, pet, 'disarm', 2) * 100)}
              % {t('disarm')}
            </Text>
          )}
          {/* BLOCK */}
          {!!pet.block && (
            <Text bold sx={{ color: StatColor.block, textShadow }} {...textProps}>
              {pet.block > 0 && '+'}
              {Math.round(getPetScaledStat(chaos, brute, pet, 'block', 2) * 100)}
              % {t('block')}
            </Text>
          )}
          {/* COMBO */}
          {!!pet.combo && (
            <Text bold sx={{ color: StatColor.combo, textShadow }} {...textProps}>
              {pet.combo > 0 && '+'}
              {Math.round(getPetScaledStat(chaos, brute, pet, 'combo', 2) * 100)}
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
