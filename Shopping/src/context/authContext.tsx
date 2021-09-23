import React, { useReducer } from 'react';
import { createContext } from 'react';

import { AuthReducer } from './authReducer';
import type { LoginData, Status, User } from '../types/loginResponse';
import type { AuthState } from './authReducer';
import { LoginResponse } from '../types/loginResponse';

type ContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: Status;
  signIn: (loginData: LoginData) => void;
  signUp: () => void;
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
  const [state] = useReducer(AuthReducer, authInitialState);

  const signIn = ({ email }: LoginData): void => {
    const dummyResp: LoginResponse = {
      token: '',
      user: {
        rol: 'manager',
        status: true,
        google: false,
        name: 'David',
        email: email,
        uid: 'M-Y-U-I-D',
        img: '',
      },
    };
  };
  const signUp = (): void => {};
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
