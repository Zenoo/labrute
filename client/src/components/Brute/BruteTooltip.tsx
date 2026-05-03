import { FightStat, Fighter, SkillById, skillMap, skills } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Box, SxProps, Tooltip, TooltipProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ArenaStat from '../Arena/ArenaStat';
import Text from '../Text';
import BruteHP from './BruteHP';

interface BruteTooltipProps extends Omit<TooltipProps, 'title'> {
  brute?: Pick<
    Brute,
    'id' |
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
    'ranking' |
    'eventId'
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

  const target = fighter?.level ? fighter : brute;
  const ranking = fighter ? fighter.rank : brute?.ranking;

  const hp = fighter
    ? fighter.hp
    : brute ? brute.hp : 0;
  const strength = fighter
    ? fighter.strength
    : brute ? brute.strengthValue : 0;
  const agility = fighter
    ? fighter.agility
    : brute ? brute.agilityValue : 0;
  const speed = fighter
    ? fighter.speed
    : brute ? brute.speedValue : 0;

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
            {target.eventId ? (
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
                src={`/images/rankings/lvl_${ranking}.webp`}
                sx={{
                  verticalAlign: 'middle',
                  height: 16,
                  ml: 0.5,
                }}
              />
            )}
          </Text>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BruteHP hp={hp} />
            <Box flexGrow={1} sx={{ ml: 0.5 }}>
              <ArenaStat
                stat={FightStat.STRENGTH}
                value={strength}
                hideSkillText={hideSkillText}
              />
              <ArenaStat
                stat={FightStat.AGILITY}
                value={agility}
                hideSkillText={hideSkillText}
              />
              <ArenaStat
                stat={FightStat.SPEED}
                value={speed}
                hideSkillText={hideSkillText}
              />
            </Box>
          </Box>
          {displaySkills && fighter && (
            <>
              <Text sx={{ fontSize: 12, lineHeight: 1.2 }}>
                <Text component="span" bold sx={{ lineHeight: 1.2 }}>{t('supers')}: </Text>
                {[...skillMap(fighter.skills.filter((s) => skills[SkillById[s]].type === 'super'))].map(([s, tier]) => (tier > 1 ? `${t(s)} (${tier})` : t(s))).join(', ')}
              </Text>
              <Text sx={{ fontSize: 12, lineHeight: 1.2 }}>
                <Text component="span" bold sx={{ lineHeight: 1.2 }}>{t('skills')}: </Text>
                {[...skillMap(fighter.skills.filter((s) => skills[SkillById[s]].type !== 'super'))].map(([s, tier]) => (tier > 1 ? `${t(s)} (${tier})` : t(s))).join(', ')}
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
