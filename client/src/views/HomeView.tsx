import { BruteWithBodyColors, getRandomBody, getRandomColors, UserWithBrutesBodyColor } from '@labrute/core';
import { Gender, Prisma } from '@labrute/prisma';
import { Box, Grid, Link, Tooltip, useMediaQuery } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import BoxBg from '../components/BoxBg';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import EmptyBrute from '../components/Brute/Body/EmptyBrute';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { getRandomAd } from '../utils/ads';
import catchError from '../utils/catchError';
import Fetch from '../utils/Fetch';
import Server from '../utils/Server';
import HomeMobileView from './mobile/HomeMobileView';
import FantasyButton from '../components/FantasyButton';

/**
 * HomeView component
 */
const HomeView = () => {
  const { t } = useTranslation();
  const smallScreen = useMediaQuery('(max-width: 935px)');
  const Alert = useAlert();
  const { authing, setAuthing, updateData, user } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage();

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
      Fetch<UserWithBrutesBodyColor>('/api/oauth/token', { code }).then((response) => {
        updateData(response);
        localStorage.setItem('user', response.id);
        localStorage.setItem('token', response.connexionToken);
        localStorage.setItem('expires', moment.utc().add(7, 'days').toISOString());
        Alert.open('success', t('loginSuccess'));

        // Redirect to first brute if exists
        if (response.brutes.length) {
          navigate(`/${response.brutes[0].name}/cell`);
        }
      }).catch(catchError(Alert)).finally(() => {
        // Remove code/state from url and set url to '/'
        url.searchParams.delete('code');
        url.searchParams.delete('state');
        url.pathname = '/';
        window.history.replaceState({}, '', url.toString());

        setAuthing(false);
      });
    }
  }, [Alert, authing, navigate, setAuthing, t, updateData, user]);

  // Randomized left ad
  const leftAd = useMemo(() => getRandomAd(language), [language]);
  // Randomized right ad (must be different from left ad)
  const rightAd = useMemo(() => getRandomAd(language, leftAd.name), [language, leftAd.name]);

  const [name, setName] = useState('');

  /* CHARACTER CREATOR */
  const [creationStarted, setCreationStarted] = useState(false);
  const [gender, setGender] = useState<Gender>(Gender.female);
  const [bodyParts, setBodyParts] = useState<Prisma.BruteBodyCreateWithoutBruteInput>(
    getRandomBody(gender),
  );
  const [bodyColors, setBodyColors] = useState<Prisma.BruteColorsCreateWithoutBruteInput>(
    getRandomColors(gender),
  );

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
    if (!user) {
      Alert.open('error', t('pleaseLogin'));
      return;
    }
    // Check name validity
    if (!name.match(/^[a-zA-Z0-9_-]*$/) || name.length < 3 || name.length > 16) {
      Alert.open('error', t('invalidName'));
      return;
    }

    // Check if the name is available
    const isNameAvailable = await Server.Brute.isNameAvailable(name)
      .catch(catchError(Alert));

    if (typeof isNameAvailable !== 'boolean') {
      Alert.open('error', 'wut?');
      return;
    }

    if (!isNameAvailable) {
      Alert.open('error', t('nameUnavailable'));
      return;
    }

    // Create brute

    // Get referer
    const url = new URL(window.location.href);
    const ref = url.searchParams.get('ref');

    const response = await Server.Brute.create(
      name,
      user.id,
      gender,
      bodyParts,
      bodyColors,
      ref
    ).catch(catchError(Alert));

    if (response?.brute) {
      updateData({
        ...user,
        // Add brute to user brutes
        brutes: user.brutes ? [...user.brutes, response.brute] : [response.brute],
        // Update points
        sacrificePoints: user.sacrificePoints - response.pointsLost,
        // Update brute limit
        bruteLimit: response.newLimit,
      });
      // Redirect to brute page
      navigate(`/${name}/cell`);
    }
  }, [Alert, bodyColors, bodyParts, gender, name, navigate, t, updateData, user]);

  // Login
  const login = useCallback(() => {
    Fetch<{ url: string }>('/api/oauth/redirect').then(({ url }) => {
      window.location.href = url;
    }).catch(catchError(Alert));
  }, [Alert]);

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
        leftAd={leftAd}
        rightAd={rightAd}
        createBrute={createBrute}
      />
    )
    : (
      <Page title={t('MyBrute')}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          {/* CHARACTER CREATION */}
          <BoxBg
            src="/images/creation/bg.png"
            sx={{
              width: 290,
              height: 454,
              backgroundSize: '270px 364px',
              backgroundPosition: '20px -2px',
            }}
          >
            {/* CREATION HEADER */}
            <Grid container sx={{ pl: 7, pr: 4, pt: 3 }}>
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
                    brute={{
                      name,
                      gender,
                      body: bodyParts,
                      colors: bodyColors,
                    } as BruteWithBodyColors}
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
              {(user || authing) ? (
                // Visual noise
                <Box
                  component="img"
                  src="/images/creation/scratches.png"
                  alt="Scratch"
                  sx={{ ml: 6 }}
                />
              ) : (
                <FantasyButton
                  color="success"
                  onClick={login}
                  sx={{ mt: 2 }}
                >
                  {t('connect')}
                </FantasyButton>
              )}
            </Box>
          </BoxBg>
          {/* RIGHT SIDE */}
          <BoxBg
            src="/images/main-bg.gif"
            sx={{ width: 640, height: 454 }}
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
              {[leftAd, rightAd].map((ad) => (
                <Tooltip title={t(`${ad.name}.desc`)} key={ad.name}>
                  <Link href={ad.url} target="_blank" sx={{ width: 200, mx: 4, display: 'inline-block' }}>
                    <Box
                      component="img"
                      src={`/images/redirects/${ad.illustration}`}
                      sx={{ width: 1, border: 2 }}
                    />
                  </Link>
                </Tooltip>
              ))}
            </Box>
          </BoxBg>
        </Box>
      </Page>
    );
};

export default HomeView;
