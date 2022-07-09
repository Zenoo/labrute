import { Box, Grid, Link, Paper, Tooltip } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import advertisings from '../utils/advertisings';

/**
 * CellView component
 */
const CellView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();

  // const { data: brute } = useStateAsync(null, Server.Brute.get, bruteName);

  // Randomized advertising
  const advertising = useMemo(() => advertisings[Math.floor(
    Math.random() * (advertisings.length - 1) + 1
  )], []);

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`}>
      <Box display="flex" zIndex={1} sx={{ mt: 2 }}>
        <Paper sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          ml: 3,
          mr: 1,
          flexGrow: 1,
          py: 0,
          px: 1,
          mb: '5px',
        }}
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Text h2 sx={{ fontVariant: 'small-caps' }}>{bruteName}</Text>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Text bold color="secondary" component="span">Maitre: </Text>
                <Text bold component="span">XXXXX</Text>
              </Box>
              <Box>
                <Text bold color="secondary" component="span">Classement: </Text>
                <Text bold component="span">33333</Text>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Text bold color="secondary" component="span">Victoires: </Text>
                <Text bold component="span">1540</Text>
              </Box>
              <Box>
                <Text bold color="secondary" component="span">Élèves: </Text>
                <Text bold component="span">300</Text>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderBottom: 'none',
          width: 270,
          bgcolor: 'background.paperLight',
        }}
        />
      </Box>
      <Paper sx={{
        borderTopRightRadius: 0,
        bgcolor: 'background.paperLight',
        zIndex: 2,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -9,
          right: 0,
          width: 302,
          height: '9px',
          bgcolor: 'background.paperLight',
        },
      }}
      >
        <Box display="flex">
          <Box sx={{ flexGrow: 1 }}>
            yo
          </Box>
          <Box sx={{
            position: 'relative',
            width: 270,
            mt: -5,
          }}
          >
            <Tooltip title="Donne cette adresse à tes amis ou met la sur ton blog, ça te permettra de recruter des élèves et de gagner de l'expérience !">
              <Paper sx={{
                mx: 0,
                p: 1,
                bgcolor: 'background.paperAccent',
                textAlign: 'center'
              }}
              >
                <Text bold>{`${window.location.origin}?ref=${bruteName}`}</Text>
              </Paper>
            </Tooltip>

            <StyledButton sx={{ fontVariant: 'small-caps', m: '0 auto', mt: 2 }}>
              Clan TEST
            </StyledButton>
          </Box>
        </Box>
      </Paper>
      <Tooltip title="TODO" key={advertising}>
        <Link href="" sx={{ width: 200, mx: 4, display: 'inline-block' }}>
          <Box
            component="img"
            src={`/images/redirects/${advertising}`}
            sx={{ width: 1, border: 2 }}
          />
        </Link>
      </Tooltip>
    </Page>
  );
};

export default CellView;
