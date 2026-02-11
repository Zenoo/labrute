import { getRandomBody, getRandomColors } from '@labrute/core';
import { Box, Paper, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import BruteRender from '../components/Brute/Body/BruteRender';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import { useConfirm } from '../hooks/useConfirm';
import { useRenderer } from '../hooks/useRenderer';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const ResetVisualsView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const navigate = useNavigate();
  const { brute, updateBrute, owner } = useBrute();
  const { updateData } = useAuth();
  const Confirm = useConfirm();
  const { resetCache } = useRenderer();

  const [body, setBody] = useState<string | null>(
    null
  );
  const [colors, setColors] = useState<string | null>(
    null
  );

  // Update visuals on brute load
  useEffect(() => {
    if (!brute || body || colors) return;

    setBody(getRandomBody(brute.gender));
    setColors(getRandomColors(brute.gender));
  }, [colors, body, brute]);

  // Change appearance
  const changeAppearance = () => {
    if (!brute) return;

    setBody(getRandomBody(brute.gender));
    setColors(getRandomColors(brute.gender));
  };

  // Change colors
  const changeColors = () => {
    if (!brute) return;

    setColors(getRandomColors(brute.gender));
  };

  // Reset visuals
  const resetVisuals = () => {
    if (!brute || !body || !colors) return;

    Confirm.open(t('resetVisuals'), t('resetVisualsConfirm'), () => {
      // Update brute visuals
      Server.Brute.resetVisuals(brute.name, body, colors).then(() => {
        Alert.open('success', t('resetVisualsSuccess'));

        // Update brute visuals
        updateBrute((b) => (b ? ({
          ...b,
          body,
          colors,
        }) : null));

        // Update user data
        updateData((data) => (data ? ({
          ...data,
          brutes: data.brutes.map((b) => (b.name === brute.name ? ({
            ...b,
            body,
            colors,
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
    <Page title={t('resetVisuals')} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('resetVisuals')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {owner && (
          <>
            <Text bold center>{t('resetVisualsDescription')}</Text>
            <Box sx={{
              mx: 'auto',
              width: 70,
            }}
            >
              <BruteRender
                brute={{
                  id: '',
                  name: brute.name,
                  body: body || '0'.repeat(11),
                  colors: colors || '0'.repeat(32),
                  gender: brute.gender,
                }}
              />
            </Box>
            {/* CUSTOMIZATION BUTTONS */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mt: -7,
              mb: 1,
            }}
            >
              <Tooltip title={t('changeAppearance')}>
                <StyledButton
                  onClick={changeAppearance}
                  image="/images/creation/bodyType.svg"
                  swapImage={false}
                  sx={{
                    width: 89,
                    height: 89,
                  }}
                />
              </Tooltip>
              <Tooltip title={t('changeColors')}>
                <StyledButton
                  onClick={changeColors}
                  image="/images/creation/color.svg"
                  swapImage={false}
                  sx={{
                    width: 89,
                    height: 89,
                  }}
                />
              </Tooltip>
            </Box>
            {/* VALIDATION */}
            <Box sx={{ textAlign: 'center' }}>
              <FantasyButton color="success" onClick={resetVisuals}>{t('validate')}</FantasyButton>
            </Box>
          </>
        )}
      </Paper>
    </Page>
  );
};

export default ResetVisualsView;
