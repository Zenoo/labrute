import {
  CalculatedBrute, FightStat, getXPNeeded
} from '@labrute/core';
import { User } from '@labrute/prisma';
import {
  Box, Divider, Tooltip
} from '@mui/material';
import { BoxProps } from '@mui/system';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ActivityStatus } from '../ActivityStatus';
import { ArenaStat } from '../Arena/ArenaStat';
import { StyledButton } from '../StyledButton';
import { Text } from '../Text';
import { BruteRender } from './Body/BruteRender';
import { BruteHP } from './BruteHP';
import { BruteSmallWeaponList } from './BruteSmallWeaponList';
import { BruteSmallSkillList } from './BruteSmallSkillList';
import { BruteSmallPetList } from './BruteSmallPetList';
import { BruteName } from './BruteName';

type BruteButtonProps = Omit<BoxProps, 'ref'> & ({
  brute: Pick<CalculatedBrute, 'id' | 'xp' | 'gender' | 'name' | 'speedValue' | 'agilityValue' | 'strengthValue' | 'hpValue' | 'strengthStat' | 'strengthModifier' | 'agilityStat' | 'agilityModifier' | 'speedStat' | 'speedModifier' | 'hpStat' | 'hpModifier' | 'level' | 'ranking' | 'body' | 'colors' | 'skills' | 'eventId'>;
  link?: string;
  displayDetails?: false;
  xp?: boolean;
  owner?: Pick<User, 'lastSeen'>;
  shiftMargin?: boolean;
  selected?: boolean;
} | {
  brute: Pick<CalculatedBrute, 'id' | 'xp' | 'gender' | 'name' | 'speedValue' | 'agilityValue' | 'strengthValue' | 'hpValue' | 'strengthStat' | 'strengthModifier' | 'agilityStat' | 'agilityModifier' | 'speedStat' | 'speedModifier' | 'hpStat' | 'hpModifier' | 'level' | 'ranking' | 'body' | 'colors' | 'skills' | 'weapons' | 'pets' | 'eventId'>;
  link?: string;
  displayDetails: true;
  xp?: boolean;
  owner?: Pick<User, 'lastSeen'>;
  shiftMargin?: boolean;
  selected?: boolean;
});

export const BruteButton = ({
  brute,
  link,
  displayDetails,
  owner,
  shiftMargin = false,
  selected = false,
  xp = false,
  sx,
  ...rest
}: BruteButtonProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const xpNeededForNextLevel = useMemo(() => getXPNeeded(brute.level + 1), [brute.level]);
  const limitedXP = useMemo(() => Math.min(
    brute.xp,
    xpNeededForNextLevel,
  ), [brute.xp, xpNeededForNextLevel]);

  const goTo = () => {
    if (!link) return;

    navigate(link);
  };

  return (
    <StyledButton
      key={brute.name}
      image={`/images/arena/brute-bg${displayDetails ? '-high' : ''}.webp`}
      imageHover={`/images/arena/brute-bg${displayDetails ? '-high' : ''}-hover.webp`}
      contrast={false}
      shadow={false}
      shiftMargin={shiftMargin}
      onClick={goTo}
      sx={{
        width: 190,
        height: 102,
        mx: 1,
        my: 0.5,
        backgroundSize: displayDetails ? '100% 100%' : '100%',
        ...sx,
      }}
      {...rest}
    >
      <Box sx={{
        width: 185,
        height: displayDetails ? 1 : 89,
        pl: 1,
        pt: 0,
        display: 'inline-block',
        textAlign: 'left',
        position: 'relative',
      }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        >
          <Box display="flex" alignItems="center">
            <Text bold color="secondary" sx={{ display: 'inline' }}>
              <BruteName brute={brute} />
            </Text>
          </Box>
        </Box>
        <Text bold smallCaps color="text.primary">
          {owner && <ActivityStatus user={owner} />}
          {t('level')}
          <Text component="span" bold color="secondary"> {brute.level}</Text>
          {brute.eventId ? (
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
              src={`/images/rankings/lvl_${brute.ranking}.webp`}
              sx={{
                verticalAlign: 'middle',
                height: 16,
                ml: 0.5,
              }}
            />
          )}
        </Text>
        <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
          <Box sx={{
            display: 'flex',
            height: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 0.5,
          }}>
            {/* LEVEL BAR */}
            {xp && (
              <Tooltip title={`${limitedXP} / ${xpNeededForNextLevel}`}>
                <Box sx={{ bgcolor: 'divider', p: '2px', width: 40 }}>
                  <Box sx={{
                    bgcolor: 'level',
                    height: 3,
                    width: Math.max(0, limitedXP) / xpNeededForNextLevel,
                  }}
                  />
                </Box>
              </Tooltip>
            )}
            <BruteHP hp={brute.hpValue} />
          </Box>
          <Box flexGrow={1} sx={{ ml: 0.5 }}>
            <ArenaStat
              stat={FightStat.STRENGTH}
              value={brute.strengthValue}
              hideSkillText
            />
            <ArenaStat
              stat={FightStat.AGILITY}
              value={brute.agilityValue}
              hideSkillText
            />
            <ArenaStat
              stat={FightStat.SPEED}
              value={brute.speedValue}
              hideSkillText
            />
          </Box>
        </Box>
        {displayDetails && (
          <>
            <Divider
              sx={{
                ml: -0.75,
                mr: 0.75,
                mt: 0.5,
                borderColor: 'primary.main',
              }}
            />
            {/* Weapons */}
            <BruteSmallWeaponList weapons={brute.weapons} pt={1} />
            {/* Skills */}
            <BruteSmallSkillList skills={brute.skills} />
            {/* Pets */}
            <BruteSmallPetList brute={brute} pets={brute.pets} />
          </>
        )}
        <Box sx={{
          position: 'absolute',
          top: -50,
          left: 100,
          height: 136,
          width: 150,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
        >
          <Box sx={{
            position: 'relative',
            top: 40,
            left: 15,
            width: 70,
          }}>
            <BruteRender
              brute={brute}
              looking="left"
              sx={{
                filter: selected
                  ? 'drop-shadow(0 0 2px rgb(255, 0, 255))'
                  : undefined,
              }}
            />
          </Box>
        </Box>
      </Box>
    </StyledButton>
  );
};
