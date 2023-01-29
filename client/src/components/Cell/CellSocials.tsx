import { BruteWithMaster } from '@labrute/core';
import { Box, Grid, Paper, PaperProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../Link';
import Text from '../Text';

export interface CellSocialsProps extends PaperProps {
  brute: BruteWithMaster;
  smallScreen?: boolean;
}

const CellSocials = ({
  brute,
  smallScreen,
  ...rest
}: CellSocialsProps) => {
  const { t } = useTranslation();

  return (
    <Paper {...rest}>
      <Grid container spacing={1}>
        <Grid item xs={smallScreen ? 12 : 6}>
          <Text h2 sx={{ fontVariant: 'small-caps' }}>{brute.name}</Text>
        </Grid>
        <Grid item xs={smallScreen ? 6 : 3}>
          {!!brute.master && (
          <Box>
            <Text bold color="secondary" component="span">{t('master')}: </Text>
            <Text bold component="span"><Link to={`/${brute.master.name}/cell`}>{brute.master.name}</Link></Text>
          </Box>
          )}
          <Box>
            <Text bold color="secondary" component="span">
              <Link to="">{t('ranking')}</Link>
            </Text>
          </Box>
        </Grid>
        <Grid item xs={smallScreen ? 6 : 3}>
          <Box>
            <Text bold color="secondary" component="span">{t('victories')}: </Text>
            <Text bold component="span">{brute.victories}</Text>
          </Box>
          {!!brute.pupilsCount && (
          <Box>
            <Text bold color="secondary" component="span">{t('pupils')}: </Text>
            <Text bold component="span">{brute.pupilsCount}</Text>
          </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CellSocials;
