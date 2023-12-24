import { Brute, BruteBody, BruteColors, Gender } from '@labrute/prisma';
import { Box, BoxProps } from '@mui/material';
import React, { useEffect } from 'react';
import { useRenderer } from '../../../hooks/useRenderer';

interface BruteRenderProps extends BoxProps {
  brute: Pick<Brute, 'id' | 'gender' | 'name'> & {
    body: Omit<BruteBody, 'id' | 'bruteId'> | null;
    colors: Omit<BruteColors, 'id' | 'bruteId'> | null;
  };
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
    if (!brute.body || !brute.colors) return;

    renderer.onRender(brute.id, (content) => {
      setSrc(content);
      console.log(brute.name, Object.entries(brute.body || {}).filter(([key]) => key.startsWith('p')).map(([key, value]) => `${key}:${value}`).join(','));
    });

    renderer.render(brute);
  }, [brute, renderer]);

  const shift = { x: 0, y: 0 };
  let width = 100;

  // Shift some renders since the body is not centered
  if (brute.gender === Gender.female) {
    switch (brute.body?.p3) {
      case 0:
        width = 115;
        shift.y = 7;
        break;
      case 3:
        width = 140;
        break;
      case 4:
        width = 140;
        shift.y = -10;
        break;
      case 7:
        width = 140;
        shift.y = -4;
        break;
      default:
        break;
    }

    if (looking === 'right') {
      switch (brute.body?.p3) {
        case 0:
          shift.x = -20;
          break;
        case 3:
          shift.x = -40;
          break;
        case 4:
          shift.x = -40;
          break;
        case 7:
          shift.x = -40;
          break;
        default:
          break;
      }
    }
  }

  const left = (x === 0 && shift.x === 0) ? 0 : `calc(${x}px ${shift.x > 0 ? '+' : '-'} ${Math.abs(shift.x)}%)`;
  const top = (y === 0 && shift.y === 0) ? 0 : `calc(${y}px ${shift.y > 0 ? '+' : '-'} ${Math.abs(shift.y)}%)`;

  return (brute.body && brute.colors && src) && (
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
