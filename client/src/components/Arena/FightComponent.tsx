import { Fighter, FightStep } from '@labrute/core';
import { Fight } from '@labrute/prisma';
import { FastForward, FastRewind, Pause, PlayArrow, Rtt } from '@mui/icons-material';
import { Box, IconButton, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import setupFight from '../../utils/fight/setupFight';
import translateFightStep from '../../utils/translateFightStep';
import Link from '../Link';
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

  const fightSteps = fight?.steps as FightStep[] | undefined;

  // Fight status
  const appRef = useRef<PIXI.Application | null>(null);
  const [playing, setPlaying] = useState(true);
  const [completed, setCompleted] = useState(false);

  // Fight speed
  const speedRef = useRef(1);
  const [speed, setSpeed] = useState<1 | 2>(1);

  // Logs display
  const [displayLogs, setDisplayLogs] = useState(false);

  const brute1 = useMemo(() => fight && (fight.fighters as unknown as Fighter[])
    .find((fighter) => !fighter.master
      && fighter.id === fight.brute1Id), [fight]);
  const brute2 = useMemo(() => fight && (fight.fighters as unknown as Fighter[])
    .find((fighter) => !fighter.master
      && fighter.id === fight.brute2Id), [fight]);

  // Renderer setup
  useEffect(() => {
    if (!ref.current || !fight) {
      return undefined;
    }
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    const app = new PIXI.Application({
      backgroundColor: 0xfbf7c0,
      width: 500,
      height: 300,
    });
    appRef.current = app;
    ref.current.appendChild(app.view);

    app.ticker.speed = 0.5;

    app.loader
      .add('/images/game/misc.json')
      .add('/images/game/bear.json')
      .add('/images/game/dog.json')
      .add('/images/game/panther.json');

    const addedSpritesheets: string[] = [];
    (fight.fighters as unknown as Fighter[]).forEach((fighter) => {
      if (fighter.type === 'brute') {
        const spritesheet = `/api/spritesheet/${fighter.id}.json`;
        if (!addedSpritesheets.includes(spritesheet)) {
          app.loader.add(spritesheet);
          addedSpritesheets.push(spritesheet);
        }
      }
    });

    app.loader.onLoad.add(() => {
      PIXI.utils.clearTextureCache();
    });

    app.loader.load(setupFight(theme, fight, app, speedRef, setCompleted));

    return () => {
      Tweener.dispose();
      app.destroy(true);
    };
  }, [fight, theme]);

  const toggleAnimation = useCallback(() => {
    setPlaying((prev) => {
      if (prev) {
        appRef.current?.ticker.stop();
      } else {
        appRef.current?.ticker.start();
      }
      return !prev;
    });
  }, []);

  const toggleSpeed = useCallback(() => {
    const newSpeed = speedRef.current === 1 ? 2 : 1;
    speedRef.current = newSpeed;
    setSpeed(newSpeed);
  }, [speedRef]);

  const toggleLogs = useCallback(() => {
    setDisplayLogs((prev) => !prev);
  }, []);

  return (fight) ? (
    <>
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
            {fightSteps?.filter((step) => !['moveTo', 'moveBack'].includes(step.action)).map((step, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Text key={i}>{translateFightStep(step, t)}</Text>
            ))}
          </Box>
        )}
        <Stack
          direction="row"
          sx={{ position: 'absolute', bottom: 0, left: 0, zIndex: 501 }}
        >
          {/* Play/Pause */}
          <Tooltip title={playing ? t('fight.pause') : t('fight.play')}>
            <IconButton onClick={toggleAnimation}>
              {playing ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Tooltip>
          {/* x2 */}
          <Tooltip title={speed === 1 ? 'x2' : 'x1'}>
            <IconButton onClick={toggleSpeed}>
              {speed === 1 ? <FastForward /> : <FastRewind />}
            </IconButton>
          </Tooltip>
        </Stack>
        {/* LOGS TOGGLE */}
        <Tooltip title={t('fight.toggleLogs')}>
          <IconButton onClick={toggleLogs} sx={{ position: 'absolute', bottom: 0, right: 0, zIndex: 501, }}>
            <Rtt />
          </IconButton>
        </Tooltip>
      </Box>
      {completed && brute1 && brute2 && (
        <Box sx={{
          ml: smallScreen ? 0 : 5,
          bgcolor: 'background.paper',
          border: 1,
          display: 'flex',
          justifyContent: 'space-between',
          px: 1,
        }}
        >
          <Link
            to={`/${brute1.name}/cell`}
          >
            <Text component="span" bold color="secondary">{t('bruteCell', { name: brute1.name })}</Text>
          </Link>
          <Link
            to={`/${brute2.name}/cell`}
          >
            <Text component="span" bold color="secondary">{t('bruteCell', { name: brute2.name })}</Text>
          </Link>
        </Box>
      )}
    </>
  ) : null;
};

export default FightComponent;