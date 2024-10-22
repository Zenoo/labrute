import { getTempSkill, skills } from '@labrute/core';
import { Box, Grid, PaperProps } from '@mui/material';
import React, { useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import SkillTooltip from '../Brute/SkillTooltip';
import { SkillName } from '@labrute/prisma';

const CellSkills = ({
  sx,
  ...props
}: PaperProps) => {
  const { brute } = useBrute();
  const { modifiers } = useAuth();

  const randomSkill = useMemo(
    () => (brute ? getTempSkill(brute, modifiers) : null),
    [brute, modifiers]
  );

  const getFilter = useMemo(
    () => (skill: SkillName) => {
      if (randomSkill === skill) return 'drop-shadow(0 0 0.5rem #ff0000)';
      if (brute?.ascendedSkills.includes(skill)) return 'drop-shadow(0 0 0.5rem #ff9400)';
      return 'none';
    },
    [randomSkill, brute]
  );

  return brute && (
    <Grid container spacing={1} sx={{ pt: 1, ...sx }} {...props}>
      {skills.map((skill) => (
        <Grid
          item
          xs={12 / 7}
          key={skill.name}
          sx={{
            opacity: (brute.skills.includes(skill.name)
              || randomSkill === skill.name)
              ? 1
              : 0.4
          }}
        >
          <SkillTooltip skill={skill}>
            <Box
              component="img"
              src={`/images/skills/${skill.name}.svg`}
              sx={{
                boxShadow: 4,
                filter: getFilter(skill.name),
              }}
            />
          </SkillTooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default CellSkills;
