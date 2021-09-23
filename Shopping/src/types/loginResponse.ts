export type LoginResponse = {
  user: User;
  token: string;
};

export type User = {
  rol: string;
  status: boolean;
  google: boolean;
  name: string;
  email: string;
  uid: string;
  img?: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type Status = 'checking' | 'authenticated' | 'not-authenticated';
