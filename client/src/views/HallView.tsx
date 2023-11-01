import { FightStat, getFightsLeft } from '@labrute/core';
import { Check, CrisisAlert } from '@mui/icons-material';
import { Box, Paper, Tooltip } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import ArenaStat from '../components/Arena/ArenaStat';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import BruteHP from '../components/Brute/BruteHP';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAuth } from '../hooks/useAuth';

const HallView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const fightsLeft = useMemo(() => user && user.brutes
    .reduce((acc, brute) => acc + getFightsLeft(brute), 0), [user]);

  // Go to cell page
  const goToCell = useCallback((bruteName: string) => () => {
    navigate(`/${bruteName}/cell`);
  }, [navigate]);

  return (
    <Page title={`${t('hall')} ${t('MyBrute')}`} headerUrl="">
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('hall')}</Text>
        {fightsLeft && (
          <Text bold color="secondary">
            {fightsLeft > 1
              ? t('youHaveXFightsLeft', { value: fightsLeft })
              : t('youHaveOneFightLeft')}
          </Text>
        )}
      </Paper>
      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        bgcolor: 'background.paperLight',
        mt: -2,
      }}
      >
        {user && user.brutes.map((brute) => (
          <StyledButton
            key={brute.name}
            image="/images/arena/brute-bg.gif"
            imageHover="/images/arena/brute-bg-hover.gif"
            contrast={false}
            shadow={false}
            onClick={goToCell(brute.name)}
            sx={{
              width: 190,
              height: 114,
              mx: 1,
              my: 0.5,
            }}
          >
            <Box sx={{
              width: 185,
              height: 93,
              pl: 1,
              pt: 0.5,
              display: 'inline-block',
              overflow: 'hidden',
              textAlign: 'left',
              position: 'relative',
            }}
            >
              <Box display="flex">
                {/* Registration status */}
                {brute.registeredForTournament && (
                  <Tooltip title={t('bruteRegistered')}>
                    <Check
                      fontSize="small"
                      sx={{
                        m: 0.25,
                        p: '2px',
                        bgcolor: 'warning.main',
                        borderRadius: '50%',
                      }}
                    />
                  </Tooltip>
                )}
                <Text bold color="secondary" sx={{ display: 'inline' }}>{brute.name}</Text>
              </Box>
              <Text bold smallCaps color="text.primary">
                {t('level')}
                <Text component="span" bold color="secondary"> {brute.level}</Text>
              </Text>
              <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                <BruteHP hp={brute.hp} />
                <Box flexGrow={1} sx={{ ml: 0.5 }}>
                  <ArenaStat stat={FightStat.STRENGTH} name={t('Str')} value={brute.strengthValue} hideSkillText />
                  <ArenaStat stat={FightStat.AGILITY} name={t('Agi')} value={brute.agilityValue} hideSkillText />
                  <ArenaStat stat={FightStat.SPEED} name={t('Spe')} value={brute.speedValue} hideSkillText />
                </Box>
              </Box>
              <BruteComponent
                brute={brute}
                sx={{
                  position: 'absolute',
                  height: 160,
                  top: 0,
                  left: 92,
                }}
              />
            </Box>
            {/* Fights left */}
            <Tooltip title={t('fightsLeft', { value: getFightsLeft(brute) })}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 21,
                mt: -1,
                zIndex: 1,
              }}
              >
                {new Array(getFightsLeft(brute)).fill(0).map((_, i) => (
                  <CrisisAlert
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    fontSize="small"
                    sx={{
                      m: 0.25,
                      p: '2px',
                      bgcolor: 'success.main',
                      borderRadius: '50%',
                      color: 'success.light',
                    }}
                  />
                ))}
              </Box>
            </Tooltip>
          </StyledButton>
        ))}
      </Paper>
    </Page>
  );
};

export default HallView;
