import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { useBrute } from '../../hooks/useBrute';
import { getCalculatedBrute, ServerHookBrute } from '@labrute/core';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { Loader } from '../Loader';

/**
 * ProvideBrute component
 */
export const ProvideBrute = () => {
  const { bruteName } = useParams();
  const { updateBrute } = useBrute();
  const { modifiers } = useAuth();
  const Server = useServer();
  const [rawBrute, setRawBrute] = useState<ServerHookBrute | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch brute data (only when bruteName changes)
  useEffect(() => {
    if (!bruteName) return;

    setLoading(true);

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
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, [rawBrute, modifiers, updateBrute]);
  return (
    loading ? <Loader height="calc(100vh - 32px)" color="secondary" /> : <Outlet />
  );
};
