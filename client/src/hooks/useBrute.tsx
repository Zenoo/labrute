import { FullBrute } from '@labrute/core';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useAuth } from './useAuth';
import Server from '../utils/Server';
import { TournamentType } from '@labrute/prisma';
import moment from 'moment';
import { useNavigate } from 'react-router';

interface BruteContextInterface {
  brute: FullBrute | null,
  owner: boolean,
  updateBrute: (data: React.SetStateAction<FullBrute | null>) => void,
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
  const [brute, setBrute] = useState<FullBrute | null>(null);
  const navigate = useNavigate();

  // Owner?
  const owner = useMemo(() => !!(user && brute
    && user.brutes.find((b) => b.name === brute.name)), [user, brute]);

  const updateBrute = useCallback((data: React.SetStateAction<
    FullBrute | null
  >) => {
    setBrute(data);
  }, []);

  const fetchBrute = useCallback((name: string) => {
    Server.Brute.get({
      name,
      include: {
        master: true,
        body: true,
        colors: true,
        clan: true,
        user: true,
        tournaments: {
          where: {
            type: TournamentType.DAILY,
            date: moment.utc().startOf('day').toDate(),
          }
        }
      },
    }).then((data) => {
      setBrute(data as FullBrute);
    }).catch(() => {
      navigate('/unknown-brute');
    });
  }, [navigate]);

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
