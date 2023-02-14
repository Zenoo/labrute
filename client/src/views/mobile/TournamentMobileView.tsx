import { FightWithBrutes, FullTournament } from '@labrute/core';
import { Close } from '@mui/icons-material';
import { Box, Paper, Tooltip } from '@mui/material';
import moment from 'moment';
import React, { Fragment, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import BruteComponent from '../../components/Brute/Body/BruteComponent';
import BrutePortrait from '../../components/Brute/Body/BrutePortait';
import Page from '../../components/Page';
import StyledButton, { StyledButtonHeight, StyledButtonWidth } from '../../components/StyledButton';
import Text from '../../components/Text';

// const roundHours = [0, 10, 12, 14, 16, 18, 20];
const rounds = [
  [-1, 32],
  [32, 48],
  [48, 56],
  [56, 60],
  [60, 62],
  [62, 63],
];

interface Props {
  bruteName?: string,
  tournament: FullTournament,
  winnerStep?: FullTournament['steps'][number],
}

const TournamentMobileView = ({
  bruteName,
  tournament,
  winnerStep,
}: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToFight = useCallback((fight: FightWithBrutes) => () => {
    navigate(`/${fight.brute1.name}/fight/${fight.id}`);
  }, [navigate]);

  return tournament && (
    <Page title={`${t('tournament')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{
        mx: 4,
        textAlign: 'center',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('tournamentOf')} {moment.utc(tournament.date).format('DD MMMM YYYY')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2, }}>
        {rounds.map(([start, end], index) => (
          <Fragment key={start}>
            <Text h4 bold>
              {index < 3
                ? t('round', { value: index + 1 })
                : index === 3
                  ? t('quarterFinals')
                  : index === 4
                    ? t('semiFinals')
                    : t('finals')}
            </Text>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {tournament.steps.filter((step) => step.step > start && step.step <= end)
                .map((step) => (
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
                      width: StyledButtonWidth * 0.7,
                      height: StyledButtonHeight * 0.7,
                      m: 1,
                    }}
                  >
                    <Tooltip title={step.fight.brute1.name}>
                      <Box sx={{ position: 'relative', mt: 1 }}>
                        <BrutePortrait
                          inverted
                          brute={step.fight.brute1}
                          sx={{
                            height: 45,
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
                        width: 40,
                      }}
                    />
                    <Tooltip title={step.fight.brute2.name}>
                      <Box sx={{ position: 'relative', mt: 1 }}>
                        <BrutePortrait
                          brute={step.fight.brute2}
                          sx={{
                            height: 45,
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
          </Fragment>
        ))}
        {winnerStep && (
          <Tooltip title={winnerStep.fight.winner}>
            <BruteComponent
              brute={winnerStep.fight.winner === winnerStep.fight.brute1.name
                ? winnerStep.fight.brute1
                : winnerStep?.fight.brute2}
              sx={{
                display: 'block',
                width: 140,
                m: '0 auto'
              }}
            />
          </Tooltip>
        )}

      </Paper>
    </Page>
  );
};

export default TournamentMobileView;
