import { FullBrute } from '@labrute/core';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useAuth } from './useAuth';

interface BruteContextInterface {
  brute: FullBrute | null,
  owner: boolean,
  updateBrute: (data: React.SetStateAction<FullBrute | null>) => void,
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
  const [brute, setBrute] = useState<FullBrute | null>(null);

  // Owner?
  const owner = useMemo(() => !!(user && brute
    && user.brutes.find((b) => b.name === brute.name)), [user, brute]);

  const updateBrute = useCallback((data: React.SetStateAction<
    FullBrute | null
  >) => {
    setBrute(data);
  }, []);

  const methods = useMemo(() => ({
    brute,
    owner,
    updateBrute
  }), [brute, owner, updateBrute]);

  return (
    <BruteContext.Provider value={methods}>
      {children}
    </BruteContext.Provider>
  );
};
