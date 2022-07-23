import { Brute, Log } from '@backend/types';
import { Box, Divider, Grid, Link, Paper, Stack, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BoxWithBackground from '../../components/BoxWithBackground';
import { default as BruteComponent } from '../../components/Brute/Brute';
import CellLog from '../../components/Cell/CellLog';
import CellPets from '../../components/Cell/CellPets';
import CellStats from '../../components/Cell/CellStats';
import CellWeapons from '../../components/Cell/CellWeapons';
import Page from '../../components/Page';
import StyledButton from '../../components/StyledButton';
import Text from '../../components/Text';
import getXPNeeded from '../../utils/brute/getXPNeeded';
import skills from '../../utils/brute/skills';

export interface CellMobileViewProps {
  bruteName?: string;
  brute: Brute;
  reloadRandom: () => void;
  advertising: string;
  logs: Log[];
}

const CellMobileView = ({
  bruteName,
  brute,
  reloadRandom,
  advertising,
  logs,
}: CellMobileViewProps) => {
  const { t } = useTranslation();

  return (
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
              <Box>
                {brute.data.master ? (
                  <>
                    <Text bold color="secondary" component="span">{t('master')}: </Text>
                    <Text bold component="span">{brute.data.master.name}</Text>
                  </>
                ) : <Text>{' '}</Text>}
              </Box>
              <Box>
                <Text bold color="secondary" component="span">{t('ranking')}: </Text>
                <Text bold component="span">{brute.rank}</Text>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box>
                <Text bold color="secondary" component="span">{t('victories')}: </Text>
                <Text bold component="span">{brute.data.victories}</Text>
              </Box>
              <Box>
                <Text bold color="secondary" component="span">{t('pupils')}: </Text>
                <Text bold component="span">{brute.data.pupils}</Text>
              </Box>
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
        }}
        />
      </Box>
      <Paper sx={{
        borderTopRightRadius: 0,
        bgcolor: 'background.paperLight',
        zIndex: 2,
        position: 'relative',
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
            <Box sx={{ flexGrow: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                <Box width={100}>
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
              <Box display="flex" flexDirection="row">
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
            </Box>
          </Box>
          {/* RIGHT SIDE */}
          <Box sx={{
            position: 'relative',
            width: 270,
            mt: -5,
          }}
          >
            <Tooltip title="Donne cette adresse à tes amis ou met la sur ton blog, ça te permettra de recruter des élèves et de gagner de l'expérience !">
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

            <StyledButton
              image="/images/button.gif"
              imageHover="/images/button-hover.gif"
              shadow={false}
              contrast={false}
              onClick={reloadRandom}
              sx={{
                fontVariant: 'small-caps',
                m: '0 auto',
                mt: 2,
                height: 56,
                width: 246,
              }}
            >
              Clan TEST
            </StyledButton>
            <BoxWithBackground
              url="/images/cell-advert-bg.gif"
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
  );
};

export default CellMobileView;
