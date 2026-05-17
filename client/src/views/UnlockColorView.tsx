import {
  BruteColor, colorableBodyParts, generateColorString, readColorString
} from '@labrute/core';
import {
  Box, Grid, MenuItem, Paper, Select
} from '@mui/material';
import React, {
  useEffect, useMemo, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
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
  const [colorName, setColorName] = useState<BruteColor>('col0');

  const bruteColors = useMemo(() => {
    if (!brute) return null;

    if (!color) return brute.colors;

    return generateColorString({
      ...readColorString(brute.colors),
      [colorName]: color,
    });
  }, [brute, color, colorName]);

  // Set default color on brute load
  useEffect(() => {
    if (!brute) return;

    const defaultColors = readColorString(brute.colors);
    setColor(defaultColors[colorName]);
  }, [brute, colorName]);

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
                  <BruteRender
                    brute={{
                      ...brute,
                      colors: bruteColors ?? brute.colors,
                    }}
                    skipCache
                    highlightColorName={colorName}
                  />
                </Box>
              </Grid>
              <Grid item xs={8} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Select
                  value={colorName}
                  onChange={(e) => setColorName(e.target.value as BruteColor)}
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  {colorableBodyParts.map((part) => (
                    <MenuItem key={part} value={part}>{t(`bodyPart.${part}`)}</MenuItem>
                  ))}
                </Select>
                <HexColorPicker color={color} onChangeEnd={setColor} />
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
