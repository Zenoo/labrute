import { Brute, Destiny, LevelUpChoice, Stats } from '@eternaltwin/labrute-core/types';
import { Alert as MuiAlert, Box, Paper } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxWithBackground from '../components/BoxWithBackground.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
import Page from '../components/Page.js';
import StyledButton from '../components/StyledButton.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import { useAuth } from '../hooks/useAuth.js';
import accessDestinyLevel from '../utils/brute/accessDestinyLevel.js';
import getLevelUpChoices from '../utils/brute/getLevelUpChoices.js';
import getXPNeeded from '../utils/brute/getXPNeeded.js';
import updateBruteData from '../utils/brute/updateBruteData.js';
import catchError from '../utils/catchError.js';
import Server from '../utils/Server.js';

const LevelUpView = () => {
  const { t } = useTranslation(['level-up', 'common']);
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
      Server.Brute.startLevelUp(bruteName).then((data: { brute: Brute, destiny?: Destiny }) => {
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
                data.brute.data.name,
                newChoices
              ).then((newDestiny: Destiny) => {
                setChoices(newChoices);
                setDestiny(newDestiny);
              }).catch(catchError(Alert));
            }
          }
        }
      }).catch(() => {
        console.log('Error fetching brute');
        navigate(`/${bruteName}/cell`);
      });
    }
    return () => { isSubscribed = false; };
  }, [Alert, bruteName, navigate, user]);

  // Trigger level up
  const levelUp = useCallback((number: 0 | 1) => async () => {
    if (!brute || !choices || !destiny) return;

    const { [number]: chosen } = choices;

    await Server.Brute.levelUp(
      brute.data.name,
      updateBruteData(brute, chosen),
      [
        number === 0 ? {
          ...choices[0],
          chosen: true,
        } : choices[0],
        number === 1 ? {
          ...choices[1],
          chosen: true,
        } : choices[1],
      ],
      destiny.id,
    ).catch(catchError(Alert));
    navigate(`/${brute.data.name}/cell`);
  }, [Alert, brute, choices, destiny, navigate]);

  return brute && (
    <Page title={`${t('common:MyBrute')}. ${t('level-up:newLevelFor')} ${bruteName || ''}`}>
      <MuiAlert severity="success" variant="filled">
        <Text h5>{t('level-up:newLevelFor')} {brute.data.name} !</Text>
      </MuiAlert>
      <Paper sx={{ mt: 3, bgcolor: 'background.paperLight' }}>
        <Text>
          <Text component="span" bold>{brute.data.name} </Text>
          {t('level-up:reached')}
          <Text component="span" bold> {t('level-up:level')} {brute.data.level + 1} </Text>
          ! {t('level-up:chooseOneOfTheFollowingBonuses')} :
        </Text>
        <Box sx={{ textAlign: 'center' }}>
          {/* BRUTE */}
          <BoxWithBackground
            url="/images/level-up/brute-bg.gif"
            alt={t('common:background')}
            sx={{
              height: 182,
              width: 201,
              mx: 'auto',
              mt: 1,
            }}
          >
            <BruteComponent
              id={brute.id}
              gender={brute.data.gender}
              bodyParts={brute.data.body}
              colors={brute.data.colors}
              inverted
              sx={{ height: 160, mt: 1 }}
            />
          </BoxWithBackground>
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
                  mx: 2
                }}
              >
                <BoxWithBackground
                  url="/images/level-up/box.png"
                  alt={t('level-up:choiceBackground')}
                  sx={{
                    pt: 5,
                  }}
                >
                  {/* CHOICE HEADER */}
                  <Text caption>
                    {/* +3 Skill */}
                    {choice.type === 'stats' && typeof choice.name === 'string' && `+${choice.stats as number} ${t('level-up:in')}`}
                    {/* +2/+1 Skill */}
                    {choice.type === 'stats' && typeof choice.name !== 'string' && `+${(choice.stats as [number, number])[0]}/+${(choice.stats as [number, number])[1]} ${t('level-up:in')}`}
                    {/* New weapon */}
                    {choice.type === 'weapon' && `${t('level-up:newWeapon')} :`}
                    {/* New skill */}
                    {choice.type === 'skill' && `${t('level-up:newSkill')} :`}
                    {/* New pet */}
                    {choice.type === 'pet' && `${t('level-up:newPet')} :`}
                  </Text>

                  {/* CHOICE CONTENT */}
                  {/* Single value */}
                  {typeof choice.name === 'string' && (
                    <Text h6 bold smallCaps>{t(`common:${choice.name}`)}</Text>
                  )}
                  {/* Multiple values */}
                  {typeof choice.name !== 'string' && (
                    <Text h6 bold smallCaps>{t(`common:${(choice.name as [Stats, Stats])[0]}`)} / {t(`common:${(choice.name as [Stats, Stats])[1]}`)}</Text>
                  )}
                </BoxWithBackground>
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
                  <Text bold smallCaps color="success">{t('level-up:validate')}</Text>
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
