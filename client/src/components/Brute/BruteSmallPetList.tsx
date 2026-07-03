import { entries, pets } from '@labrute/core';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import { TieredPerkColor } from '../../utils/StatColor';
import { PetTooltip } from './PetTooltip';
import { Brute, PetName } from '@labrute/prisma';

interface BruteSmallPetListProps extends BoxProps {
  pets: Partial<Record<PetName, number>>;
  brute?: Pick<Brute, 'hpValue' | 'strengthValue' | 'agilityValue' | 'speedValue'>;
}

export const BruteSmallPetList = ({
  pets: brutePets,
  brute,
  sx,
  ...rest
}: BruteSmallPetListProps) => (
  <Box sx={sx} {...rest}>
    {entries(brutePets).map(([pet, tier]) => (
      <PetTooltip brute={brute} pet={pets[pet]} tier={tier} key={pet}>
        <Box component="img" src={`/images/pets/${pet.replace(/\d/g, '')}.svg`} sx={{ width: 16, m: 0.25, mb: 0, filter: tier > 1 ? `drop-shadow(1px 1px 1px black) drop-shadow(0 -0.1px 0 ${TieredPerkColor[tier]}) drop-shadow(0.1px 0 0 ${TieredPerkColor[tier]}) drop-shadow(0 0.1px 0 ${TieredPerkColor[tier]}) drop-shadow(-0.1px 0 0 ${TieredPerkColor[tier]})` : 'drop-shadow(1px 1px 1px black)' }} />
      </PetTooltip>
    ))}
  </Box>
);
