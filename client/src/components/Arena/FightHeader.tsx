import { Brute } from '@eternaltwin/labrute-core/types';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import { AnimationFighter } from '../../utils/fight/findFighter.js';
import BoxBg from '../BoxBg.js';
import BrutePortrait from '../Brute/Body/BrutePortait.js';
import Text from '../Text.js';

export interface FightHeaderProps extends BoxProps {
  brute: AnimationFighter;
  inverted?: boolean;
}

const FightHeader = ({
  brute,
  inverted,
  sx,
  ...props
}: FightHeaderProps) => (brute ? (
  <BoxBg
    src={`/images/fight/header${inverted ? '-inverted' : ''}.png`}
    sx={{
      position: 'absolute',
      top: 12,
      left: inverted ? null : 2,
      right: inverted ? 2 : null,
      filter: 'drop-shadow(1px 1px 0px black)',
      width: 243,
      height: 66,
      textAlign: inverted ? 'right' : 'left',
      ...sx,
    }}
    {...props}
  >
    {/* NAME */}
    <Text
      typo="Poplar"
      upperCase
      color="common.white"
      sx={{
        textShadow: '1px 1px 0px black',
        mt: '-18px',
        fontSize: '24px',
      }}
    >
      {brute.name}
    </Text>
    {/* HP */}
    <Box sx={{
      height: 10,
      width: `${((brute.hp / brute.maxHp) * 236).toFixed(2)}px`,
      bgcolor: 'hpBar.main',
      position: 'absolute',
      top: 10,
      left: inverted ? null : 3,
      right: inverted ? 3 : null,
      zIndex: 2,
      borderRadius: 1,
      boxShadow: (theme) => `inset 0px 0px 3px 1px ${theme.palette.hpBar.dark}`,
    }}
    />
    {/* PHANTOM HP */}
    <Box sx={{
      height: 10,
      width: `${((brute.hp / brute.maxHp) * 236).toFixed(2)}px`,
      bgcolor: 'error.main',
      position: 'absolute',
      top: 10,
      left: inverted ? null : 3,
      right: inverted ? 3 : null,
      transition: 'width 0.25s ease-in-out',
      transitionDelay: '0.5s',
      zIndex: 1,
      borderRadius: 1,
    }}
    />
    <Box sx={{
      display: 'flex',
      alignItems: 'start',
      justifyContent: inverted ? 'end' : 'start',
      ml: inverted ? null : '3px',
      mr: inverted ? '3px' : null,
    }}
    >
      {/* PORTRAIT */}
      <Box sx={{
        position: 'relative',
        display: 'inline-block',
        width: 44,
        height: 41,
        overflow: 'hidden',
        borderRadius: 1,
        mt: '5px',
        order: inverted ? 2 : 1,
        flexShrink: 0,
      }}
      >
        <BrutePortrait
          inverted={!inverted}
          brute={{ name: brute.name, data: brute.data } as Brute}
          sx={{
            position: 'absolute',
            top: -10,
            left: inverted ? null : -24,
            right: inverted ? -24 : null,
            width: 90,
          }}
        />
      </Box>
      {/* WEAPONS */}
      <Box sx={{
        order: inverted ? 1 : 2,
        mt: 1,
        ml: inverted ? null : 1,
        mr: inverted ? 1 : null,
      }}
      >
        {brute.weapons.map((weapon) => (
          <Box component="img" key={weapon.name} src={`/images/weapons/mini/${weapon.name}.png`} />
        ))}
      </Box>
    </Box>
  </BoxBg>
) : null);

export default FightHeader;