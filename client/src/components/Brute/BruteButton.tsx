import { entries, FightStat, getFinalHP, getFinalStat, getTieredPets, getTieredSkills, getTieredWeapons, pets, skills, weapons } from '@labrute/core';
import { Brute, User } from '@labrute/prisma';
import { Box, Divider } from '@mui/material';
import { BoxProps } from '@mui/system';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { ActivityStatus } from '../ActivityStatus';
import ArenaStat from '../Arena/ArenaStat';
import StyledButton from '../StyledButton';
import Text from '../Text';
import BruteRender from './Body/BruteRender';
import BruteHP from './BruteHP';
import PetTooltip from './PetTooltip';
import SkillTooltip from './SkillTooltip';
import WeaponTooltip from './WeaponTooltip';

type BruteButtonProps = Omit<BoxProps, 'ref'> & ({
  brute: Pick<Brute, 'id' | 'gender' | 'name' | 'speedValue' | 'agilityValue' | 'strengthValue' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'agilityStat' | 'agilityModifier' | 'speedStat' | 'speedModifier' | 'level' | 'hp' | 'ranking' | 'body' | 'colors' | 'skills' | 'eventId'>;
  link?: string;
  displayDetails?: false;
  owner?: Pick<User, 'lastSeen'>;
  shiftMargin?: boolean;
} | {
  brute: Pick<Brute, 'id' | 'gender' | 'name' | 'speedValue' | 'agilityValue' | 'strengthValue' | 'enduranceStat' | 'enduranceModifier' | 'enduranceValue' | 'strengthStat' | 'strengthModifier' | 'agilityStat' | 'agilityModifier' | 'speedStat' | 'speedModifier' | 'level' | 'hp' | 'ranking' | 'body' | 'colors' | 'skills' | 'weapons' | 'pets' | 'eventId'>;
  link?: string;
  displayDetails: true;
  owner?: Pick<User, 'lastSeen'>;
  shiftMargin?: boolean;
});

const BruteButton = ({
  brute,
  link,
  displayDetails,
  owner,
  shiftMargin = false,
  sx,
  ...rest
}: BruteButtonProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { modifiers } = useAuth();

  const bruteWeapons = useMemo(
    () => {
      if (!displayDetails) return null;

      return getTieredWeapons(brute, modifiers);
    },
    [brute, displayDetails, modifiers]
  );

  const bruteSkills = useMemo(
    () => {
      if (!displayDetails) return null;

      return getTieredSkills(brute, modifiers);
    },
    [brute, displayDetails, modifiers]
  );

  const brutePets = useMemo(
    () => {
      if (!displayDetails) return null;

      return getTieredPets(brute);
    },
    [brute, displayDetails]
  );

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
          <BruteHP hp={getFinalHP(brute, modifiers)} />
          <Box flexGrow={1} sx={{ ml: 0.5 }}>
            <ArenaStat
              stat={FightStat.STRENGTH}
              value={getFinalStat(brute, 'strength', modifiers)}
              hideSkillText
            />
            <ArenaStat
              stat={FightStat.AGILITY}
              value={getFinalStat(brute, 'agility', modifiers)}
              hideSkillText
            />
            <ArenaStat
              stat={FightStat.SPEED}
              value={getFinalStat(brute, 'speed', modifiers)}
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
            <Box pt={1}>
              {bruteWeapons && entries(bruteWeapons).map(([weapon, tier]) => (
                <WeaponTooltip
                  weapon={weapons[weapon]}
                  tier={tier}
                  key={weapon}
                >
                  <Box component="img" src={`/images/game/resources/misc/weapons/${weapon}.png`} sx={{ filter: 'drop-shadow(1px 1px 1px black)' }} />
                </WeaponTooltip>
              ))}
            </Box>
            {/* Skills */}
            <Box>
              {bruteSkills && entries(bruteSkills).map(([skill, tier]) => (
                <SkillTooltip
                  skill={skills[skill]}
                  tier={tier}
                  key={skill}
                >
                  <Box
                    component="img"
                    src={`/images/skills/${skill}.svg`}
                    sx={{
                      width: 16,
                      mx: 0.25,
                      my: 0,
                      filter: 'drop-shadow(1px 1px 1px black)'
                    }}
                  />
                </SkillTooltip>
              ))}
            </Box>
            {/* Pets */}
            <Box>
              {brutePets && entries(brutePets).map(([pet, tier]) => (
                <PetTooltip pet={pets[pet]} tier={tier} key={pet}>
                  <Box component="img" src={`/images/pets/${pet.replace(/\d/g, '')}.svg`} sx={{ width: 16, m: 0.25, mb: 0, filter: 'drop-shadow(1px 1px 1px black)' }} />
                </PetTooltip>
              ))}
            </Box>
          </>
        )}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 115,
          width: 70,
          height: 86,
          overflow: 'hidden',
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
