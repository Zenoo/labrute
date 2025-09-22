import { Box, Paper } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../../../components/FantasyButton';
import Page from '../../../components/Page';
import StyledInput from '../../../components/StyledInput';
import Text from '../../../components/Text';
import { useAlert } from '../../../hooks/useAlert';
import { useBrute } from '../../../hooks/useBrute';
import { useConfirm } from '../../../hooks/useConfirm';
import Server from '../../../utils/Server';
import catchError from '../../../utils/catchError';

const ChangeName = () => {
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

  if (!brute || !owner) {
    return null;
  }

  return (
    <Page title={`${brute.name} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
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
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
        >
          <Text h4 color="secondary" bold>{t('newName')}</Text>
          <StyledInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('chooseName')}
          />
          <FantasyButton color="success" onClick={changeName}>
            {t('change')}
          </FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};

export default ChangeName;