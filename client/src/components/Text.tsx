import React, { forwardRef } from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface Props extends TypographyProps {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  subtitle1?: boolean;
  subtitle2?: boolean;
  body1?: boolean;
  body2?: boolean;
  caption?: boolean;
  button?: boolean;
  overline?: boolean;
  inherit?: boolean;
  bold?: boolean;
  smallCaps?: boolean;
  component?: React.ElementType;
}

const Text = forwardRef<HTMLElement, Props>(({
  children,
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  subtitle1 = false,
  subtitle2 = false,
  body1 = false,
  body2 = false,
  caption = false,
  button = false,
  overline = false,
  inherit = false,
  bold = false,
  smallCaps = false,
  sx,
  ...rest
}, ref) => {
  return (
    <Typography
      variant={
      h1 ? 'h1'
        : h2 ? 'h2'
          : h3 ? 'h3'
            : h4 ? 'h4'
              : h5 ? 'h5'
                : h6 ? 'h6'
                  : subtitle1 ? 'subtitle1'
                    : subtitle2 ? 'subtitle2'
                      : body1 ? 'body1'
                        : body2 ? 'body2'
                          : caption ? 'caption'
                            : button ? 'button'
                              : overline ? 'overline'
                                : inherit ? 'inherit'
                                  : 'body1'
      }
      // eslint-disable-next-line no-undefined
      fontWeight={bold ? '600' : undefined}
      sx={{
        // eslint-disable-next-line no-undefined
        fontVariant: smallCaps ? 'small-caps' : undefined,
        ...sx,
      }}
      {...rest}
      ref={ref}
    >
      {children}
    </Typography>
  );
});

Text.displayName = 'Text';

export default Text;
