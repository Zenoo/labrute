import { HookBrute } from '@labrute/core';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Server from '../utils/Server';
import { useAuth } from './useAuth';

interface BruteContextInterface {
  brute: HookBrute | null,
  owner: boolean,
  updateBrute: (data: React.SetStateAction<HookBrute | null>) => void,
  fetchBrute: (name: string) => void,
}

const BruteContext = React.createContext<BruteContextInterface>({
  brute: null,
  owner: false,
  updateBrute: () => {
    console.error('BruteContext.updateBrute() not implemented');
  },
  fetchBrute: () => {
    console.error('BruteContext.fetchBrute() not implemented');
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
  const navigate = useNavigate();

  // Owner?
  const owner = useMemo(() => !!(user && brute
    && user.brutes.find((b) => b.name === brute.name)), [user, brute]);

  const updateBrute = useCallback((data: React.SetStateAction<
    HookBrute | null
  >) => {
    setBrute(data);
  }, []);

  const fetchBrute = useCallback((name: string) => {
    Server.Brute.getForHook(name).then((data) => {
      setBrute(data);
    }).catch(() => {
      navigate('/unknown-brute');
    });
  }, [navigate]);

  // Fetch brute
  useEffect(() => {
    if (!bruteName) return;

    fetchBrute(bruteName);
  }, [bruteName, fetchBrute]);

  const methods = useMemo(() => ({
    brute,
    owner,
    updateBrute,
    fetchBrute,
  }), [brute, fetchBrute, owner, updateBrute]);

  return (
    <BruteContext.Provider value={methods}>
      {children}
    </BruteContext.Provider>
  );
};
