import { Lang } from '@labrute/prisma';
import { Box, Paper, PaperProps } from '@mui/material';
import dayjs from 'dayjs';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import FantasyButton from '../FantasyButton';
import StyledButton from '../StyledButton';
import Text from '../Text';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export interface CellTournamentProps extends PaperProps {
  language: Lang;
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
  const Server = useServer();

  const now = useMemo(() => dayjs.utc(), []);
  const tomorrow = useMemo(() => dayjs.utc().add(1, 'day'), []);

  const registerBrute = useCallback(async () => {
    if (!brute) return;
    try {
      await Server.Tournament.registerDaily(brute?.name || '');
      Alert.open('success', t('bruteRegistered', { ns: 'global' }));

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
    } catch (error) {
      catchError(Alert, error);
    }
  }, [Alert, Server.Tournament, brute, t, updateBrute, updateData]);

  return brute && (
    <>
      {/* CURRENT TOURNAMENT */}
      {!!brute.tournaments.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <FantasyButton
            color="secondary"
            to={`/${brute.name}/tournament/${now.format('YYYY-MM-DD')}`}
            sx={{ my: 1 }}
          >
            {t('tournament', { ns: 'global' })}
          </FantasyButton>
        </Box>
      )}
      {/* NEXT TOURNAMENT (Only displayed if you can't rank up and if you have watched your daily tournament) */}
      {
        !brute.canRankUpSince
        && (!dayjs.utc(brute.currentTournamentDate).isSame(dayjs.utc(), 'day') || brute.currentTournamentStepWatched === 6)
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
            <Text bold h6>{t('tournamentOf', { ns: 'global' })} {tomorrow.format('DD MMMM YYYY')}</Text>
            {(brute.registeredForTournament) ? (
              <Text>{t('bruteRegistered', { ns: 'global' })}</Text>
            ) : (
              <Text>{t(owner ? 'youCanRegisterYourBrute' : 'bruteNotRegistered', { ns: 'global' })}</Text>
            )}
            {owner && !brute.registeredForTournament && (
              <StyledButton
                sx={{
                  height: 72,
                  width: 216,
                  mx: 'auto',
                }}
                image={`/images/${language}/cell/tournament.webp`}
                imageHover={`/images/${language}/cell/tournament-hover.webp`}
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
