import {
  Fighter, FightGetResponse, FightStep, StepType
} from '@labrute/core';
import {
  FastForward, FastRewind, Favorite, FavoriteBorder,
  MusicNote, MusicOff, Pause, PlayArrow, Replay, Rtt, VolumeOff, VolumeUp
} from '@mui/icons-material';
import {
  Box, CircularProgress, IconButton, Slider, Stack, Tooltip, useMediaQuery, useTheme
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
import { SkillTooltip } from '../Brute/SkillTooltip';
import { WeaponTooltip } from '../Brute/WeaponTooltip';
import { Link } from '../Link';
import { Text } from '../Text';
import { sfx } from './sfx';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import { BruteName } from '../Brute/BruteName';
import { setupFight } from '../../utils/fight/setupFight';
import { Spritesheets } from '../../utils/fight/utils/spritesheet';
import { setFightDisposing } from '../../utils/fight/utils/lifecycle';
import { FightTooltipTarget, ToggleFightTooltip } from '../../utils/fight/utils/fightTooltip';
import { FightClock } from '../../utils/fight/utils/FightClock';

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

const SHOW_FIGHT_PERFORMANCE_STATS = localStorage.getItem('showFightPerformanceStats') === 'true';

const loadFightSpritesheet = async (path: string, cachePrefix: string): Promise<Spritesheet> => {
  const spritesheet = await Assets.load({
    src: path,
    data: { cachePrefix },
  }) as Spritesheet;

  return spritesheet;
};

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
  const [ready, setReady] = useState(false);
  const [ended, setEnded] = useState(false);
  const [firstWatch, setFirstWatch] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrubPosition, setScrubPosition] = useState<number | null>(null);
  const [playbackRequest, setPlaybackRequest] = useState<{
    fightId: string; step: number;
  } | null>(null);

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

  // Fight tooltip
  const [tooltipTarget, setTooltipTarget] = useState<FightTooltipTarget | null>(null);

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
  const toggleTooltip = useCallback<ToggleFightTooltip>((target, open) => {
    setTooltipTarget((previous) => (open ? target : (
      !target || previous === target ? null : previous
    )));
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
    let clock: FightClock | null = null;
    const targetStep = playbackRequest && playbackRequest.fightId === fight?.id
      ? playbackRequest.step : 0;
    let seeking = targetStep > 0;

    setReady(false);
    setEnded(false);
    setPlaying(true);
    setProgress(targetStep);
    setScrubPosition(null);
    setTooltipTarget(null);

    const destroyApp = () => {
      if (appDestroyed || !initialized) {
        return;
      }
      appDestroyed = true;

      clock?.destroy();

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

      if (appRef.current === app) appRef.current = null;

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
      clock = new FightClock(app);
      mountedCanvas = app.canvas;
      ref.current.appendChild(mountedCanvas);

      app.ticker.speed = 0.5;

      const spritesheets: Spritesheets = {
        thrownWeapons: await loadFightSpritesheet('/images/game/thrown-weapons.json', 'fight/thrownWeapons/'),
        misc: await loadFightSpritesheet('/images/game/misc.json', 'fight/misc/'),
        skills: await loadFightSpritesheet('/images/game/skills.json', 'fight/skills/'),
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
      sound.volumeAll = seeking ? 0 : (soundRef.current ? 1 : 0);
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
        SHOW_FIGHT_PERFORMANCE_STATS,
        () => disposed,
        {
          onReady: () => {
            if (disposed) return;
            if (seeking) {
              clock?.seek(() => seeking && !disposed).catch((error: unknown) => {
                if (!disposed) {
                  seeking = false;
                  console.error('Error seeking fight:', error);
                  catchError(Alert, error);
                }
              });
            } else {
              setReady(true);
            }
          },
          onStep: (index) => {
            if (disposed) return;
            if (seeking && index >= targetStep) {
              seeking = false;
              sound.stop('sfx');
              sound.volumeAll = soundRef.current ? 1 : 0;
              setReady(true);
            }
            if (!seeking) setProgress(index);
          },
          onComplete: () => {
            if (disposed) return;
            setEnded(true);
            setFirstWatch(false);
            setPlaying(false);
          },
        },
      );

      return undefined;
    };
    setup().catch((error) => {
      if (!disposed) {
        seeking = false;
        console.error('Error setting up fight:', error);
        catchError(Alert, error);
      }
    });

    return () => {
      disposed = true;
      setFightDisposing(true);
      destroyApp();

      // Stop all sounds
      sound.stopAll();
    };
  }, [Alert, fight, playbackRequest, toggleTooltip, t, theme, renderer]);

  const seek = useCallback((step: number) => {
    if (!fight) return;
    setPlaybackRequest({ fightId: fight.id, step });
  }, [fight]);

  // Play/pause
  const toggleAnimation = useCallback(() => {
    if (ended) {
      seek(0);
      return;
    }
    setPlaying((prev) => {
      if (prev) {
        appRef.current?.ticker.stop();
      } else {
        appRef.current?.ticker.start();
      }
      return !prev;
    });
  }, [ended, seek]);

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
    sound.volumeAll = ready && newSound ? 1 : 0;
  }, [ready]);

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

  // Scrubber methods
  const getScrubberAriaLabel = useCallback((value: number) => `${Math.round(value / (fightSteps?.length || 1) * 100)}%`, [fightSteps?.length]);

  const onScrubberChange = useCallback((_event: Event, value: number | number[]) => {
    if (typeof value === 'number') setScrubPosition(value);
  }, []);

  const onScrubberCommit = useCallback((
    _event: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    if (typeof value === 'number') {
      setScrubPosition(null);
      seek(value);
    }
  }, [seek]);

  return (fight) ? (
    <>
      {/* Hidden typographies */}
      <Text typo="Blocky" sx={{ display: 'none' }}> </Text>
      {/* Fight */}
      <BruteTooltip
        tooltipSx={{ borderRadius: 0, maxWidth: 200, px: 1, py: 0.5 }}
        open={tooltipTarget?.type === 'brute'}
        fighter={tooltipTarget?.type === 'brute' ? tooltipTarget.fighter : null}
        displaySkills
      >
        <SkillTooltip
          open={tooltipTarget?.type === 'skill'}
          skill={tooltipTarget?.type === 'skill' ? tooltipTarget.skill : null}
          tier={tooltipTarget?.type === 'skill' ? tooltipTarget.tier : undefined}
        >
          <WeaponTooltip
            open={tooltipTarget?.type === 'weapon'}
            weapon={tooltipTarget?.type === 'weapon' ? tooltipTarget.weapon : null}
            tier={tooltipTarget?.type === 'weapon' ? tooltipTarget.tier : undefined}
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
                  visibility: ready ? 'visible' : 'hidden',
                }
              }}
            >
              {!ready && (
                <CircularProgress
                  size={24}
                  sx={{ position: 'absolute', top: '50%', left: '50%', ml: '-12px', mt: '-12px' }}
                />
              )}
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
                  {fightSteps
                    ?.filter((step) => ![StepType.Move, StepType.MoveBack].includes(step.a))
                    .map((step, i) => (

                      <Text key={i}>{translateFightStep(fighters || [], step, t)}</Text>
                    ))}
                </Box>
              )}
              <Stack
                direction="row"
                sx={{
                  position: 'absolute',
                  bottom: firstWatch ? 0 : 12,
                  left: 0,
                  zIndex: 501,
                  bgcolor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: 4,
                  m: 0.5,
                }}
              >
                {/* Play/Pause */}
                <Tooltip title={ended ? t('fight.replay') : playing ? t('fight.pause') : t('fight.play')}>
                  <span>
                    <IconButton
                      onClick={toggleAnimation}
                      size="small"
                      disabled={!ready}
                      aria-label={ended ? t('fight.replay') : playing ? t('fight.pause') : t('fight.play')}
                    >
                      {ended ? <Replay /> : playing ? <Pause /> : <PlayArrow />}
                    </IconButton>
                  </span>
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
                  bottom: firstWatch ? 0 : 12,
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
              {!firstWatch && (
                <Slider
                  aria-label={t('fight.seek')}
                  getAriaValueText={getScrubberAriaLabel}
                  min={0}
                  max={fightSteps?.length ?? 1}
                  step={1}
                  value={scrubPosition ?? progress}
                  disabled={!ready || !fightSteps?.length}
                  onChange={onScrubberChange}
                  onChangeCommitted={onScrubberCommit}
                  size="small"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    width: 'calc(100% - 20px)',
                    height: 3,
                    py: '6px',
                    zIndex: 502,
                    '& .MuiSlider-thumb': {
                      width: 8,
                      height: 8,
                      '&::after': { width: 28, height: 28 },
                    },
                    '& .MuiSlider-rail': { opacity: 0.5 },
                  }}
                />
              )}
            </Box>
          </WeaponTooltip>
        </SkillTooltip>
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
