import { Fight } from '@eternaltwin/labrute-core/types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import React, { useEffect, useRef } from 'react';
import setupFight from '../../utils/fight/setupFight.js';

export interface FightComponentProps {
  fight: Fight | null;
}

const FightComponent = ({
  fight,
}: FightComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const smallScreen = useMediaQuery('(max-width: 935px)');

  // Renderer setup
  useEffect(() => {
    if (!ref.current || !fight) {
      return undefined;
    }
    const app = new PIXI.Application({
      backgroundColor: 0x56789a,
      width: 500,
      height: 300,
    });
    ref.current.appendChild(app.view);

    app.ticker.speed = 0.5;

    app.loader
      .add('/images/game/misc.json')
      .add('/images/game/bear.json')
      .add('/images/game/dog.json')
      .add('/images/game/panther.json')
      .add('/images/game/male-brute.json')
      .add('/images/game/female-brute.json')
      .load(setupFight(theme, fight, app));

    return () => {
      Tweener.dispose();
      app.destroy(true);
    };
  }, [fight, theme]);

  return (fight) ? (
    <Box ref={ref} sx={{ ml: smallScreen ? 0 : 5, alignSelf: 'center' }} />
  ) : null;
};

export default FightComponent;