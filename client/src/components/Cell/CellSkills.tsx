import { skills } from '@labrute/core';
import { Box, Grid, PaperProps } from '@mui/material';
import React from 'react';
import { useBrute } from '../../hooks/useBrute';
import SkillTooltip from '../Brute/SkillTooltip';

const CellSkills = ({
  sx,
  ...props
}: PaperProps) => {
  const { brute } = useBrute();

  return brute && (
    <Grid container spacing={1} sx={{ pt: 1, ...sx }} {...props}>
      {skills.map((skill) => (
        <Grid
          item
          xs={12 / 7}
          key={skill.name}
          sx={{ opacity: brute.skills.includes(skill.name) ? 1 : 0.4 }}
        >
          {brute.skills.includes(skill.name) ? (
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
};

export default CellSkills;
