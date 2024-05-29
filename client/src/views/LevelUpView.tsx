import { BrutesGetLevelUpChoicesResponse, getXPNeeded, skills, weapons } from '@labrute/core';
import { BruteStat, DestinyChoiceSide, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { Box, Alert as MuiAlert, Paper, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg';
import BruteRender from '../components/Brute/Body/BruteRender';
import SkillTooltip from '../components/Brute/SkillTooltip';
import WeaponTooltip from '../components/Brute/WeaponTooltip';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const LevelUpView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const { user, updateData } = useAuth();
  const navigate = useNavigate();
  const Alert = useAlert();
  const smallScreen = useMediaQuery('(max-width: 638px)');
  const { brute, updateBrute } = useBrute();
  const theme = useTheme();

  const [choices, setChoices] = useState<BrutesGetLevelUpChoicesResponse['choices'] | null>(null);

  const samePath = brute?.previousDestinyPath.toString().startsWith(brute?.destinyPath.toString());

  // Fetch brute
  useEffect(() => {
    let isSubscribed = true;
    if (bruteName && brute) {
      Server.Brute.getLevelUpChoices(bruteName).then((data) => {
        if (isSubscribed) {
          // Check if the brute has enough XP
          if (brute.xp < getXPNeeded(brute.level + 1)) {
            navigate(`/${bruteName}/cell`);
          } else {
            setChoices(data.choices);
          }
        }
      }).catch(() => {
        navigate(`/${bruteName}/cell`);
      });
    }
    return () => { isSubscribed = false; };
  }, [Alert, brute, bruteName, navigate, user]);

  // Trigger level up
  const levelUp = useCallback((choice: DestinyChoiceSide) => async () => {
    if (!brute || !choices) return;

    const newBrute = await Server.Brute.levelUp(
      brute.name,
      choice,
    ).catch(catchError(Alert));

    if (!newBrute) return;

    // Update user data
    updateData((data) => (data ? ({
      ...data,
      brutes: data.brutes.map((b) => (b.name === brute.name ? ({ ...b, ...newBrute }) : b)),
    }) : null));

    // Update brute data
    updateBrute((data) => (data ? ({ ...data, ...newBrute }) : null));

    navigate(`/${brute.name}/cell`);
  }, [Alert, brute, choices, navigate, updateBrute, updateData]);

  return brute && (
    <Page title={`${t('MyBrute')}. ${t('newLevelFor')} ${brute.name || ''}`} headerUrl={`/${brute.name}/cell`}>
      <MuiAlert severity="success" variant="filled">
        <Text h5>{t('newLevelFor')} {brute.name} !</Text>
      </MuiAlert>
      <Paper sx={{ mt: 3, bgcolor: 'background.paperLight' }}>
        <Text>
          <Text component="span" bold>{brute.name} </Text>
          {t('reached')}
          <Text component="span" bold> {t('levelLower')} {brute.level + 1} </Text>
          ! {t('chooseOneOfTheFollowingBonuses')} :
        </Text>
        <Box sx={{ textAlign: 'center' }}>
          {/* BRUTE */}
          <BoxBg
            src="/images/level-up/brute-bg.webp"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 182,
              width: 201,
              mx: 'auto',
              mt: 1,
            }}
          >
            <Box width={60}>
              <BruteRender
                brute={brute}
              />
            </Box>
          </BoxBg>
          {/* ARROWS */}
          {!smallScreen && (
            <Box
              component="img"
              src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/level-up/arrows.webp`}
              sx={{ mt: -3, zIndex: 1, position: 'relative' }}
            />
          )}
          {/* CHOICES */}
          <Box sx={{ my: 1 }}>
            {choices && choices.map((destinyChoice, i) => (
              <Box
                key={destinyChoice.id}
                sx={{
                  position: 'relative',
                  height: 129,
                  width: 255,
                  display: 'inline-block',
                  mx: 2,
                  mb: 2,
                }}
              >
                <BoxBg
                  src={samePath
                    && ((brute.previousDestinyPath[brute.level - 1] === DestinyChoiceSide.LEFT
                      && i === 0)
                      || (brute.previousDestinyPath[brute.level - 1] === DestinyChoiceSide.RIGHT
                        && i === 1))
                    ? '/images/level-up/box-current.png'
                    : '/images/level-up/box.png'}
                  sx={{
                    pt: 5,
                    height: 129,
                  }}
                >
                  {/* CHOICE HEADER */}
                  <Text caption>
                    {/* +3 Skill */}
                    {destinyChoice.type === 'stats' && !destinyChoice.stat2 && `+${destinyChoice.stat1Value || ''} ${t('in')}`}
                    {/* +2/+1 Skill */}
                    {destinyChoice.type === 'stats' && destinyChoice.stat2 && `+${destinyChoice.stat1Value || ''}/+${destinyChoice.stat2Value || ''} ${t('in')}`}
                    {/* New weapon */}
                    {destinyChoice.type === 'weapon' && `${t('newWeapon')} :`}
                    {/* New skill */}
                    {destinyChoice.type === 'skill' && `${t('newSkill')} :`}
                    {/* New pet */}
                    {destinyChoice.type === 'pet' && `${t('newPet')} :`}
                  </Text>

                  {/* CHOICE CONTENT */}
                  {/* Single value */}
                  {(destinyChoice.type === 'skill' ? (
                    <SkillTooltip
                      skill={skills.find((s) => s.name === destinyChoice.skill)}
                    >
                      <Text h6 bold smallCaps>{t(destinyChoice.skill as SkillName)}</Text>
                    </SkillTooltip>
                  ) : destinyChoice.type === 'weapon' ? (
                    <WeaponTooltip weapon={weapons
                      .find((w) => w.name === destinyChoice.weapon)}
                    >
                      <Text h6 bold smallCaps>{t(destinyChoice.weapon as WeaponName)}</Text>
                    </WeaponTooltip>
                  ) : destinyChoice.type === 'pet' ? (
                    <Text h6 bold smallCaps>{t(destinyChoice.pet as PetName)}</Text>
                  ) : !destinyChoice.stat2 ? (
                    <Text h6 bold smallCaps>{t(destinyChoice.stat1 as BruteStat)}</Text>
                  ) : (
                    <Text h6 bold smallCaps>
                      {t(destinyChoice.stat1 as BruteStat)} / {t(destinyChoice.stat2)}
                    </Text>
                  ))}
                </BoxBg>
                {/* VALIDATE */}
                <StyledButton
                  sx={{
                    height: 42,
                    width: 135,
                    position: 'absolute',
                    bottom: -8,
                    right: -8,
                  }}
                  image="/images/level-up/button.png"
                  imageHover="/images/level-up/button-hover.png"
                  shadow={false}
                  contrast={false}
                  onClick={levelUp(i === 0 ? DestinyChoiceSide.LEFT : DestinyChoiceSide.RIGHT)}
                >
                  <Text bold smallCaps color="success">{t('validate')}</Text>
                </StyledButton>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Page>
  );
};

export default LevelUpView;
