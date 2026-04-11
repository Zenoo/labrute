import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router';
import { useBrute } from '../../hooks/useBrute';
import { getCalculatedBrute } from '@labrute/core';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';

/**
 * ProvideBrute component
 */
const ProvideBrute = () => {
  const { bruteName } = useParams();
  const { updateBrute } = useBrute();
  const { modifiers } = useAuth();
  const Server = useServer();

  // Fetch brute
  useEffect(() => {
    if (!bruteName) return;

    Server.Brute.getForHook(bruteName).then((data) => {
      updateBrute(getCalculatedBrute(data, modifiers));
    }).catch(() => {
      window.location.href = '/unknown-brute';
    });
  }, [bruteName, updateBrute, modifiers, Server.Brute]);
  return (
    <Outlet />
  );
};

export default ProvideBrute;
