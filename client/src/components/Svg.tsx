import { Box, BoxProps, SxProps } from '@mui/material';
import React from 'react';
import { Asset } from '../utils/brute/types';

interface SvgProps extends BoxProps {
  src: string;
  data: Asset;
  index?: number;
  sx?: SxProps;
}

const Svg: React.FC<SvgProps> = ({ src, data, index, sx, ...rest }) => {
  return (
    <Box
      component="img"
      src={src}
      sx={{
        position: 'absolute',
        top: data.position.y,
        left: data.position.x,
        transformOrigin: `${data.position.x}px ${data.position.y}px`,
        zIndex: index || 0,
        ...sx,
      }}
      {...rest}
    />
  );
};

export default Svg;
