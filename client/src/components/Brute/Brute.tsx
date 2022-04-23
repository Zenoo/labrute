import { Box, BoxProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Asset, Gender } from '../../utils/brute/types';
import Svg from '../Svg';

interface BruteProps extends BoxProps {
  gender: Gender | null;
  hair: Asset | null;
  eye: Asset | null;
  empty?: boolean;
}

const Brute: React.FC<BruteProps> = ({ empty, gender, hair, eye }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{
      position: 'relative'
    }}
    >
      {!empty
        ? (
          <>
            <Box
              component="img"
              src="/images/character/shadow.svg"
              alt={t('shadow')}
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                m: '0 auto',
                zIndex: 1,
              }}
            />
            {eye && (
              <Svg data={eye} index={10} src={`/images/character/${gender}/head/eye/${eye.file}.svg`} />
            )}
            {hair && (
              <Svg data={hair} index={11} src={`/images/character/${gender}/head/hair/${hair.file}.svg`} />
            )}
          </>
        )
        : (
          <Box component="img" src="/images/creation/noCharacter.svg" alt={t('character')} sx={{ zIndex: 2 }} />
        )}
    </Box>
  );
};

export default Brute;
