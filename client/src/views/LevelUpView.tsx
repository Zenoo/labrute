import getLevelUpChoices from '@eternaltwin/labrute-core/brute/getLevelUpChoices';
import getXPNeeded from '@eternaltwin/labrute-core/brute/getXPNeeded';
import updateBruteData from '@eternaltwin/labrute-core/brute/updateBruteData';
import accessDestinyLevel from '@eternaltwin/labrute-core/brute/accessDestinyLevel';
import { Brute, Destiny, LevelUpChoice } from '@eternaltwin/labrute-core/types';
import { Alert as MuiAlert, Box, Paper } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
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

  const [brute, setBrute] = useState<Brute | null>(null);
  const [destiny, setDestiny] = useState<Destiny | undefined>();
  const [choices, setChoices] = useState<[LevelUpChoice, LevelUpChoice] | null>(null);

  // Fetch brute
  useEffect(() => {
    let isSubscribed = true;
    if (bruteName) {
      Server.Brute.startLevelUp(bruteName).then((data) => {
        if (isSubscribed) {
          // Check if the brute has enough XP
          if (data.brute.data.xp < getXPNeeded(data.brute.data.level + 1)) {
            navigate(`/${bruteName}/cell`);
          } else {
            setBrute(data.brute);
            setDestiny(data.destiny);

            // Get level up choices from destiny or generate and save them
            const destinyChoices = data.destiny
              ? accessDestinyLevel(data.destiny, data.brute.data.level + 1)
              : null;

            if (destinyChoices) {
              setChoices(destinyChoices);
            } else {
              // Generate choices and save them
              const newChoices = getLevelUpChoices(data.brute);
              Server.Brute.saveDestinyChoices(
                data.brute.name,
                newChoices
              ).then((newDestiny) => {
                setChoices(newChoices);
                setDestiny(newDestiny);
              }).catch(catchError(Alert));
            }
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
    if (!brute || !choices || !destiny) return;

    const { [choice]: chosen } = choices;

    await Server.Brute.levelUp(
      brute.name,
      updateBruteData(brute, chosen),
      choice,
      destiny.id,
    ).catch(catchError(Alert));
    navigate(`/${brute.name}/cell`);
  }, [Alert, brute, choices, destiny, navigate]);

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
          <Box
            component="img"
            src="/images/level-up/arrows.png"
            sx={{ mt: -3, zIndex: 1, position: 'relative' }}
          />
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
                    <Text h6 bold smallCaps>{t(choice.name)}</Text>
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
