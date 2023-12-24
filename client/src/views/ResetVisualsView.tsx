import { getRandomBody, getRandomColors } from '@labrute/core';
import { BruteBody, BruteColors, Gender, InventoryItemType } from '@labrute/prisma';
import { Box, Paper, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import BruteRender from '../components/Brute/Body/BruteRender';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import { useConfirm } from '../hooks/useConfirm';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import { useRenderer } from '../hooks/useRenderer';

const ResetVisualsView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const navigate = useNavigate();
  const { brute, updateBrute } = useBrute();
  const { updateData } = useAuth();
  const Confirm = useConfirm();
  const { resetCache } = useRenderer();

  const [bodyParts, setBodyParts] = useState<Omit<BruteBody, 'id' | 'bruteId'>>(
    getRandomBody(Gender.male),
  );
  const [bodyColors, setBodyColors] = useState<Omit<BruteColors, 'id' | 'bruteId'>>(
    getRandomColors(Gender.male),
  );

  // Change appearance
  const changeAppearance = () => {
    if (!brute) return;

    setBodyParts(getRandomBody(brute.gender));
    setBodyColors(getRandomColors(brute.gender));
  };

  // Change colors
  const changeColors = () => {
    if (!brute) return;

    setBodyColors(getRandomColors(brute.gender));
  };

  // Reset visuals
  const resetVisuals = () => {
    if (!brute) return;

    Confirm.open(t('resetVisuals'), t('resetVisualsConfirm'), () => {
      // Update brute visuals
      Server.Brute.resetVisuals(brute.name, bodyParts, bodyColors).then(() => {
        Alert.open('success', t('resetVisualsSuccess'));

        // Update brute visuals
        updateBrute((b) => (b ? ({
          ...b,
          inventory: b.inventory.map((i) => (i.type === InventoryItemType.visualReset ? ({
            ...i,
            count: i.count - 1,
          }) : i)),
          body: {
            ...(b.body || { id: 0, bruteId: 0 }),
            ...bodyParts,
          },
          colors: {
            ...(b.colors || { id: 0, bruteId: 0 }),
            ...bodyColors,
          },
        }) : null));

        // Update user data
        updateData((data) => (data ? ({
          ...data,
          brutes: data.brutes.map((b) => (b.name === brute.name ? ({
            ...b,
            body: {
              ...(b.body || { id: 0, bruteId: 0 }),
              ...bodyParts,
            },
            colors: {
              ...(b.colors || { id: 0, bruteId: 0 }),
              ...bodyColors,
            },
          }) : b)),
        }) : null));

        // Reset cache
        resetCache(brute.id);

        // Go to cell
        navigate(`/${brute.name}/cell`);
      }).catch(catchError(Alert));
    });
  };

  return brute && (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
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
        <Text bold center>{t('resetVisualsDescription')}</Text>
        <Box sx={{
          mx: 'auto',
          width: 70,
        }}
        >
          <BruteRender
            brute={{
              id: 0,
              name: brute.name,
              body: bodyParts,
              colors: bodyColors,
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
          <FantasyButton onClick={resetVisuals}>{t('validate')}</FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};

export default ResetVisualsView;
