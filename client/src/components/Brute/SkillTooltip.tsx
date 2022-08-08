import { Box, Divider, Tooltip, TooltipProps } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { Skill } from '@eternaltwin/labrute-core/brute/skills';
import Text from '../Text.js';

export interface SkillTooltipProps extends Omit<TooltipProps, 'title'> {
  skill?: Skill;
}

const SkillTooltip = ({
  skill,
  children,
  ...rest
}: SkillTooltipProps) => (
  <Tooltip
    {...rest}
    title={skill ? (
      <>
        <Box
          component="img"
          src={`/images/skills/${skill.icon}.svg`}
          sx={{ width: 68, float: 'left', marginRight: 1 }}
        />
        <Text bold h5>{t(skill.name)}</Text>
        <Divider />
        <Text sx={{ mt: 1.5, fontSize: 12 }}>{t(`${skill.name}.desc`)}</Text>
        {t(`${skill.name}.effect`) && (
          <Text bold sx={{ fontSize: 12 }} color="error">{t(`${skill.name}.effect`)}</Text>
        )}
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

export default SkillTooltip;