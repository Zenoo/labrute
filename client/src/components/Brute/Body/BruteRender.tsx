import { Brute, BruteBody, BruteColors } from '@labrute/prisma';
import { Box, BoxProps } from '@mui/material';
import React, { useEffect } from 'react';
import { useRenderer } from '../../../hooks/useRenderer';

interface BruteRenderProps extends BoxProps {
  brute: Pick<Brute, 'id' | 'gender' | 'name'> & {
    body: Omit<BruteBody, 'id' | 'bruteId'> | null;
    colors: Omit<BruteColors, 'id' | 'bruteId'> | null;
  };
  looking?: 'left' | 'right';
  scale?: number;
  x?: string;
  y?: string;
}

const BruteRender = ({
  brute,
  looking = 'right',
  scale = 1,
  x = 'center',
  y = 'center',
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

  return (brute.body && brute.colors && src) && (
    <Box
      sx={{
        position: 'relative',
        transform: looking === 'right' ? 'scaleX(-1)' : undefined,
        ...sx,
      }}
      {...rest}
    >
      <Box
        component="img"
        src={src}
        sx={{
          position: 'absolute',
          left: x === 'center' ? '50%' : x,
          top: y === 'center' ? '50%' : y,
          transform: `${x === 'center' ? 'translateX(-50%)' : ''} ${y === 'center' ? 'translateY(-50%)' : ''} ${scale === 1 ? '' : `scale(${scale})`}`,
        }}
      />
    </Box>
  );
};

export default BruteRender;
