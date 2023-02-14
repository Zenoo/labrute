import { FightWithBrutes } from '@labrute/core';
import { Close } from '@mui/icons-material';
import { Box, Paper, Tooltip, useMediaQuery } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import BrutePortrait from '../components/Brute/Body/BrutePortait';
import Page from '../components/Page';
import StyledButton, { StyledButtonHeight, StyledButtonWidth } from '../components/StyledButton';
import Text from '../components/Text';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';
import TournamentMobileView from './mobile/TournamentMobileView';

// const roundHours = [0, 10, 12, 14, 16, 18, 20];

const scale = (base: number, round: number) => ((round === 0 || round === 10)
  ? base * 0.5
  : (round === 1 || round === 9)
    ? base * 0.6
    : (round === 2 || round === 8)
      ? base * 0.6
      : (round === 3 || round === 7)
        ? base * 0.6
        : (round === 4 || round === 6)
          ? base * 0.8
          : base);

const TournamentView = () => {
  const { t } = useTranslation();
  const { bruteName, date } = useParams();
  const navigate = useNavigate();
  const smallScreen = useMediaQuery('(max-width: 935px)');

  const tournamentProps = useMemo(() => ({ name: bruteName || '', date: date || '' }), [bruteName, date]);
  const { data: tournament } = useStateAsync(null, Server.Tournament.getDaily, tournamentProps);

  const winnerStep = useMemo(
    () => tournament?.steps.find((step) => step.step === 63),
    [tournament],
  );

  const rounds = useMemo(() => {
    if (!tournament) return [];
    const result: typeof tournament.steps[] = [];

    // First round
    result[0] = tournament.steps.filter((step) => step.step <= 16);
    result[10] = tournament.steps.filter((step) => step.step > 16 && step.step <= 32);

    // Second round
    result[1] = tournament.steps.filter((step) => step.step > 32 && step.step <= 40);
    result[9] = tournament.steps.filter((step) => step.step > 40 && step.step <= 48);

    // Third round
    result[2] = tournament.steps.filter((step) => step.step > 48 && step.step <= 52);
    result[8] = tournament.steps.filter((step) => step.step > 52 && step.step <= 56);

    // Fourth round
    result[3] = tournament.steps.filter((step) => step.step > 56 && step.step <= 58);
    result[7] = tournament.steps.filter((step) => step.step > 58 && step.step <= 60);

    // Fifth round
    result[4] = tournament.steps.filter((step) => step.step > 60 && step.step <= 61);
    result[6] = tournament.steps.filter((step) => step.step > 61 && step.step <= 62);

    // Sixth round
    result[5] = tournament.steps.filter((step) => step.step === 63);

    return result;
  }, [tournament]);

  const goToFight = useCallback((fight: FightWithBrutes) => () => {
    navigate(`/${fight.brute1.name}/fight/${fight.id}`);
  }, [navigate]);

  return tournament && (smallScreen
    ? (
      <TournamentMobileView
        bruteName={bruteName}
        tournament={tournament}
        winnerStep={winnerStep}
      />
    ) : (
      <Page title={`${t('tournament')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
        <Paper sx={{
          mx: 4,
          textAlign: 'center',
        }}
        >
          <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('tournamentOf')} {moment.utc(tournament.date).format('DD MMMM YYYY')}</Text>
        </Paper>
        <Paper sx={{ position: 'relative', bgcolor: 'background.paperLight', mt: -2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {rounds.map((round, index) => (
              <Box
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: index === 5 ? 'start' : 'space-around',
                  ml: index === 2
                    ? '-60px'
                    : index === 3
                      ? '-80px'
                      : index === 4
                        ? '-130px'
                        : index === 5
                          ? '-110px'
                          : index === 6
                            ? '-110px'
                            : index === 7
                              ? '-130px'
                              : index === 8
                                ? '-80px'
                                : index === 9
                                  ? '-60px'
                                  : '0px',
                }}
              >
                {round.map((step) => (
                  <StyledButton
                    key={step.id}
                    onClick={goToFight(step.fight)}
                    shadowColor={(bruteName === step.fight.brute1.name
                      || bruteName === step.fight.brute2.name)
                      ? 'rgba(255, 0, 0, 0.4)'
                      : undefined}
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundSize: 'contain',
                      width: scale(StyledButtonWidth, index),
                      height: scale(StyledButtonHeight, index),
                      m: `${scale(8, index)}px`,
                    }}
                  >
                    <Tooltip title={step.fight.brute1.name}>
                      <Box sx={{ position: 'relative', mt: 1 }}>
                        <BrutePortrait
                          inverted
                          brute={step.fight.brute1}
                          sx={{
                            width: scale(100, index),
                          }}
                        />
                        {step.fight.winner === step.fight.brute2.name && (
                          <Close
                            color="error"
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: 1,
                              height: 1,
                            }}
                          />
                        )}
                      </Box>
                    </Tooltip>
                    <Box
                      component="img"
                      src="/images/tournament/vs.svg"
                      sx={{
                        width: scale(45, index),
                      }}
                    />
                    <Tooltip title={step.fight.brute2.name}>
                      <Box sx={{ position: 'relative', mt: 1 }}>
                        <BrutePortrait
                          brute={step.fight.brute2}
                          sx={{
                            width: scale(100, index),
                          }}
                        />
                        {step.fight.winner === step.fight.brute1.name && (
                          <Close
                            color="error"
                            sx={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: 1,
                              height: 1,
                            }}
                          />
                        )}
                      </Box>
                    </Tooltip>
                  </StyledButton>
                ))}
              </Box>
            ))}
          </Box>
          {winnerStep && (
            <Tooltip title={winnerStep.fight.winner}>
              <BruteComponent
                brute={winnerStep.fight.winner === winnerStep.fight.brute1.name
                  ? winnerStep.fight.brute1
                  : winnerStep?.fight.brute2}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  margin: 'auto',
                  width: 140,
                }}
              />
            </Tooltip>
          )}

        </Paper>
      </Page>
    ));
};

export default TournamentView;