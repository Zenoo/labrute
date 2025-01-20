import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router';
import Server from '../../utils/Server';
import { useBrute } from '../../hooks/useBrute';

/**
 * ProvideBrute component
 */
const ProvideBrute = () => {
  const { bruteName } = useParams();
  const { updateBrute } = useBrute();

  // Fetch brute
  useEffect(() => {
    if (!bruteName) return;

    Server.Brute.getForHook(bruteName).then((data) => {
      updateBrute(data);
    }).catch(() => {
      window.location.href = '/unknown-brute';
    });
  }, [bruteName, updateBrute]);

  return (
    <Outlet />
  );
};

export default ProvideBrute;
