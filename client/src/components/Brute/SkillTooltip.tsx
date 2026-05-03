import { entries, FightStat, PERKS_TOTAL_ODDS, Skill, SkillModifiers } from '@labrute/core';
import { Box, Divider, Tooltip, TooltipProps } from '@mui/material';
import React, { Fragment, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../hooks/useAuth';
import StatColor from '../../utils/StatColor';
import Text from '../Text';
import { TierStar } from './TierStar';
import { FightModifier } from '@labrute/prisma';
import SkillIcon from '../SkillIcon';
import { displaySkillTieredStat } from '../../utils/displayTieredStat';

// Rename endurance to HP
const statName = (stat: FightStat) => {
  if (stat === 'endurance') return 'HP';

  return stat;
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
          <SkillIcon
            skill={skill.name}
            tier={tier}
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
                  dangerouslySetInnerHTML={{
                    __html: `
                    ${modifier.flat[0] < 0 ? '-' : '+'}${displaySkillTieredStat({
                      chaos,
                      skill: skill.name,
                      type: 'flat',
                      stat,
                      values: modifier.flat,
                      tier,
                    })}
                    ${modifier.opponent ? t(`opponent-${stat}`) : t(statName(stat))}
                    ${(typeof modifier.weaponType !== 'undefined') ? ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})` : ''}
                    ${modifier.details ? ` ${t(modifier.details)}` : ''}
                  ` }}
                />
              )}
              {!!modifier.percent && (
                <Text
                  bold
                  subtitle2
                  sx={{ color: StatColor[stat], lineHeight: 1.2 }}
                  dangerouslySetInnerHTML={{
                    __html: `
                      ${modifier.percent[0] < 0 ? '-' : '+'}${displaySkillTieredStat({
                      chaos,
                      skill: skill.name,
                      type: 'percent',
                      stat,
                      values: modifier.percent,
                      tier,
                    })}%
                      ${modifier.opponent ? t(`opponent-${stat}`) : t(statName(stat))}
                      ${(typeof modifier.weaponType !== 'undefined') ? ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})` : ''}
                      ${modifier.details ? ` ${t(modifier.details)}` : ''}
                    `
                  }}
                />
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
