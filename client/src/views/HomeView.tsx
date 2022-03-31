import { Box, TextField } from '@mui/material';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
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
            src="/images/main-bg.gif"
            alt={t('background')}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', mx: '14px', mt: 2 }}>
        <TextField
          label={t('alreadyRegistered')}
          onChange={changeLogin}
          value={login}
          variant="outlined"
        />
        <StyledButton
          variant="contained"
          sx={{ ml: 2 }}
        >
          {t('enter!')}
        </StyledButton>
      </Box>
    </Page>
  );
};

export default HomeView;
