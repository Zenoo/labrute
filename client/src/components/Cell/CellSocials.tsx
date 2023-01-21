import { Brute } from '@labrute/core';
import { Paper, Grid, Box, PaperProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../Link';
import Text from '../Text';

export interface CellSocialsProps extends PaperProps {
  brute: Brute;
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
          {!!brute.data.master && (
          <Box>
            <Text bold color="secondary" component="span">{t('master')}: </Text>
            <Text bold component="span"><Link to={`/${brute.data.master}/cell`}>{brute.data.master}</Link></Text>
          </Box>
          )}
          <Box>
            <Text bold color="secondary" component="span">{t('ranking')}: </Text>
            <Text bold component="span">{brute.rank || 'N.A'}</Text>
          </Box>
        </Grid>
        <Grid item xs={smallScreen ? 6 : 3}>
          <Box>
            <Text bold color="secondary" component="span">{t('victories')}: </Text>
            <Text bold component="span">{brute.data.victories}</Text>
          </Box>
          {!!brute.data.pupils && (
          <Box>
            <Text bold color="secondary" component="span">{t('pupils')}: </Text>
            <Text bold component="span">{brute.data.pupils}</Text>
          </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CellSocials;
