import React, { forwardRef } from 'react';
import { Typography, TypographyProps } from '@mui/material';

export interface TextProps extends TypographyProps {
  children?: React.ReactNode;
  typo?: string;
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
  italic?: boolean;
  smallCaps?: boolean;
  upperCase?: boolean;
  center?: boolean;
  component?: React.ElementType;
}

const Text = forwardRef<HTMLElement, TextProps>(({
  children,
  typo,
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
  italic = false,
  smallCaps = false,
  upperCase = false,
  center = false,
  sx,
  ...rest
}, ref) => {
  // Preserve the first enabled variant without allocating a lookup table on every text render.
  let variant: TypographyProps['variant'];

  if (h1) {
    variant = 'h1';
  } else if (h2) {
    variant = 'h2';
  } else if (h3) {
    variant = 'h3';
  } else if (h4) {
    variant = 'h4';
  } else if (h5) {
    variant = 'h5';
  } else if (h6) {
    variant = 'h6';
  } else if (subtitle1) {
    variant = 'subtitle1';
  } else if (subtitle2) {
    variant = 'subtitle2';
  } else if (body1) {
    variant = 'body1';
  } else if (body2) {
    variant = 'body2';
  } else if (caption) {
    variant = 'caption';
  } else if (button) {
    variant = 'button';
  } else if (overline) {
    variant = 'overline';
  } else if (inherit) {
    variant = 'inherit';
  } else {
    variant = 'body1';
  }

  return (
    <Typography
      variant={variant}
      fontWeight={bold ? '600' : undefined}
      sx={{
        fontVariant: smallCaps ? 'small-caps' : undefined,
        textTransform: upperCase ? 'uppercase' : undefined,
        typography: typo,
        textAlign: center ? 'center' : undefined,
        fontStyle: italic ? 'italic' : undefined,
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

export { Text };
