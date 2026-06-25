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
  Application, Graphics, InteractionEvent, Sprite, utils, RenderTexture, Container
} from 'pixi.js';
import { AnimationFighter } from '../utils/fight/utils/findFighter';
import { FighterHolder } from '../utils/fight/FighterHolder';
import { updateShadow } from '../utils/fight/utils/updateShadow';
import { useNavigate } from 'react-router-dom';

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
    if (!container.current || !pupils || !brute) {
      return undefined;
    }

    const app = new Application({
      backgroundColor: 0xfbf7c0,
      width: 505,
      height: 295,
      resolution: window.devicePixelRatio,
    });
    appRef.current = app;
    container.current.appendChild(app.view);

    app.ticker.speed = 0.5;

    app.loader
      .add('/images/game/dojo.json');

    app.loader.onLoad.add(() => {
      utils.clearTextureCache();
    });

    let rafId: number | null = null;

    // Load dojo scene
    app.loader.load((loader, resources) => {
      if (!loader) {
        return;
      }

      // Spritesheet
      const spritesheet = resources['/images/game/dojo.json']?.spritesheet;

      if (!spritesheet) {
        console.error('Failed to load dojo spritesheet');
        return;
      }

      app.stage.sortableChildren = true;

      // Add background
      const background = new Sprite(spritesheet.textures[`background.jpg`]);
      background.zIndex = -1;

      // Fill screen
      background.width = app.screen.width;
      background.height = app.screen.height;

      app.stage.addChild(background);

      // Add 2px border
      const border = new Graphics();
      border.lineStyle(2, utils.string2hex(theme.palette.secondary.main));
      border.drawRect(0, 0, app.screen.width, app.screen.height);
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
      if (pupils.length > DOJO_UNLOCKS[5] - 1) {
        const temple4 = new Sprite(spritesheet.textures[`temple-4.png`]);
        temple4.zIndex = 5;
        app.stage.addChild(temple4);
      }

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
        animationFighter.animation.on('train:end', () => {
          animationFighter.animation.setAnimation('train2');
        });
        animationFighter.animation.on('train2:end', () => {
          animationFighter.animation.setAnimation('train');
        });
        animationFighter.animation.setAnimation('train');

        // Name on hover
        animationFighter.animation.container.interactive = true;
        animationFighter.animation.container.on('mouseover', () => {
          setTooltipName(currentBrute.name);
          app.renderer.view.style.cursor = 'pointer';
        });
        animationFighter.animation.container.on('mouseout', () => {
          setTooltipName(null);
          app.renderer.view.style.cursor = 'default';
        });
        animationFighter.animation.container.on('tap', (e: InteractionEvent) => {
          e.stopPropagation();
          setTooltipName(currentBrute.name);
        });

        // Navigate to pupil cell on click
        animationFighter.animation.container.on('click', () => {
          navigate(`/${currentBrute.name}/cell`);
        });

        // Add to stage
        app.stage.addChild(animationFighter.animation.container);
      }

      // Add remaining pupils one by one to avoid blocking the main thread / causing renderer crashes.
      const remainingPupils = pupils.slice(10);

      const addPupil = () => {
        const pupil = remainingPupils.shift();

        if (!pupil) {
          return;
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

        // Set pose and pause
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
        requestAnimationFrame(() => {
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

            app.renderer.render(wrapper, { renderTexture: rt, clear: true });

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

            // Destroy the heavy FighterHolder
            tempFH.destroy();
          } catch (e) {
            console.error('Error generating pupil texture', e);
          }

          if (remainingPupils.length > 0) {
            // Wait a bit before adding the next pupil to avoid blocking the main thread.
            setTimeout(() => {
              rafId = requestAnimationFrame(addPupil);
            }, 50);
          }
        });
      };

      rafId = requestAnimationFrame(addPupil);
    });

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      app.destroy(true, true);
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
