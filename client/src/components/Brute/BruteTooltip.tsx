import { FightStat, Fighter, SkillById, getFinalHP, skills } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Box, SxProps, Tooltip, TooltipProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ArenaStat from '../Arena/ArenaStat';
import Text from '../Text';
import BruteHP from './BruteHP';
import { useAuth } from '../../hooks/useAuth';

interface BruteTooltipProps extends Omit<TooltipProps, 'title'> {
  brute?: Pick<
    Brute,
    'name' |
    'hp' |
    'level' |
    'enduranceStat' |
    'enduranceModifier' |
    'enduranceValue' |
    'strengthStat' |
    'strengthModifier' |
    'strengthValue' |
    'agilityStat' |
    'agilityModifier' |
    'agilityValue' |
    'speedStat' |
    'speedModifier' |
    'speedValue' |
    'skills' |
    'ranking'
  >;
  fighter?: Fighter | null;
  displaySkills?: boolean;
  hideSkillText?: boolean;
  tooltipSx?: SxProps;
}

const BruteTooltip = ({
  brute,
  fighter,
  displaySkills,
  hideSkillText,
  tooltipSx,
  children,
  ...rest
}: BruteTooltipProps) => {
  const { t } = useTranslation();
  const { randomSkill } = useAuth();

  const target = fighter?.level ? fighter : brute;
  const ranking = fighter ? fighter.rank : brute?.ranking;

  return (
    <Tooltip
      {...rest}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'background.paperLight',
            ...tooltipSx,
          },
        },
      }}
      title={target ? (
        <>
          <Text bold color="secondary">{target.name}</Text>
          <Text bold smallCaps color="text.primary">
            {t('level')}
            <Text component="span" bold color="secondary"> {target.level}</Text>
            <Box
              component="img"
              src={`/images/rankings/lvl_${ranking}.webp`}
              sx={{
                verticalAlign: 'middle',
                height: 16,
                ml: 0.5,
              }}
            />
          </Text>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BruteHP hp={fighter ? target.hp : brute ? getFinalHP(brute, randomSkill) : 0} />
            <Box flexGrow={1} sx={{ ml: 0.5 }}>
              <ArenaStat
                stat={FightStat.STRENGTH}
                value={fighter?.strength || brute?.strengthValue || 0}
                hideSkillText={hideSkillText}
              />
              <ArenaStat
                stat={FightStat.AGILITY}
                value={fighter?.agility || brute?.agilityValue || 0}
                hideSkillText={hideSkillText}
              />
              <ArenaStat
                stat={FightStat.SPEED}
                value={fighter?.speed || brute?.speedValue || 0}
                hideSkillText={hideSkillText}
              />
            </Box>
          </Box>
          {displaySkills && fighter && (
            <>
              <Text sx={{ fontSize: 12, lineHeight: 1.2 }}>
                <Text component="span" bold sx={{ lineHeight: 1.2 }}>{t('supers')}: </Text>
                {fighter.skills.filter((s) => skills.find((_s) => _s.name === SkillById[s])?.type === 'super').map((s) => t(SkillById[s])).join(', ')}
              </Text>
              <Text sx={{ fontSize: 12, lineHeight: 1.2 }}>
                <Text component="span" bold sx={{ lineHeight: 1.2 }}>{t('skills')}: </Text>
                {fighter.skills.filter((s) => skills.find((_s) => _s.name === SkillById[s])?.type !== 'super').map((s) => t(SkillById[s])).join(', ')}
              </Text>
            </>
          )}
        </>
      ) : null}
    >
      {children}
    </Tooltip>
  );
};

export default BruteTooltip;
