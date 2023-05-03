import { Fighter, FightStep } from '@labrute/core';
import { Fight } from '@labrute/prisma';
import { FastForward, FastRewind, MusicNote, MusicOff, Pause, PlayArrow, Rtt, VolumeOff, VolumeUp } from '@mui/icons-material';
import { Box, IconButton, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { sound } from '@pixi/sound';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import catchError from '../../utils/catchError';
import setupFight from '../../utils/fight/setupFight';
import Server from '../../utils/Server';
import translateFightStep from '../../utils/translateFightStep';
import BruteTooltip from '../Brute/BruteTooltip';
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
  const { user, updateData } = useAuth();
  const Alert = useAlert();

  const fightSteps = fight?.steps as FightStep[] | undefined;

  // Fight status
  const appRef = useRef<PIXI.Application | null>(null);
  const [playing, setPlaying] = useState(true);
  const [completed, setCompleted] = useState(false);

  // Fight speed
  const speedRef = useRef(localStorage.getItem('fightSpeed') === '2' ? 2 : 1);
  const [speed, setSpeed] = useState<1 | 2>(localStorage.getItem('fightSpeed') === '2' ? 2 : 1);

  // Fight sound
  const soundRef = useRef(false);
  const [soundOn, setSoundOn] = useState(false);
  const backgroundMusicRef = useRef(localStorage.getItem('fightBackgroundMusic') !== 'false');
  const [backgroundMusicOn, setBackgroundMusicOn] = useState(backgroundMusicRef.current);

  // Logs display
  const [displayLogs, setDisplayLogs] = useState(false);

  // Brute tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const tooltipBruteRef = useRef<Fighter | null>(null);
  const [tooltipBrute, setTooltipBrute] = useState<Fighter | null>(null);

  // Tooltip
  const toggleTooltip = useCallback((brute: Fighter, forceValue?: boolean) => {
    const previousBruteId = tooltipBruteRef.current?.id;
    tooltipBruteRef.current = brute;
    setTooltipBrute(brute);
    setTooltipOpen((open) => forceValue ?? (previousBruteId !== brute.id ? true : !open));
  }, []);

  const brute1 = useMemo(() => fight && (fight.fighters as unknown as Fighter[])
    .find((fighter) => !fighter.master
      && fighter.id === fight.brute1Id), [fight]);
  const brute2 = useMemo(() => fight && (fight.fighters as unknown as Fighter[])
    .find((fighter) => !fighter.master
      && fighter.id === fight.brute2Id), [fight]);

  // Update settings on user change
  useEffect(() => {
    if (!user) return;

    setSpeed(user.fightSpeed as 1 | 2);
    speedRef.current = user.fightSpeed as 1 | 2;

    setBackgroundMusicOn(user.backgroundMusic);
    backgroundMusicRef.current = user.backgroundMusic;
  }, [user]);

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
      .add('/images/game/thrown-weapons.json')
      .add('/images/game/misc.json')
      .add('/images/game/bear.json')
      .add('/images/game/dog.json')
      .add('/images/game/panther.json');

    const sounds = [
      'background.mp3',
      'arrive.mp3',
      'loose.wav',
      'win.wav',
      'equip.mp3',
      'hit/bear.wav',
      'hit/dog.wav',
      'hit/panther.wav',
      'hit/block.wav',
      'hit/evade.mp3',
      'hit/poison.mp3',
      'hitting/blunt1.wav',
      'hitting/blunt2.wav',
      'hitting/blunt3.wav',
      'hitting/blunt4.wav',
      'hitting/blunt5.wav',
      'hitting/blunt6.wav',
      'hitting/blunt7.wav',
      'hitting/blunt8.wav',
      'hitting/fist1.wav',
      'hitting/fist2.wav',
      'hitting/fist3.wav',
      'hitting/fryingPan.wav',
      'hitting/lance1.wav',
      'hitting/lance2.wav',
      'hitting/piopio.wav',
      'hitting/sharp1.wav',
      'hitting/sharp2.wav',
      'hitting/sharp3.wav',
      'hitting/sharp4.wav',
      'hitting/sharp5.wav',
      'hitting/sharp6.wav',
      'hitting/sharp7.wav',
      'hitting/sharp8.wav',
      'hitting/sharp9.wav',
      'hitting/sword.wav',
      'hitting/trombone1.wav',
      'hitting/trombone2.wav',
      'hitting/whip.wav',
      'move/bear.wav',
      'move/dog.wav',
      'move/panther.wav',
      'skills/bomb.wav',
      'skills/cryOfTheDamned.wav',
      'skills/fierceBrute.wav',
      'skills/flashFlood.wav',
      'skills/hammer.wav',
      'skills/hypnosis.wav',
      'skills/net.wav',
      'skills/saboteur.mp3',
      'skills/tamer.mp3',
      'skills/thief.wav',
      'skills/tragicPotion.wav',
    ];

    sounds.forEach((soundName) => {
      sound.add(soundName.split('.')[0], `/sfx/${soundName}`);
    });

    // Mute all sounds
    sound.volumeAll = 0;
    // Background music
    sound.volume('background', backgroundMusicRef.current ? 1 : 0);

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

    app.loader.load(setupFight(
      theme,
      fight,
      app,
      speedRef,
      setCompleted,
      t,
      toggleTooltip,
    ));

    return () => {
      Tweener.dispose();
      app.destroy(true);

      // Stop all sounds
      sound.stopAll();
    };
  }, [fight, toggleTooltip, t, theme]);

  // Play/pause
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

  // Speed
  const toggleSpeed = useCallback(() => {
    const newSpeed = speedRef.current === 1 ? 2 : 1;
    speedRef.current = newSpeed;
    setSpeed(newSpeed);
    localStorage.setItem('fightSpeed', newSpeed.toString());

    // Update user settings
    if (user) {
      Server.User.changeFightSpeed(newSpeed).then(() => {
        updateData({
          ...user,
          fightSpeed: newSpeed,
        });
      }).catch(catchError(Alert));
    }
  }, [Alert, updateData, user]);

  // Sound
  const toggleSound = useCallback(() => {
    const newSound = !soundRef.current;
    soundRef.current = newSound;
    setSoundOn(newSound);
    sound.volumeAll = newSound ? 1 : 0;
  }, []);

  const toggleBackgroundMusic = useCallback(() => {
    const newBackgroundMusic = !backgroundMusicRef.current;
    backgroundMusicRef.current = newBackgroundMusic;
    setBackgroundMusicOn(newBackgroundMusic);
    sound.volume('background', newBackgroundMusic ? 1 : 0);
    localStorage.setItem('fightBackgroundMusic', newBackgroundMusic.toString());

    // Update user settings
    if (user) {
      Server.User.toggleBackgroundMusic(newBackgroundMusic).then(() => {
        updateData({
          ...user,
          backgroundMusic: newBackgroundMusic,
        });
      }).catch(catchError(Alert));
    }
  }, [Alert, updateData, user]);

  // Logs
  const toggleLogs = useCallback(() => {
    setDisplayLogs((prev) => !prev);
  }, []);

  return (fight) ? (
    <>
      <BruteTooltip
        tooltipSx={{ borderRadius: 0, maxWidth: 200 }}
        open={tooltipOpen}
        fighter={tooltipBrute}
        displaySkills
      >
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
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              zIndex: 501,
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: 4,
              m: 0.5,
            }}
          >
            {/* Play/Pause */}
            <Tooltip title={playing ? t('fight.pause') : t('fight.play')}>
              <IconButton onClick={toggleAnimation} size="small">
                {playing ? <Pause /> : <PlayArrow />}
              </IconButton>
            </Tooltip>
            {/* x2 */}
            <Tooltip title={speed === 1 ? 'x2' : 'x1'}>
              <IconButton onClick={toggleSpeed} size="small">
                {speed === 1 ? <FastForward /> : <FastRewind />}
              </IconButton>
            </Tooltip>
            {/* SOUND */}
            <Tooltip title={soundOn ? t('disableSound') : t('enableSound')}>
              <IconButton onClick={toggleSound} size="small">
                {soundOn ? <VolumeOff /> : <VolumeUp />}
              </IconButton>
            </Tooltip>
            {/* BACKGROUND MUSIC */}
            <Tooltip title={backgroundMusicOn ? t('disableBackgroundMusic') : t('enableBackgroundMusic')}>
              <IconButton onClick={toggleBackgroundMusic} size="small">
                {backgroundMusicOn ? <MusicOff /> : <MusicNote />}
              </IconButton>
            </Tooltip>
          </Stack>
          {/* LOGS TOGGLE */}
          <Stack
            direction="row"
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              zIndex: 501,
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: 4,
              m: 0.5,
            }}
          >
            <Tooltip title={t('fight.toggleLogs')}>
              <IconButton
                onClick={toggleLogs}
                size="small"
              >
                <Rtt />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </BruteTooltip>
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