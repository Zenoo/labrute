import {
  BruteColor, colorableBodyParts, generateColorString, isHexColor, readColorString
} from '@labrute/core';
import {
  Box, Grid, MenuItem, Paper, Select,
  SelectChangeEvent,
  TextField
} from '@mui/material';
import React, {
  useCallback,
  useEffect, useRef, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { BruteRender } from '../components/Brute/Body/BruteRender';
import { FantasyButton } from '../components/FantasyButton';
import { Page } from '../components/Page';
import { Text } from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import { useConfirm } from '../hooks/useConfirm';
import { useRenderer } from '../hooks/useRenderer';
import { useServer } from '../hooks/useServer';
import { catchError } from '../utils/catchError';
import { HexColorPicker } from 'react-colorful';

export const UnlockColorView = () => {
  const { t } = useTranslation('unlockColor');
  const Alert = useAlert();
  const navigate = useNavigate();
  const { brute, updateBrute, owner } = useBrute();
  const { updateData } = useAuth();
  const Confirm = useConfirm();
  const { resetCache } = useRenderer();
  const Server = useServer();

  const [color, setColor] = useState<string | null>(null);
  const [colorInput, setColorInput] = useState<string>('');
  const [colorName, setColorName] = useState<BruteColor>('col0');
  const [colorChanged, setColorChanged] = useState(false);
  const [bruteColors, setBruteColors] = useState<string | null>(null);
  const isInitialMount = useRef(true);

  const updateBruteColors = useCallback((c: string, name: BruteColor) => {
    if (!brute) return;

    setBruteColors(generateColorString({
      ...readColorString(brute.gender, brute.colors),
      [name]: c,
    }));
  }, [brute]);

  // Set default color on brute load
  useEffect(() => {
    if (!brute) return;

    // Set color on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      const defaultColors = readColorString(brute.gender, brute.colors);

      const c = defaultColors[colorName];
      setColor(c);
      setColorInput(c);
      updateBruteColors(c, colorName);
    }
  }, [brute, colorName, updateBruteColors]);

  const changeColor = (c: string) => {
    setColor(c);
    setColorInput(c);
    setColorChanged(true);
    updateBruteColors(c, colorName);
  }

  const changeColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const c = e.target.value;
    setColorInput(c);

    if (!isHexColor(c) || c.length !== 7) {
      return;
    }
    setColor(c);
    setColorChanged(true);
    updateBruteColors(c, colorName);
  };

  const changeBodyPart = (e: SelectChangeEvent) => {
    if (!brute) return;
    if (!color) return;

    const part = e.target.value as BruteColor;
    setColorName(part);

    // Only update color if user never changed it
    let c = color;
    if (!colorChanged) {
      const defaultColors = readColorString(brute.gender, brute.colors);
      c = defaultColors[part];
      setColor(c);
      setColorInput(c);
    }

    updateBruteColors(c, part);
  };

  // Unlock color
  const unlockColor = () => {
    if (!brute || !color) return;

    Confirm.open(t('unlockColor'), t('unlockColorConfirm'), () => {
      // Update brute visuals
      Server.Brute.unlockColor(brute.name, { bodyPart: colorName, color })
        .then((response) => {
          Alert.open('success', t('unlockColorSuccess'));

          // Update brute visuals
          updateBrute((b) => (b ? ({
            ...b,
            colors: response.colors,
          }) : null));

          // Update user data
          updateData((data) => (data ? ({
            ...data,
            brutes: data.brutes.map((b) => (b.name === brute.name ? ({
              ...b,
              colors: response.colors,
            }) : b)),
          }) : null));

          // Reset cache
          resetCache(brute.id);

          // Go to cell
          navigate(`/${brute.name}/cell`);
        })
        .catch(catchError(Alert));
    });
  };

  return brute && (
    <Page title={t('unlockColor')} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('unlockColor')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {owner && color && (
          <>
            <Text bold center>{t('unlockColorDescription')}</Text>
            <Grid container spacing={1} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={4} md={6}>
                <Box sx={{
                  mx: 'auto',
                  width: 70,
                }}
                >
                  {bruteColors && (
                    <BruteRender
                      brute={{
                        ...brute,
                        colors: bruteColors,
                      }}
                      skipCache
                      highlightColorName={colorName}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item xs={8} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Select
                  value={colorName}
                  onChange={changeBodyPart}
                  fullWidth
                >
                  {colorableBodyParts.map((part) => (
                    <MenuItem key={part} value={part}>{t(`bodyPart.${part}`)}</MenuItem>
                  ))}
                </Select>
                <TextField
                  sx={{ my: 2 }}
                  label={t('color')}
                  value={colorInput}
                  onChange={changeColorInput}
                  fullWidth
                />
                <HexColorPicker color={color} onChangeEnd={changeColor} />
              </Grid>
            </Grid>
            {/* VALIDATION */}
            <Box sx={{ textAlign: 'center' }}>
              <FantasyButton color="success" onClick={unlockColor}>{t('validate')}</FantasyButton>
            </Box>
          </>
        )}
      </Paper>
    </Page>
  );
};
