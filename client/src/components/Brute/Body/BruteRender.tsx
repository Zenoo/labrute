import { BruteColor, BruteForRender } from '@labrute/core';
import {
  Box, BoxProps, useTheme
} from '@mui/material';
import React, { forwardRef, useEffect } from 'react';
import { useRenderer } from '../../../hooks/useRenderer';
import {
  PORTRAIT_HEIGHT, PORTRAIT_WIDTH, PortraitFrame, portraitLayout
} from '../../../utils/portraitLayout';

interface BruteRenderProps extends BoxProps {
  brute: BruteForRender | undefined;
  looking?: 'left' | 'right';
  x?: number;
  y?: number;
  small?: boolean;
  skipCache?: boolean;
  highlightColorName?: BruteColor;
}

export const BruteRender = forwardRef<HTMLDivElement, BruteRenderProps>(({
  brute,
  looking = 'right',
  x = 0,
  y = 0,
  small,
  skipCache,
  highlightColorName,
  sx,
  ...rest
}, ref) => {
  const renderer = useRenderer();
  const theme = useTheme();

  const [portrait, setPortrait] = React.useState<{
    src: string;
    frame?: PortraitFrame;
  }>();

  useEffect(() => {
    if (!brute) return;

    renderer.onRender(brute.id, (src, frame) => {
      setPortrait({ src, frame });
    }, { skipCache });

    renderer.render({
      id: brute.id,
      body: brute.body,
      colors: brute.colors,
      gender: brute.gender,
      skipCache,
      highlightColorName,
    });
  }, [brute, renderer, skipCache, highlightColorName]);

  if (!brute || !portrait) return null;

  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        left: x,
        top: y,
        width: '100%',
        aspectRatio: `${PORTRAIT_WIDTH} / ${PORTRAIT_HEIGHT}`,
        ...sx,
        filter: `drop-shadow(0 0 ${small ? 2 : 4}px ${theme.palette.divider}) ${(sx && 'filter' in sx) ? sx.filter ?? '' : ''}`,
      }}
      {...rest}
    >
      <Box
        component="img"
        src={portrait.src}
        alt={brute.name}
        sx={{
          position: 'absolute',
          ...portraitLayout(portrait.frame ?? {
            x: 0, y: 0, width: PORTRAIT_WIDTH, height: PORTRAIT_HEIGHT,
          }, looking),
          transform: looking === 'right' ? 'scaleX(-1)' : undefined,
          maxWidth: 'none',
        }}
      />
    </Box>
  );
});
