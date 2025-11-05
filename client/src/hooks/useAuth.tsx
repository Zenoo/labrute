import { TOKEN_COOKIE, USER_COOKIE, UserWithBrutesBodyColor, Version } from '@labrute/core';
import { Event, FightModifier } from '@labrute/prisma';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { deleteCookie, getCookie } from '../utils/cookies';
import Server from '../utils/Server';
import { useLanguage } from './useLanguage';
import { useAlert } from './useAlert';
import { useTranslation } from 'react-i18next';

interface AuthContextInterface {
  user: UserWithBrutesBodyColor | null,
  modifiers: FightModifier[],
  chaos: boolean,
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
  chaos: false,
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
  const Alert = useAlert();
  const { t } = useTranslation();

  const chaos = useMemo(() => modifiers.includes(FightModifier.chaos), [modifiers]);

  const signin = useCallback(() => {
    if (authing || user) return;
    setAuthing(true);

    const userId = getCookie(USER_COOKIE) ?? '';
    const token = getCookie(TOKEN_COOKIE) ?? '';

    Server.User.authenticate(userId, token).then((response) => {
      setModifiers(response.modifiers);
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

      setUser(response.user);
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

  const updateData = useCallback((data: React.SetStateAction<UserWithBrutesBodyColor | null>) => {
    setUser(data);
  }, []);

  const methods = useMemo(() => ({
    user,
    modifiers,
    chaos,
    currentEvent,
    authing,
    setAuthing,
    signin,
    signout,
    updateData
  }), [authing, chaos, currentEvent, modifiers, signin, signout, updateData, user]);

  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
};
