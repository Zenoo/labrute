import { Box, Divider, Tooltip, TooltipProps } from '@mui/material';
import React from 'react';
import { Skill } from '@labrute/core';
import Text from '../Text';
import { useTranslation } from 'react-i18next';

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
};

export default SkillTooltip;