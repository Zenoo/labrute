import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Slider, Stack, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useCallback } from 'react';
import { Animation, animationList } from '@labrute/core';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';
import { Gender } from '@labrute/prisma';

/**
 * AnchorTestView component
 */
const AnchorTestView = () => {
  const [frame, setFrame] = React.useState(1);
  const [animation, setAnimation] = React.useState<Animation>('run');
  const [gender, setGender] = React.useState<Gender>(Gender.male);
  const [brute, setBrute] = React.useState('');
  const [anchorX, setAnchorX] = React.useState(0.5);
  const [anchorY, setAnchorY] = React.useState(0.5);

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

  return (
    <Stack spacing={2} sx={{ p: 2 }}>
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
          {animationList.map((anim) => (
            <MenuItem key={anim} value={anim}>{anim}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {brute && (frame > 0) && (
        <Box sx={{ position: 'relative', width: 'fit-content', fontSize: 0 }}>
          <Box component="img" src={`/api/spritesheet/${brute}/${gender}/${animation}/${frame}`} />
          <Box sx={{ position: 'absolute', height: '1px', width: 1, top: `${anchorY * 100}%`, left: 0, bgcolor: 'red' }} />
          <Box sx={{ position: 'absolute', width: '1px', height: 1, top: 0, left: `${anchorX * 100}%`, bgcolor: 'red' }} />
        </Box>
      )}
      <Stack direction="row" spacing={2}>
        <Typography>X:</Typography>
        <Typography>{anchorX}</Typography>
        <Slider value={anchorX} onChange={changeAnchorX} min={0} max={1} step={0.0001} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography>Y:</Typography>
        <Typography>{anchorY}</Typography>
        <Slider value={anchorY} onChange={changeAnchorY} min={0} max={1} step={0.0001} />
      </Stack>
    </Stack>
  );
};

export default AnchorTestView;
