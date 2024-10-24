import { getTempSkill, skills } from '@labrute/core';
import { Box, Grid, PaperProps } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import SkillTooltip from '../Brute/SkillTooltip';
import { SkillName } from '@labrute/prisma';

const CellSkills = ({
  sx,
  selectCallback,
  ...props
}: PaperProps & {
  selectCallback?: (skill: SkillName) => void,
}) => {
  const { brute } = useBrute();
  const { modifiers } = useAuth();

  const randomSkill = useMemo(
    () => (brute ? getTempSkill(brute, modifiers) : null),
    [brute, modifiers]
  );

  const getFilter = (skill: SkillName) => {
    if (randomSkill === skill) return 'drop-shadow(0 0 0.5rem #ff0000)';
    if (brute?.ascendedSkills.includes(skill)) return 'drop-shadow(0 0 0.5rem #ff9400)';
    return 'none';
  };

  const onSkillClick = useCallback((clicked: SkillName) => () => {
    if (selectCallback === undefined) {
      return;
    }
    if (!brute?.skills.includes(clicked)) {
      return;
    }
    selectCallback(clicked);
  }, [brute?.skills, selectCallback]);

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
          onClick={onSkillClick(skill.name)}
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
