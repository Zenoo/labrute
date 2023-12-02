import { Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Page from '../../components/Page';
import StyledInput from '../../components/StyledInput';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const ClanCreateView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const Alert = useAlert();
  const navigate = useNavigate();

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

    Server.Clan.create(bruteName, name).then(() => {
      Alert.open('success', t('clanCreated'));
      navigate(`/${bruteName}/cell`);
    }).catch(catchError(Alert));
  };

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('createAClan')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1}>
          {!isMd && (
            <Grid item xs={12} md={3}>
              <Box component="img" src="/images/arena/bear.gif" sx={{ maxWidth: 1 }} />
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
            <Button onClick={createClan} variant="contained">{t('create')}</Button>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={3}>
              <Box component="img" src="/images/arena/referee.gif" sx={{ maxWidth: 1 }} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default ClanCreateView;
