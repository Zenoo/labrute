import { Box } from '@mui/material';
import React, { Fragment } from 'react';

export interface TieredStatProps<T> {
  values?: T[];
  tier?: number;
  formatter?: (value: T, index: number) => string | number;
  // Props that can be passed from Trans component translations
  minus?: boolean | string;
  plus?: boolean | string;
  percent?: boolean | string;
}

export const TieredStat = <T extends string | number>({
  values,
  tier,
  formatter,
  minus,
  plus,
  percent,
}: TieredStatProps<T>) => {
  if (!values || !tier) return null;

  // Handle boolean attributes from Trans (can be true, "true", or "" for boolean attrs)
  const showMinus = minus === true || minus === 'true' || minus === '';
  const showPlus = plus === true || plus === 'true' || plus === '';
  const showPercent = percent === true || percent === 'true' || percent === '';

  const prefix = showMinus ? '-' : showPlus ? '+' : '';
  const suffix = showPercent ? '%' : '';

  // If all values are the same, just return the formatted first value
  if (values.every((v) => v === values[0])) {
    const firstValue = values[0];

    if (typeof firstValue === 'undefined') {
      return null;
    }

    return (
      <>
        {prefix}
        {formatter ? formatter(firstValue, 0) : firstValue}
        {suffix}
      </>
    );
  }

  return (
    <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
      {prefix}
      <Box component="span" sx={{ opacity: 0.3 }}>[</Box>
      {values.map((value, index) => (
        <Fragment key={index}>
          {index > 0 && <Box component="span" sx={{ opacity: 0.3 }}>/</Box>}
          <Box
            component="span"
            sx={{
              fontWeight: index === tier - 1 ? 'bold' : 'normal',
              opacity: index === tier - 1 ? 1 : 0.3,
            }}
          >
            {formatter ? formatter(value, index) : value}
          </Box>
        </Fragment>
      ))}
      <Box component="span" sx={{ opacity: 0.3 }}>]</Box>
      {suffix}
    </Box>
  );
};
