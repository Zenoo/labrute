import { Brute } from '@eternaltwin/labrute-core/types';
import { Paper, PaperProps } from '@mui/material';
import moment, { Moment } from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../i18n.js';
import StyledButton from '../StyledButton.js';
import Text from '../Text.js';

export interface CellTournamentProps extends PaperProps {
  brute: Brute;
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

  return (
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
      {brute.data.tournament && moment(brute.data.tournament).isSame(nextTournament, 'day') ? (
        <Text>{t('bruteRegistered')}</Text>
      ) : (
        <Text>{t(ownsBrute ? 'youCanRegisterYourBrute' : 'bruteNotRegistered')}</Text>
      )}
      {ownsBrute && (
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
        />
      )}
    </Paper>
  );
};

export default CellTournament;
