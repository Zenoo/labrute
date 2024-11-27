import { UserWithBrutesBodyColor } from '@labrute/core';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import Server from '../utils/Server';
import { useLanguage } from './useLanguage';
import { Event, FightModifier } from '@labrute/prisma';
import dayjs from '../utils/dayjs';

interface AuthContextInterface {
  user: UserWithBrutesBodyColor | null,
  modifiers: FightModifier[],
  currentEvent: Event | null,
  authing: boolean,
  setAuthing: (authing: boolean) => void,
  signin: () => void,
  signout: () => void,
  updateData: (data: React.SetStateAction<UserWithBrutesBodyColor | null>) => void,
}

const AuthContext = React.createContext<AuthContextInterface>({
  user: null,
  modifiers: [],
  currentEvent: null,
  authing: false,
  setAuthing: () => {
    console.error('AuthContext.setAuthing() not implemented');
  },
  signin: () => {
    console.error('AuthContext.signin() not implemented');
  },
  signout: () => {
    console.error('AuthContext.signout() not implemented');
  },
  updateData: () => {
    console.error('AuthContext.updateData() not implemented');
  },
});

export function useAuth(): AuthContextInterface {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [modifiers, setModifiers] = useState<FightModifier[]>([]);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [user, setUser] = useState<UserWithBrutesBodyColor | null>(null);
  const [authing, setAuthing] = useState(false);
  const { setLanguage } = useLanguage();

  const signin = useCallback(() => {
    if (authing) return;
    setAuthing(true);

    const userId = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const expires = dayjs.utc(localStorage.getItem('expires'));
    if (userId && token) {
      if (expires.isAfter(dayjs.utc())) {
        Server.User.authenticate(userId, token).then((response) => {
          setUser(response.user);
          setModifiers(response.modifiers);
          setCurrentEvent(response.currentEvent);
          setAuthing(false);

          // Update language
          setLanguage(response.user.lang);
        }).catch(() => {
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          localStorage.removeItem('expires');
          setAuthing(false);
        });
      } else {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        setAuthing(false);
      }
    } else {
      setAuthing(false);
    }
  }, [authing, setLanguage]);

  const signout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  const updateData = useCallback((data: React.SetStateAction<UserWithBrutesBodyColor | null>) => {
    setUser(data);
  }, []);

  const methods = useMemo(() => ({
    user,
    modifiers,
    currentEvent,
    authing,
    setAuthing,
    signin,
    signout,
    updateData
  }), [authing, currentEvent, modifiers,
    signin, signout, updateData, user]);

  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
};
