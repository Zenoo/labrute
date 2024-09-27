import { FightStat, getFinalHP, getFinalStat } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import ArenaStat from '../Arena/ArenaStat';
import StyledButton from '../StyledButton';
import Text from '../Text';
import BruteRender from './Body/BruteRender';
import BruteHP from './BruteHP';

type BruteButtonProps = Omit<BoxProps, 'ref'> & {
  brute: Pick<Brute, 'id' | 'gender' | 'name' | 'speedValue' | 'agilityValue' | 'strengthValue' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'agilityStat' | 'agilityModifier' | 'speedStat' | 'speedModifier' | 'level' | 'hp' | 'ranking' | 'body' | 'colors' | 'skills' | 'eventId'>;
  link?: string;
};

const BruteButton = ({
  brute,
  link,
  sx,
  ...rest
}: BruteButtonProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { randomSkill, modifiers } = useAuth();

  const goTo = () => {
    if (link === null) return;

    if (typeof link === 'undefined') {
      navigate(`/${brute.name}/cell`);
      return;
    }

    navigate(link);
  };

  return (
    <StyledButton
      key={brute.name}
      image="/images/arena/brute-bg.webp"
      imageHover="/images/arena/brute-bg-hover.webp"
      contrast={false}
      shadow={false}
      onClick={goTo}
      sx={{
        width: 190,
        height: 102,
        mx: 1,
        my: 0.5,
        ...sx,
      }}
      {...rest}
    >
      <Box sx={{
        width: 185,
        height: 89,
        pl: 1,
        pt: 0.5,
        display: 'inline-block',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
      }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        >
          <Box display="flex" alignItems="center">
            <Text bold color="secondary" sx={{ display: 'inline' }}>{brute.name}</Text>
          </Box>
        </Box>
        <Text bold smallCaps color="text.primary">
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
          <BruteHP hp={getFinalHP(brute, randomSkill)} />
          <Box flexGrow={1} sx={{ ml: 0.5 }}>
            <ArenaStat
              stat={FightStat.STRENGTH}
              value={getFinalStat(brute, 'strength', modifiers, randomSkill)}
              hideSkillText
            />
            <ArenaStat
              stat={FightStat.AGILITY}
              value={getFinalStat(brute, 'agility', modifiers, randomSkill)}
              hideSkillText
            />
            <ArenaStat
              stat={FightStat.SPEED}
              value={getFinalStat(brute, 'speed', modifiers, randomSkill)}
              hideSkillText
            />
          </Box>
        </Box>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 115,
          width: 70,
          height: 1,
        }}
        >
          <BruteRender
            brute={brute}
            looking="left"
          />
        </Box>
      </Box>
    </StyledButton>
  );
};

export default BruteButton;
