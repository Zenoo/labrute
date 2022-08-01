import { User } from '@eternaltwin/labrute-core/types';
import moment from 'moment';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import Server from '../utils/Server.js';

interface AuthContextInterface {
  user: User | null,
  authing: boolean,
  setAuthing: (authing: boolean) => void,
  signin: () => void,
  signout: () => void,
  updateData: (data: User) => void,
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
  const [user, setUser] = useState<User | null>(null);
  const [authing, setAuthing] = useState(false);

  const signin = useCallback(() => {
    const userId = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const expires = moment(localStorage.getItem('expires'));
    if (userId && token && !authing) {
      if (expires.isAfter(moment())) {
        setAuthing(true);
        Server.User.authenticate(userId, token).then((response) => {
          setUser(response);
          setAuthing(false);
        }).catch(() => {
          localStorage.clear();
          setAuthing(false);
        });
      } else {
        localStorage.clear();
        setAuthing(false);
      }
    }
  }, [authing]);

  const signout = useCallback(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  }, []);

  const updateData = useCallback((data: User) => {
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
