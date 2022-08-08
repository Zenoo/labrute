import getXPNeeded from '@eternaltwin/labrute-core/brute/getXPNeeded';
import skills from '@eternaltwin/labrute-core/brute/skills';
import updateBruteData from '@eternaltwin/labrute-core/brute/updateBruteData';
import { Brute, LevelUpChoice } from '@eternaltwin/labrute-core/types';
import { Alert as MuiAlert, Box, Paper, useMediaQuery } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
import SkillTooltip from '../components/Brute/SkillTooltip.js';
import Page from '../components/Page.js';
import StyledButton from '../components/StyledButton.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import { useAuth } from '../hooks/useAuth.js';
import catchError from '../utils/catchError.js';
import Server from '../utils/Server.js';

const LevelUpView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const Alert = useAlert();
  const smallScreen = useMediaQuery('(max-width: 638px)');

  const [brute, setBrute] = useState<Brute | null>(null);
  const [choices, setChoices] = useState<[LevelUpChoice, LevelUpChoice] | null>(null);

  // Fetch brute
  useEffect(() => {
    let isSubscribed = true;
    if (bruteName) {
      Server.Brute.getLevelUpChoices(bruteName).then((data) => {
        console.log(data);
        if (isSubscribed) {
          // Check if the brute has enough XP
          if (data.brute.data.xp < getXPNeeded(data.brute.data.level + 1)) {
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
  const levelUp = useCallback((choice: 0 | 1) => async () => {
    if (!brute || !choices) return;

    const { [choice]: chosen } = choices;

    await Server.Brute.levelUp(
      brute.name,
      updateBruteData(brute, chosen),
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
          <Text component="span" bold> {t('levelLower')} {brute.data.level + 1} </Text>
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
            {choices && choices.map((choice, i) => (
              <Box
                key={`${choice.type}${typeof choice.name === 'string' ? choice.name : ''}`}
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
                    {choice.type === 'stats' && typeof choice.name === 'string' && `+${choice.stats as number} ${t('in')}`}
                    {/* +2/+1 Skill */}
                    {choice.type === 'stats' && typeof choice.name !== 'string' && `+${(choice.stats as [number, number])[0]}/+${(choice.stats as [number, number])[1]} ${t('in')}`}
                    {/* New weapon */}
                    {choice.type === 'weapon' && `${t('newWeapon')} :`}
                    {/* New skill */}
                    {choice.type === 'skill' && `${t('newSkill')} :`}
                    {/* New pet */}
                    {choice.type === 'pet' && `${t('newPet')} :`}
                  </Text>

                  {/* CHOICE CONTENT */}
                  {/* Single value */}
                  {typeof choice.name === 'string' && (
                    choice.type === 'skill' ? (
                      <SkillTooltip skill={skills.find((s) => s.name === choice.name)}>
                        <Text h6 bold smallCaps>{t(choice.name)}</Text>
                      </SkillTooltip>
                    ) : (
                      <Text h6 bold smallCaps>{t(choice.name)}</Text>
                    )
                  )}
                  {/* Multiple values */}
                  {typeof choice.name !== 'string' && (
                    <Text h6 bold smallCaps>{t(choice.name[0])} / {t(choice.name[1])}</Text>
                  )}
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
                  onClick={levelUp(i as 0 | 1)}
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
