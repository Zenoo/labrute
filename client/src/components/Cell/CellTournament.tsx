import { Brute } from '@labrute/prisma';
import { Paper, PaperProps } from '@mui/material';
import moment, { Moment } from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../i18n';
import Link from '../Link';
import StyledButton from '../StyledButton';
import Text from '../Text';

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
    <>
      {/* CURRENT TOURNAMENT */}
      {moment(brute.tournament).isSame(moment(), 'day') && (
        <Link to={`/${brute.name}/tournament/${moment().format('YYYY-MM-DD')}`}>
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
        {brute.tournament && moment(brute.tournament).isSame(nextTournament, 'day') ? (
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
    </>
  );
};

export default CellTournament;
