import { HookBrute } from '@labrute/core';
import React, { useCallback, useContext, useMemo, useState } from 'react';
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
  const [brute, setBrute] = useState<HookBrute | null>(null);

  // Owner?
  const owner = useMemo(() => !!(user && brute
    && brute.userId === user.id), [user, brute]);

  const updateBrute = useCallback((data: React.SetStateAction<
    HookBrute | null
  >) => {
    setBrute(data);
  }, []);

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
