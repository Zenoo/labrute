import { entries, weapons } from '@labrute/core';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import { TieredPerkColor } from '../../utils/StatColor';
import WeaponTooltip from './WeaponTooltip';
import { WeaponName } from '@labrute/prisma';

interface BruteSmallWeaponListProps extends BoxProps {
  weapons: Partial<Record<WeaponName, number>>;
}

const BruteSmallWeaponList = ({
  weapons: bruteWeapons,
  sx,
  ...rest
}: BruteSmallWeaponListProps) => (
  <Box sx={sx} {...rest}>
    {entries(bruteWeapons).map(([weapon, tier]) => (
      <WeaponTooltip
        weapon={weapons[weapon]}
        tier={tier}
        key={weapon}
      >
        <Box component="img" src={`/images/game/resources/misc/weapons/${weapon}.png`} sx={{ filter: tier > 1 ? `drop-shadow(1px 1px 1px black) drop-shadow(0 -0.1px 0 ${TieredPerkColor[tier]}) drop-shadow(0.1px 0 0 ${TieredPerkColor[tier]}) drop-shadow(0 0.1px 0 ${TieredPerkColor[tier]}) drop-shadow(-0.1px 0 0 ${TieredPerkColor[tier]})` : 'drop-shadow(1px 1px 1px black)' }} />
      </WeaponTooltip>
    ))}
  </Box>
);

export default BruteSmallWeaponList;
