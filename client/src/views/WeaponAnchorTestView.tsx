import { ANIMATION_ANCHORS, Animation, Animations, WEAPON_ANCHOR } from '@labrute/core';
import { Gender } from '@labrute/prisma';
import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useCallback } from 'react';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

/**
 * WeaponAnchorTestView component
 */
const WeaponAnchorTestView = () => {
  const [frame, setFrame] = React.useState(1);
  const [animation, setAnimation] = React.useState<Animation>('run');
  const [gender, setGender] = React.useState<Gender>(Gender.male);
  const [brute, setBrute] = React.useState('');
  const [anchorX, setAnchorX] = React.useState(0);
  const [anchorY, setAnchorY] = React.useState(0);
  const [rotation, setRotation] = React.useState(0);
  const [behind, setBehind] = React.useState(false);
  const [zoom, setZoom] = React.useState(1);

  const { data: brutes } = useStateAsync([], Server.Brute.list, null);

  const changeBrute = useCallback((event: SelectChangeEvent) => {
    setBrute(event.target.value);
  }, []);

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

  return (
    <Stack spacing={2} sx={{ p: 2, minHeight: '100vh', bgcolor: '#363636' }}>
      <FormControl>
        <InputLabel>Brute</InputLabel>
        <Select
          value={brute}
          label="Brute"
          onChange={changeBrute}
        >
          {brutes.map((b) => (
            <MenuItem key={b.id} value={b.name}>{b.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
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
      {brute && (frame > 0) && (
        <Box sx={{ position: 'relative', width: 'fit-content', fontSize: 0, zoom }}>
          <Box
            component="img"
            src={`/api/spritesheet/${brute}/${gender}/${animation}/${frame}`}
            sx={{ position: 'relative', zIndex: 3 }}
          />
          <Box
            component="img"
            src="/images/game/resources/weapons/lance.png"
            sx={{
              position: 'absolute',
              left: `calc(${ANIMATION_ANCHORS[gender][animation][0] * 100}% - ${WEAPON_ANCHOR.x}px + ${anchorX}px)`,
              top: `calc(${ANIMATION_ANCHORS[gender][animation][1] * 100}% - ${WEAPON_ANCHOR.y}px + ${anchorY}px)`,
              transformOrigin: `${WEAPON_ANCHOR.x}px ${WEAPON_ANCHOR.y}px`,
              transform: `rotate(${rotation}deg)`,
              zIndex: behind ? 2 : 4,
            }}
          />
        </Box>
      )}
      <Stack direction="row" spacing={2}>
        <Typography color="white">X:</Typography>
        <Typography color="white">{anchorX.toFixed(1)}</Typography>
        <Slider value={anchorX} onChange={changeAnchorX} min={-100} max={100} step={0.1} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography color="white">Y:</Typography>
        <Typography color="white">{anchorY.toFixed(1)}</Typography>
        <Slider value={anchorY} onChange={changeAnchorY} min={-100} max={100} step={0.1} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography color="white">Rotation:</Typography>
        <Typography color="white">{rotation.toFixed(1)}</Typography>
        <Slider value={rotation} onChange={changeRotation} min={-180} max={180} step={0.1} />
      </Stack>
      <FormControlLabel control={<Checkbox checked={behind} />} onChange={changeBehind} label="Behind" sx={{ color: 'white' }} />
      <Stack direction="row" spacing={2}>
        <Typography color="white">Zoom:</Typography>
        <Typography color="white">{zoom}</Typography>
        <Slider value={zoom} onChange={changeZoom} min={1} max={4} step={1} />
      </Stack>
      <Button onClick={copyValues}>Copy values</Button>
    </Stack>
  );
};

export default WeaponAnchorTestView;
