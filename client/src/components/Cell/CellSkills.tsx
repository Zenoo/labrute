import { getTempSkill, skills } from '@labrute/core';
import { Box, Grid, PaperProps } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import SkillTooltip from '../Brute/SkillTooltip';
import { SkillName } from '@labrute/prisma';
import { PerkColor } from '../../utils/StatColor';

const CellSkills = ({
  sx,
  selectCallback,
  hoverSelectAscend = false,
  selectedSkill = null,
  ...props
}: PaperProps & {
  selectCallback?: (skill: SkillName) => void,
  hoverSelectAscend?: boolean,
  selectedSkill?: SkillName | null,
}) => {
  const { brute } = useBrute();
  const { modifiers } = useAuth();

  const [hoveredSkill, setHoveredSkill] = useState<SkillName | null>(null);

  const randomSkill = useMemo(
    () => (brute && !hoverSelectAscend ? getTempSkill(brute, modifiers) : null),
    [brute, hoverSelectAscend, modifiers]
  );

  const getFilter = (skill: SkillName) => {
    if (randomSkill === skill) return `drop-shadow(0 0 0.5rem ${PerkColor.Random})`;
    if (brute?.ascendedSkills.includes(skill)
      || selectedSkill === skill
      || (hoverSelectAscend && hoveredSkill === skill && brute?.skills.includes(skill))) return `drop-shadow(0 0 0.5rem ${PerkColor.Ascended})`;
    return 'none';
  };

  const onSkillClick = (clicked: SkillName) => () => {
    if (selectCallback === undefined) {
      return;
    }
    if (!brute?.skills.includes(clicked)) {
      return;
    }
    selectCallback(clicked);
  };

  return brute && (
    <Grid container spacing={1} sx={{ pt: 1, ...sx }} {...props}>
      {skills.map((skill) => {
        const hasSkill = brute.skills.includes(skill.name);

        return (
          <Grid
            item
            xs={12 / 7}
            key={skill.name}
            sx={{
              opacity: (hasSkill || randomSkill === skill.name)
                ? 1
                : 0.4
            }}
            onClick={onSkillClick(skill.name)}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <SkillTooltip skill={skill}>
              <Box
                component="img"
                src={`/images/skills/${skill.name}.svg`}
                sx={{
                  boxShadow: 4,
                  filter: getFilter(skill.name),
                  cursor: (hoverSelectAscend && hasSkill) ? 'pointer' : 'default',
                  transition: 'filter 0.3s',
                }}
              />
            </SkillTooltip>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CellSkills;
