import { Brute } from '@eternaltwin/labrute-core/types';
import { Box, Divider, Grid, PaperProps, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import skills, { Skill } from '../../utils/brute/skills.js';
import Text from '../Text.js';

export interface CellSkillsProps extends PaperProps {
  brute: Brute;
}

const CellSkills = ({
  brute,
  sx,
  ...rest
}: CellSkillsProps) => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={1} sx={{ pt: 1, ...sx }} {...rest}>
      {skills.map((skill: Skill) => (
        <Grid
          item
          xs={12 / 7}
          key={skill.name}
          sx={{ opacity: brute.data.skills.includes(skill.name) ? 1 : 0.5 }}
        >
          {brute.data.skills.includes(skill.name) ? (
            <Tooltip
              title={(
                <>
                  <Box
                    component="img"
                    src={`/images/skills/${skill.icon}.svg`}
                    sx={{ width: 68, float: 'left', marginRight: 1 }}
                  />
                  <Text bold h5>{t(skill.name)}</Text>
                  <Divider />
                  <Text sx={{ mt: 1.5, fontSize: 12 }}>{t(`${skill.name}.desc`)}</Text>
                </>
              )}
              componentsProps={{
                tooltip: { sx: { minHeight: 68 } },
                popper: { sx: { width: 250 } },
              }}
            >
              <Box
                component="img"
                src={`/images/skills/${skill.icon}.svg`}
                sx={{
                  boxShadow: 4,
                }}
              />
            </Tooltip>
          ) : (
            <Box
              component="img"
              src={`/images/skills/${skill.icon}.svg`}
              sx={{
                boxShadow: 4,
              }}
            />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default CellSkills;
