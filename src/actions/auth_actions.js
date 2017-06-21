import { AUTH_USER, UNAUTH_USER } from './types';

export const login = () => ({
  type: AUTH_USER
});

export const logout = () => ({
  type: UNAUTH_USER
});
