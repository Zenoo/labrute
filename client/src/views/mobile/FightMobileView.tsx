import { Fight } from '@eternaltwin/labrute-core/types';
import { Box, GlobalStyles, Grid, Link, Paper, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FightComponent from '../../components/Arena/FightComponent.js';
import Page from '../../components/Page.js';
import { AnimationFighter } from '../../utils/fight/findFighter.js';

export interface FightMobileViewProps {
  bruteName: string | undefined;
  fight: Fight | null;
  fighters: AnimationFighter[];
  displayLogs: boolean;
  toggleLogs: () => void;
  adverts: string[];
}

const FightMobileView = ({
  bruteName,
  fight,
  fighters,
  displayLogs,
  toggleLogs,
  adverts,
}: FightMobileViewProps) => {
  const { t } = useTranslation();

  return (
    <Page
      title={`${bruteName || ''} ${t('MyBrute')}`}
      headerUrl={`/${bruteName}/cell`}
      sx={{ minWidth: 565 }}
    >
      <GlobalStyles
        styles={{
          '#root': {
            minWidth: 565,
          }
        }}
      />
      <Paper sx={{ textAlign: 'center' }}>
        {/* FIGHT */}
        <FightComponent
          fight={fight}
          fighters={fighters}
          displayLogs={displayLogs}
          t={t}
          toggleLogs={toggleLogs}
          sx={{ display: 'inline-block', ml: 0 }}
        />

        {/* ADVERTS */}
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {adverts.map((advert) => (
            <Grid item key={advert} xs={12} sm={6}>
              <Tooltip title="TODO">
                <Link href="" sx={{ width: 200, display: 'inline-block' }}>
                  <Box
                    component="img"
                    src={`/images/redirects/${advert}`}
                    sx={{ width: 1, border: 2, borderColor: 'common.white', ml: 3 }}
                  />
                </Link>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Page>
  );
};

export default FightMobileView;
