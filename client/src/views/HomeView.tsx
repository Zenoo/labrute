import createRandomBruteStats from '@eternaltwin/labrute-core/brute/createRandomBruteStats';
import getRandomBody from '@eternaltwin/labrute-core/brute/getRandomBody';
import getRandomColors from '@eternaltwin/labrute-core/brute/getRandomColors';
import { BodyColors, BodyParts, Gender, User } from '@eternaltwin/labrute-core/types';
import { Box, Grid, Link, Tooltip, useMediaQuery } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import BoxWithBackground from '../components/BoxWithBackground.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
import EmptyBrute from '../components/Brute/Body/EmptyBrute.js';
import Page from '../components/Page.js';
import StyledButton from '../components/StyledButton.js';
import StyledInput from '../components/StyledInput.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import { useAuth } from '../hooks/useAuth.js';
import advertisings from '../utils/advertisings.js';
import catchError from '../utils/catchError.js';
import Fetch from '../utils/Fetch.js';
import Server from '../utils/Server.js';
import HomeMobileView from './mobile/HomeMobileView.js';

/**
 * HomeView component
 */
const HomeView = () => {
  const { t } = useTranslation();
  const smallScreen = useMediaQuery('(max-width: 935px)');
  const Alert = useAlert();
  const { authing, setAuthing, updateData, user } = useAuth();
  const navigate = useNavigate();

  // On login error
  useEffect(() => {
    const url = new URL(window.location.href);
    const error = url.searchParams.get('error');
    if (error) {
      Alert.open('error', t('loginError'));
    }
  }, [Alert, t]);

  // On login success
  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    if (code && !authing && !user) {
      setAuthing(true);
      Fetch<User>('/api/oauth/token', { code }).then((response) => {
        updateData(response);
        localStorage.setItem('user', response.id);
        localStorage.setItem('token', response.token);
        localStorage.setItem('expires', moment().add(7, 'days').toISOString());
        Alert.open('success', t('loginSuccess'));
      }).catch(catchError(Alert)).finally(() => {
        // Remove code/state from url and set url to '/'
        url.searchParams.delete('code');
        url.searchParams.delete('state');
        url.pathname = '/';
        window.history.replaceState({}, '', url.toString());

        setAuthing(false);
      });
    }
  }, [Alert, authing, setAuthing, t, updateData, user]);

  // Randomized left redirect
  const leftRedirect = useMemo(() => Math.floor(
    Math.random() * (advertisings.length - 1) + 1
  ), []);
  // Randomized right redirect (must be different from left redirect)
  const rightRedirect = useMemo(() => {
    let redirect = Math.floor(Math.random() * (advertisings.length - 1) + 1);
    while (redirect === leftRedirect) {
      redirect = Math.floor(Math.random() * (advertisings.length - 1) + 1);
    }
    return redirect;
  }, [leftRedirect]);

  const [name, setName] = useState('');

  /* CHARACTER CREATOR */
  const [creationStarted, setCreationStarted] = useState(false);
  const [gender, setGender] = useState<Gender>('female');
  const [bodyParts, setBodyParts] = useState<BodyParts>(getRandomBody(gender));
  const [bodyColors, setBodyColors] = useState<BodyColors>(getRandomColors(gender));

  // Colors randomizer
  const randomizeColors = useCallback((currentGender: Gender) => {
    setBodyColors(getRandomColors(currentGender));
  }, []);

  // Body parts randomizer
  const randomizeAppearance = useCallback(() => {
    const newGender = gender === 'male' ? 'female' : 'male';
    setGender(newGender);

    setBodyParts(getRandomBody(newGender));

    randomizeColors(newGender);
  }, [gender, randomizeColors]);

  // Name change handler
  const changeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    // Change character
    if (!creationStarted) setCreationStarted(true);
    randomizeAppearance();
  }, [creationStarted, randomizeAppearance]);

  // Change appearance
  const changeAppearance = useCallback(() => {
    if (creationStarted) {
      randomizeAppearance();
    }
  }, [creationStarted, randomizeAppearance]);

  // Change colors
  const changeColors = useCallback(() => {
    if (creationStarted) {
      randomizeColors(gender);
    }
  }, [creationStarted, gender, randomizeColors]);

  const createBrute = useCallback(async () => {
    // Check if logged in
    if (user) {
      // Check name validity
      if (name.match(/^[a-zA-Z0-9_-]*$/) && name.length >= 3 && name.length <= 16) {
        // Check if the name is available
        const isNameAvailable = await Server.Brute.isNameAvailable(name)
          .catch(catchError(Alert));
        if (typeof isNameAvailable === 'boolean') {
          if (isNameAvailable) {
            // Create brute

            // Get referer
            const url = new URL(window.location.href);
            const ref = url.searchParams.get('ref');

            const brute = await Server.Brute.create({
              user: user.id,
              name,
              ...createRandomBruteStats(),
              gender,
              body: bodyParts,
              colors: bodyColors,
              master: {
                id: 0,
                name: ref || '',
              },
              victories: 0,
              pupils: 0,
            }).catch(catchError(Alert));

            if (brute) {
              // Add brute to user brutes
              updateData({
                ...user,
                brutes: user.brutes ? [...user.brutes, brute] : [brute],
              });
              // Redirect to brute page
              navigate(`/${name}/cell`);
            }
          } else {
            Alert.open('error', t('nameUnavailable'));
          }
        }
      } else {
        Alert.open('error', t('invalidName'));
      }
    } else {
      Alert.open('error', t('pleaseLogin'));
    }
  }, [Alert, bodyColors, bodyParts, gender, name, navigate, t, updateData, user]);

  return smallScreen
    ? (
      <HomeMobileView
        changeName={changeName}
        name={name}
        creationStarted={creationStarted}
        gender={gender}
        bodyParts={bodyParts}
        bodyColors={bodyColors}
        changeAppearance={changeAppearance}
        changeColors={changeColors}
        leftRedirect={leftRedirect}
        rightRedirect={rightRedirect}
      />
    )
    : (
      <Page title={t('MyBrute')}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          {/* CHARACTER CREATION */}
          <BoxWithBackground
            url="/images/creation/bg.png"
            alt={t('background')}
            sx={{ width: 290, height: 454 }}
            imgSx={{ top: '0.2px', right: 0, left: null }}
          >
            {/* CREATION HEADER */}
            <Grid container sx={{ pl: 7, pr: 4, pt: 4 }}>
              <Grid item xs={9} sx={{ pl: 4 }}>
                <Text sx={{ typography: 'Verdana', fontSize: 10 }} color="secondary">{t('chooseName')}</Text>
              </Grid>
              <Grid item xs={3}>
                <Box component="img" src="/images/creation/arrow.png" alt={t('arrow')} />
              </Grid>
            </Grid>
            {/* NAME INPUT */}
            <Box sx={{ pl: 6.5, pr: 4 }}>
              <StyledInput
                onChange={changeName}
                value={name}
              />
              {/* CHARACTER */}
              <Box sx={{ textAlign: 'center', mt: creationStarted ? 0 : 1 }}>
                {creationStarted ? (
                  <BruteComponent
                    id={0}
                    gender={gender}
                    bodyParts={bodyParts}
                    colors={bodyColors}
                    inverted
                    sx={{ height: 160 }}
                  />
                ) : <EmptyBrute style={{ marginBottom: '12px' }} />}
              </Box>
              {/* CUSTOMIZATION BUTTONS */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Tooltip title={t('changeAppearance')}>
                  <StyledButton
                    onClick={changeAppearance}
                    image="/images/creation/bodyType.svg"
                    swapImage={false}
                    sx={{ width: 89, height: 89, mt: -9.5 }}
                  />
                </Tooltip>
                <Tooltip title={t('changeColors')}>
                  <StyledButton
                    onClick={changeColors}
                    image="/images/creation/color.svg"
                    swapImage={false}
                    sx={{ width: 89, height: 89, mt: -9.5 }}
                  />
                </Tooltip>
              </Box>
              {/* VISUAL NOISE */}
              <Box
                component="img"
                src="/images/creation/broken.png"
                alt="Crack"
                sx={{ mt: -1.5, ml: 16 }}
              />
              {/* VALIDATION */}
              <Box sx={{ textAlign: 'center' }}>
                <StyledButton onClick={createBrute}>{t('validate')}</StyledButton>
              </Box>
              {/* VISUAL NOISE */}
              <Box
                component="img"
                src="/images/creation/scratches.png"
                alt="Scratch"
                sx={{ ml: 6 }}
              />
            </Box>
          </BoxWithBackground>
          {/* RIGHT SIDE */}
          <BoxWithBackground
            url="/images/main-bg.gif"
            alt={t('background')}
            sx={{ width: 640, height: 454 }}
            imgSx={{ top: '2px' }}
          >
            {/* FIRST TEXT */}
            <Box sx={{ width: 300, mt: 2 }}>
              <Text h4 bold typo="handwritten" color="secondary">{t('toBeABrute')}</Text>
              <Text bold color="text.primary">{t('createBrute')}</Text>
            </Box>
            {/* SECOND TEXT */}
            <Box sx={{ width: 300, mt: 4, ml: 2 }}>
              <Text h4 bold typo="handwritten" color="secondary">{t('orNotToBe')}</Text>
              <Text bold color="text.primary">{t('otherGames')}</Text>
            </Box>
            {/* OTHER GAMES */}
            <Box sx={{ mt: 1, ml: 2 }}>
              {[leftRedirect, rightRedirect].map((redirect) => (
                <Tooltip title="TODO" key={redirect}>
                  <Link href="" sx={{ width: 200, mx: 4, display: 'inline-block' }}>
                    <Box
                      component="img"
                      src={`/images/redirects/${advertisings[redirect]}`}
                      sx={{ width: 1, border: 2 }}
                    />
                  </Link>
                </Tooltip>
              ))}
            </Box>
          </BoxWithBackground>
        </Box>
      </Page>
    );
};

export default HomeView;
