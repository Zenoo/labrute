import { Fighter, TournamentsGetDailyResponse } from '@labrute/core';
import { Brute, Gender } from '@labrute/prisma';
import { Close } from '@mui/icons-material';
import { Box, Paper, useTheme } from '@mui/material';
import moment from 'moment';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import BruteRender from '../../components/Brute/Body/BruteRender';
import BruteTooltip from '../../components/Brute/BruteTooltip';
import FantasyButton from '../../components/FantasyButton';
import Page from '../../components/Page';
import StyledButton, { StyledButtonHeight, StyledButtonWidth } from '../../components/StyledButton';
import Text from '../../components/Text';
import { useAuth } from '../../hooks/useAuth';

const rounds: [number, number][] = [
  [-1, 32],
  [32, 48],
  [48, 56],
  [56, 60],
  [60, 62],
  [62, 63],
];

const fighterToBrute = (fighter: Fighter) => ({
  id: fighter.id,
  gender: fighter.gender || Gender.male,
  name: fighter.name,
  hp: fighter.maxHp,
  level: fighter.level,
  strengthValue: fighter.strength,
  agilityValue: fighter.agility,
  speedValue: fighter.speed,
  body: fighter.body || '0'.repeat(11),
  colors: fighter.colors || '0'.repeat(32),
});

interface Props {
  bruteName?: string,
  tournament: TournamentsGetDailyResponse,
  winnerFight?: TournamentsGetDailyResponse['fights'][number],
  winnerFightFighters?: Fighter[],
  ownsBrute: boolean,
  stepWatched: number,
  brute: Brute | null,
  display: boolean,
  goToFight: (fight: TournamentsGetDailyResponse['fights'][number], newStep: number) => () => void,
  setWatched: () => void,
}

const TournamentMobileView = ({
  bruteName,
  tournament,
  winnerFight,
  winnerFightFighters,
  ownsBrute,
  stepWatched,
  brute,
  display,
  goToFight,
  setWatched,
}: Props) => {
  const { t } = useTranslation();
  const { authing } = useAuth();
  const { palette: { mode } } = useTheme();

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
        {ownsBrute && stepWatched < 6 && (
          <FantasyButton onClick={setWatched} color="success">
            {t('setAsWatched')}
          </FantasyButton>
        )}
        {display && (!authing && brute) && rounds.map(([start, end], index) => {
          const shouldDisplay = ownsBrute
            ? stepWatched >= index
            : true;
          const shouldResultDisplay = ownsBrute
            ? stepWatched - 1 >= index
            : true;

          return shouldDisplay && (
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
                {tournament.fights.filter(
                  (fight) => fight.tournamentStep > start && fight.tournamentStep <= end
                ).map((fight) => {
                  const fighters = JSON.parse(fight.fighters) as Fighter[];
                  const brute1 = fighters.find((fighter) => !fighter.master && fighter.type === 'brute' && fighter.team === 'L');
                  const brute2 = fighters.find((fighter) => !fighter.master && fighter.type === 'brute' && fighter.team === 'R');
                  return (
                    // Fight button
                    <StyledButton
                      key={fight.id}
                      onClick={goToFight(fight, index + 1)}
                      shadowColor={fighters.some((fighter) => fighter.name === bruteName)
                        ? '#006CD1'
                        : undefined}
                      sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundSize: 'contain',
                        width: StyledButtonWidth * 0.7,
                        height: StyledButtonHeight * 0.7,
                        m: 1,
                        overflow: 'hidden',
                      }}
                    >
                      {/* Left fighter */}
                      {brute1 && (
                      <BruteTooltip
                        fighter={brute1}
                      >
                        <Box sx={{
                          position: 'relative',
                          height: 1,
                          width: 35,
                          mr: 1,
                        }}
                        >
                          {brute1 && (
                          <BruteRender brute={
                            { ...brute1,
                              gender: brute1.gender ?? Gender.male,
                              body: brute1.body ?? '',
                              colors: brute1.colors ?? '' }
}
                          />
                          )}
                          {/* Lost indicator */}
                          {shouldResultDisplay
                            && fight.winner === brute2?.name
                            && (
                              <Close
                                color="error"
                                sx={{
                                  position: 'absolute',
                                  top: 5,
                                  left: 0,
                                  width: 1,
                                  height: 1,
                                  zIndex: 3,
                                }}
                              />
                            )}
                          {/* Rank */}
                          <Box
                            component="img"
                            src={`/images/rankings/lvl_${brute1?.rank}.webp`}
                            sx={{
                              position: 'absolute',
                              bottom: -6,
                              right: -18,
                              width: 20,
                              zIndex: 2,
                            }}
                          />
                        </Box>
                      </BruteTooltip>
                      )}
                      {/* VS */}
                      <Box
                        component="img"
                        src={`/images${mode === 'dark' ? '/dark' : ''}/tournament/vs.webp`}
                        sx={{
                          width: 40,
                        }}
                      />
                      {/* Right fighter */}
                      {brute2 && (
                        <BruteTooltip
                          fighter={brute2}
                        >
                          <Box sx={{
                            position: 'relative',
                            height: 1,
                            width: 35,
                            ml: 1,
                          }}
                          >
                            <BruteRender
                              brute={fighterToBrute(brute2)}
                              looking="left"
                            />
                            {/* Lost indicator */}
                            {shouldResultDisplay
                              && fight.winner === brute1?.name
                              && (
                                <Close
                                  color="error"
                                  sx={{
                                    position: 'absolute',
                                    top: 5,
                                    left: 0,
                                    width: 1,
                                    height: 1,
                                    zIndex: 3,
                                  }}
                                />
                              )}
                            {/* Rank */}
                            <Box
                              component="img"
                              src={`/images/rankings/lvl_${fighters.find((f) => f.id === brute2?.id)?.rank}.webp`}
                              sx={{
                                position: 'absolute',
                                bottom: -6,
                                left: -18,
                                width: 20,
                                transform: 'scaleX(-1)',
                                zIndex: 2,
                              }}
                            />
                          </Box>
                        </BruteTooltip>
                      )}
                    </StyledButton>
                  );
                })}
              </Box>
            </Fragment>
          );
        })}
        {display
          && winnerFight?.brute2
          && winnerFightFighters
          && (!authing && brute)
          && (!ownsBrute || (ownsBrute && stepWatched > 5))
          && (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            >
              <BruteTooltip
                fighter={winnerFight.winner === winnerFight.brute1?.name
                  ? winnerFightFighters
                    .find((fighter) => fighter.type === 'brute' && fighter.name === winnerFight.brute1?.name)
                  : winnerFightFighters
                    .find((fighter) => fighter.type === 'brute' && fighter.name === winnerFight.brute2?.name)}
                brute={winnerFight.winner === winnerFight.brute1?.name
                  ? winnerFight.brute1
                  : winnerFight.brute2}
              >
                <Box width={100} mx="auto">
                  <BruteRender
                    brute={winnerFight.winner === winnerFight.brute1?.name
                      ? winnerFight.brute1
                      : winnerFight?.brute2}
                    width={100}
                    sx={{
                      width: '100%',
                      left: 0,
                    }}
                  />
                </Box>
              </BruteTooltip>
              <Box
                component="img"
                src="/images/tournament/podium.svg"
                sx={{
                  width: 155,
                  marginTop: '-55px',
                  marginLeft: '20px',
                }}
              />
            </Box>
          )}

      </Paper>
    </Page>
  );
};

export default TournamentMobileView;
