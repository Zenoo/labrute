import { skillList } from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import { Box, Grid, PaperProps } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useBrute } from '../../hooks/useBrute';
import { PerkColor } from '../../utils/StatColor';
import SkillTooltip from '../Brute/SkillTooltip';
import { TierStar } from '../Brute/TierStar';

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

  const [hoveredSkill, setHoveredSkill] = useState<SkillName | null>(null);

  const randomSkill = useMemo(
    () => (brute && !hoverSelectAscend ? brute.randomSkill : null),
    [brute, hoverSelectAscend]
  );

  const getFilter = (skill: SkillName) => {
    if (randomSkill === skill) return `drop-shadow(0 0 0.5rem ${PerkColor.Random})`;
    if (brute?.ascendedSkills.includes(skill)
      || selectedSkill === skill
      || (hoverSelectAscend && hoveredSkill === skill && brute?.skills[skill])) return `drop-shadow(0 0 0.5rem ${PerkColor.Ascended})`;
    return 'none';
  };

  const onSkillClick = (clicked: SkillName) => () => {
    if (selectCallback === undefined) {
      return;
    }
    if (!brute?.skills[clicked]) {
      return;
    }
    selectCallback(clicked);
  };

  return brute && (
    <Grid container spacing={1} sx={{ pt: 1, ...sx }} {...props}>
      {skillList.map((skill) => {
        const hasSkill = brute.skills[skill.name] !== undefined;

        return (
          <Grid
            item
            xs={12 / 7}
            key={skill.name}
            sx={{
              opacity: hasSkill
                ? 1
                : 0.4,
              position: 'relative',
            }}
            onClick={onSkillClick(skill.name)}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <SkillTooltip skill={skill} tier={brute.skills[skill.name]}>
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
            {(brute.skills[skill.name] ?? 0) > 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: -4,
                }}
              >
                {Array.from(
                  { length: (brute.skills[skill.name] ?? 0) - 1 },
                ).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TierStar key={index} />
                ))}
              </Box>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CellSkills;
