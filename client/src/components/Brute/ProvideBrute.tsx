import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { useBrute } from '../../hooks/useBrute';
import { getCalculatedBrute, ServerHookBrute } from '@labrute/core';
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
  const [rawBrute, setRawBrute] = useState<ServerHookBrute | null>(null);

  // Fetch brute data (only when bruteName changes)
  useEffect(() => {
    if (!bruteName) return;

    Server.Brute.getForHook(bruteName).then((data) => {
      setRawBrute(data);
    }).catch(() => {
      window.location.href = '/unknown-brute';
    });
  }, [bruteName, Server.Brute]);

  // Recalculate brute when raw data or modifiers change
  useEffect(() => {
    if (!rawBrute) return;

    updateBrute(getCalculatedBrute(rawBrute, modifiers));
  }, [rawBrute, modifiers, updateBrute]);
  return (
    <Outlet />
  );
};

export default ProvideBrute;
