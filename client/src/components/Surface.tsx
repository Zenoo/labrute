import { Box, BoxProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';
import TextField from './TextField';

/**
 * Surface component
 * @returns {React.ReactElement}
 */
const Surface = (props: BoxProps) => {
  const { t } = useTranslation();
  const [users] = useStateAsync([], Server.User.list);

  console.log(users);

  return (
    <Box
      sx={{
        boxShadow: (theme) => `0 0 0 1.5px ${theme.palette.border.inner},
        0 0 0 4px ${theme.palette.border.main},
        0 0 0 5.5px ${theme.palette.border.outer},
        3px 3px 1px 5px ${theme.palette.border.shadow}`,
        bgcolor: 'background.paper',
        borderRadius: '7px',
        p: 2,
        mx: '14px'
      }}
      {...props}
    >
      <TextField
        label={t('alreadyRegistered')}
        variant="outlined"
      />
    </Box>
  );
};

export default Surface;
