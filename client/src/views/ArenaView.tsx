import { BrutesGetOpponentsResponse, FightStat, getFightsLeft, getFinalHP, getFinalStat, getXPNeeded, pets, skills, weapons } from '@labrute/core';
import { Box, Button, Divider, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import ArenaStat from '../components/Arena/ArenaStat';
import BruteRender from '../components/Brute/Body/BruteRender';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats';
import BruteHP from '../components/Brute/BruteHP';
import BruteLevelAndXP from '../components/Brute/BruteLevelAndXP';
import PetTooltip from '../components/Brute/PetTooltip';
import SkillTooltip from '../components/Brute/SkillTooltip';
import WeaponTooltip from '../components/Brute/WeaponTooltip';
import Link from '../components/Link';
import Loader from '../components/Loader';
import Page from '../components/Page';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const ArenaView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { brute, updateBrute } = useBrute();
  const { modifiers, user, updateData } = useAuth();

  const [opponents, setOpponents] = useState<BrutesGetOpponentsResponse>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const xpNeededForNextLevel = useMemo(() => brute
    && getXPNeeded(brute.level + 1), [brute]);

  const fightsLeft = useMemo(
    () => (brute && getFightsLeft(brute, modifiers)) ?? 0,
    [brute, modifiers]
  );

  // Fetch random opponents
  useEffect(() => {
    let isSubscribed = true;
    const cleanup = () => { isSubscribed = false; };
    if (!brute) return cleanup;

    // Redirect to cell if XP is too much
    if (xpNeededForNextLevel && brute.xp >= xpNeededForNextLevel) {
      navigate(`/${brute.name}/cell`);
      return cleanup;
    }

    // Redirect to cell if brute doesn't have enough fights left
    if (fightsLeft <= 0) {
      navigate(`/${brute.name}/cell`);
    }

    Server.Brute.getOpponents(brute.name, brute.level).then((data) => {
      if (isSubscribed) {
        setOpponents(data);
      }
    }).catch(catchError(Alert));

    return cleanup;
  }, [Alert, brute, fightsLeft, navigate, xpNeededForNextLevel]);

  const changeSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  // Search for opponents
  const searchOpponent = useCallback(() => {
    if (!brute) return;
    if (search.length < 3) {
      Alert.open('error', t('arena.search.atLeastThreeCharacters'));
      return;
    }
    if (search === brute.name) {
      Alert.open('error', t('arena.search.noSelf'));
      return;
    }

    Server.Brute.exists(search).then((response) => {
      if (!response.exists) {
        Alert.open('error', t('arena.search.notFound'));
      } else {
        navigate(`/${bruteName || ''}/versus/${response.name}`);
      }
    }).catch(catchError(Alert));
  }, [Alert, brute, bruteName, navigate, search, t]);

  // Go to versus page
  const goToVersus = useCallback((opponentName: string) => () => {
    if (!user || !brute || loading) return;

    // Skip versus page
    if (!user.displayVersusPage) {
      setLoading(true);

      // Create the fight
      Server.Fight.create(brute.name, opponentName)
        .then((fight) => {
          navigate(`/${brute.name}/fight/${fight.id}`);

          // Update brute data
          updateData((data) => (data ? ({
            ...data,
            brutes: data.brutes.map((b) => (b.name === brute.name ? {
              ...b,
              fightsLeft: fight.fightsLeft,
              xp: b.xp + fight.xpWon,
              victories: b.victories + fight.victories,
              lastFight: new Date(),
            } : b)),
          }) : null));

          updateBrute((data) => (data ? ({
            ...data,
            fightsLeft: fight.fightsLeft,
            xp: data.xp + fight.xpWon,
            victories: data.victories + fight.victories,
            lastFight: new Date(),
          }) : null));
        })
        .catch(catchError(Alert))
        .finally(() => setLoading(false));
    } else {
      navigate(`/${bruteName || ''}/versus/${opponentName}`);
    }
  }, [Alert, brute, bruteName, loading, navigate, updateBrute, updateData, user]);

  return brute && (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('arena')}</Text>
        <Text bold color="secondary">{fightsLeft > 1 ? t('youHaveXFightsLeft', { value: getFightsLeft(brute, modifiers) }) : t('youHaveOneFightLeft')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Text h4 bold color="secondary" center>{brute.name}</Text>
            <BruteLevelAndXP
              brute={brute}
              textProps={{ h3: false, h5: true, color: 'primary.text', center: true }}
              sx={{ mb: 1, width: 120, mx: 'auto' }}
            />
            <BruteBodyAndStats brute={brute} isMd={isMd} />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Link to={`/${brute.name}/cell`}>
                <Text bold>{t('backToCell')}</Text>
              </Link>
              {!isMd && (
                <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/bear.webp`} sx={{ maxWidth: 1 }} />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={5.6}>
            {loading ? <Loader height={346} /> : (
              <Grid container spacing={1} mb={3}>
                {opponents.map((opponent) => (
                  <Grid item key={opponent.name} xs={12} sm={6} mb={1.5}>
                    <Box sx={{
                      width: 185,
                      height: 1,
                      p: 1,
                      pt: 1,
                      pb: user?.displayOpponentDetails ? 1 : 1.8,
                      mx: 'auto',
                      textAlign: 'left',
                      position: 'relative',
                      backgroundImage: `url(/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/brute-bg${user?.displayOpponentDetails ? '-high' : ''}.webp)`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '100% 100%',
                    }}
                    >
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                      >
                        <Box display="flex" alignItems="center">
                          <Text bold color="secondary" sx={{ display: 'inline' }}>{opponent.name}</Text>
                        </Box>
                      </Box>
                      <Text bold smallCaps color="text.primary">
                        {t('level')}
                        <Text component="span" bold color="secondary"> {opponent.level}</Text>
                        {opponent.eventId ? (
                          <Box
                            component="img"
                            src="/images/event.webp"
                            sx={{
                              verticalAlign: 'sub',
                              height: 18,
                              ml: 0.5,
                            }}
                          />
                        ) : (
                          <Box
                            component="img"
                            src={`/images/rankings/lvl_${opponent.ranking}.webp`}
                            sx={{
                              verticalAlign: 'middle',
                              height: 16,
                              ml: 0.5,
                            }}
                          />
                        )}
                      </Text>
                      <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                        <BruteHP hp={getFinalHP(opponent, modifiers)} />
                        <Box flexGrow={1} sx={{ ml: 0.5 }}>
                          <ArenaStat
                            stat={FightStat.STRENGTH}
                            value={getFinalStat(opponent, 'strength', modifiers)}
                            hideSkillText
                          />
                          <ArenaStat
                            stat={FightStat.AGILITY}
                            value={getFinalStat(opponent, 'agility', modifiers)}
                            hideSkillText
                          />
                          <ArenaStat
                            stat={FightStat.SPEED}
                            value={getFinalStat(opponent, 'speed', modifiers)}
                            hideSkillText
                          />
                        </Box>
                      </Box>
                      {user?.displayOpponentDetails && (
                        <>
                          <Divider
                            sx={{
                              ml: -0.75,
                              mr: -0.4,
                              mt: 0.5,
                              borderColor: 'primary.main',
                            }}
                          />
                          {/* Weapons */}
                          <Box pt={1}>
                            {opponent.weapons.map((weapon) => (
                              <WeaponTooltip
                                weapon={weapons.find((w) => w.name === weapon)}
                                key={weapon}
                              >
                                <Box component="img" src={`/images/game/resources/misc/weapons/${weapon}.png`} sx={{ filter: 'drop-shadow(1px 1px 1px black)' }} />
                              </WeaponTooltip>
                            ))}
                          </Box>
                          {/* Skills */}
                          <Box>
                            {opponent.skills.map((skill) => (
                              <SkillTooltip
                                skill={skills.find((s) => s.name === skill)}
                                key={skill}
                              >
                                <Box
                                  component="img"
                                  src={`/images/skills/${skill}.svg`}
                                  sx={{
                                    width: 16,
                                    mx: 0.25,
                                    my: 0,
                                    filter: 'drop-shadow(1px 1px 1px black)'
                                  }}
                                />
                              </SkillTooltip>
                            ))}
                          </Box>
                          {/* Pets */}
                          <Box>
                            {opponent.pets.map((pet) => (
                              <PetTooltip pet={pets.find((p) => p.name === pet)} key={pet}>
                                <Box component="img" src={`/images/pets/${pet.replace(/\d/g, '')}.svg`} sx={{ width: 16, m: 0.25, mb: 0, filter: 'drop-shadow(1px 1px 1px black)' }} />
                              </PetTooltip>
                            ))}
                          </Box>
                        </>
                      )}
                      <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 115,
                        width: 70,
                        height: user?.displayOpponentDetails ? 94 : 98,
                        overflow: 'hidden',
                      }}
                      >
                        <BruteRender
                          brute={opponent}
                          looking="left"
                          onClick={goToVersus(opponent.name)}
                          sx={{
                            cursor: 'pointer',
                            '&:hover': {
                              filter: 'drop-shadow(0px 0px 2px #ff0000)',
                            },
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', mt: 1 }}>
              <StyledInput
                onChange={changeSearch}
                value={search}
                sx={{ mr: 2 }}
              />
              <Button onClick={searchOpponent} variant="mybrute">{t('arena.search')}</Button>
            </Box>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={2.4}>
              <Text bold>{t('selectedOpponents')}</Text>
              <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default ArenaView;
