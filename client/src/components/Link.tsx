import React, { forwardRef, PropsWithChildren } from 'react';
import { Link as MUILink, LinkBaseProps } from '@mui/material';
import { Link as LinkComponent } from 'react-router-dom';

export interface LinkProps extends LinkBaseProps {
  to?: string;
  // TODO: Remove the definition of `HTMLAnchorElement` props from here.
  //       These props are a hack around type definition issues (most likely
  //       with `MUILink`?)
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  target?: string;
  title?: string;
}

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(({
  to,
  children,
  ...rest
}, ref) => (
  <MUILink
    component={to ? LinkComponent : 'a'}
    ref={ref}
    to={to}
    {...rest}
  >
    {children}
  </MUILink>
));

Link.displayName = 'Link';

export default Link;
