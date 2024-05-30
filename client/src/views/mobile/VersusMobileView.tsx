import { Box, Grid, Paper, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BruteRender from '../../components/Brute/Body/BruteRender';
import Page from '../../components/Page';
import StyledButton from '../../components/StyledButton';
import Text from '../../components/Text';
import { Brute } from '@labrute/prisma';

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
  const { palette: { mode } } = useTheme();

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
            <Box width={100} mx="auto">
              <BruteRender
                brute={brute}
              />
            </Box>
            <Text h3 smallCaps bold color="text.primary">{brute.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {brute.level}</Text>
          </Grid>
          <Grid item xs={12} sm={2} alignSelf="center">
            <Box component="img" src={`/images${mode === 'dark' ? '/dark' : ''}/versus/vs.webp`} sx={{ width: 100, maxWidth: 1 }} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box width={100} mx="auto">
              <BruteRender
                brute={opponent}
                looking="left"
              />
            </Box>
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
