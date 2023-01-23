import { BruteWithBodyColors, getXPNeeded, skills, weapons } from '@labrute/core';
import { BruteStat, DestinyChoice, DestinyChoiceSide, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { Alert as MuiAlert, Box, Paper, useMediaQuery } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import SkillTooltip from '../components/Brute/SkillTooltip';
import WeaponTooltip from '../components/Brute/WeaponTooltip';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import catchError from '../utils/catchError';
import Server from '../utils/Server';

const LevelUpView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const Alert = useAlert();
  const smallScreen = useMediaQuery('(max-width: 638px)');

  const [brute, setBrute] = useState<BruteWithBodyColors | null>(null);
  const [choices, setChoices] = useState<[DestinyChoice, DestinyChoice] | null>(null);

  // Fetch brute
  useEffect(() => {
    let isSubscribed = true;
    if (bruteName) {
      Server.Brute.getLevelUpChoices(bruteName).then((data) => {
        if (isSubscribed) {
          // Check if the brute has enough XP
          if (data.brute.xp < getXPNeeded(data.brute.level + 1)) {
            navigate(`/${bruteName}/cell`);
          } else {
            setBrute(data.brute);
            setChoices(data.choices);
          }
        }
      }).catch(() => {
        navigate(`/${bruteName}/cell`);
      });
    }
    return () => { isSubscribed = false; };
  }, [Alert, bruteName, navigate, user]);

  // Trigger level up
  const levelUp = useCallback((choice: DestinyChoiceSide) => async () => {
    if (!brute || !choices) return;

    await Server.Brute.levelUp(
      brute.name,
      choice,
    ).catch(catchError(Alert));
    navigate(`/${brute.name}/cell`);
  }, [Alert, brute, choices, navigate]);

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
            src="/images/level-up/brute-bg.gif"
            sx={{
              height: 182,
              width: 201,
              mx: 'auto',
              mt: 1,
            }}
          >
            <BruteComponent
              brute={brute}
              inverted
              sx={{ height: 160, mt: 1 }}
            />
          </BoxBg>
          {/* ARROWS */}
          {!smallScreen && (
            <Box
              component="img"
              src="/images/level-up/arrows.png"
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
                  src="/images/level-up/box.png"
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
