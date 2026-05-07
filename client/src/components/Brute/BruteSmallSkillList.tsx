import { entries, skills } from '@labrute/core';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import SkillIcon from '../SkillIcon';
import SkillTooltip from './SkillTooltip';
import { SkillName } from '@labrute/prisma';

interface BruteSmallSkillListProps extends BoxProps {
  skills: Partial<Record<SkillName, number>>;
}

const BruteSmallSkillList = ({ skills: bruteSkills, sx, ...rest }: BruteSmallSkillListProps) => (
  <Box sx={sx} {...rest}>
    {entries(bruteSkills).map(([skill, tier]) => (
      <SkillTooltip
        skill={skills[skill]}
        tier={tier}
        key={skill}
      >
        <SkillIcon
          skill={skill}
          tier={tier}
          sx={{
            width: 16,
            mx: 0.25,
            my: 0,
            filter: 'drop-shadow(1px 1px 1px black)',
          }}
        />
      </SkillTooltip>
    ))}
  </Box>
);

export default BruteSmallSkillList;
