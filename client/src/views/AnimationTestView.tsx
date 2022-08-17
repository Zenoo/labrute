import { Add, Remove } from '@mui/icons-material';
import { Box, Button, Divider, FormControlLabel, IconButton, MenuItem, Select, SelectChangeEvent, Switch } from '@mui/material';
import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import AnimatedBear from '../components/animations/bear/AnimatedBear.js';
import Text from '../components/Text.js';
import { AnimationModel, Animation } from '@eternaltwin/labrute-core/types';
import AnimatedDog from '../components/animations/dog/AnimatedDog.js';
import AnimatedPanther from '../components/animations/panther/AnimatedPanther.js';
import AnimatedBrute from '../components/animations/brute/AnimatedBrute.js';

const animations: Record<AnimationModel, Animation[]> = {
  bear: ['arrive', 'attack', 'death', 'evade', 'hit', 'iddle', 'run', 'trapped'],
  dog: ['arrive', 'attack', 'death', 'evade', 'hit', 'iddle', 'run', 'trapped'],
  panther: ['arrive', 'attack', 'death', 'evade', 'hit', 'iddle', 'run', 'trapped'],
  'brute.male': ['arrive', 'attack', 'death', 'evade', 'hit', 'iddle', 'run', 'trapped'],
};

const AnimationTestView = () => {
  // Current animation
  const [model, setModel] = useState<AnimationModel>('bear');
  const [animation, setAnimation] = useState<Animation>('iddle');
  const [adjustX, setAdjustX] = useState(0);
  const [adjustY, setAdjustY] = useState(0);

  // Inverted state (current + transparent)
  const [inverted, setInverted] = useState(false);

  // Transparent animation
  const [transparentModel, setTransparentModel] = useState<AnimationModel>('bear');
  const [transparentAnimation, setTransparentAnimation] = useState<Animation>('iddle');

  const component = useMemo(() => {
    switch (model) {
      case 'bear':
        return (
          <AnimatedBear
            id="test"
            animation={animation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: -adjustY,
              left: inverted ? null : adjustX,
              right: inverted ? adjustX : null,
              border: 1,
            }}
          />
        );
      case 'dog':
        return (
          <AnimatedDog
            id="test"
            animation={animation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: -adjustY,
              left: inverted ? null : adjustX,
              right: inverted ? adjustX : null,
              border: 1,
            }}
          />
        );
      case 'panther':
        return (
          <AnimatedPanther
            id="test"
            animation={animation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: -adjustY,
              left: inverted ? null : adjustX,
              right: inverted ? adjustX : null,
              border: 1,
            }}
          />
        );
      case 'brute.male':
        return (
          <AnimatedBrute
            id="test"
            gender="male"
            animation={animation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: -adjustY,
              left: inverted ? null : adjustX,
              right: inverted ? adjustX : null,
              border: 1,
            }}
          />
        );
      default:
        return null;
    }
  }, [model, animation, inverted, adjustY, adjustX]);

  const transparentComponent = useMemo(() => {
    switch (transparentModel) {
      case 'bear':
        return (
          <AnimatedBear
            id="test"
            animation={transparentAnimation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: inverted ? null : 0,
              right: inverted ? 0 : null,
              opacity: 0.5,
              border: 1,
            }}
          />
        );
      case 'dog':
        return (
          <AnimatedDog
            id="test"
            animation={transparentAnimation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: inverted ? null : 0,
              right: inverted ? 0 : null,
              opacity: 0.5,
              border: 1,
            }}
          />
        );
      case 'panther':
        return (
          <AnimatedPanther
            id="test"
            animation={transparentAnimation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: inverted ? null : 0,
              right: inverted ? 0 : null,
              opacity: 0.5,
              border: 1,
            }}
          />
        );
      case 'brute.male':
        return (
          <AnimatedBrute
            id="test"
            gender="male"
            animation={transparentAnimation}
            inverted={inverted}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: inverted ? null : 0,
              right: inverted ? 0 : null,
              opacity: 0.5,
              border: 1,
            }}
          />
        );
      default:
        return null;
    }
  }, [transparentModel, transparentAnimation, inverted]);

  const changeModel = useCallback((event: SelectChangeEvent) => {
    setModel(event.target.value as AnimationModel);
    setAnimation(animations[event.target.value as AnimationModel][0]);
    setAdjustX(0);
    setAdjustY(0);
  }, []);

  const changeAnimation = useCallback((event: SelectChangeEvent) => {
    setAnimation(event.target.value as Animation);
    setAdjustX(0);
    setAdjustY(0);
  }, []);

  const addX = useCallback(() => {
    setAdjustX((prev) => prev + 1);
  }, []);

  const removeX = useCallback(() => {
    setAdjustX((prev) => prev - 1);
  }, []);

  const addY = useCallback(() => {
    setAdjustY((prev) => prev + 1);
  }, []);

  const removeY = useCallback(() => {
    setAdjustY((prev) => prev - 1);
  }, []);

  const changeInverted = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInverted(event.target.checked);
  }, []);

  const changeTransparentModel = useCallback((event: SelectChangeEvent) => {
    setTransparentModel(event.target.value as AnimationModel);
    setTransparentAnimation(animations[event.target.value as AnimationModel][0]);
  }, []);

  const changeTransparentAnimation = useCallback((event: SelectChangeEvent) => {
    setTransparentAnimation(event.target.value as Animation);
  }, []);

  // Reflow animations
  const reflow = useCallback(() => {
    document.getAnimations().forEach((anim) => {
      anim.cancel();
      anim.play();
    });
  }, []);

  return (
    <>
      <Box sx={{ height: 300, width: 300, border: 2, position: 'relative', overflow: 'hidden' }}>
        {transparentComponent}
        {component}
      </Box>
      <Select value={model} onChange={changeModel}>
        {Object.keys(animations).map((key) => (
          <MenuItem key={key} value={key}>{key}</MenuItem>
        ))}
      </Select>
      <Select value={animation} onChange={changeAnimation}>
        {animations[model].map((key) => (
          <MenuItem key={key} value={key}>{key}</MenuItem>
        ))}
      </Select>
      <FormControlLabel
        control={(
          <Switch
            checked={inverted}
            onChange={changeInverted}
          />
        )}
        label="Inverted"
      />
      <Box>
        <Text sx={{ display: 'inline-block' }}>X: {adjustX}</Text>
        <IconButton onClick={addX}><Add /></IconButton>
        <IconButton onClick={removeX}><Remove /></IconButton>
      </Box>
      <Box>
        <Text sx={{ display: 'inline-block' }}>Y: {adjustY}</Text>
        <IconButton onClick={addY}><Add /></IconButton>
        <IconButton onClick={removeY}><Remove /></IconButton>
      </Box>
      <Divider />
      <Text>Transparent layer</Text>
      <Select value={transparentModel} onChange={changeTransparentModel}>
        {Object.keys(animations).map((key) => (
          <MenuItem key={key} value={key}>{key}</MenuItem>
        ))}
      </Select>
      <Select value={transparentAnimation} onChange={changeTransparentAnimation}>
        {animations[model].map((key) => (
          <MenuItem key={key} value={key}>{key}</MenuItem>
        ))}
      </Select>
      <Box>
        <Button onClick={reflow}>Reflow</Button>
      </Box>
    </>
  );
};

export default AnimationTestView;