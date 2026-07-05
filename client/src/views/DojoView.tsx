import {
  BrutesGetPupilsResponse, DOJO_UNLOCKS, Fighter, randomBetween
} from '@labrute/core';
import {
  Box,
  Grid, Paper, Stack, Tooltip, useTheme
} from '@mui/material';
import React, {
  useEffect, useRef, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '../components/Page';
import { Text } from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useBrute } from '../hooks/useBrute';
import { useServer } from '../hooks/useServer';
import { catchError } from '../utils/catchError';
import { Link } from '../components/Link';
import {
  Application, Graphics, Sprite, RenderTexture, Container,
  Spritesheet,
  Assets,
  Color
} from 'pixi.js';
import { AnimationFighter } from '../utils/fight/utils/findFighter';
import { FighterHolder } from '../utils/fight/FighterHolder';
import { updateShadow } from '../utils/fight/utils/updateShadow';
import { useNavigate } from 'react-router';
import { gsap } from 'gsap';

export const DojoView = () => {
  const { t } = useTranslation('dojo');
  const theme = useTheme();
  const { brute } = useBrute();
  const Alert = useAlert();
  const Server = useServer();
  const navigate = useNavigate();

  const container = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const speedRef = useRef(1);
  const [pupils, setPupils] = useState<BrutesGetPupilsResponse | null>(null);
  const [tooltipName, setTooltipName] = useState<string | null>(null);

  // Fetch pupils
  useEffect(() => {
    if (!brute) return;

    Server.Brute.getPupils(brute.name).then((data) => {
      setPupils(data);
    }).catch(catchError(Alert));
  }, [brute, Alert, Server.Brute]);


  // Renderer setup
  useEffect(() => {
    const app = new Application();
    let disposed = false;
    let initialized = false;
    let appDestroyed = false;
    let mountedCanvas: HTMLCanvasElement | null = null;
    let rafId: number | null = null;

    const shouldAbort = () => disposed || !app.stage || app.stage.destroyed;

    const waitNextFrame = async () => new Promise<void>((resolve) => {
      rafId = requestAnimationFrame(() => {
        resolve();
      });
    });

    // Wait until frame pacing is healthy before scheduling more heavy work.
    // This keeps dojo responsive while pupils are progressively generated.
    const waitForFrameHeadroom = async (
      targetMs = 17,
      requiredSmoothFrames = 2,
      maxFrames = 30,
    ) => {
      let smoothFrames = 0;
      let frames = 0;
      let previous = performance.now();

      while (!shouldAbort() && frames < maxFrames) {
        await waitNextFrame();
        const now = performance.now();
        const frameMs = now - previous;
        previous = now;
        frames += 1;

        if (frameMs <= targetMs) {
          smoothFrames += 1;
          if (smoothFrames >= requiredSmoothFrames) {
            return;
          }
        } else {
          smoothFrames = 0;
        }
      }
    };

    const waitForHolderLoaded = async (holder: FighterHolder) => {
      while (!shouldAbort() && !holder.loaded && !holder.container.destroyed) {
        await new Promise((resolve) => {
          setTimeout(resolve, 16);
        });
      }

      return !shouldAbort() && holder.loaded && !holder.container.destroyed;
    };

    const destroyApp = () => {
      if (appDestroyed) {
        return;
      }
      appDestroyed = true;

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
          console.error('Error destroying dojo app', error);
        }
      }

      appRef.current = null;

      if (mountedCanvas && container.current?.contains(mountedCanvas)) {
        container.current.removeChild(mountedCanvas);
      }
      mountedCanvas = null;
    };

    const setup = async () => {
      if (!container.current || !pupils || !brute) {
        return undefined;
      }

      await app.init({
        backgroundColor: 0xfbf7c0,
        width: 505,
        height: 295,
        resolution: window.devicePixelRatio,
      });
      initialized = true;

      if (shouldAbort()) {
        destroyApp();
        return undefined;
      }

      appRef.current = app;
      mountedCanvas = app.canvas;
      container.current.appendChild(mountedCanvas);

      app.ticker.speed = 0.5;

      const spritesheet = await Assets.load('/images/game/dojo.json') as Spritesheet

      if (shouldAbort()) {
        destroyApp();
        return undefined;
      }

      // Load dojo scene

      app.stage.sortableChildren = true;

      // Add background
      const background = new Sprite(spritesheet.textures[`background.jpg`]);
      background.zIndex = -1;

      // Fill screen
      background.width = app.screen.width;
      background.height = app.screen.height;

      app.stage.addChild(background);

      // Add 2px border
      const border = new Graphics()
        .rect(0, 0, app.screen.width, app.screen.height)
        .stroke({ color: new Color(theme.palette.secondary.main), width: 2 });
      border.zIndex = 10002;
      app.stage?.addChild(border);

      // Dojo structures

      // Right beam
      if (pupils.length > DOJO_UNLOCKS[0] - 1) {
        const rightBeam = new Sprite(spritesheet.textures[`beam-right.png`]);
        rightBeam.zIndex = 200;
        app.stage.addChild(rightBeam);
      }

      // Left beam
      if (pupils.length > DOJO_UNLOCKS[1] - 1) {
        const leftBeam = new Sprite(spritesheet.textures[`beam-left.png`]);
        leftBeam.zIndex = 200;
        app.stage.addChild(leftBeam);
      }

      // Temple 1
      if (pupils.length > DOJO_UNLOCKS[2] - 1) {
        const temple1 = new Sprite(spritesheet.textures[`temple-1.png`]);
        temple1.zIndex = 10;
        app.stage.addChild(temple1);
      }

      // Temple 2
      if (pupils.length > DOJO_UNLOCKS[3] - 1) {
        const temple2 = new Sprite(spritesheet.textures[`temple-2.png`]);
        temple2.zIndex = 10;
        app.stage.addChild(temple2);
      }

      // Temple 3
      if (pupils.length > DOJO_UNLOCKS[4] - 1) {
        const temple3 = new Sprite(spritesheet.textures[`temple-3.png`]);
        temple3.zIndex = 5;
        app.stage.addChild(temple3);
      }

      // Temple 4
      // TODO: Reenable this when the assets are ready
      // if (pupils.length > DOJO_UNLOCKS[5] - 1) {
      //   const temple4 = new Sprite(spritesheet.textures[`temple-4.png`]);
      //   temple4.zIndex = 5;
      //   app.stage.addChild(temple4);
      // }

      // Tent
      if (pupils.length > DOJO_UNLOCKS[6] - 1) {
        const tent = new Sprite(spritesheet.textures[`tent.png`]);
        tent.zIndex = 220;
        app.stage.addChild(tent);
      }

      // Master + 9 first pupils
      const firstRenders = [brute, ...pupils.slice(0, 9)];
      for (let i = 0; i < firstRenders.length; i += 1) {
        const currentBrute = firstRenders[i];

        if (!currentBrute) {
          continue;
        }

        const isMaster = i === 0;

        const fighter: Fighter = {
          id: currentBrute.id,
          index: 0,
          team: isMaster ? 'L' : 'R',
          name: currentBrute.name,
          gender: currentBrute.gender,
          body: currentBrute.body,
          colors: currentBrute.colors,
          rank: 0,
          level: 0,
          strength: 0,
          agility: 0,
          speed: 0,
          type: 'brute',
          maxHp: 0,
          hp: 0,
          weapons: {},
          skills: {},
          shield: false,
        };

        const animationFighter: AnimationFighter = {
          ...fighter,
          bustImage: null,
          bust: undefined,
          text: undefined,
          teamWeaponsIllustrations: [],
          teamSkillsIllustrations: [],
          HUDFocused: false,
          skills: {},
          animation: new FighterHolder(
            app,
            fighter,
            speedRef,
          ),
        };


        // Set position
        if (isMaster) {
          animationFighter.animation.container.x = 75;
          animationFighter.animation.container.y = 230;
          animationFighter.animation.container.zIndex = animationFighter.animation.container.y;
        } else {
          const row = Math.floor((i - 1) / 3);
          const column = (i - 1) % 3;
          animationFighter.animation.container.x = 280 + column * 80 - (row - 1) * 15;
          animationFighter.animation.container.y = 290 - row * 30;
          animationFighter.animation.container.zIndex = animationFighter.animation.container.y;
        }

        updateShadow(animationFighter);

        // Animation (train > train2)
        const ready = await waitForHolderLoaded(animationFighter.animation);
        if (!ready) {
          animationFighter.animation.destroy();
          continue;
        }

        animationFighter.animation.on('train:end', () => {
          animationFighter.animation.setAnimation('train2');
        });
        animationFighter.animation.on('train2:end', () => {
          animationFighter.animation.setAnimation('train');
        });
        animationFighter.animation.setAnimation('train');

        // Name on hover
        animationFighter.animation.container.eventMode = 'static';
        animationFighter.animation.container.cursor = 'pointer';
        animationFighter.animation.container.on('pointerover', () => {
          setTooltipName(currentBrute.name);
          if (app.canvas.style) {
            app.canvas.style.cursor = 'pointer';
          }
        });
        animationFighter.animation.container.on('pointerout', () => {
          setTooltipName(null);
          if (app.canvas.style) {
            app.canvas.style.cursor = 'default';
          }
        });
        animationFighter.animation.container.on('pointertap', (e) => {
          e.stopPropagation();
          setTooltipName(currentBrute.name);
          navigate(`/${currentBrute.name}/cell`);
        });

        // Add to stage
        app.stage.addChild(animationFighter.animation.container);
      }

      // Add remaining pupils one by one to avoid blocking the main thread / causing renderer crashes.
      const remainingPupils = pupils.slice(10);
      for (const pupil of remainingPupils) {
        if (shouldAbort()) {
          break;
        }

        await waitForFrameHeadroom();
        if (shouldAbort()) {
          break;
        }

        // Create a temporary FighterHolder, render it to a texture and destroy
        // it immediately to keep visuals while freeing heavy resources.
        const fighter: Fighter = {
          id: pupil.id,
          index: 0,
          team: Math.random() < 0.5 ? 'R' : 'L',
          name: pupil.name,
          gender: pupil.gender,
          body: pupil.body,
          colors: pupil.colors,
          rank: 0,
          level: 0,
          strength: 0,
          agility: 0,
          speed: 0,
          type: 'brute',
          maxHp: 0,
          hp: 0,
          weapons: {},
          skills: {},
          shield: false,
        };

        const tempFH = new FighterHolder(app, fighter, speedRef);

        const tempReady = await waitForHolderLoaded(tempFH);
        if (!tempReady) {
          tempFH.destroy();
          continue;
        }

        // Set pose and pause once assets are ready
        tempFH.setAnimation('win', fighter.gender === 'female' ? 20 : 24);
        tempFH.pause();

        // Position and scaling
        const px = fighter.team === 'R' ? randomBetween(270, 500) : randomBetween(0, 230);
        const py = randomBetween(100, 180);
        tempFH.container.x = px;
        tempFH.container.y = py;

        const scale = 0.3 + (py / 180) * 0.7;
        // Capture scale values before destroying
        const scaleX = (tempFH.container.scale.x) * scale;
        const scaleY = scale;
        tempFH.container.scale.y = scale;
        tempFH.container.scale.x = scaleX;

        // Add temporary FighterHolder to stage so textures can resolve and render
        app.stage.addChild(tempFH.container);

        // Wait one frame to ensure resources are ready, then capture texture
        await waitNextFrame();
        if (shouldAbort()) {
          tempFH.destroy();
          break;
        }

        try {
          // Render into a dedicated RenderTexture so the resulting texture
          // isn't invalidated by shared caches or later texture clearing.
          const bounds = tempFH.container.getLocalBounds();
          const rt = RenderTexture.create({
            width: Math.max(1, Math.ceil(bounds.width)),
            height: Math.max(1, Math.ceil(bounds.height)),
            resolution: app.renderer.resolution,
          });

          // Wrap the container so we can render its local bounds into the RT
          const wrapper = new Container();
          wrapper.addChild(tempFH.container);
          // Offset so content aligns to RT origin
          tempFH.container.x = -bounds.x;
          tempFH.container.y = -bounds.y;

          app.renderer.render({
            container: wrapper,
            target: rt,
          });

          const sprite = new Sprite(rt);
          sprite.x = px;
          sprite.y = py;
          sprite.zIndex = sprite.y;
          sprite.scale.set(fighter.team === 'R' ? -scaleX : scaleX, scaleY);
          sprite.anchor.set(0.5, 1);

          // Add the sprite BEFORE destroying the FighterHolder so the renderer
          // keeps the generated texture alive.
          app.stage.addChild(sprite);

          // Remove temporary wrapper and restore positions
          wrapper.removeChild(tempFH.container);
          tempFH.container.x = px;
          tempFH.container.y = py;
        } catch (e) {
          console.error('Error generating pupil texture', e);
        }

        // Destroy the heavy FighterHolder
        tempFH.destroy();
      }
    };
    setup().catch((err) => {
      if (!disposed) {
        console.error('Error setting up dojo view', err);
      }
    });

    return () => {
      disposed = true;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      destroyApp();
    };
  }, [t, theme, pupils, brute, navigate]);

  return brute && (
    <Page title={t('dojo', { name: brute.name })} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('pupils', { name: brute.name })}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
            <Stack spacing={1} sx={{ alignItems: 'center' }}>
              <Tooltip title={tooltipName ?? ''} open={!!tooltipName}>
                <Box
                  ref={container}
                  sx={{
                    alignSelf: 'center',
                    position: 'relative',
                    fontSize: 0,
                    maxWidth: 505,
                    '& canvas': {
                      maxWidth: '100%',
                    }
                  }}
                />
              </Tooltip>
              <Link
                to={`/${brute.name}/cell`}
              >
                <Text component="span" bold color="secondary">{t('backToCell')}</Text>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Text bold>{t('recruit')}</Text>

              <Paper sx={{
                p: 1,
                mr: 0,
                ml: 4,
                bgcolor: 'background.paperAccent',
                textAlign: 'center',
              }}
              >
                <Text bold sx={{ wordBreak: 'break-word' }}>{`${window.location.origin}?ref=${brute.name}`}</Text>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};
