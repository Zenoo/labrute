import { Box, GlobalStyles, Grid, Link, Paper, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../../components/Page.js';

export interface Fight2MobileViewProps {
  bruteName: string | undefined;
  adverts: string[];
}

const globalStyles = (
  <GlobalStyles
    styles={{
      '#root': {
        minWidth: 565,
      }
    }}
  />
);

const Fight2MobileView = ({
  bruteName,
  adverts,
}: Fight2MobileViewProps) => {
  const { t } = useTranslation();

  return (
    <Page
      title={`${bruteName || ''} ${t('MyBrute')}`}
      headerUrl={`/${bruteName}/cell`}
      sx={{ minWidth: 565 }}
    >
      {globalStyles}
      <Paper sx={{ textAlign: 'center' }}>
        {/* FIGHT */}
        <canvas id="game" width="500" height="300" />

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

export default Fight2MobileView;
