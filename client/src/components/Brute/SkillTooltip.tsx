import { Box, Divider, Tooltip, TooltipProps } from '@mui/material';
import React from 'react';
import { PERKS_TOTAL_ODDS, Skill, SkillModifiers } from '@labrute/core';
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
          {SkillModifiers[skill.name].map((skillModifier) => (
            <Text
              key={`${skillModifier.stat}-${skillModifier.value}`}
              bold
              sx={{ color: StatColor[skillModifier.stat], fontSize: 12, lineHeight: 1.2 }}
            >
              {skillModifier.value < 0 ? '' : '+'}
              {skillModifier.value}
              {skillModifier.percent ? '%' : ''}
              {' '}
              {t(skillModifier.stat)}
              {(skillModifier.stat && typeof skillModifier.weaponType !== 'undefined') && ` (${t('weapons')}: ${t(skillModifier.weaponType || 'none')})`}
            </Text>
          ))}
          {t(`${skill.name}.effect`) !== `${skill.name}.effect` && (
            <Text bold sx={{ fontSize: 12 }} color="error">{t(`${skill.name}.effect`)}</Text>
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