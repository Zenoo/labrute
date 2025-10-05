import { Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Page from '../../../components/Page';
import StyledInput from '../../../components/StyledInput';
import Text from '../../../components/Text';
import { useAlert } from '../../../hooks/useAlert';
import Server from '../../../utils/Server';
import catchError from '../../../utils/catchError';
import { useAuth } from '../../../hooks/useAuth';
import { useBrute } from '../../../hooks/useBrute';

const ClanCreateView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const Alert = useAlert();
  const navigate = useNavigate();
  const { updateData } = useAuth();
  const { updateBrute } = useBrute();

  const [name, setName] = React.useState('');

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const createClan = () => {
    if (!name || !bruteName) return;

    if (name.length < 3 || name.length > 50) {
      Alert.open('warning', t('clanNameLength'));
      return;
    }

    Server.Clan.create(bruteName, name).then((clan) => {
      Alert.open('success', t('clanCreated'));

      // Update user data
      updateData((data) => (data ? ({
        ...data,
        brutes: data.brutes.map((brute) => (brute.name === bruteName
          ? { ...brute, clan, clanId: clan.id }
          : brute
        )),
      }) : null));

      updateBrute((b) => (b ? { ...b, clan, clanId: clan.id } : null));
      navigate(`/${bruteName}/cell`);
    }).catch(catchError(Alert));
  };

  return (
    <Page title={t('createAClan')} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('createAClan')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1}>
          {!isMd && (
            <Grid item xs={12} md={3}>
              <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/bear.webp`} sx={{ maxWidth: 1 }} />
            </Grid>
          )}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Text>{t('chooseClanName')}</Text>
            <StyledInput
              onChange={changeName}
              value={name}
            />
            <Button onClick={createClan} variant="mybrute">{t('create')}</Button>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={3}>
              <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default ClanCreateView;
