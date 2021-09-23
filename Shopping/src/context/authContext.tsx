import React from 'react';
import { createContext } from 'react';

import type { User } from '../types/loginResponse';

type ContextProps = {
  errorMesssage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: () => void;
  signIn: () => void;
  logOut: () => void;
  removeError: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as ContextProps);

export const AuthProvider = ({ children }: ProviderProps): JSX.Element => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
