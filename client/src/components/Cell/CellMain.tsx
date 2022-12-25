import getXPNeeded from '@eternaltwin/labrute-core/brute/getXPNeeded';
import getFightsLeft from '@eternaltwin/labrute-core/brute/getFightsLeft';
import { FIGHTS_PER_DAY } from '@eternaltwin/labrute-core/constants';
import { Brute, User } from '@eternaltwin/labrute-core/types';
import getSacriPoints from '@eternaltwin/labrute-core/brute/getSacriPoints';
import { Box, BoxProps, Stack } from '@mui/material';
import { Moment } from 'moment';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../hooks/useAlert.js';
import { useConfirm } from '../../hooks/useConfirm.js';
import { Language } from '../../i18n.js';
import catchError from '../../utils/catchError.js';
import Server from '../../utils/Server.js';
import BruteBodyAndStats from '../Brute/BruteBodyAndStats.js';
import BruteLevelAndXP from '../Brute/BruteLevelAndXP.js';
import Link from '../Link.js';
import StyledButton from '../StyledButton.js';
import Text from '../Text.js';
import CellTournament from './CellTournament.js';
import { useAuth } from '../../hooks/useAuth.js';
import { useNavigate } from 'react-router';
import useStateAsync from '../../hooks/useStateAsync.js';

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
  const Confirm = useConfirm();
  const Alert = useAlert();
  const { updateData } = useAuth();
  const navigate = useNavigate();

  const xpNeededForNextLevel = useMemo(() => getXPNeeded(brute.data.level + 1), [brute]);

  const { data: ready } = useStateAsync(false, Server.Brute.isReadyToFight, brute.name);

  // Sacrifice brute
  const confirmSacrifice = useCallback(() => {
    Confirm.open(t('sacrifice'), t('sacrificeConfirm', { points: getSacriPoints(brute.data.level) }), () => {
      Server.Brute.sacrifice(brute.name).then(({ points }) => {
        Alert.open('success', t('sacrificeSuccess', { points }));
        navigate('/');

        updateData((data) => ({
          ...data,
          sacrifice_points: (data?.sacrifice_points || 0) + points,
          brutes: data?.brutes?.filter((b) => b.name !== brute.name) || [],
        }) as User);
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, brute.data.level, brute.name, navigate, t, updateData]);

  return (
    <Box {...rest}>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
        {/* LEVEL + XP */}
        <BruteLevelAndXP brute={brute} sx={{ pl: 1 }} />
        {/* RANKING */}
        {brute.data.ranking < 10 && (
          <Box sx={{ width: 140, display: 'flex', flexDirection: 'row' }}>
            <Box component="img" src={`/images/rankings/lvl_${brute.data.ranking}.gif`} />
            <Text bold color="secondary" sx={{ pl: 0.5 }}>{t(`lvl_${brute.data.ranking}`)}</Text>
          </Box>
        )}
      </Box>
      <BruteBodyAndStats brute={brute} sx={{ mb: 1 }} />
      {ownsBrute && (brute.data.xp < xpNeededForNextLevel ? getFightsLeft(brute) > 0 ? ready ? (
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
          <Text bold color="error">{t('fightsLeft', { value: getFightsLeft(brute) })}</Text>
        </Stack>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          <Text bold color="error">{t('bruteIsPreparing', { brute: brute.name })}</Text>
          <Text color="error">{t('comeBackInAFew')}</Text>
        </Box>
      ) : (
        <Box sx={{ textAlign: 'center' }}>
          <Text bold color="error">{t('bruteIsResting', { brute: brute.name })}</Text>
          <Text color="error">{t('newFightsTomorrow', { amount: FIGHTS_PER_DAY })}</Text>
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
          brute={brute}
          nextTournament={nextTournament}
          ownsBrute={ownsBrute}
          language={language}
        />
      )}
      {/* BRUTE SACRIFICE */}
      {ownsBrute && (
        <StyledButton
          image="/images/button.gif"
          imageHover="/images/button-hover.gif"
          onClick={confirmSacrifice}
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
          {t('sacrifice')}
        </StyledButton>
      )}
    </Box>
  );
};

export default CellMain;
