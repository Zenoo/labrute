import { Brute } from '@labrute/core';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BruteComponent from '../../components/Brute/Body/BruteComponent';
import Page from '../../components/Page';
import StyledButton from '../../components/StyledButton';
import Text from '../../components/Text';

export interface VersusMobileViewProps {
  brute: Brute;
  opponent: Brute;
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
        <Text h3 smallCaps bold color="text.primary">{t('dareChallenge')} {opponent.name} !</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <BruteComponent
              brute={brute}
              sx={{ maxWidth: 200 }}
              inverted
            />
            <Text h3 smallCaps bold color="text.primary">{brute.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {brute.data.level}</Text>
          </Grid>
          <Grid item xs={12} sm={2} alignSelf="center">
            <Box component="img" src="/images/versus/vs.png" sx={{ width: 100, maxWidth: 1 }} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <BruteComponent
              brute={opponent}
              sx={{ maxWidth: 200 }}
            />
            <Text h3 smallCaps bold color="text.primary">{opponent.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {opponent.data.level}</Text>
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
