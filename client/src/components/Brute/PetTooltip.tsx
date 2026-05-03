import { PERKS_TOTAL_ODDS, Pet, TieredNumberKeysOf, convertEnduranceToHP, getPetScaledStat } from '@labrute/core';
import { Brute, FightModifier } from '@labrute/prisma';
import { Box, Tooltip, TooltipProps, useTheme } from '@mui/material';
import React, { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import StatColor from '../../utils/StatColor';
import Text from '../Text';
import { TierStar } from './TierStar';

const textShadowBase = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
const textProps = {
  fontSize: 12,
  lineHeight: 1.2,
} as const;

export interface PetTooltipProps extends Omit<TooltipProps, 'title'> {
  pet?: Pet | null;
  tier?: number;
  brute?: Pick<Brute, 'hp' | 'strengthValue' | 'agilityValue' | 'speedValue' | 'enduranceModifier'>;
}

const PetTooltip = ({
  pet,
  brute: specificBrute,
  tier = 1,
  children,
  ...rest
}: PetTooltipProps) => {
  const { t } = useTranslation();
  const { brute: authedBrute } = useBrute();
  const theme = useTheme();
  const { modifiers } = useAuth();
  const chaos = useMemo(() => !!modifiers[FightModifier.chaos], [modifiers]);

  const textShadow = useMemo(() => (theme.palette.mode === 'dark' ? textShadowBase : undefined), [theme.palette.mode]);
  const tieredPet = useMemo(() => {
    if (!pet) return null;

    return {
      ...pet,
      tier,
    };
  }, [pet, tier]);

  const brute = specificBrute || authedBrute;

  const statLine = (
    stat: TieredNumberKeysOf<Pet>,
    percent: boolean,
    precision?: number
  ) => {
    if (!brute || !tieredPet?.[stat][0]) return null;

    const label = stat === 'hp' ? 'HP' : stat;
    const color = stat === 'hp' ? StatColor.endurance : StatColor[stat];
    const uniqueValue = tieredPet[stat].every((v) => v === tieredPet[stat]?.[0]);

    if (percent) {
      return (
        <Text bold sx={{ color }} {...textProps}>
          {(tieredPet[stat][tieredPet.tier - 1] ?? 0) > 0 ? '+' : '-'}
          {uniqueValue ? Math.abs(Math.round(
            getPetScaledStat(chaos, brute, tieredPet, stat, precision) * 100,
          )) : (
            <>
              [
              {tieredPet[stat].map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                  {index > 0 && '/'}
                  <Box sx={{ fontWeight: index === tier - 1 ? 'bold' : 'normal' }} component="span">
                    {Math.round(
                      getPetScaledStat(chaos, brute, {
                        ...tieredPet,
                        tier: index + 1,
                      }, stat, precision) * 100,
                    )}
                  </Box>
                </Fragment>
              ))}
              ]
            </>
          )}
          % {t(label)}
        </Text>
      );
    }

    return (
      <Text {...textProps}>
        {t(label)}:
        {' '}
        <Text component="span" bold sx={{ color, textShadow }} {...textProps}>
          {uniqueValue ? (
            getPetScaledStat(chaos, brute, tieredPet, stat, precision)
          ) : (
            <>
              [
              {tieredPet[stat].map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                  <Box sx={{ fontWeight: index === tier - 1 ? 'bold' : 'normal' }} component="span">
                    {getPetScaledStat(chaos, brute, {
                      ...tieredPet,
                      tier: index + 1,
                    }, stat, precision)}
                  </Box>
                  {index < (tieredPet[stat]?.length ?? 0) - 1 ? '/' : ''}
                </Fragment>
              ))}
              ]
            </>
          )}
        </Text>
      </Text>
    );
  };

  return (
    <Tooltip
      {...rest}
      title={(tieredPet && brute) ? (
        <>
          {tier > 1 && (
            <Box>
              {Array.from({ length: tier - 1 }).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TierStar key={index} />
              ))}
            </Box>
          )}
          <Box sx={{ textAlign: 'center', my: 0.5 }}>
            {/* NAME */}
            <Text bold h5>{t(tieredPet.name)}</Text>
          </Box>
          {/* ODDS */}
          <Text {...textProps}>
            {t('odds')}:
            {' '}
            <Text component="span" bold sx={{ opacity: 0.7 }} {...textProps}>
              {((tieredPet.odds / PERKS_TOTAL_ODDS) * 100).toFixed(2)}%
            </Text>
          </Text>
          {/* HP MALUS */}
          <Text {...textProps}>
            {t('hpMalus')}:
            {' '}
            <Text component="span" bold sx={{ color: StatColor.endurance, textShadow }} {...textProps}>
              {convertEnduranceToHP(brute, tieredPet.enduranceMalus)}
            </Text>
          </Text>
          {statLine('initiative', false, 2)}
          {statLine('strength', false)}
          {statLine('agility', false)}
          {statLine('speed', false)}
          {statLine('hp', false)}
          {statLine('damage', false)}
          {statLine('evasion', true, 2)}
          {statLine('accuracy', true, 2)}
          {statLine('disarm', true, 2)}
          {statLine('block', true, 2)}
          {statLine('combo', true, 2)}
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
