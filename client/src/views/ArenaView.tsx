import { Brute } from '@eternaltwin/labrute-core/types';
import { Box, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import ArenaStat from '../components/Arena/ArenaStat.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats.js';
import BruteHP from '../components/Brute/BruteHP.js';
import Link from '../components/Link.js';
import Page from '../components/Page.js';
import StyledButton from '../components/StyledButton.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import useStateAsync from '../hooks/useStateAsync.js';
import catchError from '../utils/catchError.js';
import Server from '../utils/Server.js';

const ArenaView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();

  const { data: brute } = useStateAsync<Brute | null, string>(null, Server.Brute.get, bruteName);
  const [opponents, setOpponents] = useState<Brute[]>([]);

  // Fetch random opponents
  useEffect(() => {
    let isSubscribed = true;
    const cleanup = () => { isSubscribed = false; };
    if (!brute) return cleanup;

    // TODO
    Server.Brute.getOpponents(brute.data.name, brute.data.level).then((data: Brute[]) => {
      if (isSubscribed) {
        setOpponents(data);
      }
    }).catch(catchError(Alert));

    return cleanup;
  }, [Alert, brute]);

  return brute && (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('arena')}</Text>
        <Text bold color="secondary">{t('youHaveXFightsLeft', { value: 6 })}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Text h4 bold color="secondary" sx={{ ml: 2 }}>{brute.data.name}</Text>
            <BruteBodyAndStats brute={brute} />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Link to={`/${brute.data.name}/cell`}>
                <Text bold>{t('backToCell')}</Text>
              </Link>
              <Box component="img" src="/images/arena/bear.gif" sx={{ maxWidth: 1 }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5.6}>
            {opponents.map((opponent) => (
              <StyledButton
                key={opponent.id}
                image="/images/arena/brute-bg.gif"
                imageHover="/images/arena/brute-bg-hover.gif"
                contrast={false}
                shadow={false}
                sx={{
                  display: 'inline-block',
                  width: 190,
                  height: 102,
                  mr: 1,
                  mb: 1,
                }}
              >
                <Box sx={{
                  width: 177,
                  height: 85,
                  pl: 1,
                  pt: 0.5,
                  overflow: 'hidden',
                  textAlign: 'left',
                  position: 'relative',
                }}
                >
                  <Text bold color="secondary">{opponent.data.name}</Text>
                  <Text bold smallCaps color="text.primary">
                    {t('level')}
                    <Text component="span" bold color="secondary"> {opponent.data.level}</Text>
                  </Text>
                  <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                    <BruteHP hp={opponent.data.stats.hp} />
                    <Box flexGrow={1} sx={{ ml: 0.5 }}>
                      <ArenaStat name={t('Str')} value={opponent.data.stats.strength.value} />
                      <ArenaStat name={t('Agi')} value={opponent.data.stats.agility.value} />
                      <ArenaStat name={t('Spe')} value={opponent.data.stats.speed.value} />
                    </Box>
                  </Box>
                  <BruteComponent
                    id={opponent.id}
                    gender={opponent.data.gender}
                    bodyParts={opponent.data.body}
                    colors={opponent.data.colors}
                    sx={{
                      position: 'absolute',
                      height: 160,
                      top: 0,
                      left: 92,
                    }}
                  />
                </Box>
              </StyledButton>
            ))}
          </Grid>
          <Grid item xs={12} sm={2.4}>
            <Text bold>{t('selectedOpponents')}</Text>
            <Box component="img" src="/images/arena/referee.gif" sx={{ maxWidth: 1 }} />
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};

export default ArenaView;
