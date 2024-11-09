import { Box, Divider, Tooltip, TooltipProps } from '@mui/material';
import React, { Fragment } from 'react';
import { FightStat, PERKS_TOTAL_ODDS, Skill, SkillModifiers } from '@labrute/core';
import Text from '../Text';
import { useTranslation } from 'react-i18next';
import StatColor from '../../utils/StatColor';

export interface SkillTooltipProps extends Omit<TooltipProps, 'title'> {
  skill?: Skill;
}

const SkillTooltip = ({
  skill,
  children,
  ...rest
}: SkillTooltipProps) => {
  const { t } = useTranslation();

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
          {Object.entries(SkillModifiers[skill.name]).map(([unsafeStat, modifier]) => {
            const stat = unsafeStat as FightStat;

            return (
              <Fragment key={stat}>
                {!!modifier.flat && (
                  <Text
                    bold
                    sx={{ color: StatColor[stat], fontSize: 12, lineHeight: 1.2 }}
                  >
                    {modifier.flat < 0 ? '' : '+'}
                    {modifier.flat}
                    {' '}
                    {modifier.opponent ? t(`opponent-${stat}`) : t(stat)}
                    {(typeof modifier.weaponType !== 'undefined') && ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})`}
                    {modifier.details ? ` ${t(modifier.details)}` : ''}
                  </Text>
                )}
                {!!modifier.percent && (
                  <Text
                    bold
                    sx={{ color: StatColor[stat], fontSize: 12, lineHeight: 1.2 }}
                  >
                    {modifier.percent < 0 ? '' : '+'}
                    {modifier.percent * 100}
                    {'% '}
                    {modifier.opponent ? t(`opponent-${stat}`) : t(stat)}
                    {(typeof modifier.weaponType !== 'undefined') && ` (${t('weapons')}: ${t(modifier.weaponType || 'none')})`}
                    {modifier.details ? ` ${t(modifier.details)}` : ''}
                  </Text>
                )}
              </Fragment>
            );
          })}
          {t(`${skill.name}.effect`, { uses: skill.uses }) !== `${skill.name}.effect` && (
            <Text bold sx={{ fontSize: 12 }} color="error">{t(`${skill.name}.effect`, { uses: skill.uses })}</Text>
          )}
          <Text subtitle1 sx={{ opacity: 0.7, fontSize: 12 }}>{t('odds')}: {((skill.odds / PERKS_TOTAL_ODDS) * 100).toFixed(2)}%</Text>
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
