import { Box, Grid, IconButton, Link, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/Page';
import StyledButton from '../../components/StyledButton';
import StyledInput from '../../components/StyledInput';
import Text from '../../components/Text';
import { AdResult } from '../../utils/ads';
import { LockOpen, Lock } from '@mui/icons-material';

export interface HomeMobileViewProps {
  changeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  changeAppearance: () => void;
  changeColors: () => void;
  leftAd: AdResult;
  rightAd: AdResult;
  createBrute: () => void;
  character: React.JSX.Element;
  fixBruteAppearance: boolean;
  setFixBruteAppearance: React.Dispatch<React.SetStateAction<boolean>>
}

const HomeMobileView = ({
  changeName,
  name,
  changeAppearance,
  changeColors,
  leftAd,
  rightAd,
  createBrute,
  character,
  fixBruteAppearance,
  setFixBruteAppearance
}: HomeMobileViewProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isSx = useMediaQuery(theme.breakpoints.only('xs'));

  const adverts = (
    <Paper sx={{ mt: !isSx ? 4 : null }}>
      {/* SECOND TEXT */}
      <Text h4 bold typo="handwritten" color="secondary">{t('orNotToBe')}</Text>
      <Text bold color="text.primary">{t('otherGames')}</Text>
      {/* OTHER GAMES */}
      <Grid container spacing={1}>
        {[leftAd, isSx ? rightAd : null].map((ad) => ad && (
          <Grid item xs={12} key={ad.name} sx={{ textAlign: 'center', mt: 1 }}>
            <Tooltip title={t(`${ad.name}.desc`)}>
              <Link href={ad.url} target="_blank" sx={{ width: 200, display: 'inline-block' }}>
                <Box
                  component="img"
                  src={`/images/redirects/${ad.illustration}`}
                  sx={{ width: 1, border: 2 }}
                />
              </Link>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  return (
    <Page title={t('MyBrute')}>
      <Grid container spacing={1}>
        {/* FIRST TEXT */}
        <Grid item xs={12} sm={6}>
          <Paper sx={{ bgcolor: 'background.paperLight' }}>
            <Text h4 bold typo="handwritten" color="secondary">{t('toBeABrute')}</Text>
            <Text bold color="text.primary">{t('createBrute')}</Text>
          </Paper>
          {!isSx && adverts}
        </Grid>
        {/* CHARACTER CREATION */}
        <Grid item xs={12} sm={6}>
          <Paper sx={{ bgcolor: 'background.paperLight', height: isSx ? null : `calc(100% - ${theme.spacing(4)})` }}>
            {/* CREATION HEADER */}
            <Grid container>
              <Grid item xs={6}>
                <Text sx={{ typography: 'Pixelized', fontSize: 7 }} color="secondary">{t('chooseName')}</Text>
              </Grid>
              <Grid item xs={6}>
                <Box component="img" src="/images/creation/arrow.png" />
              </Grid>
            </Grid>
            {/* NAME INPUT */}
            <Box sx={{ width: 202, mx: 'auto' }}>
              <StyledInput
                onChange={changeName}
                value={name}
                sx={{ mx: 'auto' }}
              />
              <Tooltip title={fixBruteAppearance ? t('unlockBruteAppearance') : t('lockBruteAppearance')}>
                <IconButton onClick={() => setFixBruteAppearance((prev) => !prev)} size="small" sx={{ float: 'right', mt: 1 }}>
                  {fixBruteAppearance ? <Lock /> : <LockOpen />}
                </IconButton>
              </Tooltip>
              {/* CHARACTER */}
              {character}
              {/* CUSTOMIZATION BUTTONS */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Tooltip title={t('changeAppearance')}>
                  <StyledButton
                    onClick={changeAppearance}
                    image="/images/creation/bodyType.svg"
                    swapImage={false}
                    sx={{ width: 89, height: 89, mt: -9.5 }}
                  />
                </Tooltip>
                <Tooltip title={t('changeColors')}>
                  <StyledButton
                    onClick={changeColors}
                    image="/images/creation/color.svg"
                    swapImage={false}
                    sx={{ width: 89, height: 89, mt: -9.5 }}
                  />
                </Tooltip>
              </Box>
            </Box>
            {/* VALIDATION */}
            <Box sx={{ textAlign: 'center' }}>
              <StyledButton
                image="/images/button.gif"
                imageHover="/images/button-hover.gif"
                shadow={false}
                contrast={false}
                onClick={createBrute}
                sx={{
                  fontVariant: 'small-caps',
                  m: '0 auto',
                  mt: 2,
                  height: 56,
                  width: 246,
                }}
              >
                {t('validate')}
              </StyledButton>
            </Box>
          </Paper>
        </Grid>
        {isSx && adverts}
      </Grid>
    </Page>
  );
};

export default HomeMobileView;
