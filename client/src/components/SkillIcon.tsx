import { Box, BoxProps } from '@mui/material';
import React from 'react';
import { SkillName } from '@labrute/prisma';

type SkillIconProps = Omit<BoxProps, 'component'> & {
  /** The skill name (must match a skill SVG file) */
  skill: SkillName;
  /** The tier level (1-3) that determines which SVG file to load */
  tier?: number;
};

/**
 * SkillIcon component
 *
 * Displays a skill icon SVG with tier-based background coloring.
 *
 * @example
 * ```tsx
 * <SkillIcon skill="armor" tier={1} />
 * <SkillIcon skill="haste" tier={2} sx={{ width: 40, height: 40 }} />
 * <SkillIcon skill="shield" tier={3} />
 * ```
 */
const SkillIcon = React.forwardRef<HTMLDivElement, SkillIconProps>(
  ({ skill, tier = 1, sx, ...props }, ref) => {
    const svgPath = `/images/skills/tier-${tier}/${skill}.svg`;

    return (
      <Box
        ref={ref}
        component="img"
        src={svgPath}
        alt={skill}
        sx={{
          display: 'inline-block',
          ...sx
        }}
        {...props}
      />
    );
  }
);

SkillIcon.displayName = 'SkillIcon';

export default SkillIcon;
