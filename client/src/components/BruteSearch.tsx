import { isNameValid } from '@labrute/core';
import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, OutlinedInput, Tooltip, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAlert } from '../hooks/useAlert';

export const BruteSearch = () => {
  const theme = useTheme();
  const Alert = useAlert();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  // Search brute name
  const searchBrute = () => {
    if (!search) return;
    if (!isNameValid(search)) {
      Alert.open('error', t('invalidName'));
      return;
    }

    navigate(`/${search}/cell`);
    setSearch('');
  };

  return (
    <OutlinedInput
      size="small"
      color="info"
      placeholder={t('searchBrute')}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyUp={(e) => e.key === 'Enter' && searchBrute()}
      sx={{
        pr: 0.5,
        width: 150,
        color: theme.palette.topbar.colorDark,
        '.MuiInputBase-input': {
          px: 0.5,
          py: 0.25,
        },
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.topbar.divider,
        }
      }}
      endAdornment={(
        <Tooltip title={t('searchBrute')}>
          <InputAdornment position="end">
            <IconButton
              aria-label={t('searchBrute')}
              onClick={searchBrute}
              sx={{
                color: theme.palette.topbar.contrast,
                '&:hover': {
                  color: theme.palette.topbar.contrastLight,
                }
              }}
              edge="end"
            >
              <Search />
            </IconButton>
          </InputAdornment>
        </Tooltip>
      )}
    />
  );
};
