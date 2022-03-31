import { Box, BoxProps } from '@mui/material';
import React, { useMemo } from 'react';
import head from '../assets/head.jpg';
import art10 from '../assets/art/10.png';
import art104 from '../assets/art/104.png';
import art106 from '../assets/art/106.png';
import art107 from '../assets/art/107.png';
import { useTranslation } from 'react-i18next';

const art = [art10, art104, art106, art107];

/**
 * Header component
 * @param props - Props passed to the component
 * @returns The component
 */
const Header = (props: BoxProps) => {
  const { t } = useTranslation();

  // Randomized left art
  const leftArt = useMemo(() => art[Math.floor(Math.random() * art.length)], []);
  // Randomized right art (must be different from left art)
  const rightArt = useMemo(() => {
    const noDups = art.filter((a) => a !== leftArt);
    return noDups[Math.floor(Math.random() * noDups.length)];
  }, [leftArt]);

  return (
    <Box
      sx={{
        position: 'relative',
      }}
      {...props}
    >
      <Box
        component="img"
        src={leftArt}
        alt={t('MyBruteIllustration')}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
      <Box component="img" src={head} alt={t('MyBrute')} />
      <Box
        component="img"
        src={rightArt}
        alt={t('MyBruteIllustration')}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
      />
    </Box>
  );
};

export default Header;
