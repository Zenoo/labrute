import { UserWithBrutesBodyColor } from '@labrute/core';
import moment from 'moment';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import Server from '../utils/Server';
import { useLanguage } from './useLanguage';
import { FightModifier } from '@labrute/prisma';

interface AuthContextInterface {
  user: UserWithBrutesBodyColor | null,
  modifiers: FightModifier[],
  randomSkill: number | null,
  randomWeapon: number | null,
  authing: boolean,
  setAuthing: (authing: boolean) => void,
  signin: () => void,
  signout: () => void,
  updateData: (data: React.SetStateAction<UserWithBrutesBodyColor | null>) => void,
}

const AuthContext = React.createContext<AuthContextInterface>({
  user: null,
  modifiers: [],
  randomSkill: null,
  randomWeapon: null,
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
  const [randomSkill, setRandomSkill] = useState<number | null>(null);
  const [randomWeapon, setRandomWeapon] = useState<number | null>(null);
  const [user, setUser] = useState<UserWithBrutesBodyColor | null>(null);
  const [authing, setAuthing] = useState(false);
  const { setLanguage } = useLanguage();

  const signin = useCallback(() => {
    if (authing) return;
    setAuthing(true);

    const userId = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const expires = moment.utc(localStorage.getItem('expires'));
    if (userId && token) {
      if (expires.isAfter(moment.utc())) {
        Server.User.authenticate(userId, token).then((response) => {
          setUser(response.user);
          setModifiers(response.modifiers);
          setRandomSkill(response.randomSkill);
          setRandomWeapon(response.randomWeapon);
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
    randomSkill,
    randomWeapon,
    authing,
    setAuthing,
    signin,
    signout,
    updateData
  }), [authing, modifiers, randomSkill, randomWeapon, signin, signout, updateData, user]);

  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
};
