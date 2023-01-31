import React from 'react';
import { Outlet } from 'react-router';
import { BruteProvider } from '../../hooks/useBrute';

/**
 * ProvideBrute component
 */
const ProvideBrute = () => (
  <BruteProvider>
    <Outlet />
  </BruteProvider>
);

export default ProvideBrute;
