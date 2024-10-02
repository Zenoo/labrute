import { Fighter, FightGetResponse, FightStep, StepType } from '@labrute/core';
import { FastForward, FastRewind, Favorite, FavoriteBorder, MusicNote, MusicOff, Pause, PlayArrow, Rtt, VolumeOff, VolumeUp } from '@mui/icons-material';
import { Box, IconButton, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { sound } from '@pixi/sound';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useRenderer } from '../../hooks/useRenderer';
import catchError from '../../utils/catchError';
import setupFight from '../../utils/fight/setupFight';
import Server from '../../utils/Server';
import translateFightStep from '../../utils/translateFightStep';
import BruteTooltip from '../Brute/BruteTooltip';
import Link from '../Link';
import Text from '../Text';
import sfx from './sfx';

const sounds = [
  'arrive',
  'loose',
  'block1',
  'block2',
  'block3',
  'block4',
  'axe1',
  'spy',
  'axe2',
  'shuriken',
  'baton1',
  'baton2',
  'baton3',
  'broadsword1',
  'broadsword2',
  'scimitar1',
  'scimitar2',
  'fan1',
  'fan2',
  'fryingPan1',
  'fryingPan2',
  'hatchet1',
  'hatchet2',
  'keyboard1',
  'keyboard2',
  'knife1',
  'knife2',
  'leek',
  'mammothBone',
  'noodleBowl1',
  'noodleBowl2',
  'racquet',
  'sharp9',
  'panther',
  'haste',
  'chaining',
  'win',
  'equip',
  'block',
  'evade',
  'poison',
  'blunt1',
  'blunt2',
  'blunt3',
  'blunt4',
  'blunt5',
  'blunt6',
  'blunt7',
  'blunt8',
  'fist1',
  'fist2',
  'fist3',
  'fryingPan',
  'lance1',
  'lance2',
  'piopio',
  'sharp1',
  'sharp2',
  'sharp3',
  'sharp4',
  'sharp5',
  'sharp6',
  'sharp7',
  'sharp8',
  'sword',
  'trombone1',
  'trombone2',
  'whip',
  'bear',
  'dog',
  'bomb',
  'cryOfTheDamned',
  'fierceBrute',
  'flashFlood',
  'hammer',
  'hypnosis',
  'net',
  'saboteur',
  'tamer1',
  'tamer2',
  'thief',
  'tragicPotion',
  'vampirism'
];

export interface FightComponentProps {
  fight: FightGetResponse | null;
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
  const renderer = useRenderer();

  const fightSteps = useMemo(() => (fight
    ? JSON.parse(fight.steps) as FightStep[]
    : undefined), [fight]);

  // Fight status
  const appRef = useRef<PIXI.Application | null>(null);
  const [playing, setPlaying] = useState(true);

  // Fight speed
  const speedRef = useRef(localStorage.getItem('fightSpeed') === '1' ? 1 : 2);
  const [speed, setSpeed] = useState<1 | 2>(localStorage.getItem('fightSpeed') === '1' ? 1 : 2);

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

  // Favorite
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!user || !fight) return;
    setFavorite(fight.favoritedBy.some((f) => f.id === user.id));
  }, [fight, user]);

  const toggleFavorite = useCallback(() => {
    if (!user || !fight) return;

    Server.Fight.toggleFavorite(fight.id).then(() => {
      setFavorite((prev) => {
        const newFav = !prev;

        Alert.open('success', t(`fight.${newFav ? 'favoriteAdded' : 'favoriteRemoved'}`));

        return newFav;
      });
    }).catch(catchError(Alert));
  }, [Alert, fight, t, user]);

  // Tooltip
  const toggleTooltip = useCallback((brute: Fighter, forceValue?: boolean) => {
    const previousBruteId = tooltipBruteRef.current?.id;
    tooltipBruteRef.current = brute;
    setTooltipBrute(brute);
    setTooltipOpen((open) => forceValue ?? (previousBruteId !== brute.id ? true : !open));
  }, []);

  const fighters = useMemo(() => (fight
    ? JSON.parse(fight.fighters) as Fighter[]
    : undefined), [fight]);

  const brute1 = useMemo(() => fight && fighters && fighters
    .find((fighter) => !fighter.master
      && fighter.id === fight.brute1Id), [fight, fighters]);
  const brute2 = useMemo(() => fight && fighters && fighters
    .find((fighter) => !fighter.master
      && fighter.id === fight.brute2Id), [fight, fighters]);

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

    const app = new PIXI.Application({
      backgroundColor: 0xfbf7c0,
      width: 500,
      height: 300,
      resolution: window.devicePixelRatio,
    });
    appRef.current = app;
    ref.current.appendChild(app.view);

    app.ticker.speed = 0.5;

    app.loader
      .add('/images/game/thrown-weapons.json')
      .add('/images/game/misc.json');

    // Add background music, no sprites
    sound.add('background', '/sfx/background.mp3');

    // build sounds from sprites
    const spritesNew: { [key: string]: { start: number; end: number; loop: boolean } } = {};
    sounds.forEach((soundName) => {
      spritesNew[soundName] = {
        start: sfx.spritemap[soundName]?.start ?? 0,
        end: sfx.spritemap[soundName]?.end ?? 0,
        loop: sfx.spritemap[soundName]?.loop ?? false
      };
    });

    sound.add('sfx', { url: sfx.resources[0], sprites: spritesNew, preload: true });

    // Mute all sounds
    sound.volumeAll = 0;
    // Background music
    sound.volume('background', backgroundMusicRef.current ? 1 : 0);

    app.loader.onLoad.add(() => {
      PIXI.utils.clearTextureCache();
    });

    app.loader.load(setupFight(
      theme,
      fight,
      app,
      speedRef,
      t,
      toggleTooltip,
      renderer,
    ));

    return () => {
      Tweener.dispose();
      app.destroy(true, true);

      // Stop all sounds
      sound.stopAll();
    };
  }, [fight, toggleTooltip, t, theme, renderer]);

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
      {/* Hidden typographies */}
      <Text typo="Blocky" sx={{ display: 'none' }}> </Text>
      {/* Fight */}
      <BruteTooltip
        tooltipSx={{ borderRadius: 0, maxWidth: 200, px: 1, py: 0.5 }}
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
              {fightSteps?.filter((step) => ![StepType.Move, StepType.MoveBack].includes(step.a))
                .map((step, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Text key={i}>{translateFightStep(fighters || [], step, t)}</Text>
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
            {/* Favorite */}
            {user && (
              <Tooltip title={isFavorite ? t('fight.unfavorite') : t('fight.favorite')}>
                <IconButton onClick={toggleFavorite} size="small">
                  {isFavorite ? <FavoriteBorder /> : <Favorite />}
                </IconButton>
              </Tooltip>
            )}
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
      {brute1 && (
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
          {brute2 && (
            <Link
              to={`/${brute2.name}/cell`}
            >
              <Text component="span" bold color="secondary">{t('bruteCell', { name: brute2.name })}</Text>
            </Link>
          )}
        </Box>
      )}
    </>
  ) : null;
};

export default FightComponent;
