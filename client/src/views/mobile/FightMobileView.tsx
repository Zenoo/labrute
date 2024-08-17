import { FightGetResponse } from '@labrute/core';
import { Box, Grid, Link, Paper, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FightComponent from '../../components/Arena/FightComponent';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { AdResult } from '../../utils/ads';

export interface FightMobileViewProps {
  pageTitle?: string;
  headerUrl?: string;
  ads: AdResult[];
  fight: FightGetResponse | null;
}

const FightMobileView = ({
  pageTitle,
  headerUrl,
  ads,
  fight,
}: FightMobileViewProps) => {
  const { t } = useTranslation();

  return (
    <Page
      title={`${pageTitle ?? ''} ${t('MyBrute')}`}
      headerUrl={headerUrl}
    >
      <Paper sx={{ textAlign: 'center' }}>
        {/* FIGHT */}
        <FightComponent fight={fight} />

        {/* ADVERTS */}
        <Text color="text.primary" center typo="GameFont" upperCase sx={{ mt: 2 }}>{t('fight.discoverGames')}</Text>
        <Grid container spacing={2}>
          {ads.map((ad) => (
            <Grid item key={ad.name} xs={12} sm={6}>
              <Tooltip title={t(`${ad.name}.desc`)}>
                <Link href={ad.url} target="_blank" sx={{ width: 200, display: 'inline-block' }}>
                  <Box
                    component="img"
                    src={`/images/redirects/${ad.illustration}`}
                    sx={{ width: 1, border: 2, borderColor: 'common.white' }}
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
