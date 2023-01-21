import { Brute, skills } from '@labrute/core';
import { Box, Grid, PaperProps } from '@mui/material';
import React from 'react';
import SkillTooltip from '../Brute/SkillTooltip';

export interface CellSkillsProps extends PaperProps {
  brute: Brute;
}

const CellSkills = ({
  brute,
  sx,
  ...rest
}: CellSkillsProps) => (
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
              src={`/images/skills/${skill.name}.svg`}
              sx={{
                boxShadow: 4,
              }}
            />
          </SkillTooltip>
        ) : (
          <Box
            component="img"
            src={`/images/skills/${skill.name}.svg`}
            sx={{
              boxShadow: 4,
            }}
          />
        )}
      </Grid>
    ))}
  </Grid>
);

export default CellSkills;
