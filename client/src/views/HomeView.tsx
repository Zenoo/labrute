import { Box } from '@mui/material';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import mainBg from '../assets/main-bg.gif';
import Page from '../components/Page';
import TextField from '../components/TextField';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

/**
 * HomeView component
 * @returns {React.ReactElement}
 */
const HomeView = () => {
  const { t } = useTranslation();
  const [users] = useStateAsync([], Server.User.list);

  console.log(users);

  const [login, setLogin] = React.useState('');

  const changeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  }, []);

  return (
    <Page title={t('MyBrute')}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Box sx={{}}>TODO</Box>
        <Box sx={{ width: 640, height: 454, position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            component="img"
            src={mainBg}
            alt={t('background')}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', mx: '14px' }}>
        <TextField
          label={t('alreadyRegistered')}
          variant="outlined"
          onChange={changeLogin}
          value={login}
        />
      </Box>
    </Page>
  );
};

export default HomeView;
