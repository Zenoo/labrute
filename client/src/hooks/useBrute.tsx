import { HookBrute } from '@labrute/core';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import Server from '../utils/Server';
import { useAuth } from './useAuth';

interface BruteContextInterface {
  brute: HookBrute | null,
  owner: boolean,
  updateBrute: (data: React.SetStateAction<HookBrute | null>) => void,
}

const BruteContext = React.createContext<BruteContextInterface>({
  brute: null,
  owner: false,
  updateBrute: () => {
    console.error('BruteContext.updateBrute() not implemented');
  },
});

export function useBrute(): BruteContextInterface {
  return useContext(BruteContext);
}

interface BruteProviderProps {
  children: React.ReactNode;
}

export const BruteProvider = ({ children }: BruteProviderProps) => {
  const { user } = useAuth();
  const { bruteName } = useParams();
  const [brute, setBrute] = useState<HookBrute | null>(null);

  // Owner?
  const owner = useMemo(() => !!(user && brute
    && brute.userId === user.id), [user, brute]);

  const updateBrute = useCallback((data: React.SetStateAction<
    HookBrute | null
  >) => {
    setBrute(data);
  }, []);

  // Fetch brute
  useEffect(() => {
    if (!bruteName) return;

    Server.Brute.getForHook(bruteName).then((data) => {
      setBrute(data);
    }).catch(() => {
      window.location.href = '/unknown-brute';
    });
  }, [bruteName]);

  const methods = useMemo(() => ({
    brute,
    owner,
    updateBrute,
  }), [brute, owner, updateBrute]);

  return (
    <BruteContext.Provider value={methods}>
      {children}
    </BruteContext.Provider>
  );
};
