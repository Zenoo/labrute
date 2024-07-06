import { skills } from '@labrute/core';
import { Box, Grid, PaperProps } from '@mui/material';
import React, { useMemo } from 'react';
import { useBrute } from '../../hooks/useBrute';
import SkillTooltip from '../Brute/SkillTooltip';
import { useAuth } from '../../hooks/useAuth';

const CellSkills = ({
  sx,
  ...props
}: PaperProps) => {
  const { brute } = useBrute();
  const { randomSkill: randomSkillIndex } = useAuth();

  const unownedSkills = useMemo(
    () => skills.filter((skill) => !brute?.skills.includes(skill.name)),
    [brute]
  );

  const randomSkill = useMemo(
    () => (randomSkillIndex === null
      ? null
      : unownedSkills[randomSkillIndex % unownedSkills.length]),
    [randomSkillIndex, unownedSkills]
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
              || randomSkill?.name === skill.name)
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
                filter: randomSkill?.name === skill.name ? 'drop-shadow(0 0 5px #ee82ee)' : 'none',
              }}
            />
          </SkillTooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default CellSkills;
