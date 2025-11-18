import { convertEnduranceToHP, entries, FightStat, getScaledStat, PERKS_TOTAL_ODDS, Skill, SkillModifiers } from '@labrute/core';
import { Box, Divider, Tooltip, TooltipProps } from '@mui/material';
import React, { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import StatColor from '../../utils/StatColor';
import Text from '../Text';
import { TierStar } from './TierStar';
import { FightModifier } from '@labrute/prisma';

// Rename endurance to HP
const statName = (stat: FightStat) => {
  if (stat === 'endurance') return 'HP';

  return stat;
};

// Convert endurance to HP
const statValue = (stat: FightStat | null, value: number) => {
  if (stat === 'endurance') return convertEnduranceToHP({ enduranceModifier: 1 }, value);

  return value;
};

export interface SkillTooltipProps extends Omit<TooltipProps, 'title'> {
  skill?: Skill | null;
  tier?: number;
}

const SkillTooltip = ({
  skill,
  tier = 1,
  children,
  ...rest
}: SkillTooltipProps) => {
  const { t } = useTranslation();
  const { modifiers } = useAuth();

  const chaos = useMemo(() => !!modifiers[FightModifier.chaos], [modifiers]);

  return (
    <Tooltip
      {...rest}
      title={skill ? (
        <>
          <Box
            component="img"
            src={`/images/skills/${skill.name}.svg`}
            sx={{ width: 68, float: 'left', marginRight: 1 }}
          />
          <Text bold h5>{t(skill.name)}</Text>
          <Divider />
          <Text sx={{ mt: 1.5, fontSize: 12 }}>{t(`${skill.name}.desc`)}</Text>
          {entries(SkillModifiers[skill.name]).map(([stat, modifier]) => (
            <Fragment key={stat}>
              {!!modifier.flat && (
                <Text
                  bold
                  subtitle2
                  sx={{ color: StatColor[stat], lineHeight: 1 }}
                >
                  {modifier.flat[0] < 0 ? '-' : '+'}
                  {modifier.flat.every((v) => v === modifier.flat?.[0]) ? getScaledStat({
                    chaos,
                    skill: skill.name,
                    type: 'flat',
                    stat,
                    value: Math.abs(statValue(stat, modifier.flat[0]))
                  }) : (
                    <>
                      [
                      {modifier.flat.map((val, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Fragment key={index}>
                          <Box sx={{ fontWeight: index === tier - 1 ? 'bold' : 'normal' }} component="span">
                            {getScaledStat({
                              chaos,
                              skill: skill.name,
                              type: 'flat',
                              stat,
                              value: Math.abs(statValue(stat, val))
                            })}
                          </Box>
                          {index < (modifier.flat?.length ?? 0) - 1 ? '/' : ''}
                        </Fragment>
                      ))}
                      ]
                    </>
                  )}
                  {' '}
                  {modifier.opponent ? t(`opponent-${stat}`) : t(statName(stat))}
                  {(typeof modifier.weaponType !== 'undefined') && ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})`}
                  {modifier.details ? ` ${t(modifier.details)}` : ''}
                </Text>
              )}
              {!!modifier.percent && (
                <Text
                  bold
                  subtitle2
                  sx={{ color: StatColor[stat], lineHeight: 1.2 }}
                >
                  {modifier.percent[0] < 0 ? '-' : '+'}
                  {modifier.percent.every((v) => v === modifier.percent?.[0]) ? (getScaledStat({
                    chaos,
                    skill: skill.name,
                    type: 'percent',
                    stat,
                    value: Math.abs(modifier.percent[0]),
                    precision: 2
                  }) * 100).toFixed(0) : (
                    <>
                      [
                      {modifier.percent.map((val, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Fragment key={index}>
                          <Box sx={{ fontWeight: index === tier - 1 ? 'bold' : 'normal' }} component="span">
                            {(getScaledStat({
                              chaos,
                              skill: skill.name,
                              type: 'percent',
                              stat,
                              value: Math.abs(val),
                              precision: 2
                            }) * 100).toFixed(0)}
                          </Box>
                          {index < (modifier.percent?.length ?? 0) - 1 ? '/' : ''}
                        </Fragment>
                      ))}
                      ]
                    </>
                  )}
                  {'% '}
                  {modifier.opponent ? t(`opponent-${stat}`) : t(statName(stat))}
                  {(typeof modifier.weaponType !== 'undefined') && ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})`}
                  {modifier.details ? ` ${t(modifier.details)}` : ''}
                </Text>
              )}
            </Fragment>
          ))}
          {t(`${skill.name}.effect`, { uses: skill.uses }) !== `${skill.name}.effect` && (
            <Text bold sx={{ fontSize: 12 }} color="error">{t(`${skill.name}.effect`, { uses: skill.uses })}</Text>
          )}
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 1,
          }}
          >
            <Text subtitle1 sx={{ opacity: 0.7, fontSize: 12 }}>{t('odds')}: {((skill.odds / PERKS_TOTAL_ODDS) * 100).toFixed(2)}%</Text>
            {tier > 1 && (
              <Box>
                {Array.from({ length: tier - 1 }).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TierStar key={index} />
                ))}
              </Box>
            )}
          </Box>
        </>
      ) : ''}
      componentsProps={{
        tooltip: { sx: { minHeight: 68 } },
        popper: { sx: { width: 250 } },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default SkillTooltip;
