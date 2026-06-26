import {
  Fighter, FightGetResponse, FightStep, StepType
} from '@labrute/core';
import {
  FastForward, FastRewind, Favorite, FavoriteBorder,
  MusicNote, MusicOff, Pause, PlayArrow, Rtt, VolumeOff, VolumeUp
} from '@mui/icons-material';
import {
  Box, IconButton, Stack, Tooltip, useMediaQuery, useTheme
} from '@mui/material';
import { sound } from '@pixi/sound';
import {
  Application, Assets, Spritesheet
} from 'pixi.js';
import React, {
  useCallback, useEffect, useMemo, useRef, useState
} from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { LS_KEY_FIGHT_BACKGROUND_MUSIC, LS_KEY_FIGHT_SPEED } from '../../utils/constants';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useRenderer } from '../../hooks/useRenderer';
import { translateFightStep } from '../../utils/translateFightStep';
import { BruteTooltip } from '../Brute/BruteTooltip';
import { Link } from '../Link';
import { Text } from '../Text';
import { sfx } from './sfx';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import { BruteName } from '../Brute/BruteName';
import { setupFight } from '../../utils/fight/setupFight';
import { Spritesheets } from '../../utils/fight/utils/spritesheet';
import { setFightDisposing } from '../../utils/fight/utils/lifecycle';
import { gsap } from 'gsap';

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
  'panther',
  'haste',
  'chaining',
  'win',
  'equip',
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

export type FightComponentProps = {
  fight: FightGetResponse | null;
}

export const FightComponent = ({
  fight,
}: FightComponentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const smallScreen = useMediaQuery('(max-width: 935px)');
  const { t } = useTranslation();
  const { user, updateData } = useAuth();
  const Alert = useAlert();
  const renderer = useRenderer();
  const Server = useServer();

  const fightSteps = useMemo(() => (fight
    ? JSON.parse(fight.steps) as FightStep[]
    : undefined), [fight]);

  // Fight status
  const appRef = useRef<Application | null>(null);
  const [playing, setPlaying] = useState(true);

  // Fight speed
  const speedRef = useRef(localStorage.getItem(LS_KEY_FIGHT_SPEED) === '1' ? 1 : 2);
  const [speed, setSpeed] = useState<1 | 2>(localStorage.getItem(LS_KEY_FIGHT_SPEED) === '1' ? 1 : 2);

  // Fight sound
  const soundRef = useRef(false);
  const [soundOn, setSoundOn] = useState(false);
  const backgroundMusicRef = useRef(localStorage.getItem(LS_KEY_FIGHT_BACKGROUND_MUSIC) !== 'false');
  const [backgroundMusicOn, setBackgroundMusicOn] = useState(backgroundMusicRef.current);

  // Logs display
  const [displayLogs, setDisplayLogs] = useState(false);

  // Brute tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipBrute, setTooltipBrute] = useState<Fighter | null>(null);
  const tooltipOpenRef = useRef(false);
  const tooltipBruteRef = useRef<Fighter | null>(null);

  // Favorite
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!user || !fight) return;
    setFavorite(fight.favoritedBy.some((f) => f.id === user.id));
  }, [fight, user]);

  const toggleFavorite = useCallback(async () => {
    if (!user || !fight) return;

    try {
      await Server.Fight.toggleFavorite(fight.id);

      setFavorite((prev) => {
        const newFav = !prev;

        Alert.open('success', t(`fight.${newFav ? 'favoriteAdded' : 'favoriteRemoved'}`));

        return newFav;
      });
    } catch (error) {
      catchError(Alert, error);
    }
  }, [Alert, fight, Server.Fight, t, user]);

  // Tooltip
  const toggleTooltip = useCallback((brute: Fighter, open: boolean) => {
    const previousBruteId = tooltipBruteRef.current?.id;

    if (brute.id !== previousBruteId) {
      tooltipBruteRef.current = brute;
      setTooltipBrute(brute);
    } else if (open === tooltipOpenRef.current) {
      return;
    }

    tooltipOpenRef.current = open;
    setTooltipOpen(open);
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
    const app = new Application();
    let disposed = false;
    let initialized = false;
    let appDestroyed = false;
    let mountedCanvas: HTMLCanvasElement | null = null;

    const destroyApp = () => {
      if (appDestroyed) {
        return;
      }
      appDestroyed = true;

      // Stop all active animation callbacks before touching PIXI objects.
      gsap.killTweensOf('*');
      gsap.globalTimeline.clear();

      if (initialized) {
        app.stage?.removeAllListeners();
        app.ticker?.stop();

        try {
          app.destroy(
            { removeView: false },
            {
              children: true,
              texture: false,
              textureSource: false,
              context: true,
            }
          );
        } catch (error) {
          console.error('Error destroying fight app', error);
        }
      }

      appRef.current = null;

      if (mountedCanvas && ref.current?.contains(mountedCanvas)) {
        ref.current.removeChild(mountedCanvas);
      }
      mountedCanvas = null;
    };

    const setup = async () => {
      if (!ref.current || !fight || disposed) {
        return undefined;
      }

      setFightDisposing(false);

      await app.init({
        backgroundColor: 0xfbf7c0,
        width: 500,
        height: 300,
        resolution: window.devicePixelRatio,
      });
      initialized = true;

      if (disposed) {
        destroyApp();
        return undefined;
      }

      appRef.current = app;
      mountedCanvas = app.canvas;
      ref.current.appendChild(mountedCanvas);

      app.ticker.speed = 0.5;

      const spritesheets: Spritesheets = {
        thrownWeapons: await Assets.load('/images/game/thrown-weapons.json') as Spritesheet,
        misc: await Assets.load('/images/game/misc.json') as Spritesheet,
        skills: await Assets.load('/images/game/skills.json') as Spritesheet,
      };

      if (!spritesheets.thrownWeapons || !spritesheets.misc || !spritesheets.skills) {
        console.warn(spritesheets);
        throw new Error('Spritesheets not found');
      }

      if (disposed) {
        destroyApp();
        return undefined;
      }

      // Register shared sounds once; reuse across remount/HMR.
      if (!sound.exists('background')) {
        sound.add('background', '/sfx/background.mp3');
      }

      // build sounds from sprites
      const spritesNew: { [key: string]: { start: number; end: number; loop: boolean } } = {};
      sounds.forEach((soundName) => {
        spritesNew[soundName] = {
          start: sfx.spritemap[soundName]?.start ?? 0,
          end: sfx.spritemap[soundName]?.end ?? 0,
          loop: sfx.spritemap[soundName]?.loop ?? false
        };
      });

      if (!sound.exists('sfx')) {
        sound.add('sfx', { url: sfx.resources[0], sprites: spritesNew, preload: true });
      }

      // Mute all sounds
      sound.volumeAll = 0;
      // Background music
      sound.volume('background', backgroundMusicRef.current ? 1 : 0);

      if (disposed) {
        destroyApp();
        return undefined;
      }

      await setupFight(
        theme,
        fight,
        app,
        speedRef,
        t,
        toggleTooltip,
        renderer,
        spritesheets,
        () => disposed,
      );

      return undefined;
    };
    setup().catch((error) => {
      if (!disposed) {
        console.error('Error setting up fight:', error);
      }
    });

    return () => {
      disposed = true;
      setFightDisposing(true);
      destroyApp();

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
  const toggleSpeed = useCallback(async () => {
    const newSpeed = speedRef.current === 1 ? 2 : 1;
    speedRef.current = newSpeed;
    setSpeed(newSpeed);
    localStorage.setItem(LS_KEY_FIGHT_SPEED, newSpeed.toString());

    // Update user settings
    if (!user) return;

    try {
      await Server.User.changeFightSpeed(newSpeed);
      updateData({
        ...user,
        fightSpeed: newSpeed,
      });
    } catch (error) {
      catchError(Alert, error);
    }
  }, [Alert, Server.User, updateData, user]);

  // Sound
  const toggleSound = useCallback(() => {
    const newSound = !soundRef.current;
    soundRef.current = newSound;
    setSoundOn(newSound);
    sound.volumeAll = newSound ? 1 : 0;
  }, []);

  const toggleBackgroundMusic = useCallback(async () => {
    const newBackgroundMusic = !backgroundMusicRef.current;
    backgroundMusicRef.current = newBackgroundMusic;
    setBackgroundMusicOn(newBackgroundMusic);
    sound.volume('background', newBackgroundMusic ? 1 : 0);
    localStorage.setItem(LS_KEY_FIGHT_BACKGROUND_MUSIC, newBackgroundMusic.toString());

    // Update user settings
    if (!user) return;

    try {
      await Server.User.toggleBackgroundMusic(newBackgroundMusic);
      updateData({
        ...user,
        backgroundMusic: newBackgroundMusic,
      });
    } catch (error) {
      catchError(Alert, error);
    }
  }, [Alert, Server.User, updateData, user]);

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
            <Text component="span" bold color="secondary">
              <Trans
                i18nKey="bruteCell"
                components={{
                  name: <BruteName brute={brute1} />
                }}
              />
            </Text>
          </Link>
          {brute2 && (
            <Link
              to={`/${brute2.name}/cell`}
            >
              <Text component="span" bold color="secondary">
                <Trans
                  i18nKey="bruteCell"
                  components={{
                    name: <BruteName brute={brute2} />
                  }}
                />
              </Text>
            </Link>
          )}
        </Box>
      )}
    </>
  ) : null;
};
