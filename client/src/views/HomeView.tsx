import { Box, Grid, Link, Tooltip } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import BoxWithBackground from '../components/BoxWithBackground';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

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
  const [users] = useStateAsync([], Server.User.list);
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

  console.log(users);

  const [login, setLogin] = React.useState('');
  const [name, setName] = React.useState('');

  // Login change handler
  const changeLogin = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  }, []);
  // Name change handler
  const changeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

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
          <Grid container sx={{ pl: 7, pr: 4, pt: 4 }}>
            <Grid item xs={9} sx={{ pl: 4 }}>
              <Text sx={{ typography: 'Verdana', fontSize: 10 }} color="secondary">{t('chooseName')}</Text>
            </Grid>
            <Grid item xs={3}>
              <Box component="img" src="/images/creation/arrow.png" alt={t('arrow')} />
            </Grid>
          </Grid>
          <Box sx={{ pl: 6.5, pr: 4 }}>
            <StyledInput
              onChange={changeName}
              value={name}
            />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Box component="img" src="/images/creation/noCharacter.svg" alt={t('character')} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Tooltip title={t('changeAppearance')}>
                <StyledButton
                  image="/images/creation/bodyType.svg"
                  swapImage={false}
                  sx={{ width: 89, mt: -8 }}
                />
              </Tooltip>
              <Tooltip title={t('changeColors')}>
                <StyledButton
                  image="/images/creation/color.svg"
                  swapImage={false}
                  sx={{ width: 89, mt: -8 }}
                />
              </Tooltip>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 6 }}>
              <StyledButton>{t('validate')}</StyledButton>
            </Box>
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
