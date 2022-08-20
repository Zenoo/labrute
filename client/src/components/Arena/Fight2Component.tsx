import { Fight } from '@eternaltwin/labrute-core/types';
import { Box, useTheme } from '@mui/material';
import * as PIXI from 'pixi.js';
import React, { useEffect, useRef } from 'react';
import setupFight from '../../utils/fight/setupFight.js';

export interface Fight2ComponentProps {
  fight: Fight | null;
}

const Fight2Component = ({
  fight,
}: Fight2ComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  // Renderer setup
  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }
    const app = new PIXI.Application({
      backgroundColor: 0x56789a,
      width: 500,
      height: 300
    });
    ref.current.appendChild(app.view);

    app.loader
      .add('/images/game/sprites-0.json')
      .add('/images/game/sprites-1.json')
      .add('/images/game/sprites-2.json')
      // TODO: Split sprites into multiple files (bear, dog, panther, male, female)
      .load(setupFight(theme, fight, app));

    return () => {
      app.destroy(true);
    };
  }, [fight, theme]);

  return (fight) ? (
    <Box ref={ref} sx={{ ml: 5, alignSelf: 'center' }} />
  ) : null;
};

export default Fight2Component;