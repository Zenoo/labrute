import { BrutesGetPupilsResponse, Fighter } from '@labrute/core';
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
  Application, Graphics, InteractionEvent, Sprite, utils
} from 'pixi.js';
import { Tweener } from 'pixi-tweener';
import { AnimationFighter } from '../utils/fight/utils/findFighter';
import { FighterHolder } from '../utils/fight/FighterHolder';

export const DojoView = () => {
  const { t } = useTranslation('dojo');
  const theme = useTheme();
  const { brute } = useBrute();
  const Alert = useAlert();
  const Server = useServer();

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
        } else {
          const row = Math.floor((i - 1) / 3);
          const column = (i - 1) % 3;
          animationFighter.animation.container.x = 280 + column * 80 - (row - 1) * 15;
          animationFighter.animation.container.y = 290 - row * 30;
        }

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
        });
        animationFighter.animation.container.on('mouseout', () => {
          setTooltipName(null);
        });
        animationFighter.animation.container.on('tap', (e: InteractionEvent) => {
          e.stopPropagation();
          setTooltipName(currentBrute.name);
        });

        // Add to stage
        app.stage.addChild(animationFighter.animation.container);

        // Initialize tweener
        Tweener.init(app.ticker);
      }
    });

    return () => {
      Tweener.dispose();
      app.destroy(true, true);
    };
  }, [t, theme, pupils, brute]);

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
