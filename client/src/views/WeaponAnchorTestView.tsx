import { ANIMATION_ANCHORS, Animation, Animations, Fighter, WEAPON_ANCHOR, WEAPON_ANIMATIONS } from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Stack, TextField, Typography } from '@mui/material';
import { BevelFilter } from '@pixi/filter-bevel';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import Text from '../components/Text';

/**
 * WeaponAnchorTestView component
 */
const WeaponAnchorTestView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = React.useState(1);
  const [animation, setAnimation] = React.useState<Animation>('run');
  const [gender, setGender] = React.useState<Gender>(Gender.male);
  const [anchorX, setAnchorX] = React.useState(0);
  const [anchorY, setAnchorY] = React.useState(0);
  const [rotation, setRotation] = React.useState(0);
  const [behind, setBehind] = React.useState(false);
  const [zoom, setZoom] = React.useState(1);

  const changeFrame = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFrame(+event.target.value);
  }, []);

  const changeGender = useCallback((event: SelectChangeEvent) => {
    setGender(event.target.value as Gender);
  }, []);

  const changeAnimation = useCallback((event: SelectChangeEvent) => {
    setAnimation(event.target.value as Animation);
  }, []);

  const changeAnchorX = useCallback((event: Event, newValue: number | number[]) => {
    setAnchorX(newValue as number);
  }, []);

  const changeAnchorY = useCallback((event: Event, newValue: number | number[]) => {
    setAnchorY(newValue as number);
  }, []);

  const changeRotation = useCallback((event: Event, newValue: number | number[]) => {
    setRotation(newValue as number);
  }, []);

  const changeBehind = useCallback(() => {
    setBehind((prev) => !prev);
  }, []);

  const changeZoom = useCallback((event: Event, newValue: number | number[]) => {
    setZoom(newValue as number);
  }, []);

  const copyValues = useCallback(() => {
    navigator.clipboard.writeText(`
    { anchor: [${anchorX}, ${anchorY}], rotation: ${rotation}${behind ? ', behind: true' : ''} },`).catch(console.error);
  }, [anchorX, anchorY, behind, rotation]);

  // Renderer setup
  useEffect(() => {
    if (!ref.current) {
      return undefined;
    }
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

    const app = new PIXI.Application({
      backgroundColor: 0xfbf7c0,
      width: 1000,
      height: 600,
    });
    ref.current.appendChild(app.view);

    app.ticker.speed = 0.5;

    app.loader
      .add('/images/game/misc.json');

    [3303, 3302].forEach((bruteId) => {
      const spritesheet = `/api/spritesheet/${bruteId}.json`;
      app.loader.add(spritesheet);
    });

    app.loader.onLoad.add(() => {
      PIXI.utils.clearTextureCache();
    });

    app.loader.load(() => {
      const male = {
        id: 3303,
      } as Fighter;
      const female = {
        id: 3302,
      } as Fighter;

      const fighter = gender === Gender.male ? male : female;

      const { loader: { resources: { '/images/game/misc.json': { spritesheet: miscSpritesheet } } } } = app;

      if (!miscSpritesheet) {
        throw new Error('Spritesheet not found');
      }

      const { loader: { resources: {
        [`/api/spritesheet/${fighter.id}.json`]: { spritesheet }
      } } } = app;

      if (!spritesheet) {
        throw new Error(`Sprite not found: ${fighter.id}`);
      }

      // Load every frame for the current animation
      WEAPON_ANIMATIONS[gender][animation].forEach((f, i) => {
        const container = new PIXI.Container();
        container.sortableChildren = true;

        // Place the container (10 per row)
        container.x = 50 + (i % 10) * 100;
        container.y = (Math.floor(i / 10) + 1) * 100;
        app.stage.addChild(container);

        // Add brute
        const sprite = new PIXI.Sprite(spritesheet.textures[`${animation}_${gender}_${i + 1}.png`]);
        sprite.filters = [new BevelFilter()];
        sprite.zIndex = 2;
        container.addChild(sprite);

        // Add weapon
        const texture = miscSpritesheet.textures['lance.png'];
        texture.baseTexture.scaleMode = PIXI.SCALE_MODES.LINEAR;
        const weaponSprite = new PIXI.Sprite(texture);
        weaponSprite.anchor.x = WEAPON_ANCHOR.x;
        weaponSprite.anchor.y = WEAPON_ANCHOR.y;
        weaponSprite.visible = false;
        container.addChild(weaponSprite);

        // Place weapon
        const spriteData = f;

        if (!spriteData) {
          weaponSprite.x = 0;
          weaponSprite.y = 0;
          weaponSprite.angle = 0;
          weaponSprite.visible = false;
        } else {
          [weaponSprite.x] = spriteData.anchor;
          [, weaponSprite.y] = spriteData.anchor;
          weaponSprite.angle = spriteData.rotation;
          weaponSprite.visible = true;
          weaponSprite.zIndex = spriteData.behind ? 1 : 3;
        }
      });
    });

    return () => {
      Tweener.dispose();
      app.destroy(true);
    };
  }, [animation, gender]);

  return (
    <Box sx={{ p: 2, bgcolor: '#363636' }}>
      <Stack spacing={2} sx={{ maxWidth: 500 }}>
        <TextField
          label="Frame"
          type="number"
          value={frame}
          onChange={changeFrame}
        />
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Select
            value={gender}
            label="Gender"
            onChange={changeGender}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Animation</InputLabel>
          <Select
            value={animation}
            label="Animation"
            onChange={changeAnimation}
          >
            {Animations.map((anim) => (
              <MenuItem key={anim} value={anim}>{anim}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {(frame > 0) && (
          <Box sx={{ position: 'relative', width: 'fit-content', fontSize: 0, zoom }}>
            <Box
              component="img"
              src={`/api/spritesheet/${gender === Gender.male ? 'Jeff' : 'Jess'}/${gender}/${animation}/${frame}`}
              sx={{ position: 'relative', zIndex: 3 }}
            />
            <Box
              component="img"
              src="/images/game/resources/weapons/lance.png"
              sx={{
                position: 'absolute',
                left: `calc(${ANIMATION_ANCHORS[gender][animation][0] * 100}% - ${WEAPON_ANCHOR.x * 90}px + ${anchorX}px)`,
                top: `calc(${ANIMATION_ANCHORS[gender][animation][1] * 100}% - ${WEAPON_ANCHOR.y * 40}px + ${anchorY}px)`,
                transformOrigin: `${WEAPON_ANCHOR.x * 100}% ${WEAPON_ANCHOR.y * 100}%`,
                transform: `rotate(${rotation}deg)`,
                zIndex: behind ? 2 : 4,
              }}
            />
          </Box>
        )}
        <Typography color="white">X: {anchorX.toFixed(1)}</Typography>
        <Slider value={anchorX} onChange={changeAnchorX} min={-100} max={100} step={0.1} />
        <Typography color="white">Y: {anchorY.toFixed(1)}</Typography>
        <Slider value={anchorY} onChange={changeAnchorY} min={-100} max={100} step={0.1} />
        <Typography color="white">Rotation: {rotation.toFixed(1)}</Typography>
        <Slider value={rotation} onChange={changeRotation} min={-180} max={180} step={0.1} />
        <FormControlLabel control={<Checkbox checked={behind} />} onChange={changeBehind} label="Behind" sx={{ color: 'white' }} />
        <Stack direction="row" spacing={2}>
          <Typography color="white">Zoom:</Typography>
          <Typography color="white">{zoom}</Typography>
          <Slider value={zoom} onChange={changeZoom} min={1} max={4} step={1} />
        </Stack>
        <Button onClick={copyValues}>Copy values</Button>
      </Stack>
      <Text color="white">Animation render</Text>
      <Box
        ref={ref}
        sx={{
          alignSelf: 'center',
          position: 'relative',
          fontSize: 0,
          maxWidth: 1000,
          '& canvas': {
            maxWidth: '100%',
          }
        }}
      />
    </Box>
  );
};

export default WeaponAnchorTestView;
