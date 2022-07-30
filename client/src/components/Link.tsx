import React, { forwardRef } from 'react';
import { Link as MUILink, LinkBaseProps } from '@mui/material';
import { Link as LinkComponent } from 'react-router-dom';

export interface LinkProps extends LinkBaseProps {
  to: string;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({
  to,
  children,
  ...rest
}, ref) => {
  return (
    <MUILink
      component={LinkComponent}
      ref={ref}
      to={to}
      {...rest}
    >
      {children}
    </MUILink>
  );
});

Link.displayName = 'Link';

export default Link;