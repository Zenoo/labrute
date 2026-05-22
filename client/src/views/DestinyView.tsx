import {
  DestinyBranch, pets, skills, weapons
} from '@labrute/core';
import {
  BruteStat, PetName, SkillName, WeaponName
} from '@labrute/prisma';
import { QuestionMark } from '@mui/icons-material';
import {
  Box, Paper, SxProps, useTheme
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { BoxBg } from '../components/BoxBg';
import { SkillTooltip } from '../components/Brute/SkillTooltip';
import { WeaponTooltip } from '../components/Brute/WeaponTooltip';
import { Page } from '../components/Page';
import { Text } from '../components/Text';
import { useBrute } from '../hooks/useBrute';
import { useStateAsync } from '../hooks/useStateAsync';
import { getBruteWinrate } from '../utils/getBruteWinrate';
import { useServer } from '../hooks/useServer';
import { PetTooltip } from '../components/Brute/PetTooltip';

const styles: Record<string, SxProps> = {
  ul: {
    pt: 2,
    position: 'relative',
    transition: 'all 0.5s',
    '& ul:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '50%',
      borderLeft: '1px solid #000',
      width: 0,
      height: 16,
    },
  },
  li: {
    float: 'left',
    textAlign: 'center',
    position: 'relative',
    pt: 2,
    pb: 0,
    px: 1,
    transition: 'all 0.5s',
    listStyleType: 'none',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: '50%',
      borderTop: '1px solid #000',
      width: 0.5,
      height: 16,
    },
    '&:after': {
      right: 'auto',
      left: '50%',
      borderLeft: '1px solid #000',
    },
    '&:only-child:after, &:only-child:before': {
      display: 'none',
    },
    '&:only-child': {
      pt: 0,
    },
    '&:first-of-type:before, &:last-child:after': {
      border: 'none',
    },
    '&:last-child:before': {
      borderRight: '1px solid #000',
      borderRadius: '0 5px 0 0',
    },
    '&:first-of-type:after': {
      borderRadius: '5px 0 0 0',
    },
  },
  aside: {
    display: 'inline-block',
    borderRadius: '5px',
    transition: 'all 0.5s',
    '&:hover, &:hover+ul li aside h6, &:hover+ul li aside span, &:hover+ul li aside svg': {
      color: 'error.main',
    },
    '&:hover+ul li::after, &:hover+ul li::before, &:hover+ul::before, &:hover+ul ul::before': {
      borderColor: 'error.main',
    },
  },
};

export const DestinyView = () => {
  const { t } = useTranslation('destiny');
  const { bruteName } = useParams();
  const { brute } = useBrute();
  const { palette: { mode } } = useTheme();
  const Server = useServer();

  // Destiny choices
  const { data: tree } = useStateAsync(null, Server.Brute.getDestiny, bruteName || '');

  const getStartingBrutePerks = () => {
    if (!brute) return { skills: {}, weapons: {}, pets: {} };

    const skillPerks: Partial<Record<SkillName, number>> = {};
    const weaponPerks: Partial<Record<WeaponName, number>> = {};
    const petPerks: Partial<Record<PetName, number>> = {};

    for (const s of brute.ascendedSkills) {
      skillPerks[s] = (skillPerks[s] ?? 0) + 1;
    }
    for (const w of brute.ascendedWeapons) {
      weaponPerks[w] = (weaponPerks[w] ?? 0) + 1;
    }
    for (const p of brute.ascendedPets) {
      petPerks[p] = (petPerks[p] ?? 0) + 1;
    }

    return { skills: skillPerks, weapons: weaponPerks, pets: petPerks };
  };

  const renderBranch = (branch: DestinyBranch | null, currentBrute: Pick<NonNullable<typeof brute>, 'skills' | 'weapons' | 'pets'>) => {
    if (!brute) return null;

    let perkUpgrade = false;
    let tier = 0;

    if (branch?.type === 'skill' && branch.skill) {
      tier = currentBrute.skills[branch.skill] ?? 0;
      perkUpgrade = tier > 0;
      if (!currentBrute.skills[branch.skill]) {
        currentBrute.skills[branch.skill] = 1;
      } else {
        currentBrute.skills[branch.skill] = tier + 1;
      }
    } else if (branch?.type === 'weapon' && branch.weapon) {
      tier = currentBrute.weapons[branch.weapon] ?? 0;
      perkUpgrade = tier > 0;
      if (!currentBrute.weapons[branch.weapon]) {
        currentBrute.weapons[branch.weapon] = 1;
      } else {
        currentBrute.weapons[branch.weapon] = tier + 1;
      }
    } else if (branch?.type === 'pet' && branch.pet) {
      tier = currentBrute.pets[branch.pet] ?? 0;
      perkUpgrade = tier > 0;
      if (!currentBrute.pets[branch.pet]) {
        currentBrute.pets[branch.pet] = 1;
      } else {
        currentBrute.pets[branch.pet] = tier + 1;
      }
    }

    return (
      <Box
        key={branch?.path}
        component="li"
        sx={styles.li}
      >
        <Box component="aside" sx={styles.aside}>
          <BoxBg
            src={`/images${mode === 'dark' ? '/dark' : ''}/level-up/box${branch?.current ? '-current' : ''}.png`}
            sx={{
              pt: 3.5,
              height: 129,
              width: 255,
            }}
          >
            {branch ? (
              <>
                {/* LEVEL */}
                <Text h6 bold smallCaps>{t('level')} {branch.level}</Text>
                {/* CHOICE HEADER */}
                <Text caption>
                  {/* +3 Stat */}
                  {branch.type === 'stats' && !branch.stat2 && `+${branch.stat1Value} ${t('in')}`}
                  {/* +2/+1 Stat */}
                  {branch.type === 'stats' && branch.stat2 && `+${branch.stat1Value}/+${branch.stat2Value} ${t('in')}`}
                  {/* Weapon */}
                  {branch.type === 'weapon' && (perkUpgrade ? `${t('levelUp:weaponUpgrade')} :` : `${t('newWeapon')} :`)}
                  {/* Skill */}
                  {branch.type === 'skill' && (perkUpgrade ? `${t('levelUp:skillUpgrade')} :` : `${t('newSkill')} :`)}
                  {/* Pet */}
                  {branch.type === 'pet' && (perkUpgrade ? `${t('levelUp:petUpgrade')} :` : `${t('newPet')} :`)}
                  {/* Display pet HP malus */}
                  {branch.pet && tier === 1 && (
                    <Box component="span" color="error.main" sx={{ fontStyle: 'italic' }}>
                      {' '}(-{pets[branch.pet].hpMalus[0] * 100}% {t('hp')})
                    </Box>
                  )}
                </Text>

                {/* CHOICE CONTENT */}
                {/* Single value */}
                {(branch.type === 'skill' ? (
                  <SkillTooltip
                    skill={branch.skill && skills[branch.skill]}
                    tier={tier + 1}
                  >
                    <Text h6 bold smallCaps>{t(branch.skill as SkillName)}</Text>
                  </SkillTooltip>
                ) : branch.type === 'weapon' ? (
                  <WeaponTooltip weapon={branch.weapon && weapons[branch.weapon]} tier={tier + 1}>
                    <Text h6 bold smallCaps>{t(branch.weapon as WeaponName)}</Text>
                  </WeaponTooltip>
                ) : branch.type === 'pet' ? (
                  <PetTooltip
                    pet={branch.pet && pets[branch.pet]}
                    tier={tier + 1}
                  >
                    <Text h6 bold smallCaps>{t(branch.pet as PetName)}</Text>
                  </PetTooltip>
                ) : !branch.stat2 ? (
                  <Text h6 bold smallCaps>{t(branch.stat1 as BruteStat)}</Text>
                ) : (
                  <Text h6 bold smallCaps>
                    {t(branch.stat1 as BruteStat)}
                    {' / '}
                    {t(branch.stat2)}
                  </Text>
                ))}
              </>
            ) : (
              <QuestionMark sx={{ pt: 2, fontSize: '50px' }} />
            )}
          </BoxBg>
        </Box>
        {branch && (
          <Box component="ul" sx={styles.ul}>
            {renderBranch(branch.LEFT, currentBrute)}
            {renderBranch(branch.RIGHT, currentBrute)}
          </Box>
        )}
      </Box>
    );
  };

  return brute && (
    <Page
      title={`${t('MyBrute')}. ${t('destinyOf')} ${brute.name || ''}`}
      description={t('destiny.desc', {
        name: brute.name,
        level: brute.level,
        rank: t(`lvl_${brute.ranking}`),
        winrate: getBruteWinrate(brute),
      })}
      headerUrl={`/${brute.name}/cell`}
    >
      <Paper sx={{
        mt: 3,
        p: 0,
        bgcolor: 'background.paperLight',
        '& .react-transform-wrapper': {
          maxWidth: 1,
          maxHeight: 600,
        }
      }}
      >
        {tree && (
          <TransformWrapper initialScale={0.1} minScale={0.1} centerOnInit>
            <TransformComponent>
              <Box
                component="ul"
                sx={{
                  ...styles.ul,
                  width: 'max-content',
                }}
              >
                {tree && renderBranch(tree, getStartingBrutePerks())}
              </Box>
            </TransformComponent>
          </TransformWrapper>
        )}
      </Paper>
    </Page>
  );
};
