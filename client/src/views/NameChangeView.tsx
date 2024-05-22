import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useBrute } from '../hooks/useBrute';
import { useConfirm } from '../hooks/useConfirm';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const NameChangeView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { brute, owner } = useBrute();
  const Confirm = useConfirm();

  const [name, setName] = useState('');

  // Change name
  const changeName = () => {
    if (!brute) return;

    Confirm.open(t('inventory.item.nameChange'), t('nameChangeConfirm', { name }), () => {
      Server.Brute.changeName(brute.name, name).then(() => {
        // Go to new cell
        window.location.href = `/${name}/cell`;
      }).catch(catchError(Alert));
    });
  };

  return brute && (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('inventory.item.nameChange')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {owner && (
          <Box sx={{ textAlign: 'center' }}>
            <Text sx={{ typography: 'Pixelized', fontSize: 7 }} color="secondary">{t('chooseName')}</Text>
            <Box
              component="img"
              src="/images/creation/arrow.png"
              sx={{ width: 20 }}
            />
            {/* NAME INPUT */}
            <StyledInput
              onChange={(e) => setName(e.target.value)}
              value={name}
              sx={{ mx: 'auto' }}
            />
            {/* VALIDATION */}
            <Box sx={{ textAlign: 'center' }}>
              <FantasyButton color="success" onClick={changeName}>{t('validate')}</FantasyButton>
            </Box>
          </Box>
        )}
      </Paper>
    </Page>
  );
};

export default NameChangeView;
