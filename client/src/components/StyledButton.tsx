import { Box, Button, ButtonProps } from '@mui/material';
import React from 'react';

/**
 * StyledButton component
 * @returns {React.ReactElement}
 */
const StyledButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button {...rest}>
      <Box sx={{
        width: 1,
        height: 1,
        borderRadius: '4px',
        boxShadow: (theme) => `inset 0px -4px 0px ${theme.palette.border.inner},
            0px -4px 0px ${theme.palette.background.paperLight}`,
        transition: '.13s ease-in-out',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center'
      }}
      >
        <Box sx={{
          transform: 'translate3d(0px, -2px, 0px)',
          transition: '.13s ease-in-out',
          px: 2,
          py: 1,
        }}
        >
          {children}
        </Box>
      </Box>
    </Button>
  );
};

export default StyledButton;
