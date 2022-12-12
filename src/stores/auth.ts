/// Auth.tsx
import create from 'zustand';
import {persist} from 'zustand/middleware';
import {zustandStorage} from './utils';

export type TokenType = {
  access: string;
  refresh: string;
};

interface AuthState {
  token: TokenType | null;
  status: 'idle' | 'signOut' | 'signIn';
  signIn: (data: TokenType) => void;
  signOut: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      status: 'idle',
      token: null,
      signIn: token => {
        set({status: 'signIn', token});
      },
      signOut: () => {
        set({status: 'signOut', token: null});
      },
    }),
    {
      name: 'auth-store',
      getStorage: () => zustandStorage,
    },
  ),
);

export const signOut = () => useAuth.getState().signOut();
