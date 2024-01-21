import { PETS_TOTAL_ODDS, Pet, getPetStat } from '@labrute/core';
import { Box, Tooltip, TooltipProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useBrute } from '../../hooks/useBrute';
import StatColor from '../../utils/StatColor';
import Text from '../Text';

const textShadow = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';

export interface PetTooltipProps extends Omit<TooltipProps, 'title'> {
  pet?: Pet;
}

const PetTooltip = ({
  pet,
  children,
  ...rest
}: PetTooltipProps) => {
  const { t } = useTranslation();
  const { brute } = useBrute();

  return (
    <Tooltip
      {...rest}
      title={(pet && brute) ? (
        <>
          <Box sx={{ textAlign: 'center', my: 0.5 }}>
            {/* NAME */}
            <Text typo="Blocky" sx={{ fontSize: 13 }}>{t(pet.name)}</Text>
          </Box>
          {/* ODDS */}
          <Text typo="Blocky">
            {t('odds')}:
            {' '}
            <Box component="span" sx={{ opacity: 0.7 }}>
              {((pet.odds / PETS_TOTAL_ODDS) * 100).toFixed(2)}%
            </Box>
          </Text>
          {/* ENDURANCE MALUS */}
          <Text typo="Blocky">
            {t('enduranceMalus')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.endurance, textShadow }}>
              {pet.enduranceMalus}
            </Box>
          </Text>
          {/* INITIATIVE */}
          <Text typo="Blocky">
            {t('initiative')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.initiative, textShadow }}>
              {pet.initiative}
            </Box>
          </Text>
          {/* STRENGTH */}
          <Text typo="Blocky">
            {t('strength')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.strength, textShadow }}>
              {getPetStat(brute, pet, 'strength')}
            </Box>
          </Text>
          {/* AGILITY */}
          <Text typo="Blocky">
            {t('agility')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.agility, textShadow }}>
              {getPetStat(brute, pet, 'agility')}
            </Box>
          </Text>
          {/* SPEED */}
          <Text typo="Blocky">
            {t('speed')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.speed, textShadow }}>
              {getPetStat(brute, pet, 'speed')}
            </Box>
          </Text>
          {/* HP */}
          <Text typo="Blocky">
            {t('HP')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.endurance, textShadow }}>
              {getPetStat(brute, pet, 'hp')}
            </Box>
          </Text>
          {/* DAMAGE */}
          <Text typo="Blocky">
            {t('damage')}:
            {' '}
            <Box component="span" sx={{ color: StatColor.damage, textShadow }}>
              {pet.damage}
            </Box>
          </Text>
          {/* EVASION */}
          {!!pet.evasion && (
            <Text typo="Blocky" sx={{ color: StatColor.evasion, textShadow }}>
              {pet.evasion > 0 && '+'}
              {Math.round(pet.evasion * 100)}
              % {t('evasion')}
            </Text>
          )}
          {/* ACCURACY */}
          {!!pet.accuracy && (
            <Text typo="Blocky" sx={{ color: StatColor.accuracy, textShadow }}>
              {pet.accuracy > 0 && '+'}
              {Math.round(pet.accuracy * 100)}
              % {t('accuracy')}
            </Text>
          )}
          {/* DISARM */}
          {!!pet.disarm && (
            <Text typo="Blocky" sx={{ color: StatColor.disarm, textShadow }}>
              {pet.disarm > 0 && '+'}
              {Math.round(pet.disarm * 100)}
              % {t('disarm')}
            </Text>
          )}
          {/* COMBO */}
          {!!pet.combo && (
            <Text typo="Blocky" sx={{ color: StatColor.combo, textShadow }}>
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

export default PetTooltip;