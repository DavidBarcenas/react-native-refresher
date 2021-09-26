import React, { useReducer } from 'react';
import { createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthReducer } from './authReducer';
import type {
  LoginData,
  Status,
  User,
  LoginResponse,
} from '../types/loginResponse';
import type { AuthState } from './authReducer';

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
  const [state, dispatch] = useReducer(AuthReducer, authInitialState);

  const signIn = async ({ email }: LoginData): Promise<void> => {
    const dummyResp: LoginResponse = {
      token: 'asdasdfas564df867sdf',
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

    dispatch({ type: 'signUp', payload: dummyResp });
    await AsyncStorage.setItem('token', dummyResp.token);
  };

  const signUp = (): void => {};
  const logOut = (): void => {};

  const removeError = (): void => {
    dispatch({ type: 'removeError' });
  };

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
