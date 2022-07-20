import React, { useCallback, useContext, useMemo, useState } from 'react';
import Server, { User } from '../utils/Server';

interface AuthContextInterface {
  user: User | null,
  authing: boolean,
  setAuthing: (authing: boolean) => void,
  signin: () => Promise<User | null>,
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
    return Promise.resolve(null);
  },
  signout: () => {
    console.error('AuthContext.signout() not implemented');
  },
  updateData: () => {
    console.error('AuthContext.updateData() not implemented');
  },
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [authing, setAuthing] = useState(false);

  const signin = useCallback(() => {
    setAuthing(true);
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    // TODO: Add expiry check here
    if (username && token) {
      return Server.User.authenticate(username, token).then((response) => {
        localStorage.setItem('user', response.name);
        localStorage.setItem('token', response.token);
        setUser(response);
        setAuthing(false);
        return response;
      });
    }
    return Promise.resolve(null);
  }, []);

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
