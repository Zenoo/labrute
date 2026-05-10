import { skillList } from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import {
  Grid, PaperProps, useTheme
} from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useBrute } from '../../hooks/useBrute';
import { PerkColor } from '../../utils/StatColor';
import { SkillTooltip } from '../Brute/SkillTooltip';
import { SkillIcon } from '../SkillIcon';

export const CellSkills = ({
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
  const theme = useTheme();

  const [hoveredSkill, setHoveredSkill] = useState<SkillName | null>(null);

  const randomSkill = useMemo(
    () => (brute && !hoverSelectAscend ? brute.randomSkill : null),
    [brute, hoverSelectAscend]
  );

  const getFilter = (skill: SkillName) => {
    let filter = '';

    if (randomSkill === skill) {
      filter += ` drop-shadow(0 2px 0 ${PerkColor.Random}) drop-shadow(2px 0 0 ${PerkColor.Random}) drop-shadow(0 -2px 0 ${PerkColor.Random}) drop-shadow(-2px 0 0 ${PerkColor.Random})`;
    }
    if (brute?.ascendedSkills.includes(skill)
      || selectedSkill === skill
      || (hoverSelectAscend && hoveredSkill === skill && brute?.skills[skill])) {
      filter += ` drop-shadow(0 2px 0 ${PerkColor.Ascended}) drop-shadow(2px 0 0 ${PerkColor.Ascended}) drop-shadow(0 -2px 0 ${PerkColor.Ascended}) drop-shadow(-2px 0 0 ${PerkColor.Ascended})`;
    }

    return `${filter} drop-shadow(0px 2px 2px ${theme.palette.border.outer})`;
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
            <SkillTooltip
              skill={skill}
              tier={brute.skills[skill.name]}
              ascended={brute.ascendedSkills.includes(skill.name)}
            >
              <SkillIcon
                skill={skill.name}
                tier={brute.skills[skill.name]}
                sx={{
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
