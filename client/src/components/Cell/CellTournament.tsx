import { BruteWithMasterBodyColorsClanTournament } from '@labrute/core';
import { Paper, PaperProps } from '@mui/material';
import moment, { Moment } from 'moment';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../hooks/useAlert';
import { Language } from '../../i18n';
import catchError from '../../utils/catchError';
import Server from '../../utils/Server';
import Link from '../Link';
import StyledButton from '../StyledButton';
import Text from '../Text';

export interface CellTournamentProps extends PaperProps {
  brute: BruteWithMasterBodyColorsClanTournament;
  nextTournament: Moment;
  ownsBrute: boolean;
  language: Language;
}

const CellTournament = ({
  brute,
  nextTournament,
  ownsBrute,
  language,
  sx,
  ...rest
}: CellTournamentProps) => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [registered, setRegistered] = useState(false);

  const now = useMemo(() => moment(), []);
  const tournamentDate = useMemo(() => (brute.tournament
    ? moment(brute.tournament)
    : null), [brute.tournament]);

  const registerBrute = useCallback(() => {
    Server.Tournament.registerDaily(brute.name).then(() => {
      Alert.open('success', t('bruteRegistered'));

      setRegistered(true);
    }).catch(catchError(Alert));
  }, [Alert, brute.name, t]);

  return (
    <>
      {/* CURRENT TOURNAMENT */}
      {brute.tournaments.length && (
        <Link to={`/${brute.name}/tournament/${now.format('YYYY-MM-DD')}`}>
          <StyledButton
            image="/images/button.gif"
            imageHover="/images/button-hover.gif"
            shadow={false}
            contrast={false}
            shift="8px"
            sx={{
              fontVariant: 'small-caps',
              m: '0 auto',
              mt: 2,
              height: 56,
              width: 246,
            }}
          >
            {t('tournament')}
          </StyledButton>
        </Link>
      )}
      {/* NEXT TOURNAMENT */}
      <Paper
        sx={{
          bgcolor: 'background.paperDark',
          textAlign: 'center',
          p: 1,
          ...sx
        }}
        {...rest}
      >
        <Text bold h6>{t('tournamentOf')} {nextTournament.format('DD MMMM YYYY')}</Text>
        {(tournamentDate?.isSame(nextTournament, 'day') || registered) ? (
          <Text>{t('bruteRegistered')}</Text>
        ) : (
          <Text>{t(ownsBrute ? 'youCanRegisterYourBrute' : 'bruteNotRegistered')}</Text>
        )}
        {ownsBrute && !registered && !tournamentDate?.isSame(nextTournament, 'day') && (
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
    </>
  );
};

export default CellTournament;
