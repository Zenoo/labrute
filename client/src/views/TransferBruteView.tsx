import { Box, Paper } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useServer } from '../hooks/useServer';
import { catchError } from '../utils/catchError';
import { useAuth } from '../hooks/useAuth';
import BruteButton from '../components/Brute/BruteButton';
import FantasyButton from '../components/FantasyButton';
import { useConfirm } from '../hooks/useConfirm';

export const TransferBruteView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const Alert = useAlert();
  const Server = useServer();
  const { userId: targetUserId } = useParams();
  const { user, updateData } = useAuth();
  const Confirm = useConfirm();

  const [selectedBrute, setSelectedBrute] = useState<string | null>(null);

  const selectBrute = useCallback((bruteId: string) => () => {
    setSelectedBrute((prev) => (prev === bruteId ? null : bruteId));
  }, []);

  const transferBrute = useCallback(() => {
    if (!user || !targetUserId || !selectedBrute) return;
    if (targetUserId === user.id) {
      return;
    }

    Confirm.open(t('transferBrute'), t('confirmBruteTransfer', { bruteName: user.brutes.find((b) => b.id === selectedBrute)?.name }), async () => {
      try {
        await Server.User.transferBrute({ bruteId: selectedBrute, targetUserId });
        Alert.open('success', t('bruteTransferred'));

        updateData({
          ...user,
          // Remove brute from user data
          brutes: user.brutes.filter((b) => b.id !== selectedBrute),
          transferedBrutesCount: user.transferedBrutesCount + 1,
        });

        navigate(`/user/${targetUserId}`);
      } catch (error) {
        catchError(Alert)(error);
      }
    });
  }, [user, targetUserId, selectedBrute, Confirm, t, Server.User, Alert, updateData, navigate]);

  return (
    <Page title={t('bruteTransfer')} headerUrl={`/user/${targetUserId}`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('bruteTransfer')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          bgcolor: 'background.paperLight',
        }}
        >
          {user?.brutes.map((brute) => (
            <BruteButton
              key={brute.id}
              brute={brute}
              displayDetails={false}
              onClick={selectBrute(brute.id)}
              selected={selectedBrute === brute.id}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <FantasyButton
            onClick={transferBrute}
            color="warning"
            disabled={!selectedBrute || !targetUserId || targetUserId === user?.id}
            sx={{ m: 1 }}
          >
            {t('transfer')}
          </FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};
