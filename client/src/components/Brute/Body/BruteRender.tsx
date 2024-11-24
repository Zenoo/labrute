import { BruteForRender } from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { Box, BoxProps } from '@mui/material';
import React, { useEffect } from 'react';
import { useRenderer } from '../../../hooks/useRenderer';

interface BruteRenderProps extends BoxProps {
  brute: BruteForRender | undefined;
  looking?: 'left' | 'right';
  x?: number;
  y?: number;
}

const BruteRender = ({
  brute,
  looking = 'right',
  x = 0,
  y = 0,
  sx,
  ...rest
}: BruteRenderProps) => {
  const renderer = useRenderer();

  const [src, setSrc] = React.useState<string | undefined>(undefined);

  useEffect(() => {
    if (!brute) return;

    renderer.onRender(brute.id, (content) => {
      setSrc(content);
    });

    renderer.render(brute);
  }, [brute, renderer]);

  if (!brute) return null;

  const parts = {
    p3: parseInt(brute.body[4] || '0', 16),
    p7: parseInt(brute.body[8] || '0', 16),
  };

  const { p3, p7 } = parts;
  const shift = { x: 0, y: 0 };
  let width = 100;

  // Shift some renders since the body is not centered
  if (brute.gender === Gender.female) {
    // Female variants

    if (p3 === 0) {
      width += 15;

      if (looking === 'right') {
        shift.x += -20;
      }
    } else if (p3 === 1) {
      width += -10;
    } else if (p3 === 3) {
      width += 40;

      if (looking === 'right') {
        shift.x += -40;
      }
    } else if (p3 === 4) {
      width += 40;
      shift.y += -10;

      if (looking === 'right') {
        shift.x += -40;
      }
    } else if (p3 === 7) {
      width += 40;
      shift.y += -4;

      if (looking === 'right') {
        shift.x += -40;
      }
    }
  } else {
    // Male variants

    if (p3 === 10) {
      width += 10;
      shift.y += 5;
    } else if (p3 === 11) {
      width -= 5;
    } else if (p3 === 5) {
      width += 20;
      shift.y -= 10;
    } else if (p3 === 3) {
      shift.y -= 3;
    }

    if (p7 === 5) {
      if (p3 === 9 || p3 === 4 || p3 === 6 || p3 === 3) {
        width += 20;
        shift.y -= 5;

        if (looking === 'right') {
          shift.x += -15;
        }
      } else {
        width += 30;

        if (looking === 'right') {
          shift.x += -20;
        } else {
          shift.x += -10;
        }
      }
    }
  }

  const left = (x === 0 && shift.x === 0) ? 0 : `calc(${x}px ${shift.x > 0 ? '+' : '-'} ${Math.abs(shift.x)}%)`;
  const top = (y === 0 && shift.y === 0) ? 0 : `calc(${y}px ${shift.y > 0 ? '+' : '-'} ${Math.abs(shift.y)}%)`;

  return src && (
    <Box
      component="img"
      src={src}
      sx={{
        position: 'relative',
        left,
        top,
        transformOrigin: 'top center',
        transform: `${looking === 'right' ? 'scaleX(-1)' : ''}`,
        width: `${width}%`,
        objectFit: 'cover',
        objectPosition: 'top center',
        ...sx,
      }}
      {...rest}
    />
  );
};

export default BruteRender;
