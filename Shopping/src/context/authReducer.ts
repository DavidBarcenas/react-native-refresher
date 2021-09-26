import type { Status, User, LoginResponse } from '../types/loginResponse';

export type AuthState = {
  status: Status;
  token: string | null;
  errorMessage: string;
  user: User | null;
};

type AuthAction =
  | { type: 'signUp'; payload: LoginResponse }
  | { type: 'addError'; payload: string }
  | { type: 'removeError' }
  | { type: 'authenticationFail' }
  | { type: 'logout' };

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        user: null,
        status: 'not-authenticated',
        token: null,
        errorMessage: action.payload,
      };

    case 'removeError':
      return {
        ...state,
        errorMessage: '',
      };

    case 'signUp':
      return {
        ...state,
        errorMessage: '',
        status: 'authenticated',
        token: action.payload.token,
        user: action.payload.user,
      };

    case 'authenticationFail':
    case 'logout':
      return {
        ...state,
        errorMessage: '',
        status: 'not-authenticated',
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
