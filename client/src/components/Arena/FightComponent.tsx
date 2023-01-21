import { Fight } from '@labrute/core';
import { Rtt } from '@mui/icons-material';
import { Box, IconButton, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import setupFight from '../../utils/fight/setupFight';
import translateFightStep from '../../utils/translateFightStep';
import Text from '../Text';

export interface FightComponentProps {
  fight: Fight | null;
}

const FightComponent = ({
  fight,
}: FightComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const smallScreen = useMediaQuery('(max-width: 935px)');
  const { t } = useTranslation();

  // Logs display
  const [displayLogs, setDisplayLogs] = useState(false);

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

  const toggleLogs = useCallback(() => {
    setDisplayLogs((prev) => !prev);
  }, []);

  return (fight) ? (
    <Box
      ref={ref}
      sx={{
        ml: smallScreen ? 0 : 5,
        alignSelf: 'center',
        position: 'relative',
        fontSize: 0,
        maxWidth: 500,
        mx: smallScreen ? 'auto' : undefined,
        '& canvas': {
          maxWidth: '100%',
        }
      }}
    >
      {/* LOGS */}
      {displayLogs && (
        <Box sx={{
          height: 1,
          width: 1,
          overflowY: 'auto',
          position: 'absolute',
          top: 0,
          bgcolor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 500,
          pl: 1,
          textAlign: 'left',
        }}
        >
          {fight.data.steps.filter((step) => !['moveTo', 'moveBack'].includes(step.action)).map((step, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Text key={i}>{translateFightStep(step, t)}</Text>
          ))}
        </Box>
      )}
      {/* LOGS TOGGLE */}
      <Tooltip title={t('fight.toggleLogs')}>
        <IconButton onClick={toggleLogs} sx={{ position: 'absolute', bottom: 0, right: 0, zIndex: 501, }}>
          <Rtt />
        </IconButton>
      </Tooltip>
    </Box>
  ) : null;
};

export default FightComponent;