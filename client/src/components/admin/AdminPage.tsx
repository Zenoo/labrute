import { Stack, StackProps } from '@mui/material';
import React from 'react';

/** Shared spacing for dashboard views; navigation belongs to the dashboard shell. */
export const AdminPage = (props: StackProps) => (
  <Stack spacing={3} sx={{ minWidth: 0 }} {...props} />
);
