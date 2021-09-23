import React, { useReducer } from 'react';
import { createContext } from 'react';

import { AuthReducer } from './authReducer';
import type { Status, User } from '../types/loginResponse';
import type { AuthState } from './authReducer';

type ContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: Status;
  signUp: () => void;
  signIn: () => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as ContextProps);

export const AuthProvider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);

  const signUp = (): void => {};
  const signIn = (): void => {};
  const logOut = (): void => {};
  const removeError = (): void => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
