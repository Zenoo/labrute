import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router';
import Server from '../../utils/Server';
import { useBrute } from '../../hooks/useBrute';
import { getCalculatedBrute } from '@labrute/core';
import { useAuth } from '../../hooks/useAuth';

/**
 * ProvideBrute component
 */
const ProvideBrute = () => {
  const { bruteName } = useParams();
  const { updateBrute } = useBrute();
  const { modifiers } = useAuth();

  // Fetch brute
  useEffect(() => {
    if (!bruteName) return;

    Server.Brute.getForHook(bruteName).then((data) => {
      updateBrute(getCalculatedBrute(data, modifiers));
    }).catch(() => {
      window.location.href = '/unknown-brute';
    });
  }, [bruteName, updateBrute, modifiers]);
  return (
    <Outlet />
  );
};

export default ProvideBrute;
