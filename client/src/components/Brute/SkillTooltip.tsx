import { entries, ExtraTieredSkillData, FightStat, NO_SKILL_TOSS, PERKS_TOTAL_ODDS, Skill, SkillModifiers } from '@labrute/core';
import { Box, Divider, Tooltip, TooltipProps } from '@mui/material';
import React, { Fragment, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import StatColor from '../../utils/StatColor';
import Text from '../Text';
import { TierStar } from './TierStar';
import { FightModifier } from '@labrute/prisma';
import SkillIcon from '../SkillIcon';
import TieredStat from '../TieredStat';
import { getSkillTieredStatProps, getExtraTieredSkillStatProps } from '../../utils/displayTieredStat';

// Describe sabotage + Distinguish regen from bandage
const statName = (stat: FightStat) => {
  if (stat === 'sabotage') return 'sabotageStat';
  if (stat === 'regeneration') return 'regenerationStat';

  return stat;
};

export interface SkillTooltipProps extends Omit<TooltipProps, 'title'> {
  skill?: Skill | null;
  tier?: number;
  ascended?: boolean;
}

const SkillTooltip = ({
  skill,
  tier = 1,
  ascended = false,
  children,
  ...rest
}: SkillTooltipProps) => {
  const { t, i18n } = useTranslation();
  const { modifiers } = useAuth();

  const chaos = useMemo(() => !!modifiers[FightModifier.chaos], [modifiers]);

  return (
    <Tooltip
      {...rest}
      title={skill ? (
        <>
          <SkillIcon
            skill={skill.name}
            tier={tier}
            sx={{ width: 68, float: 'left', marginRight: 1 }}
          />
          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
            <Text bold h5>{t(skill.name)}</Text>
            {ascended && <Box component="img" sx={{ width: 16, height: 16 }} src="/images/ear.gif" />}
          </Box>
          <Divider />
          <Text sx={{ mt: 1.5, fontSize: 12 }}>{t(`${skill.name}.desc`)}</Text>
          {entries(SkillModifiers[skill.name]).map(([stat, modifier]) => (
            <Fragment key={stat}>
              {!!modifier.flat && (
                <Text bold subtitle2 sx={{ color: StatColor[stat], lineHeight: 1 }}>
                  <TieredStat
                    {...getSkillTieredStatProps({
                      chaos,
                      skill: skill.name,
                      type: 'flat',
                      stat,
                      values: modifier.flat,
                      tier,
                    })}
                    minus={modifier.flat[0] < 0}
                    plus={modifier.flat[0] > 0}
                  />
                  {' '}
                  {modifier.opponent ? t(`opponent-${stat}`) : t(statName(stat))}
                  {(typeof modifier.weaponType !== 'undefined') && ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})`}
                  {modifier.details && ` ${t(modifier.details)}`}
                </Text>
              )}
              {!!modifier.percent && (
                <Text bold subtitle2 sx={{ color: StatColor[stat], lineHeight: 1.2 }}>
                  <TieredStat
                    {...getSkillTieredStatProps({
                      chaos,
                      skill: skill.name,
                      type: 'percent',
                      stat,
                      values: modifier.percent,
                      tier,
                    })}
                    minus={modifier.percent[0] < 0}
                    plus={modifier.percent[0] > 0}
                  />
                  %
                  {' '}
                  {modifier.opponent ? t(`opponent-${stat}`) : t(statName(stat))}
                  {(typeof modifier.weaponType !== 'undefined') && ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})`}
                  {modifier.details && ` ${t(modifier.details)}`}
                </Text>
              )}
            </Fragment>
          ))}
          {i18n.exists(`${skill.name}.effect`) && (
            <Text bold sx={{ fontSize: 12 }} color="error">
              <Trans
                i18nKey={`${skill.name}.effect`}
                components={{
                  uses: skill.uses ? <TieredStat values={skill.uses} tier={tier} /> : <span />,
                  stats: ExtraTieredSkillData[skill.name]
                    ? <TieredStat {...getExtraTieredSkillStatProps({ skill: skill.name, tier })} />
                    : <span />,
                }}
              />
            </Text>
          )}
          {/* USAGE RATE */}
          {skill.toss && (
            <Text subtitle1 sx={{ opacity: 0.7, fontSize: 12, lineHeight: 1 }}>{t('usageRate')}: {Math.round(((skill.toss[tier - 1] ?? 0) / (NO_SKILL_TOSS + (skill.toss[tier - 1] ?? 0))) * 100)}%</Text>
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
