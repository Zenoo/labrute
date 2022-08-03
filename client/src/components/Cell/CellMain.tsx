import getXPNeeded from '@eternaltwin/labrute-core/brute/getXPNeeded';
import { Brute } from '@eternaltwin/labrute-core/types';
import { Box, BoxProps, Stack, Tooltip } from '@mui/material';
import { Moment } from 'moment';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../../i18n.js';
import BruteBodyAndStats from '../Brute/BruteBodyAndStats.js';
import Link from '../Link.js';
import StyledButton from '../StyledButton.js';
import Text from '../Text.js';
import CellTournament from './CellTournament.js';

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

  const xpNeededForNextLevel = useMemo(() => getXPNeeded(brute.data.level + 1), [brute.data.level]);

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
      <BruteBodyAndStats brute={brute} sx={{ mb: 1 }} />
      {ownsBrute && (brute.data.xp < xpNeededForNextLevel ? (
        <Stack spacing={1} sx={{ alignItems: 'center', mt: 1 }}>
          <Text bold sx={{ pl: 1 }}>{t('callToFight')}</Text>
          <Link to={`/${brute.name}/arena`}>
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
          </Link>
          <Text bold color="error">{t('fightsLeft', { value: 6 })}</Text>
        </Stack>
      ) : (
        <Link to={`/${brute.name}/level-up`}>
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
            {t('levelUp')}
          </StyledButton>
        </Link>
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
