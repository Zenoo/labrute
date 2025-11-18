import { CalculatedBrute, getCalculatedBrute, Modifiers, refreshChaosSeeds, TOKEN_COOKIE, USER_COOKIE, UserWithBrutesBodyColor, Version } from '@labrute/core';
import { Event } from '@labrute/prisma';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { deleteCookie, getCookie } from '../utils/cookies';
import Server from '../utils/Server';
import { useAlert } from './useAlert';
import { useLanguage } from './useLanguage';

export type LoggedInUser = Omit<UserWithBrutesBodyColor, 'brutes'> & {
  brutes: CalculatedBrute[];
};

type AuthContextInterface = {
  user: LoggedInUser | null,
  modifiers: Modifiers,
  currentEvent: Event | null,
  authing: boolean,
  setAuthing: (authing: boolean) => void,
  signin: () => void,
  signout: () => void,
  updateData: (data: React.SetStateAction<LoggedInUser | null>) => void,
};

const AuthContext = React.createContext<AuthContextInterface>({
  user: null,
  modifiers: {},
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

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [modifiers, setModifiers] = useState<Modifiers>({});
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [user, setUser] = useState<LoggedInUser | null>(null);
  const [authing, setAuthing] = useState(false);
  const { setLanguage } = useLanguage();
  const Alert = useAlert();
  const { t } = useTranslation();

  const signin = useCallback(() => {
    if (authing || user) return;

    // Prevent OAuth loop
    const url = new URL(window.location.href);
    if (url.pathname === '/oauth/callback') {
      return;
    }

    setAuthing(true);

    const userId = getCookie(USER_COOKIE) ?? '';
    const token = getCookie(TOKEN_COOKIE) ?? '';

    Server.User.authenticate(userId, token).then((response) => {
      setModifiers(response.modifiers);
      refreshChaosSeeds(response.modifiers);
      setCurrentEvent(response.currentEvent);

      // Compare version
      if (response.version !== Version) {
        Alert.open('warning', t('outdatedVersion'));
      }

      if (!response.user) {
        deleteCookie(USER_COOKIE);
        deleteCookie(TOKEN_COOKIE);
        setAuthing(false);
        return;
      }

      const loggedInUser: LoggedInUser = {
        ...response.user,
        brutes: response.user.brutes.map((brute) => getCalculatedBrute(brute, response.modifiers)),
      };

      setUser(loggedInUser);
      setAuthing(false);

      // Update language
      setLanguage(response.user.lang);
    }).catch(() => {
      deleteCookie(USER_COOKIE);
      deleteCookie(TOKEN_COOKIE);
      setAuthing(false);
    });
  }, [Alert, authing, setLanguage, t, user]);

  const signout = useCallback(() => {
    deleteCookie(USER_COOKIE);
    deleteCookie(TOKEN_COOKIE);
    setUser(null);
  }, []);

  const updateData = useCallback((data: React.SetStateAction<LoggedInUser | null>) => {
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
  }), [authing, currentEvent, modifiers, signin, signout, updateData, user]);

  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
};
