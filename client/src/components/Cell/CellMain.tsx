import { BruteRanking, getFightsLeft, getMaxFightsPerDay, getXPNeeded } from '@labrute/core';
import { Lang } from '@labrute/prisma';
import { Box, BoxProps, Stack } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../hooks/useAlert';
import { useBrute } from '../../hooks/useBrute';
import { useConfirm } from '../../hooks/useConfirm';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';
import BruteBodyAndStats from '../Brute/BruteBodyAndStats';
import BruteLevelAndXP from '../Brute/BruteLevelAndXP';
import FantasyButton from '../FantasyButton';
import Link from '../Link';
import StyledButton from '../StyledButton';
import Text from '../Text';
import CellGlobalTournament from './CellGlobalTournament';
import CellTournament from './CellTournament';

export interface CellMainProps extends BoxProps {
  language: Lang;
  smallScreen?: boolean;
  confirmSacrifice?: () => void;
  confirmReset?: () => void;
}

const CellMain = ({
  language,
  smallScreen,
  confirmSacrifice,
  confirmReset,
  ...rest
}: CellMainProps) => {
  const { t } = useTranslation();
  const Confirm = useConfirm();
  const Alert = useAlert();
  const { brute, owner } = useBrute();

  const xpNeededForNextLevel = useMemo(
    () => (brute ? getXPNeeded(brute.level + 1) : 0),
    [brute],
  );

  const fightsLeft = useMemo(
    () => (brute ? getFightsLeft(brute) : 0),
    [brute],
  );

  // Rank up
  const rankUp = useCallback(() => {
    if (!brute) return;

    Confirm.open(t('rankUp'), t('rankUpConfirm'), () => {
      Server.Brute.rankUp(brute.name).then(() => {
        // Reload page
        window.location.reload();
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, brute, t]);

  return brute && (
    <Box {...rest}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
        {/* LEVEL + XP */}
        <BruteLevelAndXP brute={brute} sx={{ pl: 1 }} />
        {/* RANKING */}
        <Box sx={{ width: 140, display: 'flex', flexDirection: 'row' }}>
          <Box component="img" src={`/images/rankings/lvl_${brute.ranking}.png`} />
          <Text bold color="secondary" sx={{ pl: 0.5 }}>{t(`lvl_${brute.ranking as BruteRanking}`)}</Text>
        </Box>
      </Box>
      <BruteBodyAndStats brute={brute} sx={{ mb: 1 }} />

      {/* Rank up */}
      {owner && brute.canRankUpSince && brute.ranking > 0 && (!moment.utc(brute.canRankUpSince).isSame(moment.utc(), 'day') || brute.currentTournamentStepWatched === 6) && (
        <FantasyButton color="success" onClick={rankUp} sx={{ mb: 1 }}>
          {t('rankUp')}
        </FantasyButton>
      )}
      {owner && (brute.xp < xpNeededForNextLevel ? fightsLeft > 0 ? (
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
          <Text bold color="error">{fightsLeft > 1 ? t('fightsLeft', { value: fightsLeft }) : t('fightLeft')}</Text>
        </Stack>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          <Text bold color="error">{t('bruteIsResting', { brute: brute.name })}</Text>
          <Text color="error">{t('newFightsTomorrow', { amount: getMaxFightsPerDay(brute) })}</Text>
        </Box>
      ) : (
        <Link to={`/${brute.name}/level-up`}>
          <StyledButton
            image="/images/button.gif"
            imageHover="/images/button-hover.gif"
            shadow={false}
            contrast={false}
            shift="8px"
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
          language={language}
        />
      )}
      {/* GLOBAL TOURNAMENT */}
      {!smallScreen && (
        <CellGlobalTournament sx={{ mt: 3 }} />
      )}
      {/* BRUTE SACRIFICE */}
      {owner
        && moment.utc().isAfter(moment.utc(brute.createdAt), 'day')
        && !!confirmSacrifice
        && (
          <FantasyButton
            color="error"
            onClick={confirmSacrifice}
            sx={{
              mt: 1,
            }}
          >
            {t('sacrifice')}
          </FantasyButton>
        )}
      {/* BRUTE RESET */}
      {owner && !!confirmReset && (
        <FantasyButton
          color="warning"
          onClick={confirmReset}
          sx={{
            mt: 2,
          }}
        >
          {t('reset')}
        </FantasyButton>
      )}
    </Box>
  );
};

export default CellMain;
