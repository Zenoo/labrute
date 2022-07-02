import { Box, Grid, Link, Tooltip } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BoxWithBackground from '../components/BoxWithBackground';
import Brute from '../components/Brute/Brute';
import EmptyBrute from '../components/Brute/EmptyBrute';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import availableBodyParts from '../utils/brute/availableBodyParts';
import { Gender } from '../utils/brute/types';
import randomBetween from '../utils/randomBetween';

const redirectImages = [
  'arkadeo.gif',
  'dinorpg_2.jpg',
  'dinorpg_3.jpg',
  'kingdom_1.png',
  'mush_1.jpg',
  'mush_2.jpg',
  'snake.gif',
  'teacher_fr.gif',
];

/**
 * HomeView component
 */
const HomeView = () => {
  const { t } = useTranslation();
  // const [users] = useStateAsync([], Server.User.list);
  // Randomized left redirect
  const leftRedirect = useMemo(() => Math.floor(
    Math.random() * (redirectImages.length - 1) + 1
  ), []);
  // Randomized right redirect (must be different from left redirect)
  const rightRedirect = useMemo(() => {
    let redirect = Math.floor(Math.random() * (redirectImages.length - 1) + 1);
    while (redirect === leftRedirect) {
      redirect = Math.floor(Math.random() * (redirectImages.length - 1) + 1);
    }
    return redirect;
  }, [leftRedirect]);

  const [login, setLogin] = useState('');
  const [name, setName] = useState('');

  /* CHARACTER CREATOR */
  const [creationStarted, setCreationStarted] = useState(false);
  const [gender, setGender] = useState<Gender>('female');
  const [bodyParts, setBodyParts] = useState({
    longHair: 0,
    lowerRightArm: 0,
    rightHand: 0,
    UpperRightArm: 0,
    rightShoulder: 0,
    rightFoot: 0,
    lowerRightLeg: 0,
    upperRightLeg: 0,
    leftFoot: 0,
    lowerLeftLeg: 0,
    pelvis: 0,
    upperLeftLeg: 0,
    tummy: 0,
    torso: 0,
    head: 0,
    leftHand: 0,
    upperLeftArm: 0,
    lowerLeftArm: 0,
    leftShoulder: 0,
  });

  // Login change handler
  const changeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  }, []);
  // Name change handler
  const changeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    // Change character
    if (!creationStarted) setCreationStarted(true);
    const newGender = gender === 'male' ? 'female' : 'male';
    setGender(newGender);

    setBodyParts({
      longHair: randomBetween(1, availableBodyParts[newGender].longHair),
      lowerRightArm: randomBetween(1, availableBodyParts[newGender].rightHand),
      rightHand: randomBetween(1, availableBodyParts[newGender].lowerRightArm),
      UpperRightArm: randomBetween(1, availableBodyParts[newGender].rightShoulder),
      rightShoulder: randomBetween(1, availableBodyParts[newGender].UpperRightArm),
      rightFoot: randomBetween(1, availableBodyParts[newGender].rightFoot),
      lowerRightLeg: randomBetween(1, availableBodyParts[newGender].lowerRightLeg),
      upperRightLeg: randomBetween(1, availableBodyParts[newGender].upperRightLeg),
      leftFoot: randomBetween(1, availableBodyParts[newGender].leftFoot),
      lowerLeftLeg: randomBetween(1, availableBodyParts[newGender].lowerLeftLeg),
      pelvis: randomBetween(1, availableBodyParts[newGender].pelvis),
      upperLeftLeg: randomBetween(1, availableBodyParts[newGender].upperLeftLeg),
      tummy: randomBetween(1, availableBodyParts[newGender].tummy),
      torso: randomBetween(1, availableBodyParts[newGender].torso),
      head: randomBetween(1, availableBodyParts[newGender].head),
      leftHand: randomBetween(1, availableBodyParts[newGender].leftHand),
      upperLeftArm: randomBetween(1, availableBodyParts[newGender].upperLeftArm),
      lowerLeftArm: randomBetween(1, availableBodyParts[newGender].lowerLeftArm),
      leftShoulder: randomBetween(1, availableBodyParts[newGender].leftShoulder),
    });
  }, [creationStarted, gender]);

  console.log(bodyParts);

  return (
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
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              {creationStarted ? (
                <Brute
                  gender={gender}
                  bodyParts={bodyParts}
                  inverted
                  height="140"
                />
              ) : <EmptyBrute />}
            </Box>
            {/* CUSTOMIZATION BUTTONS */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Tooltip title={t('changeAppearance')}>
                <StyledButton
                  image="/images/creation/bodyType.svg"
                  swapImage={false}
                  sx={{ width: 89, height: 89, mt: -8 }}
                />
              </Tooltip>
              <Tooltip title={t('changeColors')}>
                <StyledButton
                  image="/images/creation/color.svg"
                  swapImage={false}
                  sx={{ width: 89, height: 89, mt: -8 }}
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
              <StyledButton>{t('validate')}</StyledButton>
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
            <Text h4 sx={{ typography: 'handwritten', fontWeight: 'bold' }} color="secondary">{t('toBeABrute')}</Text>
            <Text sx={{ fontWeight: 'bold' }} color="text.primary">{t('createBrute')}</Text>
          </Box>
          {/* SECOND TEXT */}
          <Box sx={{ width: 300, mt: 4, ml: 2 }}>
            <Text h4 sx={{ typography: 'handwritten', fontWeight: 'bold' }} color="secondary">{t('orNotToBe')}</Text>
            <Text sx={{ fontWeight: 'bold' }} color="text.primary">{t('otherGames')}</Text>
          </Box>
          {/* OTHER GAMES */}
          <Box sx={{ mt: 1, ml: 2 }}>
            {[leftRedirect, rightRedirect].map((redirect) => (
              <Tooltip title="TODO" key={redirect}>
                <Link href="" sx={{ width: 200, mx: 4, display: 'inline-block' }}>
                  <Box
                    component="img"
                    src={`/images/redirects/${redirectImages[redirect]}`}
                    sx={{ width: 1, border: 2 }}
                  />
                </Link>
              </Tooltip>
            ))}
          </Box>
        </BoxWithBackground>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'end', mx: '14px', mt: 2 }}>
        <StyledInput
          label={t('alreadyRegistered')}
          onChange={changeLogin}
          value={login}
        />
        <StyledButton sx={{ ml: 2 }}>
          {t('enter!')}
        </StyledButton>
      </Box>
    </Page>
  );
};

export default HomeView;
