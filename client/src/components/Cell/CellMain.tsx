import { Brute } from '@backend/types';
import { Box, BoxProps, Stack, Tooltip } from '@mui/material';
import { Moment } from 'moment';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Language } from '../../i18n';
import getXPNeeded from '../../utils/brute/getXPNeeded';
import BoxWithBackground from '../BoxWithBackground';
import { default as BruteComponent } from '../Brute/Brute';
import StyledButton from '../StyledButton';
import Text from '../Text';
import CellStats from './CellStats';
import CellTournament from './CellTournament';

export interface CellMainProps extends BoxProps {
  brute: Brute;
  ownsBrute: boolean;
  language: Language;
  nextTournament: Moment;
  smallScreen?: boolean;
}

const CellMain = ({
  brute,
  ownsBrute,
  language,
  nextTournament,
  smallScreen,
  ...rest
}: CellMainProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const xpNeededForNextLevel = useMemo(() => getXPNeeded(brute.data.level + 1), [brute.data.level]);

  const startLevelUp = useCallback(() => {
    navigate(`/${brute.data.name}/level-up`);
  }, [brute.data.name, navigate]);

  return (
    <Box {...rest}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
        <Box width={120} sx={{ pl: 1 }}>
          <Text bold h3 smallCaps color="secondary">{t('level')} {brute.data.level}</Text>
          {/* LEVEL BAR */}
          <Tooltip title={`${brute.data.xp} / ${xpNeededForNextLevel}`}>
            <Box sx={{ bgcolor: 'secondary.main', p: '2px' }}>
              <Box sx={{
                bgcolor: 'level',
                height: 3,
                width: brute.data.xp / xpNeededForNextLevel
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
          sx={{ height: 160 }}
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
      {ownsBrute && (brute.data.xp < xpNeededForNextLevel ? (
        <Stack spacing={1} sx={{ alignItems: 'center', mt: 1 }}>
          <Text bold sx={{ pl: 1 }}>{t('callToFight')}</Text>
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
      ) : (
        <StyledButton
          image="/images/button.gif"
          imageHover="/images/button-hover.gif"
          shadow={false}
          contrast={false}
          onClick={startLevelUp}
          sx={{
            fontVariant: 'small-caps',
            m: '0 auto',
            mt: 2,
            height: 56,
            width: 246,
          }}
        >
          {t('levelUp')}
        </StyledButton>
      ))}
      {/* TOURNAMENT */}
      {!smallScreen && (
        <CellTournament
          brute={brute}
          nextTournament={nextTournament}
          ownsBrute={ownsBrute}
          language={language}
        />
      )}
    </Box>
  );
};

export default CellMain;