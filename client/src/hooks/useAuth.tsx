import React, { useCallback, useContext, useMemo, useState } from 'react';
import Server, { User } from '../utils/Server';

interface AuthContextInterface {
  user: User | null,
  signout: () => void,
  updateData: (data: User) => void,
}

const AuthContext = React.createContext<AuthContextInterface>({
  user: null,
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

  const signin = useCallback((login: string, password: string) => {
    return Server.User.authenticate(login, password).then((response) => {
      localStorage.setItem('user', response.name);
      localStorage.setItem('token', response.token);
      setUser(response);
      return response;
    });
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
    signin,
    signout,
    updateData
  }), [signin, signout, updateData, user]);

  return (
    <AuthContext.Provider value={methods}>
      {children}
    </AuthContext.Provider>
  );
};
