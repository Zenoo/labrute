import { BruteWithBodyColors } from '@labrute/core';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BruteRender from '../../components/Brute/Body/BruteRender';
import Page from '../../components/Page';
import StyledButton from '../../components/StyledButton';
import Text from '../../components/Text';

export interface VersusMobileViewProps {
  brute: BruteWithBodyColors;
  opponent: BruteWithBodyColors;
  startFight: () => void;
}

const VersusMobileView = ({
  brute,
  opponent,
  startFight,
}: VersusMobileViewProps) => {
  const { t } = useTranslation();

  return (
    <Page
      title={`${brute.name || ''} ${t('MyBrute')}`}
      headerUrl={`/${brute.name}/cell`}
      sx={{ textAlign: 'center' }}
    >
      <Paper sx={{ mb: 3 }}>
        <Text h3 smallCaps bold color="text.primary">{t('dareChallenge', { value: opponent.name })}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight' }}>
        <StyledButton
          image="/images/button.gif"
          imageHover="/images/button-hover.gif"
          onClick={startFight}
          shadow={false}
          contrast={false}
          shift="8px"
          sx={{
            fontVariant: 'small-caps',
            m: '0 auto',
            mb: 1,
            height: 56,
            width: 246,
          }}
        >
          {t('startFight')}
        </StyledButton>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <BruteRender
              brute={brute}
              height={200}
              width={150}
              sx={{ mx: 'auto' }}
            />
            <Text h3 smallCaps bold color="text.primary">{brute.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {brute.level}</Text>
          </Grid>
          <Grid item xs={12} sm={2} alignSelf="center">
            <Box component="img" src="/images/versus/vs.png" sx={{ width: 100, maxWidth: 1 }} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <BruteRender
              brute={opponent}
              height={200}
              width={150}
              looking="left"
              sx={{ mx: 'auto' }}
            />
            <Text h3 smallCaps bold color="text.primary">{opponent.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {opponent.level}</Text>
          </Grid>
        </Grid>
        <StyledButton
          image="/images/button.gif"
          imageHover="/images/button-hover.gif"
          onClick={startFight}
          shadow={false}
          contrast={false}
          shift="8px"
          sx={{
            fontVariant: 'small-caps',
            m: '0 auto',
            mt: 2,
            height: 56,
            width: 246,
          }}
        >
          {t('startFight')}
        </StyledButton>
      </Paper>
    </Page>
  );
};

export default VersusMobileView;
