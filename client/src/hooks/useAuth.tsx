import { UserWithBrutesBodyColor } from '@labrute/core';
import moment from 'moment';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import Server from '../utils/Server';
import { useLanguage } from './useLanguage';

interface AuthContextInterface {
  user: UserWithBrutesBodyColor | null,
  authing: boolean,
  setAuthing: (authing: boolean) => void,
  signin: () => void,
  signout: () => void,
  updateData: (data: React.SetStateAction<UserWithBrutesBodyColor | null>) => void,
}

const AuthContext = React.createContext<AuthContextInterface>({
  user: null,
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
          setUser(response);
          setAuthing(false);

          // Update language
          setLanguage(response.lang);
        }).catch(() => {
          localStorage.clear();
          setAuthing(false);
        });
      } else {
        localStorage.clear();
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
    authing,
    setAuthing,
    signin,
    signout,
    updateData
  }), [authing, signin, signout, updateData, user]);

  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
};
