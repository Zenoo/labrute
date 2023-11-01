import { Language } from '@labrute/core';
import { Box, Paper, PaperProps } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';
import FantasyButton from '../FantasyButton';
import Link from '../Link';
import StyledButton from '../StyledButton';
import Text from '../Text';

export interface CellTournamentProps extends PaperProps {
  language: Language;
}

const CellTournament = ({
  language,
  sx,
  ...rest
}: CellTournamentProps) => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { brute, owner, updateBrute } = useBrute();
  const { updateData } = useAuth();

  const now = useMemo(() => moment.utc(), []);
  const tomorrow = useMemo(() => moment.utc().add(1, 'day'), []);

  const registerBrute = useCallback(() => {
    if (!brute) return;
    Server.Tournament.registerDaily(brute?.name || '').then(() => {
      Alert.open('success', t('bruteRegistered'));

      updateBrute({
        ...brute,
        registeredForTournament: true,
      });
      updateData((data) => (data ? ({
        ...data,
        brutes: data.brutes.map((b) => {
          if (b.name === brute.name) {
            return {
              ...b,
              registeredForTournament: true,
            };
          }
          return b;
        }),
      }) : data));
    }).catch(catchError(Alert));
  }, [Alert, brute, t, updateBrute, updateData]);

  return brute && (
    <>
      {/* CURRENT TOURNAMENT */}
      {!!brute.tournaments.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={`/${brute.name}/tournament/${now.format('YYYY-MM-DD')}`}>
            <FantasyButton
              color="warning"
              sx={{ my: 1 }}
            >
              {t('tournament')}
            </FantasyButton>
          </Link>
        </Box>
      )}
      {/* NEXT TOURNAMENT (Only displayed if you can't rank up and if you have watched your daily tournament) */}
      {
        !brute.canRankUpSince
        && (!moment.utc(brute.currentTournamentDate).isSame(moment.utc(), 'day') || brute.currentTournamentStepWatched === 6)
        && (
          <Paper
            sx={{
              bgcolor: 'background.paperDark',
              textAlign: 'center',
              p: 1,
              ...sx
            }}
            {...rest}
          >
            <Text bold h6>{t('tournamentOf')} {tomorrow.format('DD MMMM YYYY')}</Text>
            {(brute.registeredForTournament) ? (
              <Text>{t('bruteRegistered')}</Text>
            ) : (
              <Text>{t(owner ? 'youCanRegisterYourBrute' : 'bruteNotRegistered')}</Text>
            )}
            {owner && !brute.registeredForTournament && (
              <StyledButton
                sx={{
                  height: 72,
                  width: 216,
                  mx: 'auto',
                }}
                image={`/images/${language}/cell/tournament.gif`}
                imageHover={`/images/${language}/cell/tournament-hover.gif`}
                shadow={false}
                contrast={false}
                onClick={registerBrute}
              />
            )}
          </Paper>
        )
      }
    </>
  );
};

export default CellTournament;
