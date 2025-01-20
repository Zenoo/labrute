import { Badge, Box, BoxProps, SvgIconTypeMap, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Text from './Text';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface ActionButtonProps extends BoxProps {
  to?: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, 'svg'>> & {
    muiName: string;
  };
  iconColor?: string;
  title: string;
  badge?: string | number;
}

/**
 * ActionButton component
 */
const ActionButton = React.forwardRef<HTMLDivElement, ActionButtonProps>(({
  to,
  Icon,
  title,
  iconColor,
  badge,
  sx,
  ...rest
}, ref) => {
  const theme = useTheme();

  const linkProps = to ? { component: Link, to } : {};

  return (
    <Box
      ref={ref}
      {...linkProps}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        color: theme.palette.topbar.colorDark,
        borderRadius: '3px',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
          color: theme.palette.topbar.colorLight,
          bgcolor: theme.palette.topbar.contrast,
          boxShadow: `0 0 8px ${theme.palette.topbar.contrastShadow}`,
          '& svg': {
            color: theme.palette.topbar.colorLight,
          }
        },
        ...sx
      }}
      {...rest}
    >

      <Badge
        badgeContent={badge}
        color="info"
      >
        <Icon fontSize="large" sx={{ color: iconColor ?? theme.palette.topbar.contrast }} />
      </Badge>
      <Text caption center>
        {title}
      </Text>
    </Box>
  );
});

ActionButton.displayName = 'ActionButton';

export default ActionButton;
