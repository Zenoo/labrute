import { Fab } from '@mui/material';
import React from 'react';

export interface ArrowProps {
  sizeFab: 'small' | 'medium' | 'large';
  sxFab: object;
  children : React.ReactNode
  onclick : () => void
}

const IconFab = ({
  sizeFab,
  sxFab,
  children, onclick
}: ArrowProps) => (
  <Fab
    size={sizeFab}
    sx={{ ...sxFab }}
    onClick={onclick}
  >
    {children}
  </Fab>
);

export default IconFab;
