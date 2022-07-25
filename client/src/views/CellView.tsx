import { Box, Divider, Grid, Link, Paper, Stack, Tooltip, useMediaQuery } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import BoxWithBackground from '../components/BoxWithBackground';
import { default as BruteComponent } from '../components/Brute/Brute';
import CellLog from '../components/Cell/CellLog';
import CellPets from '../components/Cell/CellPets';
import CellStats from '../components/Cell/CellStats';
import CellWeapons from '../components/Cell/CellWeapons';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import useStateAsync from '../hooks/useStateAsync';
import advertisings from '../utils/advertisings';
import getXPNeeded from '../utils/brute/getXPNeeded';
import skills from '../utils/brute/skills';
import weapons from '../utils/brute/weapons';
import Server from '../utils/Server';
import CellMobileView from './mobile/CellMobileView';

const panther = Math.random() < 0.5;

/**
 * CellView component
 */
const CellView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const { user } = useAuth();
  const smallScreen = useMediaQuery('(max-width: 935px)');
  const { language } = useLanguage();

  const { data: brute, set: setBrute } = useStateAsync(null, Server.Brute.get, bruteName);
  const { data: logs } = useStateAsync([], Server.Log.list, brute?.id);

  const ownsBrute = useMemo(() => user && brute && user.brutes
    && user.brutes.find((b) => b.id === brute.id), [user, brute]);

  // Test brute
  useEffect(() => {
    if (bruteName === '__test') {
      const endurance = Math.floor(Math.random() * 60) + 1;
      const strength = Math.floor(Math.random() * 60) + 1;
      const agility = Math.floor(Math.random() * 60) + 1;
      const speed = Math.floor(Math.random() * 60) + 1;
      setBrute({
        id: 1,
        rank: 3333,
        data: {
          user: '',
          name: 'blablabla',
          level: 55,
          xp: 72,
          stats: {
            hp: Math.floor(Math.random() * (2000 - 200 + 1)) + 200,
            endurance: {
              stat: endurance,
              modifier: 1,
              value: endurance,
            },
            strength: {
              stat: strength,
              modifier: 1,
              value: strength,
            },
            agility: {
              stat: agility,
              modifier: 1,
              value: agility,
            },
            speed: {
              stat: speed,
              modifier: 1,
              value: speed,
            },
          },
          ranking: Math.floor(Math.random() * 10) + 1 as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
          gender: 'female',
          body: {
            longHair: 2,
            lowerRightArm: 1,
            rightHand: 1,
            upperRightArm: 1,
            rightShoulder: 1,
            rightFoot: 1,
            lowerRightLeg: 1,
            upperRightLeg: 1,
            leftFoot: 1,
            lowerLeftLeg: 1,
            pelvis: 1,
            upperLeftLeg: 1,
            tummy: 1,
            torso: 1,
            head: 1,
            leftHand: 1,
            upperLeftArm: 1,
            lowerLeftArm: 1,
            leftShoulder: 1,
          },
          colors: {
            skin: {
              color: '#fbe6c8',
              shade: '#e7d2b4'
            },
            hair: {
              color: '#8e63ad',
              shade: '#7a4f99'
            },
            primary: {
              color: '#559399',
              shade: '#417f85'
            },
            secondary: {
              color: '#b85f1d',
              shade: '#a44b09'
            },
            accent: {
              color: '#df7e37',
              shade: '#cb6a23'
            }
          },
          weapons: [...weapons].sort(() => 0.5 - Math.random()).slice(0, 12).map((w) => w.name),
          skills: [...skills].sort(() => 0.5 - Math.random()).slice(0, 12).map((s) => s.name),
          pets: {
            dog: Math.floor(Math.random() * 4) as 0 | 1 | 2 | 3,
            panther: panther ? 1 : 0,
            bear: panther ? 0 : Math.floor(Math.random() * 2) as 0 | 1,
          },
          master: {
            id: 999,
            name: 'BigBoss'
          },
          victories: 1540,
          pupils: 360,
        }
      });
    }
  }, [bruteName, setBrute]);

  // Randomized advertising
  const advertising = useMemo(() => advertisings[Math.floor(
    Math.random() * (advertisings.length - 1) + 1
  )], []);

  return brute && (smallScreen
    ? (
      <CellMobileView
        bruteName={bruteName}
        brute={brute}
        advertising={advertising}
        logs={logs}
      />
    )
    : (
      <Page title={`${bruteName || ''} ${t('MyBrute')}`}>
        <Box display="flex" zIndex={1} sx={{ mt: 2 }}>
          {/* BRUTE NAME + SOCIALS */}
          <Paper sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            ml: 3,
            mr: 1,
            flexGrow: 1,
            py: 0,
            px: 1,
            mb: '5px',
          }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Text h2 sx={{ fontVariant: 'small-caps' }}>{brute.data.name}</Text>
              </Grid>
              <Grid item xs={3}>
                {!!brute.data.master.id && (
                  <Box>
                    <Text bold color="secondary" component="span">{t('master')}: </Text>
                    <Text bold component="span"><Link href={`/cell/${brute.data.master.name}`}>{brute.data.master.name}</Link></Text>
                  </Box>
                )}
                <Box>
                  <Text bold color="secondary" component="span">{t('ranking')}: </Text>
                  <Text bold component="span">{brute.rank || 'N.A'}</Text>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <Text bold color="secondary" component="span">{t('victories')}: </Text>
                  <Text bold component="span">{brute.data.victories}</Text>
                </Box>
                {!!brute.data.pupils && (
                  <Box>
                    <Text bold color="secondary" component="span">{t('pupils')}: </Text>
                    <Text bold component="span">{brute.data.pupils}</Text>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Paper>
          <Paper sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottom: 'none',
            width: 270,
            bgcolor: 'background.paperLight',
            mb: 0,
          }}
          />
        </Box>
        <Paper sx={{
          borderTopRightRadius: 0,
          bgcolor: 'background.paperLight',
          zIndex: 2,
          position: 'relative',
          mt: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -9,
            right: 0,
            width: 302,
            height: '9px',
            bgcolor: 'background.paperLight',
          },
        }}
        >
          <Box display="flex">
            {/* MAIN */}
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Box sx={{ width: 315 }}>
                {/* WEAPONS */}
                <Text bold sx={{ textAlign: 'center' }}>{t('weaponsBonuses')}</Text>
                <CellWeapons weapons={brute.data.weapons} />
                {/* SKILLS */}
                <Grid container spacing={1} sx={{ pt: 1 }}>
                  {skills.map((skill) => (
                    <Grid
                      item
                      xs={12 / 7}
                      key={skill.name}
                      sx={{ opacity: brute.data.skills.includes(skill.name) ? 1 : 0.5 }}
                    >
                      {brute.data.skills.includes(skill.name) ? (
                        <Tooltip
                          title={(
                            <>
                              <Box
                                component="img"
                                src={`/images/skills/${skill.icon}.svg`}
                                sx={{ width: 68, float: 'left', marginRight: 1 }}
                              />
                              <Text bold h5>{t(skill.name)}</Text>
                              <Divider />
                              <Text sx={{ mt: 1.5, fontSize: 12 }}>{t(`${skill.name}.desc`)}</Text>
                            </>
                          )}
                          componentsProps={{
                            tooltip: { sx: { minHeight: 68 } },
                            popper: { sx: { width: 250 } },
                          }}
                        >
                          <Box
                            component="img"
                            src={`/images/skills/${skill.icon}.svg`}
                            sx={{
                              boxShadow: 4,
                            }}
                          />
                        </Tooltip>
                      ) : (
                        <Box
                          component="img"
                          src={`/images/skills/${skill.icon}.svg`}
                          sx={{
                            boxShadow: 4,
                          }}
                        />
                      )}
                    </Grid>
                  ))}
                </Grid>
                {/* PETS */}
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <CellPets pets={brute.data.pets} />
                </Box>
              </Box>
              <Box sx={{ flexGrow: 1, pl: 1 }}>
                <Box display="flex" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                  <Box width={120}>
                    <Text bold h3 smallCaps color="secondary">{t('level')} {brute.data.level}</Text>
                    {/* LEVEL BAR */}
                    <Tooltip title={`${brute.data.xp} / ${getXPNeeded(brute.data.level + 1)}`}>
                      <Box sx={{ bgcolor: 'secondary.main', p: '2px' }}>
                        <Box sx={{
                          bgcolor: 'level',
                          height: 3,
                          width: brute.data.xp / getXPNeeded(brute.data.level + 1)
                        }}
                        />
                      </Box>
                    </Tooltip>
                  </Box>
                  {/* RANKING */}
                  {brute.data.ranking < 10 && (
                    <Box sx={{ width: 140, display: 'flex', flexDirection: 'row' }}>
                      <Box component="img" src={`/images/rankings/lvl_${brute.data.ranking}.gif`} />
                      <Text bold color="secondary" sx={{ pl: 0.5 }}>{t(`lvl_${brute.data.ranking}`)}</Text>
                    </Box>
                  )}
                </Box>
                <Box display="flex" flexDirection="row" sx={{ mb: 1 }}>
                  {/* BRUTE */}
                  <BruteComponent
                    gender={brute.data.gender}
                    bodyParts={brute.data.body}
                    colors={brute.data.colors}
                    inverted
                    height="160"
                  />
                  <Stack spacing={1} flexGrow="1">
                    {/* HP */}
                    <Box>
                      <BoxWithBackground
                        url="/images/hp.gif"
                        alt="HP"
                        sx={{ textAlign: 'center', pt: '5px', width: 39, display: 'inline-block' }}
                      >
                        <Text bold color="common.white">{brute.data.stats.hp}</Text>
                      </BoxWithBackground>
                      <Text bold sx={{ display: 'inline-block', ml: 1 }}>{t('healthPoints')}</Text>
                    </Box>
                    {/* STRENGTH */}
                    <CellStats stats={brute.data.stats} stat="strength" />
                    {/* AGILITY */}
                    <CellStats stats={brute.data.stats} stat="agility" />
                    {/* SPEED */}
                    <CellStats stats={brute.data.stats} stat="speed" />
                  </Stack>
                </Box>
                {ownsBrute && (
                  <Stack spacing={1} sx={{ alignItems: 'center', mt: 1 }}>
                    <Text bold>{t('callToFight')}</Text>
                    <StyledButton
                      sx={{
                        height: 72,
                        width: 218,
                      }}
                      image={`/images/${language}/cell/arena.gif`}
                      imageHover={`/images/${language}/cell/arena-hover.gif`}
                      shadow={false}
                      contrast={false}
                    />
                    <Text bold color="error">{t('fightsLeft', { value: 6 })}</Text>
                  </Stack>
                )}
                {/* TOURNAMENT */}
                <Paper sx={{ bgcolor: 'background.paperDark' }}>
                  test
                  {ownsBrute && (
                    <StyledButton
                      sx={{
                        height: 72,
                        width: 216,
                      }}
                      image={`/images/${language}/cell/tournament.gif`}
                      imageHover={`/images/${language}/cell/tournament-hover.gif`}
                      shadow={false}
                      contrast={false}
                    />
                  )}
                </Paper>
              </Box>
            </Box>
            {/* RIGHT SIDE */}
            <Box sx={{
              position: 'relative',
              width: 270,
              mt: -7,
            }}
            >
              <Tooltip title={t('refLink')}>
                <Paper sx={{
                  mx: 0,
                  p: 1,
                  bgcolor: 'background.paperAccent',
                  textAlign: 'center'
                }}
                >
                  <Text bold>{`${window.location.origin}?ref=${bruteName}`}</Text>
                </Paper>
              </Tooltip>

              {brute.data.clan && (
                <StyledButton
                  image="/images/button.gif"
                  imageHover="/images/button-hover.gif"
                  shadow={false}
                  contrast={false}
                  sx={{
                    fontVariant: 'small-caps',
                    m: '0 auto',
                    mt: 2,
                    height: 56,
                    width: 246,
                  }}
                >
                  {t('clan')} {brute.data.clan.name}
                </StyledButton>
              )}
              <BoxWithBackground
                url={`/images/${language}/cell/a-bg.gif`}
                alt={t('background')}
                sx={{
                  width: 300,
                  height: 205,
                  ml: 0.5,
                }}
              >
                <Tooltip title="TODO">
                  <Link href="" sx={{ width: 200, mx: 4, display: 'inline-block' }}>
                    <Box
                      component="img"
                      src={`/images/redirects/${advertising}`}
                      sx={{ ml: 1, mt: 3.5 }}
                    />
                  </Link>
                </Tooltip>
              </BoxWithBackground>
              <Box sx={{ ml: 2, mt: 1 }}>
                {logs.map((log) => <CellLog key={log.id} log={log} />)}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Page>
    ));
};

export default CellView;
