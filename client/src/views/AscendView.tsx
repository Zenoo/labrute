import { Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CellPets from '../components/Cell/CellPets';
import CellSkills from '../components/Cell/CellSkills';
import CellWeapons from '../components/Cell/CellWeapons';
import Page from '../components/Page';
import Text from '../components/Text';
import Link from '../components/Link';
import { useBrute } from '../hooks/useBrute';
import BruteLevelAndXP from '../components/Brute/BruteLevelAndXP';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats';

/**
 * AscendView component
 */
const AscendView = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { brute } = useBrute();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const ascend = () => {
    // TODO
  };

  return brute && (
    <Page title={`${brute.name} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('ascension')}</Text>
        <Text bold color="secondary">{t('youAreAboutToAscend')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Text h4 bold color="secondary" center>{brute.name}</Text>
            <BruteLevelAndXP
              brute={brute}
              textProps={{ h3: false, h5: true, color: 'primary.text', center: true }}
              sx={{ mb: 1, width: 120, mx: 'auto' }}
            />
            <BruteBodyAndStats brute={brute} isMd={isMd} />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Link to={`/${brute.name}/cell`}>
                <Text bold>{t('backToCell')}</Text>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={5.6}>
            <Grid container spacing={1}>
              <Box sx={{ width: 315 }}>
                {/* WEAPONS */}
                <CellWeapons />
                {/* SKILLS */}
                <CellSkills />
                {/* PETS */}
                <CellPets sx={{ mt: 2 }} />
              </Box>
            </Grid>
            {/* TODO: Show currently selected type and perk */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', mt: 1 }}>
              <Button onClick={ascend} variant="contained">{t('ascend')}</Button>
            </Box>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={2.4}>
              <Text bold>{t('ascensionExplanationText')}</Text>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default AscendView;
