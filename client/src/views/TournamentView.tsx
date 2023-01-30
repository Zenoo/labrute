import { Paper } from '@mui/material';
import moment from 'moment';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Link from '../components/Link';
import Page from '../components/Page';
import Text from '../components/Text';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

const TournamentView = () => {
  const { t } = useTranslation();
  const { bruteName, date } = useParams();

  const tournamentProps = useMemo(() => ({ name: bruteName || '', date: date || '' }), [bruteName, date]);
  const { data: tournament } = useStateAsync(null, Server.Tournament.getDaily, tournamentProps);

  const winnerStep = useMemo(
    () => tournament?.steps.find((step) => step.step === 63),
    [tournament],
  );

  return tournament && (
    <Page title={`${t('tournament')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{
        mx: 4,
        textAlign: 'center',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('tournamentOf')} {moment.utc(tournament.date).format('DD MMMM YYYY')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Text bold>Round 1</Text>
        {tournament.steps.filter((step) => step.step <= 32).map((step) => (
          <Link key={step.id} to={`/${step.fight.brute1.name}/fight/${step.fight.id}`}>
            <Text>{step.fight.brute1.name} VS {step.fight.brute2.name} {'=>'} {step.fight.winner}</Text>
          </Link>
        ))}
        <Text bold>Round 2</Text>
        {tournament.steps.filter((step) => step.step > 32 && step.step <= 48).map((step) => (
          <Link key={step.id} to={`/${step.fight.brute1.name}/fight/${step.fight.id}`}>
            <Text>{step.fight.brute1.name} VS {step.fight.brute2.name} {'=>'} {step.fight.winner}</Text>
          </Link>
        ))}
        <Text bold>Round 3</Text>
        {tournament.steps.filter((step) => step.step > 48 && step.step <= 56).map((step) => (
          <Link key={step.id} to={`/${step.fight.brute1.name}/fight/${step.fight.id}`}>
            <Text>{step.fight.brute1.name} VS {step.fight.brute2.name} {'=>'} {step.fight.winner}</Text>
          </Link>
        ))}
        <Text bold>Round 4</Text>
        {tournament.steps.filter((step) => step.step > 56 && step.step <= 60).map((step) => (
          <Link key={step.id} to={`/${step.fight.brute1.name}/fight/${step.fight.id}`}>
            <Text>{step.fight.brute1.name} VS {step.fight.brute2.name} {'=>'} {step.fight.winner}</Text>
          </Link>
        ))}
        <Text bold>Round 5</Text>
        {tournament.steps.filter((step) => step.step > 60 && step.step <= 62).map((step) => (
          <Link key={step.id} to={`/${step.fight.brute1.name}/fight/${step.fight.id}`}>
            <Text>{step.fight.brute1.name} VS {step.fight.brute2.name} {'=>'} {step.fight.winner}</Text>
          </Link>
        ))}
        {winnerStep && (
          <>
            <Text bold>Final</Text>
            <Link to={`/${winnerStep.fight.brute1.name}/fight/${winnerStep.fight.id}`}>
              <Text>{winnerStep.fight.brute1.name} VS {winnerStep.fight.brute2.name} {'=>'} {winnerStep.fight.winner}</Text>
            </Link>
          </>
        )}
      </Paper>
    </Page>
  );
};

export default TournamentView;
