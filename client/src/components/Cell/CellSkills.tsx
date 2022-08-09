import skills from '@eternaltwin/labrute-core/brute/skills';
import { Brute } from '@eternaltwin/labrute-core/types';
import { Box, Grid, PaperProps } from '@mui/material';
import React from 'react';
import SkillTooltip from '../Brute/SkillTooltip.js';

export interface CellSkillsProps extends PaperProps {
  brute: Brute;
}

const CellSkills = ({
  brute,
  sx,
  ...rest
}: CellSkillsProps) => {
  return (
    <Grid container spacing={1} sx={{ pt: 1, ...sx }} {...rest}>
      {skills.map((skill) => (
        <Grid
          item
          xs={12 / 7}
          key={skill.name}
          sx={{ opacity: brute.data.skills.includes(skill.name) ? 1 : 0.4 }}
        >
          {brute.data.skills.includes(skill.name) ? (
            <SkillTooltip skill={skill}>
              <Box
                component="img"
                src={`/images/skills/${skill.icon}.svg`}
                sx={{
                  boxShadow: 4,
                }}
              />
            </SkillTooltip>
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
