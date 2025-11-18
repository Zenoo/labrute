import { BARE_HANDS_DAMAGE, BASE_FIGHTER_STATS, getWeaponScaledStat, NO_WEAPON_TOSS, PERKS_TOTAL_ODDS, TieredNumberKeysOf, Weapon, WeaponTypeColor } from '@labrute/core';
import { Box, Tooltip, TooltipProps, useTheme } from '@mui/material';
import React, { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../Text';
import StatColor from '../../utils/StatColor';
import { useAuth } from '../../hooks/useAuth';
import { TierStar } from './TierStar';
import { FightModifier } from '@labrute/prisma';

const textShadowBase = '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000';
const textProps = {
  fontSize: 12,
  lineHeight: 1.2,
} as const;

export interface WeaponTooltipProps extends Omit<TooltipProps, 'title'> {
  weapon?: Weapon | null;
  bareHands?: boolean;
  tier?: number;
}

const WeaponTooltip = ({
  weapon,
  tier = 1,
  bareHands,
  children,
  ...rest
}: WeaponTooltipProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { modifiers } = useAuth();

  const chaos = useMemo(() => !!modifiers[FightModifier.chaos], [modifiers]);

  const textShadow = useMemo(() => (theme.palette.mode === 'dark' ? textShadowBase : undefined), [theme.palette.mode]);

  const tieredWeapon = useMemo(() => (weapon ? ({
    ...weapon,
    tier,
  }) : undefined), [weapon, tier]);

  const statLine = (
    stat: TieredNumberKeysOf<Weapon>,
    percent: boolean,
    labelFirst: boolean,
    tierFormatter?: (tier: number) => number,
  ) => {
    if (!bareHands && !weapon?.[stat][0]) return null;

    const label = stat === 'tempo' ? 'hitSpeed' : stat === 'toss' ? 'drawChance' : stat;
    const color = stat === 'tempo' || stat === 'toss' ? { opacity: 0.7 } : { color: StatColor[stat] };
    const uniqueValue = !tieredWeapon
      || tieredWeapon[stat].every((v) => v === tieredWeapon[stat]?.[0]);

    const formatter = tierFormatter ?? ((currentTier: number) => {
      // Those stats will always use a formatter
      if (stat === 'damage' || stat === 'toss') return 0;

      return Math.round(
        (tieredWeapon
          ? getWeaponScaledStat(chaos, { ...tieredWeapon, tier: currentTier }, stat, 2)
          : BASE_FIGHTER_STATS[stat]) * 100,
      );
    });

    if (labelFirst) {
      return (
        <Text {...textProps}>
          {t(label)}:
          {' '}
          <Text component="span" bold sx={color} {...textProps}>
            {uniqueValue ? formatter(tier) : (
              <>
                [
                {tieredWeapon[stat].map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Fragment key={index}>
                    <Box sx={{ fontWeight: index === tier - 1 ? 'bold' : 'normal' }} component="span">
                      {formatter(index + 1)}
                    </Box>
                    {index < (tieredWeapon[stat]?.length ?? 0) - 1 ? '/' : ''}
                  </Fragment>
                ))}
                ]
              </>
            )}{percent ? '%' : ''}
          </Text>
        </Text>
      );
    }

    // These stats will always be paired with labelFirst
    if (stat === 'tempo' || stat === 'toss' || stat === 'damage') return null;

    return (
      <Text bold sx={{ color: StatColor[stat], textShadow }} {...textProps}>
        {(tieredWeapon ? (tieredWeapon[stat][tieredWeapon.tier - 1] ?? 0) : BASE_FIGHTER_STATS[stat]) > 0 ? '+' : '-'}
        {uniqueValue ? Math.abs(formatter(tier)) : (
          <>
            [
            {tieredWeapon[stat].map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                <Box sx={{ fontWeight: index === tier - 1 ? 'bold' : 'normal' }} component="span">
                  {Math.abs(formatter(index + 1))}
                </Box>
                {index < (tieredWeapon[stat]?.length ?? 0) - 1 ? '/' : ''}
              </Fragment>
            ))}
            ]
          </>
        )}
        {percent ? '%' : ''} {t(label)}
      </Text>
    );
  };

  return (
    <Tooltip
      {...rest}
      title={(weapon || bareHands) ? (
        <>
          <Box sx={{ textAlign: 'center', my: 0.5 }}>
            {tier > 1 && (
              <Box>
                {Array.from({ length: tier - 1 }).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TierStar key={index} />
                ))}
              </Box>
            )}
            {/* NAME */}
            <Text bold h5>{t(weapon ? weapon.name : 'bareHands')}</Text>
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
            <Text {...textProps}>
              {t('types')}:
              {' '}
              {weapon.types.map((type, index) => (
                <Fragment key={type}>
                  <Text
                    component="span"
                    bold
                    sx={{
                      color: WeaponTypeColor[type],
                      textTransform: 'capitalize',
                      textShadow,
                    }}
                    {...textProps}
                  >
                    {t(type)}
                  </Text>
                  {index < weapon.types.length - 1 && ', '}
                </Fragment>
              ))}
            </Text>
          )}
          {/* ODDS */}
          {weapon && (
            <Text {...textProps}>
              {t('odds')}:
              {' '}
              <Text bold component="span" sx={{ opacity: 0.7 }} {...textProps}>
                {((weapon.odds / PERKS_TOTAL_ODDS) * 100).toFixed(2)}%
              </Text>
            </Text>
          )}
          {/* HIT SPEED */}
          {statLine('tempo', true, true, (currentTier) => Math.round(
            (BASE_FIGHTER_STATS.tempo
              / (tieredWeapon ? getWeaponScaledStat(chaos, { ...tieredWeapon, tier: currentTier }, 'tempo', 2) : BASE_FIGHTER_STATS.tempo)) * 100,
          ))}
          {/* DAMAGE */}
          {statLine('damage', false, true, (currentTier) => (tieredWeapon ? getWeaponScaledStat(chaos, { ...tieredWeapon, tier: currentTier }, 'damage') : BARE_HANDS_DAMAGE))}
          {/* DRAW CHANCE */}
          {tieredWeapon && statLine('toss', true, true, (currentTier) => Math.round((getWeaponScaledStat(chaos, { ...tieredWeapon, tier: currentTier }, 'toss') / (NO_WEAPON_TOSS + getWeaponScaledStat(chaos, { ...tieredWeapon, tier: currentTier }, 'toss'))) * 100))}
          {/* REACH */}
          {tieredWeapon && (
            <Text {...textProps}>
              {t('reach')}:
              {' '}
              <Text component="span" bold sx={{ opacity: 0.7 }} {...textProps}>
                {tieredWeapon.reach}
              </Text>
            </Text>
          )}
          {statLine('criticalChance', true, false)}
          {statLine('criticalDamage', true, false)}
          {statLine('reversal', true, false)}
          {statLine('evasion', true, false)}
          {statLine('dexterity', true, false)}
          {statLine('block', true, false)}
          {statLine('accuracy', true, false)}
          {statLine('disarm', true, false)}
          {statLine('combo', true, false)}
          {statLine('deflect', true, false)}
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

export default WeaponTooltip;
