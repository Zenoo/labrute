import { FightStat, Fighter, skills } from '@labrute/core';
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
    'name' |
    'hp' |
    'level' |
    'strengthValue' |
    'agilityValue' |
    'speedValue'
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
          </Text>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BruteHP hp={target.hp} />
            <Box flexGrow={1} sx={{ ml: 0.5 }}>
              <ArenaStat stat={FightStat.STRENGTH} name={t('Str')} value={fighter?.strength || brute?.strengthValue || 0} hideSkillText={hideSkillText} />
              <ArenaStat stat={FightStat.AGILITY} name={t('Agi')} value={fighter?.agility || brute?.agilityValue || 0} hideSkillText={hideSkillText} />
              <ArenaStat stat={FightStat.SPEED} name={t('Spe')} value={fighter?.speed || brute?.speedValue || 0} hideSkillText={hideSkillText} />
            </Box>
          </Box>
          {displaySkills && fighter && (
            <>
              <Text sx={{ fontSize: 12, lineHeight: 1.2 }}>
                <Text component="span" bold sx={{ lineHeight: 1.2 }}>{t('supers')}: </Text>
                {fighter.skills.filter((s) => skills.find((_s) => _s.name === s)?.type === 'super').map((s) => t(s)).join(', ')}
              </Text>
              <Text sx={{ fontSize: 12, lineHeight: 1.2 }}>
                <Text component="span" bold sx={{ lineHeight: 1.2 }}>{t('skills')}: </Text>
                {fighter.skills.filter((s) => skills.find((_s) => _s.name === s)?.type !== 'super').map((s) => t(s)).join(', ')}
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
